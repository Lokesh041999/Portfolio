"use client";

import { motion } from "framer-motion";

import { personalInfo } from "@/lib/data";

const chartBars = [42, 58, 72, 86, 64, 78, 92, 68, 82, 96];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {personalInfo.role}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I’m <span className="text-gradient">Lokesh</span>
            <br />
            Agarwal
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#06101f] p-8"
        >
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(34,211,238,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.18)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-300">
                  Geospatial Dashboard
                </p>
                <h3 className="mt-2 text-3xl font-black text-white">
                  Mapbox Analytics
                </h3>
              </div>

              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
                Live
              </span>
            </div>

            <div className="mt-10">
              <div className="flex h-56 items-end gap-3 rounded-2xl border border-white/10 bg-black/20 p-6">
                {chartBars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-lg bg-cyan-400/80 shadow-[0_0_24px_rgba(34,211,238,.35)]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Mapbox</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
