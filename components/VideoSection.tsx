import React from "react";
import { motion } from "framer-motion";

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            See Our <span className="text-brand-500">Process</span> in Action
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch how we combine data intelligence with creative strategy to
            build profit engines for our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-slate-900 group"
        >
          {/* YouTube Embed */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Gr8G_ldltDE"
            title="Evoc Labs Process"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Overlay Border */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none ring-1 ring-white/5 group-hover:border-brand-500/30 transition-colors duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
