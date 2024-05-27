import Link from "next/link";
import React from "react";

export default function TopSongs() {
  return (
    <>
      <div className="flex justify-between ">
        <h2 className=" font-bold text-[1.2rem] pb-5">Top Songs</h2>
        <Link href="/">
          <p className=" pr-4 ">View All</p>
        </Link>
      </div>
       
    </>
  );
}
