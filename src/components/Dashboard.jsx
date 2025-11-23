import { useState } from 'react';
import {
  AlertTriangle,
  Truck,
  Package,
  Clock,
  ChevronRight,
  ShoppingCart,
  MapPin,
  Check,
  Calendar,
  DollarSign,
  TrendingUp,
  Star,
  RefreshCw,
  ChevronDown,
  ChevronUp,
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
        <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Truck className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-semibold text-[#1a1a1a]">Incoming Deliveries</span>
          </div>
          {inTransit.length > 0 ? (
            <div className="space-y-3">
              {inTransit.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">{item.material}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <p className="text-xs text-blue-600 font-medium">{item.inTransit}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                    Track
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <Package className="w-8 h-8 text-[#ccc] mx-auto mb-2" />
              <p className="text-sm text-[#666]">No deliveries scheduled</p>
            </div>
          )}
        </div>

        {/* Items to Order - Show actual items */}
        <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FFF4E5] rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-[#FFA500]" />
              </div>
              <span className="font-semibold text-[#1a1a1a]">Urgent Orders</span>
            </div>
            {urgentPredictions.length > 0 && (
              <span className="px-2 py-1 text-xs font-medium text-[#FFA500] bg-[#FFF4E5] rounded-full">
                {urgentPredictions.length} items
              </span>
            )}
          </div>
          {urgentPredictions.length > 0 ? (
            <div className="space-y-2">
              {urgentPredictions.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[#FFFAF0] rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1a1a1a] truncate">{item.material}</p>
                    <p className="text-xs text-[#666]">{item.neededBy.split(',')[0]}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#1a1a1a] ml-2">${item.estimatedCost.toLocaleString()}</span>
                </div>
              ))}
              <button className="w-full mt-2 py-2 text-sm font-medium text-[#FFA500] hover:bg-[#FFF4E5] rounded-lg transition-colors">
                View All →
              </button>
            </div>
          ) : (
            <div className="text-center py-6">
              <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-[#666]">All caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// This Week - Predictions with supplier info
function PredictionsSection({ project, onOrder }) {
  const [expandedRow, setExpandedRow] = useState(null);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#1a1a1a]">This Week</h2>
          <p className="text-sm text-[#666]">AI-powered material predictions</p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5] bg-[#FAFAFA]">
              <th className="text-left text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3">Material</th>
              <th className="text-left text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3">Qty</th>
              <th className="text-left text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3">Confidence</th>
              <th className="text-left text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3">Need By</th>
              <th className="text-right text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3">Best Price</th>
              <th className="text-right text-xs font-semibold text-[#666] uppercase tracking-wide px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {mockPredictions.map((prediction) => {
              const bestSupplier = prediction.suppliers.find(s => s.bestPrice) || prediction.suppliers[0];
              const isExpanded = expandedRow === prediction.id;

              return (
                <>
                  <tr
                    key={prediction.id}
                    className={`border-b border-[#E5E5E5] last:border-b-0 hover:bg-[#FAFAFA] cursor-pointer transition-colors ${isExpanded ? 'bg-[#FAFAFA]' : ''}`}
                    onClick={() => setExpandedRow(isExpanded ? null : prediction.id)}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <button className="text-[#999]">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <div>
                          <p className="text-sm font-medium text-[#1a1a1a]">{prediction.material}</p>
                          <p className="text-xs text-[#999]">{prediction.confidence}% confidence</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-[#1a1a1a]">{prediction.quantity}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              prediction.confidence >= 90 ? 'bg-green-500' :
                              prediction.confidence >= 75 ? 'bg-amber-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${prediction.confidence}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${
                          prediction.confidence >= 90 ? 'text-green-600' :
                          prediction.confidence >= 75 ? 'text-amber-600' : 'text-blue-600'
                        }`}>{prediction.confidence}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#999]" />
                        <span className="text-sm text-[#1a1a1a]">{prediction.neededBy.split(',')[0]}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div>
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-sm font-semibold text-[#1a1a1a]">${bestSupplier.price.toLocaleString()}</span>
                          {bestSupplier.bestPrice && (
                            <span className="px-1.5 py-0.5 text-[10px] font-semibold text-green-700 bg-green-100 rounded">BEST</span>
                          )}
                        </div>
                        <p className="text-xs text-[#999]">{bestSupplier.name}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOrder(prediction);
                        }}
                        className="px-4 py-2 bg-[#FFA500] text-white text-sm font-medium rounded-lg hover:bg-[#E69500] transition-colors"
                      >
                        Order
                      </button>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr key={`${prediction.id}-expanded`} className="bg-[#F8F8F8]">
                      <td colSpan={6} className="px-5 py-4">
                        <div className="ml-7">
                          <p className="text-xs text-[#666] mb-3">
                            <span className="font-medium">AI Reasoning:</span> {prediction.reasoning}
                          </p>
                          <div className="grid grid-cols-3 gap-3">
                            {prediction.suppliers.map((supplier, idx) => (
                              <div
                                key={idx}
                                className={`p-3 rounded-lg border ${supplier.bestPrice ? 'border-green-300 bg-green-50' : 'border-[#E5E5E5] bg-white'}`}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-[#1a1a1a]">{supplier.name}</span>
                                  {supplier.bestPrice && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-semibold text-green-700 bg-green-200 rounded">BEST PRICE</span>
                                  )}
                                </div>
                                <p className="text-lg font-bold text-[#1a1a1a]">${supplier.price.toLocaleString()}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  <span className="text-xs text-[#666]">{supplier.rating}</span>
                                  <span className="text-xs text-[#999] mx-1">•</span>
                                  <span className="text-xs text-[#666]">{supplier.delivery}</span>
                                </div>
                                {supplier.inStock && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <Check className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-green-600">In Stock</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Inventory Summary
function InventorySection({ project, onReorder }) {
  const onSite = mockInventory.filter(i => !i.inTransit && i.statusColor === 'green').length;
  const lowStock = mockInventory.filter(i => i.statusColor === 'amber').length;
  const inTransit = mockInventory.filter(i => i.inTransit).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#1a1a1a]">Inventory</h2>
          <p className="text-sm text-[#666]">Current stock levels</p>
        </div>
        <button className="text-sm text-[#FFA500] font-medium hover:text-[#E69500]">View All →</button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-xl border border-[#E5E5E5] p-4 text-center shadow-sm">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Check className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-[#1a1a1a]">{onSite}</p>
          <p className="text-xs text-[#666]">On Site</p>
        </div>
        <div className="bg-white rounded-xl border border-[#E5E5E5] p-4 text-center shadow-sm">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Truck className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-600">{inTransit}</p>
          <p className="text-xs text-[#666]">In Transit</p>
        </div>
        <div className="bg-white rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
          <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-amber-600">{lowStock}</p>
          <p className="text-xs text-amber-700">Low Stock</p>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-sm overflow-hidden">
        {mockInventory.map((item, idx) => (
          <div
            key={item.id}
            className={`flex items-center justify-between px-5 py-4 ${
              idx !== mockInventory.length - 1 ? 'border-b border-[#E5E5E5]' : ''
            } hover:bg-[#FAFAFA] transition-colors`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                item.statusColor === 'green' ? 'bg-green-100' :
                item.statusColor === 'amber' ? 'bg-amber-100' : 'bg-blue-100'
              }`}>
                {item.statusColor === 'green' && <Check className="w-5 h-5 text-green-600" />}
                {item.statusColor === 'amber' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                {item.statusColor === 'blue' && <Truck className="w-5 h-5 text-blue-600" />}
              </div>
              <div>
                <p className="text-sm font-medium text-[#1a1a1a]">{item.material}</p>
                <p className="text-xs text-[#666]">{item.onSite || item.inTransit}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                item.statusColor === 'green' ? 'text-green-700 bg-green-100' :
                item.statusColor === 'amber' ? 'text-amber-700 bg-amber-100' : 'text-blue-700 bg-blue-100'
              }`}>
                {item.status}
              </span>
              {item.statusColor === 'amber' && (
                <button
                  onClick={() => onReorder && onReorder(item)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FFA500] bg-[#FFF4E5] rounded-lg hover:bg-[#FFEDD5] transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reorder
                </button>
              )}
              {item.trackable && (
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Truck className="w-3 h-3" />
                  Track
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Project Info Card - Enhanced with budget progress and timeline
function ProjectInfo({ project }) {
  if (!project) return null;

  const budgetUsed = (project.spent / project.budget) * 100;
  const budgetRemaining = project.budget - project.spent;

  // Calculate days remaining (mock calculation)
  const daysRemaining = 127; // Mock - would calculate from endDate in real app

  return (
    <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 mb-6 shadow-sm">
      <div className="flex items-start justify-between">
        {/* Left - Project Details */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
              project.statusColor === 'green' ? 'text-green-700 bg-green-100' :
              project.statusColor === 'blue' ? 'text-blue-700 bg-blue-100' :
              'text-amber-700 bg-amber-100'
            }`}>
              {project.phase}
            </span>
          </div>

          {/* Budget Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-[#666]">Budget</span>
              <span className="text-sm font-medium text-[#1a1a1a]">
                ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
              </span>
            </div>
            <div className="w-full h-2.5 bg-[#E5E5E5] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  budgetUsed > 90 ? 'bg-red-500' :
                  budgetUsed > 75 ? 'bg-amber-500' : 'bg-green-500'
                }`}
                style={{ width: `${budgetUsed}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-[#999]">{budgetUsed.toFixed(0)}% used</span>
              <span className="text-xs text-green-600 font-medium">${budgetRemaining.toLocaleString()} remaining</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#999]" />
              <span className="text-[#666]">Started: <span className="font-medium text-[#1a1a1a]">{project.startDate}</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#999]" />
              <span className="text-[#666]">Due: <span className="font-medium text-[#1a1a1a]">{project.endDate}</span></span>
            </div>
          </div>
        </div>

        {/* Right - Progress & Stats */}
        <div className="text-right ml-8 pl-8 border-l border-[#E5E5E5]">
          <div className="mb-3">
            <p className="text-3xl font-bold text-[#1a1a1a]">{project.progress}%</p>
            <p className="text-sm text-[#666]">Complete</p>
          </div>
          <div className="w-40 h-2.5 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFA500] rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          {project.aiAccuracy && (
            <div className="flex items-center gap-1.5 justify-end mt-3">
              <TrendingUp className="w-3.5 h-3.5 text-green-500" />
              <span className="text-xs text-green-600 font-medium">{project.aiAccuracy}% AI Accuracy</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ project }) {
  const handleOrder = (prediction) => {
    const bestSupplier = prediction.suppliers.find(s => s.bestPrice) || prediction.suppliers[0];
    alert(`Order placed for ${prediction.material} from ${bestSupplier.name} at $${bestSupplier.price.toLocaleString()}`);
  };

  const handleReorder = (item) => {
    alert(`Reorder placed for ${item.material}`);
  };

  if (!project) {
    return (
      <div className="px-8 py-12 text-center">
        <Package className="w-12 h-12 text-[#999] mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-[#1a1a1a] mb-2">Select a Project</h2>
        <p className="text-[#666]">Choose a project from the dropdown above to get started</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-6">
      {/* Project Info */}
      <ProjectInfo project={project} />

      {/* Alerts */}
      <AlertsSection project={project} />

      {/* Today */}
      <TodaySection project={project} />

      {/* This Week - Predictions */}
      <PredictionsSection project={project} onOrder={handleOrder} />

      {/* Inventory */}
      <InventorySection project={project} onReorder={handleReorder} />
    </div>
  );
}
