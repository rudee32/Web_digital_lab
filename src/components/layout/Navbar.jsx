import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import { NAV_LINKS, PORTAL_URL } from "@/lib/labData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_8px_32px_rgba(10,38,71,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo className="w-9 h-9 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-primary text-sm tracking-tight">DIGILAB IPA</span>
            <span className="font-mono-label text-[9px] text-muted-foreground">MAN PALOPO</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  to={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-primary/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-primary/70 hover:text-primary rounded-md hover:bg-primary/5 transition-all"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href={PORTAL_URL}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-[1.02]"
        >
          Jelajahi Lab
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/5"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-md"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}