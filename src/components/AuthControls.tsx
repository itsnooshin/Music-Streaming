import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

export default function AuthControls() {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-4">
      <button className="text-white bg-blue-500 px-4 py-2 rounded-lg">
        LogIn
      </button>
      <button onClick={toggleTheme}>
        {currentTheme === "light" ? (
          <IoSunnyOutline size={"25px"} />
        ) : (
          <GoMoon size={"25px"} />
        )}
      </button>
    </div>
  );
}
