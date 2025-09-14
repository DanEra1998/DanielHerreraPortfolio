import portrait from "./assets/DanielHerreraSash.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./App.css";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Daniel Herrera – Portfolio (single-file React + Tailwind)
 * -------------------------------------------------------
 * Drop this into a Vite + React + Tailwind project as src/App.jsx
 * or paste into a CodeSandbox to preview. You can split files later.
 *
 * Sections: Hero, About, Projects, Skills, Experience, Contact
 * - Fully responsive, keyboard-accessible
 * - Uses Framer Motion for subtle motion
 * - Data-driven: edit the DATA object below
 */

// ======== EDIT YOUR DATA HERE ========
const DATA = {
  name: "Daniel Herrera",
  role: "Software Developer",
  tagline:
    "I build clean, reliable software – from fast frontends to pragmatic backends.",
  location: "Los Angeles, CA",
  // Links shown in header + footer
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    { label: "Resume", href: "/Daniel-Herrera-Resume-2025.pdf" },
  ],
  about:
    "Recent CS grad and UCI Learning Assistant. I enjoy React/Tailwind on the front and Python/Node on the back. Lately exploring RAG pipelines and serverless Postgres.",
  // Feature up to 6 projects
  projects: [
    {
      title: "CriticalAsset Dashboard",
      blurb:
        "Facility management UI with asset search, role-based views, and Playwright tests.",
      tech: ["Vue", "Tailwind", "Playwright", "AWS"],
      links: [
        { label: "Demo", href: "#" },
        { label: "Code", href: "#" },
      ],
    },
    {
      title: "RAG Workflow (n8n + Gemini + Pinecone)",
      blurb:
        "Pipeline that ingests docs, extracts embeddings, and serves semantic answers.",
      tech: ["n8n", "Gemini", "Pinecone", "Postgres"],
      links: [{ label: "Diagram", href: "#" }],
    },
    {
      title: "GetMentored Platform",
      blurb:
        "Mentor matching MVP with invite-based onboarding and admin controls.",
      tech: ["Express", "Node", "MongoDB", "Tailwind"],
      links: [{ label: "Case Study", href: "#" }],
    },
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
    frontend: ["React", "Vue", "Tailwind", "Vite", "Astro"],
    backend: ["Node", "Express", "Prisma", "FastAPI"],
    infra: ["AWS", "Docker", "CI/CD", "Netlify", "Vercel"],
    ai: ["RAG", "Gemini", "Pinecone", "OpenAI APIs"],
  },
  experience: [
    {
      org: "CriticalAsset",
      title: "Lead Software Engineer (contract)",
      dates: "2024–2025",
      bullets: [
        "Reverse‑engineered AWS architecture; Dockerized environments and improved deploys.",
        "Built asset image pipeline (n8n + Gemini) to enrich MEP metadata.",
        "Wrote Playwright tests raising UI reliability and catching regressions early.",
      ],
    },
    {
      org: "UCI – Learning Assistant",
      title: "Course Mentor (Software Eng Capstone)",
      dates: "2024",
      bullets: [
        "Mentored 25 teams (~130 students) on Agile standups, tickets, and debugging.",
        "Guided project architecture, code reviews, and teamwork best practices.",
      ],
    },
  ],
  contact: {
    email: "daniel.era1998@gmail.com",
    phone: "(626) 592-2169",
  },
};
// =====================================

export default function App() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#171c2b] via-[#161e2f] to-[#131723] text-slate-100">
      {/* center light rail behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)]"
      />
      {/* center light rail (from earlier step) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 right-0"
      >
        <div className="mx-auto h-full w-[calc(100%-2rem)] max-w-6xl rounded-[28px] bg-white/[0.05] ring-1 ring-white/10" />
      </div>

      <Header />
      <Hero name={DATA.name} tagline={DATA.tagline} role={DATA.role} />
      <Section id="about" title="About">
        <p className="text-zinc-300/90 leading-relaxed">{DATA.about}</p>
      </Section>
      <Projects projects={DATA.projects} />
      <Skills skills={DATA.skills} />
      <Experience items={DATA.experience} />
      <Contact info={DATA.contact} />
      <Footer links={DATA.links} />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          DH
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#projects" className="opacity-80 hover:opacity-100">
            Projects
          </a>
          <a href="#skills" className="opacity-80 hover:opacity-100">
            Skills
          </a>
          <a href="#experience" className="opacity-80 hover:opacity-100">
            Experience
          </a>
          <a href="#contact" className="opacity-80 hover:opacity-100">
            Contact
          </a>
        </nav>
        <a
          href={`${import.meta.env.BASE_URL}Daniel-Herrera-Resume-2025.pdf`}
          download="Daniel-Herrera-Resume-2025.pdf"
          className="inline-flex rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold hover:bg-white/10"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:from-sky-300 hover:via-cyan-300 hover:to-blue-400"
        >
          Hire me
        </a>

        {/* <nav className="hidden gap-6 text-sm md:flex">
          {["Projects", "Skills", "Experience", "Contact"].map((t) => (
            <a
              key={t}
              href={`#${t.toLowerCase()}`}
              className="opacity-80 hover:opacity-100 hover:text-sky-300"
            >
              {t}
            </a>
          ))}
        </nav> */}
      </div>
    </header>
  );
}

