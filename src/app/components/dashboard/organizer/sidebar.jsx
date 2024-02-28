"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import logoevent from "/Users/haniefkamal/Documents/Hanief's/Coding/JCWD 2604/EVENT APP/client/src/app/assets/event.png";
import Image from "next/image";
import Link from "next/link";

export function SidebarDashboard() {
  return (
    <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-[#F2CD5C]">
      <div className="mb-2 p-4 text-center w-full flex items-center justify-center ">
        {/* Logo */}
        <Image
          src={logoevent}
          className="object-scale-down h-12 w-40 "
          alt=""
        />
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          My Statistics
        </ListItem>

        {/* MY EVENTS */}
        {/* <Link href="/dashboard/my-event"> */}
        <ListItem>
          <ListItemPrefix>
            <CalendarDaysIcon className="h-5 w-5" />
          </ListItemPrefix>
          My Events
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        {/* </Link> */}

        {/* EXTRA */}
        {/* <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem> */}

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
