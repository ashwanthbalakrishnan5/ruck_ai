import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

export default function NotificationToast() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-slide-in">
      <div className="bg-white rounded-xl shadow-lg border border-[#E5E7EB] overflow-hidden w-80">
        <div className="flex items-start gap-3 p-4 border-l-4 border-l-[#10B981]">
          <div className="w-8 h-8 bg-[#D1FAE5] rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-[#10B981]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#1F2937] text-sm">Success</p>
            <p className="text-[#6B7280] text-sm mt-0.5">
              Prediction accuracy improved to 94%
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="p-1 hover:bg-[#F8F9FA] rounded transition-colors"
          >
            <X className="w-4 h-4 text-[#9CA3AF]" />
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-[#F8F9FA]">
          <div
            className="h-full bg-[#10B981] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
