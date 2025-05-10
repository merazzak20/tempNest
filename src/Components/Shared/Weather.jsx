import React, { useEffect, useState } from "react";
import clear from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import axios from "axios";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { MdOutlineWindPower } from "react-icons/md";
import { FaWater } from "react-icons/fa";
const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState();

  const allicons = {
    "01d": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      console.log(response.data);
      const wData = response.data;
      const icon = allicons[wData.weather[0].icon] || clear;
      console.log(icon);
      setWeatherData({
        city: wData.name,
        humidity: wData.main.humidity,
        max_temp: wData.main.temp_max,
        min_temp: wData.main.temp_min,
        temp: wData.main.temp,
        icon: icon,
        wind: wData.wind.speed,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [city]);
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  return (
    <div>
      {/* weather */}
      <div className="text-center">
        <img className="mx-auto max-w-[150px]" src={weatherData?.icon} alt="" />
        <p className="text-[#074460] text-2xl font-semibold">
          {weatherData?.city}
        </p>
        <p className="text-[#074460] text-4xl font-bold mt-2">
          {weatherData?.temp} <span>&#176;</span> C
        </p>

        {/* max min temp */}
        {/* <div className="flex justify-evenly mt-4">
          <div className="flex items-center gap-2 text-[#074460] text-lg font-semibold">
            <BiSolidUpArrow />
            <p>
              {weatherData?.max_temp} <span>&#176;</span> C
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#074460] text-lg font-semibold">
            <BiSolidDownArrow />
            <p>
              {weatherData?.min_temp} <span>&#176;</span> C
            </p>
          </div>
        </div> */}

        {/*Humidity and wind */}
        <div className="flex justify-between mt-10">
          <div className="flex items-center gap-2 text-[#074460]">
            <FaWater className="text-4xl" />
            <p className="text-left">
              Humidity <br />{" "}
              <span className="font-bold text-xl">
                {weatherData?.humidity}%
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#074460]">
            <MdOutlineWindPower className="text-4xl" />

            <p className="text-left">
              Wind Speed <br />{" "}
              <span className="font-bold text-xl">
                {weatherData?.wind} km/h
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
