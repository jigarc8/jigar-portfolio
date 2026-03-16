"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { Icons } from "./icons";

const skills = [
  {
    title: "Project Leadership",
    icon: "briefcase",
    description: "Driving project success through strategic leadership and orchestration.",
    items: [
      "Client servicing",
      "Project planning",
      "Resource management",
      "Team coordination",
    ],
  },
  {
    title: "Product & Tools",
    icon: "star",
    description: "Expert level proficiency in industry-standard management frameworks.",
    items: ["Jira", "Zoho Projects", "Trello", "GanttPro", "Notion", "Slack"],
  },
  {
    title: "Digital Ecosystem",
    icon: "building",
    description: "Building and managing scalable digital presences across platforms.",
    items: ["WordPress", "Shopify", "Framer", "Cpanel", "Vercel"],
  },
  {
    title: "Design & Growth",
    icon: "download",
    description: "Optimizing user experience and driving organic visibility.",
    items: ["Figma", "Adobe XD", "SEO"],
  },
  {
    title: "SEO Skills",
    icon: "preview",
    description: "Comprehensive search engine optimization and analytics suite.",
    items: [
      "On Page SEO",
      "Technical SEO",
      "Google Keyword Planner",
      "Google Analytics",
      "Google search Console",
      "Microsoft Clarity",
    ],
  },
  {
    title: "Tech Skills",
    icon: "arrowRight",
    description: "Modern technical stack for high-performance web applications.",
    items: ["HTML", "CSS", "React JS", "Vercel", "Git", "Cpanel", "AWS"],
  },
  {
    title: "AI Tools",
    icon: "moon",
    description: "Leveraging cutting-edge AI tools to enhance team productivity.",
    items: ["Antigravity", "Google Flow", "Perplexity", "Midjourney"],
  },
];

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <>
      <motion.section
        ref={ref}
        id="about"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, ease: "easeOut" }}
        className="my-10 flex w-full flex-col items-center md:mb-20"
      >
        <SectionHeading heading="About Me" />
        <div className="-mt-5 max-w-2xl text-center leading-7">
          <p
            style={{ fontSize: "clamp(1rem, 0.951rem + 0.22vw, 1.125rem)" }}
            className="mb-0"
          >
            I'm a Certified ScrumMaster with 5+ years of experience managing digital projects, websites, and product teams. I enjoy working at the intersection of design, technology, and business — helping teams transform ideas into scalable digital experiences.
          </p>
          {/* <p>
            <Link
              className="underline-offset-4 hover:underline"
              href={siteConfig.links.contactForm}
            >
              contact
            </Link>{" "}
            me.
          </p> */}
        </div>
        {/* <div className="flex flex-wrap gap-2">
          {skillsData.map((skill) => (
            <Badge key={skill.name} variant={"outline"} size={"lg"}>
              {skill.name}
            </Badge>
          ))}
        </div> */}
        {/* <Skills /> */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="@container w-full h-fit flex flex-col items-center"
        >
          <div
            className="
              mt-8 grid w-full max-w-7xl
              grid-cols-1 md:grid-cols-6
              md:grid-rows-2
              gap-3 md:gap-4
              md:justify-stretch
            "
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  group relative flex flex-col justify-between rounded-2xl border 
                  bg-gradient-to-br p-6
                  backdrop-blur-sm
                  border-foreground/10
                  from-foreground/5
                  to-transparent
                  hover:border-primary/30 
                  hover:bg-foreground/[0.04]
                  transition-all duration-300
                  ${index === 0
                    ? "md:col-span-3 md:row-span-1"
                    : "md:col-span-3 lg:col-span-2"
                  }
                `}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <SkillIcon name={category.icon} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="
                          inline-flex items-center rounded-md border 
                          px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm
                          border-foreground/5
                          bg-foreground/[0.03]
                          text-foreground/80
                          group-hover:border-primary/20
                          transition-colors
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

function SkillIcon({ name }: { name: string }) {
  const Icon = Icons[name as keyof typeof Icons];
  if (!Icon) return null;
  return <Icon className="size-5" />;
}
