import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RevenueInsights = () => {
  const revenueInsightsData = [
    { name: "Brand", value: 40 },
    { name: "Film", value: 30 },
    { name: "Appearences", value: 30 },
    { name: "Endorsements", value: 30 },
  ];

  const financialData = [
    { name: "Jan", Revenue: 1.5, Expense: 1 },
    { name: "Feb", Revenue: 1.7, Expense: 1.2 },
    { name: "Mar", Revenue: 1.6, Expense: 1.3 },
    { name: "Apr", Revenue: 1.8, Expense: 1.4 },
    { name: "May", Revenue: 2.0, Expense: 1.5 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#c1121f"];

  return (
    <div className="grid grid-cols-2 bg-white p-6 rounded shadow gap-3">
      <div className="border-2 rounded-xl p-2">
        <h3 className="font-bold mb-4 flex justify-center">Revenue Insights</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueInsightsData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {revenueInsightsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <center>
          <div className="grid grid-cols-2 items-center">
            <div className="flex">
              <div className="flex justify-center flex-col mx-2">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7.5"
                    cy="8.03907"
                    rx="7.5"
                    ry="7.59169"
                    fill="#8884d8"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col">
                {" "}
                Brand Endorsement{" "}
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center flex-col mx-2">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7.5"
                    cy="8.03907"
                    rx="7.5"
                    ry="7.59169"
                    fill="#82ca9d"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col"> Film Revenue </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex">
              <div className="flex justify-center flex-col mx-2">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7.5"
                    cy="8.03907"
                    rx="7.5"
                    ry="7.59169"
                    fill="#ffc658"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col"> Appearance </div>
            </div>
            <div className="flex">
              <div className="flex justify-center flex-col mx-2">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="7.5"
                    cy="8.03907"
                    rx="7.5"
                    ry="7.59169"
                    fill="#c1121f"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col"> Brand 40% </div>
            </div>
          </div>
        </center>
      </div>

      <div className="border-2 rounded-lg p-2">
        <h3 className="font-bold mb-4 flex justify-center">
          Financial Insights
        </h3>
        <div className="flex space-x-28 justify-center m-3">
          <div className="flex">
            <div className="flex justify-center flex-col mx-2">
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="12" rx="6" fill="#8884d8" />
                <rect x="11" y="1" width="10" height="10" rx="5" fill="white" />
              </svg>
            </div>
            <div>Revenue</div>
          </div>
          <div className="flex">
            <div className="flex justify-center flex-col mx-2">
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="12" rx="6" fill="#82ca9d" />
                <rect x="11" y="1" width="10" height="10" rx="5" fill="white" />
              </svg>
            </div>
            <div>Expense</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={financialData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Revenue"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-out"
            />
            <Line
              type="monotone"
              dataKey="Expense"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
              animationBegin={0}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
