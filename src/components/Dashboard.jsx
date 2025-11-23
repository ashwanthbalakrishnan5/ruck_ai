import { useState } from 'react';
import {
  Plus,
  Clock,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  MapPin,
  ChevronRight,
  Package,
  Truck,
  CheckCircle,
  Brain,
  ShoppingCart,
} from 'lucide-react';
import { mockProjects, dashboardStats } from '../data/mockProjects';
import { mockPredictions } from '../data/mockPredictions';
import { mockInventory } from '../data/mockInventory';

function StatCard({ icon: Icon, label, value, trend, trendUp }) {
  return (
    <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-5 h-5 text-[#666]" />
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-[#1a1a1a]">{value}</p>
      <p className="text-sm text-[#666]">{label}</p>
    </div>
  );
}

function ProjectRow({ project, onClick }) {
  const statusColors = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-700',
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 hover:bg-[#FAFAFA] cursor-pointer border-b border-[#E5E5E5] last:border-b-0"
    >
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-[#1a1a1a]">{project.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[project.statusColor]}`}>
              {project.status}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#666] mt-1">
            <MapPin className="w-3 h-3" />
            {project.location}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-sm font-medium text-[#1a1a1a]">{project.progress}%</p>
          <div className="w-24 h-1.5 bg-[#E5E5E5] rounded-full mt-1">
            <div
              className="h-full bg-[#FFA500] rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        {project.predictionsReady > 0 && (
          <span className="flex items-center gap-1 text-sm text-[#FFA500] font-medium">
            <Brain className="w-4 h-4" />
            {project.predictionsReady}
          </span>
        )}
        <ChevronRight className="w-5 h-5 text-[#999]" />
      </div>
    </div>
  );
}

function PredictionRow({ prediction, onOrder }) {
  const confidenceColor = prediction.confidence >= 90 ? 'text-green-600' : prediction.confidence >= 80 ? 'text-amber-600' : 'text-blue-600';

  return (
    <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5] last:border-b-0">
      <div className="flex-1">
        <p className="font-medium text-[#1a1a1a]">{prediction.material}</p>
        <p className="text-sm text-[#666]">{prediction.quantity} • Needed by {prediction.neededBy}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className={`text-sm font-medium ${confidenceColor}`}>{prediction.confidence}%</p>
          <p className="text-xs text-[#999]">confidence</p>
        </div>
        <p className="font-medium text-[#1a1a1a]">${prediction.estimatedCost.toLocaleString()}</p>
        <button
          onClick={() => onOrder(prediction)}
          className="px-4 py-2 bg-[#FFA500] text-white text-sm font-medium rounded-lg hover:bg-[#E69500] transition-colors"
        >
          Order
        </button>
      </div>
    </div>
  );
}

function InventoryItem({ item }) {
  const statusColors = {
    green: 'text-green-600',
    amber: 'text-amber-600',
    blue: 'text-blue-600',
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-[#E5E5E5] last:border-b-0">
      <div>
        <p className="font-medium text-[#1a1a1a] text-sm">{item.material}</p>
        <p className="text-xs text-[#666]">{item.onSite || item.inTransit}</p>
      </div>
      <div className="flex items-center gap-2">
        {item.statusColor === 'amber' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
        {item.inTransit && <Truck className="w-4 h-4 text-blue-500" />}
        <span className={`text-xs font-medium ${statusColors[item.statusColor]}`}>
          {item.status}
        </span>
      </div>
    </div>
  );
}

export default function Dashboard({ onNewProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOrder = (prediction) => {
    alert(`Order placed for ${prediction.material}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Dashboard</h1>
          <p className="text-[#666]">Welcome back, Sarah</p>
        </div>
        <button
          onClick={onNewProject}
          className="flex items-center gap-2 px-4 py-2 bg-[#FFA500] text-white font-medium rounded-lg hover:bg-[#E69500] transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={Clock}
          label="Hours Saved"
          value={`${dashboardStats.hoursSavedThisMonth}h`}
          trend={dashboardStats.hoursTrend}
          trendUp={true}
        />
        <StatCard
          icon={DollarSign}
          label="Money Saved"
          value={`$${dashboardStats.moneySavedThisMonth.toLocaleString()}`}
          trend={dashboardStats.moneyTrend}
          trendUp={true}
        />
        <StatCard
          icon={AlertTriangle}
          label="Stockouts Prevented"
          value={dashboardStats.stockoutsPrevented}
        />
        <StatCard
          icon={TrendingUp}
          label="AI Accuracy"
          value={`${dashboardStats.aiAccuracy}%`}
          trend={dashboardStats.accuracyTrend}
          trendUp={true}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Projects */}
        <div className="col-span-2 space-y-6">
          {/* Projects */}
          <div className="bg-white rounded-lg border border-[#E5E5E5]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <h2 className="font-semibold text-[#1a1a1a]">Active Projects</h2>
              <span className="text-sm text-[#666]">{mockProjects.length} projects</span>
            </div>
            <div>
              {mockProjects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>

          {/* AI Predictions */}
          <div className="bg-white rounded-lg border border-[#E5E5E5]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#FFA500]" />
                <h2 className="font-semibold text-[#1a1a1a]">AI Predictions</h2>
              </div>
              <span className="text-sm text-[#666]">Oak Street Townhomes</span>
            </div>
            <div>
              {mockPredictions.slice(0, 4).map((prediction) => (
                <PredictionRow
                  key={prediction.id}
                  prediction={prediction}
                  onOrder={handleOrder}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
            <h2 className="font-semibold text-[#1a1a1a] mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-[#FAFAFA] rounded-lg transition-colors">
                <Package className="w-5 h-5 text-[#666]" />
                <span className="text-sm text-[#1a1a1a]">Track Deliveries</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-[#FAFAFA] rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-[#666]" />
                <span className="text-sm text-[#1a1a1a]">Order History</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-[#FAFAFA] rounded-lg transition-colors">
                <Brain className="w-5 h-5 text-[#666]" />
                <span className="text-sm text-[#1a1a1a]">View All Predictions</span>
              </button>
            </div>
          </div>

          {/* Inventory Status */}
          <div className="bg-white rounded-lg border border-[#E5E5E5]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <h2 className="font-semibold text-[#1a1a1a]">Inventory</h2>
              <button className="text-sm text-[#FFA500] hover:text-[#E69500]">View All</button>
            </div>
            <div>
              {mockInventory.map((item) => (
                <InventoryItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Upcoming Delivery */}
          <div className="bg-[#FFF8EB] rounded-lg border border-[#FFA500]/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-[#FFA500]" />
              <span className="font-medium text-[#1a1a1a]">Delivery Today</span>
            </div>
            <p className="text-sm text-[#666] mb-3">Wire & Conduit • ETA 2:30 PM</p>
            <button className="text-sm text-[#FFA500] font-medium hover:text-[#E69500]">
              Track Driver →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
