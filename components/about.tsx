"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is <span className="font-extrabold">Shahmeer Irfan</span>. I'm
        currently pursuing a degree in{" "}
        <span className="font-bold">Computer Science</span> at FAST University,
        where I'm in my sophomore year. I've been diving into{" "}
        <span className="font-bold">web development</span> and have developed a
        strong passion for <span className="font-bold">machine learning</span>.
        Over the past few months, I've sharpened my skills in both web
        development and Python. With an open-minded attitude and an eagerness to
        learn, I'm dedicated to making a positive impact on the world.
      </p>

      <p>
        Outside of tech, I create engaging social content on Instagram, reaching
        over <span className="font-bold">200k+ reach</span> and boasting more
        than <span className="font-bold">500 followers</span>. When I'm not
        online, you can find me on the university courts, enjoying{" "}
        <span className="font-medium">table tennis</span>,{" "}
        <span className="font-medium">badminton</span>, or{" "}
        <span className="font-medium">football</span>.
      </p>
    </motion.section>
  );
}
