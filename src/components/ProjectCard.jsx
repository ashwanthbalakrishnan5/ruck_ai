import { motion } from 'framer-motion';
import { MapPin, Loader2, ArrowRight } from 'lucide-react';

const statusColors = {
  green: {
    bg: 'bg-[#D1FAE5]',
    text: 'text-[#065F46]',
    progress: 'bg-gradient-to-r from-[#10B981] to-[#34D399]',
    glow: 'shadow-[#10B981]/20',
  },
  blue: {
    bg: 'bg-[#DBEAFE]',
    text: 'text-[#1E40AF]',
    progress: 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]',
    glow: 'shadow-[#3B82F6]/20',
  },
  amber: {
    bg: 'bg-[#FEF3C7]',
    text: 'text-[#92400E]',
    progress: 'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]',
    glow: 'shadow-[#F59E0B]/20',
  },
};

export default function ProjectCard({ project, index = 0 }) {
  const colors = statusColors[project.statusColor] || statusColors.green;
  const phaseColors = statusColors[project.phaseColor] || statusColors.green;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top decorative accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.progress} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} shadow-sm`}
          >
            {project.status}
          </motion.span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${phaseColors.bg} ${phaseColors.text}`}>
            {project.phase}
          </span>
        </div>

        {/* Project Name & Location */}
        <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:text-[#FFA500] transition-colors duration-300">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-[#6B7280] text-sm mb-5">
          <MapPin className="w-4 h-4 text-[#9CA3AF]" />
          <span>{project.location}</span>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#6B7280] font-medium">Progress</span>
            <span className="font-bold text-[#1F2937]">{project.progress}%</span>
          </div>
          <div className="h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              className={`h-full ${colors.progress} rounded-full relative`}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Budget */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-[#F9FAFB] rounded-xl p-3">
            <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">Budget</p>
            <p className="font-bold text-[#1F2937] text-lg">
              ${project.budget.toLocaleString()}
            </p>
          </div>
          <div className="bg-[#F9FAFB] rounded-xl p-3">
            <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">Spent</p>
            <p className="font-bold text-[#1F2937] text-lg">
              ${project.spent.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-xs text-[#6B7280] mb-5 py-4 border-t border-dashed border-[#E5E7EB]">
          <div className="flex justify-between">
            <div>
              <p className="text-[#9CA3AF] mb-0.5">Started</p>
              <p className="font-medium text-[#1F2937]">{project.startDate}</p>
            </div>
            <div className="text-right">
              <p className="text-[#9CA3AF] mb-0.5">Est. End</p>
              <p className="font-medium text-[#1F2937]">{project.endDate}</p>
            </div>
          </div>
        </div>

        {/* Predictions / AI Status */}
        <div className="mb-5 min-h-[32px]">
          {project.aiStatus ? (
            <div className="flex items-center gap-2 text-sm text-[#6B7280] bg-[#F9FAFB] px-3 py-2 rounded-lg">
              <Loader2 className="w-4 h-4 animate-spin text-[#3B82F6]" />
              <span>{project.aiStatus}</span>
            </div>
          ) : project.predictionsReady > 0 ? (
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-2"
            >
              <span className="relative flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FFF4E5] to-[#FFF9F0] text-[#FFA500] rounded-lg text-sm font-semibold border border-[#FFE4B5]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA500] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFA500]"></span>
                </span>
                {project.predictionsReady} prediction{project.predictionsReady > 1 ? 's' : ''} ready
              </span>
            </motion.div>
          ) : null}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-[#E5E7EB]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-2.5 border-2 border-[#E5E7EB] rounded-xl text-sm font-semibold text-[#1F2937] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200" />
          </motion.button>
          {project.aiStatus ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2.5 border-2 border-[#E5E7EB] rounded-xl text-sm font-semibold text-[#1F2937] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all duration-200"
            >
              Upload Documents
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 4px 14px 0 rgba(255, 165, 0, 0.39)' }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl text-sm font-semibold hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-200 shadow-sm"
            >
              Order Materials
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
