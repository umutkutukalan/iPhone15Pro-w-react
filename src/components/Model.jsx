import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";

const Model = () => {
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  const [size, setSize] = useState("small");

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //camera
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <p id="heading" className="section-heading">
          Take a closer look.
        </p>
        <div className="flex flex-col items-center overflow-hidden relative">
          <div className="w-full h-[75vh] md:h-[90vh]">
            <ModelView
              id={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              id={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="h-full w-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
