import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../../../assets/img/logo_qnvapf.svg";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: {xs: "flex", md: "none"}}}>
            <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <img src={img} alt="" />
            <ShoppingCartOutlinedIcon />
          </Box>
          
          <Box sx={{ display: {xs: "none", md: "flex"}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <img src={img} alt="" />
            <div>
              <Link>HOME</Link>
              <Link>HEADPHONES</Link>
              <Link>SPEAKERS</Link>
              <Link>EARPHONES</Link>
            </div>

            <ShoppingCartOutlinedIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
