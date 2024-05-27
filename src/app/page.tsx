"use client";

import NavBar from "@/components/NavBar";
import MainContent from "@/components/MainContent";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { currentTheme } = useTheme();
  return (
    <>
      <div
        className={`${
          currentTheme === "light"
            ? "bg-white text-black"
            : "bg-[#171719] text-white"
        }`}
      >
        <NavBar />
        <MainContent />
        
      </div>
    </>
  );
}
