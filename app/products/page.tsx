import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Valorant Points (VP)", price: "฿300", category: "Game Top-up", glow: "cyan" },
    { id: 2, name: "Steam Wallet Code", price: "฿1,000", category: "Gift Card", glow: "purple" },
    { id: 3, name: "Discord Nitro (1 Month)", price: "฿350", category: "Subscription", glow: "pink" },
    { id: 4, name: "Netflix Premium", price: "฿150", category: "Streaming", glow: "cyan" },
    { id: 5, name: "Spotify Premium", price: "฿120", category: "Streaming", glow: "purple" },
    { id: 6, name: "Free Fire Diamonds", price: "฿99", category: "Game Top-up", glow: "pink" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-[#050505] text-white py-12 px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 tracking-tight uppercase text-center mb-4">
            Our Products
          </h2>
          <p className="text-gray-500 text-center max-w-2xl">
            Browse our premium selection of digital goods and services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.15] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.05] p-6 rounded-xl flex flex-col">
                <div className={`w-full h-48 rounded-lg mb-6 bg-gradient-to-br flex items-center justify-center border border-white/[0.05] shadow-inner ${
                  product.glow === 'cyan' ? 'from-cyan-500/10 to-cyan-500/5 text-cyan-400' : 
                  product.glow === 'purple' ? 'from-purple-500/10 to-purple-500/5 text-purple-400' : 
                  'from-pink-500/10 to-pink-500/5 text-pink-400'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                
                <div className="flex-grow">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-white/[0.05] px-2 py-1 rounded-md">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-4">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 rounded-lg font-bold text-sm text-white bg-white/[0.05] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 transition-all duration-300 border border-white/[0.1] hover:border-transparent">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}