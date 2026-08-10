"use client";

import { useState } from "react";

export default function TopupPage() {
  const [activeTab, setActiveTab] = useState("truemoney");

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-[#050505] text-white py-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">เลือกวิธีเติมเงิน</h2>

        {/* Method Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* TrueMoney Tab */}
          <button
            onClick={() => setActiveTab("truemoney")}
            className={`flex items-center p-4 rounded-2xl border transition-all duration-300 ${
              activeTab === "truemoney"
                ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 p-2">
               <img src="https://www.truemoney.com/wp-content/uploads/2020/12/truemoneywallet-logo-20201217.png" alt="TrueMoney" className="w-full h-full object-contain" />
            </div>
            <div className="text-left flex-grow">
              <h3 className="font-bold text-white">TrueMoney</h3>
              <p className="text-xs text-gray-400">ซองอั่งเปา</p>
            </div>
            {activeTab === "truemoney" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Bank Transfer Tab */}
          <button
            onClick={() => setActiveTab("bank")}
            className={`flex items-center p-4 rounded-2xl border transition-all duration-300 ${
              activeTab === "bank"
                ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-4 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-left flex-grow">
              <h3 className="font-bold text-white">โอนเงิน</h3>
              <p className="text-xs text-gray-400">สลิปธนาคาร</p>
            </div>
          </button>

          {/* Coupon Tab */}
          <button
            onClick={() => setActiveTab("coupon")}
            className={`flex items-center p-4 rounded-2xl border transition-all duration-300 ${
              activeTab === "coupon"
                ? "bg-pink-500/10 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mr-4 text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="text-left flex-grow">
              <h3 className="font-bold text-white">คูปอง</h3>
              <p className="text-xs text-gray-400">โค้ดเติมเงิน</p>
            </div>
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-8 shadow-2xl">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/[0.05] pb-6 mb-6">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TrueMoney Wallet</h3>
                <p className="text-sm text-gray-400">วางลิงก์ซองอั่งเปาด้านล่าง</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ค่าธรรมเนียม 2.9%
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-8">
            <label className="block text-sm font-semibold text-gray-300">ลิงก์ซองของขวัญ</label>
            <input
              type="text"
              placeholder="https://gift.truemoney.com/campaign/?v=..."
              className="w-full bg-[#111111] border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600"
            />
            <p className="text-xs text-gray-500">
              ตัวอย่าง: https://gift.truemoney.com/campaign/?v=XXXXXXXXXXXXXXX
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full py-4 rounded-xl font-bold text-white bg-[#3b4b96] hover:bg-[#4a5db3] transition-colors flex items-center justify-center gap-2 mb-10 shadow-[0_4px_20px_rgba(59,75,150,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            ยืนยันเติมเงิน
          </button>

          {/* Instructions List */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 mb-4">วิธีเติมเงินผ่าน TrueMoney</h4>
            <ul className="space-y-3">
              {[
                "เปิดแอป TrueMoney Wallet แล้วสร้างซองอั่งเปา (ของขวัญ) ตามจำนวนที่ต้องการ",
                "คัดลอกลิงก์ซองที่ได้ แล้ววางในช่องด้านบน ลิงก์จะขึ้นต้นด้วย https://gift.truemoney.com/...",
                'กด "ยืนยันเติมเงิน" ระบบจะรับซองให้อัตโนมัติ ยอดจะเข้าทันที',
                "ซอง 1 ใบใช้ได้ครั้งเดียว ถ้าเคยใช้แล้วจะไม่สามารถใช้ซ้ำได้",
                "มีค่าธรรมเนียม 0% หักจากยอดเติม",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-[20px] w-5 h-5 mt-0.5 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-[10px] font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}