"use client";
import React, { useState } from "react";
import { 
  Search, Filter, Download, ChevronDown, ChevronUp, 
  RefreshCw, FileText, LayoutGrid, ChevronLeft, ChevronRight,
  Copy, RotateCw, ChevronRight as ChevronRightIcon
} from "lucide-react";
import StatCard from "@/app/dashboard/components/StatCard";

interface TransactionsListProps {
  onViewDetails: (id: string) => void;
}

export default function TransactionsList({ onViewDetails }: TransactionsListProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>("TXN-920418302");

  const transactions = [
    { id: "TXN-920418301", ref: "RD-55410", date: "May 24, 2024 • 14:32", beneficiary: "Jane Doe", phone: "254 712 *** 890", amount: "4,500.00", status: "SUCCESS", channel: "M-pesa" },
    { id: "TXN-920418302", ref: "RD-55411", date: "May 24, 2024 • 14:45", beneficiary: "John Mwangi", phone: "254 722 *** 451", amount: "12,200.00", status: "PROCESSING", channel: "Bank (Equity)" },
    { id: "TXN-920418303", ref: "RD-55412", date: "May 24, 2024 • 15:10", beneficiary: "Sarah Wanjiru", phone: "254 700 *** 112", amount: "2,000.00", status: "FAILED", channel: "Airtel Money" },
    { id: "TXN-920418304", ref: "RD-55415", date: "May 24, 2024 • 15:55", beneficiary: "Michael K.", phone: "254 711 *** 333", amount: "150,000.00", status: "SUCCESS", channel: "NCBA Bank" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Transactions</h1>
          <p className="text-sm text-slate-400">Manage and track your payout performance across all channels.</p>
        </div>
        <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
          <Download size={18} /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="TOTAL VOLUME (30D)" value="KES 12,482,900.00" footerText="+12.5% vs prev" variant="success" />
        <StatCard title="SUCCESS RATE" value="98.2%" footerText="Optimized" variant="info" />
        <StatCard title="PENDING PAYOUTS" value="42" footerText="Requires attention" variant="warning" />
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-50 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search Transaction ID, Merchant Ref or Beneficiary..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-100 rounded-xl text-xs font-bold text-[#3b82f6] bg-white hover:bg-slate-50 transition-colors">Last 7 Days <ChevronDown size={14}/></button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-100 rounded-xl text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 transition-colors">All Statuses <Filter size={14} /></button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-100 rounded-xl text-xs font-bold text-slate-500 bg-white hover:bg-slate-50 transition-colors">All Channels <LayoutGrid size={14} /></button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-5">Transaction ID</th>
                <th className="px-6 py-5">Merchant Ref</th>
                <th className="px-6 py-5">Date/Time</th>
                <th className="px-6 py-5">Beneficiary</th>
                <th className="px-6 py-5">Amount (KES)</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Channel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <React.Fragment key={tx.id}>
                  <tr className={`hover:bg-slate-50/30 cursor-pointer transition-colors ${expandedRow === tx.id ? 'bg-slate-50/50' : ''}`}
                      onClick={() => setExpandedRow(expandedRow === tx.id ? null : tx.id)}>
                    <td className="px-6 py-5 font-medium text-slate-700 text-sm tracking-tight">{tx.id}</td>
                    <td className="px-6 py-5 text-slate-500 text-sm">#{tx.ref}</td>
                    <td className="px-6 py-5 text-slate-500 text-sm">{tx.date}</td>
                    <td className="px-6 py-5">
                      <div className="text-sm font-bold text-slate-700">{tx.beneficiary}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{tx.phone}</div>
                    </td>
                    <td className="px-6 py-5 font-bold text-slate-700 text-sm tracking-tight">{tx.amount}</td>
                    <td className="px-6 py-5">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase ${
                        tx.status === 'SUCCESS' ? 'bg-emerald-50 text-emerald-500' : 
                        tx.status === 'PROCESSING' ? 'bg-orange-50 text-orange-500' : 'bg-rose-50 text-rose-500'
                      }`}>{tx.status}</span>
                    </td>
                    <td className="px-6 py-5 text-slate-500 text-sm flex items-center justify-between">
                      <div className="flex items-center gap-2 uppercase tracking-tight font-medium">
                        <FileText size={16} className="text-slate-300" />
                        {tx.channel}
                      </div>
                      <div className="flex flex-col gap-0.5 text-slate-300">
                         <ChevronUp size={10} className={expandedRow === tx.id ? 'text-[#3b82f6]' : ''}/>
                         <ChevronDown size={10} className={expandedRow !== tx.id ? 'text-[#3b82f6]' : ''}/>
                      </div>
                    </td>
                  </tr>
                  
                  {expandedRow === tx.id && (
                    <tr>
                      <td colSpan={7} className="p-8 bg-slate-50/40 border-b border-slate-100">
                        <div className="grid grid-cols-12 gap-8">
                          
                          {/* 1. Transaction Lifecycle */}
                          <div className="col-span-3">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Transaction Lifecycle</h4>
                            <div className="space-y-6 relative ml-1">
                              <div className="absolute top-1 bottom-1 left-[7px] w-[2px] bg-slate-100"></div>
                              <div className="flex gap-4 relative">
                                <div className="w-4 h-4 rounded-full bg-blue-500 z-10 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <div className="-mt-1">
                                  <p className="text-sm font-bold text-slate-700">Initiated</p>
                                  <p className="text-[10px] text-slate-400 font-medium">May 24, 14:45:01</p>
                                </div>
                              </div>
                              <div className="flex gap-4 relative">
                                <div className="w-4 h-4 rounded-full border-[3px] border-blue-500 bg-white z-10 flex items-center justify-center">
                                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="-mt-1">
                                  <p className="text-sm font-bold text-slate-700">Processing</p>
                                  <p className="text-[10px] text-slate-400 font-medium">Provider handshake in progress</p>
                                </div>
                              </div>
                              <div className="flex gap-4 relative opacity-40">
                                <div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white z-10"></div>
                                <div className="-mt-1">
                                  <p className="text-sm font-bold text-slate-700">Completed</p>
                                  <p className="text-[10px] text-slate-400 font-medium">Pending final settlement</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 2. Compliance & Channel */}
                          <div className="col-span-3">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Compliance & Channel</h4>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 mb-6">
                              <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Payment Path</p>
                              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <span className="max-w-[80px] leading-tight">Origin: Merchant Wallet</span>
                                <ChevronRightIcon size={14} className="text-slate-300" />
                                <span className="leading-tight">Equity Bank</span>
                              </div>
                            </div>
                            <div className="space-y-4 px-1">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-medium">AML Status</span>
                                <span className="text-emerald-500 font-bold">APPROVED</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-medium">Risk Flag</span>
                                <span className="text-slate-700 font-bold uppercase tracking-wide">Low</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-medium">KYC Level</span>
                                <span className="text-slate-700 font-bold">Tier 3</span>
                              </div>
                            </div>
                          </div>

                          {/* 3. API Payload */}
                          <div className="col-span-3">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">API Payload</h4>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between items-center mb-1 px-1">
                                  <span className="text-[10px] text-slate-400 font-bold">Request Body</span>
                                  <Copy size={12} className="text-slate-300 cursor-pointer hover:text-slate-500" />
                                </div>
                                <div className="bg-[#0f172a] p-3 rounded-xl font-mono text-[10px] leading-relaxed shadow-inner">
                                  <p className="text-slate-300">&#123;</p>
                                  <p className="pl-3 text-emerald-400">"amount": <span className="text-blue-400">12200</span>,</p>
                                  <p className="pl-3 text-emerald-400">"currency": <span className="text-blue-400">"KES"</span>,</p>
                                  <p className="pl-3 text-emerald-400">"type": <span className="text-blue-400">"bank_payout"</span></p>
                                  <p className="text-slate-300">&#125;</p>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between items-center mb-1 px-1">
                                  <span className="text-[10px] text-slate-400 font-bold">Response Body</span>
                                  <Copy size={12} className="text-slate-300 cursor-pointer hover:text-slate-500" />
                                </div>
                                <div className="bg-[#0f172a] p-3 rounded-xl font-mono text-[10px] leading-relaxed shadow-inner">
                                  <p className="text-slate-300">&#123;</p>
                                  <p className="pl-3 text-emerald-400">"status": <span className="text-orange-400">"pending"</span>,</p>
                                  <p className="pl-3 text-emerald-400">"ref": <span className="text-orange-400">"EQY-9921-X"</span></p>
                                  <p className="text-slate-300">&#125;</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 4. Actions */}
                          <div className="col-span-3 flex flex-col justify-center gap-3 pl-4">
                            <button 
                                onClick={(e) => { e.stopPropagation(); onViewDetails(tx.id); }}
                                className="w-full bg-[#3b82f6] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                            >
                                <RefreshCw size={14} /> Full Details
                            </button>
                            <button className="w-full bg-blue-50 text-[#3b82f6] font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-blue-100 transition-all">
                              <RotateCw size={14} /> Retry Transaction
                            </button>
                            <button className="w-full bg-white border border-slate-100 text-slate-700 font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                              <FileText size={14} className="text-slate-400" /> Download Receipt
                            </button>
                            <button className="mt-2 text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-slate-600 flex items-center justify-center gap-2">
                              <Search size={14} /> Raise Investigation
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-5 border-t border-slate-50 bg-slate-50/20 flex items-center justify-between">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               Showing <span className="text-slate-700 font-extrabold">1-10</span> of <span className="text-slate-700 font-extrabold">1,240</span> Transactions
            </p>
            <div className="flex items-center gap-1.5">
                <button className="p-1.5 text-slate-300 hover:text-slate-600"><ChevronLeft size={16} /></button>
                <div className="flex items-center gap-1 mx-1">
                    <button className="w-7 h-7 rounded-lg bg-[#3b82f6] text-white font-bold text-[11px] shadow-sm">1</button>
                    <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-[11px] hover:bg-slate-100 transition-colors">2</button>
                    <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-[11px] hover:bg-slate-100 transition-colors">3</button>
                    <span className="px-1 text-slate-300 text-xs">...</span>
                    <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-[11px] hover:bg-slate-100 transition-colors">124</button>
                </div>
                <button className="p-1.5 text-slate-400 hover:text-slate-600"><ChevronRight size={16} /></button>
            </div>
        </div>
      </div>
    </div>
  );
}