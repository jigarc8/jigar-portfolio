"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ExternalLink,
  Layers,
  Map,
  Network,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Project } from "@/lib/types";

interface MitlDigitalCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  previousProject: Project | null;
}

const challenges = [
  "Explain a large industrial township without dense institutional language.",
  "Serve investors, businesses, civic stakeholders, and internal teams from one platform.",
  "Make infrastructure, utilities, location value, and township planning easier to scan.",
  "Balance government credibility with a modern, usable experience.",
  "Keep brand, content, design, and implementation decisions aligned.",
  "Improve engagement and response speed without adding journey complexity.",
];

const solutions = [
  {
    title: "Clearer Information Architecture",
    icon: Map,
    points: [
      "Reorganized township, infrastructure, and utility content.",
      "Prioritized key modules before inquiry-driven actions.",
      "Made planning information easier to scan and revisit.",
    ],
  },
  {
    title: "Trust-led Digital Presentation",
    icon: Building2,
    points: [
      "Created a cleaner state-led platform experience.",
      "Balanced authority, simplicity, and visual restraint.",
      "Used calmer layouts to communicate infrastructure value.",
    ],
  },
  {
    title: "Stakeholder Journey Mapping",
    icon: Users,
    points: [
      "Mapped priority audiences to clearer pathways.",
      "Separated investor, business, and civic needs.",
      "Gave repeat visitors faster routes to relevant information.",
    ],
  },
  {
    title: "End-to-end Delivery Alignment",
    icon: Network,
    points: [
      "Coordinated brand, UX, content, and implementation.",
      "Kept feedback and dependencies moving through one review rhythm.",
      "Protected communication goals through launch.",
    ],
  },
];

const outcomes = [
  {
    value: "65%",
    label: "User Engagement",
    detail: "Reported post-launch lift after simplifying discovery paths.",
  },
  {
    value: "30%",
    label: "Faster Response",
    detail: "Reported improvement after reducing information and action friction.",
  },
  {
    value: "Lower",
    label: "Bounce Rate",
    detail: "Reduced drop-offs by making key paths easier to understand.",
  },
  {
    value: "3",
    label: "Priority Audience Groups",
    detail: "Structured around investors, businesses, and civic stakeholders.",
  },
  {
    value: "1",
    label: "Unified Delivery Track",
    detail: "Connected brand, UX, content, and implementation into one rollout.",
  },
  {
    value: "Clearer",
    label: "Infrastructure Story",
    detail: "Made township planning, utilities, and location value easier to scan.",
  },
];

const takeaways = [
  "Strong hierarchy matters before visual polish.",
  "Trust comes from clarity, restraint, and consistency.",
  "Engagement improves when each audience finds its path quickly.",
  "Transformation works when brand, content, UX, and technology move together.",
];

const projectSnapshot = [
  {
    label: "Role",
    value: "Led stakeholder alignment, content structure, UX direction, delivery tracking, QA, and launch coordination",
  },
  {
    label: "Audience",
    value: "Investors, businesses, civic stakeholders, and institutional teams",
  },
  {
    label: "Scope",
    value: "Website experience, information architecture, stakeholder journeys, and launch alignment",
  },
  {
    label: "Success Focus",
    value: "Higher engagement, faster response, clearer infrastructure communication",
  },
];

const deliveryContext = [
  "Multiple stakeholder groups, one shared platform.",
  "Institutional credibility with direct business communication.",
  "Brand, UX, content, and implementation kept in sync.",
];

export default function MitlDigitalCaseStudy({
  project,
  nextProject,
  previousProject,
}: MitlDigitalCaseStudyProps) {
  const experienceMedia = [
    {
      src: "/assets/images/mitl1.avif",
      alt: "MITL digital platform experience",
      fit: "contain",
      caption: "Desktop infrastructure and safety modules.",
    },
    {
      src: "/assets/images/mitl2.avif",
      alt: "MITL stakeholder information experience",
      fit: "contain",
      caption: "Mobile utility and civic infrastructure discovery.",
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
                Digital Transformation
              </span>
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-foreground font-medium border border-secondary/30">
                Industrial Township Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              MITL Digital Transformation
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-5">
              Stakeholder-centric platform for a state-led industrial township
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Led the digital transformation of MITL's industrial township platform, turning complex infrastructure and stakeholder information into a clearer web experience.
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
          <Image
            src={`/${project.img}`}
            alt={project.title}
            width={1920}
            height={1080}
            priority
            className="h-full w-full object-cover"
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
          title="What Made the Platform Complex"
          description="The work was about translating a large public infrastructure initiative into a journey different stakeholders could use quickly."
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
            description="The project had to balance institutional seriousness, stakeholder diversity, and practical delivery realities."
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
          title="How the Platform Was Improved"
          description="The approach clarified the information model, shaped stakeholder journeys, and kept delivery aligned through launch."
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
              <div className="relative h-[520px] md:h-[680px] bg-secondary/10 overflow-hidden">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    media.fit === "cover" ? "object-cover" : "object-contain"
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
          description="Reported post-launch indicators showed stronger engagement, faster response, and a clearer platform foundation."
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
            description="The project reinforced that clarity, trust, stakeholder needs, and delivery alignment have to move together."
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
  id,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
  compact?: boolean;
}) {
  return (
    <div id={id} className={compact ? "mb-6" : "mb-8"}>
      <span className="text-[10px] font-medium tracking-widest uppercase text-primary mb-2 block">
        {eyebrow}
      </span>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center gap-2">
        {eyebrow === "Outcomes" && <TrendingUp className="size-5 text-primary" />}
        {eyebrow === "Solutions" && <Layers className="size-5 text-primary" />}
        {eyebrow === "Key Takeaways" && <Sparkles className="size-5 text-primary" />}
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
        {description}
      </p>
    </div>
  );
}
