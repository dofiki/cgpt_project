import React from "react";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Pizza from "@/public/pizza.png";

const SearchBar = () => {
  return (
    <div className="pt-40">
      <div className="relative w-187.5 h-17.5">
        <input
          className="w-full h-full bg-[#E4E4E4] rounded-full text-center px-12 text-[18px]
          outline outline-[#b9b9b9] focus:outline-[#1f1f1f] transition-all delay-75 ease-in"
          placeholder="What do you want to eat?"
        />

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <Image src={Pizza} alt="pizza" />
        </span>

        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 w-12.5 h-12.5 bg-white 
                            flex justify-center items-center rounded-full "
        >
          <SlidersHorizontal />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
