import React from 'react';
import { SERVICES, LOGO_ICONS } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  // Create a duplicated list for infinite scroll
  const duplicatedIcons = [...LOGO_ICONS, ...LOGO_ICONS, ...LOGO_ICONS, ...LOGO_ICONS];

  return (
    <section id="services" className="py-32 bg-black w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light tracking-[3px] uppercase text-white mb-12 text-center"
        >
          What I Like To Do ?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-32">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-24 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center
                text-white font-body font-light text-sm md:text-base hover:bg-[#006eff] hover:border-[#4da6ff] 
                hover:font-bold transition-all duration-300 cursor-default select-none shadow-lg"
            >
              {service.title}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="w-full bg-black py-10 border-t border-b border-white/5 overflow-hidden">
        <div className="flex items-center gap-16 md:gap-24 w-max animate-[scroll_20s_linear_infinite]">
          {duplicatedIcons.map((icon, idx) => (
            <div key={idx} className="text-6xl md:text-8xl text-neutral-800 hover:text-white transition-colors duration-300">
              {icon}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Services;