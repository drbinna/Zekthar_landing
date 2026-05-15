import { useEffect } from "react";
import { Link } from "react-router";
import { AboutSection } from "./components/about-section";
import { DownloadButtonGroup } from "./components/download-button";
import { Footer } from "./components/footer";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F2EFE8]">
      <header className="relative z-20 flex items-start justify-between p-6 gap-6 border-b border-white/5">
        <Link
          to="/"
          className="font-sans text-xs tracking-[0.2em] font-medium text-white pt-2 no-underline hover:opacity-80 transition-opacity"
        >
          ZEK'THAR
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 no-underline"
          >
            Home
          </Link>
          <DownloadButtonGroup variant="header" />
        </div>
      </header>

      <AboutSection />

      <Footer />
    </div>
  );
}
