import * as React from "react";
import * as THREE from "three";
import * as tf from "@tensorflow/tfjs";
import {
  createShape,
  initTensorFlow,
  type IFloatingShape,
} from "./DynamicBackground.helpers";

const DynamicBackground = (): React.JSX.Element => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const modelRef = React.useRef<tf.LayersModel>(null);

  React.useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number;

    const setup = async () => {
      await initTensorFlow(modelRef);

      if (!mountRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({ alpha: true });
      // renderer.shadowMap.type = THREE.VSMShadowMap;
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      // const light = new THREE.PointLight(0xffffff, 1, 100);
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-10, 0, 2);
      light.rotation.set(10, 0, -2);
      scene.add(light);
      // scene.add(new THREE.AmbientLight(0xffffff, 0.3));

      const shapes: IFloatingShape[] = [];
      for (let i = 0; i < 10; i++) {
        const shape = createShape(i);
        scene.add(shape.mesh);
        shapes.push(shape);
      }

      const animate = () => {
        shapes.forEach((shape) => {
          const t = performance.now();
          shape.mesh.position.x =
            shape.offset.x +
            Math.sin(t * shape.frequency.x) * shape.amplitude.x;
          shape.mesh.position.y =
            shape.offset.y +
            Math.cos(t * shape.frequency.y) * shape.amplitude.y;
          shape.mesh.position.z =
            shape.offset.z +
            Math.sin(t * shape.frequency.z) * shape.amplitude.z;
          shape.mesh.rotation.x += shape.rotationSpeed.x;
          shape.mesh.rotation.y += shape.rotationSpeed.y;
          shape.mesh.rotation.z += shape.rotationSpeed.z;
        });
        renderer!.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };
      renderer!.render(scene, camera);
      animate();
    };

    setup();

    return () => {
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 w-full h-full" />;
};

export default DynamicBackground;
