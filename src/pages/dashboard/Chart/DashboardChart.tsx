/* eslint-disable @typescript-eslint/no-explicit-any */

import { Divider } from "antd";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useGetAllSupplyQuery } from "../../../redux/features/ReliefGoods/ReliefApi";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#E178C5",
  " #FF8E8F",
  "#007F73",
  "#4CCD99",
];
const CustomTooltip = ({ active, payload }: any) => {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px",
          border: "1px solid black",
        }}
      >
        <p>{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
const DashboardChart = () => {
  const {
    data: supplyData,
    isLoading,
    isError,
  } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <p>Loading........</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }
  const data = supplyData?.data?.map(({ category, amount }: any) => ({
    name: category,
    value: parseInt(amount),
  }));

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Visual Representation of Supply Statistics
      </h1>
      <Divider plain>__</Divider>

      <ResponsiveContainer
        width="100%"
        height={500}
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
