"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin']
});

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // เพิ่ม State สำหรับเมนูมือถือ
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  const navLinks = [
    { name: 'หน้าหลัก', path: '/' },
    { name: 'รายการสินค้า', path: '/products' },
    { name: 'เติมเงิน', path: '/topup' },
    { name: 'ประวัติสั่งซื้อ', path: '/history' },
  ];

  return (
    <header className={`h-[80px] w-full border-b border-white/[0.05] bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${kanit.className}`}>
      
      {/* โลโก้ฝั่งซ้าย */}
      <Link href="/" className="flex items-center gap-4 group">
        <img 
          src="/nexuslogo.png" 
          alt="Nexus Shop Logo" 
          className="h-10 w-auto group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
        />
        <span className="font-black text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 hidden sm:block">
          NEXUS SHOP
        </span>
      </Link>
      
      {/* แถบเมนูตรงกลาง (สำหรับหน้าจอคอม) */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            href={link.path} 
            className={`${pathname === link.path ? 'text-cyan-400' : 'hover:text-cyan-400'} transition-colors`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* ปุ่ม Login / Logout ฝั่งขวา (สำหรับหน้าจอคอม) */}
      <div className="hidden md:block">
        {user ? (
          <button 
            onClick={handleLogout} 
            className="px-6 py-2.5 rounded-full font-bold text-sm text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-all duration-300"
          >
            ออกจากระบบ
          </button>
        ) : (
          <Link 
            href="/login" 
            className="px-6 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]"
          >
            เข้าสู่ระบบ
          </Link>
        )}
      </div>

      {/* ปุ่มแฮมเบอร์เกอร์ (สำหรับมือถือ) */}
      <button 
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* เมนูที่กางออกมา (สำหรับมือถือ) */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.05] flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`${pathname === link.path ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'} font-semibold text-lg`}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <button 
              onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} 
              className="mt-2 px-8 py-3 rounded-full font-bold text-white bg-red-500/10 border border-red-500/30 w-[80%]"
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] w-[80%] text-center"
            >
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      )}
    </header>
  );
}