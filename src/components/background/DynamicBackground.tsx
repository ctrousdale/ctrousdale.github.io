import * as React from "react";
import * as THREE from "three";
import * as tf from "@tensorflow/tfjs";
import { setupAndRegister } from "./DynamicBackground.helpers";

const DynamicBackground = (): React.JSX.Element => {
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const modelRef = React.useRef<tf.LayersModel | null>(null);
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null);
  // const animationIdRef = React.useRef<number>(0);
  let animationIdRef = React.useRef<number>(0);

  React.useEffect(() => {
    setupAndRegister(modelRef, mountRef, rendererRef, animationIdRef);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 w-full h-full" />;
};

export default DynamicBackground;
