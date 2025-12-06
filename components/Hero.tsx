import React, { useState, useEffect } from "react";
import {
  Play,
  ArrowRight,
  LayoutDashboard,
  BarChart3,
  Zap,
  Target,
  FileText,
  Search,
  ChevronDown,
  MoreHorizontal,
  Globe,
  Settings,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/* --- Components --- */

const SidebarItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
      active
        ? "bg-white/10 text-white"
        : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"
    }`}
  >
    {icon}
    <span className="whitespace-nowrap">{label}</span>
  </div>
);

const KeywordItem = ({ label }) => (
  <div className="flex items-center gap-2 group cursor-pointer p-1">
    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-blue-500 transition-colors" />
    <span className="text-xs text-neutral-400 group-hover:text-white transition-colors truncate flex-1">
      {label}
    </span>
    <div className="opacity-0 group-hover:opacity-100 text-neutral-600 transition-opacity">
      <MoreHorizontal size={12} />
    </div>
  </div>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // State for Dynamic SVG Path
  const [chartPoints, setChartPoints] = useState("");

  // Handle Entrance Animation Only
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Static Chart Generation (Run once, no interval)
  useEffect(() => {
    const generatePoints = () => {
      const points = [];
      // Create a specific nice looking curve instead of random
      const values = [50, 45, 60, 35, 55, 40, 50];
      for (let i = 0; i < values.length; i++) {
        const x = i * 50;
        const y = values[i];
        if (i === 0) {
          points.push(`${x} ${y}`);
        } else {
          points.push(`L ${x} ${y}`);
        }
      }
      return points.join(" ");
    };

    setChartPoints(generatePoints());
  }, []);

  return (
    <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex flex-col justify-start items-center bg-[#020617] font-jakarta">
      {/* --- MOVING GRILL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid Plane with CSS Animation */}
        <div
          className="absolute inset-0 -top-[50%] h-[200%] w-full bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            transform: "perspective(500px) rotateX(60deg) scale(2.5)",
            animation: "gridMove 3s linear infinite",
          }}
        />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            
            .font-jakarta {
              font-family: 'Plus Jakarta Sans', sans-serif;
            }

            @keyframes gridMove {
              0% { background-position: 0px 0px; }
              100% { background-position: 0px 100px; }
            }
            `}
        </style>

        {/* Horizon Fade Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent h-[60%] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent h-[30%] bottom-0 z-10 pointer-events-none"></div>

        {/* Central Blue Glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mb-16 mt-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-blue-500/30 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-blue-200 tracking-wider uppercase">
            Now Accepting New Clients
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight text-white drop-shadow-2xl transition-all duration-1000 delay-100 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Agency That Scales <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-600 to-blue-200 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            Evoc Labs
            <style jsx>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                100% {
                  background-position: 200% 50%;
                }
              }
            `}</style>
          </span>
        </h1>

        {/* Subhead */}
        <p
          className={`text-sm md:text-base text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium transition-all duration-1000 delay-200 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We help e-commerce brands fix bottlenecks and scale smoothly with
          performance-driven systems and zero upfront risk.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-5 transition-all duration-1000 delay-300 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] group">
            Start Project{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- Normal Dashboard Visual (No 3D Tilt/Scroll fade) --- */}
      <div className="w-full max-w-6xl mx-auto px-4 relative z-20">
        <div
          className={`relative transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Top Glow behind dashboard */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/20 blur-[80px] -z-10" />

          {/* Dashboard Frame */}
          <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5 hover:ring-white/10 transition-all">
            {/* Window Controls & Header */}
            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="hidden md:flex items-center gap-2 bg-black/40 px-3 py-1 rounded-md border border-white/5 min-w-[200px] md:min-w-[300px]">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">
                  www.evoclabs.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Search size={14} className="text-neutral-600" />
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                  <Zap size={12} className="text-white fill-current" />
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
              {/* Sidebar */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-black/20 p-4 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible scrollbar-hide">
                <div className="hidden md:flex items-center gap-3 px-3 py-2 mb-6 text-neutral-200">
                  <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                    <LayoutDashboard size={12} />
                  </div>
                  <span className="text-sm font-medium">Site Overview</span>
                </div>

                <div className="flex md:flex-col gap-1 min-w-max">
                  <SidebarItem
                    icon={<BarChart3 size={16} />}
                    label="Analytics"
                    active
                  />
                  <SidebarItem
                    icon={<Target size={16} />}
                    label="Smart Keywords"
                  />
                  <SidebarItem icon={<Globe size={16} />} label="Goals" />
                  <SidebarItem
                    icon={<FileText size={16} />}
                    label="Content Eval"
                  />
                  <SidebarItem
                    icon={<Settings size={16} />}
                    label="Backlink Audit"
                  />
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-transparent to-black/40 overflow-hidden relative">
                {/* Header Area */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-sm text-neutral-400 mb-1">Overview</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        Jun 24 - Today
                      </span>
                      <ChevronDown size={14} className="text-neutral-500" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded bg-white/5 border border-white/10 text-neutral-400 hover:text-white">
                      <Settings size={14} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto md:h-[calc(100%-4rem)]">
                  {/* Main Chart Area */}
                  <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Big Chart Card */}
                    <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 relative overflow-hidden group min-h-[300px]">
                      <div className="flex justify-between items-start mb-8 relative z-10">
                        <div>
                          <p className="text-xs text-neutral-500 mb-1">
                            Visibility
                          </p>
                          <div className="flex items-baseline gap-2">
                            <h2 className="text-3xl font-bold text-white">
                              10.15%
                            </h2>
                            <span className="text-emerald-400 text-xs font-medium flex items-center">
                              +2.4% <TrendingUp size={12} className="ml-1" />
                            </span>
                          </div>
                        </div>
                        <MoreHorizontal
                          size={16}
                          className="text-neutral-600"
                        />
                      </div>

                      {/* SVG Chart - STATIC (No animation) */}
                      <div className="absolute bottom-0 left-0 right-0 h-48 w-full z-0">
                        {chartPoints && (
                          <svg
                            className="w-full h-full overflow-visible"
                            preserveAspectRatio="none"
                            viewBox="0 0 300 100"
                          >
                            <defs>
                              <linearGradient
                                id="chartGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0.3"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#3b82f6"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d={`M ${chartPoints} L 300 100 L 0 100 Z`}
                              fill="url(#chartGradient)"
                            />
                            <path
                              d={`M ${chartPoints}`}
                              fill="none"
                              stroke="#60a5fa"
                              strokeWidth="2"
                              className="drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Stats Column */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                      <p className="text-xs text-neutral-500 mb-1">
                        Organic Keywords
                      </p>
                      <div className="flex items-baseline gap-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">35.6K</h2>
                        <span className="text-rose-400 text-xs font-medium flex items-center">
                          -1.2% <TrendingDown size={12} className="ml-1" />
                        </span>
                      </div>
                      <div className="space-y-3">
                        <KeywordItem label="online payment processing" />
                        <KeywordItem label="secure transactions" />
                        <KeywordItem label="transaction platform" />
                        <KeywordItem label="shopping payments" />
                      </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex-1 min-h-[150px]">
                      <p className="text-xs text-neutral-500 mb-2">
                        Traffic Sources
                      </p>
                      <div className="flex items-end gap-2 h-full pb-2">
                        <div className="w-1/4 bg-blue-500/20 h-[60%] rounded-t-sm relative group cursor-pointer">
                          <div className="absolute inset-x-0 bottom-0 bg-blue-500 h-1 group-hover:h-full transition-all duration-300 opacity-50" />
                        </div>
                        <div className="w-1/4 bg-blue-500/20 h-[80%] rounded-t-sm relative group cursor-pointer">
                          <div className="absolute inset-x-0 bottom-0 bg-blue-500 h-1 group-hover:h-full transition-all duration-300 opacity-50" />
                        </div>
                        <div className="w-1/4 bg-blue-500/20 h-[40%] rounded-t-sm relative group cursor-pointer">
                          <div className="absolute inset-x-0 bottom-0 bg-blue-500 h-1 group-hover:h-full transition-all duration-300 opacity-50" />
                        </div>
                        <div className="w-1/4 bg-blue-500/20 h-[90%] rounded-t-sm relative group cursor-pointer">
                          <div className="absolute inset-x-0 bottom-0 bg-blue-500 h-1 group-hover:h-full transition-all duration-300 opacity-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="bg-[#020617] text-white">
      <Hero />
    </div>
  );
};

export default App;
