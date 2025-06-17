import * as tf from "@tensorflow/tfjs";

interface IUserInput {
  mouseX: number;
  mouseY: number;
  clickIntensity: number;
  timestamp: number;
}

const MAX_INPUT_LENGTH = 10000;
const USER_INPUTS: IUserInput[] = [];

export const initTensorFlow = async (modelRef: tf.LayersModel | null) => {
  await tf.ready();

  const model = tf.sequential({
    layers: [
      tf.layers.dense({ units: 16, activation: "relu", inputShape: [4] }), // mouseX, mouseY, clickIntensity, deltaTime
      tf.layers.dense({ units: 16, activation: "relu" }),
      tf.layers.dense({ units: 8, activation: "relu" }),
      tf.layers.dense({ units: 3, activation: "tanh" }), // x, y, z influence
    ],
  });

  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: "meanSquaredError",
  });

  modelRef = model;
};

export const addUserInput = (input: IUserInput) => {
  USER_INPUTS.push(input);
  if (USER_INPUTS.length > MAX_INPUT_LENGTH) {
    USER_INPUTS.shift();
  }
};
