import React from "react";
import Image from "next/image";
import Logo from "@/public/yumm_ai_logo.png";
import { MoonStar } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between h-12 mt-10 w-339.5 items-center">
      <div className="flex gap-5.5 items-center">
        <div>
          <Image src={Logo} alt={"Yummy AI Logo"} />
        </div>
        <ul className="flex gap-5.5 items-center">
          <li
            className="bg-[#6F8B15] rounded-lg text-white h-8.75 w-17.5 
                flex items-center justify-center pt-1 pb-1 pl-2 pr-2"
          >
            Home
          </li>
          <li>Every Items</li>
          <li>Cook Book</li>
          <li>Saved Recipes</li>
        </ul>
      </div>
      <div className="flex gap-2.5">
        <div className="w-12 h-12 rounded-full bg-[#D9D9D9] "></div>
        <div className="flex flex-col justify-around items-center">
          <div className="text-[14px] font-bold">Someone Doe</div>
          <p className="text-[11px]">user@gmail.com</p>
        </div>
        <span className="w-px h-12 bg-[#00000066]"></span>
        <div className="flex items-center">
          <MoonStar size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
