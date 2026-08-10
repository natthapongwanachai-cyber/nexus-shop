import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Background Neon Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        <div className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-wider uppercase">
            Welcome to the Future of Digital Store
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          ELEVATE YOUR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            GAMING EXPERIENCE
          </span>
        </h1>
        
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10">
          NEXUS SHOP is your ultimate destination for premium digital goods, top-ups, and exclusive items. Fast, secure, and reliable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden group shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:scale-105 transition-transform duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              EXPLORE PRODUCTS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-white bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors backdrop-blur-md">
            JOIN COMMUNITY
          </Link>
        </div>
      </main>
      
      {/* Feature Cards Section */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-20 w-full">
         {/* Card 1 */}
         <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl hover:border-cyan-500/30 transition-colors group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform border border-cyan-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Instant Delivery</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Get your digital products and top-ups delivered instantly right after a successful payment.</p>
         </div>
         
         {/* Card 2 */}
         <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl hover:border-purple-500/30 transition-colors group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform border border-purple-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Secure Payments</h3>
            <p className="text-gray-500 text-sm leading-relaxed">100% secure payment gateways ensuring your data and transactions are safe at all times.</p>
         </div>
         
         {/* Card 3 */}
         <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl hover:border-pink-500/30 transition-colors group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform border border-pink-500/20">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Our dedicated support team is always ready to assist you round the clock for any inquiries.</p>
         </div>
      </section>
    </div>
  );
}