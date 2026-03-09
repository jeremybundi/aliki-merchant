"use client";
import SideNav from "../../components/SideNav";
import TopNav from "./TopNav";
import StatCard from "./StatCard";
import RecentTransactions from "./RecentTransactions";
import PerformanceChart from "./PerformanceChart";
import ChannelDistribution from "./ChannelDistribution"; // 1. Import it

export default function Dashboard() {
  return (
<div className="flex h-screen bg-[#f8fafc] overflow-hidden">    
      <main className="flex-1 flex flex-col min-w-0">
        <TopNav />
        
        <div className="px-8 py-4 space-y-4 overflow-y-auto">
          {/* Welcome Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-[#1e293b]">Merchant Dashboard</h1>
              <p className="text-sm text-slate-400 mt-1">Real-time visibility for Aliki Money Transfer Ltd.</p>
            </div>
            <button className="bg-[#448ff0] hover:bg-[#3b82f6] text-white text-xs font-bold py-2.5 px-6 rounded-lg  transition-all">
              Generate Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard title="Available Balance" value="KES 4,280,500.00" footerText="Low Balance Alert" variant="warning" />
            <StatCard title="Pending Payouts" value="142" footerText="82% processing < 2m" variant="info" />
            <StatCard title="Terminated Today" value="1,894" footerText="+12.5% vs prev" variant="success" />
            <StatCard title="Success Rate" value="98.2%" footerText="Optimized" variant="info" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <PerformanceChart />
            
            <div className="space-y-2">
              {/* Breakdown Card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100">
                 <h3 className="text-xs font-bold text-slate-700 uppercase mb-6">Transaction Success Breakdown</h3>
                 <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2">
                            <span className="text-slate-400">SUCCESS</span>
                            <span className="text-emerald-500">97.4%</span>
                        </div>
                        <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 w-[97.4%]"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2">
                            <span className="text-slate-400">FAILED</span>
                            <span className="text-rose-500">1.2%</span>
                        </div>
                        <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-400 w-[1.2%]"></div>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Volume Summary Card */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100">
                 <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Volume Summary</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Count</p>
                        <p className="text-xl font-bold text-slate-800">57</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Value</p>
                        <p className="text-xl font-bold text-[#3b82f6]">6,819.60</p>
                    </div>
                 </div>
              </div>

              {/* 2. ADD THE CHANNEL DISTRIBUTION CARD HERE */}
              <ChannelDistribution />
            </div>
          </div>

          <RecentTransactions />
        </div>
      </main>
    </div>
  );
}