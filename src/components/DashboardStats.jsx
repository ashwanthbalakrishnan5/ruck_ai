import { motion } from 'framer-motion';
import { Clock, DollarSign, ShieldCheck, Target, TrendingUp, ArrowUpRight } from 'lucide-react';
import { dashboardStats } from '../data/mockProjects';

const statCards = [
  {
    icon: Clock,
    value: dashboardStats.hoursSavedThisMonth,
    suffix: 'hrs',
    label: "Hours Saved This Month",
    trend: dashboardStats.hoursTrend,
    trendLabel: "vs last month",
    borderColor: "border-l-[#3B82F6]",
    iconBg: "bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]",
    iconColor: "text-[#3B82F6]",
    gradient: "from-[#3B82F6]/5 to-transparent",
    trendColor: "text-[#10B981]",
  },
  {
    icon: DollarSign,
    value: dashboardStats.moneySavedThisMonth,
    prefix: '$',
    label: "Money Saved This Month",
    trend: dashboardStats.moneyTrend,
    trendLabel: "vs last month",
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]",
    iconColor: "text-[#10B981]",
    valueColor: "text-[#10B981]",
    gradient: "from-[#10B981]/5 to-transparent",
    trendColor: "text-[#10B981]",
  },
  {
    icon: ShieldCheck,
    value: dashboardStats.stockoutsPrevented,
    label: "Stockouts Prevented",
    trend: dashboardStats.stockoutsTrend,
    trendLabel: "this quarter",
    borderColor: "border-l-[#8B5CF6]",
    iconBg: "bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE]",
    iconColor: "text-[#8B5CF6]",
    gradient: "from-[#8B5CF6]/5 to-transparent",
    trendColor: "text-[#10B981]",
  },
  {
    icon: Target,
    value: dashboardStats.aiAccuracy,
    suffix: '%',
    label: "AI Prediction Accuracy",
    trend: dashboardStats.accuracyTrend,
    trendLabel: "improvement",
    borderColor: "border-l-[#FFA500]",
    iconBg: "bg-gradient-to-br from-[#FFF4E5] to-[#FFEDD5]",
    iconColor: "text-[#FFA500]",
    gradient: "from-[#FFA500]/5 to-transparent",
    trendColor: "text-[#10B981]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function DashboardStats() {
  return (
    <section className="bg-gradient-to-br from-[#F8F9FA] via-[#F8F9FA] to-[#FFF4E5]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-3">
                Welcome back,{' '}
                <span className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] bg-clip-text text-transparent">
                  Sarah
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#6B7280] text-lg"
              >
                Your AI assistant has been working hard.{' '}
                <span className="font-semibold text-[#10B981]">
                  ${dashboardStats.moneySavedThisMonth.toLocaleString()} saved
                </span>{' '}
                this month alone.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-[#E5E7EB]"
            >
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              <span className="text-sm text-[#6B7280]">
                <span className="font-semibold text-[#1F2937]">{dashboardStats.activeProjects}</span> active projects
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] border-l-4 ${stat.borderColor} cursor-pointer overflow-hidden group`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Top row - Icon and Trend */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl ${stat.iconBg} shadow-sm`}
                    >
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </motion.div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-lg bg-[#D1FAE5]/50 ${stat.trendColor}`}>
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-bold">{stat.trend}</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-1">
                    <span className={`text-4xl font-bold ${stat.valueColor || 'text-[#1F2937]'}`}>
                      {stat.prefix}{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}{stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-sm text-[#6B7280] font-medium mb-2">
                    {stat.label}
                  </p>

                  {/* Trend label */}
                  <p className="text-xs text-[#9CA3AF]">
                    {stat.trendLabel}
                  </p>
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#FFA500]" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 bg-gradient-to-r from-[#1F2937] to-[#374151] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FFA500]/20 rounded-lg">
              <Target className="w-5 h-5 text-[#FFA500]" />
            </div>
            <div>
              <p className="text-white font-semibold">AI Predictions Ready</p>
              <p className="text-white/60 text-sm">3 material predictions waiting for your review</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#FFA500]/20 whitespace-nowrap"
          >
            Review Predictions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
