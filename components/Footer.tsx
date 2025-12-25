import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import EvocLogo from "../assets/EvocLab_Logo.png";

interface FooterProps {
  onCareersClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCareersClick }) => {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                <img
                  src={EvocLogo}
                  alt="Evoc Labs Logo"
                  className="w-5 h-5 opacity-80"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-text-main">
                Evoc Labs
              </span>
            </div>
            <p className="text-text-muted max-w-sm mb-6 leading-relaxed">
              Data-driven performance marketing for brands ready to scale. No
              fluff, just profit.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/evoc.labz?igsh=N282c25vNGc5NG1k"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-pointer text-text-secondary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/evoc-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-pointer text-text-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/evoclabz?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-pointer text-text-secondary"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Meta Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onCareersClick}
                  className="hover:text-primary transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2025 Evoc Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
