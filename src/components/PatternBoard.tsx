import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface PatternBoardProps {
  permanentlyActive?: boolean;
  nextPath?: string;
  prevPath?: string;
  title?: string;
  subtitle?: string;
  chineseTitle?: string;
  sideText?: string;
  bottomTextFirst?: string;
  bottomTextLast?: string;
}

export default function PatternBoard({
  permanentlyActive = false,
  nextPath,
  prevPath,
  title = "Shidong Miao",
  subtitle = "embroidery patterns",
  chineseTitle = "施洞苗",
  sideText = "AIGC + 刺绣纹样",
  bottomTextFirst = "游方",
  bottomTextLast = "叙智"
}: PatternBoardProps) {
  const [internalHover, setInternalHover] = useState(false);
  
  const active = permanentlyActive || internalHover;

  return (
    <div 
      className="relative w-[92vw] aspect-[16/9] bg-white pattern-container shadow-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => !permanentlyActive && setInternalHover(true)}
      onMouseLeave={() => !permanentlyActive && setInternalHover(false)}
    >
      {/* Universal Navigation Link */}
      <Link to={nextPath || prevPath || "#"} className="absolute inset-0 z-40" />

      {/* 1. Background Decorative Text (Lower Layer) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none z-0">
        <span className="font-serif-en font-black text-[18vw] whitespace-nowrap tracking-widest italic">HMONG PATTERNS</span>
      </div>

      {/* 2. Title Section (Mid-Low Layer) */}
      <div className="absolute top-10 left-16 z-10 pointer-events-none">
        <h1 className="font-serif-en text-7xl md:text-8xl text-zinc-900 tracking-tighter leading-none font-medium">
          {title}
        </h1>
        <h2 className="font-serif-en italic text-6xl md:text-7xl text-zinc-900 ml-24 -mt-3 font-light">
          {subtitle}
        </h2>
      </div>

      {/* Chinese Title (Right Top) */}
      <div className="absolute top-10 right-20 z-10 flex flex-col items-center pointer-events-none">
        <div className="font-serif-zh text-7xl text-zinc-900 flex flex-col leading-[0.9] font-black">
          {chineseTitle.split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>

      {/* Vertical Side Text (Far Right) */}
      <div className="absolute top-12 right-6 h-full z-10 pointer-events-none">
        <div className="vertical-text font-serif-zh text-[10px] text-zinc-600 font-bold opacity-80">
          {sideText}
        </div>
      </div>

      {/* 3. Central Illustration Area (Mid-High Layer) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative w-[65%] aspect-video flex items-center justify-center">
          <motion.div 
            initial={false}
            animate={{ 
                scale: active ? 1.08 : 1,
                rotate: active ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="w-full h-full flex items-center justify-center relative"
          >
            {/* The main creature */}
            <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 500 300" className="w-[120%] h-auto drop-shadow-[0_20px_35px_rgba(225,29,72,0.3)]">
                    <path 
                        d="M80,180 C150,280 300,280 350,180 C400,80 460,180 480,220" 
                        stroke="#e11d48" 
                        strokeWidth="50" 
                        fill="none" 
                        strokeLinecap="round"
                    />
                    <path 
                        d="M100,190 Q250,260 400,190" 
                        stroke="#fbbf24" 
                        strokeWidth="8" 
                        strokeDasharray="15 8" 
                        fill="none"
                    />
                    <circle cx="90" cy="170" r="50" fill="#e11d48" />
                    <circle cx="75" cy="160" r="12" fill="white" />
                    <circle cx="75" cy="160" r="6" fill="#18181b" />
                    <path d="M60,200 Q90,230 120,200" stroke="white" strokeWidth="5" fill="none" />
                    
                    <rect x="235" y="80" width="45" height="70" rx="12" fill="#f97316" stroke="#18181b" strokeWidth="4" />
                    <circle cx="257" cy="70" r="22" fill="#fecaca" stroke="#18181b" strokeWidth="3" />
                    <path d="M245,70 Q257,82 270,70" stroke="#18181b" strokeWidth="3" fill="none" />
                </svg>

                {/* Decorations */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.5 }}
                    className="absolute inset-0 z-20 pointer-events-none"
                >
                    <div className="absolute top-0 left-10 w-16 h-16 bg-rose-600 rounded-full border-4 border-white shadow-xl animate-pulse"></div>
                    <div className="absolute bottom-4 right-10 w-24 h-12 bg-orange-500 rounded-full border-4 border-rose-100 flex items-center justify-around px-2">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                        <div className="w-10 h-2 bg-red-700 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/3 -right-6 w-10 h-10 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="absolute -top-10 left-1/2 w-14 h-14 bg-red-500 rounded-full border-4 border-white"></div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Calligraphy Bottom Section (Highest Layer) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30 pointer-events-none">
        <div className="relative flex items-center">
            {/* Split Hint Text */}
            <motion.div 
               animate={{ opacity: active ? 0.3 : 0 }}
               className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
            >
                <span className="text-zinc-400 text-xs tracking-[1em] uppercase font-bold mt-20">Click to switch</span>
            </motion.div>

            {/* Phrase Start */}
            <motion.span 
                animate={{ x: active ? -240 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-calligraphy text-[11rem] text-zinc-900 whitespace-nowrap"
            >
                {bottomTextFirst}
            </motion.span>
            
            {/* Phrase End */}
            <motion.span 
                animate={{ x: active ? 240 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-calligraphy text-[11rem] text-zinc-900 whitespace-nowrap"
            >
                {bottomTextLast}
            </motion.span>
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.5em;
        }
      `}</style>
    </div>
  );
}
