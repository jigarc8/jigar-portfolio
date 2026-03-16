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
        label: "On-Time Launch",
        value: "100%",
    },
    {
        label: "Organic Growth",
        value: "80%+",
    },
];

export default function MetricsCounter() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full max-w-4xl">
            {metrics.map((metric, index) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/20 border border-secondary/30 backdrop-blur-sm"
                >
                    <motion.span
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-[#0f8fff] to-[#d384fa] bg-clip-text text-transparent"
                    >
                        {metric.value}
                    </motion.span>
                    <span className="text-xs md:text-sm text-muted-foreground mt-1 font-medium text-center uppercase tracking-wider">
                        {metric.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
