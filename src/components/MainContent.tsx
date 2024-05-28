import React, { useState, useRef, useEffect } from "react";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import AuthControls from "@/components/AuthControls";
import { useTheme } from "@/context/ThemeContext";
import useFetchAlbums from "@/hooks/useFetchAlbums";
import Image from "next/image";
import { GoDownload } from "react-icons/go";

import {
  IoPauseOutline,
  IoPlayForwardOutline,
  IoPlayBackOutline,
  IoPlayOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { pause, play, setTrack } from "@/featuers/player/playerSlice";
import { DataAlbum } from "@/types/AlbumDataTypes";
export default function MainContent() {
  const { albums } = useFetchAlbums();
  const { currentTheme } = useTheme();
  const dispatch = useDispatch();
  const { playing, currentTrack } = useSelector(
    (state: RootState) => state.player
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const handlePlay = (item: DataAlbum) => {
    if (audioRef.current) {
      audioRef.current.src = item.preview;
      audioRef.current.play();
    }
    dispatch(setTrack(item));
    dispatch(play());
  };

  const handlePause = (item: DataAlbum) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    dispatch(setTrack(item));
    dispatch(pause());
  };
  return (
    <div className="hidden md:flex">
      <SideBar />
      <div className="flex-1 h-[100vh] relative">
        <div className="pl-[20%] pb-4 ">
          <div className="flex items-center px-4 py-2 justify-between gap-4">
            <SearchBar />
            <AuthControls />
          </div>
          <div className=" mb-36">
            {albums.map((item, index: number) => (
              <div
                key={index}
                className="mb-7 flex items-center justify-between mr-5  "
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
                  {currentTrack?.id === item.id && playing ? (
                    <button onClick={() => handlePause(item)}>
                      <IoPauseOutline size={"20px"} />
                    </button>
                  ) : (
                    <button onClick={() => handlePlay(item)}>
                      {" "}
                      <IoPlayOutline size={"20px"} />
                    </button>
                  )}

                  <button>
                    <GoDownload size={"20px"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentTrack && (
          <div
            className={`${
              currentTheme === "light" ? " bg-gray-300 backdrop-filter backdrop-blur-xl border border-gray-100 bg-opacity-10" : "bg-black"
            }   pt-4 h-25 pl-[20%] fixed bottom-0 w-full `}
          >
            <div className="flex  items-center gap-64">
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
              <div className=" flex gap-5 items-center">
                <button>
                  <IoPlayBackOutline size={"25px"} />
                </button>

                {currentTrack?.id === currentTrack.id && playing ? (
                  <button onClick={() => handlePause(currentTrack)}>
                    <IoPauseOutline size={"20px"} />
                  </button>
                ) : (
                  <button onClick={() => handlePlay(currentTrack)}>
                    {" "}
                    <IoPlayOutline size={"20px"} />
                  </button>
                )}

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
