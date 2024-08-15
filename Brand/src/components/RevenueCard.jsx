import totalrevenue from "../assets/totalrevenue.svg";
import growth from "../assets/growth.svg";
import engagementmetric from "../assets/engagementmetric.svg";
import activedeals from "../assets/activedeals.svg";
import recentact from "../assets/recentact.svg";

export const RevenueCard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 bg-white shadow-sm p-4 rounded-xl gap-4">
        <div className="flex items-center border-r pr-4">
          <div className="flex-grow">
            <div className="text-sm font-bold text-slate-600">
              Total Revenue
            </div>
            <div className="font-black text-slate-600 text-2xl">
              $10,000,000
            </div>
            <div className="flex text-[10px] items-center">
              <img src={growth} alt="growth" />
              <div className="px-1">+14% Inc</div>
            </div>
          </div>
          <img src={totalrevenue} alt="total revenue" className="ml-4" />
        </div>

        <div className="flex items-center border-r pr-4">
          <div className="flex-grow">
            <div className="text-sm font-bold text-slate-600">Active Deals</div>
            <div className="font-black text-slate-600 text-2xl">10</div>
            <div className="flex text-[10px] items-center">
              <img src={growth} alt="growth" />
              <div className="px-1">+14% Inc</div>
            </div>
          </div>
          <img src={activedeals} alt="active deals" className="ml-4" />
        </div>

        <div className="flex items-center border-r pr-4">
          <div className="flex-grow">
            <div className="text-sm font-bold text-slate-600">
              Engagement Metric
            </div>
            <div className="font-black text-slate-600 text-2xl">234</div>
            <div className="flex text-[10px] items-center">
              <img src={growth} alt="growth" />
              <div className="px-1">+14% Inc</div>
            </div>
          </div>
          <img
            src={engagementmetric}
            alt="engagement metric"
            className="ml-4"
          />
        </div>

        <div className="flex items-center pr-4">
          <div className="flex-grow">
            <div className="text-sm font-bold text-slate-600">
              Recent Activity
            </div>
            <div className="font-black text-slate-600 text-xl">
              Signed Deals with Brands XYZ
            </div>
            <div className="flex text-[10px] items-center">
              <img src={growth} alt="growth" />
              <div className="px-1">+14% Inc</div>
            </div>
          </div>
          <img src={recentact} alt="recent activity" className="ml-4" />
        </div>
      </div>
    </div>
  );
};
