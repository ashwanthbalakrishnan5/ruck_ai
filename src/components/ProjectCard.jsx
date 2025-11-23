import { MapPin, Loader2 } from 'lucide-react';

const statusColors = {
  green: {
    bg: 'bg-[#D1FAE5]',
    text: 'text-[#065F46]',
    progress: 'bg-[#10B981]',
  },
  blue: {
    bg: 'bg-[#DBEAFE]',
    text: 'text-[#1E40AF]',
    progress: 'bg-[#3B82F6]',
  },
  amber: {
    bg: 'bg-[#FEF3C7]',
    text: 'text-[#92400E]',
    progress: 'bg-[#F59E0B]',
  },
};

export default function ProjectCard({ project }) {
  const colors = statusColors[project.statusColor] || statusColors.green;
  const phaseColors = statusColors[project.phaseColor] || statusColors.green;

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
          {project.status}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${phaseColors.bg} ${phaseColors.text}`}>
          {project.phase}
        </span>
      </div>

      {/* Project Name & Location */}
      <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
        {project.name}
      </h3>
      <div className="flex items-center gap-1 text-[#6B7280] text-sm mb-4">
        <MapPin className="w-4 h-4" />
        <span>{project.location}</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-[#6B7280]">Progress</span>
          <span className="font-medium text-[#1F2937]">{project.progress}%</span>
        </div>
        <div className="h-2 bg-[#F8F9FA] rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.progress} rounded-full transition-all duration-500`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Budget */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#9CA3AF]">Budget</p>
          <p className="font-semibold text-[#1F2937]">
            ${project.budget.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-[#9CA3AF]">Spent</p>
          <p className="font-semibold text-[#1F2937]">
            ${project.spent.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="text-xs text-[#6B7280] mb-4 border-t border-[#E5E7EB] pt-4">
        <p>Started: {project.startDate}</p>
        <p>Est. End: {project.endDate}</p>
      </div>

      {/* Predictions / AI Status */}
      <div className="mb-4">
        {project.aiStatus ? (
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{project.aiStatus}</span>
          </div>
        ) : project.predictionsReady > 0 ? (
          <div className="flex items-center gap-2">
            <span className="relative flex items-center gap-1 px-3 py-1 bg-[#FFF4E5] text-[#FFA500] rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-[#FFA500] rounded-full animate-pulse"></span>
              {project.predictionsReady} prediction{project.predictionsReady > 1 ? 's' : ''} ready
            </span>
          </div>
        ) : null}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-[#E5E7EB]">
        <button className="flex-1 px-4 py-2 border-2 border-[#E5E7EB] rounded-lg text-sm font-medium text-[#1F2937] hover:bg-[#F8F9FA] transition-colors">
          View Details
        </button>
        {project.aiStatus ? (
          <button className="flex-1 px-4 py-2 border-2 border-[#E5E7EB] rounded-lg text-sm font-medium text-[#1F2937] hover:bg-[#F8F9FA] transition-colors">
            Upload Documents
          </button>
        ) : (
          <button className="flex-1 px-4 py-2 bg-[#FFA500] text-white rounded-lg text-sm font-semibold hover:bg-[#FF9500] transition-colors">
            Order Materials
          </button>
        )}
      </div>
    </div>
  );
}
