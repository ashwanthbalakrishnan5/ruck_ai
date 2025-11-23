import { useState } from 'react';
import {
  TreePine,
  Construction,
  Zap,
  Droplets,
  MapPin,
  QrCode,
  Package,
  AlertTriangle,
  Truck as TruckIcon,
} from 'lucide-react';
import { mockInventory, inventoryStats } from '../data/mockInventory';

const iconMap = {
  TreePine,
  Construction,
  Zap,
  Droplets,
};

const badgeColors = {
  green: 'bg-success-light text-success-dark',
  amber: 'bg-warning-light text-warning-dark',
  blue: 'bg-info-light text-info-dark',
  gray: 'bg-bg-gray text-text-secondary',
};

const statusColors = {
  green: 'text-success',
  amber: 'text-warning',
  blue: 'text-info',
};

const filterOptions = ['All Materials', 'On Site', 'In Transit', 'Low Stock'];

function ToggleSwitch({ enabled }) {
  return (
    <button
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-success' : 'bg-border-gray'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
          enabled ? 'translate-x-5' : ''
        }`}
      />
    </button>
  );
}

function InventoryCard({ item }) {
  const Icon = iconMap[item.icon] || Package;
  const badgeColor = badgeColors[item.badgeColor] || badgeColors.gray;
  const statusColor = statusColors[item.statusColor] || 'text-text-secondary';

  return (
    <div className="bg-white rounded-xl border border-border-gray p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-bg-gray rounded-lg">
          <Icon className="w-6 h-6 text-text-secondary" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
          {item.badge}
        </span>
      </div>

      {/* Material Name */}
      <h4 className="text-lg font-semibold text-text-primary mb-2">{item.material}</h4>

      {/* On Site / In Transit */}
      <div className="mb-3">
        {item.inTransit ? (
          <p className="text-info font-medium">{item.inTransit}</p>
        ) : item.onSite ? (
          <p className={`font-medium ${item.statusColor === 'amber' ? 'text-warning' : 'text-text-primary'}`}>
            {item.onSite}
          </p>
        ) : null}
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mb-3">
        {item.statusColor === 'amber' && <AlertTriangle className="w-4 h-4 text-warning" />}
        <span className={`text-sm font-medium ${statusColor}`}>{item.status}</span>
      </div>

      {/* Last Updated */}
      <p className="text-xs text-text-muted mb-4">Last Updated: {item.lastUpdated}</p>

      {/* Actions */}
      <div className="pt-4 border-t border-border-gray">
        {item.hasAutoOrder && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">Auto-order</span>
            <ToggleSwitch enabled={item.autoOrderEnabled} />
          </div>
        )}
        {item.trackable && (
          <button className="flex items-center gap-2 text-sm text-info font-medium hover:text-info-dark transition-colors">
            <MapPin className="w-4 h-4" />
            Track Driver
          </button>
        )}
        {item.hasScanQR && (
          <button className="flex items-center gap-2 text-sm text-ruck-orange font-medium hover:text-ruck-orange-hover transition-colors">
            <QrCode className="w-4 h-4" />
            Scan QR Code
          </button>
        )}
        {!item.hasAutoOrder && !item.trackable && !item.hasScanQR && (
          <button className="text-sm text-ruck-orange font-medium hover:text-ruck-orange-hover transition-colors">
            View Details
          </button>
        )}
      </div>
    </div>
  );
}

export default function InventoryGrid() {
  const [activeFilter, setActiveFilter] = useState('All Materials');

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-semibold text-text-primary">
            Current Inventory - Oak Street Townhomes
          </h2>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-ruck-orange text-white'
                    : 'bg-bg-gray text-text-secondary hover:bg-border-gray'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockInventory.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-bg-gray rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-text-muted" />
              <span className="text-sm text-text-secondary">
                Total Items: <span className="font-semibold text-text-primary">{inventoryStats.totalItems}</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border-gray" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary">
                Total Value: <span className="font-semibold text-text-primary">${inventoryStats.totalValue.toLocaleString()}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <span className="text-sm text-text-secondary">
                Low Stock Alerts: <span className="font-semibold text-warning">{inventoryStats.lowStockAlerts}</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border-gray" />
            <div className="flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-info" />
              <span className="text-sm text-text-secondary">
                In Transit: <span className="font-semibold text-info">{inventoryStats.inTransit}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
