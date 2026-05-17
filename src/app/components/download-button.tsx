import { useEffect, useState } from "react";

// Latest-release URL pattern from GitHub.
// `latest/download/<filename>` always resolves to the most recent release with that asset.
const RELEASES_BASE = "https://github.com/drbinna/Void/releases/latest/download";
const RELEASES_PAGE = "https://github.com/drbinna/Void/releases/latest";
const VERSION = "1.0.3"; // bump when you ship

const DMG = {
  arm64: `${RELEASES_BASE}/Zekthar-${VERSION}-arm64.dmg`,
  x64: `${RELEASES_BASE}/Zekthar-${VERSION}-x64.dmg`,
};

type Arch = "arm64" | "x64" | "unknown";

async function detectMacArch(): Promise<Arch> {
  const uaData = (navigator as any).userAgentData;
  if (uaData?.getHighEntropyValues) {
    try {
      const info = await uaData.getHighEntropyValues(["architecture"]);
      if (info.architecture === "arm") return "arm64";
      if (info.architecture === "x86") return "x64";
    } catch {
      /* fall through */
    }
  }

  // WebGL renderer fingerprint (works in Safari)
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;
    const debugInfo = gl?.getExtension("WEBGL_debug_renderer_info");
    if (gl && debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;
      if (/Apple/.test(renderer)) return "arm64";
    }
  } catch {
    /* fall through */
  }

  return "unknown";
}

function isMac(): boolean {
  return /Mac/i.test(navigator.platform) || /Mac/i.test(navigator.userAgent);
}

const DownloadIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

type Variant = "header" | "cta";

interface ArchButtonProps {
  arch: "arm64" | "x64";
  variant?: Variant;
  primary?: boolean;
}

/** A single download button targeting one architecture. */
export function DownloadButton({
  arch,
  variant = "header",
  primary = true,
}: ArchButtonProps) {
  const href = arch === "arm64" ? DMG.arm64 : DMG.x64;
  const label =
    arch === "arm64" ? "Download for Mac (M-series)" : "Download for Mac (Intel)";

  const sizeClasses =
    variant === "cta"
      ? "px-6 py-3 rounded-full text-xs"
      : "px-4 py-2 rounded-full text-xs h-8";
  const iconSize = variant === "cta" ? 14 : 12;

  const colorClasses = primary
    ? "bg-white text-black hover:bg-white/90"
    : "bg-white/10 text-white hover:bg-white/15 border border-white/15";

  return (
    <a
      href={href}
      className={`${colorClasses} ${sizeClasses} font-medium transition-colors flex items-center gap-2 no-underline`}
    >
      <DownloadIcon size={iconSize} />
      {label}
    </a>
  );
}

interface DownloadButtonGroupProps {
  variant?: Variant;
}

/**
 * Two side-by-side buttons (M-series + Intel). The user's detected architecture
 * gets the primary (white) treatment; the other becomes the secondary (ghost)
 * style. Non-Mac visitors get a single button linking to the releases page.
 */
export function DownloadButtonGroup({ variant = "header" }: DownloadButtonGroupProps) {
  const [arch, setArch] = useState<Arch>("unknown");
  const [onMac, setOnMac] = useState(true);

  useEffect(() => {
    setOnMac(isMac());
    detectMacArch().then(setArch);
  }, []);

  // Non-Mac visitor: one button to the releases page
  if (!onMac) {
    const sizeClasses =
      variant === "cta"
        ? "px-6 py-3 rounded-full text-xs"
        : "px-4 py-2 rounded-full text-xs h-8";
    const iconSize = variant === "cta" ? 14 : 12;
    return (
      <a
        href={RELEASES_PAGE}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-white text-black hover:bg-white/90 ${sizeClasses} font-medium transition-colors flex items-center gap-2 no-underline`}
      >
        <DownloadIcon size={iconSize} />
        Download
      </a>
    );
  }

  // Mac: show both, primary highlight on the detected arch
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <DownloadButton
        arch="arm64"
        variant={variant}
        primary={arch !== "x64"}
      />
      <DownloadButton
        arch="x64"
        variant={variant}
        primary={arch === "x64"}
      />
    </div>
  );
}
