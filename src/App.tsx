import { useState, useEffect } from "react";
import type React from "react";
import { AppSidebar } from "./components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./components/ui/sidebar";
import OverviewPage from "./pages/OverviewPage";
import PPEAndZonesPage from "./pages/PPEAndZonesPage";
import CargoPage from "./pages/CargoPage";
import LoadingPage from "./pages/LoadingPage";
import ReportsPage from "./pages/ReportsPage";
import EventsPage from "./pages/EventsPage";
import CamerasPage from "./pages/CamerasPage";
import { useLanguage } from "./hooks/use-language";

function App() {
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState("");
  const [activePage, setActivePage] = useState("overview");
  const [selectedTeam, setSelectedTeam] = useState<{ name: string } | null>(
    null
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleTeamChange = (team: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }) => {
    setSelectedTeam(team);
  };

  const getPageTitle = () => {
    const pageTitles = {
      overview: t.pageTitles.overview,
      ppe: t.pageTitles.ppe,
      cargo: t.pageTitles.cargo,
      loading: t.pageTitles.loading,
      reports: t.pageTitles.reports,
      events: t.pageTitles.events,
      cameras: t.pageTitles.cameras,
    };
    const baseTitle = pageTitles[activePage as keyof typeof pageTitles] || pageTitles.overview;
    if (activePage === "overview" && selectedTeam) {
      // Extract site number from name (e.g., "Site #1" -> "#1" or "Площадка №1" -> "№1")
      const match = selectedTeam.name.match(/([№#]\d+)/);
      if (match) {
        return `${t.pageTitles.overview} ${match[0]}`;
      }
      return `${baseTitle} • ${selectedTeam.name}`;
    }
    return baseTitle;
  };

  const renderPage = () => {
    switch (activePage) {
      case "overview":
        return <OverviewPage />;
      case "ppe":
        return <PPEAndZonesPage />;
      case "cargo":
        return <CargoPage />;
      case "loading":
        return <LoadingPage />;
      case "reports":
        return <ReportsPage />;
      case "events":
        return <EventsPage />;
      case "cameras":
        return <CamerasPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        activePage={activePage}
        onPageChange={handlePageChange}
        onTeamChange={handleTeamChange}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center justify-between flex-1">
            <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
            <div className="text-sm text-muted-foreground">
              {t.common.updated}: {currentTime}
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
          {renderPage()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
