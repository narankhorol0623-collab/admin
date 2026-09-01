"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { kpiStats } from "@/lib/data";
import type { KpiStat } from "@/lib/types";

const accentClasses: Record<
  KpiStat["accent"],
  { text: string; bg: string; glow: string }
> = {
  primary: {
    text: "text-primary-container",
    bg: "bg-primary-container/10",
    glow: "bg-primary/5 group-hover:bg-primary/10",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary/10",
    glow: "bg-secondary/5 group-hover:bg-secondary/10",
  },
  primaryFixed: {
    text: "text-primary-fixed",
    bg: "bg-primary-fixed/10",
    glow: "bg-primary-fixed/5 group-hover:bg-primary-fixed/10",
  },
  tertiary: {
    text: "text-tertiary-fixed-dim",
    bg: "bg-tertiary-fixed-dim/10",
    glow: "bg-tertiary/5 group-hover:bg-tertiary/10",
  },
};

function AnimatedNumber({ stat }: { stat: KpiStat }) {
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    motionValue.set(stat.value);
    const unsubscribe = spring.on("change", (latest) => setDisplay(latest));
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decimals = stat.decimals ?? 0;
  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-US");

  return (
    <span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiStats.map((stat, index) => {
        const accent = accentClasses[stat.accent];
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="glass-card p-5 flex flex-col relative overflow-hidden group"
          >
            <div
              className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl transition-colors ${accent.glow}`}
            />
            <div className="flex justify-between items-start mb-2">
              <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">
                {stat.label}
              </span>
              <span
                className={`material-symbols-outlined ${accent.text} ${accent.bg} p-1.5 rounded-lg text-sm`}
              >
                {stat.icon}
              </span>
            </div>

            <div className="flex items-end gap-3 mt-1">
              <AnimatedNumber stat={stat} />
            </div>

            <div
              className={`flex items-center gap-1 mt-3 font-label-sm text-label-sm ${
                stat.trend === "up"
                  ? "text-primary-container"
                  : "text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {stat.trend === "up" ? "trending_up" : "horizontal_rule"}
              </span>
              <span>{stat.trendLabel}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
