"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Landmark, 
  ArrowLeftRight, 
  BarChart3, 
  Settings 
} from "lucide-react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 font-bold text-[15px] ${
        active 
          ? "bg-[#448ff0] text-white shadow-lg shadow-blue-500/20" 
          : "text-[#475569] hover:bg-slate-50 hover:text-[#1e293b]"
      }`}
    >
      <Icon size={22} strokeWidth={active ? 2.5 : 2} />
      <span>{label}</span>
    </div>
  );
};

export default function SidePanel() {
  const [activeItem, setActiveItem] = useState("User Management");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "User Management" },
    { icon: Landmark, label: "Accounts" },
    { icon: ArrowLeftRight, label: "Transactions" },
    { icon: BarChart3, label: "Reports" },
  ];

  return (
    <aside className="w-[280px] h-screen bg-white border-r border-slate-100 flex flex-col p-6 sticky top-0">
      
      {/* Header / Logo Section */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-[#448ff0] p-2 rounded-xl shadow-lg shadow-blue-500/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z" fill="white"/>
            <path d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z" fill="white"/>
          </svg>
        </div>
        <div>
          <h1 className="text-[17px] font-extrabold tracking-tight text-[#1e293b] leading-tight">
            Aliki Fintech
          </h1>
          <p className="text-[13px] font-bold text-slate-400">
            Admin Console
          </p>
        </div>
      </div>

      {/* Main Navigation Area */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>

      {/* Bottom Footer Section */}
      <div className="pt-6 border-t border-slate-50 space-y-6">
        <NavItem 
          icon={Settings} 
          label="Settings" 
          active={activeItem === "Settings"}
          onClick={() => setActiveItem("Settings")}
        />

        {/* User Profile Info */}
        <div className="flex items-center gap-3 px-2">
          <div className="w-11 h-11 rounded-full bg-[#fcd34d] flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
             {/* Simple visual placeholder for the avatar */}
             <div className="w-full h-full bg-orange-300 opacity-80"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-extrabold text-[#1e293b] leading-tight">
              Admin User
            </span>
            <span className="text-[12px] font-bold text-slate-400">
              admin@aliki.io
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}