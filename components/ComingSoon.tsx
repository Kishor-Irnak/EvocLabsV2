import React from "react";
import {
  BarChart3,
  LineChart,
  PieChart,
  Package,
  Activity,
  ArrowLeft,
  Truck,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

interface ComingSoonProps {
  onBack: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 px-4 md:pt-40 md:pb-12 md:px-6 flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        <div className="flex justify-start md:absolute md:left-0 md:-top-20 w-full mb-8 md:mb-0">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        <p className="flex items-center justify-center gap-2 text-primary font-semibold tracking-wider uppercase mb-3 text-sm md:text-base">
          <Activity className="w-4 h-4" />
          Under Construction
        </p>

        <BlurText
          text="The Ultimate E-com Command Center."
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-text-main tracking-tight mb-4 md:mb-6 leading-tight"
        />

        <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed px-2">
          We are building a unified platform where you can track your{" "}
          <span className="text-text-main font-medium">Store Performance</span>,{" "}
          <span className="text-text-main font-medium">Product Sales</span>,{" "}
          <span className="text-text-main font-medium">Ad ROI</span>, and{" "}
          <span className="text-text-main font-medium">
            Logistics Analytics
          </span>{" "}
          in real-time.
        </p>

        {/* Dashboard Mockup Visual */}
        <div className="relative w-full max-w-3xl mx-auto md:aspect-[16/9] bg-surface border border-border rounded-xl shadow-2xl overflow-hidden group flex flex-col">
          {/* Header Bar */}
          <div className="h-10 md:h-12 border-b border-border bg-surfaceHighlight/50 flex items-center px-4 gap-2 flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="ml-4 h-1.5 md:h-2 w-24 md:w-32 bg-border/50 rounded-full" />
          </div>

          {/* Dashboard Grid */}
          <div className="p-4 md:p-6 grid grid-cols-12 gap-3 md:gap-4 flex-grow bg-background/50 overflow-y-auto md:overflow-visible">
            {/* Sidebar */}
            <div className="hidden md:block col-span-2 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-full bg-surface border border-border rounded-md animate-pulse opacity-40"
                />
              ))}
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-min">
              {/* Stat Cards */}
              <div className="col-span-1 p-3 md:p-4 bg-surface border border-border rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 text-primary opacity-20">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="h-1.5 md:h-2 w-16 bg-border rounded mb-3" />
                <div className="h-5 md:h-6 w-20 md:w-24 bg-text-main/20 rounded mb-2" />
                <div className="h-1.5 md:h-2 w-10 md:w-12 bg-green-500/50 rounded" />
              </div>

              <div className="col-span-1 p-3 md:p-4 bg-surface border border-border rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 text-blue-500 opacity-20">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="h-1.5 md:h-2 w-16 bg-border rounded mb-3" />
                <div className="h-5 md:h-6 w-20 md:w-24 bg-text-main/20 rounded mb-2" />
                <div className="h-1.5 md:h-2 w-10 md:w-12 bg-green-500/50 rounded" />
              </div>

              <div className="col-span-1 sm:col-span-2 md:col-span-1 p-3 md:p-4 bg-surface border border-border rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 text-orange-500 opacity-20">
                  <Truck className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="h-1.5 md:h-2 w-16 bg-border rounded mb-3" />
                <div className="h-5 md:h-6 w-20 md:w-24 bg-text-main/20 rounded mb-2" />
                <div className="h-1.5 md:h-2 w-10 md:w-12 bg-red-400/50 rounded" />
              </div>

              {/* Charts area */}
              <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 p-3 md:p-4 bg-surface border border-border rounded-lg flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-2 md:h-3 w-20 md:w-24 bg-border rounded" />
                  <BarChart3 className="w-3 h-3 md:w-4 md:h-4 text-text-muted" />
                </div>
                <div className="flex items-end gap-1.5 md:gap-2 h-24 md:h-32 mt-2 px-1 md:px-2">
                  {[40, 60, 45, 70, 50, 65, 80, 55, 75, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t hover:bg-primary/40 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Side Chart */}
              <div className="col-span-1 sm:col-span-1 md:col-span-1 row-span-2 p-3 md:p-4 bg-surface border border-border rounded-lg min-h-[140px] md:min-h-[160px] flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-2 md:h-3 w-12 md:w-16 bg-border rounded" />
                  <PieChart className="w-3 h-3 md:w-4 md:h-4 text-text-muted" />
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 md:border-8 border-surfaceHighlight border-t-primary border-r-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Overlay to indicate 'In Progress' */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center z-20">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-background border border-border p-4 md:p-6 rounded-2xl shadow-xl max-w-[280px] md:max-w-xs text-center mx-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                <Package className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-semibold text-text-main mb-1 text-sm md:text-base">
                Evoc OS
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Currently in private beta. Early access rolling out soon.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
