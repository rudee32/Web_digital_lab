import { motion } from "framer-motion";
import { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RESOURCES } from "@/lib/labData";

const iconMap = { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText };

export default function ArsipAkademik() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <span className="font-mono-label text-[11px] text-accent">// Arsip Akademik</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 tracking-tight">
              Arsip Akademik & Layanan
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Akses cepat ke modul, inventaris, dan dokumen tata kelola —
              dirancang untuk navigasi kurang dari tiga klik. Semua sumber daya
              laboratorium tersedia dalam satu portal terpusat.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((res, i) => {
              const Icon = iconMap[res.icon] || FileText;
              return (
                <Link
                  key={res.id}
                  to={`/arsip-akademik/${res.id}`}
                  className="group relative p-7 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="font-mono-label text-[9px] text-muted-foreground">{`DOC-${String(i + 1).padStart(2, "0")}`}</span>
                  <h3 className="font-heading text-xl font-semibold mt-1 mb-3 text-primary">{res.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{res.desc}</p>
                  <div className="flex items-center gap-1.5 mt-5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-7 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-label text-[10px] text-primary-foreground/50">// HUBUNGI KAMI</span>
                <h3 className="font-heading text-xl font-bold mt-3">Butuh akses khusus?</h3>
                <p className="text-sm text-primary-foreground/70 mt-3 leading-relaxed">
                  Ajukan permintaan penggunaan laboratorium atau konsultasi teknis dengan tim kami.
                </p>
              </div>
              <a
                href="mailto:labipa@manpalopo.sch.id"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                Hubungi Tim <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
