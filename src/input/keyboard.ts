import { decreaseVelocityX, decreaseVelocityY, increaseVelocityX, increaseVelocityY, resetVelocityX, resetVelocityY } from "../movement/velocity-control";

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

let timing = 100;

//Left arrow key `press` method
left.press = () => {
  //Change the cat's velocity when the key is pressed
  decreaseVelocityX(timing);
};

//Left arrow key `release` method
left.release = () => {
  //If the left arrow has been released, and the right arrow isn't down,
  //and the cat isn't moving vertically:
  //Stop the cat
  if (!right.isDown && window.globalVelocity.vy === 0) {
    resetVelocityX(timing);
  }
};

//Up
up.press = () => {
  decreaseVelocityY(timing);
};

up.release = () => {
  if (!down.isDown && window.globalVelocity.vx === 0) {
    resetVelocityY(timing);
  }
};

//Right
right.press = () => {
  increaseVelocityX(timing);
};

right.release = () => {
  if (!left.isDown && window.globalVelocity.vy === 0) {
    resetVelocityX(timing);
  }
};

//Down
down.press = () => {
  increaseVelocityY(timing);
};
down.release = () => {
  if (!up.isDown && window.globalVelocity.vx === 0) {
    resetVelocityY(timing);
  }
};