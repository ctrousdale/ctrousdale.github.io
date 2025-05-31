import * as React from "react";
import * as THREE from "three";
import * as tf from "@tensorflow/tfjs";

interface FloatingShape {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  amplitude: THREE.Vector3;
  frequency: THREE.Vector3;
  offset: THREE.Vector3;
}

export const DynamicBackground = (): React.JSX.Element => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const modelRef = React.useRef<tf.LayersModel>(null);

  React.useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number;

    const init = async () => {
      await initTensorFlow(modelRef);

      if (!mountRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(10, 10, 10);
      scene.add(light);
      scene.add(new THREE.AmbientLight(0xffffff, 0.3));
      const shapes: FloatingShape[] = [];
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
      animate();
    };

    init();

    return () => {
      if (renderer && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 w-full h-full" />;
};

const initTensorFlow = async (
  modelRef: React.RefObject<tf.LayersModel | null>,
) => {
  await tf.ready();

  const model = tf.sequential({
    layers: [
      tf.layers.dense({ units: 8, activation: "relu", inputShape: [3] }),
      tf.layers.dense({ units: 8, activation: "relu" }),
      tf.layers.dense({ units: 3, activation: "tanh" }),
    ],
  });

  const dummyInput = tf.randomNormal([1, 3]);
  model.predict(dummyInput);
  dummyInput.dispose();

  modelRef.current = model;
};

const createShape = (index: number): FloatingShape => {
  const geometries = [
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.ConeGeometry(0.3, 0.6, 8),
    new THREE.OctahedronGeometry(0.4),
  ];

  const chosenGeometry = geometries[index % geometries.length];
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.8,
  });

  const mesh = new THREE.Mesh(chosenGeometry, material);
  mesh.position.set(
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 4,
  );

  return {
    mesh: mesh,
    amplitude: new THREE.Vector3(
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
    ),
    frequency: new THREE.Vector3(
      Math.random() * 0.0005 + 0.0001,
      Math.random() * 0.0005 + 0.0001,
      Math.random() * 0.0005 + 0.0001,
    ),
    offset: new THREE.Vector3(
      mesh.position.x,
      mesh.position.y,
      mesh.position.z,
    ),
    rotationSpeed: new THREE.Vector3(
      Math.random() * 0.02,
      Math.random() * 0.02,
      Math.random() * 0.02,
    ),
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
    ),
  };
};
