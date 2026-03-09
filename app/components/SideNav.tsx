"use client";
import React from "react";
import { LayoutDashboard, ArrowLeftRight, BookOpen, BarChart3, Code2, LineChart, Settings, LogOut } from "lucide-react";

interface SideNavProps {
  activeItem: string;
  onItemClick: (label: string) => void;
}

// ... NavItem component stays exactly the same as you have it ...
const NavItem = ({ icon: Icon, label, active, onClick, variant = "default" }: any) => {
  const baseStyles = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer font-medium text-[15px]";
  const variants = {
    default: active ? "bg-[#f0f7ff] text-[#3b82f6]" : "text-[#475569] hover:bg-slate-50 hover:text-[#1e293b]",
    danger: "text-[#f43f5e] hover:bg-rose-50"
  };
  return (
    <div className={`${baseStyles} ${variants[variant as keyof typeof variants]}`} onClick={onClick}>
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      <span>{label}</span>
    </div>
  );
};

export default function SideNav({ activeItem, onItemClick }: SideNavProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: ArrowLeftRight, label: "Transactions" },
    { icon: BookOpen, label: "Ledger" },
    { icon: BarChart3, label: "Reports" },
    { icon: Code2, label: "API" },
    { icon: LineChart, label: "Analytics" },
  ];

  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-100 flex flex-col p-6 sticky top-0">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-[#3b82f6] p-1.5 rounded-lg shadow-md shadow-blue-500/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="white" strokeWidth="2.5" />
            <path d="M12 8C10.5 8 9 9.5 9 12C9 14.5 10.5 16 12 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-[#1e293b]">Aliki <span className="text-[#3b82f6]">Merchant</span></h1>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => onItemClick(item.label)}
          />
        ))}
      </nav>

      <div className="pt-6 mt-6 border-t border-slate-100 space-y-1">
        <NavItem icon={Settings} label="Settings" active={activeItem === "Settings"} onClick={() => onItemClick("Settings")} />
        <NavItem icon={LogOut} label="Logout" variant="danger" onClick={() => window.location.reload()} />
      </div>
    </aside>
  );
}