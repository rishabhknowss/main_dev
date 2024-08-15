import { RevenueCard } from "./RevenueCard";
import { RevenueInsights } from "./RevenueFinanceInsights";
import { StatisticsCard } from "./StatisticsCard";
import { BrandCard} from "./BrandCard"
export const DashboardStats = () => {
  return (
    <div className="bg-slate-100 h-full ">
      <div className="p-5">
        <div>
          <RevenueCard />
        </div>
        <div className="py-5">
          <StatisticsCard />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <BrandCard />
          </div>
          <div className="col-span-2">
            <RevenueInsights />
          </div>
        </div>
      </div>
    </div>
  );
};
