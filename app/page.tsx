"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['thai', 'latin'] 
});

export default function HomePage() {
  const [showDiscordModal, setShowDiscordModal] = useState(false);
  const [hideForOneHour, setHideForOneHour] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("hideNexusDiscordPopup");
    const currentTime = new Date().getTime();

    if (!hideUntil || currentTime > parseInt(hideUntil)) {
      const timer = setTimeout(() => {
        setShowDiscordModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    if (hideForOneHour) {
      const oneHourFromNow = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("hideNexusDiscordPopup", oneHourFromNow.toString());
    }
    setShowDiscordModal(false);
  };

  const stats = [
    { title: "ผู้เข้าชม", value: "0", label: "คน" },
    { title: "สมาชิก", value: "0", label: "บัญชี" },
    { title: "สินค้าทั้งหมด", value: "0", label: "รายการ" },
    { title: "ขายแล้ว", value: "0", label: "ชิ้น" },
  ];

  return (
    <main className={`min-h-screen bg-black text-white p-6 md:p-12 relative ${kanit.className}`}>
      
      {showDiscordModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          <div className="bg-[#0a0a0a] border border-[#00e5ff]/40 rounded-2xl p-6 max-w-md w-full shadow-[0_0_40px_rgba(0,229,255,0.2)] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#00e5ff]/20 blur-[50px] -z-10"></div>
            
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6 mt-4">
              <h2 className="text-xl font-semibold mb-2">ติดต่อแอดมินสอบถาม / แจ้งปัญหา</h2>
              <h1 className="text-5xl font-black bg-gradient-to-r from-[#00e5ff] to-[#ff00ea] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] mb-6">
                DISCORD
              </h1>
              
              <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 text-left mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
                  <span className="font-bold text-white">NEXUS Support</span>
                </div>
                <p>เปิด Ticket เพื่อแจ้งปัญหาการใช้งาน หรือสอบถามข้อมูลเพิ่มเติมได้ตลอด 24 ชั่วโมง</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                <input 
                  type="checkbox" 
                  checked={hideForOneHour}
                  onChange={(e) => setHideForOneHour(e.target.checked)}
                  className="w-4 h-4 accent-[#00e5ff] bg-black border-gray-700 rounded cursor-pointer"
                />
                ไม่แสดงอีกใน 1 ชั่วโมง
              </label>
              
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={handleCloseModal}
                  className="flex-1 sm:flex-none px-4 py-2 border border-gray-700 text-gray-300 rounded hover:bg-gray-800 transition-colors text-sm font-bold"
                >
                  ปิด
                </button>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-2 bg-gradient-to-r from-[#00e5ff] to-[#ff00ea] text-white rounded text-sm font-bold shadow-[0_0_15px_rgba(255,0,234,0.3)] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:scale-105 transition-all text-center"
                >
                  OPEN TICKET
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <section className="w-full rounded-2xl bg-gradient-to-r from-[#050505] via-[#111827] to-[#050505] border border-gray-800 p-8 md:p-16 mb-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#00e5ff]/10 rounded-full blur-[80px]"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#ff00ea]/10 rounded-full blur-[80px]"></div>
          
          <div className="z-10 text-center md:text-left">
            <h2 className="text-[#00e5ff] font-bold tracking-widest mb-2 text-sm md:text-base">NEXUS SHOP PREMIUM</h2>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md">
              จำหน่ายไอดีเกมราถูก  <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#ff00ea]">
                ปลอดภัย 100%
              </span>
            </h1>
            <p className="text-gray-400 max-w-xl text-sm md:text-base mb-6">
              ----------------------------------------------------------
            </p>
            <Link href="/products" className="inline-block px-8 py-3 bg-[#00e5ff] text-black font-bold rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              ดูสินค้าทั้งหมด
            </Link>
          </div>
          
          <div className="hidden md:flex z-10 flex-col items-center justify-center p-8">
            <div className="text-9xl font-black text-white/5 select-none drop-shadow-[0_0_30px_rgba(0,229,255,0.1)]">NEXUS</div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#00e5ff]/50 transition-colors shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#00e5ff] to-[#ff00ea] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-gray-400 text-sm mb-2">{stat.title}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white group-hover:text-[#00e5ff] transition-colors">{stat.value}</span>
                <span className="text-xs text-gray-500">{stat.label}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#0a0a0a] border border-[#ff00ea]/20 rounded-xl p-6 mb-12 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00e5ff] to-[#ff00ea]"></div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#ff00ea]">📢</span> ประกาศจากทางร้าน
          </h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>• อ่านข้อตกลงและเงื่อนไขก่อนซื้อสินค้าทุกครั้ง หากเกิดปัญหาแอดมินจะไม่รับผิดชอบใดๆ นอกเหนือจากที่ระบุไว้</p>
            <p>• โปรดระวังผู้แอบอ้าง ทางร้านมีช่องทางติดต่อผ่าน <span className="text-[#00e5ff] font-bold cursor-pointer hover:underline">DISCORD</span> หลักเท่านั้น</p>
            <p className="text-[#00e5ff]">• สินค้าบางตัวอาจจะมีการอัปเดต กรุณาเปิด Ticket เพื่อสอบถามสถานะโปรแกรมก่อนซื้อเสมอ</p>
          </div>
        </section>
      </div>
    </main>
  );
}