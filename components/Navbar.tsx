"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/nexuslogo.png" 
                alt="Nexus Shop" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 uppercase">
                Nexus Shop
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">หน้าหลัก</Link>
              <Link href="/products" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">รายการสินค้า</Link>
              <Link href="/topup" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">เติมเงิน</Link>
              <Link href="/history" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">ประวัติสั่งซื้อ</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {status === "loading" ? (
              <div className="h-10 w-32 animate-pulse rounded-full bg-white/10"></div>
            ) : session ? (
              <div className="flex items-center gap-5">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-wide">
                    {session.user?.name}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    ยอดเงิน: 0.00 ฿
                  </span>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-full bg-white/[0.03] px-6 py-2 text-sm font-bold text-pink-500 hover:bg-pink-500/10 transition-all border border-pink-500/20 hover:border-pink-500/50"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 px-8 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]"
              >
                เข้าสู่ระบบ
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}