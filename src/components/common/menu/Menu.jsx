import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";


const Menu = ({ menu, flexDirection }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: flexDirection, // Use the flexDirection prop to set the layout
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
          <Typography variant="body1">{item.title}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Menu;

