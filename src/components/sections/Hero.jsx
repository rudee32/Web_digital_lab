import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { HERO_IMAGE, LABS } from "@/lib/labData";

const liveStatus = [
  { lab: "Lab Kimia", state: "available" },
  { lab: "Lab Biologi", state: "in-session" },
  { lab: "Lab Fisika", state: "available" },
  { lab: "Lab Virtual", state: "available" },
];

const statusMap = {
  available: { label: "Tersedia", color: "bg-accent", text: "text-accent" },
  "in-session": { label: "Sedang Digunakan", color: "bg-signal", text: "text-signal" },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden lattice-bg pt-16">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Macro laboratorium modern"
          fittingType="fill"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-primary/10" />
      </div>

      {/* Decorative data lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-primary/10 hidden lg:block" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-primary/5 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span className="font-mono-label text-[10px] text-primary/70">Sistem Aktif · Tahun Ajaran 2026/2027</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.05] tracking-tight text-balance">
              Antarmuka Riset<br />
              <span className="gradient-text">Living Laboratory</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed text-balance">
              Laboratorium IPA MAN Palopo — ruang penjelajahan ilmiah yang mengubah konsep
              teoretis menjadi pengalaman praktis. Dari detail sel hingga arsitektur dunia digital,
              temukan precision & curiosity di sini.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/pusat-keunggulan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                Telusuri Laboratorium
              </Link>
              <Link
                to="/arsip-akademik"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-primary font-medium text-sm hover:bg-white transition-all"
              >
                Katalog & Layanan
              </Link>
            </div>
          </motion.div>

          {/* Live Status Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="glass rounded-2xl p-6 shadow-xl shadow-primary/5">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-label text-[10px] text-muted-foreground">Live Status</span>
                <span className="font-mono-label text-[10px] text-accent">● REAL-TIME</span>
              </div>
              <div className="space-y-3">
                {liveStatus.map((s, i) => {
                  const cfg = statusMap[s.state];
                  return (
                    <div key={s.lab} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
                      <span className="text-sm font-medium text-primary">{s.lab}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${cfg.color} animate-pulse`} />
                        <span className={`text-xs font-medium ${cfg.text}`}>{cfg.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-border/50 grid grid-cols-3 gap-2 text-center">
                {[
                  { v: "4", l: "Lab Aktif" },
                  { v: "120+", l: "Alat" },
                  { v: "50+", l: "Modul" },
                ].map((stat) => (
                  <div key={stat.l}>
                    <div className="font-heading text-2xl font-bold text-primary">{stat.v}</div>
                    <div className="font-mono-label text-[8px] text-muted-foreground">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee ticker */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border/50 bg-primary/5 py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {LABS.map((lab) => (
                <span key={lab.id} className="font-mono-label text-[10px] text-primary/50 flex items-center gap-2">
                  <span className="text-accent">◆</span> {lab.tag} — {lab.name}
                </span>
              ))}
              <span className="font-mono-label text-[10px] text-accent">LAB IPA · MAN PALOPO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}