import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-md p-8 bg-[#111111]/80 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl">
        {/* ส่วนหัว */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 shadow-lg shadow-pink-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            เข้าสู่ระบบ
          </h2>
        </div>

        {/* ฟอร์มกรอกข้อมูล */}
        <form className="space-y-5">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </div>
              <input
                name="username"
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="ชื่อผู้ใช้ หรือ อีเมล"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                 </svg>
              </div>
              <input
                name="password"
                type="password"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="รหัสผ่าน"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        {/* ลิงก์ด้านล่าง */}
        <div className="flex flex-col items-center gap-3 pt-6 mt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            ยังไม่มีบัญชี?{" "}
            <Link href="/register" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-semibold hover:opacity-80 transition-all">
              สมัครสมาชิก
            </Link>
          </p>
          <Link href="/forgot-password" className="text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
             </svg>
             ลืมรหัสผ่าน?
          </Link>
        </div>
      </div>
    </div>
  );
}