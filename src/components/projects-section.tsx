"use client";

import React, { useState, useMemo } from "react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { projectsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

const categories = ["All", "Digital (UI/UX & Tech)", "Branding", "AV / Films & Brand Content", "Ecommerce"] as const;


export default function ProjectsSection() {
  const { ref } = useSectionInView("Case Studies");
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      ref={ref}
      id="case-studies"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
          ease: "easeOut",
        }}
      >
        <SectionHeading
          heading="Case Studies"
          content="Here are some of my most recent digital transformation and website projects. Over the years, I’ve successfully managed and delivered numerous initiatives across industries — driving measurable business impact through strategy, design, and execution."
        />
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 p-2 bg-secondary/10 rounded-2xl border border-secondary/20 max-w-fit mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-foreground text-background shadow-lg scale-105"
                : "hover:bg-secondary/30 text-muted-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((data) => (
            <motion.div
              layout
              key={data.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between rounded border p-4 cursor-pointer hover:shadow-lg transition-shadow bg-secondary/5"
            >
              <div className="flex flex-col">
                <div
                  className={`overflow-hidden ${data.bgColor} group relative rounded flex justify-center items-center aspect-video w-full`}
                >
                  {data.video ? (
                    data.video.includes("vimeo.com") ? (
                      <VimeoEmbed videoUrl={data.video} />
                    ) : (
                      <OptimizedVideo videoSrc={data.video} />
                    )
                  ) : (
                    <Image
                      src={`/${data.img}`}
                      alt={data.title}
                      width={500}
                      height={300}
                      className={cn(data.className, "transition-transform duration-500 group-hover:scale-105")}
                    />
                  )}

                  {/* Overlay link for the entire card image area */}
                  <Link
                    href={data.links.preview}
                    aria-label={data.title}
                    target="_blank"
                    className="absolute inset-0 z-10"
                  />
                </div>
                <h3 className="mt-4 mb-2 text-xl font-medium">{data.title}</h3>
                <p className="text-muted-foreground mb-2.5 mt-1">
                  {data.description}
                </p>

                {/* Industry Category Badge */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                    {data.category}
                  </span>
                </div>

                {data.result?.length ? (
                  <ul className="text-muted-foreground mb-5 mt-2.5 text-sm gap-6 flex justify-start items-center">
                    {data.result.map((res, index) => (
                      <React.Fragment key={index}>
                        <li className="w-[45%] flex flex-col justify-center items-start">
                          {res.percent && <p className="font-bold text-foreground">{res.percent}</p>}
                          <p>{res.text}</p>
                        </li>
                        {index !== (data.result?.length ?? 0) - 1 && (
                          <li className="w-0.5 h-10 bg-muted"></li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                ) : null}

                {data.process && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-tighter opacity-80 underline underline-offset-2">PM Process Insight:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-3 italic">
                      {data.process}
                    </p>
                  </div>
                )}

                {data.tools && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {data.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-full bg-secondary text-[11px] font-medium text-secondary-foreground border border-secondary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Badge link={`${data.links.preview}`} variant={"outline"} size={"lg"}>
                Visit the Website
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function OptimizedVideo({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Create intersection observer to lazy load videos
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Only play when in viewport
            videoRef.current.play().catch((error) => {
              console.warn("Video autoplay failed:", error);
            });
          } else if (videoRef.current) {
            // Pause when out of viewport
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: "50px", // Start loading slightly before entering viewport
      }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      loop
      muted
      playsInline
      preload="none" // Don't preload videos to save bandwidth
      className="pointer-events-none mx-auto aspect-video w-full object-cover object-top"
      poster="" // Optional: add a poster image for better UX
    />
  );
}

function VimeoEmbed({ videoUrl }: { videoUrl: string }) {
  // Extract ID from various Vimeo formats
  const videoId = videoUrl.split('/').pop()?.split('?')[0];

  if (!videoId) return null;

  return (
    <div className="w-full h-full relative pointer-events-none">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
