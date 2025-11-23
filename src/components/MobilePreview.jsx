import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, Home, FolderKanban, ScanLine, ShoppingCart, User, Bell, Bot, Smartphone, Download } from 'lucide-react';

const features = [
  { text: 'Scan QR codes to update inventory', delay: 0 },
  { text: 'Photo upload for delivery confirmation', delay: 0.1 },
  { text: 'Voice notes for quick updates', delay: 0.2 },
  { text: 'Push notifications for predictions', delay: 0.3 },
  { text: 'Offline mode with sync', delay: 0.4 },
];

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Phone glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFA500]/20 to-[#FF9500]/10 rounded-[50px] blur-3xl scale-90" />

      <motion.div
        whileHover={{ y: -10, rotateY: 5 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto w-[300px] h-[600px] bg-gradient-to-br from-[#1F2937] via-[#2D3748] to-[#1F2937] rounded-[45px] p-3 shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Phone frame highlight */}
        <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

        {/* Phone frame */}
        <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden shadow-inner">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#1F2937] rounded-b-2xl z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#374151]" />
            <div className="w-12 h-3 rounded-full bg-[#374151]" />
          </div>

          {/* Screen content */}
          <div className="h-full flex flex-col">
            {/* Status bar */}
            <div className="h-14 bg-gradient-to-r from-[#FFA500] to-[#FF9500] flex items-center justify-center pt-4">
              <span className="text-white font-bold text-sm tracking-wide">Ruck Intelligence</span>
            </div>

            {/* Project header */}
            <div className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] px-4 pb-5">
              <p className="text-white/80 text-xs">Current Project</p>
              <p className="text-white font-bold text-sm">Oak Street Townhomes</p>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-[#F8F9FA] p-4 space-y-4 overflow-hidden">
              {/* Notification Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-4 shadow-lg shadow-gray-100/50 border border-[#E5E7EB]"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-[#FFF4E5] to-[#FFEDD5] rounded-xl shadow-sm">
                    <Bot className="w-5 h-5 text-[#FFA500]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[#1F2937] text-sm">New Prediction Ready</p>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA500] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFA500]"></span>
                      </span>
                    </div>
                    <p className="text-[#6B7280] text-xs mt-1">Drywall needed by Thursday</p>
                    <p className="text-[#9CA3AF] text-xs mt-1">94% confidence • 180 sheets</p>
                  </div>
                </div>
                <button className="w-full mt-3 py-2.5 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl text-sm font-bold shadow-sm">
                  Order Now
                </button>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl p-3 shadow-sm border border-[#E5E7EB]"
                >
                  <p className="text-xs text-[#9CA3AF] font-medium">On Site</p>
                  <p className="text-xl font-bold text-[#1F2937]">47</p>
                  <p className="text-xs text-[#10B981] font-medium">items</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-3 shadow-sm border border-[#E5E7EB]"
                >
                  <p className="text-xs text-[#9CA3AF] font-medium">In Transit</p>
                  <p className="text-xl font-bold text-[#3B82F6]">1</p>
                  <p className="text-xs text-[#3B82F6] font-medium">delivery</p>
                </motion.div>
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB]"
              >
                <p className="text-xs font-bold text-[#1F2937] mb-3">Recent Activity</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Bell className="w-3 h-3 text-[#FFA500]" />
                    <span>Order #47291 arriving today</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Check className="w-3 h-3 text-[#10B981]" />
                    <span>Cement inventory updated</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Navigation */}
            <div className="h-16 bg-white border-t border-[#E5E7EB] flex items-center justify-around px-2">
              <div className="flex flex-col items-center gap-1">
                <Home className="w-5 h-5 text-[#FFA500]" />
                <span className="text-[10px] text-[#FFA500] font-bold">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FolderKanban className="w-5 h-5 text-[#9CA3AF]" />
                <span className="text-[10px] text-[#9CA3AF]">Projects</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="p-2.5 bg-gradient-to-br from-[#FFA500] to-[#FF9500] rounded-full -mt-5 shadow-lg shadow-[#FFA500]/30">
                  <ScanLine className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] text-[#9CA3AF] mt-1">Scan</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShoppingCart className="w-5 h-5 text-[#9CA3AF]" />
                <span className="text-[10px] text-[#9CA3AF]">Orders</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <User className="w-5 h-5 text-[#9CA3AF]" />
                <span className="text-[10px] text-[#9CA3AF]">Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-0 top-24 w-1 h-8 bg-[#374151] rounded-l-sm" />
        <div className="absolute left-0 top-20 w-1 h-6 bg-[#374151] rounded-r-sm" />
        <div className="absolute left-0 top-32 w-1 h-12 bg-[#374151] rounded-r-sm" />
      </motion.div>
    </motion.div>
  );
}

export default function MobilePreview() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-[#FAFAFA] to-[#FFF4E5]/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFA500]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#3B82F6]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#E5E7EB] mb-6">
            <Smartphone className="w-4 h-4 text-[#FFA500]" />
            <span className="text-sm font-semibold text-[#6B7280]">Mobile App</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Mobile Experience
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Contractors use Ruck Intelligence on-the-go for seamless project management
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-8"
            >
              Everything you need{' '}
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] bg-clip-text text-transparent">
                in the field
              </span>
            </motion.h3>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow"
                >
                  <Check className="w-5 h-5 text-[#10B981]" />
                </motion.div>
                <span className="text-lg text-[#1F2937] font-medium group-hover:text-[#FFA500] transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 25px -5px rgba(255, 165, 0, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-bold hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-300 shadow-lg shadow-[#FFA500]/20 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download the App
            </motion.button>
          </div>

          {/* Right - Phone Mockup */}
          <motion.div style={{ y }} className="flex justify-center">
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
