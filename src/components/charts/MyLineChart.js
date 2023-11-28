import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { followers } from "../../data/followers";

export default class MyLineChart extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={followers}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="FB" stroke="#1877f2" />
        <Line type="monotone" dataKey="IG" stroke="#E35FA3" />
        <Line type="monotone" dataKey="X" stroke="#000" />
        <Line type="monotone" dataKey="YT" stroke="#C4032A" />
      </LineChart>
    );
  }
}
