"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ResumeAnalyzerApp from "./components/ResumeAnalyzerApp";
import styles from "./styles/Home.module.css";
import { FlipWords } from "./components/ui/flip-words";
import { cn } from "@/util/cn";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import BlurIn from "./components/magicui/blur-in";
import WordPullUp from "./components/magicui/word-pullup";
import AnimatedGradientText from "./components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { DockDemo } from "./components/Dock"; // adjust the path as needed
import { HeroScrollDemo } from "./components/HeroScroll"; // adjust the path as needed
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./components/ui/animated-modal";



export function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Read the {" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Privacy Policy
              </span>{" "}
            </h4>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
const people = [
  {
    id: 1,
    name: "Elijah Gummer",
    designation: "Full-Stack Devloper",
    href: "https://twitter.com/codedesigneli",
    image: "/picofme.png",
  },
];
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

export function ThreeDCardDemo() {
  return (
    <div id="uniqueUpload" className="h-[60rem] flex-col w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
      <h1 className="md:text-3xl text-3xl lg:text-8xl font-bold text-center relative z-20 pointer-events-none whitespace-pre-wrap bg-headerColor bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Upload Your Resume
      </h1>
      <div className="mt-10 z-10 flex items-center justify-center">
        <AnimatedGradientText>
          📂 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Simply Drag & Drop
          </span>
        </AnimatedGradientText>
      </div>
      <CardContainer className="inter-var">
        <CardBody className="flex justify-center flex-col items-center bg-black/20 border-black/[0.5] border-2 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[50rem] h-auto rounded-xl p-6">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-400 dark:text-white"
          >
            Discover Your Potential
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            📄 PDF Files Supported Only 📄
          </CardItem>
          <CardItem
            translateZ="100"
            className="flex justify-center w-full mt-4 items-center"
          >
            <ResumeAnalyzerApp />
          </CardItem>
          <div className="flex justify-between items-center mt-20 w-full"></div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
export function AnimatedTooltipPreview() {
  return (
    <div className="tooltipContainer flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export function BackgroundGradientAnimationDemo() {
  const words = ["GREAT", "VALUABLE", "EMPOWERING", "WORTHWHILE"];
  return (
    <BackgroundGradientAnimation>
      <div id="uniqueHome" className="relative w-full h-screen flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <BlurIn
            word="CVWORTH IS"
            className="bg-clip-text mr-2 text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
          />
          <FlipWords className="words" words={words} />
        </div>
        <WordPullUp
          className="text-xl text-white max-w-xl m-4"
          words="Boost your career with our CV solutions."
        />
        <button className="button">Try it Out</button>
        <div className="svg-container-arrow mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 7% 20 24"
            id="DownArrow"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          >
            <path
              d="M11.293,22.707a1,1,0,0,0,1.414,0l5-5a1,1,0,0,0-1.414-1.414L13,19.586V2a1,1,0,0,0-2,0V19.586L7.707,16.293a1,1,0,0,0-1.414,1.414Z"
              fill="#ffffff"
              className="color000000 svgShape"
            ></path>
          </svg>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
export default function Home() {
  return (
    <main className="w-full">
      <div className="flex items-center justify-center flex-col">
        <BackgroundGradientAnimationDemo />
        <AnimatedTooltipPreview />
        <HoverSpring />
        <HeroScrollDemo />
        <ThreeDCardDemo />
        <DockDemo />
        <AnimatedModalDemo />
      </div>
    </main>
  );
}