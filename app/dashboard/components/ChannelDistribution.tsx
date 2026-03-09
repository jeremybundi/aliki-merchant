"use client";

import React from "react";

export default function ChannelDistribution() {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100  flex flex-col items-center">
      <div className="relative w-28 h-28 mb-3">
        {/* Simple SVG Donut Chart */}
        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth="3.5"
          />
          {/* M-Pesa Segment (Blue) - 70% */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="3.5"
            strokeDasharray="70 30"
            strokeDashoffset="0"
            strokeLinecap="round"
          />
          {/* Bank Segment (Light Blue) - 15% */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="#60a5fa"
            strokeWidth="3.5"
            strokeDasharray="15 85"
            strokeDashoffset="-70"
          />
          {/* Cash Segment (Green) - 15% */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="transparent"
            stroke="#34d399"
            strokeWidth="3.5"
            strokeDasharray="15 85"
            strokeDashoffset="-85"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-[#1e293b] leading-none">70%</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase mt-1">Mobile</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase">M-Pesa</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase">Bank</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#34d399]"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase">Cash</span>
        </div>
      </div>
    </div>
  );
}