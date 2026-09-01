"use client";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-container-padding bg-surface border-b border-outline-variant z-30 flex-shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="font-headline-md text-headline-md font-semibold text-primary mr-8 hidden lg:block">
          Dashboard
        </h1>

        <div className="relative w-64 max-w-md hidden md:flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-on-surface-variant z-10">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-[#0B132B] border border-[#1E2D50] rounded text-on-surface font-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-on-surface-variant"
            placeholder="Хайх..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="items-center bg-surface-container rounded-full p-1 border border-outline-variant hidden sm:flex">
          <button className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-label-sm">
            MN
          </button>
          <button className="px-2 py-0.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
            EN
          </button>
        </div>

        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <motion.span
            className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </button>

        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
          <span className="material-symbols-outlined">light_mode</span>
        </button>

        <motion.button
          whileHover={{ boxShadow: "0 0 15px rgba(0, 245, 212, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-container text-[#080E1E] px-4 py-2 rounded font-label-md text-label-md font-bold flex items-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Шинэ төсөл нэмэх
        </motion.button>
      </div>
    </header>
  );
}
