
import React from 'react';
import { Target, Search, ShoppingBag, BarChart3, Users, Zap } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion, Variants } from 'framer-motion';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Performance Marketing',
    description: 'Data-led media buying across major platforms to drive consistent ROAS.',
    icon: Target
  },
  {
    id: '2',
    title: 'Meta & Google Ads',
    description: 'Expert campaign management optimized for lower CAC and higher conversions.',
    icon: Search
  },
  {
    id: '3',
    title: 'E-com Development',
    description: 'High-conversion Shopify & Woo stores built for speed and sales.',
    icon: ShoppingBag
  },
  {
    id: '4',
    title: 'SEO & Organic Growth',
    description: 'Dominate search results with technical SEO and content strategy.',
    icon: BarChart3
  },
  {
    id: '5',
    title: 'Lead Generation',
    description: 'High-intent B2B and B2C lead pipelines that fuel your sales team.',
    icon: Users
  },
  {
    id: '6',
    title: 'UGC & Content',
    description: 'Authentic creative assets that resonate and convert cold traffic.',
    icon: Zap
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* Background glow for ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-sm font-medium text-brand-400 uppercase tracking-widest mb-3"
           >
             Our Expertise
           </motion.h2>
           <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl md:text-5xl font-display font-bold"
           >
             Everything you need to <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Scale</span>
           </motion.h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div variants={item} key={service.id} className="group glass-card p-8 rounded-2xl bg-[#0a0a0a]/60 hover:bg-[#0f0f0f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:border-brand-500/30">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-500/30">
                <service.icon className="w-6 h-6 text-brand-400 group-hover:text-brand-300" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-brand-200 transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
