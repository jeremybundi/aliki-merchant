export default function PerformanceChart() {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100  col-span-2 h-full">
      <div className="flex justify-between items-start mb-10">
        <h3 className="font-bold text-[#1e293b]">Daily Transaction Performance</h3>
        <div className="flex gap-4">
          <div className="flex bg-slate-50 p-1 rounded-lg">
            <button className="px-4 py-1.5 text-xs font-bold bg-white rounded-md text-slate-700">Volume</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-400">Count</button>
          </div>
          <div className="flex bg-slate-50 p-1 rounded-lg">
            <button className="px-4 py-1.5 text-xs font-bold bg-white  rounded-md text-slate-700">7D</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-400">30D</button>
          </div>
        </div>
      </div>
      
      {/* Mock SVG Chart */}
      <div className="relative h-[280px] w-full flex items-end">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          <path 
            d="M0 250 Q 150 250, 250 100 T 500 180 T 750 220 T 1000 150" 
            fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"
          />
          <path 
             d="M0 250 Q 150 250, 250 100 T 500 180 T 750 220 T 1000 150 V 300 H 0 Z"
             fill="url(#chartGradient)"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-slate-400 uppercase">
        <span>Feb 8</span><span>Feb 9</span><span>Feb 10</span><span>Feb 11</span><span>Feb 12</span><span>Feb 13</span><span>Feb 14</span>
      </div>
    </div>
  );
}