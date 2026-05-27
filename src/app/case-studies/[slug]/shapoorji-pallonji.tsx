"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Home,
  MousePointerClick,
  Search,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Project } from "@/lib/types";

interface ShapoorjiPallonjiCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  previousProject: Project | null;
}

const challenges = [
  "Helping users explore real estate offerings clearly without overwhelming them with dense property information.",
  "Reducing friction between project discovery, interest building, and qualified inquiry submission.",
  "Presenting a premium real estate brand through a digital experience that felt refined, trustworthy, and easy to navigate.",
  "Improving mobile browsing for high-intent users comparing locations, project details, and lifestyle value.",
  "Creating a clearer path from project storytelling to lead-generation actions.",
  "Balancing visual polish with practical performance and content discoverability.",
];

const solutions = [
  {
    title: "Property Discovery Flow",
    icon: Search,
    points: [
      "Structured browsing paths around project exploration, location context, and buyer intent.",
      "Reduced cognitive load by separating discovery content from action-oriented inquiry moments.",
      "Improved navigation clarity for users comparing multiple real estate options.",
    ],
  },
  {
    title: "Lead-focused UX Strategy",
    icon: MousePointerClick,
    points: [
      "Mapped inquiry touchpoints around moments where users had enough context to act.",
      "Aligned page hierarchy with qualified lead-generation goals.",
      "Balanced conversion prompts with a premium, non-intrusive browsing experience.",
    ],
  },
  {
    title: "Premium Visual Presentation",
    icon: Home,
    points: [
      "Supported a polished brand experience for residential real estate exploration.",
      "Kept content presentation spacious, scannable, and trust-oriented.",
      "Helped translate lifestyle and property value into a calmer digital journey.",
    ],
  },
  {
    title: "Responsive Optimization",
    icon: Smartphone,
    points: [
      "Prioritized mobile readability for users browsing projects on the move.",
      "Checked interaction consistency across key viewport sizes.",
      "Supported smoother inquiry behavior across desktop and mobile journeys.",
    ],
  },
];

const outcomes = [
  {
    value: "2.3x",
    label: "Increase in Leads",
    detail: "Improved qualified inquiry generation through a clearer user journey.",
  },
  {
    value: "Clearer",
    label: "Property Discovery",
    detail: "Made it easier for users to understand offerings and move through project content.",
  },
  {
    value: "Mobile-first",
    label: "Inquiry Path",
    detail: "Supported high-intent browsing and inquiry behavior across smaller screens.",
  },
  {
    value: "Premium",
    label: "Brand Presentation",
    detail: "Created a calmer, more polished experience for a trusted real estate brand.",
  },
  {
    value: "Focused",
    label: "Conversion Journey",
    detail: "Connected property storytelling with lead actions in a more natural flow.",
  },
  {
    value: "Streamlined",
    label: "Exploration Experience",
    detail: "Reduced browsing friction across project, location, and lifestyle information.",
  },
];

const takeaways = [
  "Real estate UX needs clarity before decoration because users compare details quickly.",
  "Lead capture works best when it appears after enough context has been built.",
  "Mobile behavior is central to property discovery and inquiry quality.",
  "Premium brands benefit from restrained layouts that build trust through calm hierarchy.",
];

export default function ShapoorjiPallonjiCaseStudy({
  project,
  nextProject,
  previousProject,
}: ShapoorjiPallonjiCaseStudyProps) {
  const experienceMedia = [
    {
      src: "/assets/images/shapoorji.png",
      alt: "Shapoorji Pallonji website experience",
      fit: "cover",
    },
    {
      src: "/assets/images/shapoorji-full-projects-screenshot.png",
      alt: "Shapoorji Pallonji project listing experience",
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
                Real Estate Case Study
              </span>
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-foreground font-medium border border-secondary/30">
                Lead-generation Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Shapoorji Pallonji
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-5">
              Real Estate Digital Experience for Modern Property Exploration
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Built a clearer real estate discovery journey that helped users explore premium projects, understand value faster, and move toward qualified inquiry with less friction.
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
            src="/assets/videos/shapoorji-banner.mp4"
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
          title="What Made the Experience Complex"
          description="The work needed a careful balance of premium brand presentation, clear property discovery, and lead-generation paths that did not interrupt exploration."
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

        <SectionIntro
          eyebrow="Solutions"
          title="How the Journey Was Improved"
          description="The delivery approach focused on clearer property journeys, better inquiry moments, restrained premium styling, and responsive browsing."
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
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Outcomes"
          title="Results & Impact"
          description="The final experience strengthened digital property exploration while improving the path from browsing to inquiry."
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
            </motion.div>
          ))}
        </section>

        <section className="p-6 md:p-8 rounded-2xl bg-secondary/5 border border-secondary/15 mb-20">
          <SectionIntro
            eyebrow="Key Takeaways"
            title="What This Project Reinforced"
            description="The project reinforced that real estate journeys need clarity, calm hierarchy, and conversion paths that respect user intent."
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
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
        {description}
      </p>
    </div>
  );
}
