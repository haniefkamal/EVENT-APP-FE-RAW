"use client";
import React from "react";
import { SidebarDashboard } from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/components/dashboard/organizer/sidebar.jsx";
import NavbarDashboardOrganizer from "../components/dashboard/organizer/navbar";

function DashboardOrganizer() {
  const dashboardCards = [
    {
      id: 1,
      title: "Active Event(s)",
      value: 10000,
    },
    {
      id: 2,
      title: "Total Transaction(s)",
      value: 20000,
    },
    {
      id: 3,
      title: "Ticket Sold",
      value: 20000,
    },
    {
      id: 4,
      title: "Total Revenue",
      price: 223590000,
    },
    {
      id: 5,
      title: "Total Guest",
      value: 152000,
    },
  ];

  //   const price = (dashboardCards.price) => {
  // new Intl.NumberFormat("id-ID", {
  //   style: "currency",
  //   currency: "IDR",
  //   minimumFractionDigits: 0,
  // }).format(price)};

  return (
    <>
      <div className="flex min-h-screen">
        <SidebarDashboard />
        <div className="w-full">
          <NavbarDashboardOrganizer />

          {/* ISI CONTENT DASHBOARD */}
          <div className="w-full">
            <div className="grid grid-cols-3 mt-6 gap-y-6">
              {dashboardCards.map((dashboardCard) => (
                <div key={dashboardCard.id} className="px-6 ">
                  <div className="w-[300px]">
                    <div className="px-2 py-3 border-[1px] rounded-md ">
                      <div className="text-gray-400">{dashboardCard.title}</div>
                      <div className="text-xl pt-3 border-t">
                        {/* GIMANA MASUKIIN REVENUE ? TAPI DALAM LOOPING*/}
                        {}{" "}
                        {dashboardCard.value
                          ? dashboardCard.value
                          : `Rp ${Number(
                              dashboardCard.price | 0
                            ).toLocaleString("id-ID")}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="px-6 "></div>
            </div>
          </div>
          {/* END DASHBOARD */}
        </div>
      </div>
    </>
  );
}
export default DashboardOrganizer;
