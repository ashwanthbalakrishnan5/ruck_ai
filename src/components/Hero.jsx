import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F2937] via-[#1F2937] to-[#374151]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-[#FFA500]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-[#3B82F6]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#FFA500 1px, transparent 1px), linear-gradient(90deg, #FFA500 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFA500]/10 border border-[#FFA500]/30 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-[#FFA500]" />
              <span className="text-[#FFA500] text-sm font-semibold">AI-Powered Construction Intelligence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Never Run Out of{' '}
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] bg-clip-text text-transparent">
                Materials
              </span>{' '}
              Again
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-8 max-w-xl"
            >
              Ruck Intelligence predicts what you need before you need it. Upload your blueprints,
              get AI-powered material predictions, and order directly through Ruck delivery.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#10B981]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <span className="text-white/80 text-sm">94% Prediction Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span className="text-white/80 text-sm">Zero Stockouts</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -10px rgba(255, 165, 0, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-bold text-lg hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-300 shadow-lg shadow-[#FFA500]/30 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:border-white/50 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Stats Cards */}
            <div className="relative h-[500px]">
              {/* Main Card - ROI */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
              >
                <p className="text-white/60 text-sm mb-1">Average Monthly Savings</p>
                <p className="text-4xl font-bold text-white">$12,847</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#10B981] text-sm font-semibold">+23%</span>
                  <span className="text-white/50 text-sm">vs manual ordering</span>
                </div>
              </motion.div>

              {/* Time Saved Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-32 -left-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl p-5 shadow-xl shadow-[#10B981]/20"
              >
                <p className="text-white/80 text-xs uppercase tracking-wide mb-1">Hours Saved</p>
                <p className="text-3xl font-bold text-white">47</p>
                <p className="text-white/60 text-xs">This month</p>
              </motion.div>

              {/* Stockouts Prevented Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-28 right-0 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-2xl p-5 shadow-xl shadow-[#3B82F6]/20"
              >
                <p className="text-white/80 text-xs uppercase tracking-wide mb-1">Stockouts Prevented</p>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-white/60 text-xs">This quarter</p>
              </motion.div>

              {/* AI Accuracy Card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl min-w-[280px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#1F2937] font-semibold">AI Prediction Accuracy</p>
                  <span className="text-xs bg-[#D1FAE5] text-[#065F46] px-2 py-1 rounded-full font-semibold">LIVE</span>
                </div>
                <div className="flex items-end gap-3">
                  <p className="text-5xl font-bold text-[#1F2937]">94%</p>
                  <div className="pb-2">
                    <p className="text-[#10B981] text-sm font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +6%
                    </p>
                    <p className="text-[#6B7280] text-xs">from last month</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#FFA500] to-[#10B981] rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-6">TRUSTED BY LEADING CONTRACTORS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Phoenix Builders', 'AZ Construction', 'Desert Homes', 'Summit Build'].map((company, idx) => (
              <span key={idx} className="text-white/60 font-semibold text-lg">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
