import Topbar from "../topbar/Topbar";
import SideBarNews from "../sidebarNews/SideBarNews";
import SidebarFilters from "../sidebarFilters/SidebarFilters";

export const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <SideBarNews />
      <div className="page">{children}</div>
      <SidebarFilters />
    </div>
  );
};
