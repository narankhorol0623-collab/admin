"use client";

import { motion } from "framer-motion";
import { leads } from "@/lib/data";
import type { Lead, LeadStage } from "@/lib/types";

const stageBadge: Record<LeadStage, string> = {
  Contacted: "bg-surface-variant text-on-surface",
  "Follow-up": "bg-error-container/20 border border-error-container/50 text-error",
  Closed: "bg-surface-variant text-on-surface-variant",
};

function LeadCard({ lead, index }: { lead: Lead; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      whileHover={{ x: 2 }}
      className={`p-3 rounded border border-outline-variant/50 bg-surface-container-low hover:border-[#1E2D50] hover:bg-[#1E2D50]/30 transition-all cursor-pointer ${
        lead.stage === "Closed" ? "opacity-75" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="font-label-md text-label-md font-bold text-on-surface">{lead.name}</span>
        {lead.isNew && (
          <motion.span
            className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_4px_rgba(0,245,212,0.8)]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-2">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">{lead.contactIcon}</span>
          {lead.contact}
        </span>
        <span>{lead.project}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-0.5 rounded text-[10px] font-label-sm ${stageBadge[lead.stage]}`}>
          {lead.stage}
        </span>
        <span className="text-[10px] text-on-surface-variant">{lead.timeAgo}</span>
      </div>
    </motion.div>
  );
}

export default function RecentLeads() {
  const newCount = leads.filter((lead) => lead.isNew).length;

  return (
    <div className="glass-card p-5 flex flex-col">
      <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">group</span>
          Recent Leads
        </h2>
        <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/30 rounded font-label-sm text-label-sm text-xs">
          New {newCount}
        </span>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar">
        {leads.map((lead, index) => (
          <LeadCard key={lead.id} lead={lead} index={index} />
        ))}
      </div>
    </div>
  );
}
