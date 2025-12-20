import React from "react";
import { motion } from "framer-motion";

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-auto min-h-[600px] md:min-h-0 md:h-auto md:aspect-[16/9] bg-surface relative flex overflow-hidden rounded-xl border border-border">
      {/* Sidebar */}
      <div className="w-16 md:w-64 border-r border-border flex flex-col p-4 gap-6 bg-surfaceHighlight/30 backdrop-blur-sm hidden md:flex">
        <div className="w-32 h-6 bg-border/50 rounded-md animate-pulse" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-border/40" />
              <div className="w-24 h-3 bg-border/30 rounded" />
            </div>
          ))}
        </div>
        <div className="mt-auto">
             <div className="w-full h-10 bg-primary/10 rounded border border-primary/20" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-background/50">
        {/* Header */}
        <div className="h-16 border-b border-border flex items-center justify-between px-6 md:px-8">
            <div className="w-32 h-4 bg-border/40 rounded" />
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-border/50" />
            </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 md:p-8 space-y-6 overflow-hidden">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 md:h-32 rounded-xl border border-border bg-surface p-4 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-primary/10" />
                         <div>
                             <div className="w-16 h-3 bg-border/40 rounded mb-2" />
                             <div className="w-24 h-6 bg-text-main/80 rounded" />
                         </div>
                    </div>
                ))}
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 rounded-xl border border-border bg-surface p-6 min-h-[300px] relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                     <div className="w-48 h-5 bg-border/40 rounded" />
                     <div className="flex gap-2">
                         <div className="w-20 h-8 rounded bg-border/20" />
                         <div className="w-20 h-8 rounded bg-border/20" />
                     </div>
                </div>
                
                {/* SVG Line Chart */}
                <div className="w-full h-[60%] mt-8 relative">
                     <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        <line x1="0" y1="0%" x2="100%" y2="0%" stroke="var(--border)" strokeOpacity="0.5" strokeDasharray="4 4" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--border)" strokeOpacity="0.5" strokeDasharray="4 4" />
                        <line x1="0" y1="100%" x2="100%" y2="100%" stroke="var(--border)" strokeOpacity="0.5" strokeDasharray="4 4" />
                        
                        {/* Curve Path */}
                        <motion.path 
                           d="M0 150 C 100 150, 200 80, 400 100 C 600 120, 700 40, 900 60 L 900 200 L 0 200 Z"
                           fill="url(#gradient)"
                           initial={{ opacity: 0, pathLength: 0 }}
                           animate={{ opacity: 1, pathLength: 1 }}
                           transition={{ duration: 1.5, ease: "easeInOut" }}
                           className="opacity-20"
                        />
                         <motion.path 
                           d="M0 150 C 100 150, 200 80, 400 100 C 600 120, 700 40, 900 60"
                           fill="none"
                           stroke="var(--primary)"
                           strokeWidth="3"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3"/>
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                     </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
