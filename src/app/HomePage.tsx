import { Link } from "react-router";
import heroBg from "../imports/ChatGPT_Image_May_11__2026__07_58_40_PM.png";
import { DownloadButtonGroup } from "./components/download-button";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F2EFE8]">
      <div
        className="min-h-[650px] w-full relative overflow-hidden bg-cover bg-top"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <svg className="absolute inset-0 w-0 h-0">
          <defs>
            <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0"
                result="tint"
              />
            </filter>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        <header className="relative z-20 flex items-start justify-between p-6 gap-6">
          <Link
            to="/"
            className="font-sans text-xs tracking-[0.2em] font-medium text-white pt-2 no-underline hover:opacity-80 transition-opacity"
          >
            ZEK'THAR
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 no-underline"
            >
              About
            </Link>
            <DownloadButtonGroup variant="header" />
          </div>
        </header>

        <div className="absolute left-12 md:left-20 top-1/2 -translate-y-1/2 z-20 flex flex-col items-start text-left gap-3 max-w-xs">
          <h1 className="font-serif text-2xl md:text-3xl tracking-tight text-white leading-[1.15]">
            A resident process for human cognition.
          </h1>
          <p className="font-mono text-[10px] text-white/60 tracking-wider">
            Always on. Always yours.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
