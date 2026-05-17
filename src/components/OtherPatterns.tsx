import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "植物类",
    en: "Plant Series",
    items: [
      { name: "牡丹花", icon: "🌸" },
      { name: "桃子", icon: "🍑" },
      { name: "桃花", icon: "🌺" },
      { name: "石榴花", icon: "🍊" },
    ]
  },
  {
    name: "人物类",
    en: "Figure Series",
    items: [
      { name: "蝴蝶妈妈", icon: "🦋" },
      { name: "理老", icon: "👨" },
      { name: "女英雄务冒娘", icon: "🛡️" },
      { name: "月中姜央", icon: "🌙" },
    ]
  },
  {
    name: "变形类",
    en: "Transformation Series",
    items: [
      { name: "鱼龙", icon: "🐉" },
      { name: "双头鸡", icon: "🐔" },
      { name: "飞虎", icon: "🐅" },
      { name: "蜈蚣龙", icon: "🐛" },
    ]
  }
];

export default function OtherPatterns() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden flex items-center m-0 p-0 font-serif-zh">
      {/* Outer Frame */}
      <div className="absolute inset-0 border-[24px] border-[#e11d48] z-[100] pointer-events-none" />

      {/* Header UI */}
      <div className="absolute top-16 left-24 z-[110] flex items-start gap-6">
        <div className="w-16 h-16 bg-[#e11d48] rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
            <span className="text-white text-4xl">❀</span>
        </div>
        <div>
            <h1 className="text-6xl text-zinc-900 font-black tracking-tight leading-none">其他纹样</h1>
            <p className="font-serif-en text-zinc-400 italic text-xl mt-2">other patterns</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-16 right-24 z-[110] flex gap-5">
        {["灵", "迹", "行", "藏"].map((char, i) => (
          <Link 
            key={i} 
            to={i === 0 ? "/animals" : i === 1 ? "/other-patterns" : i === 2 ? "/creative" : "/save-postcard"} 
            className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-3xl transition-all shadow-2xl font-bold
              ${i === 1 ? "bg-[#e11d48] text-white border-white scale-110" : "bg-white text-zinc-300 border-zinc-100 hover:border-[#e11d48] hover:text-[#e11d48] hover:scale-105"}
            `}
          >
            {char}
          </Link>
        ))}
      </div>

      {/* Right Side: Rotational Reveal Motif */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[55vw] aspect-square z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, rotate: 60, scale: 1.2 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          {/* Circular Glow Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-rose-100/50 to-transparent flex items-center justify-center">
             <div className="w-[90%] h-[90%] rounded-full border-[60px] border-rose-50/80" />
          </div>
          
          {/* Main Motif Illustration Placeholder (Using SVGs for the complex pattern) */}
          <div className="absolute inset-0 flex items-center justify-center p-20">
             <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-[0_45px_75px_rgba(225,29,72,0.3)]">
                <path d="M100,300 C100,100 500,100 500,300 C500,500 100,500 100,300" fill="#e11d48" opacity="0.9" />
                <path d="M200,200 L400,200 L450,300 L300,450 L150,300 Z" fill="white" />
                <circle cx="300" cy="280" r="80" fill="#fecaca" stroke="#e11d48" strokeWidth="8" />
                <path d="M250,280 Q300,230 350,280 M280,310 Q300,340 320,310" stroke="#e11d48" strokeWidth="6" fill="none" />
                <path d="M150,300 Q300,380 450,300" stroke="#fbbf24" strokeWidth="15" strokeDasharray="40 20" fill="none" />
             </svg>
          </div>
        </motion.div>
      </div>

      {/* Left Side: Staggered Fade-in List */}
      <div className="relative z-20 ml-24 mt-24 w-[52%] flex flex-col gap-4">
        {categories.map((cat, catIdx) => (
          <div key={cat.name} className="flex flex-col">
             <div className="flex items-center gap-8 mb-4">
                {/* Category Label */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + catIdx * 0.3, duration: 0.8 }}
                  className="w-10 flex flex-col items-center gap-1"
                >
                   <span className="text-[#e11d48] text-lg">✲</span>
                   <div className="flex flex-col text-zinc-900 font-bold tracking-widest text-base py-1">
                     {cat.name.split('').map((char, i) => (
                       <span key={i}>{char}</span>
                     ))}
                   </div>
                </motion.div>

                {/* Items Row */}
                <div className="flex-1 flex gap-4 items-center">
                   {cat.items.map((item, itemIdx) => (
                     <motion.div 
                       key={item.name}
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ 
                         delay: 1.5 + catIdx * 0.3 + itemIdx * 0.1, 
                         duration: 0.8,
                         ease: "easeOut"
                       }}
                       className="group flex items-center gap-3 cursor-pointer"
                     >
                        <div className="relative">
                            <div className="w-24 h-24 bg-white rounded-[1.5rem] border-2 border-zinc-100 shadow-lg flex items-center justify-center p-4 group-hover:border-[#e11d48] group-hover:scale-105 transition-all">
                                <span className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
                            </div>
                        </div>
                        <div className="flex flex-col text-zinc-900 font-bold text-sm leading-none">
                           {item.name.split('').map((char, i) => (
                             <span key={i}>{char}</span>
                           ))}
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
             
             {/* Divider Line */}
             <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3 + catIdx * 0.3, duration: 1 }}
                className="w-full h-px bg-gradient-to-r from-[#e11d48]/30 via-[#e11d48]/10 to-transparent origin-left mb-2"
             />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
