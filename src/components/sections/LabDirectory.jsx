import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LABS } from "@/lib/labData";

const statusCfg = {
  available: { label: "Tersedia", cls: "bg-accent/10 text-accent border-accent/20" },
  "in-session": { label: "Sedang Digunakan", cls: "bg-signal/10 text-signal border-signal/20" },
};

export default function LabDirectory() {
  return (
    <section id="labs" className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono-label text-[11px] text-accent">// 02 — Research Matrix</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 tracking-tight">
            Pusat Keunggulan Laboratorium
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Empat pusat penelitian yang dirancang sebagai centers of excellence —
            ruang presisi tempat teori bertemu eksperimen.
          </p>
          <Link
            to="/pusat-keunggulan"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-md shadow-primary/20"
          >
            Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid-lattice">
          {LABS.map((lab, i) => (
            <motion.article
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`col-span-6 ${lab.span} group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={lab.image}
                  alt={lab.name}
                  fittingType="fill"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono-label text-[9px] px-2 py-1 rounded-md glass text-primary">{lab.tag}</span>
                  <span className={`font-mono-label text-[9px] px-2 py-1 rounded-md border ${statusCfg[lab.status].cls}`}>
                    {statusCfg[lab.status].label}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="font-mono-label text-[10px] text-accent">{lab.discipline}</span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-0.5">{lab.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{lab.description}</p>

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

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="leading-tight">
                      <div className="font-mono-label text-[8px] text-muted-foreground">Lab Head</div>
                      <div className="text-xs font-medium text-primary">{lab.head}</div>
                    </div>
                  </div>
                  <Link
                    to={`/pusat-keunggulan/${lab.id}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
