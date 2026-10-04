import React from 'react';
import { motion } from 'motion/react';

export default function AmbientLightBulb() {
  return (
    <div className="relative flex items-center justify-center min-h-[25rem] w-full bg-neutral-950 overflow-hidden rounded-2xl">
      {/* Background ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[25rem] h-[25rem] rounded-full bg-amber-500/20 blur-[100px]"
      />
      
      {/* Inner intense glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute w-[9.375rem] h-[9.375rem] rounded-full bg-amber-400/40 blur-[50px]"
      />

      {/* The Bulb (Core) */}
      <div className="relative z-10 w-24 h-24">
        {/* Glass Bulb Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-200 rounded-full shadow-[0_0_50px_10px_rgba(251,191,36,0.6)] backdrop-blur-sm border border-white/40" />
        
        {/* Filament */}
        <motion.div 
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-[35%] bg-amber-100 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,1)]"
        />
        
        {/* Specular highlight */}
        <div className="absolute top-2 left-3 w-6 h-4 bg-white/60 rounded-full blur-[2px] transform -rotate-45" />
      </div>

      {/* Lighting reflection on floor/bottom (optional) */}
      <div className="absolute bottom-0 w-3/4 h-1/4 bg-amber-500/10 blur-[40px] rounded-full" />
    </div>
  );
}
