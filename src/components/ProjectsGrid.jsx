import { motion } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { mockProjects } from '../data/mockProjects';

export default function ProjectsGrid() {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFA500]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-2">
              Active Projects
            </h2>
            <p className="text-[#6B7280]">
              Manage and track your construction projects
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 20px -4px rgba(255, 165, 0, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-semibold hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-300 shadow-lg shadow-[#FFA500]/20"
          >
            <Plus className="w-5 h-5" />
            Create New Project
            <Sparkles className="w-4 h-4 ml-1 opacity-70" />
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
