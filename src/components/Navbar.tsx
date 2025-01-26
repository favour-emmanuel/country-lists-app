import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full lg:px-12 px-6 lg:py-5 py-5 bg-appWhite shadow-md flex justify-between items-center ">
      <h1 className="text-base md:text-[17.5px] font-bold text-appGreen">
        Where in the World ?
      </h1>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-sm">Change Theme</h2>
        <span className="text-lg">
          <Icon icon="ph:sun" />
        </span>
        {/* <span className="text-lg">
          <Icon icon="ri:moon-fill" />
        </span> */}
      </div>
    </div>
  );
};

export default Navbar;
