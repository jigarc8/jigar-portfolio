"use client";

import { motion } from "framer-motion";
import { Icons } from "./icons";

const lifecycleSteps = [
    {
        title: "Discovery & Planning",
        description: "Initial requirement gathering, defining project scope, and creating comprehensive PRDs. Aligning with business stakeholders on goals and KPIs.",
        icon: "briefcase",
    },
    {
        title: "Strategy & Research",
        description: "Driving UX research and defining technical architecture. Building roadmaps that balance business value with technical feasibility.",
        icon: "star",
    },
    {
        title: "Execution & Coordination",
        description: "Leading cross-functional teams through Agile sprints. Orchestrating seamless collaboration between Design, Tech, and Business units.",
        icon: "calendar",
    },
    {
        title: "Quality & Launch",
        description: "Managing UAT cycles, performance stress-testing, and final deployment orchestration for a 100% on-time launch rate.",
        icon: "download",
    },
    {
        title: "Growth & Iteration",
        description: "Analyzing post-launch data, driving SEO growth, and prioritizing the feature backlog for continuous product improvement.",
        icon: "arrowRight",
    },
];

export default function ProjectLifecycle() {
    return (
        <section className="py-24 w-full">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-wider italic">Professional PM Lifecycle</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#0f8fff] to-[#d384fa] rounded-full" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Connection Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                    {lifecycleSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Box */}
                            <div className="w-full md:w-[45%] p-6 rounded-2xl bg-secondary/5 border border-secondary/20 backdrop-blur-sm hover:border-primary/30 transition-colors shadow-sm">
                                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-3">
                                    <span className="md:hidden p-2 rounded-lg bg-primary/10 text-primary">
                                        <LifecycleIcon name={step.icon} />
                                    </span>
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>

                            {/* Center Icon (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 size-12 items-center justify-center rounded-full bg-background border-4 border-secondary/20 text-primary shadow-xl">
                                <LifecycleIcon name={step.icon} />
                            </div>

                            {/* Spacer for Desktop */}
                            <div className="hidden md:block w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function LifecycleIcon({ name }: { name: string }) {
    const Icon = (Icons as any)[name];
    if (!Icon) return null;
    return <Icon className="size-5" />;
}
