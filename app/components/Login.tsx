"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye } from "lucide-react";
import VerifyOtp from "./verify-otp";

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [showOtp, setShowOtp] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOtp(true);
  };

  if (showOtp) {
    return (
      <VerifyOtp 
        onVerify={(code) => console.log("Verifying code:", code)} 
        onBack={() => setShowOtp(false)}
        onLoginSuccess={onLoginSuccess}
      />
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#f8fafc] font-sans">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-[#3b82f6] p-2 rounded-xl shadow-lg shadow-blue-500/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="white" strokeWidth="2.5"/>
                <path d="M12 8C10.5 8 9 9.5 9 12C9 14.5 10.5 16 12 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#1e293b]">
          Aliki <span className="text-[#3b82f6]">Merchant</span>
        </h1>
      </div>

      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]">
        <div className="p-10 md:p-16">
            <div className="mb-10 text-left">
                <h2 className="text-[32px] font-bold mb-2 text-[#1e293b] leading-tight">Welcome Back</h2>
                <p className="text-slate-500 text-[15px] leading-relaxed max-w-[320px]">
                    Sign in to your merchant account to manage your business.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSignIn}>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#475569]">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 outline-none transition-all focus:border-blue-500 text-slate-700" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-[#475569]">Password</label>
                      <a href="#" className="text-[13px] font-semibold text-[#3b82f6] hover:underline">Forgot password?</a>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="password" placeholder="Enter your password" className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 outline-none transition-all focus:border-blue-500 text-slate-700" required />
                        <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer" />
                    </div>
                </div>

                <button type="submit" className="w-full bg-[#448ff0] hover:bg-[#3b82f6] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.99] mt-2">
                    Sign In
                </button>
            </form>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#6ee7b7]"></div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-[13px] font-semibold text-slate-500">
          <a href="#" className="hover:text-[#3b82f6]">Privacy Policy</a>
          <a href="#" className="hover:text-[#3b82f6]">Terms of Service</a>
          <a href="#" className="hover:text-[#3b82f6]">Contact Support</a>
        </div>
        <p className="text-[11px] font-medium text-slate-400">© 2024 Aliki Merchant. All rights reserved.</p>
      </div>
    </div>
  );
}