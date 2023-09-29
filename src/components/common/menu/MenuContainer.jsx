import { menu } from "../../../routes/navigation"; // Import the menu data

import React from "react";
import Menu from "./Menu";

const MenuContainer = () => {
  return <Menu menu={menu}  />;
};

export default MenuContainer;
