import { motion } from 'framer-motion';
import { FileUp, Brain, ListChecks, Truck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: FileUp,
    title: 'Upload Blueprints',
    description: 'Drop your construction documents, blueprints, or project specs',
    color: 'from-[#3B82F6] to-[#2563EB]',
    bgColor: 'bg-[#DBEAFE]',
    textColor: 'text-[#3B82F6]',
    features: ['PDF, DWG, PNG supported', 'Batch upload enabled'],
  },
  {
    icon: Brain,
    title: 'AI Analyzes',
    description: 'Our AI extracts materials, quantities, and timeline requirements',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    bgColor: 'bg-[#EDE9FE]',
    textColor: 'text-[#8B5CF6]',
    features: ['94% accuracy rate', 'Learns from your history'],
  },
  {
    icon: ListChecks,
    title: 'Get Predictions',
    description: 'Receive material predictions with confidence scores and timing',
    color: 'from-[#FFA500] to-[#FF9500]',
    bgColor: 'bg-[#FFF4E5]',
    textColor: 'text-[#FFA500]',
    features: ['Price comparisons', 'Supplier recommendations'],
  },
  {
    icon: Truck,
    title: 'Order via Ruck',
    description: 'One-click ordering with same-day Ruck delivery to your site',
    color: 'from-[#10B981] to-[#059669]',
    bgColor: 'bg-[#D1FAE5]',
    textColor: 'text-[#10B981]',
    features: ['Same-day delivery', 'GPS tracking'],
  },
];

function StepCard({ step, index, isLast }) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative"
      >
        {/* Step number */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-sm font-bold text-[#1F2937] shadow-sm z-10">
          {index + 1}
        </div>

        {/* Card */}
        <motion.div
          whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)' }}
          className="bg-white rounded-2xl border border-[#E5E7EB] p-6 w-[280px] shadow-lg hover:border-[#FFA500]/30 transition-all duration-300"
        >
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-bold text-[#1F2937] mb-2">{step.title}</h3>
          <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">{step.description}</p>

          {/* Features */}
          <div className="space-y-2">
            {step.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${step.textColor}`} />
                <span className="text-xs text-[#6B7280] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Arrow connector (not on last item) */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%-20px)] items-center"
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#E5E7EB] to-[#FFA500]/50" />
          <ArrowRight className="w-5 h-5 text-[#FFA500] -ml-1" />
        </motion.div>
      )}
    </div>
  );
}

export default function AIFlowSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#F8F9FA] via-white to-[#FFF4E5]/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFA500]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF4E5] border border-[#FFA500]/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FFA500]" />
            <span className="text-[#FFA500] text-sm font-semibold">How It Works</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-4">
            From Blueprint to{' '}
            <span className="bg-gradient-to-r from-[#FFA500] to-[#FF9500] bg-clip-text text-transparent">
              Delivery
            </span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Our AI-powered workflow eliminates manual material estimation and ordering.
            What used to take hours now takes minutes.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -10px rgba(255, 165, 0, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl font-bold text-lg hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-300 shadow-lg shadow-[#FFA500]/30 inline-flex items-center gap-2"
          >
            Try It Now - Upload Your First Blueprint
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-[#9CA3AF] text-sm mt-4">No credit card required • Free for first 3 projects</p>
        </motion.div>
      </div>
    </section>
  );
}
