"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import {
  ArrowLeft,
  ArrowRight,
  Brush,
  ExternalLink,
  Layers,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Project } from "@/lib/types";

interface KokuyoCamlinCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  previousProject: Project | null;
}

const challenges = [
  "Creating a platform that could serve both community engagement and e-commerce discovery without feeling fragmented.",
  "Helping artists, students, and hobbyists move naturally between inspiration, learning, and product exploration.",
  "Balancing a vibrant creative identity with a shopping experience that stayed clear and easy to use.",
  "Coordinating design and development decisions across content, community, product, and conversion needs.",
  "Supporting high traffic and repeat engagement while keeping the experience approachable across devices.",
  "Turning a legacy creative brand into a more active digital destination for modern users.",
];

const solutions = [
  {
    title: "Community-first Platform Structure",
    icon: Users,
    points: [
      "Structured the experience around artists, learners, and creative discovery.",
      "Connected community content with product pathways instead of treating them separately.",
      "Helped users move from inspiration to exploration with fewer dead ends.",
    ],
  },
  {
    title: "E-commerce Discovery Flow",
    icon: ShoppingBag,
    points: [
      "Organized product exploration around clearer browsing and intent-based actions.",
      "Balanced shopping moments with educational and creative content.",
      "Supported a smoother path from product interest to purchase consideration.",
    ],
  },
  {
    title: "Creative Brand Experience",
    icon: Brush,
    points: [
      "Preserved Camlin’s expressive creative personality in a structured digital format.",
      "Kept the visual system lively while maintaining clarity for repeated browsing.",
      "Translated brand warmth into a more usable and scalable web experience.",
    ],
  },
  {
    title: "Delivery & Growth Coordination",
    icon: TrendingUp,
    points: [
      "Bridged communication between design and technology teams throughout execution.",
      "Aligned platform decisions with engagement and user-growth goals.",
      "Supported launch readiness across content, commerce, and responsive flows.",
    ],
  },
];

const outcomes = [
  {
    value: "8.5L+",
    label: "Visitors in 4 Months",
    detail: "Drove strong early traffic for a community-first e-commerce experience.",
  },
  {
    value: "153%",
    label: "YoY Active User Growth",
    detail: "Improved active-user engagement through a more useful digital platform.",
  },
  {
    value: "Community",
    label: "Artist-led Experience",
    detail: "Built a space that supported inspiration, learning, and brand connection.",
  },
  {
    value: "Commerce",
    label: "Product Discovery",
    detail: "Connected creative content with clearer product exploration pathways.",
  },
  {
    value: "Scalable",
    label: "Platform Structure",
    detail: "Created a foundation that could support content, products, and repeat visits.",
  },
  {
    value: "Aligned",
    label: "Design + Tech Delivery",
    detail: "Improved execution flow between creative requirements and technical delivery.",
  },
];

const takeaways = [
  "Community and commerce work best when the user journey connects inspiration with action naturally.",
  "A creative brand can feel expressive without sacrificing navigation clarity.",
  "Content structure matters as much as visual design for repeat engagement.",
  "Strong coordination between design and tech teams is critical for multi-purpose platforms.",
];

export default function KokuyoCamlinCaseStudy({
  project,
  nextProject,
  previousProject,
}: KokuyoCamlinCaseStudyProps) {
  const experienceMedia = [
    {
      src: "/assets/images/camlin.webp",
      alt: "Kokuyo Camlin digital platform experience",
      fit: "contain",
    },
    {
      src: "/assets/images/camlin2.png",
      alt: "Kokuyo Camlin community commerce interface",
      fit: "contain",

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
                Ecommerce Case Study
              </span>
              <span className="text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/20 text-foreground font-medium border border-secondary/30">
                Community-first Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Kokuyo Camlin
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-5">
              Artist Community and E-commerce Experience
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Built a first-of-its-kind platform that blended creative community engagement with product discovery, helping Camlin become a more active digital destination for artists and learners.
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

        <SectionIntro
          eyebrow="Challenges"
          title="What Made the Platform Complex"
          description="The work needed a careful balance between creative community behavior, product discovery, and scalable e-commerce paths."
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
          title="How the Experience Was Built"
          description="The delivery approach focused on community structure, e-commerce clarity, expressive brand design, and coordinated execution."
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
              <div className={`relative aspect-[4/3] overflow-hidden ${media.fit === "contain" ? "bg-secondary/10 p-4" : "bg-secondary/10"}`}>
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`transition-transform duration-500 group-hover:scale-[1.02] ${media.fit === "cover" ? "object-cover" : "object-contain"}`}
                />
              </div>
            </motion.div>
          ))}
        </section>

        <SectionIntro
          eyebrow="Outcomes"
          title="Results & Impact"
          description="The final platform helped Camlin create a more active digital destination while supporting discovery, engagement, and commerce."
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
            description="The project showed how creative brands can combine community, content, and commerce without making the journey feel scattered."
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
      className={`group flex min-h-[160px] flex-col justify-between rounded-2xl border border-secondary/15 bg-secondary/5 p-6 transition-colors hover:border-primary/25 hover:bg-secondary/10 ${align === "right" ? "text-right items-end" : ""
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
