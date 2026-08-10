import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUS SHOP",
  description: "Welcome to the Future of Digital Store",
  icons: {
    icon: "/nexuslogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white min-h-screen flex flex-col`}>
        
        {/* Navigation Bar */}
        <header className="h-[80px] w-full border-b border-white/[0.05] bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
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
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">หน้าหลัก</Link>
            <Link href="/products" className="hover:text-cyan-400 transition-colors">รายการสินค้า</Link>
            <Link href="/topup" className="hover:text-pink-400 transition-colors">เติมเงิน</Link>
            <Link href="#" className="hover:text-pink-400 transition-colors">ประวัติสั่งซื้อ</Link>
          </nav>

          <Link 
            href="/login" 
            className="px-6 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]"
          >
            เข้าสู่ระบบ
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}