"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  ExternalLink,
  FileCheck2,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Project } from "@/lib/types";

interface JayostuteCapitalCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  previousProject: Project | null;
}

const challenges = [
  "Launch a full lending platform within a one-month delivery window.",
  "Support personal, business, and property loan journeys without confusing users.",
  "Make financial information feel credible, direct, and easy to act on.",
  "Coordinate scope, design, development, content, QA, and launch in parallel.",
  "Create clear conversion paths for high-intent visitors.",
  "Keep the experience simple enough for quick decision-making.",
];

const solutions = [
  {
    title: "Loan Journey Structure",
    icon: Layers,
    points: [
      "Grouped loan products into clear user pathways.",
      "Reduced decision friction before inquiry actions.",
      "Kept product information direct and scannable.",
    ],
  },
  {
    title: "Trust-first Finance UX",
    icon: ShieldCheck,
    points: [
      "Used a clean interface to support credibility.",
      "Balanced promotional copy with practical clarity.",
      "Made calls to action visible without feeling aggressive.",
    ],
  },
  {
    title: "Sprint-led Delivery",
    icon: Clock3,
    points: [
      "Managed scope against a tight one-month launch plan.",
      "Coordinated design and development in focused sprints.",
      "Kept reviews moving so launch decisions did not stall.",
    ],
  },
  {
    title: "Launch Readiness",
    icon: FileCheck2,
    points: [
      "Tracked content, responsive QA, and launch dependencies.",
      "Protected core flows before adding secondary polish.",
      "Delivered the platform on time with the required product coverage.",
    ],
  },
];

const outcomes = [
  {
    value: "100%",
    label: "On-time Delivery",
    detail: "Delivered the lending platform within the planned launch window.",
  },
  {
    value: "1 Month",
    label: "End-to-end Launch",
    detail: "Managed scope, design, development, QA, and launch in one track.",
  },
  {
    value: "3",
    label: "Loan Categories",
    detail: "Structured personal, business, and property loan pathways.",
  },
  {
    value: "Clearer",
    label: "Inquiry Flow",
    detail: "Improved how high-intent users moved from product discovery to action.",
  },
  {
    value: "Lean",
    label: "Delivery System",
    detail: "Kept decisions focused around launch-critical work.",
  },
  {
    value: "Trust-led",
    label: "Finance Presence",
    detail: "Created a cleaner digital foundation for a lending brand.",
  },
];

const takeaways = [
  "Finance pages need clarity before persuasion.",
  "Tight timelines require disciplined scope control.",
  "Loan journeys work better when product paths are separated early.",
  "Launch quality depends on fast alignment between design, development, and content.",
];

const projectSnapshot = [
  {
    label: "Role",
    value: "Led scope, sprint coordination, product flow, QA, and launch readiness",
  },
  {
    label: "Audience",
    value: "Borrowers exploring personal, business, and property loan options",
  },
  {
    label: "Scope",
    value: "Lending website, product journeys, inquiry paths, and launch delivery",
  },
  {
    label: "Timeline",
    value: "One-month end-to-end delivery",
  },
];

const deliveryContext = [
  "Multiple loan products, one simple platform.",
  "Fast delivery without losing clarity in core journeys.",
  "Design, development, content, and QA moving together.",
];

