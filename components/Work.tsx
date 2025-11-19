import React from 'react';
import { WORKS } from '../constants';
import { motion } from 'framer-motion';

const Work: React.FC = () => {
  return (
    <div id="work" className="flex flex-col gap-0 bg-black">
      {WORKS.map((work, index) => (
        <section key={work.id} className="min-h-screen flex items-center justify-center py-20 px-6 md:px-24 relative border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 max-w-[1600px] w-full items-center">
            
            {/* Text Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
            >
              <h2 className="font-display text-5xl md:text-7xl leading-none tracking-tighter mb-6 uppercase">
                {work.title}
              </h2>
              <p className="text-white/60 text-lg font-body max-w-md mx-auto lg:mx-0">
                {work.description}
              </p>
            </motion.div>

            {/* Image Right */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[40vh] md:h-[60vh] bg-white/5 rounded-xl overflow-hidden relative group order-1 lg:order-2"
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

          </div>
        </section>
      ))}
    </div>
  );
};

export default Work;