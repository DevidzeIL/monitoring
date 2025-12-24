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

// Данные для нашего дашборда
const data = {
  teams: [
    {
      name: "Площадка №1",
      logo: LayoutDashboard,
      plan: "Активна",
    },
    {
      name: "Площадка №2",
      logo: LayoutDashboard,
      plan: "Неактивна",
    },
    {
      name: "Площадка №3",
      logo: LayoutDashboard,
      plan: "Неактивна",
    },
  ],
  navMain: [
    {
      title: "Обзор",
      url: "#",
      icon: LayoutDashboard,
      id: "overview",
    },
    {
      title: "Камеры",
      url: "#",
      icon: Video,
      id: "cameras",
    },
    {
      title: "СИЗ и зоны",
      url: "#",
      icon: Shield,
      id: "ppe",
    },
    {
      title: "Груз",
      url: "#",
      icon: Package,
      id: "cargo",
    },
    {
      title: "Загрузка",
      url: "#",
      icon: BarChart3,
      id: "loading",
    },
    {
      title: "Отчёты",
      url: "#",
      icon: FileText,
      id: "reports",
    },
    {
      title: "События",
      url: "#",
      icon: AlertCircle,
      id: "events",
    },
  ],
  user: {
    name: "Иван Иванов",
    email: "ivan@example.com",
    avatar: "",
  },
};

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
