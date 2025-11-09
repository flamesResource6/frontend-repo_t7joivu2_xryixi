import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const products = [
  {
    name: 'WhyMySiteSuck',
    blurb: 'Instant UX and performance audit with actionable fixes powered by AI.',
    link: '#',
  },
  {
    name: 'CipherBoards',
    blurb: 'Realtime analytics and KPI cockpit for SaaS founders.',
    link: '#',
  },
  {
    name: 'PromptSmith',
    blurb: 'Composable AI workflows and agents for product teams.',
    link: '#',
  },
];

function ProductModal({ open, onClose, product }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A0F1F] to-[#0B0F19] p-6 text-white shadow-xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.18),transparent_60%)]" />
            <h3 className="text-2xl font-bold">{product?.name}</h3>
            <p className="mt-2 text-slate-300">{product?.blurb}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={product?.link}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2430FF] to-[#00E5FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,229,255,0.6)]"
              >
                Try Now
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductCard({ name, blurb, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      onClick={onOpen}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#00E5FF]/25 via-[#2430FF]/20 to-transparent blur-xl" />
      </div>
      <div className="relative z-10">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="mt-2 text-slate-300">{blurb}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-cyan-300">
          <span className="text-sm">Learn more</span>
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </motion.button>
  );
}

export default function Products() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section id="products" className="relative w-full bg-[#050713] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_20%_10%,rgba(0,229,255,0.12),transparent),radial-gradient(50%_40%_at_80%_90%,rgba(36,48,255,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Innovation Hub</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">In-house tools & experiments</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              blurb={p.blurb}
              onOpen={() => {
                setActive(p);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <ProductModal open={open} onClose={() => setOpen(false)} product={active} />
    </section>
  );
}
