import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const lineArtCategories = [
  {
    name: "龙纹",
    items: [
      { id: "d1", icon: "🐉" },
      { id: "d2", icon: "🐲" },
      { id: "d3", icon: "🐍" },
      { id: "d4", icon: "🦎" },
    ]
  },
  {
    name: "蝴蝶纹",
    items: [
      { id: "b1", icon: "🦋" },
      { id: "b2", icon: "🐝" },
      { id: "b3", icon: "🐞" },
      { id: "b4", icon: "🦗" },
    ]
  },
  {
    name: "鸟纹",
    items: [
      { id: "n1", icon: "🦅" },
      { id: "n2", icon: "🦉" },
      { id: "n3", icon: "🕊️" },
      { id: "n4", icon: "🦜" },
    ]
  }
];

export default function CreativeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<"draw" | "erase">("draw");
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#e11d48";
    ctx.lineWidth = 3;
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;
    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    if (tool === "erase") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 20;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#e11d48";
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSelectedPreset(null);
  };

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

      {/* Left: Canvas Area */}
      <div className="flex-1 h-full flex items-center justify-center pl-8 pr-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[600px] aspect-square bg-[#fffafa] shadow-inner rounded-sm"
        >
          {/* Decorative Pattern Borders (Hmong Style Influence) */}
          <div className="absolute -inset-6 border-[3px] border-[#e11d48]/40 rounded-lg pointer-events-none" />
          <div className="absolute -inset-10 border-[10px] border-double border-[#e11d48]/10 rounded-xl pointer-events-none" />
          
          {/* Detailed Corner Ornaments */}
          {[
            { pos: "top-0 left-0", rot: "rotate-0" },
            { pos: "top-0 right-0", rot: "rotate-90" },
            { pos: "bottom-0 right-0", rot: "rotate-180" },
            { pos: "bottom-0 left-0", rot: "rotate-270" }
          ].map((item, idx) => (
            <div key={idx} className={`absolute w-24 h-24 ${item.pos} z-10 opacity-30 text-[#e11d48] pointer-events-none ${item.rot}`}>
               <svg viewBox="0 0 100 100">
                 <path d="M0,0 Q50,0 50,50 Q0,50 0,0 M10,10 Q40,10 40,40 Q10,40 10,10" fill="currentColor" />
                 <circle cx="25" cy="25" r="5" fill="white" />
               </svg>
            </div>
          ))}

          {/* Symmetrical Top/Bottom/Left/Right Pattern Strips */}
          <div className="absolute top-[-24px] left-12 right-12 h-6 flex justify-around opacity-20 text-[#e11d48]">
            {[...Array(6)].map((_, i) => <span key={i} className="text-xl">❈</span>)}
          </div>
          <div className="absolute bottom-[-24px] left-12 right-12 h-6 flex justify-around opacity-20 text-[#e11d48]">
            {[...Array(6)].map((_, i) => <span key={i} className="text-xl">❈</span>)}
          </div>

          <canvas 
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={stopDrawing}
            onTouchMove={draw}
            className="w-full h-full cursor-crosshair touch-none relative z-20"
          />

          {/* Guide Line Art Overlay */}
          {selectedPreset && (
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none z-10 scale-110">
              <span className="text-[300px] grayscale select-none">{selectedPreset}</span>
            </div>
          )}

          {/* Tools Panel (Inside Canvas Frame) */}
          <div className="absolute bottom-6 right-6 flex gap-3 z-30 scale-90">
            <button 
              onClick={() => {
                clearCanvas();
                setTool("draw");
              }}
              className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center text-xl font-bold transition-all
                ${tool === "draw" ? "bg-[#e11d48] text-white border-white scale-110 shadow-lg" : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300"}
              `}
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs">绘</span>
                <span className="text-xs">画</span>
              </div>
            </button>
            <button 
              onClick={() => setTool("erase")}
              className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center text-xl font-bold transition-all
                ${tool === "erase" ? "bg-[#e11d48] text-white border-white scale-110 shadow-lg" : "bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300"}
              `}
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs">擦</span>
                <span className="text-xs">除</span>
              </div>
            </button>
            <button 
              onClick={clearCanvas}
              className="w-14 h-14 rounded-xl border-2 bg-white text-zinc-400 border-zinc-100 hover:border-rose-200 hover:text-rose-500 flex items-center justify-center text-xl font-bold transition-all"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs">清</span>
                <span className="text-xs">空</span>
              </div>
            </button>
          </div>

          {/* Giant Background Char */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none -translate-x-20 -translate-y-20">
             <span className="text-[35vw] font-black leading-none">绘</span>
          </div>
        </motion.div>
      </div>

      {/* Right: Preset Gallery */}
      <div className="w-[30%] h-full flex flex-col justify-center pr-24 -ml-24 relative z-20">
         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-6"
         >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e11d48] rounded-full flex items-center justify-center text-white scale-75">❀</div>
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight">预设线稿</h2>
              <span className="font-serif-en italic text-zinc-400 text-sm mt-1">preset line art</span>
            </div>

            <div className="space-y-4">
              {lineArtCategories.map((cat, catIdx) => (
                <div key={cat.name} className="flex flex-col gap-2">
                   <div className="flex items-center gap-2">
                      <span className="text-[#e11d48] text-[10px]">✲</span>
                      <div className="font-bold text-zinc-500 tracking-widest text-sm">
                        {cat.name}
                      </div>
                   </div>
                   <div className="grid grid-cols-4 gap-3">
                      {cat.items.map((item, itemIdx) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + catIdx * 0.2 + itemIdx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => {
                            clearCanvas();
                            setSelectedPreset(item.icon);
                          }}
                          className={`aspect-square bg-white border-2 rounded-xl flex items-center justify-center text-3xl shadow-sm cursor-pointer transition-all
                            ${selectedPreset === item.icon ? "border-[#e11d48] shadow-lg scale-105" : "border-zinc-50 hover:border-[#e11d48]/50"}
                          `}
                        >
                          {item.icon}
                        </motion.div>
                      ))}
                   </div>
                </div>
              ))}
            </div>
         </motion.div>

         {/* Bottom Right Button - Compact & Cornered */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-20 right-20"
         >
            <Link to="/transformation-result" className="relative group p-0.5 inline-block">
               <div className="absolute inset-0 bg-[#e11d48] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
               <div className="relative bg-white border-[4px] border-[#e11d48] rounded-full px-8 py-3.5 shadow-xl transition-transform active:scale-95">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black text-[#e11d48]">开始转绘</span>
                    <div className="w-9 h-9 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-lg group-hover:rotate-45 transition-transform">➜</div>
                  </div>
               </div>
            </Link>
         </motion.div>
      </div>

      {/* Background Floating Element */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none z-0">
         <span className="text-[35vw] font-black italic">ARTISTIC</span>
      </div>
    </div>
  );
}
