import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Box } from "@mui/material";

const Menu = ({ menu }) => {
  return (
    <Box>
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
          {item.title}
        </Link>
      ))}
    </Box>
  );
};

export default Menu;
