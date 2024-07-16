"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import ResumeAnalyzerApp from "./components/ResumeAnalyzerApp";
import styles from "./styles/Home.module.css";
import { FlipWords } from "./components/ui/flip-words";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "./components/ui/navbar-menu";
import { cn } from "@/util/cn";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import { SparklesCore } from "./components/ui/sparkles";
import { Dock, DockIcon } from "./components/magicui/dock";
import SparklesText from "./components/magicui/sparkles-text";
import AnimatedShinyText from "./components/magicui/animated-shiny-text";
import BlurIn from "./components/magicui/blur-in";
import WordPullUp from "./components/magicui/word-pullup";
import AnimatedGradientText from "./components/magicui/animated-gradient-text";
import { motion } from "framer-motion";


const people = [
  {
    id: 1,
    name: "Elijah Gummer",
    designation: "Full-Stack Devloper",
    image: "/picofme.png",
  },
];

const ProjectsData = [
  {
    id: 1,
    name: "Resume Worth Estimation",
    description: "Calculate the dollar worth of your resume. Compare with industry standards and job market trends.",
    link: "https://syntaxui.com",
    image: "/dollarsign.svg",
  },
  {
    id: 2,
    name: "Resume Improvement Suggestions",
    description: "Optimise content and format for maximum impact. Receive personalised tips for better phrasing and layout.",
    link: "https://prettyfolio.com",
    image: "/up.svg",
  },
  {
    id: 3,
    name: "Skills Assessment",
    description: "Identify key skills and match them to desired roles. Highlight skill gaps crucial for career advancement.",
    link: "https://enchant.ansubkhan.com",
    image: "/briefcase.svg",
  },
];

const HoverSpring = () => {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="h-[30rem] w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
      <div className="flex items-center justify-center w-full flex-col">
        <h1 className="text-headerColor font-bold lg:text-5xl">Discover Our Features</h1>
        <h1 className="text-subHeaderColor font-bold lg:text-2xl mt-5">Explore how we enhance your resume</h1>
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

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="footerContainer">
      <footer>
        <div className="social">
          <Dock>
            <DockIcon>
              <Icons.gitHub className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.twitter className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.linkeden className="h-6 w-6" />
            </DockIcon>
          </Dock>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Process</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Upload</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className={styles.footer}>© 2024 All rights reserved. - CVWORTH</p>
      </footer>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 72 72"
      width="22"
      height="22"
      viewBox="0 0 72 72"
      id="twitterx"
    >
      <switch>
        <g fill="#000000" className="color000000 svgShape">
          <path
            d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </g>
      </switch>
    </svg>
  ),
  linkeden: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 5 1036 990"
      id="Linkedin"
    >
      <path
        d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
        fill="#ffffff"
        className="color000000 svgShape"
      ></path>
    </svg>
  ),
};

export function ThreeDCardDemo() {
  return (
    <div className="h-[60rem] rounded-xl w-full dark:bg-black bg-black-100  dark:bg-dot-white/[1] bg-dot-white/[1] relative flex items-center justify-center flex-col">
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
        <CardBody className="flex justify-center flex-col items-center bg-black bg-opacity-500 border-black/[0.5] border-2 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[50rem] h-auto rounded-xl p-6">
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
            Find Your Worth
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

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="h-[50rem] w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
        <ContainerScroll
          titleComponent={
            <div className="flex items-center justify-center flex-col">
              <div className="z-10 flex items-center justify-center">
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-300 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Powered By AI ✨</span>
                  </AnimatedShinyText>
                </div>
              </div>

              <h1 className="text-4xl font-semibold bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Learn How to Use
                <br />
                <SparklesText className="md:text-[6rem]" text="CVWORTH" />
              </h1>
            </div>
          }
        >
          <Image
            src={`/Image.gif`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
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
      <div className="relative w-full h-screen flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl flex-col">
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

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center text-center">
      <Navbar className="top-2 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 w-100% mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-start">
          <Image
            className="image"
            height="40"
            width="40"
            src="/logo.png"
            alt="Logo"
          />
          <h1 className="font-bold -m-3 text-white">CVWORTH</h1>
        </div>
        <div className="flex justify-center items-center flex-row">
          <div className="mr-5">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </div>
          <div className="mr-5">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Process"
            ></MenuItem>
          </div>
          <div className="mr-5">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Upload"
            ></MenuItem>
          </div>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Policy"
          ></MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex items-center justify-center flex-col">
        <BackgroundGradientAnimationDemo />
        <AnimatedTooltipPreview />
        <NavbarDemo />
        <HoverSpring />
        <HeroScrollDemo />
        <ThreeDCardDemo />
        <DockDemo />
      </div>
    </main>
  );
}
