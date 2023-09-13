import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "60px" }}>
        <NavbarContainer />
      </div>
      <div style={{ backgroundColor: "blue", minHeight: "calc(100vh - 360px)" }}>
        <Outlet />
      </div>
      <div style={{ height: "300px" }}>
        <FooterContainer />
      </div>
    </div>
  );
};

export default Layout;
