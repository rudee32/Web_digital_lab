import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { User, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LABS } from "@/lib/labData";

const statusCfg = {
  available: { label: "Tersedia", cls: "bg-accent/10 text-accent border-accent/20" },
  "in-session": { label: "Sedang Digunakan", cls: "bg-signal/10 text-signal border-signal/20" },
};

export default function PusatKeunggulan() {
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
            <span className="font-mono-label text-[11px] text-accent">// Pusat Keunggulan</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 tracking-tight">
              Pusat Keunggulan Laboratorium
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Empat pusat penelitian yang dirancang sebagai centers of excellence —
              ruang presisi tempat teori bertemu eksperimen. Setiap laboratorium
              dilengkapi peralatan modern dan dikelola oleh tenaga ahli berpengalaman.
            </p>
          </motion.div>

          <div className="space-y-8">
            {LABS.map((lab, i) => (
              <motion.article
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grid lg:grid-cols-2 gap-0 rounded-2xl bg-card border border-border shadow-sm overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fittingType="fill"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono-label text-[9px] px-2 py-1 rounded-md glass text-primary">{lab.tag}</span>
                    <span className={`font-mono-label text-[9px] px-2 py-1 rounded-md border ${statusCfg[lab.status].cls}`}>
                      {statusCfg[lab.status].label}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="font-mono-label text-[10px] text-accent">{lab.discipline}</span>
                    <h2 className="font-heading text-3xl font-bold text-white mt-0.5">{lab.name}</h2>
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{lab.description}</p>

                  <div>
                    <span className="font-mono-label text-[9px] text-muted-foreground">Peralatan Utama</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {lab.equipment.map((eq) => (
                        <span key={eq} className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div className="leading-tight">
                        <div className="font-mono-label text-[8px] text-muted-foreground">Lab Head</div>
                        <div className="text-sm font-medium text-primary">{lab.head}</div>
                      </div>
                    </div>
                    <Link
                      to={`/pusat-keunggulan/${lab.id}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      Lihat Detail <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
