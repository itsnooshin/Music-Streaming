import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import Link from "next/link";
import { TbMicrophone2 } from "react-icons/tb";
import { RiAlbumLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { CgMusic } from "react-icons/cg";
import { IoSearchOutline, IoSunnyOutline } from "react-icons/io5";
import Logo from "../../public/assest/Vector.svg";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
export default function SideBar() {
  const { currentTheme } = useTheme();
  return (
    //bg-[#F9F9F9]
    <div
      className={` ${
        currentTheme === "light"
          ? "bg-[#F9F9F9] border border-r border-gray-200"
          : " bg-[#212124] border-none"
      }  w-[19%] p-5 `}
    >
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="Logo for website"
          priority
          className=" bg-cover"
        />
        <h3
          className=" bg-clip-text text-transparent "
          style={{
            backgroundImage: "linear-gradient(90deg, #3b82f6, #9333ea)",
          }}
        >
          <span className=" font-bold">Musi</span>verse
        </h3>
      </div>
      <h3 className="mt-9 font-[600] ">Disvover</h3>
      <nav>
        <ul>
          <Link href={"/"}>
            <div className=" flex items-center ml-4 mt-4 text-[#999999] font-[500]  ">
              <GrHomeRounded fontWeight={"700"} />

              <li className=" mb-2 pl-3 pt-2">Home</li>
            </div>
          </Link>
          <Link href={"/"}>
            <div className=" flex items-center ml-4 mt-4 text-[#999999] font-[500]  ">
              <TbMicrophone2 fontWeight={"700"} fontSize={"20px"} />

              <li className=" mb-2 pl-3 pt-2">Artists</li>
            </div>
          </Link>
          <Link href={"/"}>
            <div className=" flex items-center ml-4 mt-4 text-[#999999] font-[500]  ">
              <RiAlbumLine fontWeight={"700"} fontSize={"20px"} />

              <li className=" mb-2 pl-3 pt-2">Album</li>
            </div>
          </Link>

          <h3 className="mt-9 font-[600] ">Library</h3>
          <Link href={"/"}>
            <div className=" flex items-center ml-4 mt-4 text-[#999999] font-[500]  ">
              <GrFavorite fontWeight={"700"} fontSize={"20px"} />

              <li className=" mb-2 pl-3 pt-2">Favourit</li>
            </div>
          </Link>
          <Link href={"/"}>
            <div className=" flex items-center ml-4 mt-4 text-[#999999] font-[500]  ">
              <CgMusic fontWeight={"700"} fontSize={"20px"} />

              <li className=" mb-2 pl-3 pt-2">PlayList</li>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
