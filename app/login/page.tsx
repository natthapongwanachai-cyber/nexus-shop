"use client";

import { useState } from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'] 
});

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Login attempt:", { username, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <main className={`min-h-screen bg-[#0b0f19] flex items-center justify-center p-4 relative overflow-hidden ${kanit.className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#149b8d]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="bg-[#151c2c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-2xl relative border border-gray-800 z-10">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-3 tracking-wide">
            <span className="bg-[#149b8d] p-2 rounded-xl text-white shadow-[0_0_15px_rgba(20,155,141,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </span>
            เข้าสู่ระบบ
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="ชื่อผู้ใช้ หรือ อีเมล"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="รหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-4 bg-gradient-to-r from-[#149b8d] to-[#0d7a6f] hover:from-[#118276] hover:to-[#0a635a] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(20,155,141,0.3)] hover:shadow-[0_4px_25px_rgba(20,155,141,0.5)] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "เข้าสู่ระบบ"}
          </button>
        </form>

        <div className="flex flex-col items-center gap-4 text-sm mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400">
            ยังไม่มีบัญชี? <Link href="/register" className="text-[#149b8d] hover:text-[#19c7b5] hover:underline font-medium transition-colors">สมัครสมาชิก</Link>
          </p>
          <Link href="/forgot-password" className="text-gray-500 hover:text-white font-medium flex items-center gap-1 transition-colors">
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