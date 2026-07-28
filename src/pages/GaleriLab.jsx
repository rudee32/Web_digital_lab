import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Images as GalleryIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GALLERY, LABS } from "@/lib/labData";

export default function GaleriLab() {
  const [activeLab, setActiveLab] = useState(GALLERY[0].lab);
  const active = GALLERY.find((g) => g.lab === activeLab);
  const activeLabData = LABS.find((l) => l.name === activeLab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <span className="font-mono-label text-[11px] text-accent">// Visual Archive</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 tracking-tight">
              Galeri Laboratorium IPA
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Tur virtual ke setiap sudut laboratorium — dari ruang praktikum hingga area penyimpanan alat.
              Jelajahi fasilitas kami melalui galeri interaktif ini.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {GALLERY.map((g) => (
              <button
                key={g.lab}
                onClick={() => setActiveLab(g.lab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeLab === g.lab
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card text-primary/60 hover:text-primary border border-border hover:border-primary/20"
                }`}
              >
                {g.lab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {active.items.map((item, i) => (
                <motion.div
                  key={`${activeLab}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`group relative block rounded-xl overflow-hidden ${
                    i === 0 ? "col-span-2 row-span-2 min-h-[350px]" : "h-48"
                  }`}
                >
                  <Image
                    src={activeLabData.image}
                    alt={item}
                    fittingType="fill"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono-label text-[9px] text-accent">{activeLabData.tag}</span>
                    <p className="text-sm text-white font-medium leading-tight mt-0.5">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GalleryIcon className="w-4 h-4" />
              <span>{active.items.length} area · {activeLab}</span>
            </div>
            {activeLabData && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono-label text-[9px] text-accent">{activeLabData.tag}</span>
                <span>·</span>
                <span>{activeLabData.discipline}</span>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
