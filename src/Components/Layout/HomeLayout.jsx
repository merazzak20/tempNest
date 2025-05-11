import React, { useState } from "react";
import LeftDashboard from "../Shared/LeftDashboard";
import RightDashboard from "../Shared/RightDashboard";

const HomeLayout = () => {
  const [city, setCity] = useState("Dhaka");
  return (
    <div className="bg-sky-100 min-h-[100vh] grid grid-cols-1 md:grid-cols-12">
      {/* Left Side */}
      <div className="leftSide col-span-12 md:col-span-4">
        <LeftDashboard city={city} setCity={setCity}></LeftDashboard>
      </div>

      {/* Right Side */}
      <div className="rightSide col-span-12 md:col-span-8 p-4 lg:p-6">
        <RightDashboard city={city}></RightDashboard>
      </div>
    </div>
  );
};

export default HomeLayout;
