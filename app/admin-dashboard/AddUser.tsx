"use client";

import React, { useState } from "react";
import SidePanel from "../components/SidePanel"; // Ensure this path is correct based on your folder structure
import { 
  Search, 
  Bell, 
  User, 
  Mail, 
  Shield, 
  Clock, 
  ChevronDown, 
  ChevronRight
} from "lucide-react";

interface AddUserProps {
  onBack: () => void;
}

export default function AddUser({ onBack }: AddUserProps) {
  const [selectedRole, setSelectedRole] = useState("Administrator");

  const roles = [
    { name: "Administrator", desc: "Full system access" },
    { name: "Finance", desc: "Billing & payouts" },
    { name: "Operations", desc: "Manage resources" },
    { name: "View-Only", desc: "Read-only access" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* 1. SIDE PANEL COMPONENT */}
      <SidePanel />

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto font-sans">
        
        {/* Top Navigation Bar */}
        <header className="h-16 border-b border-slate-100 bg-white flex items-center justify-between px-9 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span className="text-slate-400 hover:text-blue-500 cursor-pointer" onClick={onBack}>Users</span>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-slate-800 font-bold">Add New User</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
              />
            </div>
            <button className="text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
               <img src="https://ui-avatars.com/api/?name=Admin+User&background=60a5fa&color=fff" alt="Avatar" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-10  py-3 max-w-7xl mx-auto w-full">
          {/* Page Title & Actions */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Add New User</h1>
              <p className="text-slate-400 text-sm mt-1 font-medium">Configure team access and security protocols.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={onBack}
                className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-[#448ff0] text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all">
                Create User
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Left Column */}
            <div className="col-span-7 space-y-4">
              {/* Personal Information */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 shm">
                <div className="flex items-center gap-2 mb-8">
                  <User size={16} className="text-slate-400" />
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Personal Information</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="Sarah Connor" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input type="email" placeholder="sarah@aliki.com" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input type="text" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3.5 rounded-xl border border-slate-100 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Location</label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-3.5 rounded-xl border border-slate-100 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer">
                          <option>New York, USA</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Default Role</label>
                      <div className="relative">
                        <select className="w-full appearance-none px-4 py-3.5 rounded-xl border border-slate-100 bg-white text-slate-700 font-medium focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer">
                          <option>View-Only</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Role & Permissions */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-8">
                <div className="flex items-center gap-2 mb-8">
                  <Shield size={16} className="text-slate-400" />
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">User Role & Permissions</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <div 
                      key={role.name}
                      onClick={() => setSelectedRole(role.name)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                        selectedRole === role.name 
                        ? 'border-[#448ff0] bg-blue-50/20' 
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center transition-all ${
                        selectedRole === role.name ? 'border-[#448ff0] bg-[#448ff0]' : 'border-slate-200'
                      }`}>
                        {selectedRole === role.name && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-slate-800">{role.name}</p>
                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">{role.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5 space-y-6">
              {/* Access Duration */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 ">
                <div className="flex items-center gap-2 mb-8">
                  <Clock size={16} className="text-slate-400" />
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Access Duration</h3>
                </div>
                
                <div className="bg-slate-100 p-1 rounded-xl flex">
                  <button className="flex-1 py-2 text-[13px] font-bold bg-white rounded-lg text-blue-600 ">Permanent</button>
                  <button className="flex-1 py-2 text-[13px] font-bold text-slate-400">Temporary</button>
                </div>
              </div>

              {/* Security Policy */}
              <div className="bg-white rounded-[32px] border border-slate-100 p-8 ">
                <div className="flex items-center gap-2 mb-8">
                  <Shield size={16} className="text-slate-400" />
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Security Policy</h3>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Shield size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-800">Enforce 2FA</p>
                      <p className="text-[10px] text-slate-400 font-medium">Require multi-factor login</p>
                    </div>
                  </div>
                  <div className="w-10 h-5 bg-[#6ee7b7] rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Notification Card */}
              <div className="bg-white/50 rounded-[32px] border-2 border-dashed border-slate-100 p-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-slate-300">
                    <Mail size={32} />
                  </div>
                  <p className="text-[13px] leading-relaxed text-slate-500 max-w-[280px]">
                    The user will receive an invitation email with login instructions immediately after creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-10 py-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span>© 2024 Aliki Inc.</span>
            <span className="hover:text-slate-600 cursor-pointer">System Status</span>
            <span className="hover:text-slate-600 cursor-pointer">Documentation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span>Server Region: US-EAST-1</span>
          </div>
        </footer>
      </div>
    </div>
  );
}