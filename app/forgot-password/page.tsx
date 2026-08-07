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

    // Simulate API connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Password reset requested for:", email);
    setIsLoading(false);
    setIsSent(true);
  };

  return (
    <main className={`min-h-screen bg-[#f7f9f6] flex items-center justify-center p-4 ${kanit.className}`}>
      <div className="bg-white p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-sm relative border border-yellow-100/50">

        <div className="absolute -top-4 -right-4 bg-[#149b8d] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f7f9f6]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-2">ลืมรหัสผ่าน</h1>
          <p className="text-sm text-[#8c9ca3]">
            กรอกอีเมลของคุณเพื่อรับลิงก์สำหรับรีเซ็ตรหัสผ่าน
          </p>
        </div>

        {!isSent ? (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-[#149b8d] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
                placeholder="อีเมลของคุณ"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-4 bg-[#149b8d] hover:bg-[#118276] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {isLoading ? "กำลังส่งข้อมูล..." : "ส่งลิงก์รีเซ็ตรหัสผ่าน"}
            </button>
          </form>
        ) : (
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-bold text-green-800 mb-1">ส่งอีเมลสำเร็จ!</h3>
            <p className="text-sm text-green-600">
              เราได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปที่ <span className="font-medium">{email}</span> แล้ว กรุณาตรวจสอบกล่องจดหมายของคุณ
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-2 text-sm mt-8 pt-6 border-t border-[#fef08a]">
          <Link href="/login" className="text-[#8c9ca3] hover:text-[#1e293b] flex items-center gap-1 transition-colors">
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