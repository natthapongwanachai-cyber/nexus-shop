import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#050505] py-10">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative w-full max-w-md p-10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/[0.05] shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/nexuslogo.png" 
            alt="Nexus Shop Logo" 
            className="h-14 w-auto mb-6 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          />
          <h2 className="text-3xl font-black text-white tracking-tight uppercase text-center">
            Reset Password
          </h2>
          <p className="text-gray-500 mt-2 text-sm text-center">Enter your email to receive a reset link</p>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          
          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <input
              name="email"
              type="email"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:bg-white/[0.05] focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-white placeholder-gray-600 outline-none transition-all duration-300"
              placeholder="Email Address"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full py-4 mt-6 rounded-xl font-bold text-white overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <span className="relative flex items-center justify-center gap-2">
              SEND RESET LINK
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </span>
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <Link href="/login" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}