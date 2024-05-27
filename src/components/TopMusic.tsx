"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import SliderMusic from "@/components/SliderMusic";
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

// interface Artists {
//   item: ArtistsData[];
// }

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

export default function TopMusic() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://spotify23.p.rapidapi.com/search/?q=multi&type=multi&offset=0&limit=10&numberOfTopResults=5";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "71d6d216admshd1b884c07781003p166037jsn3da74db6783c",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result: SpotifyData = await response.json();

        const albumData = result.albums.items.map((item) => item.data);
        albumData.map((item) => {
          console.log(
            item.artists.items.map((itemsel) => itemsel.profile.name)
          );
        });

        albumData.map((item, index) => {
          console.log(item.coverArt.sources[0].url);
        });

        setAlbums(albumData);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-between ">
        <h2 className=" font-bold text-[1.2rem] pb-5">Popular Albums</h2>
        <Link href="/">
          <p className=" pr-4 ">View All</p>
        </Link>
      </div>
      <SliderMusic albumData={albums} />
    </>
  );
}
