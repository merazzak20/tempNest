import React from "react";
import LeftDashboard from "../Shared/LeftDashboard";

const HomeLayout = () => {
  return (
    <div className="bg-sky-100 min-h-[100vh] grid grid-cols-12">
      <div className="leftSide col-span-4">
        <LeftDashboard></LeftDashboard>
      </div>
      <div className="rightSide col-span-8"></div>
    </div>
  );
};

export default HomeLayout;
