"use clinent";
import React from "react";

const AchiveMentSection = () => {
  return (
    <div className="grid grid-cols-1 p-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="fleex flex-col sm:w-64 w-full">
        <p className="text-base text-primary-color-light">Achivements</p>
        <h1 className="text-2xl ">Delivering value since 2008</h1>
      </div>
      <div className="flex flex-col sm:w-64 w-full">
        <h1 className="text-4xl text-secondry-color">1050 MT</h1>
        <p>Growth Capacity Per Day</p>
      </div>
      <div className="flex flex-col sm:w-64 w-full">
        <h1 className="text-4xl text-secondry-color">98 %</h1>
        <p>Happy clients</p>
      </div>
      <div className="flex flex-col sm:w-64 w-full">
        <h1 className="text-4xl text-secondry-color">688 K</h1>
        <p>Sales of our Products</p>
      </div>
    </div>
  );
};

export default AchiveMentSection;
