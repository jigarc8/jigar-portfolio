"use client";

import { motion } from "framer-motion";

const metrics = [
    {
        label: "Years Experience",
        value: "5+",
    },
    {
        label: "Projects Delivered",
        value: "10+",
    },
    {
        label: "Stakeholder Satisfaction",
        value: "100%",
    },
    {
        label: "Organic Growth",
        value: "80%+",
    },
];

export default function MetricsCounter() {
    return (
        <div className="mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 rounded-2xl border border-secondary/15 bg-background/45 p-3 shadow-sm backdrop-blur-md md:grid-cols-4 md:gap-0 md:divide-x md:divide-secondary/15">
            {metrics.map((metric, index) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex min-h-[112px] flex-col items-center justify-center rounded-xl px-4 py-5 transition-colors hover:bg-secondary/10 md:rounded-none"
                >
                    <motion.span
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                        className="text-3xl font-semibold leading-none bg-gradient-to-tr from-[#0f8fff] to-[#4573AA] bg-clip-text text-transparent md:text-4xl"
                    >
                        {metric.value}
                    </motion.span>
                    <span className="mt-2 max-w-[150px] text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.16em] text-muted-foreground md:text-xs">
                        {metric.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
