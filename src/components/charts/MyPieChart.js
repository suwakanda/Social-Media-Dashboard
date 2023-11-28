import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

import { followers } from "../../data/followers";

const latestData = followers.find((entry) => entry.year === 2023);

const data = [
  { name: "Facebook", value: latestData.FB },
  { name: "Instagram", value: latestData.IG },
  { name: "X", value: latestData.X },
  { name: "YouTube", value: latestData.YT },
];

const COLORS = ["#1877f2", "#E35FA3", "#000", "#C4032A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class MyPieChart extends PureComponent {
  render() {
    return (
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
