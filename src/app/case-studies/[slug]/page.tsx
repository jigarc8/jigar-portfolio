"use client";

import React, { use, useMemo } from "react";
import { projectsData } from "@/lib/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield, Layers, Award } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import KokuyoCamlinCaseStudy from "./kokuyo-camlin";
import JayostuteCapitalCaseStudy from "./jayostute-capital";
import MitlDigitalCaseStudy from "./mitl-digital";
import RrpDronesCaseStudy from "./rrp-drones";
import ShapoorjiPallonjiCaseStudy from "./shapoorji-pallonji";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const availableCaseStudySlugs = [
  "kokuyo-camlin",
  "rrp-drones",
  "shapoorji-pallonji",
  "mitl-digital",
  "jayostute-capital",
];

export default function ProjectDetailsPage({ params }: PageProps) {
  const router = useRouter();
  
  // Resolve params promise in App Router client components
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Find current project
  const projectIndex = useMemo(() => {
    return projectsData.findIndex((p) => p.slug === slug);
  }, [slug]);

  const project = useMemo(() => {
    return projectsData[projectIndex] || null;
  }, [projectIndex]);

  // Determine next project for infinite loop navigation
  const nextProject = useMemo(() => {
    if (!project) return null;
    const availableProjects = projectsData.filter((p) =>
      availableCaseStudySlugs.includes(p.slug)
    );
    const availableIndex = availableProjects.findIndex((p) => p.slug === project.slug);
    if (availableIndex === -1) return null;
    const nextIndex = (availableIndex + 1) % availableProjects.length;
    return availableProjects[nextIndex];
  }, [project]);

  const previousProject = useMemo(() => {
    if (!project) return null;
    const availableProjects = projectsData.filter((p) =>
      availableCaseStudySlugs.includes(p.slug)
    );
    const availableIndex = availableProjects.findIndex((p) => p.slug === project.slug);
    if (availableIndex === -1) return null;
    const previousIndex =
      (availableIndex - 1 + availableProjects.length) % availableProjects.length;
    return availableProjects[previousIndex];
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you are looking for does not exist or has been moved.</p>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-all"
        >
          <ArrowLeft className="size-4" /> Go Back Home
        </button>
      </div>
    );
  }

  if (slug === "rrp-drones") {
    return (
      <RrpDronesCaseStudy
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    );
  }

  if (slug === "kokuyo-camlin") {
    return (
      <KokuyoCamlinCaseStudy
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    );
  }

  if (slug === "mitl-digital") {
    return (
      <MitlDigitalCaseStudy
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    );
  }

  if (slug === "shapoorji-pallonji") {
    return (
      <ShapoorjiPallonjiCaseStudy
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    );
  }

  if (slug === "jayostute-capital") {
    return (
      <JayostuteCapitalCaseStudy
        project={project}
        nextProject={nextProject}
        previousProject={previousProject}
      />
    );
  }

  if (!availableCaseStudySlugs.includes(slug)) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl font-semibold mb-4">Case Study Coming Soon</h1>
        <p className="text-muted-foreground mb-8 max-w-xl">
          This inside page is hidden for now while the detailed case study is being prepared.
        </p>
        <Link
          href="/#case-studies"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-all"
        >
          <ArrowLeft className="size-4" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        
        {/* Floating / Top Back Button */}
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

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {project.category !== "Branding and AV/Films" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href={project.links.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-4 w-full sm:w-auto rounded-2xl bg-foreground text-background font-semibold hover:bg-foreground/95 transition-all shadow-xl hover:shadow-primary/5 hover:scale-[1.02]"
                >
                  Visit the Website <ExternalLink className="size-4" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Media Block (Image/Video) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-3xl overflow-hidden border border-secondary/20 shadow-2xl relative aspect-video w-full bg-secondary/5 flex justify-center items-center"
        >
          {project.video ? (
            project.video.includes("vimeo.com") ? (
              <div className="w-full h-full relative">
                <iframe
                  src={`https://player.vimeo.com/video/${project.video.split('/').pop()?.split('?')[0]}?autoplay=1&loop=1&muted=1&background=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <video
                src={`/${project.video}`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <Image
              src={`/${project.img}`}
              alt={project.title}
              width={1920}
              height={1080}
              priority
              className={cn(project.className, "w-full h-full object-cover")}
            />
          )}
        </motion.div>

        {/* Metrics Grid */}
        {project.result && project.result.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-6 tracking-wide uppercase text-muted-foreground/80">
              Key Metrics & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.result.map((res, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  key={index}
                  className="flex flex-col p-6 rounded-2xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm"
                >
                  <span className="text-4xl md:text-5xl font-black text-foreground mb-2">
                    {res.percent}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {res.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Insights & PM Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                As the Project Manager and Strategy Lead, I spearheaded the deployment of this digital milestone, bridging the gap between custom visual design requirements and full-stack system architecture constraints. Through rigorous timeline management, collaborative design sprints, and high-frequency communication protocols, we brought the client's core vision to production smoothly.
              </p>
            </div>

            {project.process && (
              <div className="p-6 md:p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Award className="size-32" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2">
                  <Shield className="size-5" /> PM Execution & Sprints
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base italic">
                  &ldquo;{project.process}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Layers className="size-5" /> Project Metadata
              </h3>
              
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between py-2 border-b border-secondary/20">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold">{project.category}</span>
                </li>
                {project.tools && (
                  <li className="py-2">
                    <span className="text-muted-foreground block mb-2">Core Tools & Tech</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Navigation */}
        {nextProject && (
          <div className="border-t border-secondary/20 pt-12 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                  Next Case Study
                </span>
                <Link
                  href={`/case-studies/${nextProject.slug}`}
                  className="text-2xl font-bold hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  {nextProject.title}
                </Link>
              </div>
              <Link
                href={`/case-studies/${nextProject.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/15 hover:bg-secondary/35 text-foreground font-semibold border border-secondary/25 transition-all hover:scale-105"
              >
                Next Case Study
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
