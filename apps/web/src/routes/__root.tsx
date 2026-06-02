import { a11yDevtoolsPlugin } from "@tanstack/devtools-a11y/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { AppSidebar } from "@/components/app-sidebar";
import { useTheme } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const Route = createRootRoute({ component: Index });

function Index() {
  const { resolved } = useTheme();

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 py-2">
          <Outlet />
        </main>
      </SidebarProvider>
      <Toaster richColors theme={resolved} />
      <TanStackDevtools
        plugins={[
          a11yDevtoolsPlugin(),
          {
            name: "TanStack Query",
            render: <ReactQueryDevtoolsPanel />,
          },
          {
            name: "TanStack Router",
            render: () => <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}

export { Route };
