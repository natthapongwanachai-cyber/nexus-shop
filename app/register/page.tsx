"use client";

import { useState } from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'] 
});

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน!");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Registration attempt:", { username, email, password });
    setIsLoading(false);
    router.push("/login");
  };

  return (
    <main className={`min-h-screen bg-[#0b0f19] flex items-center justify-center p-4 relative overflow-hidden ${kanit.className}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="bg-[#151c2c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-2xl relative border border-gray-800 z-10">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-3 tracking-wide">
            <span className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-xl text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            สมัครสมาชิก
          </h1>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="ชื่อผู้ใช้"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="อีเมล"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="รหัสผ่าน"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full bg-[#0b0f19] border border-gray-700 rounded-xl py-3.5 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="ยืนยันรหัสผ่าน"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "สร้างบัญชีใหม่"}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 text-sm mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400">
            มีบัญชีอยู่แล้ว? <Link href="/login" className="text-purple-400 hover:text-pink-400 hover:underline font-medium transition-colors">เข้าสู่ระบบ</Link>
          </p>
        </div>

      </div>
    </main>
  );
}