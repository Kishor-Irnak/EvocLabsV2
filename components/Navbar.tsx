import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EvocLogo from "../assets/EvocLab_Logo.png";

interface NavbarProps {
  onCareersClick?: () => void;
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCareersClick, onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction and toggle visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#services" },
    { name: "Founder", href: "#founder" },
    { name: "Careers", href: "#", action: "careers" },
  ];

  const handleNavAction = (
    e: React.MouseEvent,
    link: { name: string; href: string; action?: string }
  ) => {
    if (link.action === "careers") {
      e.preventDefault();
      onCareersClick?.();
    } else {
      // For other links, ensure we go to home view
      onHomeClick?.();
      // standard href anchor navigation continues
    }
    handleLinkClick();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <img
              src={EvocLogo}
              alt="Evoc Labs Logo"
              className="w-8 h-8 opacity-90"
            />
          </div>
          <span className="font-semibold text-xl tracking-tight text-text-main">
            Evoc Labs
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-surface/50 border border-border rounded-full px-2 py-1 flex items-center backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavAction(e, link)}
                className="text-sm font-medium text-text-secondary hover:text-text-main px-4 py-2 rounded-full hover:bg-surfaceHighlight transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              onHomeClick?.();
            }}
            className="bg-text-main text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Log in
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-text-secondary hover:text-text-main transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavAction(e, link)}
                className="text-text-secondary py-2 text-lg font-medium border-b border-border last:border-0 hover:text-text-main"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                onHomeClick?.();
                handleLinkClick();
              }}
              className="bg-primary text-white w-full py-3 rounded-lg font-medium text-center hover:bg-primary-hover transition-colors"
            >
              Log in
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
