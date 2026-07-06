import type { IconType } from "react-icons";
import { BsDiagram3Fill } from "react-icons/bs";
import {
  FaCode,
  FaDatabase,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { RiCpuFill } from "react-icons/ri";
import {
  SiChartdotjs,
  SiCplusplus,
  SiCss,
  SiEjs,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbChartHistogram } from "react-icons/tb";

export const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENVIRONMENT;

export const isProduction = nodeEnvironment === "production";

export const basePath = isProduction ? "/Portfolio" : "";

export const resumePath = `${basePath}/resume/Lokesh_Agarwal_Resume.pdf`;

export const personalInfo = {
  name: "Lokesh Agarwal",
  role: "Software Engineer II",
  email: "lokeshagarwal035@gmail.com",
  phone: "+91-8789109316",
  location: "Surat, Gujarat, India",
  linkedin: "linkedin.com/in/lokesh04",
  github: "github.com/Lokesh041999",
  summary:
    "Software Engineer II with 3+ years of experience building scalable web applications, real-time dashboards, geospatial visualizations, API integrations, authentication flows, and backend automation.",
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
  "JavaScript",
  "Mapbox GL JS",
];

export const stats: {
  label: string;
  value: string;
  icon: IconType;
}[] = [
  {
    label: "Years Experience",
    value: "3+",
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
    location: "Remote",
    duration: "Apr 2025 – Present",
    points: [
      "Developing full-stack features across React.js, Next.js, EJS, Node.js, Redux.js, and REST APIs for scalable web applications.",
      "Designed a reusable API service architecture supporting GET, POST, PUT, PATCH, and DELETE methods from a single API class, enabling consistent integration across GIS Layer and Nearby Business filter workflows.",
      "Building responsive dashboards, reusable UI components, forms, filters, dialogs, data tables, charts, and report screens using React.js, Next.js, Material UI v5, Chart.js, and Recharts.",
      "Integrating APIs for authentication, role-based permissions, search, reports, notifications, user management, and business workflows.",
      "Working on Mapbox GL JS based geospatial features including custom layers, markers, popups, traffic data, parcel data, and location intelligence tools.",
      "Optimizing frontend performance using memoization, lazy loading, code splitting, debounced search, pagination, and efficient rendering for large datasets.",
      "Managing code using Git and GitHub workflows including feature branches, pull requests, code reviews, merge conflict resolution, and production deployments.",
      "Handling production bug fixes, responsive design issues, browser compatibility problems, and UI/UX improvements across the dashboard.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MapZot.AI",
    location: "Remote",
    duration: "Oct 2023 – Mar 2025",
    points: [
      "Developed scalable frontend features using React.js, Next.js, JavaScript, Redux.js, Material UI v5, and REST API integrations.",
      "Built dashboard modules, admin panel screens, search flows, filters, forms, modals, tables, charts, and report-based UI features.",
      "Implemented Mapbox GL JS features including map layers, markers, popups, parcel data, traffic data, nearby businesses, and planned development layers.",
      "Created reusable UI components and common frontend patterns to reduce repeated code and improve development speed.",
      "Improved user experience by fixing responsive layout issues, UI bugs, validation flows, toast messages, loaders, and empty states.",
      "Worked with Git and GitHub for version control, branch management, pull requests, code reviews, and production release support.",
      "Collaborated with backend, product, and QA teams to debug API issues, test features, and deliver stable production updates.",
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
    label: "JavaScript",
    icon: SiJavascript,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "Redux.js",
    icon: SiRedux,
  },
  {
    label: "HTML",
    icon: SiHtml5,
  },
  {
    label: "CSS",
    icon: SiCss,
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    label: "Material UI",
    icon: SiMui,
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
    label: "EJS",
    icon: SiEjs,
  },
  {
    label: "Socket.io",
    icon: SiSocketdotio,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "Mapbox GL JS",
    icon: SiMapbox,
  },
  {
    label: "Chart.js",
    icon: SiChartdotjs,
  },
  {
    label: "Recharts",
    icon: TbChartHistogram,
  },
  {
    label: "Java",
    icon: FaJava,
  },
  {
    label: "JSP",
    icon: FaCode,
  },
  {
    label: "Servlet",
    icon: FaServer,
  },
  {
    label: "JDBC",
    icon: FaDatabase,
  },
  {
    label: "Python",
    icon: SiPython,
  },
  {
    label: "C/C++",
    icon: SiCplusplus,
  },
  {
    label: "Data Structures",
    icon: BsDiagram3Fill,
  },
  {
    label: "GitHub",
    icon: FaGithub,
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
    href: `${basePath}/certificates/frontend-react-hackerrank.pdf`,
  },
  {
    title: "Advanced SQL",
    platform: "LinkedIn Learning",
    year: "2023",
    href: `${basePath}/certificates/advanced-sql-linkedin.pdf`,
  },
  {
    title: "Hackathon: Solving Real Life Challenges using Java",
    platform: "VIT Vellore",
    year: "2022",
    href: `${basePath}/certificates/vit-hackathon-java.pdf`,
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
