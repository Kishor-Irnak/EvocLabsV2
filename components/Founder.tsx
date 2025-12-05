import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Founder: React.FC = () => {
  return (
    <section
      id="founder"
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Background glow matching Services */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-16 text-center">
          Leadership
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-6 md:p-12 bg-[#0a0a0a]/60 border border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group">
              {/* Image Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                <img
                  src="https://picsum.photos/600/800?grayscale"
                  alt="Founder"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 text-white">
                The Founder
              </h3>
              <p className="text-brand-400 text-lg mb-6">
                Head of Growth Strategy
              </p>

              <div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
                <p>
                  "Marketing isn't about guessing; it's about aligning your
                  product with a performance culture. At Evoc Labs, we treat
                  your budget like our own capital."
                </p>
                <p>
                  With over 4 years of hands-on experience managing ₹2Cr+ in ad
                  spend, we've identified the patterns that separate scaling
                  brands from stagnant ones. Our approach combines aggressive
                  testing with conservative financial modeling.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-slate-900 hover:bg-[#0f0f0f] text-slate-400 hover:text-brand-400 transition-all border border-white/5 hover:border-brand-500/30 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-slate-900 hover:bg-[#0f0f0f] text-slate-400 hover:text-brand-400 transition-all border border-white/5 hover:border-brand-500/30 hover:scale-105"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <img
                  src="https://picsum.photos/200/80"
                  alt="Signature"
                  className="h-12 w-auto invert opacity-50"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
