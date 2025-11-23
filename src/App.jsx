import { useState } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import NewProjectModal from './components/NewProjectModal';
import './App.css';

function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <NavBar />
      <main className="pt-16">
        <Dashboard onNewProject={() => setShowNewProject(true)} />
      </main>

      {showNewProject && (
        <NewProjectModal onClose={() => setShowNewProject(false)} />
      )}
    </div>
  );
}

export default App;
