import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function SavePostcard() {
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
              ${i === 3 ? "bg-[#e11d48] text-white border-white scale-110" : "bg-white text-zinc-300 border-zinc-100 hover:border-[#e11d48] hover:text-[#e11d48] hover:scale-105"}
            `}
          >
            {char}
          </Link>
        ))}
      </div>

      {/* Left Area: Blurred Preview & QR Code */}
      <div className="flex-1 h-full flex items-center justify-center pl-24 pr-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-[550px] aspect-square flex items-center justify-center"
        >
          {/* Blurred Background Image */}
          <div className="absolute inset-0 bg-[#fffafa] rounded-sm overflow-hidden p-8 border-2 border-[#e11d48]/10">
             <div className="w-full h-full opacity-40 blur-[40px] flex items-center justify-center grayscale-[0.5]">
                <svg viewBox="0 0 600 600" className="w-[120%] h-[120%] text-[#e11d48]">
                   <path d="M450,150 Q500,200 450,250 T300,350 T150,450" fill="none" stroke="currentColor" strokeWidth="100" strokeLinecap="round" />
                   <circle cx="450" cy="150" r="80" fill="currentColor" />
                </svg>
             </div>
          </div>

          {/* QR Code Placeholder (Click to simulate scan complete) */}
          <Link to="/" className="relative z-10 flex flex-col items-center gap-6 hover:scale-105 transition-all group">
            <div className="w-48 h-48 bg-white/90 backdrop-blur-sm p-4 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-xl border border-zinc-100 group-hover:shadow-[0_40px_80px_rgba(225,29,72,0.15)] transition-all">
               <div className="w-full h-full bg-zinc-200 flex items-center justify-center rounded-sm">
                  <span className="text-4xl">🔳</span>
               </div>
            </div>
            <div className="bg-[#e11d48] text-white px-6 py-2 rounded-full font-bold tracking-widest text-sm shadow-lg group-hover:bg-[#be123c] transition-colors">
               扫 码 保 存 明 信 片
            </div>
          </Link>

          {/* Decorative Corner Brush Stamp */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-8xl font-black shadow-2xl p-4 rotate-[-15deg]">
             保
          </div>
        </motion.div>
      </div>

      {/* Right Area: Stylized Card Design */}
      <div className="w-[45%] h-full flex items-center pr-24 pl-8 relative z-20">
         <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[500px] aspect-[1/1.4] bg-gradient-to-br from-[#ffd8a8] via-[#ffec99] to-[#ffd8a8] rounded-[2.5rem] shadow-[0_80px_150px_rgba(0,0,0,0.15)] flex flex-col p-1 relative overflow-hidden"
         >
            {/* Inner Border Design */}
            <div className="absolute inset-4 border border-[#e11d48]/20 rounded-[2rem] pointer-events-none" />
            
            {/* Background Texture Pattern */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay">
               <div className="grid grid-cols-10 gap-2 p-4">
                 {[...Array(60)].map((_, i) => (
                   <div key={i} className="w-8 h-8 flex items-center justify-center text-[#e11d48]">❈</div>
                 ))}
               </div>
            </div>

            {/* Card Content */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8">
               {/* Header */}
               <div className="text-center space-y-4">
                  <h3 className="text-4xl font-black text-[#e11d48] tracking-[0.5em] ml-[0.5em]">蝴蝶纹</h3>
                  <p className="text-[10px] text-orange-800/60 font-bold tracking-widest uppercase">锦绘九洲寻祖迹，丝传万代幻蝶魂</p>
               </div>

               {/* Center Image Container */}
               <div className="w-[85%] aspect-square bg-[#fff9f0] rounded-3xl shadow-inner border border-[#e11d48]/5 flex items-center justify-center p-8">
                  <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-[0_20px_40px_rgba(225,29,72,0.25)]">
                     <path d="M450,150 Q500,200 450,250 T300,350 T150,450" fill="none" stroke="#e11d48" strokeWidth="80" strokeLinecap="round" />
                     <circle cx="450" cy="150" r="60" fill="#e11d48" />
                     <path d="M300,300 L320,280 L340,300 Z" fill="#fbbf24" />
                     <path d="M250,350 L270,330 L290,350 Z" fill="#3b82f6" />
                  </svg>
               </div>

               {/* Footer */}
               <div className="text-center space-y-2">
                  <div className="text-3xl font-serif-zh font-bold text-orange-900 tracking-[0.2em] mb-4">吉祥如意</div>
                  <div className="font-serif-en italic text-orange-800/40 text-sm tracking-widest">S h i d o n g   M i a o</div>
               </div>

               {/* Token Badges (Corners) */}
               {["生息", "庇佑", "繁衍", "溯源"].map((text, idx) => (
                 <div 
                   key={idx} 
                   className={`absolute w-12 h-12 bg-white/40 backdrop-blur-md rounded-full border border-orange-200/50 flex flex-col items-center justify-center text-[10px] font-bold text-orange-800/70 shadow-sm
                    ${idx === 0 ? "top-8 left-8" : idx === 1 ? "top-8 right-8" : idx === 2 ? "bottom-8 left-8" : "bottom-8 right-8"}`}
                 >
                   {text.split('').map((c, i) => <span key={i} className="leading-none">{c}</span>)}
                 </div>
               ))}
            </div>
         </motion.div>
      </div>

      {/* Bottom Action Button - Return to Home - Top Layered */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.8, duration: 0.6 }}
         className="absolute bottom-16 right-16 z-[120]"
      >
         <Link to="/" className="relative group p-0.5 inline-block">
            <div className="absolute inset-0 bg-[#e11d48] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white border-[5px] border-[#e11d48] rounded-full px-10 py-4 shadow-[0_25px_50px_-12px_rgba(225,29,72,0.5)] transition-transform active:scale-95">
               <div className="flex items-center gap-4">
                 <span className="text-2xl font-black text-[#e11d48] tracking-tighter">返回首页</span>
                 <div className="w-10 h-10 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform">🏠</div>
               </div>
            </div>
         </Link>
      </motion.div>

      {/* Giant Background Character */}
      <div className="absolute -bottom-20 right-[-10vw] opacity-[0.03] pointer-events-none select-none rotate-[-5deg]">
         <span className="text-[50vw] font-black italic">藏</span>
      </div>
    </div>
  );
}
