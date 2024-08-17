import React from 'react';
import logo from "../assets/templogo.svg";
import marketinggoals from "../assets/marketinggoals.svg";
import corporateculture from "../assets/corporateculture.svg"; 
import communicationstyle from "../assets/communicationstyle.svg"; 

const BrandCard = ({ title, image, details }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-center font-bold text-lg mb-4">{title}</h3>
      <div className="border rounded-md p-4 bg-slate-50">
        <div className="flex justify-center mb-4">
          <img src={image} alt={title} className="w-16 h-16"/>
        </div>
        <div className="space-y-2 ">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="flex text-xs">
              <div className="w-1/2 font-semibold">{key}</div>
              <div className="w-4 text-center">:</div>
              <div className="w-1/2 text-right">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BrandCards = () => {
  const cardsData = [
    {
      title: "Brand Identity",
      image: logo,
      details: {
        "Brand Value": "Elegance",
        "Industry": "Watches",
        "Market Position": "Industry Leader",
        "Target Demographics": "Professionals",
      },
    },
    {
      title: "Marketing Goals",
      image: marketinggoals,
      details: {
        "Key Messages": "Timeless Elegance",
        "Desired Image": "Premium Lifestyle",
        "Marketing Goals": "Brand Loyalty",
        "Objectives": "Increase Engagement",
        "Product Lines": "Watches, Jewellery, Eyewear",
        "Service Offerings": "Customization Services & Eye Testing - service",
      },
    },
    {
      title: "Corporate Culture",
      image: corporateculture,
      details: {
        "Workplace Culture": "Dynamic, Inclusive",
        "Innovation Focus": "Continuous Improvement",
        "Leadership Style": "Visionary Leadership",
        "Employee Diversity": "Generational, Ability",
        "Company Size": "Global Presence",
      },
    },
    {
      title: "Communication Style",
      image: communicationstyle,
      details: {
        "Media Relations": "Press Outreach",
        "PR Strategies": "Brand Positioning",
        "Crisis Management": "Crisis Response",
        "Community Engagement": "Social Responsibility",
      },
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 py-3">
      {cardsData.map((card, index) => (
        <BrandCard key={index} {...card} />
      ))}
    </div>
  );
};

export default BrandCards;