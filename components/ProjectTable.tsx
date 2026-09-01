"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project, ProjectStatus } from "@/lib/types";

type Filter = "Бүгд" | "Борлуулагдаж буй" | "Төлөвлөгдсөн";

const statusBadge: Record<ProjectStatus, string> = {
  "Active Selling":
    "bg-primary-container/10 text-primary-container border-primary-container/30",
  "Pre-sale": "bg-surface-variant text-on-surface border-outline-variant",
  "On Hold": "bg-error-container/20 text-error border-error-container/50",
};

const progressBarColor: Record<ProjectStatus, string> = {
  "Active Selling": "bg-primary-container shadow-[0_0_4px_rgba(0,245,212,0.5)]",
  "Pre-sale": "bg-on-surface-variant",
  "On Hold": "bg-error",
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="hover:bg-[#1E2D50]/50 transition-colors group"
    >
      <td className="py-4 px-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded overflow-hidden border border-outline-variant bg-surface-variant flex items-center justify-center">
            {project.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt={`${project.name} thumbnail`}
                className="w-full h-full object-cover"
                src={project.thumbnail}
              />
            ) : (
              <span className="material-symbols-outlined text-on-surface-variant">
                domain
              </span>
            )}
          </div>
          <div>
            <p className="font-bold text-on-surface">{project.name}</p>
            <p className="text-xs text-on-surface-variant font-label-sm">
              {project.category}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 px-5 text-on-surface-variant">{project.location}</td>
      <td className="py-4 px-5">
        <div className="flex items-center gap-2">
          <div className="w-16 h-1 bg-surface-variant rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${progressBarColor[project.status]}`}
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.08,
                ease: "easeOut",
              }}
            />
          </div>
          <span
            className={`text-xs font-label-sm ${
              project.status === "On Hold"
                ? "text-error"
                : "text-primary-container"
            }`}
          >
            {project.progress}%
          </span>
        </div>
      </td>
      <td className="py-4 px-5">
        <span
          className={`px-2 py-1 border rounded font-label-sm text-label-sm ${statusBadge[project.status]}`}
        >
          {project.status}
        </span>
      </td>
      <td className="py-4 px-5 text-right">
        <button className="p-1.5 text-on-surface-variant hover:text-primary-container transition-colors rounded hover:bg-surface-variant">
          <span className="material-symbols-outlined text-sm">edit</span>
        </button>
      </td>
    </motion.tr>
  );
}

export default function ProjectTable() {
  const [filter, setFilter] = useState<Filter>("Бүгд");

  return (
    <div className="lg:col-span-2 glass-card flex flex-col overflow-hidden">
      <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
          Project Status
        </h2>
        <div className="flex gap-2">
          {(["Бүгд", "Борлуулагдаж буй", "Төлөвлөгдсөн"] as Filter[]).map(
            (option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-3 py-1 rounded font-label-sm text-label-sm transition-colors ${
                  filter === option
                    ? "bg-surface-container text-primary-container border border-outline-variant border-b-2 border-b-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {option}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-lowest/80 border-b border-outline-variant text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th className="py-3 px-5 font-medium">Project</th>
              <th className="py-3 px-5 font-medium">Location</th>
              <th className="py-3 px-5 font-medium">Progress</th>
              <th className="py-3 px-5 font-medium">Status</th>
              <th className="py-3 px-5 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md divide-y divide-outline-variant/50">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-3 border-t border-outline-variant flex justify-center bg-surface-container-lowest/30">
        <button className="text-xs font-label-sm text-primary-container hover:text-primary transition-colors flex items-center gap-1">
          View All Projects{" "}
          <span className="material-symbols-outlined text-[14px]">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
