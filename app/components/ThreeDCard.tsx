import AnimatedGradientText from "./magicui/animated-gradient-text";

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