import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Boxes,
} from 'lucide-react';
import { mockInventory, inventoryStats } from '../data/mockInventory';

const iconMap = {
  TreePine,
  Construction,
  Zap,
  Droplets,
};

const badgeColors = {
  green: 'bg-[#D1FAE5] text-[#065F46]',
  amber: 'bg-[#FEF3C7] text-[#92400E]',
  blue: 'bg-[#DBEAFE] text-[#1E40AF]',
  gray: 'bg-[#F3F4F6] text-[#6B7280]',
};

const statusColors = {
  green: 'text-[#10B981]',
  amber: 'text-[#F59E0B]',
  blue: 'text-[#3B82F6]',
};

const filterOptions = ['All Materials', 'On Site', 'In Transit', 'Low Stock'];

function ToggleSwitch({ enabled }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        enabled ? 'bg-gradient-to-r from-[#10B981] to-[#34D399]' : 'bg-[#E5E7EB]'
      }`}
    >
      <motion.span
        animate={{ x: enabled ? 24 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-md"
      />
    </motion.button>
  );
}

function InventoryCard({ item, index }) {
  const Icon = iconMap[item.icon] || Package;
  const badgeColor = badgeColors[item.badgeColor] || badgeColors.gray;
  const statusColor = statusColors[item.statusColor] || 'text-[#6B7280]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-gradient-to-br from-[#F8F9FA] to-[#F3F4F6] rounded-xl shadow-sm"
          >
            <Icon className="w-6 h-6 text-[#6B7280] group-hover:text-[#FFA500] transition-colors" />
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${badgeColor}`}
          >
            {item.badge}
          </motion.span>
        </div>

        {/* Material Name */}
        <h4 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#FFA500] transition-colors">
          {item.material}
        </h4>

        {/* On Site / In Transit */}
        <div className="mb-3 min-h-[24px]">
          {item.inTransit ? (
            <p className="text-[#3B82F6] font-semibold flex items-center gap-1">
              <TruckIcon className="w-4 h-4" />
              {item.inTransit}
            </p>
          ) : item.onSite ? (
            <p className={`font-semibold ${item.statusColor === 'amber' ? 'text-[#F59E0B]' : 'text-[#1F2937]'}`}>
              {item.onSite}
            </p>
          ) : null}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-3">
          {item.statusColor === 'amber' && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
            </motion.div>
          )}
          <span className={`text-sm font-medium ${statusColor}`}>{item.status}</span>
        </div>

        {/* Last Updated */}
        <p className="text-xs text-[#9CA3AF] mb-4">Last Updated: {item.lastUpdated}</p>

        {/* Actions */}
        <div className="pt-4 border-t border-dashed border-[#E5E7EB]">
          {item.hasAutoOrder && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280] font-medium">Auto-order</span>
              <ToggleSwitch enabled={item.autoOrderEnabled} />
            </div>
          )}
          {item.trackable && (
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-sm text-[#3B82F6] font-semibold hover:text-[#1E40AF] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Track Driver
            </motion.button>
          )}
          {item.hasScanQR && (
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-sm text-[#FFA500] font-semibold hover:text-[#FF9500] transition-colors"
            >
              <QrCode className="w-4 h-4" />
              Scan QR Code
            </motion.button>
          )}
          {!item.hasAutoOrder && !item.trackable && !item.hasScanQR && (
            <motion.button
              whileHover={{ x: 4 }}
              className="text-sm text-[#FFA500] font-semibold hover:text-[#FF9500] transition-colors"
            >
              View Details →
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function InventoryGrid() {
  const [activeFilter, setActiveFilter] = useState('All Materials');

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-bl from-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl shadow-lg shadow-[#10B981]/20">
                <Boxes className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
                Current Inventory
              </h2>
            </div>
            <p className="text-[#6B7280] ml-14">
              Oak Street Townhomes • Real-time material tracking
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#FFA500] to-[#FF9500] text-white shadow-lg shadow-[#FFA500]/20'
                    : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {mockInventory.map((item, index) => (
            <InventoryCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#F8F9FA] via-[#FAFAFA] to-[#F8F9FA] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-[#E5E7EB]"
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Package className="w-5 h-5 text-[#9CA3AF]" />
              </div>
              <span className="text-sm text-[#6B7280]">
                Total Items: <span className="font-bold text-[#1F2937] text-base">{inventoryStats.totalItems}</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E5E7EB]" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">
                Total Value: <span className="font-bold text-[#1F2937] text-base">${inventoryStats.totalValue.toLocaleString()}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="p-2 bg-[#FEF3C7] rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              </motion.div>
              <span className="text-sm text-[#6B7280]">
                Low Stock: <span className="font-bold text-[#F59E0B] text-base">{inventoryStats.lowStockAlerts}</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#E5E7EB]" />
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#DBEAFE] rounded-lg">
                <TruckIcon className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <span className="text-sm text-[#6B7280]">
                In Transit: <span className="font-bold text-[#3B82F6] text-base">{inventoryStats.inTransit}</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
