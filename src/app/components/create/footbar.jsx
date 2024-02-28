"use client";
import React from "react";
import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/assets/event.png";
import { Search, Calendar, Compass } from "react-feather";

function Footbar() {
  return (
    <div className="sticky bottom-0 z-50">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-16 pb-4 bg-[#F2CD5C] shadow-md ">
          {/* Logo - Hidden on small screens */}
          {/* <img
            src={logoevent}
            className="object-scale-down h-12 w-40 mb-4 md:mb-0 hidden md:block"
            alt=""
          /> */}

          {/* Menu Bar */}
          <div
            className="flex flex-col md:flex-row md:justify-end gap-4 items-center w-full"
            style={{ fontFamily: "Yeseva One" }}
          >
            <div className="flex justify-between w-full items-center">
              {/* Hide on small screens */}
              <div className=" flex-col ml-10 md:mb-0 hidden md:block">
                <div className="text-xl">
                  Stupendous!
                  <span className="text-sm font-thin ml-2">
                    One step closer to your event come true.
                  </span>
                </div>
              </div>
              {/* Center on small screens */}
              <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
                <button className="text-[#F2CD5C] hover:bg-zinc-700 bg-black py-2 px-4 rounded-lg">
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footbar;
