import { useState } from 'react';
import { Bell, Settings, User, ChevronDown, Plus } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';

export default function NavBar({ selectedProject, onSelectProject, onNewProject }) {
  const [showProjectMenu, setShowProjectMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-[#E5E5E5] z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left - Logo + Project Selector */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFA500] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="white" stroke="white" strokeWidth="1.5" />
                <rect x="16" y="3" width="3" height="5" fill="white" rx="0.5" />
              </svg>
            </div>
            <span className="font-bold text-lg text-[#1a1a1a]">Ruck</span>
          </div>

          {/* Project Selector */}
          <div className="relative">
            <button
              onClick={() => setShowProjectMenu(!showProjectMenu)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F5] hover:bg-[#EBEBEB] rounded-lg transition-colors"
            >
              <span className="text-sm font-medium text-[#1a1a1a]">
                {selectedProject?.name || 'Select Project'}
              </span>
              <ChevronDown className="w-4 h-4 text-[#666]" />
            </button>

            {showProjectMenu && (
              <>
                <div className="fixed inset-0" onClick={() => setShowProjectMenu(false)} />
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-[#E5E5E5] py-1 z-50">
                  {mockProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        onSelectProject(project);
                        setShowProjectMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-[#F5F5F5] transition-colors ${
                        selectedProject?.id === project.id ? 'bg-[#FFF8EB]' : ''
                      }`}
                    >
                      <p className="text-sm font-medium text-[#1a1a1a]">{project.name}</p>
                      <p className="text-xs text-[#666]">{project.location}</p>
                    </button>
                  ))}
                  <div className="border-t border-[#E5E5E5] mt-1 pt-1">
                    <button
                      onClick={() => {
                        onNewProject();
                        setShowProjectMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-[#F5F5F5] transition-colors flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4 text-[#FFA500]" />
                      <span className="text-sm font-medium text-[#FFA500]">New Project</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          <button className="relative p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-[#666]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-[#666]" />
          </button>
          <div className="w-px h-6 bg-[#E5E5E5] mx-2" />
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#F5F5F5] rounded-lg transition-colors">
            <div className="w-8 h-8 bg-[#E5E5E5] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-[#666]" />
            </div>
            <span className="text-sm font-medium text-[#1a1a1a]">Sarah M.</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
