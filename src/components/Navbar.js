//? React
import React, { useState } from "react";

//? Images
import logo from "../assets/sf-logo.svg";
import name from "../assets/sf-name.svg";

//? Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaPlus } from "react-icons/fa";

//? Router
import { Link, NavLink } from "react-router-dom";

//? Data
import menuItems from "../data/menuItemsData";

//? Stores
import menuStore from "../store/menuStore";

//? Components
import SideMenu from "./SideMenu";
import AddMenuItemModal from "./AddMenuItemModal";
import { observer } from "mobx-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const [isAdmin, setIsAdmin] = useState(false);
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false);

  const handleSideMenu = () => setShowMenu("flex");
  const closeSideMenu = () => setShowMenu("hidden");

  const handleLogin = () => {
    setLogin(false);
    setIsAdmin(true);
  };
  const handleLogout = () => {
    setLogin(true);
    setIsAdmin(false);
  };

  console.log(menuStore);

  return (
    <nav className="flex justify-between items-center w-full p-6 ">
      <div className="">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className=" w-12  fi" />
          <img src={name} alt="" className="h-5  hidden md:block" />
        </Link>
      </div>
      <div className="">
        <div className=" hidden md:flex">
          {menuStore.map((menu) => (
            <NavLink
              to={menu.url}
              className="px-4 py-2 rounded-xl font-bold text-slate-900 focus:bg-slate-900 focus:text-white"
              key={menu.title}
            >
              {menu.title}
            </NavLink>
          ))}

          {isAdmin && (
            <button
              className="text-slate-900 px-4 py-2 ml-2 rounded-xl hover:bg-slate-900 hover:text-white"
              onClick={() => setOpen(true)}
            >
              <FaPlus />
            </button>
          )}

          <AddMenuItemModal open={open} setOpen={setOpen} />

          {login ? (
            <button
              className="text-slate-900 px-4 py-2 ml-2 rounded-xl font-bold border-2 hover:bg-slate-900 hover:text-white"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="text-slate-900 px-4 py-2 ml-2 rounded-xl font-bold border-2 hover:bg-slate-900 hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu
            size={24}
            className="text-slate-900 cursor-pointer"
            onClick={handleSideMenu}
          />
        </div>
        <div
          className={` md:hidden ${showMenu} justify-center items-center bg-zinc-50 absolute top-0 right-0 bottom-0 left-0 transition duration-200 ease-in-out`}
        >
          <FaTimes
            size={20}
            className=" absolute top-6 right-6 cursor-pointer"
            onClick={closeSideMenu}
          />
          <SideMenu closeSideMenu={closeSideMenu} />
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
