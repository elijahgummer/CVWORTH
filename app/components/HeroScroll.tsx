import { cn } from "@/util/cn";
import SparklesText from "./magicui/sparkles-text";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
    return (
      <div id="uniqueProcess" className="flex flex-col overflow-hidden w-full">
        <div className="h-[60rem] w-full dark:bg-black bg-[#0A0A0A] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] bg-[length:32px_32px] relative flex items-center justify-center">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <div className="z-10 flex items-center justify-center">
                  <div
                    className={cn(
                      "group rounded-full border mb-10 border-black/5 bg-neutral-300 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
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
                  <SparklesText className="mb-10 md:text-[6rem]" text="CVWORTH" />
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