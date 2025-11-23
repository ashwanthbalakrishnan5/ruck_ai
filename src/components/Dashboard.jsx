import {
  AlertTriangle,
  Truck,
  Package,
  Clock,
  ChevronRight,
  ShoppingCart,
  MapPin,
  Check,
} from 'lucide-react';
import { mockPredictions } from '../data/mockPredictions';
import { mockInventory } from '../data/mockInventory';

// Alerts that need immediate attention
function AlertsSection({ project }) {
  const alerts = [];

  // Check for low stock
  const lowStock = mockInventory.filter(item => item.statusColor === 'amber');
  if (lowStock.length > 0) {
    alerts.push({
      type: 'warning',
      message: `Low stock: ${lowStock.map(i => i.material).join(', ')}`,
      action: 'Order Now',
    });
  }

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-2 mb-6">
      {alerts.map((alert, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-amber-800">{alert.message}</span>
          </div>
          <button className="text-sm font-medium text-amber-700 hover:text-amber-900">
            {alert.action} →
          </button>
        </div>
      ))}
    </div>
  );
}

// Today's section - deliveries and urgent items
function TodaySection({ project }) {
  const inTransit = mockInventory.filter(item => item.inTransit);
  const urgentPredictions = mockPredictions.filter(p =>
    p.neededBy.includes('Thursday') || p.neededBy.includes('Friday')
  );

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Today</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Incoming Deliveries */}
        <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="font-medium text-[#1a1a1a]">Incoming</span>
          </div>
          {inTransit.length > 0 ? (
            <div className="space-y-3">
              {inTransit.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">{item.material}</p>
                    <p className="text-xs text-[#666]">{item.inTransit}</p>
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Track
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#666]">No deliveries today</p>
          )}
        </div>

        {/* Items to Order */}
        <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-5 h-5 text-[#FFA500]" />
            <span className="font-medium text-[#1a1a1a]">To Order</span>
          </div>
          {urgentPredictions.length > 0 ? (
            <div>
              <p className="text-2xl font-bold text-[#1a1a1a]">{urgentPredictions.length}</p>
              <p className="text-sm text-[#666] mb-2">items needed this week</p>
              <button className="text-sm text-[#FFA500] font-medium hover:text-[#E69500]">
                Review →
              </button>
            </div>
          ) : (
            <p className="text-sm text-[#666]">All caught up</p>
          )}
        </div>
      </div>
    </div>
  );
}

// This Week - Predictions
function PredictionsSection({ project, onOrder }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">This Week</h2>
        <span className="text-sm text-[#666]">AI Predictions</span>
      </div>
      <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5] bg-[#FAFAFA]">
              <th className="text-left text-xs font-medium text-[#666] px-4 py-3">Material</th>
              <th className="text-left text-xs font-medium text-[#666] px-4 py-3">Qty</th>
              <th className="text-left text-xs font-medium text-[#666] px-4 py-3">Need By</th>
              <th className="text-right text-xs font-medium text-[#666] px-4 py-3">Est. Cost</th>
              <th className="text-right text-xs font-medium text-[#666] px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {mockPredictions.map((prediction) => (
              <tr key={prediction.id} className="border-b border-[#E5E5E5] last:border-b-0 hover:bg-[#FAFAFA]">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-[#1a1a1a]">{prediction.material}</p>
                  <p className="text-xs text-[#999]">{prediction.confidence}% confidence</p>
                </td>
                <td className="px-4 py-3 text-sm text-[#1a1a1a]">{prediction.quantity}</td>
                <td className="px-4 py-3">
                  <span className="text-sm text-[#1a1a1a]">{prediction.neededBy.split(',')[0]}</span>
                </td>
                <td className="px-4 py-3 text-right text-sm font-medium text-[#1a1a1a]">
                  ${prediction.estimatedCost.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onOrder(prediction)}
                    className="px-3 py-1.5 bg-[#FFA500] text-white text-sm font-medium rounded-md hover:bg-[#E69500] transition-colors"
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Inventory Summary
function InventorySection({ project }) {
  const onSite = mockInventory.filter(i => !i.inTransit && i.statusColor === 'green').length;
  const lowStock = mockInventory.filter(i => i.statusColor === 'amber').length;
  const inTransit = mockInventory.filter(i => i.inTransit).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">Inventory</h2>
        <button className="text-sm text-[#FFA500] hover:text-[#E69500]">View All →</button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg border border-[#E5E5E5] p-4 text-center">
          <p className="text-2xl font-bold text-[#1a1a1a]">{onSite}</p>
          <p className="text-xs text-[#666]">On Site</p>
        </div>
        <div className="bg-white rounded-lg border border-[#E5E5E5] p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{inTransit}</p>
          <p className="text-xs text-[#666]">In Transit</p>
        </div>
        <div className="bg-white rounded-lg border border-amber-200 bg-amber-50 p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">{lowStock}</p>
          <p className="text-xs text-amber-700">Low Stock</p>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white rounded-lg border border-[#E5E5E5]">
        {mockInventory.map((item, idx) => (
          <div
            key={item.id}
            className={`flex items-center justify-between px-4 py-3 ${
              idx !== mockInventory.length - 1 ? 'border-b border-[#E5E5E5]' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {item.statusColor === 'green' && <Check className="w-4 h-4 text-green-500" />}
              {item.statusColor === 'amber' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
              {item.statusColor === 'blue' && <Truck className="w-4 h-4 text-blue-500" />}
              <div>
                <p className="text-sm font-medium text-[#1a1a1a]">{item.material}</p>
                <p className="text-xs text-[#666]">{item.onSite || item.inTransit}</p>
              </div>
            </div>
            <span className={`text-xs font-medium ${
              item.statusColor === 'green' ? 'text-green-600' :
              item.statusColor === 'amber' ? 'text-amber-600' : 'text-blue-600'
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Project Info Card
function ProjectInfo({ project }) {
  if (!project) return null;

  return (
    <div className="bg-white rounded-lg border border-[#E5E5E5] p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-[#666] mb-1">
            <MapPin className="w-4 h-4" />
            {project.location}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#666]">Phase: <span className="font-medium text-[#1a1a1a]">{project.phase}</span></span>
            <span className="text-sm text-[#666]">Budget: <span className="font-medium text-[#1a1a1a]">${project.budget.toLocaleString()}</span></span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#1a1a1a]">{project.progress}%</p>
          <div className="w-32 h-2 bg-[#E5E5E5] rounded-full mt-1">
            <div
              className="h-full bg-[#FFA500] rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ project }) {
  const handleOrder = (prediction) => {
    alert(`Order placed for ${prediction.material}`);
  };

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <Package className="w-12 h-12 text-[#999] mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-[#1a1a1a] mb-2">Select a Project</h2>
        <p className="text-[#666]">Choose a project from the dropdown above to get started</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      {/* Project Info */}
      <ProjectInfo project={project} />

      {/* Alerts */}
      <AlertsSection project={project} />

      {/* Today */}
      <TodaySection project={project} />

      {/* This Week - Predictions */}
      <PredictionsSection project={project} onOrder={handleOrder} />

      {/* Inventory */}
      <InventorySection project={project} />
    </div>
  );
}
