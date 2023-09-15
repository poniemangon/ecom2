import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuContainer from "../../common/menu/MenuContainer";
import img from "../../../assets/img/logo_qnvapf.svg";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "secondary.main", margin: "0" }} // Use sx for styles
        position="static"
      >
        <Toolbar sx={{ backgroundColor: "secondary.main" }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
                <img src={img} alt="" />
              </IconButton>
            </Box>
            <Box sx={{ width: "100%" }}></Box>
            <Box>
              <ShoppingCartOutlinedIcon />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              margin: "100px",
              m: "0 auto",
            }}
          >
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <img src={img} alt="" />
            </Box>

            <MenuContainer /> 
            
            <Box>
              <Link
                to="/register"
                style={{
                  color: "#D87D4A",
                  textDecoration: "none",
                  marginRight: "8px",
                }}
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  color: "#D87D4A",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              <ShoppingCartOutlinedIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
