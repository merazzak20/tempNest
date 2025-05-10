import React, { useEffect, useState } from "react";
import clear from "../../assets/clear.png";
import axios from "axios";
const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      //   console.log(response.data);
      setWeatherData(response.data);
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
        <img className="mx-auto" src={clear} alt="" />
        <p className="text-[#074460] text-4xl font-bold">
          {weatherData?.main.temp} <span>&#176;</span> C
        </p>
        <p className="text-[#074460] text-2xl font-semibold">
          {weatherData?.name}
        </p>
      </div>
    </div>
  );
};

export default Weather;
