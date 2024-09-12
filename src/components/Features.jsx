import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { exploreVideo } from "../utils/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="common-padding h-full bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore to full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-light font-semibold">
              iPhone.
            </h2>
            <h2 className="text-5xl lg:text-7xl font-light font-semibold">
              Forged in titanium.
            </h2>
          </div>
        </div>
        <div className="flex-center flex-col sm:px-10">
          <div className="relative h-[50vh] w-full flex items-center">
            <video
              id="exploreVideo"
              playsInline
              muted
              preload="none"
              autoPlay
              ref={videoRef}
              className="object-cover object-center w-full h-full"
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
