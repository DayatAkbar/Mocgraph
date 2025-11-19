import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const software = [
  { name: 'Photoshop', color: '#31A8FF', icon: 'Ps' },
  { name: 'Figma', color: '#A259FF', icon: 'Fi' },
  { name: 'Canva', color: '#00C4CC', icon: 'Ca' },
  { name: 'CapCut', color: '#ffffff', icon: 'Cc' }
];

const skills = ['Branding', 'Layouting', 'AI Creative', 'Logo', 'UI/UX', 'Web Design'];

const ProfilePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl hover:scale-110 hover:bg-white/20 transition-all duration-300 z-40 group"
      >
        <span className="text-2xl group-hover:animate-pulse">💡</span>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#161616]/80 backdrop-blur-[22px] backdrop-saturate-150 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Accent Bar */}
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#7c4dff] to-[#ff6ec7] rounded-full mb-8 shadow-[0_0_20px_rgba(124,77,255,0.3)]" />

              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
                
                {/* Left Column: Profile */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-40 h-40 rounded-full border-2 border-white/20 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/5">
                      <img src="https://picsum.photos/300/300?grayscale" alt="Avatar" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div>
                    <h2 className="font-body font-bold text-2xl text-white">MHD TAUFIK HIDAYAT</h2>
                    <p className="text-white/70 text-sm mt-1">Graphic Designer • AI Creative</p>
                  </div>

                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wide">
                    Founder / Designer
                  </div>

                  <div className="w-full pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold text-white/50 uppercase mb-3">Skills</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] hover:bg-white/10 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio & Details */}
                <div className="flex flex-col space-y-8">
                  <div>
                    <h3 className="text-xl font-bold font-display tracking-wide mb-4">Mocgraph Studio</h3>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <p className="text-white/80 leading-relaxed text-sm text-justify">
                        Hi, I'm Dayat, a <b className="text-white">Graphic Designer</b> evolving into AI-powered creativity. 
                        I'm the founder of Mocgraph Studio, where art, technology, and imagination combine to create vibrant visual experiences. 
                        Combining the human touch and artificial intelligence, I help brands and individuals stand out through intelligent and futuristic visual storytelling.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white/50 uppercase mb-3">Software Proficiency</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {software.map((sw) => (
                        <div key={sw.name} className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 group cursor-default">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mb-2"
                            style={{ backgroundColor: sw.name === 'CapCut' ? 'black' : '#001E36' }}
                          >
                            <span style={{ color: sw.color }}>{sw.icon}</span>
                          </div>
                          <span className="text-xs opacity-80">{sw.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white/50 uppercase mb-3">Experience</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-sm font-bold mb-1">Mocgraph Studio</div>
                        <div className="text-xs text-white/50 mb-2">2021 — Present</div>
                        <div className="text-xs opacity-80">Founder & Creative Director</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-sm font-bold mb-1">Freelance</div>
                        <div className="text-xs text-white/50 mb-2">2018 — 2020</div>
                        <div className="text-xs opacity-80">Graphic Designer</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfilePopup;