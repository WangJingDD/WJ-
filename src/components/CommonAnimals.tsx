import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const animalData = [
  {
    name: "牛",
    en: "The Ox",
    meaning: "牛是苗族最崇拜的图腾之一，象征着勤劳、力量与财富。在施洞苗族文化中，牛也常与祭祖相关，代表着对祖先的敬畏和对家族兴旺的祈愿。",
    feature: "施洞牛纹造型夸张且雄浑，强调牛角的优美弧线。线条流畅有力，常在牛身内部填充细致的花草纹，体现出一种刚健中带细腻的韵律感。",
    angle: 180, 
  },
  {
    name: "鱼",
    en: "The Fish",
    meaning: "鱼纹寓意着多子多福和繁殖能力。由于鱼产卵极多，苗族人民以此寄托人丁兴旺、家族绵延的愿望，同时也象征着生活的富足与自由自在。",
    feature: "鱼纹表现极为灵活，常呈成对或群聚状。施洞绣中的鱼多采用流线型设计，鱼鳞刻画极为考究, 运用破线绣的丝光质感，使鱼身看起来栩栩如生，富有灵动感。",
    angle: 215,
  },
  {
    name: "龙",
    en: "The Dragon",
    meaning: "这里的龙不同于汉族的威严，苗龙更显亲切，象征吉祥、护佑与风调雨顺。它被视为苗族的守护神，能驱邪避灾，为村寨带来好运。",
    feature: "施洞龙纹具有“变形美”，常出现龙首鱼身或龙首鸟身的组合。色彩明艳夺目，构图饱满且极度对称美，呈现出一种超脱现实的想象力和华丽的装饰风格。",
    angle: 250,
  },
  {
    name: "鸟",
    en: "The Bird",
    meaning: "鸟常被视为造物主的使者，象征生命、自由与美好。在施洞文化中，鸟纹也常与蝴蝶妈妈的传说相关，是连接祖先与后辈的情感纽带。",
    feature: "鸟纹姿态各异，有的引颈长鸣，有的振翅高飞。在表现上追求轻盈与优雅，翅膀羽毛的刻画层级分明，色彩对比强烈，展现出强烈的生命力和向上的动感。",
    angle: 290,
  },
  {
    name: "蝴蝶",
    en: "The Butterfly",
    meaning: "蝴蝶是苗族的“蝴蝶妈妈”，即万物始祖，寓意着生命的起源、母性与繁衍。它是苗族文化中最神圣、最受尊崇的图腾纹样。",
    feature: "蝴蝶纹通常居于构图中心，造型抽象且华美. 翅膀宽大，内部装饰有极度复杂的几何或花草纹样，展现出一种母仪天下的厚重感与高度的艺术概括力。",
    angle: 325,
  },
  {
    name: "狮子",
    en: "The Lion",
    meaning: "狮子形象象征着威武、权威与辟邪。它作为外来文化与本土文化的融合，在施洞刺绣中代表着护宅安康，祈求神灵保佑孩子健康成长、不受惊吓。",
    feature: "狮子纹摒弃了凶猛感，显得憨态可掬且色彩斑斓. 多强调头部 and 鬃毛的装饰，结构严谨，常结合破线绣特有的光泽，呈现出一种厚实、稳定的视觉力量感。",
    angle: 360,
  }
];

