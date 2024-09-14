import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "-15% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "restart reverse restart reverse",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap(".g_fadeIn", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20">
          <img id="chip" src={chipImg} alt="chip" height={180} width={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Chip pro.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative w-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="relative bg-transparent z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                id="frameVideo"
                playsInline
                autoPlay
                preload="none"
                muted
                ref={videoRef}
                className="pointer-event-none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray text-center font-semibold mt-3">
            Honkai:Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-col flex-1 justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex flex-col flex-1 justify-center g_fadeIn">
            <h2 className="hiw-text">New</h2>
            <h2 className="hiw-bigtext">Pro-class GPU</h2>
            <h2 className="hiw-text">with 6 cores</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
