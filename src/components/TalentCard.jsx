import React from "react";
import { Mail, Phone } from "lucide-react";

export const TalentCard = () => {
  const talent = {
    image: "/talent.svg", // Add the URL of the actor's image here
    name: "Actor Name",
    roles: ["Actor", "Producer", "Special Appearances", "Voice Cast"],
    description:
      "Indian actor and film producer who works in Hindi films. He is also known as the 'Badshah of Bollywood'. He was born in New Delhi.",
    contactImage: "/path/to/contact-image.jpg",
    contactName: "Dr Ashwin",
    email: "ashwin@gmail.com",
    phone: "+91-74XX-XXX-XXX",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
      <div className="flex justify-between items-start mb-4 ">
        <h2 className="text-xl font-bold">Talent Opportunities</h2>
        <button className="text-blue-500 text-sm">View all</button>
      </div>

     <div className="border p-3 rounded-xl py-5 bg-slate-50"> <div className="flex items-center mb-4 ">
        <img
          src={talent.image}
          alt={talent.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{talent.roles.join(" • ")}</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4  text-sm">{talent.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Contact Information</h4>
        <div className="flex items-center mb-2">
       <div className=""><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg></div> 
          <span className="ml-2 text-sm">{talent.contactName}</span>
        </div>
        <div className="flex items-center mb-1">
          <Mail size={16} className="mr-2 text-gray-500" />
          <span className="text-sm">{talent.email}</span>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="mr-2 text-gray-500" />
          <span className="text-sm">{talent.phone}</span>
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
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
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
      </div></div>
    </div>
  );
};
