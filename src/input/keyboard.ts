import { decreaseVelocityX, decreaseVelocityY, increaseVelocityX, increaseVelocityY, resetVelocityX, resetVelocityY } from "../movement/velocity-control";
import { increaseRotationSpeed, resetRotationSpeed, decreaseRotationSpeed } from "../movement/rotation-control";

interface KeyBinding {
  code: number;
  isDown: boolean;
  isUp: boolean;
  press(): void;
  release(): void;
  downHandler(event: KeyboardEvent): void;
  upHandler(event: KeyboardEvent): void;
}

export function keyboard(keyCode: number): KeyBinding {
  let key: KeyBinding = {
    code: keyCode,
    isDown: false,
    isUp: true,
    press: undefined,
    release: undefined,
    downHandler: undefined,
    upHandler: undefined
  };

  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

let left = keyboard(37);
let up = keyboard(38);
let right = keyboard(39);
let down = keyboard(40);

let timingAcceleration = 50;
let timingDeceleration = 100;

//Left arrow key `press` method
left.press = () => {
  if (!right.isDown) {
    decreaseRotationSpeed(timingAcceleration);
  }
};

//Left arrow key `release` method
left.release = () => {
  if (!right.isDown) {
    resetRotationSpeed(timingDeceleration);
  } else {
    increaseRotationSpeed(timingAcceleration);
  }
};

//Up
up.press = () => {
  if (!down.isDown) {
    decreaseVelocityY(timingAcceleration);
  }
};

up.release = () => {
  if (!down.isDown) {
    resetVelocityY(timingDeceleration);
  } else {
    increaseVelocityY(timingAcceleration);
  }
};

//Right
right.press = () => {
  if (!left.isDown) {
    increaseRotationSpeed(timingAcceleration);
  }
};

right.release = () => {
  if (!left.isDown) {
    resetRotationSpeed(timingDeceleration);
  } else {
    decreaseRotationSpeed(timingAcceleration);
  }
};

//Down
down.press = () => {
  if (!up.isDown) {
    increaseVelocityY(timingAcceleration);
  }
};
down.release = () => {
  if (!up.isDown) {
    resetVelocityY(timingDeceleration);
  } else {
    decreaseVelocityY(timingAcceleration);
  }
};