import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import logo from "../../../src/assets/logo1.png";
import { FaSearch } from "react-icons/fa";
// import clear from "../../assets/clear.png";
import Weather from "./Weather";

const LeftDashboard = () => {
  const [city, setCity] = useState("Dhaka");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const inputRef = useRef();
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

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setCity(inputRef.current.value); // Set the city from the input value
  };
  return (
    <div className="bg-gradient-to-t from-cyan-100 to-cyan-200 min-h-[100vh]">
      <Container>
        <div className="flex gap-2 items-center py-3 text-center">
          <img className="w-[300px]" src={logo} alt="Wheater Update" />
        </div>

        {/* Search bar */}
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-row gap-2 my-4 text-center"
        >
          <label className="input py-2 bg-white focus:border-none rounded-full">
            <input
              ref={inputRef}
              className="text-gray-700 text-lg py-2"
              type="text"
              placeholder="Dhaka"
              required
            />
          </label>
          <button
            type="submit"
            className="btn bg-white border-none text-[#074460] rounded-full shadow-none"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        {/* weather */}
        <Weather city={city}></Weather>

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
