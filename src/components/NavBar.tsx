import React from "react";
import Image from "next/image";
import Logo from "../../public/assest/Vector.svg";
import MenuBar from "@/components/MenuBar";
import { IoSunnyOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <>
      <div className="flex px-4 pt-2 py-2 items-center justify-between border  md:hidden bg-white shadow-2xl ">
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

          <div className="flex items-center gap-2"></div>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <IoSunnyOutline size={"25px"} />
          </button>

          <button>
            <MenuBar />
          </button>
        </div>
      </div>
    </>
  );
}
