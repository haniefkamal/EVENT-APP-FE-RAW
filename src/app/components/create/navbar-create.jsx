"use client";
import React from "react";
import Image from "next/image";
import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/assets/event.png";

function NavbarCreate() {
  return (
    <div className="top-0 z-50 flex">
      <div className="flex justify-center items-center py-5 px-4 bg-[#F2CD5C] shadow-md w-full">
        {/* Logo */}
        <Image src={logoevent} className="object-scale-down h-12 w-40" alt="" />
      </div>
    </div>
  );
}

export default NavbarCreate;
