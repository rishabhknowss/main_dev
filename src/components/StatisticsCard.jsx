import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import down from "../assets/down.svg";
import bullets from "../assets/bullets.svg";

export const StatisticsCard = () => {
  const statisticsData = [
    { name: "Jan", Revenue: 75, InProgress: 55, Rejected: 15 },
    { name: "Feb", Revenue: 62, InProgress: 48, Rejected: 25 },
    { name: "March", Revenue: 45, InProgress: 60, Rejected: 20 },
    { name: "April", Revenue: 50, InProgress: 40, Rejected: 35 },
    { name: "May", Revenue: 80, InProgress: 70, Rejected: 10 },
    { name: "June", Revenue: 68, InProgress: 30, Rejected: 22 },
    { name: "July", Revenue: 55, InProgress: 65, Rejected: 18 },
    { name: "Aug", Revenue: 60, InProgress: 25, Rejected: 28 },
    { name: "Sept", Revenue: 90, InProgress: 85, Rejected: 12 },
    { name: "Oct", Revenue: 40, InProgress: 95, Rejected: 20 },
    { name: "Nov", Revenue: 70, InProgress: 15, Rejected: 30 },
    { name: "Dec", Revenue: 70, InProgress: 20, Rejected: 25 },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <h3 className="font-bold mb-4">Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statisticsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Revenue" fill="#8884d8" />
            <Bar dataKey="InProgress" fill="#82ca9d" />
            <Bar dataKey="Rejected" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-lg shadow ">
        <div className="flex justify-between">
          <div className="font-bold">Upcoming Engagements</div>
          <div className="border py-1  px-2 rounded-lg text-xs flex">
            Create New
            <img
              src={down}
              className="ml-1 h-4 w-4 flex flex-col justify-center"
            ></img>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex p-2 text-sm space-x-5">
            <div className=" grid p-1 px-2 shadow-md rounded-lg text-xs ">
              <div className="text-yellow-500 font-bold flex justify-center">
                Mon
              </div>
              <div className="flex justify-center">10</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="grid mt-2 font-medium">
                Bata new brand launching
                <span className="text-slate-400">9:00 am - 11:30 am</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bullets} className="h-6 w-6 rounded-md"></img>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex p-2 text-sm space-x-5">
            <div className=" grid p-1 px-2 shadow-md rounded-lg text-xs ">
              <div className="text-yellow-500 font-bold flex justify-center">
                Thu
              </div>
              <div className="flex justify-center">08</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="grid mt-2 font-medium">
                Sprite Advertisement meeting
                <span className="text-slate-400">9:00 am - 11:30 am</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bullets} className="h-6 w-6 rounded-md"></img>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex p-2 text-sm space-x-5">
            <div className=" grid p-1 px-2 shadow-md rounded-lg text-xs ">
              <div className="text-yellow-500 font-bold flex justify-center">
                Fri
              </div>
              <div className="flex justify-center">11</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="grid mt-2 font-medium">
                TATA TMT Steel
                <span className="text-slate-400">9:00 am - 11:30 am</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bullets} className="h-6 w-6 rounded-md"></img>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex p-2 text-sm space-x-5">
            <div className=" grid p-1 px-2 shadow-md rounded-lg text-xs ">
              <div className="text-yellow-500 font-bold flex justify-center">
                Fri
              </div>
              <div className="flex justify-center">12</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="grid mt-2 font-medium">
                TATA TMT Steel
                <span className="text-slate-400">9:00 am - 11:30 am</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bullets} className="h-6 w-6 rounded-md"></img>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex p-2 text-sm space-x-5">
            <div className=" grid p-1 px-2 shadow-md rounded-lg text-xs ">
              <div className="text-yellow-500 font-bold flex justify-center">
                Fri
              </div>
              <div className="flex justify-center">25</div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="grid mt-2 font-medium">
                TATA TMT Steel
                <span className="text-slate-400">9:00 am - 11:30 am</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bullets} className="h-6 w-6 rounded-md"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
