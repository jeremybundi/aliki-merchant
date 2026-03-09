"use client";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-20 border-b border-slate-100 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search transactions, reference IDs..."
          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-12 pr-4 outline-none focus:border-blue-400 transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button className="px-3 py-1 text-xs font-bold bg-white  rounded-md text-slate-700">KES</button>
          <button className="px-3 py-1 text-xs font-bold text-slate-400">USD</button>
        </div>
        
        <button className="relative text-slate-400 hover:text-slate-600">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-100 cursor-pointer">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-700">James Mwangi</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
            <img src="https://ui-avatars.com/api/?name=James+Mwangi&background=0D8ABC&color=fff" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
}