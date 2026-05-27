"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  ExternalLink,
  Eye,
  Gauge,
  Laptop,
  Palette,
  Zap,
} from "lucide-react";
import { Project } from "@/lib/types";

interface RrpDronesCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  previousProject: Project | null;
}

const challenges = [
  "Managing and optimizing 3600+ high-resolution image assets and interaction sequences across multiple sections.",
  "Maintaining smooth rendering performance across Safari, iOS, and lower-performance devices.",
  "Handling interaction-heavy animations without compromising responsiveness and load times.",
  "Coordinating continuous iterations between UI/UX, motion graphics, and development teams.",
  "Ensuring consistency across desktop, tablet, and mobile breakpoints during interaction-heavy user journeys.",
  "Balancing cinematic storytelling with technical scalability and delivery timelines.",
];

const solutions = [
  {
    title: "Asset System & Optimization",
    icon: Compass,
    points: [
      "Structured 3600+ visual assets into an organized production workflow.",
      "Coordinated compression, format conversion, and delivery pipelines.",
      "Reduced rendering bottlenecks before they affected the live experience.",
    ],
  },
  {
    title: "Sprint & Stakeholder Coordination",
    icon: Palette,
    points: [
      "Managed sprint execution between design, motion, and development teams.",
      "Led milestone tracking, feedback loops, and priority alignment.",
      "Kept creative ambition connected to practical delivery timelines.",
    ],
  },
  {
    title: "Performance-first Experience",
    icon: Laptop,
    points: [
      "Prioritized performance optimization alongside visual execution.",
      "Improved loading efficiency for scroll-heavy and interaction-heavy sections.",
      "Coordinated Safari, iOS, and lower-device performance checks.",
    ],
  },
  {
    title: "Responsive QA & Launch",
    icon: Gauge,
    points: [
      "Structured QA across desktop, tablet, and mobile breakpoints.",
      "Improved interaction consistency for touch and scroll behavior.",
      "Managed final deployment coordination and production stability.",
    ],
  },
];

const awardRecognitionUrl =
  "https://kyooriusdesign2025.awardsengine.com/?action=ows:entries.details&e=192124&project_year=2025";

const outcomes = [
  {
    value: "40%",
    label: "Lighthouse Performance Boost",
    detail: "Improved performance after asset and rendering optimization.",
  },
  {
    value: "60%",
    label: "UX Interaction Smoothness",
    detail: "Improved scroll and animation responsiveness.",
  },
  {
    value: "3600+",
    label: "Assets Structured & Optimized",
    detail: "Converted and organized large visual sequences for scalable delivery.",
  },
  {
    value: "Responsive",
    label: "Multi-device Experience",
    detail: "Delivered consistent interaction quality across key breakpoints.",
  },
  {
    value: "Kyoorius '25",
    label: "Design Awards Recognition",
    detail: "Shortlisted for high-fidelity interactive storytelling.",
    ctaHref: awardRecognitionUrl,
    ctaLabel: "See Award Recognition",
  },
  {
    value: "4 Months",
    label: "End-to-End Timeline",
    detail: "Managed complete delivery from design sprints to production launch.",
  },
];

const takeaways = [
  "Performance planning must begin during early production stages for animation-heavy platforms.",
  "Structured asset systems significantly improve scalability and optimization workflows.",
  "Continuous QA across devices is critical for interaction-driven experiences.",
  "Cross-functional collaboration between motion, UI/UX, and development teams directly impacts delivery efficiency.",
];

export default function RrpDronesCaseStudy({
  project,
  nextProject,
  previousProject,
}: RrpDronesCaseStudyProps) {
  const experienceMedia = [
    {
      type: "image",
      src: "/assets/images/drone-kda.avif",
      alt: "RRP Drones Kyoorius Design Awards recognition",
      fit: "contain",
    },
    {
      type: "image",
      src: "/assets/images/drone-image-1.avif",
      alt: "RRP Drones experience screen",
      fit: "cover",
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
                Flagship Case Study
              </span>
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-foreground font-medium border border-secondary/30">
                Drone-Tech Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              RRP Drones
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-5">
              Interactive Product Experience for India’s Drone-Tech Ecosystem
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Delivered an immersive scroll-driven digital platform showcasing advanced drone technology through cinematic storytelling, high-performance interactions, and optimized visual systems.
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
              View Live Website
              <ExternalLink className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={awardRecognitionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 w-full rounded-xl bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/15 transition-all hover:translate-y-[-1px]"
            >
              See Award Recognition
              <ExternalLink className="size-4" />
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
            src="/assets/videos/drone-video-banner.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster={`/${project.img}`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <SectionIntro
          eyebrow="Challenges"
          title="What Made the Build Complex"
          description="The work required a balance of cinematic storytelling, fast-loading visual systems, and practical delivery coordination across multiple teams."
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-secondary/15 bg-secondary/5 p-5 transition-colors hover:border-[#4573AA]/30 hover:bg-secondary/10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4573AA]/0 via-[#4573AA]/45 to-[#4573AA]/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#4573AA]/10 text-xs font-medium text-[#4573AA]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Solutions"
          title="How the Experience Was Delivered"
          description="The delivery approach focused on asset structure, sprint clarity, performance-first decisions, responsive QA, and a controlled launch workflow."
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
              key={`${media.type}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group overflow-hidden rounded-2xl bg-secondary/5 border border-secondary/15"
            >
              <div className="relative aspect-square bg-secondary/10 overflow-hidden">
                <Image
                  src={media.src || `/${project.img}`}
                  alt={media.alt}
                  width={1200}
                  height={1400}
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    media.fit === "cover" ? "object-cover" : "object-contain"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Outcomes"
          title="Results & Impact"
          description="The final platform strengthened the brand’s digital presence while improving performance, responsiveness, and interaction quality."
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
              <span className="text-3xl md:text-4xl font-semibold text-primary block mb-3">
                {outcome.value}
              </span>
              <h3 className="font-medium text-sm text-foreground mb-2">
                {outcome.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                {outcome.detail}
              </p>
              {"ctaHref" in outcome && outcome.ctaHref && (
                <Link
                  href={outcome.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {outcome.ctaLabel}
                  <ExternalLink className="size-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </section>

        <section className="p-6 md:p-8 rounded-2xl bg-secondary/5 border border-secondary/15 mb-20">
          <SectionIntro
            eyebrow="Takeaways"
            title="What This Project Reinforced"
            description="The project clarified how early performance planning and tight delivery systems shape the quality of immersive digital products."
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
        {eyebrow === "Challenges" && <Zap className="size-5 text-primary" />}
        {eyebrow === "Takeaways" && <Eye className="size-5 text-primary" />}
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
        {description}
      </p>
    </div>
  );
}
