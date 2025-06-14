import * as THREE from "three";
import * as tf from "@tensorflow/tfjs";
import { initTensorFlow } from "./TFModel";

// #region Types

interface IFloatingShape {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  amplitude: THREE.Vector3;
  frequency: THREE.Vector3;
  offset: THREE.Vector3;
}

// #endregion Types

const geometries = [
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.SphereGeometry(0.3, 16, 16),
  new THREE.ConeGeometry(0.3, 0.6, 8),
  new THREE.OctahedronGeometry(0.4),
];

const createShape = (
  index: number,
  windowWidth: number,
  windowHeight: number,
): IFloatingShape => {
  const chosenGeometry = geometries[index % geometries.length];
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.8,
  });

  const mesh = new THREE.Mesh(chosenGeometry, material);
  const xRange = windowWidth / 100;
  const yRange = windowHeight / 100;
  mesh.position.set(
    (Math.random() - 0.5) * xRange,
    (Math.random() - 0.5) * yRange,
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

export const setupAndRegister = async (
  modelRef: React.RefObject<tf.LayersModel | null>,
  mountRef: React.RefObject<HTMLDivElement | null>,
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>,
  animationIdRef: React.RefObject<number | null>,
) => {
  let [model, mount, renderer, animationId] = [
    modelRef.current,
    mountRef.current,
    rendererRef.current,
    animationIdRef.current,
  ];

  await initTensorFlow(model);

  if (!mount) {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 10;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);
  mount.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(-10, 0, 2);
  light.rotation.set(10, 0, -3);
  scene.add(light);

  const shapes: IFloatingShape[] = [];
  for (let i = 0; i < 10; i++) {
    const shape = createShape(i, width, height);
    scene.add(shape.mesh);
    shapes.push(shape);
  }

  const animate = () => {
    shapes.forEach((shape) => {
      const t = performance.now();
      shape.mesh.position.x =
        shape.offset.x + Math.sin(t * shape.frequency.x) * shape.amplitude.x;
      shape.mesh.position.y =
        shape.offset.y + Math.cos(t * shape.frequency.y) * shape.amplitude.y;
      shape.mesh.position.z =
        shape.offset.z + Math.sin(t * shape.frequency.z) * shape.amplitude.z;

      shape.mesh.rotation.x += shape.rotationSpeed.x;
      shape.mesh.rotation.y += shape.rotationSpeed.y;
      shape.mesh.rotation.z += shape.rotationSpeed.z;
    });

    renderer!.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };

  animate();
};
