"use client";
import React from "react";
import NavbarWeb from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/components/home/navbar.jsx";
import SectionFooter from "../components/home/footer";
import ContentTop from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/components/detail/top.jsx";
import ContentDescription from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/components/detail/description.jsx";

function EventDetail() {
  return (
    <>
      <NavbarWeb />
      <div className="home-wrapper bg-[#FBFBFB]">
        <ContentTop />
        <ContentDescription />
      </div>
      <SectionFooter />
    </>
  );
}
export default EventDetail;
