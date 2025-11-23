import { User } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#FFA500] z-50 shadow-md">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path
                d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21V15H15V21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="16" y="3" width="3" height="5" fill="white" rx="0.5" />
            </svg>
          </div>
          <span className="text-white font-bold text-2xl tracking-wide">RUCK</span>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <span className="text-white/90 font-medium hover:text-white cursor-pointer transition-opacity">
            Suppliers
          </span>
          <span className="text-white/60">|</span>
          <span className="text-white/90 font-medium hover:text-white cursor-pointer transition-opacity">
            Pros
          </span>
          <span className="text-white/60">|</span>
          <span className="text-white/90 font-medium hover:text-white cursor-pointer transition-opacity">
            Drivers
          </span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="bg-white text-[#FFA500] px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors">
              Intelligence
            </button>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#10B981] rounded-full border-2 border-[#FFA500]"></span>
          </div>
          <button className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white/10 transition-colors">
            <User className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
