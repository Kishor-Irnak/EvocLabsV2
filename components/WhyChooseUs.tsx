import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Strategy', value: 30 },
  { name: 'Creative', value: 25 },
  { name: 'Media Buying', value: 30 },
  { name: 'Analysis', value: 15 },
];

const COLORS = ['#8b5cf6', '#7c3aed', '#6d28d9', '#4c1d95']; // Violet Spectrum

const WhyChooseUs: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">
              Why brands choose <br />
              <span className="text-brand-500">Evoc Labs</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { title: "Regular updates with clear deadlines", desc: "Weekly sprints and daily Slack updates. You're never in the dark." },
                { title: "Custom plans that match your goals", desc: "No cookie-cutter packages. We build what your business stage needs." },
                { title: "Focused on outcomes you can measure", desc: "We track CPA, ROAS, and MER. Vanity metrics don't pay bills." },
                { title: "Creative ideas backed by data", desc: "Our design team works directly with media buyers to iterate winning ads." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-500/30 flex items-center justify-center text-brand-400 font-mono text-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual (Circular representation from wireframe) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            {/* Background Gradients */}
            <div className="absolute w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="w-full h-[400px] relative">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="block text-4xl font-bold text-white font-display">CIP</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Framework</span>
              </div>

               {/* Orbital dots decorations */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/5 animate-[spin_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_10px_#8b5cf6]"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;