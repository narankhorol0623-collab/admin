"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/data";
import type { Milestone, MilestoneState } from "@/lib/types";

const stateBadge: Record<MilestoneState, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-primary-container/10 text-primary-container border-primary-container/30" },
  planning: { label: "Planning", className: "bg-surface-variant text-on-surface-variant border-outline-variant" },
  hold: { label: "On Hold", className: "bg-surface-variant text-on-surface-variant border-outline-variant" },
};

function DotIndicator({ state }: { state: MilestoneState }) {
  if (state === "active") {
    return (
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-container">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,245,212,0.8)]"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }
  return (
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
      <div className="w-2 h-2 rounded-full bg-on-surface-variant" />
    </div>
  );
}

function MilestoneRow({ milestone, index }: { milestone: Milestone; index: number }) {
  const badge = stateBadge[milestone.state];
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant last:before:hidden"
    >
      <DotIndicator state={milestone.state} />
      <div className="mb-1">
        <span className="font-label-md text-label-md font-bold text-on-surface">{milestone.projectName}</span>
        <span className={`ml-2 font-label-sm text-label-sm px-2 py-0.5 rounded border ${badge.className}`}>
          {badge.label}
        </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-2">{milestone.stage}</p>

      {milestone.progress !== null && (
        <>
          <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                milestone.state === "active"
                  ? "bg-primary-container shadow-[0_0_8px_rgba(0,245,212,0.5)]"
                  : "bg-on-surface-variant"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${milestone.progress}%` }}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <span
              className={`font-label-sm text-label-sm ${
                milestone.state === "active" ? "text-primary-container" : "text-on-surface-variant"
              }`}
            >
              {milestone.progress}%
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function MilestoneTracker() {
  return (
    <div className="glass-card p-5 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Milestone Tracker</h2>
        <button className="text-on-surface-variant hover:text-primary-container transition-colors">
          <span className="material-symbols-outlined text-sm">more_horiz</span>
        </button>
      </div>
      <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-2">
        {milestones.map((milestone, index) => (
          <MilestoneRow key={milestone.id} milestone={milestone} index={index} />
        ))}
      </div>
    </div>
  );
}
