import { BarChart3, Brain, Package, DollarSign } from 'lucide-react';
import { dashboardStats } from '../data/mockProjects';

const statCards = [
  {
    icon: BarChart3,
    value: dashboardStats.activeProjects,
    label: "Active Projects",
    borderColor: "border-l-info",
    iconBg: "bg-info-light",
    iconColor: "text-info",
  },
  {
    icon: Brain,
    value: dashboardStats.pendingPredictions,
    label: "Pending Predictions",
    borderColor: "border-l-ruck-orange",
    iconBg: "bg-ruck-orange-light",
    iconColor: "text-ruck-orange",
  },
  {
    icon: Package,
    value: dashboardStats.ordersThisMonth,
    label: "Orders This Month",
    borderColor: "border-l-success",
    iconBg: "bg-success-light",
    iconColor: "text-success",
  },
  {
    icon: DollarSign,
    value: `$${dashboardStats.moneySaved.toLocaleString()}`,
    label: "Saved This Month",
    borderColor: "border-l-success",
    iconBg: "bg-success-light",
    iconColor: "text-success",
    valueColor: "text-success",
  },
];

export default function DashboardStats() {
  return (
    <section className="bg-bg-gray py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-2">
            Welcome back, Sarah
          </h1>
          <p className="text-text-secondary text-lg">
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
                className={`bg-white rounded-xl p-6 shadow-sm border border-border-gray border-l-4 ${stat.borderColor} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className={`text-4xl font-bold ${stat.valueColor || 'text-text-primary'}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
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
