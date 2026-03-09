"use client";
import React, { useState } from "react";
import Login from "./components/Login";
import SideNav from "./components/SideNav";
import Dashboard from "./dashboard/components/Dashboard"; // Your existing dashboard logic
import TransactionsPage from "./dashboard/components/TransactionsPage"; // Create this next

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <SideNav activeItem={activePage} onItemClick={setActivePage}/>
      
      <main className="flex-1 overflow-y-auto">
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Transactions" && <TransactionsPage />}
        {/* Add other pages here as you build them */}
        {activePage !== "Dashboard" && activePage !== "Transactions" && (
           <div className="flex items-center justify-center h-full text-slate-400">
             {activePage} Page coming soon...
           </div>
        )}
      </main>
    </div>
  );
}