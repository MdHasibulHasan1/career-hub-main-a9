import "./Statistics.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A-01",
    mark: 58,
  },
  {
    name: "A-02",
    mark: 59,
  },
  {
    name: "A-03",
    mark: 60,
  },
  {
    name: "A-04",
    mark: 60,
  },
  {
    name: "A-05",
    mark: 60,
  },
  {
    name: "A-06",
    mark: 60,
  },
  {
    name: "A-07",
    mark: 60,
  },
  {
    name: "A-08",
    mark: 60,
  },
];

const Statistics = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Statistics;
