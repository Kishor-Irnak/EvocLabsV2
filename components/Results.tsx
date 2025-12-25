import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const data = [
  { name: "Jan", prev: 2000, current: 2400 },
  { name: "Feb", prev: 2500, current: 3600 },
  { name: "Mar", prev: 3000, current: 5200 },
  { name: "Apr", prev: 3200, current: 6800 },
  { name: "May", prev: 4000, current: 8900 },
  { name: "Jun", prev: 4800, current: 11200 },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 relative bg-background ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Chart Section */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pl-0 md:pl-4"
            >
              <div className="relative p-6 rounded-xl  bg-surface">
                <div className="flex justify-between items-center mb-8 px-2">
                  <div>
                    <h3 className="text-text-secondary text-xs uppercase tracking-widest font-medium mb-1">
                      ROAS Growth
                    </h3>
                    <p className="text-3xl font-semibold text-text-main">
                      4.6X{" "}
                      <span className="text-base font-normal text-text-muted ml-1">
                        average
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-border"></div>
                      <span className="text-text-muted">Avg</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-primary-hover">Evoc</span>
                    </div>
                  </div>
                </div>

                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient
                          id="colorCurrent"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3B82F6"
                            stopOpacity={0.2}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3B82F6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#27272A"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#71717A"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis
                        stroke="#71717A"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0A0A0A",
                          borderColor: "#27272A",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                          color: "#fff",
                        }}
                        itemStyle={{ color: "#fff" }}
                        cursor={{ stroke: "#3B82F6", strokeWidth: 1 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="prev"
                        stroke="#52525B"
                        fill="transparent"
                        strokeDasharray="4 4"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="current"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorCurrent)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <BlurText
              text="Visual Reports & Real-Time Insights"
              className="text-3xl md:text-5xl font-semibold mb-6 text-text-main leading-tight"
            />
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              We don't send you confusing spreadsheets. You get access to a live
              dashboard showing exactly where every rupee is going and what it's
              bringing back.
            </p>

            <ul className="space-y-4">
              {[
                "Automated daily reporting",
                "Multi-channel attribution",
                "Creative performance breakdowns",
                "Lifetime Value (LTV) tracking",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  className="flex items-center gap-3 text-text-main"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
