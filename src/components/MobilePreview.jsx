import { Check, Home, FolderKanban, ScanLine, ShoppingCart, User, Bell, Bot } from 'lucide-react';

const features = [
  'Scan QR codes to update inventory',
  'Photo upload for delivery confirmation',
  'Voice notes for quick updates',
  'Push notifications for predictions',
  'Offline mode with sync',
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] bg-text-primary rounded-[40px] p-3 shadow-2xl">
      {/* Phone frame */}
      <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-text-primary rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="h-full flex flex-col">
          {/* Status bar */}
          <div className="h-12 bg-ruck-orange flex items-center justify-center pt-3">
            <span className="text-white font-semibold text-sm">Ruck Intelligence</span>
          </div>

          {/* Project header */}
          <div className="bg-ruck-orange px-4 pb-4">
            <p className="text-white/80 text-xs">Current Project</p>
            <p className="text-white font-semibold text-sm">Oak Street Townhomes</p>
          </div>

          {/* Main content */}
          <div className="flex-1 bg-bg-gray p-4 space-y-4">
            {/* Notification Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border-gray">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-ruck-orange-light rounded-full">
                  <Bot className="w-5 h-5 text-ruck-orange" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-text-primary text-sm">New Prediction Ready</p>
                    <span className="w-2 h-2 bg-ruck-orange rounded-full animate-pulse" />
                  </div>
                  <p className="text-text-secondary text-xs mt-1">Drywall needed by Thursday</p>
                  <p className="text-text-muted text-xs mt-1">94% confidence • 180 sheets</p>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-ruck-orange text-white rounded-lg text-sm font-semibold">
                Order Now
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 shadow-sm border border-border-gray">
                <p className="text-xs text-text-muted">On Site</p>
                <p className="text-lg font-bold text-text-primary">47</p>
                <p className="text-xs text-success">items</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm border border-border-gray">
                <p className="text-xs text-text-muted">In Transit</p>
                <p className="text-lg font-bold text-info">1</p>
                <p className="text-xs text-info">delivery</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-border-gray">
              <p className="text-xs font-semibold text-text-primary mb-3">Recent Activity</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Bell className="w-3 h-3" />
                  <span>Order #47291 arriving today</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Check className="w-3 h-3 text-success" />
                  <span>Cement inventory updated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="h-16 bg-white border-t border-border-gray flex items-center justify-around px-2">
            <div className="flex flex-col items-center gap-1">
              <Home className="w-5 h-5 text-ruck-orange" />
              <span className="text-[10px] text-ruck-orange font-medium">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FolderKanban className="w-5 h-5 text-text-muted" />
              <span className="text-[10px] text-text-muted">Projects</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="p-2 bg-ruck-orange rounded-full -mt-4 shadow-md">
                <ScanLine className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] text-text-muted mt-1">Scan</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShoppingCart className="w-5 h-5 text-text-muted" />
              <span className="text-[10px] text-text-muted">Orders</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <User className="w-5 h-5 text-text-muted" />
              <span className="text-[10px] text-text-muted">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobilePreview() {
  return (
    <section className="py-16 px-6 bg-bg-gray">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text-primary mb-2">
            Mobile Experience
          </h2>
          <p className="text-text-secondary">
            Contractors use Ruck Intelligence on-the-go
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Everything you need in the field
            </h3>
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-success-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <span className="text-lg text-text-primary">{feature}</span>
              </div>
            ))}
            <button className="mt-8 px-6 py-3 bg-ruck-orange text-white rounded-lg font-semibold hover:bg-ruck-orange-hover transition-colors shadow-sm">
              Download the App
            </button>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
