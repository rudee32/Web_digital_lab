import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import { NAV_LINKS } from "@/lib/labData";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <Logo className="w-9 h-9 shrink-0" />
              <div className="leading-none">
                <div className="font-heading font-bold text-primary-foreground text-sm">DIGILAB IPA</div>
                <div className="font-mono-label text-[9px] text-primary-foreground/50">MAN PALOPO</div>
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-xs">
              Living Research Interface — media informasi pengelolaan dan pelayanan
              Laboratorium IPA MAN Palopo.
            </p>
          </div>

          <div>
            <span className="font-mono-label text-[9px] text-primary-foreground/40">Navigasi</span>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                    <Link to={l.href} className="text-xs hover:text-accent transition-colors">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="text-xs hover:text-accent transition-colors">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono-label text-[9px] text-primary-foreground/40">Kontak</span>
            <a href="mailto:lab-ipa@sma1wonosari.sch.id" className="flex items-center gap-2 mt-3 text-xs hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              labipa@manpalopo.sch.id
            </a>
            <p className="text-xs mt-2">MAN Palopo, Kota Palopo, Sulawesi Selatan</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono-label text-[9px] text-primary-foreground/40">
            © 2026 DIGILAB IPA · MAN PALOPO · Living Research Interface
          </p>
          <p className="font-mono-label text-[9px] text-primary-foreground/30">
            Academic Precision · Avant-Garde Discovery
          </p>
        </div>
      </div>
    </footer>
  );
}