'use client'
import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icons } from './icons'
import { Button } from './ui/button'
import { GridPattern } from './ui/grid-pattern'
import MetricsCounter from './metrics-counter'

export default function HeroSection() {
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden py-24 text-center sm:min-h-screen md:py-28"
    >
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <GridPattern
        width={80}
        height={120}
        squares={[
          [0, 3],
          [3, 1],
          [2, 0],
          [7, 2],
          [8, 3],
          [2, 4],
          [6, 4],
        ]}
        strokeDasharray={"4"}
        className={cn(
          "absolute inset-0",
          "[mask-image:radial-gradient(520px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-24%] h-[190%] skew-y-12",
          "opacity-45"
        )}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <Link
            href={siteConfig.links.contactForm}
            className="inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-background/65 px-4 py-2 text-sm font-medium text-foreground/85 shadow-sm backdrop-blur-md transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <span className="relative flex size-2.5">
              <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-70" />
              <span className="relative flex size-2.5 rounded-full bg-green-400"></span>
            </span>
            Open to Technical PM & Digital PM roles
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.08,
            ease: "easeOut",
          }}
          className="mt-8"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
            Project Lead - Certified Scrum Master
          </span>
          <h1 className="font-heading mx-auto max-w-4xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Whatever the Work,
            <span className="block bg-gradient-to-tr from-[#0f8fff] to-[#4573AA] bg-clip-text text-transparent">
              I Get It Done.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.14,
            ease: "easeOut",
          }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Open to Technical Project Manager, Digital Project Manager, and similar delivery-focused roles where design, tech, business, and stakeholders need clear execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.18,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-xl px-7">
            <Link href={siteConfig.links.contactForm}>
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="flex rounded-xl px-7 bg-background/55 backdrop-blur-sm" asChild>
            <a href={siteConfig.links.cvPdf} download>
              Download CV <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl bg-background/55 backdrop-blur-sm" asChild>
            <Link
              href={siteConfig.links.linkedin}
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.24,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
            Technical PM
          </span>
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
            Digital PM
          </span>
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
            Scrum
          </span>
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5">
            Stakeholder Alignment
          </span>
        </motion.div>

        <MetricsCounter />
      </div>
    </section>
  );
}
