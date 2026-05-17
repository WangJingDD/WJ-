import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface PatternFourPanelsProps {
  nextPath: string;
}

export default function PatternFourPanels({ nextPath }: PatternFourPanelsProps) {
  const panels = [
    { char: "灵", sub: "常见动物", color: "#e11d48", path: "/animals" },
    { char: "迹", sub: "其他大样", color: "#e11d48", path: "/other-patterns" },
    { char: "行", sub: "意象新生", color: "#e11d48", path: "/creative" },
    { char: "藏", sub: "数字留存", color: "#e11d48", path: "/save-postcard" },
  ];

  return (
    <div className="relative w-[92vw] aspect-[16/9] bg-white pattern-container shadow-2xl overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none z-0">
        <span className="font-serif-en font-black text-[18vw] whitespace-nowrap tracking-widest italic">HMONG PATTERNS</span>
      </div>

      {/* Top Titles */}
      <div className="absolute top-10 left-16 z-10 pointer-events-none">
        <h1 className="font-serif-en text-7xl md:text-8xl text-zinc-900 tracking-tighter leading-none font-medium">
          Shidong Miao
        </h1>
        <h2 className="font-serif-en italic text-6xl md:text-7xl text-zinc-900 ml-24 -mt-3 font-light">
          embroidery patterns
        </h2>
      </div>

      {/* Chinese Title (Right Top) */}
      <div className="absolute top-10 right-20 z-10 flex flex-col items-center pointer-events-none">
        <div className="font-serif-zh text-7xl text-zinc-900 flex flex-col leading-[0.9] font-black">
          <span>施</span>
          <span>洞</span>
          <span>苗</span>
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute top-12 right-6 h-full z-10 pointer-events-none">
        <div className="vertical-text font-serif-zh text-[10px] text-zinc-600 font-bold opacity-80 letter-spacing-[0.5em]">
          AIGC + 刺绣纹样
        </div>
      </div>

      {/* Four Panels Area */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-20 pt-20">
        <div className="grid grid-cols-4 gap-6 w-full max-w-6xl h-2/3">
          {panels.map((panel, i) => (
            <Link 
              key={i} 
              to={panel.path}
              className="group pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#e11d48] h-full rounded-xl flex flex-col items-center justify-between p-4 relative overflow-hidden shadow-lg border-4 border-transparent hover:border-white/40 transition-all"
              >
                {/* Brush Character */}
                <span className="font-calligraphy text-[12rem] text-white leading-none mt-2">
                  {panel.char}
                </span>

                {/* Illustration Placeholder (SVG Paths) */}
                <div className="w-full h-32 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white/90">
                      {i === 0 && ( // Phoenix
                          <path d="M20,80 Q50,20 80,50 T40,60" fill="none" stroke="currentColor" strokeWidth="2" />
                      )}
                      {i === 1 && ( // Flowers
                          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                      )}
                      {i === 2 && ( // Beast
                          <path d="M10,70 Q50,90 90,70 L80,40 Q50,10 20,40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                      )}
                      {i === 3 && ( // Person
                          <rect x="35" y="30" width="30" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
                      )}
                      {/* Inner detail */}
                      <path d="M0,80 Q50,100 100,80" stroke="currentColor" strokeWidth="0.5" fill="none" className="opacity-30" />
                  </svg>
                </div>

                {/* Vertical Subtext */}
                <div className="absolute bottom-4 left-4 vertical-text font-serif-zh text-[10px] text-white/80 font-medium">
                  {panel.sub}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
