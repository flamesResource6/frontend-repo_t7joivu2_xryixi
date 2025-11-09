import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layout, Rocket, LineChart, PanelsTopLeft } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: <Code2 className="h-6 w-6" />,
    desc: 'High-performance sites with edge rendering, animations, and rock-solid DX.',
  },
  {
    title: 'SaaS Platforms',
    icon: <PanelsTopLeft className="h-6 w-6" />,
    desc: 'From MVP to scale — billing, auth, analytics, and delightful UX baked in.',
  },
  {
    title: 'AI Automation',
    icon: <Cpu className="h-6 w-6" />,
    desc: 'Agentic workflows, retrieval systems, and custom copilots integrated deeply.',
  },
  {
    title: 'UI/UX Design',
    icon: <Layout className="h-6 w-6" />,
    desc: 'Futuristic interfaces with glass, glow, and motion — designed for conversion.',
  },
  {
    title: 'SEO',
    icon: <Rocket className="h-6 w-6" />,
    desc: 'Technical SEO, blazing performance, and content systems built for growth.',
  },
  {
    title: 'Custom Dashboards',
    icon: <LineChart className="h-6 w-6" />,
    desc: 'Data-rich visualizations and admin tools with real-time insights.',
  },
];

function ServiceCard({ title, icon, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md"
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#2430FF]/30 via-[#00E5FF]/20 to-transparent blur-xl" />
      </div>

      <div className="relative z-10 flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 text-cyan-300 ring-1 ring-inset ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,229,255,0.4)]">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#060814] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_70%_10%,rgba(36,48,255,0.15),transparent),radial-gradient(40%_30%_at_20%_80%,rgba(0,229,255,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">What We Build</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Services engineered for impact</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
