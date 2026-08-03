"use client";

import { useState } from "react";

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  version: string;
};

export default function ProductCard({ product }: { product: ProductType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#111] p-4 rounded-lg border border-gray-800 flex flex-col">
        <div className="h-40 bg-black mb-4 rounded border border-gray-800 flex items-center justify-center relative">
          <span className="text-gray-700 text-xs">PRODUCT IMAGE</span>
          <span className="absolute top-2 left-2 text-[#00e5ff] text-xs font-bold">
            {String(product.id).padStart(2, '0')}
          </span>
          <span className="absolute top-2 right-2 text-[#00e5ff] text-xs font-bold">
            {product.version}
          </span>
        </div>
        
        <h3 className="font-bold text-lg text-white tracking-wide">{product.name}</h3>
        
        <p className="text-gray-500 text-sm mt-2 mb-6 min-h-[40px]">
          {product.description || "No description provided."}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-[#00e5ff] font-bold text-lg">{product.price} THB</span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-1 border border-[#00e5ff]/50 text-white text-sm font-semibold rounded hover:bg-[#ff00ea] hover:border-[#ff00ea] transition-all shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_15px_rgba(255,0,234,0.5)]"
          >
            PURCHASE
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-[#00e5ff]/50 p-6 rounded-lg w-96 max-w-[90%] shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <h2 className="text-xl font-bold text-white mb-4">Confirm Purchase</h2>
            <p className="text-gray-400 mb-6">
              Proceed with purchasing <span className="text-[#00e5ff] font-bold">{product.name}</span> for {product.price} THB?
            </p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                CANCEL
              </button>
              <button 
                onClick={() => {
                  alert("Transaction processing initialized.");
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-[#00e5ff] text-black font-bold rounded hover:bg-[#ff00ea] hover:text-white transition-all shadow-[0_0_10px_rgba(0,229,255,0.2)]"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}