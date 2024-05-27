"use client";

import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface SourceAlbum {
  url: string;
  width: number;
  height: number;
}

interface CoverArt {
  sources: SourceAlbum[];
}
interface DateAlbum {
  year: number;
}
interface ProfileAlbum {
  name: string;
}

interface ProfileArray {
  name: string;
}

interface ArrayProfile {
  uri: string;
  profile: ProfileArray;
}

interface ArtistsData {
  items: ArrayProfile[];
}

interface Album {
  coverArt: CoverArt;
  date: DateAlbum;
  name: string;
  uri: string;
  artists: ArtistsData;
}
interface DATA {
  data: Album;
}
interface AllAlbums {
  items: DATA[];
}
interface SpotifyData {
  albums: AllAlbums;
}

interface Props {
  albumData: Album[];
}

export default function SliderMusic(props: PropsWithChildren<Props>) {
  const { albumData } = props;
  return (
    <>
      <div className=" flex  gap-4 w-full ">
        {albumData.slice(0, 5).map((item, index) => (
          <div key={index}>
            <Image
              src={item.coverArt.sources[0].url}
              alt={"Image for songs "}
              width={200}
              height={200}
              className="object-cover"
            />
            <div className=" flex flex-col">
              <p>
                {" "}
                {item.name.length >= 18
                  ? `${item.name.slice(0, 18)}...`
                  : `${item.name.slice(0, 18)}`}{" "}
              </p>

              {item.artists.items.map((item, index) => (
                <div key={index}>
                  {item.profile.name.length > 15
                    ? `${item.profile.name.slice(0, 7)}...`
                    : item.profile.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
