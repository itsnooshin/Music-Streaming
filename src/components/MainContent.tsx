import React, { useState, useRef, useEffect } from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import AuthControls from "@/components/AuthControls";
import { useTheme } from "@/context/ThemeContext";
import useFetchAlbums from "@/hooks/useFetchAlbums";
import Image from "next/image";
import { GoDownload } from "react-icons/go";

import {
  IoSearchOutline,
  IoSunnyOutline,
  IoSunny,
  IoPauseOutline,
  IoMoonOutline,
  IoMoon,
  IoPlayForwardOutline,
  IoPlayBackOutline,
  IoShuffle,
  IoDownloadOutline,
  IoPlayOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { play, setTrack } from "@/featuers/player/playerSlice";

export default function MainContent() {
  const { albums } = useFetchAlbums();

  
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
    <div className="hidden md:flex">
      <SideBar />
      <div className="flex-1 h-[100vh] relative">
        <div className="pl-[20%] pb-4 ">
          <div className="flex items-center px-4 py-2 justify-between gap-4">
            <SearchBar />
            <AuthControls />
          </div>
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
          <div className=" bg-slate-300 pt-4 h-25 pl-[20%] absolute w-full bottom-0">
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
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
