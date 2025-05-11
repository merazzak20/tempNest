import React from "react";
import clear from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";

const WeatherCard = ({ day }) => {
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

  // Safely access the icon and other properties
  const icon = allicons[day?.weather?.[0]?.icon] || clear;

  return (
    <div className="mx-auto text-center w-full bg-blue-50 rounded-xl p-4">
      <p className="font-medium">{day?.dt_txt?.slice(0, 10)}</p>
      <img className="mx-auto max-w-[100px]" src={icon} alt="Weather Icon" />
      <p className="text-[#074460] text-2xl font-bold mt-2">
        {day?.main?.temp}°C
      </p>
      <p className="text-[#074460] font-medium capitalize">
        {day?.weather?.[0]?.description}
      </p>
    </div>
  );
};

export default WeatherCard;
