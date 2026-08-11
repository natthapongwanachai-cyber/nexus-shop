"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid username or password");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#050505] py-10">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative w-full max-w-md p-10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/[0.05] shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/nexuslogo.png" 
            alt="Nexus Shop Logo" 
            className="h-14 w-auto mb-6 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
          <h2 className="text-3xl font-black text-white tracking-tight uppercase text-center">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2 text-sm text-center">Sign in to Nexus Shop</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-center font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:bg-white/[0.05] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-gray-600 outline-none transition-all duration-300"
              placeholder="Username"
            />
          </div>

          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:bg-white/[0.05] focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 text-white placeholder-gray-600 outline-none transition-all duration-300"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-end mt-2">
            <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="relative w-full py-4 mt-6 rounded-xl font-bold text-white overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <span className="relative flex items-center justify-center gap-2">
              {isLoading ? "SIGNING IN..." : "SIGN IN"}
            </span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-300 hover:to-pink-300 transition-colors">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}