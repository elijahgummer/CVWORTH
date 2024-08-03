import { AnimatedTooltip } from "./ui/animated-tooltip";

export function AnimatedTooltipPreview() {
    return (
      <div className="tooltipContainer flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    );
  }