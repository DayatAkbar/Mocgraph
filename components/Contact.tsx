import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="font-body text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          Get In Touch.
        </h2>
        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          If you need creative design for brands, products, or social media visuals — 
          contact me and let's start collaborating.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="mailto:hello@mocgraph.com"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0400ff] hover:border-transparent transition-all duration-300 group"
          >
            <FaEnvelope className="text-xl" />
            <span className="font-medium">Send Email</span>
          </a>
          <a 
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-transparent transition-all duration-300 group"
          >
            <FaWhatsapp className="text-xl" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;