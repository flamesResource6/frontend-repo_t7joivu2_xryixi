import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula Commerce',
    story: 'Replatformed to a headless stack with AI merchandising. +38% conversion.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Helios Health',
    story: 'Patient portal with realtime telemetry and privacy-first design.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aquila FinTech',
    story: 'Compliance automation and dashboards for risk teams.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
];

function Project({ title, story, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-slate-300">{story}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="relative w-full bg-[#050813] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_70%_20%,rgba(0,229,255,0.12),transparent),radial-gradient(40%_30%_at_30%_90%,rgba(36,48,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Digital Masterpieces</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Stories of problem → process → outcome</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Project key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
