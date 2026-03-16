import { Experience, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Case Studies",
    href: "#case-studies",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    img: "assets/images/stuvio.png",
    title: "Stuvio",
    bgColor: "bg-white",
    className: "bg-white w-[90%] h-auto object-cover object-center",
    subTitle: "Digital Agency",
    result: [
      { percent: "50%", text: "Increase in Business Leads" },
      { percent: "70%", text: "Increase in Job Applications" },
    ],
    description:
      "Optimized digital operations and delivery workflows for a design-led agency, improving project execution, visibility, and inbound business opportunities.",
    links: {
      preview: "https://www.stuvio.co",
      github: "#",
      githubApi: "#",
    },
    tools: ["Digital Agency"],
    process: "Led agile transformation across teams, streamlined project workflows, coordinated 10+ concurrent workstreams, and improved the agency’s digital presence to drive inbound leads and hiring traction.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/jayostute.png",
    title: "Jayostute Capital",
    bgColor: "bg-white",
    className: "w-[90%] h-auto object-cover object-center",
    subTitle: "Banking & Finance",
    result: [
      { percent: "100%", text: "On-Time Delivery" },
      { percent: "1 Month", text: "End-to-End Launch" },
    ],
    description:
      "Delivered a full-scale lending platform enabling customers to explore loan products and initiate digital applications across multiple financial services.",
    links: {
      preview: "https://www.jayostute.com/",
      github: "#",
      githubApi: "#",
    },
    tools: ["Banking & Finance"],
    process:
      "Managed product scope and coordinated design-development sprints to deliver a structured loan journey for multiple financial products including personal, business, and property loans.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/mitl.avif",
    title: "MITL Digital Transformation",
    bgColor: "bg-white",
    className: "",
    subTitle: "Industrial Township Platform",
    result: [
      { percent: "65%", text: "User Engagement" },
      { percent: "30%", text: "Faster Response" },
    ],
    description:
      "Streamlining digital presence and enhancing stakeholder engagement for a state-led industrial township",
    links: {
      preview: "https://www.mitl.org.in",
      github: "#",
      githubApi: "#",
    },
    tools: ["Corporate/Government/Real Estate"],
    process: "Orchestrated end-to-end SDLC for a government-led industrial platform, aligning branding, website design, and digital systems to communicate large-scale infrastructure initiatives.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/camlin.webp",
    title: "Kokuyo Camlin",
    bgColor: "bg-white",
    className: "scale-y-90",
    subTitle: "Industrial Township Platform",
    result: [
      { percent: "8.5L+", text: "Visitors in 4 months" },
      { percent: "153%", text: "YoY increase in active users" },
    ],
    description:
      "Working together, we built a first-of-its-kind artist platform that blends a vibrant community space with an e-commerce store.",
    links: {
      preview: "https://www.kokuyocamlin.com/camel/",
      github: "#",
      githubApi: "#",
    },
    tools: ["Ecommerce"],
    process: "Bridged communication between design and tech teams to deliver a landmark community-first e-commerce experience.",
    category: "Ecommerce",
  },
  {
    img: "assets/images/drone.avif",
    bgColor: "bg-white",
    title: "RRP Drones – Interactive Product Experience",
    className: "",
    subTitle: "Aerospace & Drone Technology",
    result: [
      { percent: "3600+", text: "Assets Managed" },
      { percent: "Smooth 60 FPS", text: "Optimized Performance" },
    ],
    description:
      "Delivered an immersive scroll-driven product experience website showcasing drone technology with high-resolution visuals and interactive storytelling.",
    links: {
      preview: "https://www.rrpdrones.com",
      github: "#",
      githubApi: "#",
    },
    tools: ["Aerospace / Drone Technology"],
    process: "Led cross-functional coordination between design and development teams to manage 3600+ heavy assets, resolved rendering and loading bottlenecks, and optimized performance to deliver a seamless interactive experience across devices.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/electronics.avif",
    title: "RRP Electronics",
    bgColor: "bg-black",
    className: "w-auto h-full",
    subTitle: "Digital Platform Launch",
    result: [{ percent: "120%", text: "User Acquisition" }],
    description:
      "Orchestrated a multi-channel digital launch for consumer electronics.",
    links: {
      preview: "https://www.rrpelectronics.com",
      github: "#",
      githubApi: "#",
    },
    tools: ["Corporate"],
    process: "Orchestrated a fast-paced multi-channel launch, ensuring brand consistency across defense and consumer electronics divisions.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/defense.avif",
    title: "RRP Defense Website",
    bgColor: "bg-white",
    className: "h-full w-auto",
    subTitle: "Corporate Website",
    result: [{ percent: "100%", text: "On-Time Delivery" }],
    description:
      "Developed a secure and modern business website to strengthen brand credibility and client communication.",
    links: {
      preview: "https://www.rrpdefense.com",
      github: "#",
      githubApi: "#",
    },
    tools: ["Corporate/Defence"],
    process: "Ensured 100% on-time delivery for a high-security defense sector website, managing strict compliance and stakeholder approval cycles.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/shapoorji.png",
    title: "Shapoorji Pallonji",
    bgColor: "bg-[#fff]",
    className: "h-full w-auto",
    subTitle: "Real Estate",
    result: [{ percent: "2.3x", text: "Increase in leads " }],
    description:
      "Building a seamless digital experience for modern real estate exploration.",
    links: {
      preview: "https://shapoorjirealestate.com/",
      github: "#",
      githubApi: "#",
    },
    tools: ["Real Estate"],
    process: "Strategic lead for real estate digital transformation, focusing on funnel optimization and high-quality lead capture workflows.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/mm.png",
    title: "Magnetic Maharashtra",
    bgColor: "bg-[#fff]",
    className: "w-[90%] h-auto",
    subTitle: "Summit Website",
    description:
      "Currently in final development phase — focused on performance, scalability, and user experience for the upcoming launch.",
    links: {
      preview: "https://mm-opal.vercel.app",
      github: "#",
      githubApi: "#",
    },
    tools: ["Corporate/Government"],
    process: "Leading the final stretch of development for a massive summit portal, focusing on performance stress-testing and last-mile quality assurance.",
    category: "Digital (UI/UX & Tech)",
  },
  {
    img: "assets/images/stuvio.png",
    title: "Brand Identity: Stuvio",
    bgColor: "bg-white",
    className: "w-[80%] h-auto",
    subTitle: "Identity & Visual Strategy",
    description:
      "Led the comprehensive branding effort for a design-forward digital studio, ensuring a cohesive voice across all touchpoints.",
    links: {
      preview: "https://www.stuvio.co",
      github: "#",
      githubApi: "#",
    },
    tools: ["Figma", "Illustrator", "Slack", "Google Workspace"],
    process: "Managed the end-to-end creative process from moodboarding and typeface selection to final brand guidelines and implementation.",
  },
  {
    img: "assets/images/electronics.avif",
    video: "assets/videos/Revised Vimananu_Av.mp4",
    title: "RRP Group – Corporate AV & Brand Films",
    bgColor: "bg-black",
    className: "w-full h-full object-cover",
    subTitle: "Aerospace / Electronics Technology",
    result: [
      { percent: "3", text: "Group Companies Featured" },
      { percent: "10+", text: "AV & Visual Assets Produced" },
    ],
    description:
      "Produced a corporate AV for the RRP Group, highlighting the innovation and capabilities of RRP Electronics, RRP Drones, and RRP Vimananu.",
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
    tools: ["Aerospace / Electronics Technology"],
    process: "Managed end-to-end AV production across multiple business units—coordinating scripting, storyboarding, editing, and stakeholder approvals to create a unified brand narrative for the entire RRP Group.",
    category: "AV / Films & Brand Content",
  },
  {
    img: "assets/images/electronics.avif",
    video: "https://vimeo.com/1174022343",
    title: "RRP Electronics – Process AV",
    bgColor: "bg-white",
    className: "w-full h-full object-cover",
    subTitle: "Electronics Manufacturing",
    result: [
      { percent: "1", text: "Manufacturing Process Film" },
      { percent: "5+", text: "Production Stages Showcased" },
    ],
    description:
      "Produced a process AV showcasing the advanced manufacturing workflows and capabilities of RRP Electronics’ precision electronics production.",
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
    tools: ["Electronics Manufacturing"],
    process: "Managed scripting, filming coordination, and post-production to translate complex electronics manufacturing processes into clear visual storytelling.",
    category: "AV / Films & Brand Content",
  },
  {
    img: "assets/images/defense.avif",
    video: "https://vimeo.com/1174022037",
    title: "LIDCOM – Branding & Corporate Film",
    bgColor: "bg-white",
    className: "h-full w-auto",
    subTitle: "Government / Social Enterprise",
    result: [
      { percent: "1", text: "Corporate Brand Film" },
      { percent: "1", text: "Brand Identity System" },
    ],
    description:
      "Delivered branding and a corporate film to strengthen LIDCOM’s public communication and highlight its development initiatives.",
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
    tools: ["Government / Social Enterprise"],
    process: "Coordinated branding strategy, creative design, and film production to create a cohesive brand narrative across visual and video assets.",
    category: "AV / Films & Brand Content",
  },
  {
    img: "assets/images/stuvio.png",
    video: "https://vimeo.com/1174022783",
    title: "Alviolife – Laila Nutra Product Film",
    bgColor: "bg-white",
    className: "w-[80%] h-auto",
    subTitle: "Health & Wellness",
    result: [
      { percent: "1", text: "Product Film Delivered" },
      { percent: "Multiple", text: "Marketing Assets Created" },
    ],
    description:
      "Produced a product showcase video for Laila Nutra by Alviolife, highlighting key benefits and positioning the brand in the wellness market.",
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
    tools: ["Health & Wellness"],
    process: "Led concept development, production coordination, and post-production to deliver a product-focused film optimized for digital marketing.",
    category: "AV / Films & Brand Content",
  },
] as const;


