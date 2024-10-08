import { FlipWords } from "./ui/flip-words";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import BlurIn from "./magicui/blur-in";
import WordPullUp from "./magicui/word-pullup";

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