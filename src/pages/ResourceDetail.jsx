import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RESOURCES } from "@/lib/labData";

const iconMap = { BookOpen, Network, ConciergeBell, ClipboardCheck, FileText };

export default function ResourceDetail() {
  const { id } = useParams();
  const res = RESOURCES.find((r) => r.id === id);

  if (!res) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl font-bold text-primary">Dokumen tidak ditemukan</h1>
            <Link to="/arsip-akademik" className="inline-flex items-center gap-2 mt-6 text-primary hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Arsip Akademik
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[res.icon] || FileText;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Link
              to="/arsip-akademik"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Arsip Akademik
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-10 mb-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <span className="font-mono-label text-[9px] text-muted-foreground">{`DOC-${String(RESOURCES.indexOf(res) + 1).padStart(2, "0")}`}</span>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-1">{res.title}</h1>
                <p className="text-muted-foreground mt-3 text-lg leading-relaxed">{res.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-10 mb-8"
          >
            <h2 className="font-heading text-xl font-bold text-primary mb-4">Deskripsi</h2>
            <p className="text-muted-foreground leading-relaxed">{res.content}</p>
          </motion.div>

          {/* Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8 lg:p-10"
          >
            <h2 className="font-heading text-xl font-bold text-primary mb-5">Daftar Isi</h2>
            <div className="space-y-3">
              {res.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
