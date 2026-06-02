import { useLocation, useNavigate } from "@tanstack/react-router";
import { HomeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { MainButton } from "@/components/main-button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="flex-row justify-between">
        <MainButton />
        <div
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            open ? "opacity-50" : "pointer-events-none opacity-0",
          )}
        >
          <ModeToggle />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("nav.navigation")}</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={t("nav.home")}
                onClick={() => navigate({ to: "/home" })}
                isActive={location.pathname.startsWith("/home")}
              >
                <HomeIcon />
                <span>{t("nav.home")}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export { AppSidebar };
