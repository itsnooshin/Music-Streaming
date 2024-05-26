import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className=" w-[70%]  p-4 rounded-md">
      <div className="relative">
        <input
          type="search"
          placeholder="Search artist, title, album"
          className=" w-full p-2 pl-10 border rounded-md focus:outline-none"
        />
        <IoSearchOutline
          size={25}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}
