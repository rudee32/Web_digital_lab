import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, ArrowRight } from "lucide-react";

const links = [
  { label: "Website Sekolah", href: "https://vps.sma1wonosari.sch.id/" },
  { label: "Perpustakaan Sekolah", href: "https://lib.sma1wonosari.sch.id/" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background lattice-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="font-mono-label text-[11px] text-accent">// 06 — Contact</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
              Hubungi Laboratorium
            </h2>
            <p className="text-muted-foreground leading-relaxed text-balance">
              Untuk jadwal praktikum, permintaan akses, atau pertanyaan teknis —
              tim laboratorium siap membantu warga MAN Palopo.
            </p>

            <div className="space-y-3 pt-2">
              <a href="mailto:lab-ipa@sma1wonosari.sch.id" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-mono-label text-[9px] text-muted-foreground">Email Resmi</div>
                  <div className="text-sm font-medium text-primary">labipa@manpalopo.sch.id</div>
                </div>
                <ArrowRight className="w-4 h-4 text-accent ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-mono-label text-[9px] text-muted-foreground">Lokasi</div>
                  <div className="text-sm font-medium text-primary">MAN Palopo, Kota Palopo, Sulawesi Selatan</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-mono-label text-[9px] text-muted-foreground">Link Terkait</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-accent/10 hover:text-accent transition-all"
                  >
                    {l.label} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick request form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-8 shadow-xl shadow-primary/5"
          >
            <span className="font-mono-label text-[10px] text-accent">// FORM PERMINTAAN</span>
            <h3 className="font-heading text-xl font-bold text-primary mt-1 mb-5">Ajukan Peminjaman Lab</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono-label text-[9px] text-muted-foreground">Nama</label>
                  <input className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all" placeholder="Nama lengkap" />
                </div>
                <div>
                  <label className="font-mono-label text-[9px] text-muted-foreground">Kelas / Role</label>
                  <input className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all" placeholder="Mis. XII IPA 1" />
                </div>
              </div>
              <div>
                <label className="font-mono-label text-[9px] text-muted-foreground">Laboratorium</label>
                <select className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all">
                  <option>Lab Kimia</option>
                  <option>Lab Biologi</option>
                  <option>Lab Fisika</option>
                  <option>Lab Virtual</option>
                </select>
              </div>
              <div>
                <label className="font-mono-label text-[9px] text-muted-foreground">Keperluan</label>
                <textarea rows={3} className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none" placeholder="Jelaskan keperluan praktikum..." />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:scale-[1.01] transition-all shadow-lg shadow-primary/20">
                Kirim Permintaan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}