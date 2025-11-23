import { useState } from 'react';
import {
  Clipboard,
  Ruler,
  Zap,
  Home,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  Truck,
  Info,
} from 'lucide-react';
import { mockPredictions, timelineWeeks } from '../data/mockPredictions';

const iconMap = {
  Clipboard,
  Ruler,
  Zap,
  Home,
};

function ConfidenceBar({ confidence }) {
  let color = 'bg-[#10B981]';
  let textColor = 'text-[#10B981]';

  if (confidence < 75) {
    color = 'bg-[#3B82F6]';
    textColor = 'text-[#3B82F6]';
  } else if (confidence < 90) {
    color = 'bg-[#F59E0B]';
    textColor = 'text-[#F59E0B]';
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-2 bg-[#F8F9FA] rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${confidence}%` }}
        />
      </div>
      <span className={`text-sm font-semibold ${textColor}`}>{confidence}%</span>
      {confidence < 75 && (
        <span className="text-xs text-[#3B82F6] bg-[#DBEAFE] px-2 py-0.5 rounded-full">Learning</span>
      )}
    </div>
  );
}

function SupplierDropdown({ suppliers, isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-[#FFA500] hover:text-[#FF9500] font-semibold"
      >
        ${suppliers[0].price.toLocaleString()}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-[#E5E7EB] z-20 overflow-hidden">
          <div className="p-3 bg-[#F8F9FA] border-b border-[#E5E7EB]">
            <p className="text-sm font-medium text-[#6B7280]">Compare Suppliers</p>
          </div>
          {suppliers.map((supplier, idx) => (
            <div
              key={idx}
              className={`p-4 border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F8F9FA] transition-colors ${supplier.bestPrice ? 'bg-[#D1FAE5]/30' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[#1F2937]">{supplier.name}</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-lg text-[#1F2937]">${supplier.price.toLocaleString()}</span>
                  {supplier.bestPrice && (
                    <span className="text-xs bg-[#10B981] text-white px-2 py-0.5 rounded-full ml-1">BEST</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-1">
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
                <span className="text-sm text-[#6B7280] ml-1">{supplier.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PredictionRow({ prediction, isExpanded, onToggle, openSupplier, setOpenSupplier }) {
  const Icon = iconMap[prediction.icon] || Clipboard;

  return (
    <>
      <tr className="hover:bg-[#F8F9FA]/50 transition-colors">
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FFF4E5] rounded-lg">
              <Icon className="w-5 h-5 text-[#FFA500]" />
            </div>
            <span className="font-medium text-[#1F2937]">{prediction.material}</span>
          </div>
        </td>
        <td className="px-6 py-4 text-[#1F2937]">{prediction.quantity}</td>
        <td className="px-6 py-4">
          <ConfidenceBar confidence={prediction.confidence} />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2 text-[#1F2937]">
            <Calendar className="w-4 h-4 text-[#9CA3AF]" />
            {prediction.neededBy}
          </div>
        </td>
        <td className="px-6 py-4">
          <SupplierDropdown
            suppliers={prediction.suppliers}
            isOpen={openSupplier === prediction.id}
            onToggle={() => setOpenSupplier(openSupplier === prediction.id ? null : prediction.id)}
          />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-[#FFA500] text-white rounded-lg text-sm font-semibold hover:bg-[#FF9500] transition-colors whitespace-nowrap">
              Order via Ruck
            </button>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors"
            >
              <Info className="w-4 h-4 text-[#9CA3AF]" />
            </button>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-[#FFF4E5]/50">
          <td colSpan={6} className="px-6 py-4">
            <div className="flex items-start gap-2 text-sm text-[#6B7280]">
              <Info className="w-4 h-4 mt-0.5 text-[#FFA500]" />
              <div>
                <span className="font-medium text-[#1F2937]">AI Reasoning: </span>
                {prediction.reasoning}
              </div>
            </div>
          </td>
        </tr>
      )}
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
    <section className="py-12 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#1F2937] mb-2">
            AI Material Predictions - Oak Street Townhomes
          </h2>
          <p className="text-[#6B7280]">
            Based on your project timeline and historical data
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-4">
            {timelineWeeks.map((week) => (
              <div
                key={week.week}
                className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  week.status === 'current'
                    ? 'bg-[#FFA500] text-white shadow-md'
                    : week.status === 'past'
                    ? 'bg-[#9CA3AF]/30 text-[#6B7280]'
                    : 'bg-[#E5E7EB] text-[#9CA3AF]'
                }`}
              >
                {week.label}
                {week.status === 'current' && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#FFA500]"></div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#FFA500] font-semibold whitespace-nowrap">
                      Current
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Predictions Table */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8F9FA] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Confidence</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Needed By</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Est. Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1F2937]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {mockPredictions.map((prediction) => (
                  <PredictionRow
                    key={prediction.id}
                    prediction={prediction}
                    isExpanded={expandedRows[prediction.id]}
                    onToggle={() => toggleRow(prediction.id)}
                    openSupplier={openSupplier}
                    setOpenSupplier={setOpenSupplier}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
