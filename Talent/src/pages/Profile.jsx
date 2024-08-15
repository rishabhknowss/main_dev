import { Navbar } from "../components/Navbar";
import { ProfileStats } from "../components/ProfileStats";
import { Sidebar } from "../components/Sidebar";

export const Profile = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-1"> 
        <Sidebar />
      </div>
      <div className="col-span-7">
        <Navbar />
        <ProfileStats/>
        

      </div>
    </div>
  );
};
