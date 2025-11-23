import { motion } from 'framer-motion';
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
    gradient: "from-[#3B82F6]/5 to-transparent",
  },
  {
    icon: Brain,
    value: dashboardStats.pendingPredictions,
    label: "Pending Predictions",
    borderColor: "border-l-[#FFA500]",
    iconBg: "bg-[#FFF4E5]",
    iconColor: "text-[#FFA500]",
    gradient: "from-[#FFA500]/5 to-transparent",
  },
  {
    icon: Package,
    value: dashboardStats.ordersThisMonth,
    label: "Orders This Month",
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#10B981]",
    gradient: "from-[#10B981]/5 to-transparent",
  },
  {
    icon: DollarSign,
    value: `$${dashboardStats.moneySaved.toLocaleString()}`,
    label: "Saved This Month",
    borderColor: "border-l-[#10B981]",
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#10B981]",
    valueColor: "text-[#10B981]",
    gradient: "from-[#10B981]/5 to-transparent",
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

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      delay: 0.2,
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
          className="mb-8"
        >
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
            You have{' '}
            <span className="font-semibold text-[#1F2937]">3 active projects</span>
            {' '}with{' '}
            <span className="font-semibold text-[#FFA500]">5 pending predictions</span>
          </motion.p>
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
                  y: -4,
                  boxShadow: '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] border-l-4 ${stat.borderColor} cursor-pointer overflow-hidden group`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl ${stat.iconBg} shadow-sm`}
                  >
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </motion.div>
                  <div>
                    <motion.p
                      variants={numberVariants}
                      className={`text-4xl font-bold ${stat.valueColor || 'text-[#1F2937]'}`}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-[#6B7280] mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-50" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
