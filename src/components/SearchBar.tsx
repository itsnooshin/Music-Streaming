import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  const { currentTheme } = useTheme();
  return (
    <div className=" w-[70%]  p-4 rounded-md">
      <div className="relative">
        <input
          type="search"
          placeholder="Search artist, title, album"
          className={` ${
            currentTheme === "light" ? "bg-white border" : "bg-[#171719] border border-slate-500"
          }  w-full p-3 pl-10  rounded-md focus:outline-none`}
        />
        <IoSearchOutline
          size={25}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}


