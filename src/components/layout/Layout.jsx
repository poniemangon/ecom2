import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Box >
        <NavbarContainer />
      </Box>
      <Box sx={{ backgroundColor: "secondary.second", minHeight: "calc(100vh - 360px)" }}>
        <Outlet />
      </Box>
      <Box sx={{ height: "300px" }}>
        <FooterContainer />
      </Box>
    </div>

  );
};

export default Layout;
