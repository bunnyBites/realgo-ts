import { useLocation } from "react-router-dom";
import { SidebarView } from "./Sidebar.component.view";

export const Sidebar: React.FC = () => {
    const { pathname } = useLocation();

    return <SidebarView pathName={pathname} />;
}