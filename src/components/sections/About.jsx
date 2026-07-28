import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { HERO_IMAGE } from "@/lib/labData";
import { Microscope, Atom, Cpu, Sparkles } from "lucide-react";

const pillars = [
  { icon: Microscope, title: "Verifikasi Konsep", desc: "Mengubah teori menjadi pengalaman praktis nyata." },
  { icon: Atom, title: "Eksperimen Terukur", desc: "Membuktikan hukum dan teori sains melalui praktik." },
  { icon: Cpu, title: "Inovasi Digital", desc: "Simulasi dan laboratorium virtual berbasis teknologi." },
  { icon: Sparkles, title: "Rasa Ingin Tahu", desc: "Membangun pemahaman mendalam yang tidak terlupakan." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="font-mono-label text-[11px] text-accent">// 05 — About</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
              Sekilas Digilab IPA Ekamas
            </h2>
            <p className="text-muted-foreground leading-relaxed text-balance">
              Laboratorium sekolah merupakan unit sarana penunjang akademik yang dirancang khusus
              untuk kegiatan pembelajaran praktik, eksperimen, penyelidikan, dan pelatihan ilmiah.
              Laboratorium berfungsi sebagai sarana utama untuk mengubah konsep teoretis menjadi
              pengalaman praktis yang nyata.
            </p>
            <p className="text-muted-foreground leading-relaxed text-balance">
              Saat murid melakukan eksperimen, mereka melihat bagaimana hukum dan teori bekerja
              dalam praktik — membuat pemahaman lebih mendalam dan tidak mudah dilupakan.
              Website ini adalah media informasi pengelolaan dan pelayanan Laboratorium IPA di
              MAN Palopo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-xl shadow-primary/10">
              <Image src={HERO_IMAGE} alt="Laboratorium IPA Ekamas" fittingType="fill" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono-label text-[10px] text-accent">MAN PALOPO</span>
                <p className="text-white font-heading text-xl font-semibold mt-1">Living Research Interface</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-primary text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}