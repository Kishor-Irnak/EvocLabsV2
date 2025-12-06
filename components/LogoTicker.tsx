import React from "react";

const LogoTicker: React.FC = () => {
  // Using plain text for logos to avoid external SVG dependencies, styled to look like logos
  const logos = [
    "WHATSAPP",
    "SHOPIFY",
    "GOOGLE ADS",
    "META ADS",
    "FACEBOOK",
    "INSTAGRAM",
    "YOUTUBE",
  ];

  return (
    <div className="py-10 border-y border-white/5 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm text-slate-500 font-medium tracking-wider uppercase">
          OFFICIAL BUISNESS PARTNERS
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
          {/* Duplicated list for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-2xl font-bold text-slate-700 uppercase tracking-tighter hover:text-slate-500 transition-colors cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#05050A] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#05050A] to-transparent z-10" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
