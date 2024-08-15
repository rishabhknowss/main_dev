import { DashboardStats } from "../components/DashboardStats";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-1"> 
        <Sidebar />
      </div>
      <div className="col-span-7">
        <Navbar />
        <DashboardStats/>

      </div>
    </div>
  );
};
