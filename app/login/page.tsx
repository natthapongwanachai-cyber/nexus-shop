import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative w-full max-w-md p-10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/[0.05] shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10">
        
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-cyan-500 to-pink-500 p-[2px] shadow-lg shadow-pink-500/30">
            <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            WELCOME BACK
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Sign in to continue to Nexus Shop</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-5">
            <div className="group relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <input
                name="username"
                type="text"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:bg-white/[0.05] focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-gray-600 outline-none transition-all duration-300"
                placeholder="Username or Email"
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
                name="password"
                type="password"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:bg-white/[0.05] focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 text-white placeholder-gray-600 outline-none transition-all duration-300"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded border border-gray-600 group-hover:border-cyan-400 transition-colors">
                <input type="checkbox" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                <svg className="w-3 h-3 text-cyan-400 opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
            
            <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="relative w-full py-4 mt-4 rounded-xl font-bold text-white overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <span className="relative flex items-center justify-center gap-2">
              SIGN IN
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-300 hover:to-pink-300 transition-colors">
              Create one now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}