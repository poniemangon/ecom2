import { menu } from "../../../routes/navigation"; // Import the menu data

import React from "react";
import Menu from "./Menu";

const MenuContainer = ({ flexDirection }) => {
  return <Menu menu={menu} flexDirection={flexDirection} />;
};

export default MenuContainer;
