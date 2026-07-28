import { motion } from "framer-motion";
import { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RESOURCES } from "@/lib/labData";

const iconMap = { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText };

export default function Resources() {
  return (
    <section id="resources" className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono-label text-[11px] text-accent">// 03 — Resource Archive</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
            Arsip Akademik & Layanan
          </h2>
          <p className="text-primary-foreground/60 mt-4 text-lg leading-relaxed">
            Akses cepat ke modul, inventaris, dan dokumen tata kelola —
            dirancang untuk navigasi kurang dari tiga klik.
          </p>
          <Link
            to="/arsip-akademik"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-accent text-primary text-sm font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map((res, i) => {
            const Icon = iconMap[res.icon] || FileText;
            return (
              <Link
                key={res.id}
                to={`/arsip-akademik/${res.id}`}
                className="group relative p-6 rounded-2xl glass-dark hover:bg-white/10 transition-all duration-400 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.8} />
                </div>
                <span className="font-mono-label text-[9px] text-primary-foreground/40">{`DOC-${String(i + 1).padStart(2, "0")}`}</span>
                <h3 className="font-heading text-lg font-semibold mt-1 mb-2">{res.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{res.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-accent text-primary flex flex-col justify-between"
          >
            <div>
              <span className="font-mono-label text-[10px] text-primary/60">// HUBUNGI KAMI</span>
              <h3 className="font-heading text-xl font-bold mt-2">Butuh akses khusus?</h3>
              <p className="text-sm text-primary/70 mt-2">Ajukan permintaan penggunaan laboratorium atau konsultasi teknis dengan tim kami.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold hover:gap-3 transition-all">
              Hubungi Tim →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
