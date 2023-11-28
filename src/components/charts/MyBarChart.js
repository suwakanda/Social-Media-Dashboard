import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { followers } from "../../data/followers";

export default class MyBarChart extends PureComponent {
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={followers}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="FB" fill="#1877f2" />
        <Bar dataKey="IG" fill="#E35FA3" />
        <Bar dataKey="X" fill="#000" />
        <Bar dataKey="YT" fill="#C4032A" />
      </BarChart>
    );
  }
}
