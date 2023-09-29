import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";


const Menu = ({ menu, flexDirection }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: {xs: 'column', sm: "row", md: 'row'},
      alignItems: "center",
      paddingTop: {xs: "0%"}
    }}>
      {menu.map((item, index) => (
        
        <Link
          key={item.id}
          to={item.path}
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: index < menu.length - 1 ? "8px" : "0",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#D87D4A";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "white";
          }}
        >
          <Box sx={{padding: {xs: "10%"}}}><Typography variant="body1">{item.title}</Typography></Box>
        </Link>
      ))}
    </Box>
  );
};

export default Menu;

