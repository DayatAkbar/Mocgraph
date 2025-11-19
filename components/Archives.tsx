import React, { useState } from 'react';
import { ARCHIVES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Archives: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = ARCHIVES.findIndex(item => item.id === selectedId);
    const nextIndex = (currentIndex + 1) % ARCHIVES.length;
    setSelectedId(ARCHIVES[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const currentIndex = ARCHIVES.findIndex(item => item.id === selectedId);
    const prevIndex = (currentIndex - 1 + ARCHIVES.length) % ARCHIVES.length;
    setSelectedId(ARCHIVES[prevIndex].id);
  };

  return (
    <section id="archives" className="py-32 px-6 md:px-24 min-h-screen flex flex-col items-center bg-black">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-body font-bold mb-16 tracking-tight"
      >
        Archives
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {ARCHIVES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedId(item.id)}
            className="aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-white/5 backdrop-blur-md"
          >
            <img 
              src={item.image} 
              alt={`Archive ${item.id}`} 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-8 z-50 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={selectedId}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={ARCHIVES.find(item => item.id === selectedId)?.image}
              alt="Selected"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10 relative z-10"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-8 z-50 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Archives;