import logo from "../assets/logo.svg";
import overview from "../assets/overview.svg";
import profile from "../assets/profile.svg";
import buzzmatch from "../assets/buzzmatch.svg";
import campaigns from "../assets/campaigns.svg";
import schedule from "../assets/schedule.svg";
import general from "../assets/general.svg";
import hamburger from "../assets/hamburger.svg";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  { label: "Overview", icon: overview, route: "/dashboard" },
  { label: "Profile", icon: profile, route: "/profile" },
  { label: "Schedule", icon: schedule },
  { label: "BuzzMatch", icon: buzzmatch },
  { label: "Campaigns", icon: campaigns },
  { label: "Analytics", icon: general },
  { label: "Ratings", icon: general },
  { label: "Content Creation", icon: general },
  { label: "Financial Overview", icon: general },
  { label: "Settings", icon: general },
  { label: "Logout", icon: general, isBold: true },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const active = sidebarItems.find((item) => item.route === currentPath);
    if (active) {
      setActiveItem(active.label);
    } else {
      setActiveItem("");
    }
  }, [location.pathname]);

  const handleItemClick = (item) => {
    if (item.route) {
      navigate(item.route);
    }
    setActiveItem(item.label);
  };

  return (
    <div className="grid mt-4">
      <div className="p-3">
        <img src={logo} alt="Logo" />
      </div>
      <div className="grid p-2 gap-2 text-sm">
        <div className="flex px-3 p-2 justify-end">
          <div className="flex flex-col justify-center">
            <img src={hamburger} className="h-5 w-5" alt="Menu" />
          </div>
        </div>

        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex px-3 p-2 rounded-lg ${
              activeItem === item.label ? "bg-purple-700 text-white font-bold" : ""
            } ${item.isBold ? "font-bold" : ""}`}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex flex-col justify-center">
              <img src={item.icon} className="h-5 w-5" alt={item.label} />
            </div>
            <div className="ml-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
