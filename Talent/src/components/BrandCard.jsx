import React from "react";
import { Mail, Phone } from "lucide-react";

export const BrandCard = () => {
  const brand = {
    image: "/brandlogo.svg", // Add the URL of the brand's logo here
    name: "India's largest footwear retailer Industry",
    description:
      "Bata India is the largest retailer and leading manufacturer of footwear in India and is a part of the Bata Shoe Organization.",
    contactImage: "/src/assets/pfp.svg",
    contactName: "Dr. Ashwin",
    email: "ashwin@gmail.com",
    phone: "+91-74XX-XXX-XXX",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold">Brand Opportunities</h2>
        <button className="text-blue-500 text-sm">View all</button>
      </div>

      <div className="border p-3 rounded-xl py-5 bg-slate-50">
        <div className="flex items-center mb-4">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">{brand.name}</h3>
            <p className="text-gray-600 text-sm">
              {brand.description}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <div className="flex items-center ">
            <img
              src={brand.contactImage}
              alt="Contact"
              className="w-5 h-10 rounded-full "
            />
            <span className="ml-2 text-sm">{brand.contactName}</span>
          </div>
          <div className="flex items-center mb-1">
            <Mail size={16} className="mr-2 text-gray-500" />
            <span className="text-sm">{brand.email}</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-gray-500" />
            <span className="text-sm">{brand.phone}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Partner Status</h4>
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <svg viewBox="0 0 36 36" className="w-12 h-12">
                <path
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="80, 100" // Adjust this value to change the percentage
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                4/5
              </div>
            </div>
            <div>
              <p className="font-semibold">Your Matching is Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
