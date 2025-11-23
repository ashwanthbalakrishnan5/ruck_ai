import { useState } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import NewProjectModal from './components/NewProjectModal';
import { mockProjects } from './data/mockProjects';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);
  const [showNewProject, setShowNewProject] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <NavBar
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
        onNewProject={() => setShowNewProject(true)}
      />
      <main className="pt-14">
        <Dashboard project={selectedProject} />
      </main>

      {showNewProject && (
        <NewProjectModal onClose={() => setShowNewProject(false)} />
      )}
    </div>
  );
}

export default App;
