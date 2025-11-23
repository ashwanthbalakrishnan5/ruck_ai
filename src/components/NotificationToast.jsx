import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, TrendingUp } from 'lucide-react';

export default function NotificationToast() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setVisible(false);
          return 0;
        }
        return prev - 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed top-20 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-[#E5E7EB] overflow-hidden w-[340px]"
          >
            <div className="flex items-start gap-4 p-5 border-l-4 border-l-[#10B981]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                className="w-10 h-10 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
              >
                <Check className="w-5 h-5 text-[#10B981]" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[#1F2937]">AI Accuracy Improved</p>
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <p className="text-[#6B7280] text-sm mt-1">
                  Prediction accuracy improved to{' '}
                  <span className="font-semibold text-[#10B981]">94%</span>
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setVisible(false)}
                className="p-1.5 hover:bg-[#F3F4F6] rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-[#9CA3AF]" />
              </motion.button>
            </div>
            {/* Progress bar */}
            <div className="h-1 bg-[#F3F4F6]">
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