export default function JayostuteCapitalCaseStudy({
  project,
  nextProject,
  previousProject,
}: JayostuteCapitalCaseStudyProps) {
  const experienceMedia = [
    {
      src: "/assets/images/Jayo1.webp",
      alt: "Jayostute Capital lending platform overview",
      fit: "contain",
      caption: "Lending platform overview and brand presentation.",
    },
    {
      src: "/assets/images/jayo2.webp",
      alt: "Jayostute Capital EMI calculator interface",
      fit: "contain",
      caption: "EMI calculator supporting faster loan planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 md:pt-32">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="flex items-center justify-center size-8 rounded-full border border-muted-foreground/20 bg-secondary/5 group-hover:bg-secondary/20 transition-all">
              <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            Back to Case Studies
          </Link>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                Banking & Finance
              </span>
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-foreground font-medium border border-secondary/30">
                Lending Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Jayostute Capital
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-5">
              Lending platform for personal, business, and property loans
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Led the end-to-end delivery of a finance platform, aligning scope, product journeys, design, development, QA, and launch within one month.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-3"
          >
            <Link
              href={project.links.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 w-full rounded-xl bg-foreground text-background font-medium hover:bg-foreground/95 transition-all shadow-sm hover:translate-y-[-1px] group"
            >
              Visit Website
              <ExternalLink className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-20 rounded-2xl overflow-hidden border border-secondary/20 shadow-sm relative aspect-video w-full bg-secondary/5"
        >
          <video
            src="/assets/videos/jayovideo.mp4"
            poster="/assets/images/Jayostute.png"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {projectSnapshot.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-secondary/15 bg-secondary/5 p-5"
            >
              <span className="mb-3 block text-[10px] font-medium uppercase tracking-widest text-primary">
                {item.label}
              </span>
              <p className="text-sm leading-snug text-foreground/75">
                {item.value}
              </p>
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Challenges"
          title="What Made the Launch Complex"
          description="The platform needed to launch quickly while keeping financial product paths clear, credible, and conversion-ready."
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-secondary/15 bg-secondary/5 p-6 transition-colors hover:border-[#4573AA]/30 hover:bg-secondary/10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4573AA]/0 via-[#4573AA]/45 to-[#4573AA]/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#4573AA]/10 text-xs font-medium text-[#4573AA]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-foreground/75 leading-snug">
                  {challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="mb-20 rounded-2xl border border-secondary/15 bg-secondary/5 p-6 md:p-8">
          <SectionIntro
            eyebrow="Delivery Context"
            title="The Constraints That Shaped the Work"
            description="Jayostute needed a credible finance platform delivered fast, without letting speed weaken the product journeys."
            compact
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {deliveryContext.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex gap-3 text-sm leading-snug text-foreground/75"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#4573AA]/10 text-xs font-medium text-[#4573AA]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionIntro
          eyebrow="Solutions"
          title="How the Platform Was Delivered"
          description="The work focused on clear loan journeys, trust-building UX, sprint discipline, and launch readiness."
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {solutions.map((solution, index) => {
            const SolutionIcon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex min-h-[230px] flex-col rounded-2xl border border-secondary/15 bg-secondary/5 p-6 transition-colors hover:border-primary/25 hover:bg-secondary/10"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary/70">
                    <SolutionIcon className="size-4" />
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug">
                  {solution.title}
                </h3>
                <ul className="grid gap-2.5">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm text-muted-foreground leading-snug"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-primary/40 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </section>

        <section
          id="experience-media"
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20"
        >
          {experienceMedia.map((media, index) => (
            <motion.div
              key={`${media.src}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group overflow-hidden rounded-2xl bg-secondary/5 border border-secondary/15"
            >
              <div className="relative h-[520px] md:h-[680px] bg-white overflow-hidden">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    media.fit === "cover" ? "object-cover" : "object-contain p-6"
                  }`}
                />
              </div>
              <p className="border-t border-secondary/15 px-5 py-4 text-sm leading-snug text-foreground/70">
                {media.caption}
              </p>
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Outcomes"
          title="Results & Impact"
          description="The launch delivered a complete finance platform on time, with clearer product journeys and a stronger lending presence."
        />
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="p-6 rounded-2xl bg-secondary/5 border border-secondary/15"
            >
              <span className="text-3xl md:text-4xl font-semibold leading-none text-primary block mb-3">
                {outcome.value}
              </span>
              <h3 className="font-medium text-sm leading-tight text-foreground mb-2">
                {outcome.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-tight">
                {outcome.detail}
              </p>
            </motion.div>
          ))}
        </section>

        <section className="p-6 md:p-8 rounded-2xl bg-secondary/5 border border-secondary/15 mb-20">
          <SectionIntro
            eyebrow="Key Takeaways"
            title="What This Project Reinforced"
            description="The project reinforced that speed works only when scope, trust, and conversion paths stay disciplined."
            compact
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-muted-foreground leading-snug">
            {takeaways.map((takeaway, index) => (
              <div key={takeaway} className="flex gap-3 items-start">
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {previousProject && (
            <CaseStudyNavCard
              direction="Previous"
              project={previousProject}
              icon={<ArrowLeft className="size-4" />}
            />
          )}
          {nextProject && (
            <CaseStudyNavCard
              direction="Next"
              project={nextProject}
              icon={<ArrowRight className="size-4" />}
              align="right"
            />
          )}
        </section>

        <ContactSection />
      </div>
    </div>
  );
}

function CaseStudyNavCard({
  direction,
  project,
  icon,
  align = "left",
}: {
  direction: "Previous" | "Next";
  project: Project;
  icon: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={`group flex min-h-[160px] flex-col justify-between rounded-2xl border border-secondary/15 bg-secondary/5 p-6 transition-colors hover:border-primary/25 hover:bg-secondary/10 ${
        align === "right" ? "text-right items-end" : ""
      }`}
    >
      <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-primary">
        {align === "left" && icon}
        {direction} Case Study
        {align === "right" && icon}
      </span>
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm leading-snug text-muted-foreground max-w-md">
          {project.subTitle || project.description}
        </p>
      </div>
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mb-6" : "mb-8"}>
      <span className="text-[10px] font-medium tracking-widest uppercase text-primary mb-2 block">
        {eyebrow}
      </span>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-2">
        {eyebrow === "Outcomes" && <TrendingUp className="size-5 text-primary" />}
        {eyebrow === "Solutions" && <BriefcaseBusiness className="size-5 text-primary" />}
        {eyebrow === "Key Takeaways" && <Sparkles className="size-5 text-primary" />}
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
        {description}
      </p>
    </div>
  );
}
