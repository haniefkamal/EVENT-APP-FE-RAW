"use client";
import React from "react";
import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/assets/event.png";
import Image from "next/image";

function UserLoginPage() {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen 
       text-sm p-3 bg-[#F2CD5C]"
      >
        <div className="flex flex-col">
          <Image className="max-w-xs w-full mb-5" src={logoevent} alt="" />

          <div className="font-bold mt-5">Email</div>
          <input
            className="drop-shadow-md p-3 bg-white rounded-lg  focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="email"
            type="email"
          />

          <div className="font-bold mt-5">Password</div>
          <input
            className=" drop-shadow-md p-3 bg-white rounded-lg  focus:outline-none focus:border-[#4F46E5] focus:ring-[#4F46E5] focus:ring-2"
            id="password"
            type="password"
          ></input>

          <div className=" mt-5 text-xs ">
            Don't have an account yet?{" "}
            <a href="/auth/register" className="text-[#4F46E5] font-bold">
              Register
            </a>
          </div>
          <button className="rounded-lg mt-1 text-[#F2CD5C] bg-black h-12 font-bold hover:bg-zinc-700">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}
export default UserLoginPage;
