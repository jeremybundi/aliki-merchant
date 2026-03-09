"use client";

import React, { useState, useRef, useEffect } from "react";

interface VerifyOtpProps {
  onVerify: (otp: string) => void;
  onBack?: () => void;
  onLoginSuccess: () => void;
}

export default function VerifyOtp({ onVerify, onBack, onLoginSuccess }: VerifyOtpProps) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(114);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value.substring(element.value.length - 1);
    setOtp(newOtp);
    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    onVerify(code);
    // Triggering the success callback to navigate to dashboard
    onLoginSuccess(); 
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#f8fafc] font-sans">
      
      {/* RESTORED: Logo Section */}
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-[#3b82f6] p-2 rounded-xl shadow-lg shadow-blue-500/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="4" stroke="white" strokeWidth="2.5" />
            <path d="M12 8C10.5 8 9 9.5 9 12C9 14.5 10.5 16 12 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#1e293b]">
          Aliki <span className="text-[#3b82f6]">Merchant</span>
        </h1>
      </div>

      <div className="relative w-full max-w-[480px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]">
        <div className="p-10 md:p-12 text-center">
          <h2 className="text-[28px] font-bold mb-3 text-[#1e293b]">Two-Factor Verification</h2>
          <p className="text-slate-500 text-[14px] leading-relaxed mb-8 px-4">
            Enter the 6-digit code sent to your email address associated with your merchant account.
          </p>

          <div className="flex justify-between gap-2 mb-8">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold border-2 border-slate-100 rounded-xl focus:border-[#3b82f6] outline-none text-[#1e293b]"
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-[#448ff0] hover:bg-[#3b82f6] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] mb-6"
          >
            Verify & Continue
          </button>

          <p className="text-[14px] text-slate-500">
            Didn't receive the code? <button className="text-[#3b82f6] font-semibold hover:underline">Resend Code ({formatTime(timer)})</button>
          </p>
        </div>

        {/* RESTORED: Green Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#6ee7b7]"></div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-[13px] font-semibold text-slate-400">
          <button onClick={onBack} className="hover:text-[#3b82f6]">Back to Login</button>
          <a href="#" className="hover:text-[#3b82f6]">Privacy Policy</a>
          <a href="#" className="hover:text-[#3b82f6]">Terms of Service</a>
          <a href="#" className="hover:text-[#3b82f6]">Contact Support</a>
        </div>
        <p className="text-[11px] font-medium text-slate-400">© 2024 Aliki Merchant. All rights reserved.</p>
      </div>
    </div>
  );
}