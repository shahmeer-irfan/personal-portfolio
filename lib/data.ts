import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flyaway from "@/public/flyawaylanding.png";
import swoleyfit from "@/public/swoleyfitlanding.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "National University of Computer and Emerging Sciences, Karachi",
    description: "Doing major in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2027",
  },
  {
    title: "SWE fellow at Headstarter AI (remote)",
    location: "NYC, United States",
    description:
      "Building 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 95% accuracy as seen by 1000 users.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "SwoleyFit",
    description:
      "A modern web application  that helps users generate exercises based on their performance. The app features an intuitive and attractive user interface, making it easy to use and navigate.",
    tags: ["React", "Vercel", "Tailwind", "UI/UX", "Git"],
    imageUrl: swoleyfit,
    link: "https://swoley-fit-ten.vercel.app/",
  },
  {
    title: "Fly Away",
    description:
      "This project is a fully responsive travel agency landing page featuring a clean user interface, a contact form, and smooth animations.",
    tags: ["React", "Vercel", "Tailwind", "UI/UX", "GSAP"],
    imageUrl: flyaway,
    link: "https://flyaway-landing-page.vercel.app/",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "GSAP"
] as const;
