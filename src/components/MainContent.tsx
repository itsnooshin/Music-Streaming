import React from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import AuthControls from "@/components/AuthControls";
export default function MainContent() {
  return (
    <div className="hidden md:flex h-screen">
      <SideBar />
      <div className="bg-white flex-1">
        <div className="  flex items-center px-4 py-2  justify-between gap-4 border-b border-gray-100  ">
          <SearchBar />
          <AuthControls />
        </div>
      </div>
    </div>
  );
}
