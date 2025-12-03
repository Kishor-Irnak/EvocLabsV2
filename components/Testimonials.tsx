import React from 'react';
import { Briefcase } from 'lucide-react';

const partners = [
  { name: "Meta Business Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Google Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Shopify Experts", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" }
];

const clients = [
    "Acme Corp", "Nebula", "Velocity", "Turing", "Orbit", "Flux", "Vertex", "Zenith"
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 bg-slate-950">
      {/* Top Fade Gradient to blend with Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-slate-950 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Official Partners */}
        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">Official Business Partners</h3>
        <div className="flex flex-wrap justify-center gap-12 mb-24 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((p, i) => (
             <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 w-40 h-20 flex items-center justify-center hover:bg-white/10 hover:border-white/10 transition-all">
                <img src={p.logo} alt={p.name} className="h-8 w-auto invert" />
             </div>
          ))}
        </div>

        {/* Client Wall */}
        <h3 className="text-2xl font-display font-bold mb-12">Clients We Have Worked With</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, i) => (
                <div key={i} className="group h-24 bg-slate-900/50 border border-white/5 rounded-lg flex items-center justify-center hover:bg-brand-900/20 hover:border-brand-500/30 transition-all cursor-default">
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-slate-600 group-hover:text-brand-400 transition-colors" />
                        <span className="font-display font-semibold text-slate-400 group-hover:text-white transition-colors">{client}</span>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;