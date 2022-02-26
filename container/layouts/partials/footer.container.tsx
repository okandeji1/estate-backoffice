/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center md:justify-center w-full flex-col p-4 gradient-bg-footer">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
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
        <div className="flex flex-1 flex-wrap justify-evenly items-center w-full mt-5 sm:mt-0">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Buy
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Rent
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Sell
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Services
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="text-white text-sm text-center">Come join us</p>
        <p className="text-white text-sm text-center">okandeji2012@gmail.com</p>
      </div>
      <div className="w-full sm:w-[90%] h-[0.25px] bg-gray-400 mt-5" />
      <div className="flex w-full sm:w-[90%] justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@kandesoft 2022</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
