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
      <div className="bg-white rounded-xl shadow-lg border border-border-gray overflow-hidden w-80">
        <div className="flex items-start gap-3 p-4 border-l-4 border-l-success">
          <div className="w-8 h-8 bg-success-light rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-success" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-text-primary text-sm">Success</p>
            <p className="text-text-secondary text-sm mt-0.5">
              Prediction accuracy improved to 94%
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="p-1 hover:bg-bg-gray rounded transition-colors"
          >
            <X className="w-4 h-4 text-text-muted" />
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-bg-gray">
          <div
            className="h-full bg-success transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
