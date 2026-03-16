"use client";

import React from "react";
import { motion } from "framer-motion";

const tools = [
    { name: "Jira", category: "Bug Tracking" },
    { name: "Zoho Projects", category: "Project & Task Management" },
    { name: "Trello", category: "Task Tracking" },
    { name: "GanttPro", category: "Project Planning and Gantt Charts" },
    { name: "Notion", category: "Documentation & Notes" },
];

export default function ToolkitCarousel() {
    // Duplicate tools to create a seamless loop
    const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

    return (
        <div className="w-full py-12 overflow-hidden bg-secondary/5 border-y border-secondary/10 relative">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 mb-8">
                <h2 className="text-xl font-semibold opacity-50 uppercase tracking-[0.1em] text-center">
                    Project management Tools
                </h2>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedTools.map((tool, index) => (
                        <div
                            key={`${tool.name}-${index}`}
                            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-background/50 border border-secondary/20 shadow-sm"
                        >
                            <span className="text-lg md:text-xl font-bold bg-gradient-to-tr from-foreground to-foreground/50 bg-clip-text text-transparent">
                                {tool.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground border-l border-muted-foreground/30 pl-3">
                                {tool.category}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient overlays for smooth fading at edges */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </div>
    );
}
