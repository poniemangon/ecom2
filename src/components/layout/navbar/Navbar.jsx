import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuContainer from "../../common/menu/MenuContainer";
import img from "../../../assets/img/logo_qnvapf.svg";
import TemporaryDrawer from "./Drawer";
import ModalCustomContainer from "../../common/modal/ModalCustomContainer";
import { useState } from "react";
import { Typography } from "@mui/material";

const Navbar = ({ handleOpen, handleClose, open }) => {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar
        sx={{ backgroundColor: "secondary.main", margin: "0" }} // Use sx for styles
        position="static"
      >
        <Toolbar sx={{ backgroundColor: "secondary.main", display: "flex" }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              width: "100%",
              height: "64px",
              
              
              
            }}
          >
            <Box
              sx={{
                // visibility: "hidden",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, padding: "0%", margin: "0%" }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ height: "100%" }}></Box>
            </Box>
            <Box sx={{backgroundColor: {hover: ""}}}>
              <Link to="/">
                <img src={img} alt="" />
              </Link>
            </Box>

            <Box>
            <ShoppingCartOutlinedIcon onClick={handleOpen} />
              <ModalCustomContainer open={open} handleClose={handleClose} />
            </Box>
          </Box>

          <Box
            sx={{
              
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              // height: "100px",
              m: "0 auto",
              paddingLeft: {lg: "8%"},
              paddingRight: {lg: "8%"},
              paddingTop: "1.5%",
              paddingBottom: "1.5%",
              borderBottom: "0.1rem solid grey"
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
              <Link to="/">
                <img src={img} alt="" />
              </Link>
            </Box>

            <MenuContainer />

            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
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

              
              </Box>
              <Box sx={{margin: "5%"}}>
                <Typography variant={"subtitle1"}>|</Typography>
              </Box>
              
              <ShoppingCartOutlinedIcon  sx={{'&:hover': {cursor: 'pointer'}}} onClick={handleOpen} />
              <ModalCustomContainer open={open} handleClose={handleClose} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
