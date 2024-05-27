import React from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import AuthControls from "@/components/AuthControls";
import TopMusic from "@/components/TopMusic";
import TopSongs from "./TopSongs";
import { useTheme } from "@/context/ThemeContext";
export default function MainContent() {
  
  return (
    <div className="hidden md:flex h-screen ">
      <SideBar />

      <div className=" flex-1">
        <div className="  flex items-center px-4 py-2  justify-between gap-4 ">
          <SearchBar />
          <AuthControls />
        </div>

        <div className="py-5 pl-4 container mx-auto">
          <TopMusic />
        </div>
        <div className="py-5 pl-4 container mx-auto">
          <TopSongs />
        </div>
      </div>
    </div>
  );
}
