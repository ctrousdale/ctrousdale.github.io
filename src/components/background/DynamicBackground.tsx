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

export const DynamicBackground = async (): React.JSX.Element => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const modelRef = React.useRef<tf.LayersModel>(null);

  await initTensorFlow(modelRef);

  React.useEffect(() => {
    if (!mountRef.current) {
      return;
    }
  });

  return <></>;
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

  const dummyInput = tf.randomNormal([1, 4]);
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
    color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
    transparent: true,
    opacity: 0.8,
  });

  const mesh = new THREE.Mesh(chosenGeometry, material);
  mesh.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 10,
  );

  return {
    mesh: mesh,
    amplitude: new THREE.Vector3(
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
    ),
    frequency: new THREE.Vector3(
      Math.random() * 0.005 + 0.001,
      Math.random() * 0.005 + 0.001,
      Math.random() * 0.005 + 0.001,
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
