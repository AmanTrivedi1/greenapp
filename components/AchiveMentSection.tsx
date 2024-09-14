"use clinent";
import React from "react";

const AchiveMentSection = () => {
  return (
    <div className="flex justify-between  sm:flex-row flex-col sm:gap-y-0 gap-y-4 p-4  ">
      <div className=" flex-col max-w-w-64 ">
        <p className="text-base text-primary-color-light">Achivements</p>
        <h1 className="text-2xl font-semibold">Delivering value since 2008</h1>
      </div>
      <div className="flex flex-col max-w-64 ">
        <h1 className="text-4xl text-secondry-color font-semibold">1050 MT</h1>
        <p>Growth Capacity Per Day</p>
      </div>
      <div className="flex flex-col max-w-64 ">
        <h1 className="text-4xl text-secondry-color font-semibold">98 %</h1>
        <p>Happy clients</p>
      </div>
      <div className="flex flex-col max-w-64 ">
        <h1 className="text-4xl text-secondry-color font-semibold">688 K</h1>
        <p>Sales of our Products</p>
      </div>
    </div>
  );
};

export default AchiveMentSection;
