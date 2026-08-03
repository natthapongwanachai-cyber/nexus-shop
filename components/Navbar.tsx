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
    <nav className={`bg-black/90 backdrop-blur-md border-b border-[#00e5ff]/20 px-6 py-4 sticky top-0 z-50 ${kanit.className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-black tracking-widest flex items-center">
          <span className="bg-gradient-to-r from-[#00e5ff] to-[#ff00ea] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            NEXUS SHOP
          </span> 
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                pathname === link.path 
                  ? "text-[#00e5ff] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div>
          {user ? (
            <div className="flex items-center gap-4 bg-[#111] border border-[#ff00ea]/30 rounded-full pl-5 pr-1 py-1 shadow-[0_0_15px_rgba(255,0,234,0.1)]">
              <div className="flex flex-col text-right">
                <span className="text-white font-bold text-sm tracking-wide">{user.username}</span>
                <span className="text-[#00e5ff] font-bold text-xs mt-0.5">
                  ฿ {user.balance.toFixed(2)}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="px-4 py-1.5 bg-[#ff00ea]/80 text-white text-xs font-bold rounded-full hover:bg-[#ff00ea] transition-all shadow-[0_0_10px_rgba(255,0,234,0.3)] ml-2"
              >
                ออกจากระบบ
              </button>
            </div>
          ) : (
            <Link href="/login" className="px-6 py-2 bg-gradient-to-r from-[#00e5ff] to-[#ff00ea] text-white text-sm font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
        
      </div>
    </nav>
  );
}