import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clipboard,
  Ruler,
  Zap,
  Home,
  Calendar,
  ChevronDown,
  Star,
  Check,
  Truck,
  Info,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { mockPredictions, timelineWeeks } from '../data/mockPredictions';

const iconMap = {
  Clipboard,
  Ruler,
  Zap,
  Home,
};

function ConfidenceBar({ confidence }) {
  let color = 'from-[#10B981] to-[#34D399]';
  let textColor = 'text-[#10B981]';
  let bgColor = 'bg-[#D1FAE5]';

  if (confidence < 75) {
    color = 'from-[#3B82F6] to-[#60A5FA]';
    textColor = 'text-[#3B82F6]';
    bgColor = 'bg-[#DBEAFE]';
  } else if (confidence < 90) {
    color = 'from-[#F59E0B] to-[#FBBF24]';
    textColor = 'text-[#F59E0B]';
    bgColor = 'bg-[#FEF3C7]';
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-24 h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
      <span className={`text-sm font-bold ${textColor} min-w-[40px]`}>{confidence}%</span>
      {confidence < 75 && (
        <span className={`text-xs ${textColor} ${bgColor} px-2 py-0.5 rounded-full font-medium flex items-center gap-1`}>
          <TrendingUp className="w-3 h-3" />
          Learning
        </span>
      )}
    </div>
  );
}

function SupplierDropdown({ suppliers, isOpen, onToggle }) {
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className="flex items-center gap-1 text-[#FFA500] hover:text-[#FF9500] font-bold transition-colors"
      >
        ${suppliers[0].price.toLocaleString()}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] z-20 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-[#F8F9FA] to-white border-b border-[#E5E7EB]">
              <p className="text-sm font-semibold text-[#1F2937]">Compare Suppliers</p>
              <p className="text-xs text-[#6B7280]">Select best option for your project</p>
            </div>
            {suppliers.map((supplier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`p-4 border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F9FAFB] transition-all duration-200 cursor-pointer ${supplier.bestPrice ? 'bg-[#D1FAE5]/20' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[#1F2937]">{supplier.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-[#1F2937]">${supplier.price.toLocaleString()}</span>
                    {supplier.bestPrice && (
                      <span className="text-xs bg-gradient-to-r from-[#10B981] to-[#34D399] text-white px-2 py-1 rounded-full font-semibold shadow-sm">
                        BEST
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>In Stock</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4" />
                    <span>{supplier.delivery}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(supplier.rating) ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#E5E7EB]'}`}
                    />
                  ))}
                  <span className="text-sm text-[#6B7280] ml-1 font-medium">{supplier.rating}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PredictionRow({ prediction, isExpanded, onToggle, openSupplier, setOpenSupplier, index }) {
  const Icon = iconMap[prediction.icon] || Clipboard;

  return (
    <>
      <motion.tr
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="hover:bg-[#FAFAFA] transition-colors group"
      >
        <td className="px-6 py-5">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2.5 bg-gradient-to-br from-[#FFF4E5] to-[#FFEDD5] rounded-xl shadow-sm"
            >
              <Icon className="w-5 h-5 text-[#FFA500]" />
            </motion.div>
            <span className="font-semibold text-[#1F2937] group-hover:text-[#FFA500] transition-colors">
              {prediction.material}
            </span>
          </div>
        </td>
        <td className="px-6 py-5">
          <span className="font-medium text-[#1F2937] bg-[#F3F4F6] px-3 py-1 rounded-lg">
            {prediction.quantity}
          </span>
        </td>
        <td className="px-6 py-5">
          <ConfidenceBar confidence={prediction.confidence} />
        </td>
        <td className="px-6 py-5">
          <div className="flex items-center gap-2 text-[#1F2937]">
            <div className="p-1.5 bg-[#F3F4F6] rounded-lg">
              <Calendar className="w-4 h-4 text-[#6B7280]" />
            </div>
            <span className="font-medium">{prediction.neededBy}</span>
          </div>
        </td>
        <td className="px-6 py-5">
          <SupplierDropdown
            suppliers={prediction.suppliers}
            isOpen={openSupplier === prediction.id}
            onToggle={() => setOpenSupplier(openSupplier === prediction.id ? null : prediction.id)}
          />
        </td>
        <td className="px-6 py-5">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 4px 14px 0 rgba(255, 165, 0, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2.5 bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white rounded-xl text-sm font-semibold hover:from-[#FF9500] hover:to-[#FF8500] transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              Order via Ruck
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#F3F4F6' }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggle}
              className="p-2.5 hover:bg-[#F3F4F6] rounded-xl transition-colors"
            >
              <Info className={`w-4 h-4 transition-colors ${isExpanded ? 'text-[#FFA500]' : 'text-[#9CA3AF]'}`} />
            </motion.button>
          </div>
        </td>
      </motion.tr>
      <AnimatePresence>
        {isExpanded && (
          <motion.tr
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-[#FFF4E5]/50 to-[#FFFBF5]"
          >
            <td colSpan={6} className="px-6 py-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 text-sm"
              >
                <div className="p-2 bg-[#FFA500]/10 rounded-lg">
                  <Sparkles className="w-4 h-4 text-[#FFA500]" />
                </div>
                <div>
                  <span className="font-semibold text-[#1F2937]">AI Reasoning: </span>
                  <span className="text-[#6B7280]">{prediction.reasoning}</span>
                </div>
              </motion.div>
            </td>
          </motion.tr>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PredictionsTable() {
  const [expandedRows, setExpandedRows] = useState({});
  const [openSupplier, setOpenSupplier] = useState(null);

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#F8F9FA] via-[#F8F9FA] to-[#FFF4E5]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gradient-to-br from-[#FFA500] to-[#FF9500] rounded-xl shadow-lg shadow-[#FFA500]/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              AI Material Predictions
            </h2>
          </div>
          <p className="text-[#6B7280] ml-14">
            Oak Street Townhomes • Based on your project timeline and historical data
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 overflow-x-auto"
        >
          <div className="flex items-center gap-2 min-w-max pb-6">
            {timelineWeeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  week.status === 'current'
                    ? 'bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white shadow-lg shadow-[#FFA500]/30'
                    : week.status === 'past'
                    ? 'bg-[#E5E7EB] text-[#6B7280]'
                    : 'bg-[#F3F4F6] text-[#9CA3AF]'
                }`}
              >
                {week.label}
                {week.status === 'current' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#FFA500]"></div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#FFA500] font-bold whitespace-nowrap">
                      Current Week
                    </span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Predictions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-[#E5E7EB] shadow-xl shadow-gray-100/50 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#F8F9FA] to-[#FAFAFA] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Confidence</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Needed By</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Est. Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1F2937] uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {mockPredictions.map((prediction, index) => (
                  <PredictionRow
                    key={prediction.id}
                    prediction={prediction}
                    isExpanded={expandedRows[prediction.id]}
                    onToggle={() => toggleRow(prediction.id)}
                    openSupplier={openSupplier}
                    setOpenSupplier={setOpenSupplier}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
