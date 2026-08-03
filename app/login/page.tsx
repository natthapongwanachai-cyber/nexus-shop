"use client";

import { useState } from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'] 
});

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert("Please verify that you are human.");
      return;
    }
    // Authentication logic here
    console.log("Login attempt:", { username, password });
  };

  return (
    <main className={`min-h-screen bg-[#f7f9f6] flex items-center justify-center p-4 ${kanit.className}`}>
      <div className="bg-white p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-sm relative border border-yellow-100/50">
        
        <div className="absolute -top-4 -right-4 bg-[#149b8d] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f7f9f6]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            เข้าสู่ระบบ
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-white border border-[#fef08a] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="ชื่อผู้ใช้ หรือ อีเมล"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white border border-[#149b8d] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="รหัสผ่าน"
            />
          </div>

          <div className="border border-gray-200 bg-gray-50/50 rounded-md p-3 flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <div 
                className={`w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer transition-colors ${isCaptchaVerified ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'}`}
                onClick={() => setIsCaptchaVerified(!isCaptchaVerified)}
              >
                {isCaptchaVerified && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700 font-medium select-none">
                {isCaptchaVerified ? "สำเร็จ!" : "Verify you are human"}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-700 tracking-wider">CLOUDFLARE</span>
              <div className="flex gap-1 text-[8px] text-gray-500 mt-0.5">
                <a href="#" className="hover:underline">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:underline">Help</a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#149b8d] hover:bg-[#118276] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-[#fef08a]"></div>
          <span className="px-4 text-sm text-[#8c9ca3]">หรือ</span>
          <div className="flex-1 border-t border-[#fef08a]"></div>
        </div>

        <button
          type="button"
          className="w-full bg-white border border-[#fef08a] hover:bg-gray-50 text-gray-700 font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-3 mb-6 shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          ล็อกอินด้วย Gmail
        </button>

        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-[#8c9ca3]">
            ยังไม่มีบัญชี? <Link href="/register" className="text-[#149b8d] hover:underline font-medium">สมัครสมาชิก</Link>
          </p>
          <Link href="/forgot-password" className="text-[#149b8d] hover:underline font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
            </svg>
            ลืมรหัสผ่าน?
          </Link>
        </div>

      </div>
    </main>
  );
}