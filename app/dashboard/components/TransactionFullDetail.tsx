"use client";
import React from "react";
import { 
  ArrowLeft, Download, Printer, ShieldAlert, MessageSquare, 
  Info, CheckCircle2, ShieldCheck, ChevronRight, FileText, 
  RefreshCw, Search, Bell, HelpCircle, Globe, Shield, ExternalLink,
  CheckCircle, User, Clock, Activity
} from "lucide-react";

export default function TransactionFullDetail({ id, onBack }: { id: string, onBack: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
      
      {/* Top Breadcrumb & Search Bar Area */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-[13px] font-medium">
          <span className="text-slate-400 hover:text-blue-500 cursor-pointer">Dashboard</span>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-slate-400 hover:text-blue-500 cursor-pointer">Transactions</span>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-slate-800 font-bold">#{id}</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-blue-400 transition-all outline-none"
            />
          </div>
          <button className="text-slate-400 hover:text-slate-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="text-slate-400 hover:text-slate-600">
            <HelpCircle size={20} />
          </button>
          <div className="w-10 h-10 bg-[#009299] rounded-full flex items-center justify-center text-white font-bold border-2 border-white  cursor-pointer">
            J
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Transaction #{id}</h1>
            <span className="bg-emerald-50 text-emerald-500 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle size={12} /> Success
            </span>
          </div>
          <p className="text-base text-slate-500 mt-1">Settled Amount: <span className="font-bold text-slate-700">KES 45,000.00</span></p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700  hover:bg-slate-50 transition-all">
            <Download size={18} className="text-slate-400" /> Download Receipt
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700  hover:bg-slate-50 transition-all">
            <Printer size={18} className="text-slate-400" /> Print
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <ShieldAlert size={18} className="text-slate-400" /> Investigation
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold  hover:bg-blue-700 transition-all">
            <MessageSquare size={18} /> Contact Support
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (Main Data) */}
        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <DetailCard title="Sender Details" icon={User} items={[
              { label: "Name", value: "John Doe Kamau" },
              { label: "Phone", value: "+254 712 345 678" },
              { label: "ID Type / No.", value: "National ID / 29384XXX" },
              { label: "Risk Rating", value: <span className="bg-emerald-50 text-emerald-500 text-[9px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider">Low Risk</span> },
            ]} />
            
            <DetailCard title="Recipient Details" icon={Globe} items={[
              { label: "Name", value: "Sarah Wambui" },
              { label: "Country", value: "Kenya 🇰🇪" },
              { label: "Channel", value: "Bank Transfer" },
              { label: "Account No.", value: "**** **** 9201" },
            ]} />
          </div>

          {/* Financial Summary */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
             <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] flex items-center gap-2">
                  <FileText size={18} className="text-blue-500"/> Financial Summary
                </h3>
                <span className="text-[11px] text-slate-400 font-bold uppercase">Calculated on: 24 Oct, 14:32</span>
             </div>
             
             <div className="p-8 grid grid-cols-3 gap-10">
                {/* FX Rates */}
                <div className="space-y-4">
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">FX Rates</p>
                   <div className="space-y-3">
                    <div className="flex justify-between text-[13px] font-medium">
                      <span className="text-slate-500">Current FX Rate</span>
                      <span className="font-bold text-slate-900">148.50 KES/USD</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-medium">
                      <span className="text-slate-500">Interbank Rate</span>
                      <span className="font-bold text-slate-900">145.20 KES/USD</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-bold pt-3 border-t border-slate-100">
                      <span className="text-emerald-500">Spread</span>
                      <span className="text-emerald-500">+2.27%</span>
                    </div>
                   </div>
                </div>

                {/* Service Fees */}
                <div className="space-y-4">
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Service Fees</p>
                   <div className="space-y-3">
                    <div className="flex justify-between text-[13px] font-medium">
                      <span className="text-slate-500">Processing Fee</span>
                      <span className="font-bold text-slate-900">KES 450.00</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-medium">
                      <span className="text-slate-500">Agent Commission</span>
                      <span className="font-bold text-slate-900">KES 225.00</span>
                    </div>
                    <div className="flex justify-between items-end pt-3 border-t border-slate-100">
                      <span className="text-[13px] font-bold text-slate-800">Total Charged</span>
                      <span className="font-bold text-blue-600 text-xl leading-none">KES 45,675.00</span>
                    </div>
                   </div>
                </div>

                {/* Settlement Info Box */}
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Info className="text-blue-600" size={20}/>
                   </div>
                   <div>
                     <p className="text-[11px] font-bold text-blue-800 uppercase tracking-widest mb-1.5">Settlement Info</p>
                     <p className="text-[11px] leading-relaxed text-blue-700 font-medium">This transaction was settled via Sasapay gateway. Total payout amount for recipient is exactly KES 45,000.00 as per requested quote.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Audit Trail */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 ">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-10 flex items-center gap-2">
               <Activity size={18} className="text-slate-400"/> Audit Trail
             </h3>
             <div className="flex items-center justify-between px-10 relative">
                <div className="absolute top-6 left-28 right-28 h-[2px] bg-slate-100"></div>
                <AuditStep label="Initiated" date="24 Oct, 14:30" active icon={RefreshCw} />
                <AuditStep label="Collected" date="24 Oct, 14:31" active icon={FileText} />
                <AuditStep label="Processing" date="24 Oct, 14:31" active icon={RefreshCw} />
                <AuditStep label="Completed" date="24 Oct, 14:32" active icon={CheckCircle2} />
             </div>
          </div>
        </div>

        {/* Right Column (Sidebar Metadata) */}
        <div className="col-span-4 space-y-6">
          
          {/* Compliance & Risk */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-emerald-500"/> Compliance & Risk
             </h3>
             <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                   <div>
                     <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">AML Check</p>
                     <p className="text-lg font-bold text-slate-800">Cleared</p>
                   </div>
                   <div className="w-8 h-8 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 border border-slate-100 rounded-2xl bg-white">
                     <p className="text-[10px] font-bold text-slate-400 uppercase mb-1.5">PEP/Sanctions</p>
                     <p className="text-sm font-bold text-emerald-500">No Match</p>
                   </div>
                   <div className="p-4 border border-slate-100 rounded-2xl bg-white">
                     <p className="text-[10px] font-bold text-slate-400 uppercase mb-1.5">Risk Score</p>
                     <p className="text-sm font-bold text-blue-600">0.08 / Low</p>
                   </div>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">External Seon Signals</p>
                  <div className="flex flex-wrap gap-2">
                    {["Email Verified", "Phone Active", "No VPN/Proxy"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
          </div>

          {/* System Metadata */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 ">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity size={18} className="text-blue-500"/> System Metadata
             </h3>
             <div className="space-y-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Processing Agent</p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 border border-blue-200">AG</div>
                    <span className="text-sm font-bold text-slate-800">AG-9920 - Central Nairobi Branch</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                   <span className="text-slate-400 font-medium">Onboarding Date</span>
                   <span className="font-bold text-slate-800 tracking-tight">12 Jan 2023</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                   <span className="text-slate-400 font-medium">MTI Reference</span>
                   <span className="font-bold text-slate-800 font-mono">MTI-55-900-33</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                   <span className="text-slate-400 font-medium">Sasapay Ref</span>
                   <span className="font-bold text-slate-800 font-mono tracking-wider">SSP-TX-221034</span>
                </div>
             </div>
          </div>

          {/* Dark Overview Card */}
          <div className="bg-[#111827] rounded-[32px] p-8 relative overflow-hidden text-white border border-slate-800/50">
             <div className="flex items-start justify-between mb-8">
               <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Security Overview</h3>
                <p className="text-[10px] text-slate-500">Real-time threat level monitoring</p>
               </div>
               <Shield className="text-slate-700/50" size={40} />
             </div>
             
           
             <p className="text-[12px] leading-relaxed text-slate-400 font-medium">Fraud monitoring active. No suspicious patterns detected for this originating IP or device fingerprint.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable DetailCard for the layout
function DetailCard({ title, items, icon: Icon }: any) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8  h-full">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-lg bg-blue-50">
          <Icon className="text-blue-500" size={18} />
        </div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{title}</h3>
      </div>
      <div className="space-y-5">
        {items.map((item: any, i: number) => (
          <div key={i} className="flex justify-between items-center text-[13px]">
            <span className="text-slate-400 font-medium">{item.label}</span>
            <span className="font-bold text-slate-800 tracking-tight">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reusable AuditStep for the timeline
function AuditStep({ label, date, active, icon: Icon }: any) {
  return (
    <div className="flex flex-col items-center gap-3 relative z-10">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
        active 
        ? 'bg-blue-500 text-white  ring-4 ring-blue-100' 
        : 'bg-slate-100 text-slate-300'
      }`}>
        <Icon size={20} />
      </div>
      <div className="text-center mt-1">
        <p className="text-[12px] font-bold text-slate-800 tracking-tight">{label}</p>
        <p className="text-[10px] font-bold text-slate-400 mt-1">{date}</p>
      </div>
    </div>
  );
}