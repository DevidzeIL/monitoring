import * as React from "react";
import {
  LayoutDashboard,
  Shield,
  Package,
  BarChart3,
  FileText,
  AlertCircle,
  Video,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/hooks/use-language";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activePage?: string;
  onPageChange?: (page: string) => void;
  onTeamChange?: (team: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }) => void;
}

export function AppSidebar({
  activePage,
  onPageChange,
  onTeamChange,
  ...props
}: AppSidebarProps) {
  const { t, language } = useLanguage();
  
  const data = {
    teams: [
      {
        name: `${t.teams.site} #1`,
        logo: LayoutDashboard,
        plan: t.teams.active,
      },
      {
        name: `${t.teams.site} #2`,
        logo: LayoutDashboard,
        plan: t.teams.inactive,
      },
      {
        name: `${t.teams.site} #3`,
        logo: LayoutDashboard,
        plan: t.teams.inactive,
      },
    ],
    navMain: [
      {
        title: t.nav.overview,
        url: "#",
        icon: LayoutDashboard,
        id: "overview",
      },
      {
        title: t.nav.cameras,
        url: "#",
        icon: Video,
        id: "cameras",
      },
      {
        title: t.nav.ppe,
        url: "#",
        icon: Shield,
        id: "ppe",
      },
      {
        title: t.nav.cargo,
        url: "#",
        icon: Package,
        id: "cargo",
      },
      {
        title: t.nav.loading,
        url: "#",
        icon: BarChart3,
        id: "loading",
      },
      {
        title: t.nav.reports,
        url: "#",
        icon: FileText,
        id: "reports",
      },
      {
        title: t.nav.events,
        url: "#",
        icon: AlertCircle,
        id: "events",
      },
    ],
    user: {
      name: language === "en" ? "John Doe" : language === "de" ? "Hans Müller" : language === "es" ? "Juan García" : "Иван Иванов",
      email: language === "en" ? "john.doe@example.com" : language === "de" ? "hans.mueller@example.com" : language === "es" ? "juan.garcia@example.com" : "ivan@example.com",
      avatar: "",
    },
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} onTeamChange={onTeamChange} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={data.navMain}
          activePage={activePage}
          onPageChange={onPageChange}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
