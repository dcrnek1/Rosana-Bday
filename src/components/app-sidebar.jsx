import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    path: "inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    path: "calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    path: "search",
    icon: Search,
  },
  {
    title: "Settings",
    path: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { toggleSidebar, openMobile, isMobile } = useSidebar();

  const clickSideBarItem = () => {
    if (openMobile && isMobile) {
      toggleSidebar();
    }
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className='[&>svg]:size-6 [&>svg]:stroke-1' asChild onClick={clickSideBarItem}>
                      <Link to={item.path}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
