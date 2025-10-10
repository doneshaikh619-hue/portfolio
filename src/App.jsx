import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
             fill:"#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 800,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">Mustafa-studio</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
 <div className="flex justify-between items-center w-full min-h-screen px-[10%]">
      {/* Left Text Section */}
      <div className="w-1/2 ">
        <h3 className="text-[3rem] font-normal leading-[1.2]">
          At <span className="font-semibold">Mustafa-studio</span>, we build
          immersive digital experiences for brands with a purpose.
        </h3>
        <p className=" w-[80%] mt-10 font-normal">
          We are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional.
        </p>
        <p className=" mt-10 tracking-widest">Scroll</p>
      </div>

      {/* Right Circle Text Animation */}
      <div className="relative w-[250px] h-[250px] flex items-center justify-center">
        <svg
          viewBox="0 0 300 300"
          className="animate-spin-slow absolute w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
            />
          </defs>
          <text
             fill="#fff"
            fontSize="12"
            letterSpacing="3px"
            fontFamily="Arial, sans-serif"
          >
            <textPath  xlinkHref="#circlePath">
              MUSTAFASTUDIO — FOR ALL THINGS DIGITAL PRODUCTION MUSTAFA —
            </textPath>
          </text>
        </svg>
      </div>
    </div>
<div className="w-full absolute bottom-[-200px] left-0">
  <h1
    ref={headingref}
    className="text-[9rem] font-normal tracking-tight leading-none pl-5"
  >
    Click&Exploring
  </h1>
</div>

        </div>
      </div>
      <div className="w-full relative h-screen  mt-[300px] px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-3xl leading-[1.8] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>
  </div>
<div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <div className="w-[70%] max-w-3xl -mt-16 space-y-5">
        {[
          "CREATIVE",
          "DESIGN",
          "ANIMATION",
          "TECHNOLOGY",
          "PROJECT DELIVERY",
          "EXAMPLE PRODUCTS",
        ].map((item) => (
          <div
            key={item}
            className="group border-b border-black flex justify-between items-center py-3 cursor-pointer transition-all duration-300"
          >
            <span className="text-base font-semibold transition-colors duration-300 group-hover:text-gray-600">
              {item}
            </span>
            <button className="border border-gray-400 rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover: group-hover:">
              +
            </button>
          </div>
        ))}
      </div>
    </div>

    
    </>
  );
}

export default App;