"use client";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";

import SliderMusic from "@/components/SliderMusic";
import useFetchAlbums from "@/hooks/useFetchAlbums";
import LoadingSnipper from "./Loadingsnipper";

export default function TopMusic() {
  //   const { albums, loading } = useFetchAlbums();

  return (
    <>
      <div className="flex justify-between ">
        <h2 className=" font-bold text-[1.2rem] pb-5">Popular Albums</h2>
        <Link href="/">
          <p className=" pr-4 ">View All</p>
        </Link>
      </div>
      {/* <SliderMusic albumData={albums} /> */}
    </>
  );
}
