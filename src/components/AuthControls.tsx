import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
export default function AuthControls() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-white bg-blue-500 px-4 py-2 rounded-lg">
        LogIn
      </button>
      <button>
        <IoSunnyOutline size={"25px"} />
      </button>
    </div>
  );
}
