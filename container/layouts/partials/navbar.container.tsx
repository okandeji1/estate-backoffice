/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
// import logo from "/images/logo.png";
import NavbarItem from "../../../components/navbar-item.component";
import { CloseOutlined, EllipsisOutlined, MoreOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItem = ["Buy", "Rent", "Sell", "Services"];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src="/images/logo.png" alt="Logo" className="w-10 md:w-1/5 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItem.map((item, index) => (
          <NavbarItem key={item + index} title={item} classProps="" />
        ))}
        <li className="bg-[#2952e3] py-2 px-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <MoreOutlined
            className="text-white md:hidden cursor-pointer font-bold"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <EllipsisOutlined
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <MoreOutlined onClick={() => setToggleMenu(false)} />
            </li>
            {navItem.map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
