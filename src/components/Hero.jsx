import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const GlowOrb = ({ className }) => (
  <div
    className={`pointer-events-none absolute blur-3xl opacity-30 ${className}`}
    aria-hidden
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#040712] via-[#070B1B] to-[#060814] text-white">
      {/* Subtle floating gradient orbs */}
      <GlowOrb className="top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[conic-gradient(at_top_left,_#1A2AFF,_transparent_60%)]" />
      <GlowOrb className="bottom-[-20%] right-[-10%] w-[48rem] h-[48rem] rounded-full bg-[conic-gradient(at_bottom_right,_#00E5FF,_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_4px_rgba(34,211,238,0.6)]" />
            <span className="text-xs tracking-wide text-cyan-200/90">CipherLabs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-['Mona_Sans',Inter,system-ui] text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Building the Future of
            <span className="bg-gradient-to-r from-[#4F46E5] via-[#00E5FF] to-[#38BDF8] bg-clip-text text-transparent"> Web, SaaS & Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-xl text-balance text-lg text-slate-300 md:text-xl"
          >
            A creative software studio crafting bold, futuristic experiences. We blend design, code, and AI to build products that feel inevitable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2430FF] to-[#00E5FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(36,48,255,0.7)] transition [text-shadow:0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(0,229,255,0.7)]"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Explore Services
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Play className="h-4 w-4 text-cyan-300" />
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[50vh] w-full md:h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md" />
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Gradient overlays should not block Spline interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#060814]/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Subtle animated scanline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#040712] via-transparent to-transparent" />
    </section>
  );
}
