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
  let color = 'bg-success';
  let textColor = 'text-success';

  if (confidence < 75) {
    color = 'bg-info';
    textColor = 'text-info';
  } else if (confidence < 90) {
    color = 'bg-warning';
    textColor = 'text-warning';
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-2 bg-bg-gray rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${confidence}%` }}
        />
      </div>
      <span className={`text-sm font-semibold ${textColor}`}>{confidence}%</span>
      {confidence < 75 && (
        <span className="text-xs text-info bg-info-light px-2 py-0.5 rounded-full">Learning</span>
      )}
    </div>
  );
}

function SupplierDropdown({ suppliers, isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-ruck-orange hover:text-ruck-orange-hover font-semibold"
      >
        ${suppliers[0].price.toLocaleString()}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-border-gray z-20 overflow-hidden">
          <div className="p-3 bg-bg-gray border-b border-border-gray">
            <p className="text-sm font-medium text-text-secondary">Compare Suppliers</p>
          </div>
          {suppliers.map((supplier, idx) => (
            <div
              key={idx}
              className={`p-4 border-b border-border-gray last:border-b-0 hover:bg-bg-gray transition-colors ${supplier.bestPrice ? 'bg-success-light/30' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-text-primary">{supplier.name}</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-lg text-text-primary">${supplier.price.toLocaleString()}</span>
                  {supplier.bestPrice && (
                    <span className="text-xs bg-success text-white px-2 py-0.5 rounded-full ml-1">BEST</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-success" />
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
                    className={`w-4 h-4 ${i < Math.floor(supplier.rating) ? 'text-warning fill-warning' : 'text-border-gray'}`}
                  />
                ))}
                <span className="text-sm text-text-secondary ml-1">{supplier.rating}</span>
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
      <tr className="hover:bg-bg-gray/50 transition-colors">
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-ruck-orange-light rounded-lg">
              <Icon className="w-5 h-5 text-ruck-orange" />
            </div>
            <span className="font-medium text-text-primary">{prediction.material}</span>
          </div>
        </td>
        <td className="px-6 py-4 text-text-primary">{prediction.quantity}</td>
        <td className="px-6 py-4">
          <ConfidenceBar confidence={prediction.confidence} />
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2 text-text-primary">
            <Calendar className="w-4 h-4 text-text-muted" />
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
            <button className="px-4 py-2 bg-ruck-orange text-white rounded-lg text-sm font-semibold hover:bg-ruck-orange-hover transition-colors whitespace-nowrap">
              Order via Ruck
            </button>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-bg-gray rounded-lg transition-colors"
            >
              <Info className="w-4 h-4 text-text-muted" />
            </button>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-ruck-orange-light/50">
          <td colSpan={6} className="px-6 py-4">
            <div className="flex items-start gap-2 text-sm text-text-secondary">
              <Info className="w-4 h-4 mt-0.5 text-ruck-orange" />
              <div>
                <span className="font-medium text-text-primary">AI Reasoning: </span>
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
    <section className="py-12 px-6 bg-bg-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text-primary mb-2">
            AI Material Predictions - Oak Street Townhomes
          </h2>
          <p className="text-text-secondary">
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
                    ? 'bg-ruck-orange text-white shadow-md'
                    : week.status === 'past'
                    ? 'bg-text-muted/30 text-text-secondary'
                    : 'bg-border-gray text-text-muted'
                }`}
              >
                {week.label}
                {week.status === 'current' && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-ruck-orange"></div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-ruck-orange font-semibold whitespace-nowrap">
                      Current
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Predictions Table */}
        <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-bg-gray border-b border-border-gray">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Confidence</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Needed By</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Est. Cost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-gray">
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
