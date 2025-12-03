import React from 'react';
import { Rocket, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">Evoc Labs</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Data-driven performance marketing for brands ready to scale. No fluff, just profit.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 hover:border-brand-500 hover:text-brand-500 transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 hover:border-brand-500 hover:text-brand-500 transition-colors cursor-pointer">LI</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Meta Ads</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 Evoc Labs. All rights reserved.</p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;