import { Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { mockProjects } from '../data/mockProjects';

export default function ProjectsGrid() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold text-text-primary">
            Active Projects
          </h2>
          <button className="flex items-center gap-2 px-5 py-3 bg-ruck-orange text-white rounded-lg font-semibold hover:bg-ruck-orange-hover transition-colors shadow-sm">
            <Plus className="w-5 h-5" />
            Create New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
