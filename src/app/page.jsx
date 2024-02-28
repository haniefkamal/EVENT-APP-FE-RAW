"use client";
import Image from "next/image";
import NavbarWeb from "./components/home/navbar";
import CarousellHome from "./components/home/carousell";
import FeaturedCards from "./components/home/featured";
import SectionFooter from "./components/home/footer";
import EventDetail from "./event-detail/page";
import CreateEvent from "./create/page";
import Checkout from "./components/transaction/checkout";
import TransactionPage from "./transcation/page";
import ExplorePage from "./explore/page";
import LoginPage from "./login/user/page";
import RegisterPage from "./register/page";
import UserLoginPage from "./login/user/page";
import OrganizerLoginPage from "./login/organizer/page";
import DashboardOrganizer from "./dashboard/page";

export default function Home() {
  return (
    <div>
      {/* <NavbarWeb /> */}
      {/* <RegisterPage /> */}
      {/* <OrganizerLoginPage /> */}
      {/* <UserLoginPage /> */}
      {/* <div className="home-wrapper bg-[#FBFBFB]"> */}
      <DashboardOrganizer />
      {/* <ExplorePage /> */}
      {/* <TransactionPage /> */}
      {/* <CreateEvent /> */}
      {/* <Checkout /> */}
      {/* <EventDetail /> */}
      {/* <CarousellHome />
        <FeaturedCards />
        <SectionFooter /> */}
      {/* </div> */}
    </div>
  );
}