export default function CommonAnimals() {
  const radius = "calc(22vw + 10px)"; 

  return (
    <div 
      className="relative w-screen h-screen bg-white overflow-hidden flex items-center justify-center m-0 p-0 font-serif-zh"
      style={{ "--radius": radius } as React.CSSProperties}
    >
      {/* 1. Outer Frame */}
      <div className="absolute inset-0 border-[24px] border-[#e11d48] z-[100] pointer-events-none" />

      {/* 2. Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <span className="font-serif-en font-black text-[25vw] italic uppercase tracking-tighter select-none">SPIRIT</span>
      </div>

      {/* 3. Navigation UI */}
      <div className="absolute top-16 left-24 z-[110] flex items-start gap-6">
        <div className="w-16 h-16 bg-[#e11d48] rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
            <span className="text-white text-4xl">❀</span>
        </div>
        <div>
            <h1 className="text-6xl text-zinc-900 font-black tracking-tight leading-none">常见动物</h1>
            <p className="font-serif-en text-zinc-400 italic text-xl mt-2">common animals</p>
        </div>
      </div>

      <div className="absolute top-16 right-24 z-[110] flex gap-5">
        {["灵", "迹", "行", "藏"].map((char, i) => (
          <Link 
            key={i} 
            to={i === 0 ? "/animals" : i === 1 ? "/other-patterns" : i === 2 ? "/creative" : "/save-postcard"} 
            className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-3xl transition-all shadow-2xl font-bold
              ${i === 0 ? "bg-[#e11d48] text-white border-white scale-110" : "bg-white text-zinc-300 border-zinc-100 hover:border-[#e11d48] hover:text-[#e11d48] hover:scale-105"}
            `}
          >
            {char}
          </Link>
        ))}
      </div>

      {/* 4. Layer 10: Central Motive */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none -translate-y-28">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[44%] max-w-[550px] aspect-square flex items-center justify-center"
        >
            <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-[0_45px_75px_rgba(225,29,72,0.4)]">
                <path d="M150,300 C150,150 450,150 450,300 C450,450 150,450 150,300" fill="#e11d48" opacity="0.9" />
                <path d="M200,280 Q300,180 400,280 L360,400 Q300,430 240,400 Z" fill="white" />
                <circle cx="300" cy="280" r="40" fill="#fecaca" stroke="#18181b" strokeWidth="6" />
                <path d="M150,280 Q300,340 450,280" stroke="#fbbf24" strokeWidth="12" strokeDasharray="30 20" fill="none" />
                <path d="M260,280 Q300,310 340,280" stroke="#18181b" strokeWidth="4" fill="none" />
            </svg>
        </motion.div>
      </div>

      {/* 5. Layer 20: Animals */}
      <div className="absolute inset-0 flex items-center justify-center z-20 -translate-y-28 pointer-events-none">
        {animalData.map((animal, i) => {
          const radian = (animal.angle * Math.PI) / 180;
          const startRadian = (180 * Math.PI) / 180;
          
          const isLeftSideElement = i < 3;
          const infoBoxPlacement = isLeftSideElement 
            ? "right-full top-1/2 -translate-y-1/2 mr-10" 
            : "left-full top-1/2 -translate-y-1/2 ml-10";
          
          // Custom widths
          const boxWidth = (i === 0 || i === 5) ? "200px" : (i === 1 || i === 4) ? "260px" : "320px";
          const isCompact = i === 0 || i === 5 || i === 1 || i === 4;

          return (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, scale: 0, rotate: -120, x: `calc(cos(${startRadian}rad) * var(--radius))`, y: `calc(sin(${startRadian}rad) * -1 * var(--radius))` }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0, 
                x: `calc(cos(${radian}rad) * var(--radius))`, 
                y: `calc(sin(${radian}rad) * -1 * var(--radius))` 
              }}
              transition={{ 
                delay: 0.8 + (i * 0.12), 
                duration: 1.4, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="absolute group z-40 hover:z-[200] pointer-events-auto"
            >
              <div className="flex flex-col items-center relative">
                <motion.div 
                    whileHover={{ scale: 1.15, y: -12 }}
                    className="w-24 h-24 bg-white border-4 border-zinc-50 rounded-full shadow-2xl flex items-center justify-center p-5 cursor-pointer transition-all hover:border-[#e11d48] hover:shadow-[0_25px_60px_rgba(225,29,72,0.3)]"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#e11d48]">
                        <path d="M20,50 Q50,0 80,50 T20,50" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
                        <circle cx="50" cy="50" r="14" fill="currentColor" />
                    </svg>
                </motion.div>

                <div className="mt-4 flex items-center gap-2 bg-[#e11d48] px-5 py-1.5 rounded-full border-2 border-white shadow-2xl">
                    <span className="text-xl font-black text-white">{animal.name}</span>
                    <div className="h-4 w-[1px] bg-white/20 mx-0.5" />
                    <div className="flex flex-col leading-none">
                        <span className="text-[8px] text-white/70 italic lowercase font-serif-en">the</span>
                        <span className="text-[10px] text-white font-black uppercase tracking-tight font-serif-en">{animal.en.split(' ').pop()}</span>
                    </div>
                </div>

                <div 
                  className={`absolute ${infoBoxPlacement} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-90 group-hover:scale-100 z-[210]`}
                  style={{ width: boxWidth }}
                >
                    <div className={`bg-white/95 backdrop-blur-3xl rounded-[2rem] shadow-[0_50px_120px_rgba(0,0,0,0.25)] border-2 border-[#e11d48]/10 grid grid-cols-2 ring-1 ring-black/5 
                                    ${isCompact ? "p-4 gap-3" : "p-6 gap-6"}`}
                    >
                        <div className={`flex flex-col border-rose-50 ${isCompact ? "border-r pr-3" : "border-r pr-6"}`}>
                            <h4 className="text-sm font-black text-zinc-900 border-b border-rose-100 pb-2 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#e11d48] rounded-full shadow-sm" />
                                寓意
                            </h4>
                            <p className="text-[11px] text-zinc-600 leading-relaxed text-justify h-32 overflow-y-auto pr-2 scrollbar-thin">
                                {animal.meaning}
                            </p>
                        </div>
                        <div className={`flex flex-col ${isCompact ? "pl-1" : "pl-2"}`}>
                            <h4 className="text-sm font-black text-zinc-900 border-b border-rose-100 pb-2 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-400 rounded-full shadow-sm" />
                                风格特征
                            </h4>
                            <p className="text-[11px] text-zinc-600 leading-relaxed text-justify h-32 overflow-y-auto pr-2 scrollbar-thin">
                                {animal.feature}
                            </p>
                        </div>
                        <div className={`absolute top-1/2 -translate-y-1/2 ${isLeftSideElement ? "-right-10" : "-left-10"} w-10 h-[2px] ${isLeftSideElement ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#e11d48]/40 to-transparent`} />
                    </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #f4f4f5; border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: #e11d48; border-radius: 10px; }
      `}</style>
    </div>
  );
}
