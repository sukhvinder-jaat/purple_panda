import React from "react";
import MyNav from "./MyNav";

export const Hero = () => {
  return (
    <div>
      <div className=" d-flex flex-column vh_100_between">
        <MyNav />
        <div className=" flex-grow-1 bg_backblack"></div>
      </div>
    </div>
  );
};
