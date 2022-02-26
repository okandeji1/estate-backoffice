/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setShowAuthenticateUser } from "../../../store/slices/app-settings.slice";
import NavbarItem from "../../../components/navbar-item.component";
import {
  CloseOutlined,
  EllipsisOutlined,
  MenuOutlined,
  MoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
const AuthenticateUser = dynamic(
  () => import("../../../components/authenticate-user")
);

const Navbar = () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState<any>();
  const showAuth = (action: any) => {
    setAction(action);
    dispatch(setShowAuthenticateUser({ action: action, visible: true }));
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItem = ["Buy", "Rent", "Sell", "Services"];

  return (
    <>
      <AuthenticateUser action={action} />

      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          {/* <img
            src="/images/logo.png"
            alt="Logo"
            className="w-10 md:w-1/5 cursor-pointer"
          /> */}
          <Link href="/">
            <h1 className="text-primary uppercase text-lg font-bold">
              KANDESOFT
            </h1>
          </Link>
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {navItem.map((item, index) => (
            <NavbarItem key={item + index} title={item} classProps="" />
          ))}
          <li className="bg-[#2952e3] py-2 px-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <UserOutlined onClick={() => showAuth("LOGIN")} />
          </li>
        </ul>
        <IconStyled className="flex relative">
          {toggleMenu ? (
            <CloseOutlined
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuOutlined
              //@ts-ignore
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <CloseOutlined onClick={() => setToggleMenu(false)} />
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
        </IconStyled>
      </nav>
    </>
  );
};

const IconStyled = styled.div`
  .anticon svg {
    font-size: 3rem;
  }
`;

export default Navbar;
