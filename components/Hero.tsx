import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 w-full max-w-7xl mb-12 md:mb-0">
        
        {/* Visual 3D Stack */}
        <div className="perspective-1200 w-[300px] h-[400px] md:w-[360px] md:h-[480px] relative group z-0">
          {/* Back Card */}
          <div className="absolute top-1/2 left-1/2 w-[260px] h-[300px] md:w-[300px] md:h-[340px] bg-[#0400ff] rounded-2xl 
            flex items-center justify-center text-center p-4 overflow-hidden shadow-2xl
            transform -translate-x-[40%] -translate-y-[48%] scale-95 rotate-[-12deg] opacity-95
            transition-transform duration-500 ease-out group-hover:translate-x-[-90%] group-hover:-translate-y-[20%] group-hover:scale-105 group-hover:-rotate-12"
          >
            <div className="font-display text-xl md:text-2xl leading-tight text-white/20 opacity-50 select-none break-words">
              MOCGRAPH STUDIO MOCGRAPH STUDIO MOCGRAPH STUDIO MOCGRAPH STUDIO
            </div>
          </div>

          {/* Front Card */}
          <div className="absolute top-1/2 left-1/2 w-[240px] h-[340px] md:w-[260px] md:h-[380px] bg-[#0f0f0f] border border-white/10 rounded-2xl
            flex flex-col overflow-hidden shadow-2xl
            transform -translate-x-[30%] -translate-y-1/2 rotate-[6deg]
            transition-transform duration-500 ease-out group-hover:translate-x-[10%] group-hover:-translate-y-[60%] group-hover:scale-105 group-hover:rotate-6"
          >
            <img 
              src="https://picsum.photos/400/600" 
              alt="Badge" 
              className="w-full h-[calc(100%-88px)] object-cover"
            />
            <div className="h-[88px] p-4 flex justify-between items-center bg-white/5 backdrop-blur-sm border-t border-white/5">
              <div className="text-white font-bold tracking-widest text-xs">MOCGRAPH</div>
              <div className="text-white/60 text-xs">ID - 2025</div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center z-10 mix-blend-difference">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[12vw] md:text-[9vw] leading-[0.9] tracking-tighter uppercase text-white m-0"
          >
            Creative<br />Design
          </motion.h1>
        </div>
      </div>

      {/* Scroll Down Indicator - Responsive Fix Applied */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-50 p-4"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white/50 rounded-full flex items-center justify-center animate-bounce bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <ArrowDown size={24} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;