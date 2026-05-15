import { DownloadButtonGroup } from "./download-button";

const REASONS = [
  {
    n: "01",
    title: "He sees what you see, in context.",
    body: "Cmd+Shift+S captures your active display and reasons about the pixels directly. No \"let me explain my situation\" preamble — ask \"what is this error trying to tell me\" pointing at nothing, and he knows what \"this\" is."
  },
  {
    n: "02",
    title: "He talks like a person, not a chatbot.",
    body: "Real-time WebRTC avatar, not pre-rendered video. Sub-second latency from your last word to his first. The face animates, the voice carries inflection. The difference between texting and being in a room with someone."
  },
  {
    n: "03",
    title: "He actually does the thing.",
    body: "Task mode reads the screen, decides on the next action, executes it via real OS-level mouse and keyboard, screenshots the result, and loops. A closed agent loop on your actual desktop — not a chat where he tells you what to click."
  },
  {
    n: "04",
    title: "Voice and screen share the same brain.",
    body: "Say \"Zek, summarize what's on my screen and email it to Sarah\" — speech, intent classification, screen capture, reasoning, and mouse-keyboard all run through one process holding one context. Other tools make you switch between three apps."
  },
  {
    n: "05",
    title: "He runs on your machine, on your keys.",
    body: "No SaaS layer. No company holding your transcripts. Your API keys live on your Mac; screen captures flow directly from your Mac to the model providers. If we vanished tomorrow, the app you have keeps working."
  },
  {
    n: "06",
    title: "He has a character, and characters are useful.",
    body: "Pretending an AI is \"just a tool\" produces flat, generic interactions. A coherent persona — a curious xenobiologist with strong opinions and a deadpan delivery — produces interactions you want to have. People talk to Zek'thar longer, ask sharper questions, and remember what he said."
  }
];

const SHORTCUTS = [
  { key: "Cmd+Shift+S", action: "see your screen" },
  { key: "push to talk", action: "talk with you" },
  { key: "Cmd+Shift+T", action: "type a task" },
  { key: "Cmd+Shift+V", action: "speak a task" }
];

const PRIVACY = [
  "He does not watch your screen all the time.",
  "He only sees your screen when you call him.",
  "Your microphone is only active during push-to-talk.",
  "Nothing is stored between sessions.",
  "There is no Zek'thar server sitting between you and the assistant.",
  "Your keys. Your Mac. Your alien."
];

const BIO = [
  ["name", "Zek'thar"],
  ["origin", "Veloris-9"],
  ["role", "Class III"],
  ["post", "your Mac"],
  ["since", "install"]
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.2em] text-white/45 mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="h-px bg-white/8 mx-14" />;
}

export function AboutSection() {
  return (
    <div className="bg-[#0A0A0B] text-[#F2EFE8]">
      <div className="px-14 pt-16 pb-12">
        <p className="font-mono text-[10px] tracking-[0.2em] text-white/55 mb-4">
          FIELD OBSERVATION LOG · 001
        </p>
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.15] max-w-xl mb-3">
          Zek'thar is a field observer from Veloris-9, posted to your machine.
        </h1>
        <p className="font-mono text-xs text-white/55 tracking-wide">
          He sees what's on your screen. He talks. He acts. He files reports nobody asked for.
        </p>
      </div>

      <Divider />

      <div className="px-14 py-12">
        <SectionLabel>01 — WHAT THIS IS</SectionLabel>
        <p className="leading-[1.7] text-white/85 max-w-2xl mb-3.5">
          A Mac app that combines three things into one assistant: a real-time animated avatar that talks with you, vision over your screen, and the ability to use your cursor to execute tasks across workflows. Most AI assistants do one of these three. Zek'thar does all three, in the same conversation, with shared context.
        </p>
        <p className="leading-[1.7] text-white/85 max-w-2xl">
          The character is a choice, not a gimmick. We thought it was more honest to dress this thing as what it actually is — an alien intelligence watching humans work — than to pretend it's just another sidebar that "boosts your productivity."
        </p>
      </div>

      <Divider />

      <div className="px-14 py-12">
        <SectionLabel>02 — WHY HE'S BETTER AT THIS</SectionLabel>
        <h2 className="font-serif text-2xl leading-tight mb-3 max-w-2xl">
          Most assistants live behind a text box. Zek'thar collapses the seams.
        </h2>
        <p className="leading-[1.7] text-white/70 max-w-2xl mb-9">
          You type, they respond, you copy-paste their answer back into whatever you were actually doing. The seams are everywhere. Six things make Zek'thar different:
        </p>

        <div className="border border-white/8 rounded-lg overflow-hidden divide-y divide-white/8">
          {REASONS.map((r) => (
            <div key={r.n} className="bg-[#0A0A0B] p-7">
              <div className="flex gap-5">
                <span className="font-mono text-xs text-white/50 tracking-widest min-w-6 pt-0.5">
                  {r.n}
                </span>
                <div>
                  <p className="font-serif text-lg leading-snug mb-2">
                    {r.title}
                  </p>
                  <p className="leading-[1.7] text-white/65">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div className="px-14 py-12">
        <SectionLabel>03 — THE CHARACTER</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">
          <div className="bg-white/[0.025] border border-white/8 rounded-lg px-5 py-4">
            <table className="w-full font-mono text-[11px] leading-[2]">
              <tbody>
                {BIO.map(([k, v]) => (
                  <tr key={k}>
                    <td className="text-white/45 pr-3">{k}</td>
                    <td className="text-white">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-serif text-lg leading-[1.65] text-white/85">
            Zek'thar is patient, dryly amused, occasionally confused, and almost never alarmed. He believes humans are interesting but inefficient. He files daily observation reports to Veloris-9 that nobody on Veloris-9 actually reads.
          </p>
        </div>
      </div>

      <Divider />

      <div className="px-14 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionLabel>04 — WHAT HE CAN DO</SectionLabel>
          <ul className="text-white/80">
            {SHORTCUTS.map((s, i) => (
              <li
                key={s.key}
                className={`flex gap-4 py-2.5 ${
                  i < SHORTCUTS.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <span className="font-mono text-[11px] text-white/70 min-w-24">
                  {s.key}
                </span>
                <span>{s.action}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionLabel>05 — WHAT HE WILL NOT DO</SectionLabel>
          <ul className="text-white/70 leading-[1.75]">
            {PRIVACY.map((p) => (
              <li key={p} className="py-2">
                — {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Divider />

      <div className="px-14 py-12">
        <SectionLabel>06 — MADE BY</SectionLabel>
        <p className="font-serif text-lg leading-[1.65] text-white/85 max-w-2xl">
          Built by Obi —{" "}
          <a
            href="https://x.com/drbinna1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5C8]/85 underline underline-offset-4 hover:text-[#00E5C8]"
          >
            meet the developer →
          </a>
        </p>
      </div>

      <div className="bg-white/[0.03] border-t border-white/10 px-14 py-14 flex items-center justify-between gap-9 flex-wrap">
        <div>
          <p className="font-serif text-2xl leading-tight mb-1.5">
            Make first contact.
          </p>
          <p className="font-mono text-[11px] text-white/55 tracking-wide">
            Free. Open source. Your machine, your rules.
          </p>
        </div>
        <DownloadButtonGroup variant="cta" />
      </div>
    </div>
  );
}
