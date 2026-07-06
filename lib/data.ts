import type { IconType } from "react-icons";
import {
  FaCode,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { RiCpuFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMapbox,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;

export const isProduction = nodeEnvironment === "production";

export const basePath = isProduction ? "/Portfolio" : "";

export const resumePath = `${basePath}/Lokesh_Agarwal_Resume.pdf`;

export const personalInfo = {
  name: "Lokesh Agarwal",
  role: "Software Engineer II",
  email: "lokeshagarwal035@gmail.com",
  phone: "+91-8789109316",
  location: "Surat, Gujarat, India",
  linkedin: "linkedin.com/in/lokesh04",
  github: "github.com/Lokesh041999",
  summary:
    "Software Engineer II with 2.5+ years of experience building scalable web applications, real-time dashboards, geospatial visualizations, SSO authentication, and backend automation.",
};

export const navLinks = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export const heroSkills = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Mapbox GL JS",
];

export const stats: {
  label: string;
  value: string;
  icon: IconType;
}[] = [
  {
    label: "Years Experience",
    value: "2.5+",
    icon: FaCode,
  },
  {
    label: "Performance Improvement",
    value: "40%",
    icon: MdSpeed,
  },
  {
    label: "Less Dev Effort",
    value: "30%",
    icon: RiCpuFill,
  },
  {
    label: "Fewer User Errors",
    value: "25%",
    icon: FaShieldAlt,
  },
];

export const experiences = [
  {
    role: "Software Engineer II",
    company: "MapZot.AI",
    location: "United States · Remote",
    duration: "Apr 2025 – Present",
    points: [
      "Implemented SSO authentication and WebSocket-based notification architecture for enterprise identity management and real-time updates.",
      "Developed backend automation using Node.js and Puppeteer for scheduled data processing and business logic automation.",
      "Integrated POS systems and Facebook Ads Audience API for real-time transaction sync and campaign segmentation.",
      "Optimized geospatial visualization via Mapbox GL JS with code splitting and memoization, improving speed by 40%.",
      "Led Agile sprints as team captain — task assignment, code reviews, and mentoring junior developers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MapZot.AI",
    location: "United States · Remote",
    duration: "Oct 2023 – Mar 2025",
    points: [
      "Built scalable admin panel and dashboard features using React.js, Next.js, Redux, and Node.js.",
      "Integrated geospatial tilesets including Wetland, Flood, Zoning, Parcel, and Traffic layers via Mapbox GL JS.",
      "Led UI/UX redesign with custom dark theme, reducing user errors by 25% and dev effort by 30% via reusable components.",
      "Built site recommendation tools using demographic analysis, improving accuracy by 10% and API efficiency by 20%.",
    ],
  },
];

export const projects = [
  {
    title: "Real-Time ChatApp",
    description:
      "Engineered a chat app using Node.js, Express.js, React.js, and Socket.io supporting 100+ simultaneous users with room-based chat and unique room IDs.",
    tags: ["Node.js", "Express.js", "Socket.io", "React.js"],
  },
  {
    title: "E-Commerce Shopping Cart",
    description:
      "Built a full e-commerce platform using Java, JSP, Servlet, JDBC, and MySQL with secure authentication, product listings, and admin inventory management.",
    tags: ["Java", "JSP", "Servlet", "JDBC", "MySQL"],
  },
];

export const techStack: {
  label: string;
  icon: IconType;
}[] = [
  {
    label: "React.js",
    icon: FaReact,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "JavaScript",
    icon: SiJavascript,
  },
  {
    label: "Node.js",
    icon: FaNodeJs,
  },
  {
    label: "Express.js",
    icon: SiExpress,
  },
  {
    label: "Mapbox GL JS",
    icon: SiMapbox,
  },
  {
    label: "Redux",
    icon: SiRedux,
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "GitHub",
    icon: FaGithub,
  },
  {
    label: "Database",
    icon: FaDatabase,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    shortDegree: "MCA",
    institute: "Vellore Institute of Technology",
    location: "Vellore, India",
    year: "2023",
    cgpa: "7.3 / 10.0",
  },
  {
    degree: "Bachelor of Computer Applications",
    shortDegree: "BCA",
    institute: "Arka Jain University",
    location: "Jamshedpur, India",
    year: "2021",
    cgpa: "8.83 / 10.0",
  },
];

export const certificates = [
  {
    title: "Frontend Developer React.js",
    platform: "HackerRank",
    year: "2026",
  },
  {
    title: "Advanced SQL",
    platform: "LinkedIn Learning",
    year: "2023",
  },
  {
    title: "Hackathon: Solving Real Life Challenges using Java",
    platform: "VIT Vellore",
    year: "2022",
  },
];

export const contactItems: {
  label: string;
  href?: string;
  icon: IconType;
}[] = [
  {
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: IoMail,
  },
  {
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: IoCall,
  },
  {
    label: personalInfo.location,
    icon: FaLocationDot,
  },
  {
    label: personalInfo.linkedin,
    href: `https://${personalInfo.linkedin}`,
    icon: FaLinkedin,
  },
  {
    label: personalInfo.github,
    href: `https://${personalInfo.github}`,
    icon: FaGithub,
  },
];
