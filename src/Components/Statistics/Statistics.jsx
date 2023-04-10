import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Ass-01",
    mark: 58,
  },
  {
    name: "Ass-02",
    mark: 59,
  },
  {
    name: "Ass-03",
    mark: 60,
  },
  {
    name: "Ass-04",
    mark: 60,
  },
  {
    name: "Ass-05",
    mark: 60,
  },
  {
    name: "Ass-06",
    mark: 60,
  },
  {
    name: "Ass-07",
    mark: 60,
  },
  {
    name: "Ass-08",
    // uv: 1400,
    // pv: 680,
    // amt: 1700,
    mark: 60,
  },
];
const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 50,
          bottom: 20,
          left: 0,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        <Scatter dataKey="mark" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
