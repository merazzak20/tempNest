import React, { useEffect, useState } from "react";
import Container from "./Container";
import logo from "../../../src/assets/logo1.png";
import { FaSearch } from "react-icons/fa";
// import clear from "../../assets/clear.png";
import Weather from "./Weather";

const LeftDashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="bg-gradient-to-t from-cyan-100 to-cyan-200 min-h-[100vh]">
      <Container>
        <div className="flex gap-2 items-center py-3 text-center">
          <img className="w-[300px]" src={logo} alt="Wheater Update" />
          {/* <div>
            <p className="text-3xl font-extrabold ">TempNest</p>
            <p className="text-[14px]">Stay Cozy, Stay Informed.</p>
          </div> */}
        </div>
        {/* Search bar */}
        <div className="flex flex-row gap-2 my-9 text-center">
          <label className="input py-2 bg-transparent border-1 border-[#074460] focus:border-none rounded-full">
            <input
              className=" text-gray-700 text-lg py-2"
              type="text"
              placeholder="London"
              required
            />
          </label>
          <button className="btn bg-transparent border-1 border-[#074460] text-[#074460] rounded-full shadow-none">
            <FaSearch className="text-xl " />
          </button>
        </div>

        {/* weather */}
        <Weather city="Dhaka"></Weather>

        {/* Current Date and Time */}
        <div className="text-center mt-6">
          <p className="text-[#074460] text-lg font-medium">
            {currentDateTime}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LeftDashboard;
