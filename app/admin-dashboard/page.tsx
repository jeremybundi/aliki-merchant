"use client";

import React, { useState } from "react";
import SidePanel from "../components/SidePanel"; // Adjust path if necessary
import { 
  Users, 
  Shield, 
  Zap, 
  Mail, 
  Search, 
  UserPlus, 
  Bell, 
  Filter, 
  Download, 
  Pencil, 
  Trash2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import AddUser from "./AddUser"; // Import the new component


// --- Sub-components ---

const StatCard = ({ title, value, change, icon: Icon, colorClass }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{title}</h3>
      <div className={`p-2 rounded-lg bg-slate-50 ${colorClass}`}>
        <Icon size={18} />
      </div>
    </div>
    <div className="mt-4 flex items-baseline gap-2">
      <span className="text-3xl font-extrabold text-slate-800 tracking-tight">{value}</span>
      <span className={`text-[11px] font-bold ${change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
        {change}
      </span>
    </div>
  </div>
);

const UserAvatar = ({ name, color }: { name: string, color: string }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm ${color}`}>
      {initials}
    </div>
  );
};

// --- Main Page Component ---

export default function UserDirectory() {
  const users = [
    { name: "Alex Rivera", email: "alex.r@aliki.io", phone: "+1 555-0101", status: "ACTIVE", role: "Admin", locations: ["New York", "London"], avatarColor: "bg-blue-50 text-blue-600" },
    { name: "Sarah Chen", email: "s.chen@aliki.io", phone: "+1 555-0102", status: "ACTIVE", role: "Standard", locations: ["Singapore"], avatarColor: "bg-cyan-50 text-cyan-600" },
    { name: "James Wilson", email: "j.wilson@aliki.io", phone: "+1 555-0103", status: "PENDING", role: "Standard", locations: ["Toronto"], avatarColor: "bg-orange-50 text-orange-600" },
    { name: "Maria Garcia", email: "m.garcia@aliki.io", phone: "+1 555-0104", status: "ACTIVE", role: "Admin", locations: ["Madrid", "Berlin"], avatarColor: "bg-indigo-50 text-indigo-600" },
    { name: "Tom Baker", email: "t.baker@aliki.io", phone: "+1 555-0105", status: "INACTIVE", role: "Standard", locations: ["Sydney"], avatarColor: "bg-slate-100 text-slate-500" },
  ];

  const [showAddUser, setShowAddUser] = useState(false);
  
  // Return the AddUser component if state is true
  if (showAddUser) {
    return <AddUser onBack={() => setShowAddUser(false)} />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* SIDE PANEL COMPONENT */}
      <SidePanel />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-8 overflow-y-auto font-sans">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">User Directory</h1>
            <span className="bg-slate-200 text-slate-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Internal</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name, email..." 
                className="bg-white border border-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-sm w-72 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
               <button 
              onClick={() => setShowAddUser(true)}
              className="bg-[#448ff0] hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold text-sm shadow-lg shadow-blue-500/20 transition-all"
            >
              <UserPlus size={18} /> Add New User
            </button>
            <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={20} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value="1,284" change="+12.5%" icon={Users} colorClass="text-blue-500" />
          <StatCard title="Admin Users" value="42" change="+2.1%" icon={Shield} colorClass="text-indigo-500" />
          <StatCard title="Active Users" value="1,150" change="+5.4%" icon={Zap} colorClass="text-emerald-500" />
          <StatCard title="Pending Invites" value="92" change="-8.2%" icon={Mail} colorClass="text-orange-500" />
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h2 className="font-extrabold text-slate-800">User Management Table</h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                <Download size={14} /> Export
              </button>
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Locations</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <UserAvatar name={user.name} color={user.avatarColor} />
                      <span className="text-sm font-extrabold text-slate-700 tracking-tight">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium tracking-tight">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider ${
                      user.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-500' : 
                      user.status === 'PENDING' ? 'bg-orange-50 text-orange-500' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[11px] font-bold text-slate-500">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {user.locations.map(loc => (
                        <span key={loc} className="px-2 py-0.5 bg-blue-50 text-[#448ff0] text-[10px] font-bold rounded">
                          {loc}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-300 hover:text-blue-500 transition-colors">
                        <Pencil size={16} />
                      </button>
                      <button className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Footer */}
          <div className="px-6 py-5 border-t border-slate-50 flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Showing <span className="text-slate-800">1 to 5</span> of <span className="text-slate-800">1,284</span> entries
            </p>
            <div className="flex items-center gap-1.5">
              <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-1 mx-2">
                <button className="w-7 h-7 rounded-lg bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20">1</button>
                <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-xs hover:bg-slate-100 transition-colors">2</button>
                <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-xs hover:bg-slate-100 transition-colors">3</button>
                <span className="px-1 text-slate-300 text-xs">...</span>
                <button className="w-7 h-7 rounded-lg text-slate-500 font-bold text-xs hover:bg-slate-100 transition-colors">257</button>
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}