//? React
import React from "react";

//? Router
import { NavLink } from "react-router-dom";

//? Data
import menuItems from "../data/menuItemsData";

const SideMenu = ({ closeSideMenu }) => {
  return (
    <div className="flex flex-col justify-center gap-5 w-full h-full items-center bg-white">
      {menuItems.map((item) => (
        <NavLink
          to={item.url}
          className="px-4 py-2 rounded-lg font-bold text-slate-900 focus:bg-slate-900 focus:text-white"
          onClick={closeSideMenu}
          key={item.title}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default SideMenu;
