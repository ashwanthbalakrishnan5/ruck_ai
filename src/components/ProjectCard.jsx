import { MapPin, Loader2 } from 'lucide-react';

const statusColors = {
  green: {
    bg: 'bg-success-light',
    text: 'text-success-dark',
    progress: 'bg-success',
  },
  blue: {
    bg: 'bg-info-light',
    text: 'text-info-dark',
    progress: 'bg-info',
  },
  amber: {
    bg: 'bg-warning-light',
    text: 'text-warning-dark',
    progress: 'bg-warning',
  },
};

export default function ProjectCard({ project }) {
  const colors = statusColors[project.statusColor] || statusColors.green;
  const phaseColors = statusColors[project.phaseColor] || statusColors.green;

  return (
    <div className="bg-white rounded-xl border border-border-gray p-6 shadow-sm hover:shadow-md transition-shadow">
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
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {project.name}
      </h3>
      <div className="flex items-center gap-1 text-text-secondary text-sm mb-4">
        <MapPin className="w-4 h-4" />
        <span>{project.location}</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-text-secondary">Progress</span>
          <span className="font-medium text-text-primary">{project.progress}%</span>
        </div>
        <div className="h-2 bg-bg-gray rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.progress} rounded-full transition-all duration-500`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Budget */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-text-muted">Budget</p>
          <p className="font-semibold text-text-primary">
            ${project.budget.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-text-muted">Spent</p>
          <p className="font-semibold text-text-primary">
            ${project.spent.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="text-xs text-text-secondary mb-4 border-t border-border-gray pt-4">
        <p>Started: {project.startDate}</p>
        <p>Est. End: {project.endDate}</p>
      </div>

      {/* Predictions / AI Status */}
      <div className="mb-4">
        {project.aiStatus ? (
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{project.aiStatus}</span>
          </div>
        ) : project.predictionsReady > 0 ? (
          <div className="flex items-center gap-2">
            <span className="relative flex items-center gap-1 px-3 py-1 bg-ruck-orange-light text-ruck-orange rounded-full text-xs font-semibold">
              <span className="w-2 h-2 bg-ruck-orange rounded-full animate-pulse"></span>
              {project.predictionsReady} prediction{project.predictionsReady > 1 ? 's' : ''} ready
            </span>
          </div>
        ) : null}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-border-gray">
        <button className="flex-1 px-4 py-2 border-2 border-border-gray rounded-lg text-sm font-medium text-text-primary hover:bg-bg-gray transition-colors">
          View Details
        </button>
        {project.aiStatus ? (
          <button className="flex-1 px-4 py-2 border-2 border-border-gray rounded-lg text-sm font-medium text-text-primary hover:bg-bg-gray transition-colors">
            Upload Documents
          </button>
        ) : (
          <button className="flex-1 px-4 py-2 bg-ruck-orange text-white rounded-lg text-sm font-semibold hover:bg-ruck-orange-hover transition-colors">
            Order Materials
          </button>
        )}
      </div>
    </div>
  );
}
