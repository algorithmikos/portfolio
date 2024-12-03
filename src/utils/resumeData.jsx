import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Code,
  GitHub,
  Language,
  LibraryBooks,
  Storage,
  YouTube,
} from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const resumeData = {
  name: "Umar Fayez",
  title: "Web developer",
  birthday: "Sep 4th, 1997",
  email: "umar.alfayez@gmail.com",
  // phone: "+2011 4351 8417",
  job: "Freelance Web Developer",
  address: "Cairo, Egypt",
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/umar-fayez/",
      text: "LinkedIn",
      icon: <LinkedInIcon fontSize="small" sx={{ color: "darkslategray" }} />,
    },
    Telegram: {
      link: "https://t.me/algorithmikos",
      text: "Telegram",
      icon: <TelegramIcon fontSize="small" sx={{ color: "darkslategray" }} />,
    },
    WhatsApp: {
      link: "https://wa.me/+201114581774",
      text: "WhatsApp",
      icon: <WhatsAppIcon fontSize="small" sx={{ color: "darkslategray" }} />,
    },
  },
  about:
    "Experienced Software Developer adept in bringing forth expertise in design, installation and maintenance of software systems. Experienced with the latest cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.",
  experiences: [
    {
      title: "Freelance English Translator",
      place: "Freelance",
      date: "2014 - Dec 2022 · 8 yrs",
      description:
        "Executed diverse projects translating contracts and technical manuals, with a recent focus on architecture translations.",
    },
    {
      title: "Freelance German Translator",
      place: "Freelance",
      date: "Apr 2021 - Dec 2022 · 1 yr 9 mos",
      description:
        "Engaged in architectural translations for prestigious institutions and architects, such as MSA University and Dr. Adel Fahmy.",
    },
    {
      title: "English & Turkish Translator",
      place: "Engineering Co. for Contracting & Supplies (ETC)",
      date: "Jun 2022 - Dec 2022 · 7 mos",
      description:
        "Managed correspondence, negotiated deals, and coordinated shipments with foreign suppliers.",
    },
    {
      title: "Data Administrator",
      place: "Super Shield Specialised Egypt",
      date: "Dec 2022 - Jun 2023 · 7 mos",
      description:
        "Led the development of an administrative system to manage quotations, technical reports, financial documentation, and field visit data.",
    },
    {
      title: "Full-stack Developer",
      place: "Speak-E for English Courses",
      date: "Jun 2023 - Nov 2024 · 1 yr 6 mos",
      description:
        "Leveraged my expertise in the MERN stack to create an efficient business management system that streamlined academy operations for myself and my colleagues. Later, I transitioned to use Firebase for enhanced functionality and scalability.",
    },
    {
      title: "Web Developer",
      place: "Freelance",
      date: "Nov 2024 - Present",
      description: "",
    },
  ],
  education: [
    {
      title: "German Studies BA",
      // Sep 2017 -
      date: "May 2021",
      description:
        "Department of German Language and Literature\nFaculty of Languages and Translatology\nAl-Azhar University",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "",
      icon: <CodeIcon />,
    },
    {
      title: "Business Solutions",
      description: "",
      icon: <CorporateFareIcon />,
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      description: ["JavaScript", "TypeScript", "PHP", "Python"],
      icon: <CodeIcon />,
    },
    {
      title: "Front-End Technologies",
      description: [
        "React.js",
        "React Native",
        "Redux.js",
        "Zustand",
        "IndexedDB",
        "Material-UI",
        "Bootstrap",
        "Progressive Web Applications (PWAs)",
        "Responsive Web Design",
        "WordPress",
      ],
      icon: <LibraryBooks />,
    },
    {
      title: "Back-End Technologies",
      description: [
        "Node.js",
        "Express.js",
        "Apache",
        "Appwrite",
        "Firebase & Cloud Firestore",
        "MariaDB/MySQL",
        "MongoDB",
        "CouchDB & PouchDB",
      ],
      icon: <Storage />,
    },
    {
      title: "Tools & Technologies",
      description: ["PhpMyAdmin", "Postman API", "Git", "GitHub", "Docker"],
      icon: <Code />,
    },
    {
      title: "Spoken Languages",
      description: ["Arabic", "English", "German", "Turkish"],
      icon: <LanguageIcon />,
    },
    {
      title: "Soft Skills",
      description: [
        "Problem Solving",
        "Attention to Detail",
        "Conflict Resolution",
        "Organisation Skills",
        "Teamwork",
        "Easily Adaptable",
      ],
      icon: <ConnectWithoutContactIcon />,
    },
  ],
  projects: [
    // {
    //   tag: "German Translations",
    //   image: "https://i.imgur.com/J0AxZBF.png",
    //   title: "Mrs. Sukaina's House",
    //   caption:
    //     "A translation of a brochure from one of the MSA University projects",
    //   description: "This is my project description.",
    //   links: [
    //     { link: "https://www.google.com", icon: <YouTube /> },
    //     { link: "https://www.google.com", icon: <GitHub /> },
    //     { link: "https://www.google.com", icon: <Language /> },
    //   ],
    // },
    // {
    //   tag: "German Translations",
    //   image: "https://i.imgur.com/b0OjYsS.jpg",
    //   title: "Building with people",
    //   caption: "Translation of a project from the work of Dr. Adel Fahmy",
    //   description: "This is my project description.",
    //   links: [
    //     { link: "https://www.google.com", icon: <YouTube /> },
    //     { link: "https://www.google.com", icon: <GitHub /> },
    //     { link: "https://www.google.com", icon: <Language /> },
    //   ],
    // },
    // {
    //   tag: "Arabic Translations",
    //   image: "https://i.imgur.com/XN8mzci.png",
    //   title: "Benaa Habitat",
    //   caption: "Translation of the organisation's profile",
    //   description: "This is my project description.",
    //   links: [
    //     { link: "https://www.google.com", icon: <YouTube /> },
    //     { link: "https://www.google.com", icon: <GitHub /> },
    //     { link: "https://www.google.com", icon: <Language /> },
    //   ],
    // },
    {
      tag: "Web Apps",
      image: "https://i.imgur.com/9byMejx.png",
      title: "Speak-E CRM",
      caption: "A Tailored CRM for English-Teaching Academies",
      description: `Speak-E is a custom-built CRM system designed specifically for the needs of English-teaching academies. It streamlines administrative processes, enhances communication, and provides powerful tools to manage student, teacher, and operational data efficiently.

      Key Features:
      1. Student and Teacher Management
      Centralised profiles for students and teachers, enabling seamless tracking of progress, attendance, and scheduling.

      2. Class Scheduling and Organisation
      Tools to create, assign, and manage classes, ensuring an optimised learning environment.

      3. Data Insights
      Provides actionable insights into academy operations, helping identify trends and areas for improvement.

      4. Custom-Built for Education
      Tailored specifically to the workflows of English-teaching academies, ensuring every feature adds value to the academic environment.
      `,
      links: [
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Native Mobile Apps",
      image: "https://i.imgur.com/vTnRS62.jpg",
      title: "Speak-E Glossary",
      caption: "Android Application - Student Personal Glossary",
      description: "This is my project description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Websites",
      image: "https://i.imgur.com/LJChYzi.png",
      title: "Super Shield Co. Website",
      caption: "The official website of Super Shield Egypt Specialized Company",
      description: "This is my project description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Web Apps",
      image: "https://i.imgur.com/pvInzzs.png",
      title: "Bunyan",
      caption: "An application to record exercises in the gym",
      description: "This is my project description.",
      links: [
        {
          link: "https://omerhanrustem.github.io/gym-app/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Websites",
      image: "https://i.imgur.com/Un1f7HJ.png",
      title: "Resume Web Page",
      caption: "Web application to create a professional CV in minutes",
      description: "This is my project description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Web Apps",
      image: "https://i.imgur.com/XDwkZz9.png",
      title: "Teryaq",
      caption: "An application to calculate insulin doses for diabetics",
      description: "This is my project description.",
      links: [{ link: "https://teryaq.pages.dev", icon: <Language /> }],
    },
  ],
};

export default resumeData;
