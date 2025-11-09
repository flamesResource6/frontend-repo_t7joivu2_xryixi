import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#040712]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(34,211,238,0.6)]" />
          CipherLabs
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
          <a href="#products" className="text-sm text-white/80 hover:text-white">Products</a>
          <a href="#work" className="text-sm text-white/80 hover:text-white">Work</a>
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-gradient-to-r from-[#2430FF] to-[#00E5FF] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,229,255,0.6)]"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#040712] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(34,211,238,0.6)]" />
          <span className="font-semibold">CipherLabs</span>
        </div>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} CipherLabs. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/70 transition hover:text-white">Twitter</a>
          <a href="#" className="text-white/70 transition hover:text-white">GitHub</a>
          <a href="#" className="text-white/70 transition hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="home" className="min-h-screen w-full bg-[#040712]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