function Hero({ name, role, tagline }) {
  return (
    <section
      id="top"
      className="relative isolate mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 sm:py-24 md:grid-cols-12"
    >
      <div className="md:col-span-7">
        <Badge>Available for work</Badge>
        <h1 className="mt-4 text-balance font-extrabold leading-tight text-4xl sm:text-6xl">
          {role}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-300/90">{tagline}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-2xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="md:col-span-5">
        <BouncyPhotoHero src={portrait} alt={`${name} portrait`} name={name} />
      </div>
      <GradientOrbs />
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

function GradientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Projects({ projects }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                {i + 1}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-300/90">{p.blurb}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300/80">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full bg-white/10 px-2 py-0.5">
                  {t}
                </li>
              ))}
            </ul>
            {p.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Skills({ skills }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, list]) => (
          <div
            key={group}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {group}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {list.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-white/10 px-2 py-1 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience({ items }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-white/10 pl-6">
        {items.map((e, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="mb-8"
          >
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-emerald-400" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {e.title} · <span className="text-emerald-300">{e.org}</span>
                </h3>
                <span className="text-sm text-zinc-400">{e.dates}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-zinc-300/90">
                {e.bullets.map((b, j) => (
                  <li key={j} className="mb-1">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

function Contact({ info }) {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${info.email}?subject=Hello%20Daniel`;
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Let’s build something</h3>
          <p className="mt-2 text-zinc-300/90">
            Email me for collaborations, contract work, or mentoring.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={mailto}
              className="rounded-xl bg-emerald-500/90 px-3 py-1.5 font-semibold text-emerald-950 hover:bg-emerald-400"
            >
              Email
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(info.email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 font-medium hover:bg-white/15"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <Row label="Email" value={info.email} />
          <Row label="Phone" value={info.phone} />
          <Row label="Location" value={DATA.location} />
        </div>
      </div>
    </Section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Control({ label, children }) {
  return (
    <label className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-left text-sm">
      <span className="text-[10px] uppercase tracking-wider text-zinc-400">
        {label}
      </span>
      {children}
    </label>
  );
}

function Toggle({ on, setOn, children }) {
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className={[
        "rounded-full px-3 py-1 text-xs font-medium transition",
        on
          ? "bg-emerald-400 text-emerald-950"
          : "bg-white/10 text-zinc-200 hover:bg-white/15",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function BouncyPhotoHero({ src, alt = "portrait", name = "Daniel Herrera" }) {
  const [speed, setSpeed] = useState(1);
  const [bouncePx, setBouncePx] = useState(14);
  const [shadow, setShadow] = useState(true);
  const [glow, setGlow] = useState(true);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
      <div className="relative flex items-center justify-center">
        {/* Soft ambient glow behind the image */}
        {glow && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[110px]" />
          </div>
        )}

        <motion.img
          src={src}
          alt={alt}
          initial={false}
          animate={prefersReduced ? { opacity: 1 } : { y: [0, -bouncePx, 0] }}
          transition={
            prefersReduced
              ? { duration: 0.3 }
              : {
                  duration: Math.max(0.9 / speed, 0.15),
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
          whileHover={
            prefersReduced ? undefined : { y: -bouncePx - 8, scale: 1.02 }
          }
          className={[
            "h-64 w-64 rounded-2xl object-cover mt-4",
            "ring-1 ring-white/10",
            glow && "outline outline-white/10",
            shadow && "drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      </div>

      {/* Name below the photo (optional) */}
      <h3 className="mt-4 text-center text-xl font-semibold text-slate-200">
        {name}
      </h3>

      {/* Controls */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <Control label="Speed">
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full accent-sky-400"
          />
        </Control>
        <Control label="Bounce">
          <input
            type="range"
            min={6}
            max={28}
            step={1}
            value={bouncePx}
            onChange={(e) => setBouncePx(parseInt(e.target.value))}
            className="w-full accent-sky-400"
          />
        </Control>
        <Control label="Options">
          <div className="flex flex-wrap gap-2">
            <Toggle on={shadow} setOn={setShadow}>
              Shadow
            </Toggle>
            <Toggle on={glow} setOn={setGlow}>
              Glow
            </Toggle>
          </div>
        </Control>
      </div>
    </div>
  );
}

function Footer({ links }) {
  return (
    <footer className="relative z-40 border-t border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-4">
          {links.map((l) => (
            <li key={l.label}>
              <a className="hover:text-slate-200" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