export const experiencesData: Experience[] = [
  {
    title: "Project Lead",
    company: "Stuvio Digital",
    description:
      "Delivered 10+ digital projects across technology, logistics, real estate, education, and service industries, tailoring strategies to client goals and user needs. \n\n Collaborated with UI/UX designers, developers, and SEO specialists to create user-centric digital experiences and optimize product performance \n\n Led AI-driven product initiatives, managing timelines, features, and user journeys for tools like Brello and other automation-based applications \n\n Oversaw operations and resource planning, including workflow optimisation, software management, and technical troubleshooting \n\n Contributed to SEO growth for Stuvio and its clients, improving organic traffic by 80%+ and achieving top-page Google rankings for multiple high-competition keywords, resulting in measurable performance gains.",
    period: "Aug 2025 – Present",
    // technologies: ['React', 'TypeScript', 'AWS', 'GraphQL', 'Kubernetes'],
  },
  {
    title: "Project Lead",
    company: "Boppo Technologies",
    description:
      "Acted as the primary point of contact for key clients, ensuring clear communication and satisfaction. \n\n Led web app and UI/UX design projects across healthcare, entertainment, and quick commerce sectors.",
    period: "June 2024 - Aug 2024",
    // technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
  },
  {
    title: "Project Executive",
    company: "Bombay Design Centre",
    description:
      "Managed large-scale digital and SEO projects for Shapoorji Pallonji Group, Kokuyo Camlin, Sterling and Wilson, Joyville Homes, and Shapoorji Real Estate, delivering design-driven solutions that aligned with business objectives and enhanced online visibility. \n\n Monitored account performance, analyzed trends, and implemented improvements. \n\n Coordinated with vendors and internal teams, ensuring timely project delivery and iterative improvements. \n\n Worked closely with cross-functional teams, bridging design, technology, and business to deliver seamless digital experiences.",
    period: "2022 Jan - 2022 Jul",
    // technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: "Founder & Project Lead",
    company: "Hitech Coders",
    description:
      "Founded and managed a digital solutions startup delivering high-impact projects across multiple industries. \n\n Led end-to-end project delivery from requirement gathering and PRD creation to supervising UI/UX and development for timely execution. \n\n Built and maintained strong client relationships through strategic guidance and proactive problem-solving. \n\n Oversaw operations including budgeting, resource allocation, and technical troubleshooting to maintain delivery standards.",
    period: "June 2019 - June 2022",
    // technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
];

export const skillsData: Skill[] = [
  { name: "Jira" },
  { name: "Trello" },
  { name: "GanttPro" },
  { name: "Zoho Projects" },
  { name: "Slack" },
  { name: "Microsoft Project" },
  { name: "Google Workspace" }
];
