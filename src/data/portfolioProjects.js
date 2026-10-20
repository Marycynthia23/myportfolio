import atarrodoHero from "../app/images/atarrodoHero.png";
import cliqestate from "../app/images/cliqestate.png";
import enhancedInstict from "../app/images/enhancedInstict.png";
import heroPaint from "../app/images/hero-paint.png";
import mybabyMobile from "../app/images/mybaby-mobile.png";
import zenMobile from "../app/images/zenMobile.png";

const unavailable = "Details have not been provided yet.";

export const professionalProjects = [
  {
    id: "kobobooks",
    title: "KoboBooks",
    navigationLabel: "Simplifying Business Accounting & Inventory",
    description:
      "Accounting and business management software designed to simplify financial operations, invoicing, and inventory management.",
    category: "Product Design · FinTech / Business Software",
    video: "/kobobooks-stock-showcase.mp4",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking",
    navigationLabel: "Designing Seamless Banking Experiences",
    description:
      "Digital banking experiences focused on making financial transactions and account management more intuitive.",
    category: "UI/UX Design · FinTech",
    image: zenMobile,
    imageAlt: "Zenith mobile banking interface",
    role: "UI/UX Designer",
    href: "/work/ui-project/zenith-mobile",
  },
  {
    id: "digital-signage",
    title: "Digital Signage",
    navigationLabel: "Managing Content Across Multiple Screens",
    description:
      "A digital signage dashboard for managing screen content, playlists, schedules, and performance reports.",
    category: "Product Design · Digital Signage",
    image: "/Digital_Dashboard.png",
    imageAlt: "Digital signage content management dashboard",
  },
  {
    id: "estatepro",
    title: "EstatePro",
    navigationLabel: "Simplifying Property Management",
    description:
      "A comprehensive property and estate management platform designed to streamline property operations, resident communications, and facility management.",
    category: "Product Design · Property Management",
    image: cliqestate,
    imageAlt: "Estate management dashboard design",
    role: "UI/UX Designer",
    href: "/work/ui-project/estate-mgt",
  },
  {
    id: "event-management",
    title: "Event Management",
    navigationLabel: "Streamlining Event Discovery & Booking",
    description: "Event management product design showcase.",
    category: "Product Design · Event Management",
    image: "/event-product-portfolio-blurred.gif",
    imageAlt: "Event management product design showcase",
  },
  {
    id: "africell",
    title: "Africell",
    navigationLabel: "Simplifying Subscriber Verification & Onboarding",
    description:
      "A subscriber management dashboard for validating customer details and managing Africell subscriptions.",
    category: "Product Design · Telecommunications",
    image: "/AfriCell_Dashboard_visual.png",
    imageAlt: "Africell subscriber management dashboard",
  },
];

export const sideProjects = [
  {
    id: "smartcoat",
    title: "Smartcoat",
    navigationLabel: "Exploring Digital Solutions for Coating Services",
    description:
      "A strategic website experience for a paint brand that manufactures on demand, offers professional application, and grows through a distributor network.",
    category: "Product Design · Manufacturing & Home Improvement",
    role: "Product Designer",
    image: heroPaint,
    imageAlt: "Bespoke Paint Company website design",
    href: "/work/ui-project/bespoke-paint",
  },
  {
    id: "mybaby",
    title: "MyBaby",
    navigationLabel: "Designing Digital Experiences for Parents & Families",
    description:
      "A women’s health and wellness application supporting fertility, pregnancy, and postnatal care with personalized health insights.",
    category: "HealthTech · Mobile application",
    role: "UI/UX Designer",
    image: mybabyMobile,
    imageAlt: "MyBaby women's health mobile application",
    href: "/work/ui-project/mybaby-mobile",
  },
  {
    id: "aibanc",
    title: "AiBanc",
    navigationLabel: "Simplifying Digital Lending & Loan Applications",
    description:
      "Contributed to digital lending experiences that increased loan applications by 30% and user acquisition by 33%.",
    category: null,
    image: "/AiBanc%20Fintech%20App%20Showcase.png",
    imageAlt: "AiBanc fintech product showcase",
  },
];

export const frontendProjects = [
  {
    id: "atarrodo",
    title: "Atarrodo",
    navigationLabel: "Building Responsive African Language Learning Experiences",
    category: "Frontend Engineering / EdTech",
    role: "Frontend Developer",
    description:
      "Atarrodo is an African language learning platform designed to make language education more accessible through digital learning experiences.",
    overview:
      "My frontend work involved building and improving responsive user interfaces, implementing interactive features, and supporting the platform's web experience.",
    contributions: [
      "Developed responsive web interfaces.",
      "Implemented frontend components and interactive user flows.",
      "Contributed to the platform's migration to Next.js 15.",
      "Implemented pricing and waitlist experiences.",
      "Improved responsiveness and consistency across devices.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Swagger API",
    ],
    image: atarrodoHero,
    imageAlt: "Atarrodo African language learning platform",
    href: "/work/frontend-projects/atarrodo",
    liveUrl: "https://atarrodo.com/",
  },
  {
    id: "instict-ai",
    title: "Instict.ai",
    navigationLabel: "Engineering AI-Powered Interview Practice Experiences",
    category: "Frontend Engineering / AI / Career Technology",
    role: "Frontend Engineer",
    description:
      "Instict.ai is an AI-powered interview preparation platform that helps users practice interviews, review their CVs, and prepare for professional opportunities.",
    overview:
      "I was responsible for building the frontend experience from the initial implementation through launch.",
    contributions: [
      "Owned frontend development from the first commit through launch.",
      "Built responsive application interfaces.",
      "Implemented AI interview practice experiences.",
      "Developed video and text interview interfaces.",
      "Built CV review and feedback interfaces.",
      "Implemented user dashboards and supporting workflows.",
      "Integrated frontend interfaces with backend APIs.",
      "Maintained consistency across the platform.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "API integration",
      "OpenAI API",
      "Framer Motion",
    ],
    image: enhancedInstict,
    imageAlt: "Instict.ai interview preparation platform",
    href: "/work/frontend-projects/instict-ai",
    liveUrl: "https://instict.ai/",
  },
];

export const caseStudies = [
  {
    id: "kobobooks",
    title: "KoboBooks",
    subtitle: "Accounting & Inventory UX",
    navigationLabel: "Simplifying Complex Accounting & Inventory Workflows",
    context:
      "Accounting and business management software designed to simplify financial operations, invoicing, and inventory management.",
    problem: unavailable,
    role: unavailable,
    approach: unavailable,
    outcomes: unavailable,
  },
];
