import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 100; // Height of navbar + some padding
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#process' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Rocket className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Evoc Labs</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <div className="bg-slate-900/50 border border-white/5 rounded-full px-2 py-1 flex items-center backdrop-blur-md">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-white text-slate-950 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-300 py-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-brand-600 text-white w-full py-3 rounded-lg font-medium"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;