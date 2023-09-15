import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../../../assets/img/logo_qnvapf.svg";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { menu } from "../../../routes/navigation";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={StyleSheet.navBarContainer}
        position="static"
        sx={{ backgroundColor: "secondary.main", margin: "0" }}
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
            <Box>
              {menu.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: index < menu.length - 1 ? "8px" : "0", // Adds spacing except for the last link
                  }}
                  // Apply hover color to the links
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#D87D4A"; // Primary.main color on hover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "white"; // Reset to white on mouseout
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
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
