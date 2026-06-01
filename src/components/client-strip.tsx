"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Kokuyo Camlin",
    logo: "/assets/images/camel-logo-transparent.png",
    className: "h-10 w-auto max-w-32",
  },
  {
    name: "Netflix",
    logo: "/assets/images/netflix logo.avif",
    className: "h-8 w-auto max-w-36",
  },
  {
    name: "Shapoorji Pallonji",
    logo: "/assets/images/sp logo.svg",
    className: "h-12 w-auto max-w-40",
  },
  {
    name: "Lidcom",
    logo: "/assets/images/lidcom-new-logo-cropped.png",
    className: "h-10 w-auto max-w-52",
  },
  {
    name: "MITL",
    logo: "/assets/images/mitl black.png",
    darkLogo: "/assets/images/mitl white.png",
    className: "h-16 w-auto max-w-20",
    imageClassName: "",
  },
  {
    name: "MM",
    logo: "/assets/images/mm logo.avif",
    className: "h-10 w-auto max-w-36",
  },
  {
    name: "RRP",
    logo: "/assets/images/rrp logo.avif",
    className: "h-9 w-auto max-w-32",
  },
  {
    name: "Laila Nutra",
    logo: "/assets/images/lailanutra logo.avif",
    className: "h-10 w-auto max-w-36",
  },
  {
    name: "Jayostute Capital",
    logo: "/assets/images/jayo-logo-transparent.png",
    className: "h-10 w-auto max-w-40",
  },
];

const rows = [clients.slice(0, 5), clients.slice(5)];

export default function ClientStrip() {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Worked with teams and brands across sectors
        </motion.p>

        <div className="rounded-2xl border border-secondary/15 bg-secondary/5 px-5 py-8 shadow-sm backdrop-blur-sm">
          <div className="space-y-7">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14"
              >
                {row.map((client) => (
                  <div
                    key={client.name}
                    className="flex min-h-16 min-w-[132px] items-center justify-center rounded-xl px-3 py-2"
                  >
                    {client.darkLogo ? (
                      <>
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={220}
                          height={80}
                          className={`${client.className} object-contain dark:hidden`}
                        />
                        <Image
                          src={client.darkLogo}
                          alt={`${client.name} logo`}
                          width={220}
                          height={80}
                          className={`${client.className} hidden object-contain dark:block`}
                        />
                      </>
                    ) : (
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={220}
                        height={80}
                        className={`${client.className} object-contain ${client.imageClassName || "grayscale brightness-0 dark:invert"}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
