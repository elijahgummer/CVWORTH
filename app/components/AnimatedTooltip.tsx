import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
      id: 1,
      name: "Elijah Gummer",
      designation: "Full-Stack Devloper",
      href: "https://twitter.com/codedesigneli",
      image: "/picofme.png",
    },
  ];
export function AnimatedTooltipPreview() {
    return (
      <div className="tooltipContainer flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    );
  }