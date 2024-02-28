"use client";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { Calendar } from "react-feather";

function NavbarDashboardOrganizer() {
  return (
    <div className="w-full">
      <div className="sticky top-0 z-50 hidden md:flex">
        <div className="flex justify-between items-center py-5 px-16 pb-4 bg-white shadow-md w-full">
          <div className="text-xl font-medium">Dashboard</div>

          {/* Menu Bar*/}
          <div
            className="flex gap-8 text-base items-center"
            style={{ fontFamily: "Yeseva One" }}
          >
            <div className="w-full items-center">
              <div className="flex" style={{ fontFamily: "Yeseva One" }}>
                <button className="border-solid border-2 border-black  hover:bg-[#FFCE00] py-2 px-4 rounded-lg mr-4">
                  <Link href="/create" className="flex flex-row gap-2">
                    <div className="menu-item">
                      <Calendar size={20} />
                    </div>
                    <div>Create Event</div>
                  </Link>
                </button>

                {/* Admin */}
                <div className="flex items-center gap-2  border-black">
                  <div className="w-full">
                    {/* NOTE!! // ISI SRC IMG AVATAR IKUTIN DATABASE AVATAR ADMIN */}
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                      withBorder={true}
                      className="p-0.5"
                    />
                  </div>
                  <div>
                    <div className="max-w-[200px]">
                      <div className="truncate">
                        Hello,{" "}
                        {/* NOTE!! // ISI USERNAME IKUTIN DATABASE USERNAME ADMIN */}
                        [username admin as organizer]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDashboardOrganizer;
