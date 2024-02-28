"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/assets/event.png";
import { Search, Calendar, Compass } from "react-feather";

function NavbarWeb() {
  return (
    <div className="sticky top-0 z-50 hidden md:flex">
      <div className="flex justify-between items-center py-5 px-16 pb-4 bg-[#F2CD5C] shadow-md w-full">
        {/* Logo */}
        <Image src={logoevent} className="object-scale-down h-12 w-40" alt="" />

        {/* Long Search Bar */}
        <div className="flex-grow mx-16">
          <label className="relative block">
            <input
              className="placeholder:text-black italic bg-white w-full border border-none rounded-md py-2 pl-2 pr-12 shadow-md focus:outline-none focus:border-[#FFCE00] focus:ring-[#FFCE00] focus:ring-1 sm:text-sm text-black"
              style={{ fontFamily: "Poppins" }}
              placeholder="Looking for event?"
              type="text"
              name="search bar"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-2">
              <div className="flex items-center justify-center h-5 w-5 text-white">
                <Search color="black" size={20} />
              </div>
            </button>
          </label>
        </div>

        {/* Menu Bar*/}
        <div
          className="flex gap-8 text-base items-center"
          style={{ fontFamily: "Yeseva One" }}
        >
          <div className="flex justify-between gap-1 items-center">
            <Link href="/create" className="flex flex-row gap-1">
              <div className="menu-item">
                <Calendar size={20} />
              </div>
              <div>Create Event</div>
            </Link>
          </div>

          <div className="flex justify-between gap-1 items-center">
            <Link href="/explore" className="flex flex-row gap-1">
              <div className="menu-item">
                <Compass size={20} />
              </div>
              <div className="menu-item">Explore</div>
            </Link>
          </div>

          <div className="flex" style={{ fontFamily: "Yeseva One" }}>
            <button className="border-solid border-2 border-black  hover:bg-[#FFCE00] py-2 px-4 rounded-lg mr-4">
              Login
            </button>
            <button className="   text-[#F2CD5C] hover:bg-zinc-700 bg-black py-2 px-4 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWeb;
