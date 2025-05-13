import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ fData }) => {
  const formattedData = fData?.map((item) => ({
    time: new Date(item.dt_txt).toLocaleString("en-US", {
      weekday: "short", // e.g., "Tue"
      hour: "2-digit", // e.g., "06 PM"
      minute: "2-digit",
    }),
    temperature: item.main.temp,
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={formattedData}
          margin={{
            top: 10,
            right: 40,
            left: 40, // Adjusted left margin
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }} // Ensure ticks are visible
            interval={0} // Show all ticks
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke="#FDB441"
            fill="#FFD48F"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
