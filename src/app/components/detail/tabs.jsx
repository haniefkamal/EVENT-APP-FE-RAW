"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function DescriptionTabs() {
  const [activeTab, setActiveTab] = React.useState("description");

  const data = [
    {
      label: "Description",
      value: "description",
      desc: `Welcome to the enchanting world of Ghibli Orchestra in Jakarta – an unforgettable musical journey through the timeless melodies of Studio Ghibli's most beloved animated masterpieces.
Immerse yourself in the magical realm of Hayao Miyazaki's iconic films as the Ghibli Orchestra brings to life the enchanting scores that have captured hearts worldwide. This spectacular orchestral performance promises to transport you to the whimsical landscapes of Ghibli classics, such as "Spirited Away," "My Neighbor Totoro," and "Howl's Moving Castle.
"Prepare to be spellbound as the orchestra weaves a symphony of emotion, seamlessly blending the nostalgia of Ghibli's storytelling with the grandeur of a live musical experience. From the delicate piano notes of "Castle in the Sky" to the spirited compositions of "Princess Mononoke," each piece will be performed with precision, passion, and a touch of Ghibli magic.`,
    },
    {
      label: "Comments",
      value: "comments",
      desc: `This is reserved for comments section.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#F2CD5C] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900 font-bold" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="text-black text-justify"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
