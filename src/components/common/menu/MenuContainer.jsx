import React from 'react';
import Menu from './Menu'; // Make sure to adjust the import path
import { menu } from '../../../routes/navigation'; // Import the menu data

const MenuContainer = () => {
  return (
    <Menu menu={menu} />
  );
}

export default MenuContainer;

