import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function FlipbookReveal({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 items-start" style={{ perspective: '1000px' }}>
      <AnimatePresence>
        <motion.div
          animate={revealed ? { scale: 0.9, filter: 'blur(0px)' } : { scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-auto flex justify-center mb-8 md:mb-0 shrink-0 md:sticky md:top-32"
        >
          <div className="text-center">
            {!revealed && (
              <p className="text-[#5B6572] mb-6 text-sm uppercase tracking-widest font-medium">Click to reveal</p>
            )}
            <motion.div
              className="relative w-72 h-44 md:w-44 md:h-96 cursor-pointer mx-auto"
              onClick={() => {
                if (!isFlipped) {
                  setIsFlipped(true);
                  setTimeout(() => setRevealed(true), 800);
                }
              }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 70, damping: 15 }}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={!isFlipped ? { scale: 1.05, translateY: -5 } : {}}
            >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 rounded-lg shadow-2xl flex md:flex-col items-center justify-center border-2 border-[#5B6572] gap-6"
                  style={{ backgroundColor: '#102A43', backfaceVisibility: 'hidden', backgroundImage: 'radial-gradient(circle at center, #102A43 0%, #0a1f33 100%)' }}
                >
                  {/* Desktop Vertical SVG */}
                  <svg width="44" height="180" viewBox="0 0 44 180" className="hidden md:block text-[#222222] fill-transparent stroke-current stroke-[4] stroke-linejoin-round">
                    <circle cx="22" cy="30" r="16" />
                    <polygon points="22,74 38,106 6,106" />
                    <rect x="7" y="134" width="30" height="30" />
                  </svg>
                  {/* Mobile Horizontal SVG */}
                  <svg width="130" height="44" viewBox="0 0 130 44" className="md:hidden text-[#222222] fill-transparent stroke-current stroke-[4] stroke-linejoin-round">
                    <circle cx="22" cy="22" r="16" />
                    <polygon points="65,6 81,38 49,38" />
                    <rect x="94" y="6" width="30" height="30" />
                  </svg>
                </div>
                
                {/* Back of Card */}
                <div 
                  className="absolute inset-0 rounded-lg shadow-2xl flex flex-col items-center justify-center border-2 border-[#5B6572] p-4 text-center"
                  style={{ backgroundColor: '#102A43', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', backgroundImage: 'radial-gradient(circle at center, #102A43 0%, #0a1f33 100%)' }}
                >
                   <div className="text-[#222222] font-mono font-bold text-2xl md:text-3xl tracking-[0.3em] opacity-80 mb-2 md:mb-6 md:rotate-90">001</div>
                   <div className="text-[#222222] text-sm font-semibold tracking-widest md:rotate-90 md:mt-12 md:whitespace-nowrap">CONFIDENTIAL</div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* The actual flipbooks container */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, x: 60, filter: 'blur(10px)', scale: 0.95 }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full flex-grow min-w-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
