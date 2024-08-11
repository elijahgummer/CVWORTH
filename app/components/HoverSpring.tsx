"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
    {
      id: 1,
      name: "Resume Worth Estimation",
      description:
        "Calculate the dollar worth of your resume. Compare with industry standards and job market trends.",
      link: "https://syntaxui.com",
      image: "/dollarsign.svg",
    },
    {
      id: 2,
      name: "Resume Improvement Suggestions",
      description:
        "Optimise content and format for maximum impact. Receive personalised tips for better phrasing and layout.",
      link: "https://prettyfolio.com",
      image: "/up.svg",
    },
    {
      id: 3,
      name: "Skills Assessment",
      description:
        "Identify key skills and match them to desired roles. Highlight skill gaps crucial for career advancement.",
      link: "https://enchant.ansubkhan.com",
      image: "/briefcase.svg",
    },
  ];
  const HoverSpring = () => {
    return (
      <div id="uniqueFeatures" className="flex flex-col overflow-hidden w-full">
        <div className="h-[35rem] w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
          <div className="flex items-center justify-center w-full flex-col">
            <h1 className="text-headerColor font-bold lg:text-5xl">
              Discover Our Features
            </h1>
            <h1 className="text-subHeaderColor font-bold lg:text-2xl mt-5">
              Explore how we enhance your resume
            </h1>
            <div className="grid w-90% grid-cols-2 gap-x-10 md:grid-cols-3 items-center justify-center mt-10">
              {ProjectsData.map((project) => {
                return (
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", bounce: 0.7 }}
                    key={project.id}
                    className="mt-5 text-center"
                  >
                    <a
                      className="flex items-center justify-center flex-col"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      <Image
                        src={project.image}
                        width={40}
                        height={40}
                        className="mb-3 rounded-lg border-gray-400 dark:border"
                        alt={project.name}
                      />
                      <div className="mb-1 text-sm font-medium text-white dark:text-gray-100">
                        {project.name}
                      </div>
                      <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                        {project.description}
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HoverSpring;