"use client";
import { React, useState } from "react";
import { DescriptionTabs } from "./tabs";
import { Rating } from "@material-tailwind/react";

function ContentDescription() {
  const [userRating, setUserRating] = useState(0);
  const handleRatingChange = (value) => {
    // Update the userRating state when the rating changes
    setUserRating(value);
  };

  return (
    <>
      <div className="event-section-container ">
        <div className="event-content-top-wrapper mb-5">
          {/* Section Left */}
          <div className="relative">
            <div className="w-[720px]">
              <DescriptionTabs />
            </div>
          </div>
          {/* Section Right */}
          <div className="relative items-center justify-center text-center">
            <div className="">
              <div>
                <Rating value={userRating} onChange={handleRatingChange} />
              </div>
              <div>from "{`___`}" users</div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentDescription;
