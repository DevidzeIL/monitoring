import { useState, useEffect } from "react";
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

const pageTitles: Record<string, string> = {
  overview: "Единый дашборд состояния строительной площадки",
  ppe: "Контроль СИЗ и опасных зон",
  cargo: "Контроль операций с грузом",
  loading: "Загрузка крана и эффективность",
  reports: "Отчёты о работе",
  events: "Журнал событий",
  cameras: "Мониторинг камер",
};

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [activePage, setActivePage] = useState("overview");

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
      <AppSidebar activePage={activePage} onPageChange={handlePageChange} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center justify-between flex-1">
            <h1 className="text-xl font-semibold">
              {pageTitles[activePage] || pageTitles.overview}
            </h1>
            <div className="text-sm text-muted-foreground">
              Обновлено: {currentTime}
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
