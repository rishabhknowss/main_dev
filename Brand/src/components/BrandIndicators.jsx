import React from 'react';
import { Cell, Pie, ResponsiveContainer, Tooltip, PieChart } from "recharts";

const PieChartCard = ({ title, data, colors }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-2 text-center text-gray-800">{title}</h2>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => ( 
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div className="mt-2 flex flex-wrap justify-center">
      {data.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center mr-4 mb-1">
          <div className="w-3 h-3 mr-1" style={{ backgroundColor: colors[index % colors.length] }}></div>
          <span className="text-xs text-gray-600">{entry.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export const BrandIndicators = () => {
  const chartData = [
    {
      title: "Ethical Stance",
      data: [
        { name: "Sustainability Efforts", value: 30 },
        { name: "Community Involvement", value: 25 },
        { name: "Ethical Practices", value: 20 },
        { name: "Transparency Level", value: 15 },
        { name: "Transparency Level", value: 10 },
      ],
      colors: ["#00C49F", "#00A3A1", "#00869E", "#006B96", "#005088"],
    },
    {
      title: "Performance Indicators",
      data: [
        { name: "Market Share", value: 35 },
        { name: "Growth Rate", value: 25 },
        { name: "Customer Satisfaction", value: 20 },
        { name: "Brand Awareness", value: 15 },
        { name: "Financial Health", value: 5 },
      ],
      colors: ["#00C49F", "#00A3A1", "#00869E", "#006B96", "#005088"],
    },
    {
      title: "Brand Personality",
      data: [
        { name: "Brand Archetype", value: 30 },
        { name: "Emotional Appeal", value: 25 },
        { name: "Storytelling Approach", value: 20 },
        { name: "Customer Experience", value: 15 },
        { name: "Brand Differentiators", value: 10 },
      ],
      colors: ["#9ACD32", "#BADA55", "#7FFF00", "#90EE90", "#ADFF2F"],
    },
    {
      title: "Audience demographic",
      data: [
        { name: "Primary Audience", value: 35 },
        { name: "Age Group", value: 25 },
        { name: "Audience Split", value: 15 },
        { name: "Audience Interest", value: 10 },
        { name: "Audience location", value: 10 },
        { name: "Audience Engagement", value: 5 },
      ],
      colors: ["#FF6347", "#FF4500", "#FF6961", "#FF7F50", "#FA8072", "#FFA07A"],
    },
    {
      title: "Customer Insights",
      data: [
        { name: "Customer Age Range", value: 30 },
        { name: "Customer Gender Split", value: 25 },
        { name: "Customer Interests", value: 20 },
        { name: "Customer Geographic Spread", value: 15 },
        { name: "Customer Loyalty", value: 10 },
      ],
      colors: ["#FFA500", "#FFD700", "#FFFF00", "#FAFAD2", "#FFFACD"],
    },
    {
      title: "Social media Strategy",
      data: [
        { name: "Active Platforms", value: 30 },
        { name: "Brand Voice", value: 25 },
        { name: "Content Themes", value: 20 },
        { name: "Engagement Strategies", value: 15 },
        { name: "Influencer Partnerships", value: 10 },
      ],
      colors: ["#00BFFF", "#1E90FF", "#87CEFA", "#4169E1", "#6495ED"],
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <div className="grid grid-cols-3 gap-4">
        {chartData.map((chart, index) => (
          <PieChartCard
            key={index}
            title={chart.title}
            data={chart.data}
            colors={chart.colors}
          />
        ))}
      </div>
    </div>
  );
};

