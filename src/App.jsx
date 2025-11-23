import NavBar from './components/NavBar';
import DashboardStats from './components/DashboardStats';
import ProjectsGrid from './components/ProjectsGrid';
import PredictionsTable from './components/PredictionsTable';
import InventoryGrid from './components/InventoryGrid';
import MobilePreview from './components/MobilePreview';
import NotificationToast from './components/NotificationToast';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-bg-gray">
      {/* Fixed Navigation */}
      <NavBar />

      {/* Main Content - with padding for fixed nav */}
      <main className="pt-16">
        {/* Section 1: Dashboard Overview */}
        <DashboardStats />

        {/* Section 2: Active Projects */}
        <ProjectsGrid />

        {/* Section 3: AI Predictions */}
        <PredictionsTable />

        {/* Section 4: Inventory Tracking */}
        <InventoryGrid />

        {/* Section 5: Mobile Preview */}
        <MobilePreview />

        {/* Footer */}
        <footer className="bg-text-primary text-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <rect x="16" y="3" width="3" height="5" fill="white" rx="0.5" />
              </svg>
              <span className="font-bold text-lg">RUCK Intelligence</span>
            </div>
            <p className="text-white/60 text-sm">
              AI-Powered Contractor Portal Demo • Hackathon 2025
            </p>
          </div>
        </footer>
      </main>

      {/* Notification Toast */}
      <NotificationToast />
    </div>
  );
}

export default App;
