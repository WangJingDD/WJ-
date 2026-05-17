import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function TransformationResult() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden flex m-0 p-0 font-serif-zh">
      {/* Outer Frame */}
      <div className="absolute inset-0 border-[24px] border-[#e11d48] z-[100] pointer-events-none" />

      {/* Navigation */}
      <div className="absolute top-16 right-24 z-[110] flex gap-5">
        {["灵", "迹", "行", "藏"].map((char, i) => (
          <Link 
            key={i} 
            to={i === 0 ? "/animals" : i === 1 ? "/other-patterns" : i === 2 ? "/creative" : "/save-postcard"} 
            className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-3xl transition-all shadow-2xl font-bold
              ${i === 2 ? "bg-[#e11d48] text-white border-white scale-110" : "bg-white text-zinc-300 border-zinc-100 hover:border-[#e11d48] hover:text-[#e11d48] hover:scale-105"}
            `}
          >
            {char}
          </Link>
        ))}
      </div>

      {/* Left: Main Transformation Result */}
      <div className="flex-1 h-full flex items-center justify-center pl-8 pr-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[600px] aspect-square bg-[#fffafa] shadow-2xl rounded-sm p-12"
        >
          {/* Decorative Pattern Borders (Unified with Canvas) */}
          <div className="absolute -inset-6 border-[3px] border-[#e11d48]/40 rounded-lg pointer-events-none" />
          <div className="absolute -inset-10 border-[10px] border-double border-[#e11d48]/10 rounded-xl pointer-events-none" />
          
          {/* Result Content (Stylized Dragon Illustration) */}
          <div className="w-full h-full flex items-center justify-center">
             <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-[0_30px_60px_rgba(225,29,72,0.3)]">
                {/* Simplified S-shaped Dragon Body */}
                <path d="M450,150 Q500,200 450,250 T300,350 T150,450" fill="none" stroke="#e11d48" strokeWidth="80" strokeLinecap="round" />
                <path d="M450,150 Q500,200 450,250 T300,350 T150,450" fill="none" stroke="white" strokeWidth="60" strokeLinecap="round" strokeDasharray="10 20" opacity="0.3" />
                {/* Head */}
                <circle cx="450" cy="150" r="60" fill="#e11d48" />
                <circle cx="470" cy="130" r="10" fill="white" />
                {/* Colorful Fins/Scales */}
                <path d="M300,300 L320,280 L340,300 Z" fill="#fbbf24" />
                <path d="M250,350 L270,330 L290,350 Z" fill="#3b82f6" />
                <path d="M350,450 L370,430 L390,450 Z" fill="#22c55e" />
             </svg>
          </div>

          {/* Action Tools */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-30">
            <button className="w-14 h-24 bg-zinc-600/90 text-white rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-zinc-700 transition-colors">
              <span className="text-sm font-bold">重新</span>
              <span className="text-sm font-bold">生成</span>
            </button>
            <Link to="/save-postcard" className="w-14 h-24 bg-zinc-600/90 text-white rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-zinc-700 transition-colors border-l-2 border-white/10 no-underline">
              <span className="text-sm font-bold">保</span>
              <span className="text-sm font-bold">存</span>
            </Link>
          </div>

          {/* Big Background Corner Char */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-8xl font-black shadow-2xl p-4 rotate-[-15deg]">
             转
          </div>
        </motion.div>
      </div>

      {/* Right: Original Line Art Preview */}
      <div className="w-[35%] h-full flex flex-col justify-center pr-24 pl-4 relative z-20">
         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-12"
         >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#e11d48] rounded-full flex items-center justify-center text-white scale-75">❀</div>
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight">手绘线稿</h2>
              <span className="font-serif-en italic text-zinc-400 text-sm mt-1">line drawing</span>
            </div>

            <div className="relative w-[320px] aspect-square bg-[#fffafa] shadow-inner rounded-sm p-4 border border-[#e11d48]/20">
               {/* Decorative Stamp Border */}
               <div className="absolute -inset-3 border-4 border-double border-[#e11d48]/20 rounded-md pointer-events-none" />
               
               {/* Simplified Line Art Placeholder */}
               <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
                  <path d="M300,100 Q350,150 300,200 T200,300 T100,350" fill="none" stroke="#e11d48" strokeWidth="4" />
                  <circle cx="300" cy="100" r="30" fill="none" stroke="#e11d48" strokeWidth="4" />
                  <path d="M280,100 L320,100 M300,80 L300,120" stroke="#e11d48" strokeWidth="2" />
               </svg>
            </div>
         </motion.div>

         {/* Bottom Action Button */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-20 right-20"
         >
            <Link to="/creative" className="relative group p-0.5 inline-block">
               <div className="absolute inset-0 bg-[#e11d48] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
               <div className="relative bg-white border-[4px] border-[#e11d48] rounded-full px-8 py-3.5 shadow-xl transition-transform active:scale-95">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-[#e11d48]">重新绘画</span>
                    <div className="w-9 h-9 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-lg group-hover:rotate-45 transition-transform">➜</div>
                  </div>
               </div>
            </Link>
         </motion.div>
      </div>

      {/* Large Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none select-none -z-10 rotate-[-10deg]">
         <span className="text-[40vw] font-black leading-none">行</span>
      </div>
    </div>
  );
}
