import React from 'react';
import { NAV_LINKS, SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 border-t border-white/10 backdrop-blur-xl px-6 md:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        
        {/* Brand */}
        <div className="max-w-xs">
          <h3 className="font-body text-2xl font-bold text-white mb-4">Mocgraph Studio</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Freelance Graphic Designer specializing in branding, typography, and creative digital visuals.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Menu</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Social</h4>
          <ul className="space-y-3">
            {SOCIALS.map(social => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300">
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Mocgraph. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;