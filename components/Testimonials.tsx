import React, { useRef } from "react";
import { Briefcase, Hexagon, Triangle, Circle, Square } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const clients = [
  { name: "Acme Corp", icon: Briefcase },
  { name: "Nebula", icon: Hexagon },
  { name: "Velocity", icon: Triangle },
  { name: "Turing", icon: Circle },
  { name: "Orbit", icon: Square },
  { name: "Flux", icon: Hexagon },
  { name: "Vertex", icon: Triangle },
  { name: "Zenith", icon: Briefcase },
  { name: "Pinnacle", icon: Circle },
  { name: "Apex", icon: Square },
];

// 4 sets for smoother seamless loop
const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const LogoStrip = ({
  baseVelocity = 100,
  className = "",
}: {
  baseVelocity: number;
  className?: string;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrap at -25% (since we have 4 sets, one set is 25% of width)
  // We move FROM 0 TO -25% then wrap back to 0
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Apply scroll velocity (make it faster when scrolling)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`flex relative overflow-hidden ${className}`}>
      <motion.div className="flex gap-8 flex-nowrap" style={{ x }}>
        {duplicatedClients.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 py-4 bg-surface/50  rounded-xl backdrop-blur-sm whitespace-nowrap min-w-[200px]"
          >
            <client.icon className="w-5 h-5 text-primary opacity-80" />
            <span className="font-semibold text-text-main text-lg tracking-tight">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-16">
        <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">
          Brands we work with
        </p>
      </div>

      {/* 3D Container */}
      <div className="relative w-full max-w-[120vw] -rotate-3 skew-y-3 scale-110 opacity-80 hover:opacity-100 transition-opacity duration-500">
        {/* Strip 1 - Left */}
        <LogoStrip baseVelocity={-2} className="mb-6 opacity-60" />

        {/* Strip 2 (Main) - Right */}
        <LogoStrip baseVelocity={2} className="mb-6 scale-110 z-10" />

        {/* Strip 3 - Left */}
        <LogoStrip baseVelocity={-2} className="opacity-60" />
      </div>
    </section>
  );
};

export default Testimonials;
