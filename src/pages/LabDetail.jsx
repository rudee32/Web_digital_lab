import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ArrowLeft, User, Clock, Users, CheckCircle2, AlertTriangle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LABS } from "@/lib/labData";

const statusCfg = {
  available: { label: "Tersedia", cls: "bg-accent/10 text-accent border-accent/20" },
  "in-session": { label: "Sedang Digunakan", cls: "bg-signal/10 text-signal border-signal/20" },
};

export default function LabDetail() {
  const { id } = useParams();
  const lab = LABS.find((l) => l.id === id);

  if (!lab) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl font-bold text-primary">Laboratorium tidak ditemukan</h1>
            <Link to="/pusat-keunggulan" className="inline-flex items-center gap-2 mt-6 text-primary hover:text-accent transition-colors">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Lab
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Link
              to="/pusat-keunggulan"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Lab
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm mb-12"
          >
            <div className="relative h-72 lg:h-auto min-h-[360px] overflow-hidden">
              <Image
                src={lab.image}
                alt={lab.name}
                fittingType="fill"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-mono-label text-[9px] px-2 py-1 rounded-md glass text-primary">{lab.tag}</span>
                <span className={`font-mono-label text-[9px] px-2 py-1 rounded-md border ${statusCfg[lab.status].cls}`}>
                  {statusCfg[lab.status].label}
                </span>
              </div>
            </div>

            <div className="bg-card p-8 lg:p-10 flex flex-col justify-center">
              <span className="font-mono-label text-[10px] text-accent">{lab.discipline}</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">{lab.name}</h1>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">{lab.description}</p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4 text-primary" />
                  <span>{lab.head}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{lab.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{lab.schedule}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-heading text-xl font-bold text-primary mb-5">Peralatan Utama</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {lab.equipment.map((eq) => (
                  <div key={eq} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-primary">{eq}</span>
                  </div>
                ))}
              </div>

              {lab.highlights && (
                <>
                  <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-5">Keunggulan Lab</h2>
                  <div className="space-y-3">
                    {lab.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="w-5 h-5 text-signal" />
                <h2 className="font-heading text-xl font-bold text-primary">Tata Tertib</h2>
              </div>
              <div className="space-y-4">
                {lab.rules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-mono-label text-[10px] text-accent bg-accent/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
