import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LabDirectory from "@/components/sections/LabDirectory";
import Resources from "@/components/sections/Resources";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <LabDirectory />
        <Resources />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}