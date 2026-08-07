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
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Registration attempt:", { username, email, password });
    setIsLoading(false);

    router.push("/login");
  };

  return (
    <main className={`min-h-screen bg-[#f7f9f6] flex items-center justify-center p-4 ${kanit.className}`}>
      <div className="bg-white p-8 md:p-10 rounded-[2rem] w-full max-w-[420px] shadow-sm relative border border-yellow-100/50">

        <div className="absolute -top-4 -right-4 bg-[#149b8d] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f7f9f6]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e293b] flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            สมัครสมาชิก
          </h1>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-white border border-[#fef08a] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="ชื่อผู้ใช้"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white border border-[#fef08a] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="อีเมล"
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

          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-white border border-[#149b8d] rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#149b8d] focus:ring-1 focus:ring-[#149b8d] transition-all"
              placeholder="ยืนยันรหัสผ่าน"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            )}
            {isLoading ? "กำลังสร้างบัญชี..." : "สมัครสมาชิก"}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 text-sm mt-6">
          <p className="text-[#8c9ca3]">
            มีบัญชีอยู่แล้ว? <Link href="/login" className="text-[#149b8d] hover:underline font-medium">เข้าสู่ระบบ</Link>
          </p>
        </div>

      </div>
    </main>
  );
}