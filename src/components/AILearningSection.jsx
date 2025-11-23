import { motion } from 'framer-motion';
import {
  FolderArchive,
  FileText,
  Hammer,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Home,
  Zap,
  Droplets,
  Calendar,
  Plus
} from 'lucide-react';

const projectHistory = [
  { icon: FileText, label: 'Original Blueprints', count: '12 files', color: 'text-[#3B82F6]', bgColor: 'bg-[#DBEAFE]' },
  { icon: Hammer, label: 'Materials Used', count: '847 items', color: 'text-[#FFA500]', bgColor: 'bg-[#FFF4E5]' },
  { icon: Building2, label: 'Suppliers Used', count: '6 vendors', color: 'text-[#8B5CF6]', bgColor: 'bg-[#EDE9FE]' },
];

const renovationMaterials = [
  { name: '2x4 Studs', quantity: '64 pieces', icon: Hammer, reason: 'Based on existing wall spacing' },
  { name: '12/2 NM-B Wire', quantity: '4 rolls', icon: Zap, reason: 'Matching existing electrical' },
  { name: 'PVC Fittings', quantity: '12 units', icon: Droplets, reason: 'Compatible with current plumbing' },
];

function ProjectFileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-xl border border-[#E5E7EB] relative overflow-hidden"
    >
      {/* Future Ready Banner */}
      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-3 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs font-bold rounded-full shadow-lg shadow-[#10B981]/20"
        >
          FUTURE RENOVATION READY
        </motion.div>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-[#FFF4E5] to-[#FFEDD5] rounded-xl">
          <FolderArchive className="w-8 h-8 text-[#FFA500]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1F2937]">Oak Street Townhomes</h3>
          <p className="text-[#6B7280] text-sm">Completed Nov 15, 2024 • Tempe, AZ</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-[#D1FAE5] text-[#065F46] text-xs font-semibold rounded-full">
              Project Complete
            </span>
            <span className="px-2 py-1 bg-[#DBEAFE] text-[#1E40AF] text-xs font-semibold rounded-full">
              Digital File Archived
            </span>
          </div>
        </div>
      </div>

      {/* Project History */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {projectHistory.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-4 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] hover:border-[#FFA500]/30 transition-all cursor-pointer"
            >
              <div className={`p-2 ${item.bgColor} rounded-lg w-fit mb-2`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <p className="font-bold text-[#1F2937] text-sm">{item.count}</p>
              <p className="text-[#6B7280] text-xs">{item.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dashed border-[#E5E7EB]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-[#9CA3AF] font-medium">2 Years Later</span>
        </div>
      </div>

      {/* Future Renovation Request */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-5 bg-gradient-to-br from-[#FFF4E5]/50 to-[#FFF9F0] rounded-xl border border-[#FFA500]/20"
      >
        <div className="flex items-center gap-2 mb-3">
          <Plus className="w-5 h-5 text-[#FFA500]" />
          <span className="font-bold text-[#1F2937]">New Request: Add Bedroom</span>
        </div>
        <p className="text-[#6B7280] text-sm mb-4">
          Client wants to add a bedroom. AI instantly calculates materials needed based on existing structure.
        </p>

        {/* AI Calculated Materials */}
        <div className="space-y-2">
          {renovationMaterials.map((material, idx) => {
            const Icon = material.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#E5E7EB]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#6B7280]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">{material.name}</p>
                    <p className="text-xs text-[#9CA3AF]">{material.reason}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-[#FFA500]">{material.quantity}</span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 py-3 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#FFA500]/20 flex items-center justify-center gap-2"
        >
          Order via Ruck
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const benefits = [
  {
    icon: FolderArchive,
    title: "Complete Digital Building File",
    description: "Every blueprint, material spec, and supplier record stays organized and accessible forever",
  },
  {
    icon: Calendar,
    title: "Future Revenue Opportunities",
    description: "When clients need renovations years later, you already know their building inside-out",
  },
  {
    icon: Sparkles,
    title: "Instant Material Calculations",
    description: "AI uses existing structure data to instantly calculate materials for modifications",
  },
];

export default function AILearningSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#374151] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFA500]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFA500]/10 border border-[#FFA500]/20 rounded-full mb-6">
            <FolderArchive className="w-4 h-4 text-[#FFA500]" />
            <span className="text-[#FFA500] text-sm font-semibold">Post-Project Intelligence</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Every Project Becomes a{' '}
            <span className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] bg-clip-text text-transparent">
              Future Opportunity
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Complete project histories stay in the system. When clients need renovations
            years later, you're ready to serve them again—instantly.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Project File Card */}
          <ProjectFileCard />

          {/* Right - Benefits */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Why This Matters
              </h3>

              <div className="space-y-5">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 bg-[#FFA500]/10 rounded-xl flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#FFA500]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-white/60 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quote/Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-[#10B981]/10 to-[#059669]/5 rounded-2xl border border-[#10B981]/20"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-white font-semibold">The Contractor Advantage</p>
                  <p className="text-white/50 text-sm">Real scenario</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                "Client wanted to add a bedroom in 2 years. Because we had their complete building
                history in Ruck Intelligence, I knew the exact framing specs, electrical layout,
                and plumbing configuration. The AI calculated all renovation materials in seconds.
                <span className="text-[#10B981] font-semibold"> One click to order through Ruck.</span>"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <span className="text-white/60 text-sm">
                  Every completed project = Future recurring revenue
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
