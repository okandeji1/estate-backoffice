import { useState, useEffect } from "react";
import { Button } from "antd";
import AppSearch from "./app-search.component";

const MiniHeader = () => {
  return (
    <div className="bg-lightPrimary w-full mt-0 h-60">
      <h1 className="text-white text-2xl w-full flex justify-center p-2">
        Private Property
      </h1>
      <div className="flex w-full justify-center items-center p-4">
        <div className="flex justify-between items-center md:w-1/3">
          <Button className="w-24 md:w-56 h-12 rounded-lg bg-secondary font-bold text-white hover:bg-primary hover:text-white mx-2">
            Buy
          </Button>
          <Button className="w-24 md:w-56 h-12 rounded-lg bg-secondary font-bold text-white hover:bg-primary hover:text-white mr-2">
            Rent
          </Button>
          <Button className="w-24 md:w-56 h-12 rounded-lg bg-secondary font-bold text-white hover:bg-primary hover:text-white">
            Shortlets
          </Button>
        </div>
      </div>
      <div className="px-4 flex justify-center items-center w-full mt-0">
        <AppSearch className="w-full md:w-1/2 mt-0" />
      </div>
    </div>
  );
};

export default MiniHeader;
