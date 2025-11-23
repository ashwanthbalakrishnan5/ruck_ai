import { BarChart3, Brain, Package, DollarSign } from 'lucide-react';
import { dashboardStats } from '../data/mockProjects';

const statCards = [
  {
    icon: BarChart3,
    value: dashboardStats.activeProjects,
    label: "Active Projects",
    borderColor: "border-l-[#3B82F6]",
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#3B82F6]",
  },
  {
    icon: Brain,
    value: dashboardStats.pendingPredictions,
    label: "Pending Predictions",
    borderColor: "border-l-[#FFA500]",
    iconBg: "bg-[#FFF4E5]",
    iconColor: "text-[#FFA500]",
  },
  {
    icon: Package,
    value: dashboardStats.ordersThisMonth,
    label: "Orders This Month",
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#10B981]",
  },
  {
    icon: DollarSign,
    value: `$${dashboardStats.moneySaved.toLocaleString()}`,
    label: "Saved This Month",
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#10B981]",
    valueColor: "text-[#10B981]",
  },
];

export default function DashboardStats() {
  return (
    <section className="bg-[#F8F9FA] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1F2937] mb-2">
            Welcome back, Sarah
          </h1>
          <p className="text-[#6B7280] text-lg">
            You have 3 active projects with 5 pending predictions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] border-l-4 ${stat.borderColor} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className={`text-4xl font-bold ${stat.valueColor || 'text-[#1F2937]'}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-[#6B7280] mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
