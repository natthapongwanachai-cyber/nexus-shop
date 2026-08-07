"use client";

import { useState } from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'] 
});

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSent(true);
  };

  return (
    <main className={`min-h-screen bg-[#0b0f19] flex items-center justify-center p-4 relative overflow-hidden ${kanit.className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#149b8d]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="bg-[#151c2c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-2xl relative border border-gray-800 z-10">

        <div className="text-center mb-8">
          <div className="bg-[#149b8d] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(20,155,141,0.5)] rotate-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">ลืมรหัสผ่าน</h1>
          <p className="text-sm text-gray-400">
            กรอกอีเมลของคุณเพื่อรับลิงก์สำหรับรีเซ็ตรหัสผ่าน
          </p>
        </div>

        {!isSent ? (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="อีเมลของคุณ"
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-2 bg-gradient-to-r from-[#149b8d] to-[#0d7a6f] hover:from-[#118276] hover:to-[#0a635a] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(20,155,141,0.3)] hover:shadow-[0_4px_25px_rgba(20,155,141,0.5)] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "ส่งลิงก์รีเซ็ตรหัสผ่าน"}
            </button>
          </form>
        ) : (
          <div className="text-center p-6 bg-[#0b0f19] border border-[#149b8d]/30 rounded-2xl">
            <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-2 tracking-wide">ส่งอีเมลสำเร็จ!</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              เราได้ส่งลิงก์ไปที่ <span className="text-[#149b8d] font-medium">{email}</span><br/>กรุณาตรวจสอบกล่องจดหมายของคุณ
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-2 text-sm mt-8 pt-6 border-t border-gray-800">
          <Link href="/login" className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            กลับสู่หน้าเข้าสู่ระบบ
          </Link>
        </div>

      </div>
    </main>
  );
}