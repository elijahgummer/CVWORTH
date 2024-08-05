"use client";

import React, { useState, useRef, useEffect } from "react";
import { DockDemo } from "./components/Dock"; // adjust the path as needed
import { HeroScrollDemo } from "./components/HeroScroll"; // adjust the path as needed
import { AnimatedTooltipPreview } from "./components/AnimatedTooltip"; // adjust the path as needed
import { ThreeDCardDemo } from "./components/ThreeDCard"; // adjust the path as needed
import { ThreeDCardDemo } from "./components/BackgroundGradAnim"; // adjust the path as needed
import HoverSpring from "./components/HoverSpring"; // adjust the path as needed


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
      </div>
    </main>
  );
}