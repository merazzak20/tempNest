import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Graph from "./Graph";

const RightDashboard = ({ city }) => {
  const [forcastData, setForcastData] = useState();
  const [allData, setAllData] = useState();
  // console.log(city);

  const forcast = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      //   console.log(response.data.list);
      const fData = await response.data.list;
      setAllData(fData.slice(0, 6));
      const dailyData = await fData.filter((item) => {
        const itemDate = new Date(item?.dt_txt).toDateString();
        const toDay = new Date().toDateString();
        return item.dt_txt.includes("12:00:00") && itemDate !== toDay;
      });
      setForcastData(dailyData);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(forcastData);
  useEffect(() => {
    forcast();
  }, [city]);
  // console.log(allData);
  return (
    <div className="text-[#074460] mt-2 ">
      <Graph fData={allData}></Graph>
      <div className="grid grid-col-2 md:grid-cols-4 gap-2 mt-8 ">
        {forcastData?.map((day, idx) => (
          <WeatherCard id={idx} day={day}></WeatherCard>
        ))}
      </div>
    </div>
  );
};

export default RightDashboard;
