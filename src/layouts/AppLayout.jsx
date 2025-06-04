import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full flex flex-row justify-center">
        <SidebarProvider className="flex flex-row w-ful">
          <AppSidebar />
          <main className="px-4 py-1 w-full justify-between">
            <div className="flex flex-row gap-2 justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <SidebarTrigger className="[&>svg]:size-10 size-10 -ml-2!" />
                <div>Name of the app</div>
              </div>
              <div>Košarica</div>
            </div>
            <div className="">
              <Outlet />
            </div>
          </main>
        </SidebarProvider>
    </div>
  );
}
