import React from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
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
  MoreHorizontal
} from "lucide-react";

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

const SidebarItem = ({ icon: Icon, active = false }: { icon: any; active?: boolean }) => (
  <div className={`p-2 rounded-lg transition-colors cursor-pointer ${active ? "bg-primary/10 text-primary" : "text-text-secondary hover:bg-white/5 hover:text-text-main"}`}>
    <Icon size={20} />
  </div>
);

const StatCard = ({ title, value, change, isPositive }: { title: string; value: string; change: string; isPositive: boolean }) => (
  <div className="p-4 rounded-xl border border-border/40 bg-surface flex flex-col justify-between hover:border-border/80 transition-colors group">
    <div className="flex justify-between items-start mb-2">
      <span className="text-sm text-text-muted font-medium">{title}</span>
      <button className="text-text-muted hover:text-text-main">
        <MoreHorizontal size={16} />
      </button>
    </div>
    <div>
      <div className="text-2xl font-bold text-text-main tracking-tight mb-1 group-hover:text-primary transition-colors">{value}</div>
      <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change} assigned
      </div>
    </div>
  </div>
);

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-auto min-h-[500px] md:min-h-0 md:h-auto md:aspect-[16/10] bg-[#0A0A0A] relative flex overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      {/* Sidebar - Minimized */}
      <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-4 bg-[#0A0A0A] z-20">
        <div className="w-8 h-8 rounded-lg bg-primary mb-4 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
        </div>
        <SidebarItem icon={Home} />
        <SidebarItem icon={BarChart3} active />
        <SidebarItem icon={Users} />
        <SidebarItem icon={Settings} />
        <div className="mt-auto">
             <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#050505] relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

        {/* Header */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 z-10 bg-[#050505]/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="text-text-main font-medium">Analytics</span>
                <span className="text-white/20">/</span>
                <span>Overview</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-text-muted hover:border-white/10 transition-colors cursor-text w-48">
                    <Search size={14} />
                    <span>Search...</span>
                </div>
                <Bell size={18} className="text-text-secondary hover:text-text-main cursor-pointer" />
            </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto no-scrollbar z-10">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard 
                    title="Total Revenue" 
                    value="$128,450.00" 
                    change="+12.5%" 
                    isPositive={true} 
                />
                <StatCard 
                    title="Active Users" 
                    value="24.5k" 
                    change="+5.2%" 
                    isPositive={true} 
                />
                <StatCard 
                    title="Bounce Rate" 
                    value="42.3%" 
                    change="-2.1%" 
                    isPositive={false} 
                />
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 rounded-xl border border-white/5 bg-[#0A0A0A] p-6 relative overflow-hidden group">
                <div className="flex justify-between items-center mb-6">
                     <div>
                         <h3 className="text-text-main font-semibold text-sm">Revenue Growth</h3>
                         <p className="text-text-muted text-xs mt-1">Monthly recurring revenue (MRR)</p>
                     </div>
                     <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5">
                         <button className="px-3 py-1 rounded-md text-xs font-medium bg-white/10 text-white shadow-sm">12M</button>
                         <button className="px-3 py-1 rounded-md text-xs font-medium text-text-muted hover:text-text-main">30D</button>
                         <button className="px-3 py-1 rounded-md text-xs font-medium text-text-muted hover:text-text-main">7D</button>
                     </div>
                </div>
                
                {/* Recharts Area Chart */}
                <div className="w-full h-[250px] md:h-[300px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#52525b', fontSize: 11 }} 
                                dy={10} 
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#52525b', fontSize: 11 }} 
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#0A0A0A', 
                                    borderColor: '#27272a', 
                                    borderRadius: '8px', 
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                    fontSize: '12px'
                                }}
                                itemStyle={{ color: '#fafafa' }}
                                labelStyle={{ color: '#a1a1aa', marginBottom: '4px' }}
                                cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#3b82f6" 
                                strokeWidth={2} 
                                fillOpacity={1} 
                                fill="url(#colorValue)" 
                                animationDuration={2000}
                                activeDot={{ r: 4, fill: '#3b82f6', stroke: '#0A0A0A', strokeWidth: 2 }}
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
