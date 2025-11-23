import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-[#F8F9FA]">
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
        <footer className="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#374151] text-white py-12 px-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFA500]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto relative"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-gradient-to-br from-[#FFA500] to-[#FF9500] rounded-xl shadow-lg shadow-[#FFA500]/20"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path
                      d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect x="16" y="3" width="3" height="5" fill="white" rx="0.5" />
                  </svg>
                </motion.div>
                <div>
                  <span className="font-bold text-2xl tracking-wide">RUCK</span>
                  <span className="text-[#FFA500] font-bold text-2xl ml-2">Intelligence</span>
                  <p className="text-white/60 text-sm mt-1">AI-Powered Contractor Portal</p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-white/60 text-sm">
                  Hackathon Demo 2025
                </p>
                <p className="text-white/40 text-xs">
                  Built with React, Tailwind CSS & Framer Motion
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
              <p>© 2025 Ruck Intelligence. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Privacy</span>
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Terms</span>
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Contact</span>
              </div>
            </div>
          </motion.div>
        </footer>
      </main>

      {/* Notification Toast */}
      <NotificationToast />
    </div>
  );
}

export default App;
