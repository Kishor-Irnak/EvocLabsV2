import React from "react";
// Importing icons from react-icons (Simple Icons and FontAwesome)
import { SiGoogleads, SiMeta, SiShopify, SiPhonepe } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6"; // Fallback icon for F-SHIP

const LogoTicker: React.FC = () => {
  // Define partners with their generic name, specific icon component, and brand color
  const partners = [
    { name: "F-SHIP", icon: FaTruckFast, color: "text-orange-500" },
    { name: "Google Ads", icon: SiGoogleads, color: "text-yellow-400" },
    { name: "Meta Ads", icon: SiMeta, color: "text-blue-500" },
    { name: "Shopify", icon: SiShopify, color: "text-green-500" },
    { name: "PhonePe", icon: SiPhonepe, color: "text-purple-500" },
  ];

  const MarqueeRow = ({
    isColored = false,
    className = "",
  }: {
    isColored?: boolean;
    className?: string;
  }) => (
    <div
      className={`animate-marquee whitespace-nowrap flex items-center ${className}`}
    >
      {Array(8)
        .fill(partners)
        .flat()
        .map((partner, index) => (
          <div
            key={index}
            className={`flex-shrink-0 px-8 md:px-16 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-colors duration-300 ${
              isColored ? partner.color : "text-slate-700"
            }`}
          >
            <partner.icon className="text-4xl md:text-5xl" />
            <span className="sr-only text-xs font-semibold tracking-wide">
              {partner.name}
            </span>
          </div>
        ))}
    </div>
  );

  return (
    <div className="py-10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-9 mb-8 text-center">
        <p className="text-sm text-slate-500 font-medium tracking-[0.2em] uppercase">
          Official Business Partners
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Layer 1: Background (Grayscale/Slate) */}
        <div className="relative z-0 select-none pointer-events-none">
          <MarqueeRow isColored={false} />
        </div>

        {/* Layer 2: Foreground (Colorful + Masked) 
            - Positioned absolutely to overlay exactly on top of Layer 1.
            - Uses mask-image to only show the center portion.
        */}
        <div
          className="absolute inset-0 z-10 select-none pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)",
          }}
        >
          <MarqueeRow isColored={true} />
        </div>

        {/* Side Gradients for fading out edges entirely */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
