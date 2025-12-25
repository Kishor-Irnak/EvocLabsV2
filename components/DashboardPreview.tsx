import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
// @ts-ignore
import logo from "../assets/evoclabs_mini_logo.png";

const data = [
  { name: "Jan", value: 3000, profit: 1400 },
  { name: "Feb", value: 4500, profit: 2100 },
  { name: "Mar", value: 3800, profit: 1800 },
  { name: "Apr", value: 6500, profit: 3200 },
  { name: "May", value: 5200, profit: 2600 },
  { name: "Jun", value: 8400, profit: 4500 },
  { name: "Jul", value: 7200, profit: 3800 },
  { name: "Aug", value: 9600, profit: 5100 },
  { name: "Sep", value: 11000, profit: 6200 },
];

const SidebarItem = ({
  icon: Icon,
  active = false,
}: {
  icon: any;
  active?: boolean;
}) => (
  <div
    className={`p-2 rounded-lg transition-colors cursor-pointer ${
      active
        ? "bg-primary/10 text-primary"
        : "text-text-secondary hover:bg-white/5 hover:text-text-main"
    }`}
  >
    <Icon size={16} className="md:w-5 md:h-5" />
  </div>
);

const StatCard = ({
  title,
  value,
  change,
  isPositive,
}: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <div className="p-3 md:p-4 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-border transition-colors group">
    <div className="flex justify-between items-start mb-1 md:mb-2">
      <span className="text-[10px] md:text-sm text-text-muted font-medium truncate">
        {title}
      </span>
      <button className="text-text-muted hover:text-text-main hidden md:block">
        <MoreHorizontal size={16} />
      </button>
    </div>
    <div>
      <div className="text-sm md:text-2xl font-bold text-text-main tracking-tight mb-0.5 md:mb-1 transition-colors">
        {value}
      </div>
      <div
        className={`flex items-center gap-1 text-[9px] md:text-xs font-medium ${
          isPositive ? "text-emerald-500" : "text-rose-500"
        }`}
      >
        {isPositive ? (
          <ArrowUpRight size={10} className="md:hidden" />
        ) : (
          <ArrowDownRight size={10} className="md:hidden" />
        )}
        {isPositive ? (
          <ArrowUpRight size={14} className="hidden md:block" />
        ) : (
          <ArrowDownRight size={14} className="hidden md:block" />
        )}
        {change}
      </div>
    </div>
  </div>
);

const DashboardPreview: React.FC = () => {
  return (
    // Removed min-h-[500px] and used aspect ratio for mobile compact view
    <div className="w-full h-auto aspect-[16/12] md:aspect-[16/10] bg-[#0A0A0A] relative flex overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      {/* Sidebar - Minimized & Scaled down on mobile */}
      <div className="w-10 md:w-16 border-r border-white/5 flex flex-col items-center py-4 md:py-6 gap-2 md:gap-4 bg-[#0A0A0A] z-20">
        <div className="w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-4 flex items-center justify-center overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <SidebarItem icon={Home} />
        <SidebarItem icon={BarChart3} active />
        <SidebarItem icon={Users} />
        <SidebarItem icon={Settings} />
        <div className="mt-auto">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#050505] relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

        {/* Header */}
        <div className="h-10 md:h-16 border-b border-white/5 flex items-center justify-between px-3 md:px-6 z-10 bg-[#050505]/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[10px] md:text-sm text-text-secondary">
            <span className="text-text-main font-medium">Analytics</span>
            <span className="text-white/20">/</span>
            <span>Overview</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-text-muted hover:border-white/10 transition-colors cursor-text w-48">
              <Search size={14} />
              <span>Search...</span>
            </div>
            <Bell
              size={14}
              className="text-text-secondary hover:text-text-main cursor-pointer md:w-[18px] md:h-[18px]"
            />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-3 md:p-8 space-y-3 md:space-y-6 overflow-y-auto no-scrollbar z-10">
          {/* Stats Row - Forces 3 columns on mobile too */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <StatCard
              title="Total Revenue"
              value="₹128k"
              change="+12%"
              isPositive={true}
            />
            <StatCard
              title="Active Users"
              value="24.5k"
              change="+5%"
              isPositive={true}
            />
            <StatCard
              title="Bounce Rate"
              value="42%"
              change="-2%"
              isPositive={false}
            />
          </div>

          {/* Main Chart Area */}
          <div className="flex-1 rounded-xl border border-white/5 bg-[#0A0A0A] p-3 md:p-6 relative overflow-hidden group">
            <div className="flex justify-between items-center mb-3 md:mb-6">
              <div>
                <h3 className="text-text-main font-semibold text-xs md:text-sm">
                  Revenue Growth
                </h3>
                <p className="text-text-muted text-[10px] md:text-xs mt-0.5 md:mt-1">
                  Monthly MRR
                </p>
              </div>
              <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5">
                <button className="px-2 py-0.5 md:px-3 md:py-1 rounded-md text-[9px] md:text-xs font-medium bg-white/10 text-white shadow-sm">
                  12M
                </button>
                <button className="px-2 py-0.5 md:px-3 md:py-1 rounded-md text-[9px] md:text-xs font-medium text-text-muted hover:text-text-main">
                  30D
                </button>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="w-full h-[150px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#ffffff10"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52525b", fontSize: 10 }}
                    dy={10}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52525b", fontSize: 10 }}
                    width={30}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0A0A0A",
                      borderColor: "#27272a",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                      fontSize: "12px",
                    }}
                    itemStyle={{ color: "#fafafa" }}
                    labelStyle={{ color: "#a1a1aa", marginBottom: "4px" }}
                    cursor={{
                      stroke: "#3b82f6",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    animationDuration={2000}
                    activeDot={{
                      r: 4,
                      fill: "#3b82f6",
                      stroke: "#0A0A0A",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
