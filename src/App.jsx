import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AIFlowSection from './components/AIFlowSection';
import DashboardStats from './components/DashboardStats';
import ProjectsGrid from './components/ProjectsGrid';
import PredictionsTable from './components/PredictionsTable';
import InventoryGrid from './components/InventoryGrid';
import AILearningSection from './components/AILearningSection';
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
        {/* Section 1: Hero - Value Proposition */}
        <Hero />

        {/* Section 2: How It Works - AI Flow */}
        <AIFlowSection />

        {/* Section 3: Dashboard Overview - ROI Metrics */}
        <DashboardStats />

        {/* Section 4: Active Projects */}
        <ProjectsGrid />

        {/* Section 5: AI Predictions */}
        <PredictionsTable />

        {/* Section 6: Inventory Tracking */}
        <InventoryGrid />

        {/* Section 7: AI Learning - Post-Project Intelligence */}
        <AILearningSection />

        {/* Section 8: Mobile Preview */}
        <MobilePreview />

        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#374151] text-white py-16 px-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFA500]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto relative"
          >
            {/* Top section */}
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
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
                  </div>
                </div>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  AI-powered material predictions combined with Ruck's same-day delivery network.
                  Never run out of materials again.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-white font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Case Studies', 'API'].map((item) => (
                    <li key={item}>
                      <span className="text-white/60 hover:text-[#FFA500] transition-colors cursor-pointer text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                    <li key={item}>
                      <span className="text-white/60 hover:text-[#FFA500] transition-colors cursor-pointer text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats bar */}
            <div className="py-8 border-t border-b border-white/10 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#FFA500]">500+</p>
                  <p className="text-white/50 text-sm">Contractors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">$2.4M</p>
                  <p className="text-white/50 text-sm">Saved This Year</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">94%</p>
                  <p className="text-white/50 text-sm">Prediction Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">12K+</p>
                  <p className="text-white/50 text-sm">Orders via Ruck</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
              <p>© 2025 Ruck Intelligence. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-[#FFA500] transition-colors cursor-pointer">Support</span>
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
