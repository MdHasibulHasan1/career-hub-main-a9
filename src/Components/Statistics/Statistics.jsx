import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "A-1",
    outOf: 60,
    mark: 58,
  },
  {
    name: "A-2",
    outOf: 60,
    mark: 59,
  },
  {
    name: "A-3",
    outOf: 60,
    mark: 60,
  },
  {
    name: "A-4",
    outOf: 60,
    mark: 60,
  },
  {
    name: "A-5",
    outOf: 60,
    mark: 60,
  },
  {
    name: "A-6",
    outOf: 60,
    mark: 60,
  },
  {
    name: "A-7",
    outOf: 60,
    mark: 60,
  },
  {
    name: "A-8",
    outOf: 60,
    mark: 60,
  },
];

export default function Statistics() {
  return (
    <div className="bg-violet-50" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 5,
            bottom: 20,
            left: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="outOf" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
