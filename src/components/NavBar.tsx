"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assest/Vector.svg";
import {
  IoSunnyOutline,
  IoPlayOutline,
  IoSearchOutline,
  IoPauseOutline,
  IoPlayBackOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";
import { GrHomeRounded, GrFavorite, GrMenu } from "react-icons/gr";
import { TbMicrophone2 } from "react-icons/tb";
import { RiAlbumLine } from "react-icons/ri";
import { CgMusic } from "react-icons/cg";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import useFetchAlbums from "@/hooks/useFetchAlbums";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { play, setTrack } from "@/featuers/player/playerSlice";
export default function NavBar() {
  const { albums } = useFetchAlbums();
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const ToggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const dispatch = useDispatch();
  const { playing, currentTrack } = useSelector(
    (state: RootState) => state.player
  );
  console.log(currentTrack);
  const audioRef = useRef(null);
  const handlePlay = (item) => {
    if (audioRef.current) {
      audioRef.current.src = item.preview;
      audioRef.current.play();
    }
    dispatch(setTrack(item));
    dispatch(play());
  };
  useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.play();
    }
  }, [playing, currentTrack]);

  return (
    <>
      <nav className="">
        <div className="max-w-7xl md:hidden mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
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
            <div className="flex items-center gap-2 sm:hidden">
              <button onClick={toggleTheme}>
                <IoSunnyOutline size={"25px"} />
              </button>
              <button onClick={ToggleMenu}>
                <GrMenu size={"25px"} fontWeight={"900"} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 p-4  bg-white shadow-2xl md:hidden  transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={ToggleMenu}
            className="absolute top-4 right-4 text-black"
          >
            <RiCloseLine size={"25px"} />
          </button>

          <div className=" flex items-center flex-col  absolute top-12">
            <div className=" flex items-center gap-2">
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
            <h3 className="mt-5 font-[600] ">Disvover</h3>
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

                <h3 className="mt-4 font-[600] ">Library</h3>
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
        </div>
      </nav>

      <div className="md:hidden min-h-screen relative">
        <div className="px-6 mt-5">
          <h2 className="font-bold pb-6">Songs</h2>
          {albums.slice(0, 4).map((item, index: number) => (
            <div
              key={index}
              className="mb-7 flex items-center justify-between mr-5"
            >
              <div className="flex gap-2 items-center">
                <p className="text-center pr-5">{index + 1}</p>
                <Image
                  src={item.artist.picture_medium}
                  width={60}
                  height={60}
                  alt="Item for songs"
                  className="bg-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="font-bold">{item.title}</p>
                  <p>{item.artist.name}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <button onClick={() => handlePlay(item)}>
                  {currentTrack?.id === item.id && playing ? (
                    <IoPauseOutline size={"20px"} />
                  ) : (
                    <IoPlayOutline size={"20px"} />
                  )}
                </button>

                <button>
                  <GoDownload size={"20px"} />
                </button>
              </div>
            </div>
          ))}
        </div>
        {currentTrack && (
          <div className=" bg-slate-300 pt-4 h-30  absolute w-full bottom-0">
            <div className="flex gap-3 items-center justify-between">
              <div className="flex gap-3 items-center ">
                <Image
                  src={currentTrack.artist.picture_medium}
                  width={70}
                  height={70}
                  alt="Current track"
                  className="bg-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className=" font-bold">{currentTrack.title}</p>
                  <p>{currentTrack.artist.name}</p>
                </div>
              </div>
              <div>
                <button>
                  <IoPlayBackOutline size={"25px"} />
                </button>

                <button onClick={() => handlePlay(currentTrack)}>
                  {currentTrack?.id === currentTrack.id && playing ? (
                    <IoPauseOutline size={"20px"} />
                  ) : (
                    <IoPlayOutline size={"20px"} />
                  )}
                </button>
                <button>
                  <IoPlayForwardOutline size={"25px"} />
                </button>
              </div>
            </div>
          </div>
        )}
        <audio ref={audioRef} />
      </div>
    </>
  );
}
