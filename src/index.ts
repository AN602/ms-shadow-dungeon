import { PIXI_EXTENDED } from '../typings/pixi-extended';

import * as Viewport from 'pixi-viewport';
import { addShadowElementToViewPort } from './elements/elements';
import { mainLoop } from './loop';

import './input/keyboard';

// Initialise velocity settings
window.maxVelocity = 10;
window.globalVelocity = { vx: 0, vy: 0 };
window.globalVelocityTiming = { vxt: null, vyt: null };

// Initialise rotation settings
window.maxRotationSpeed = 0.1;
window.globalRotationSpeed = 0;
window.globalRotationSpeedTiming = null;

// Create your application
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;
var app = new PIXI_EXTENDED.Application(innerWidth, innerHeight);

document.body.appendChild(app.view);

// Create a world container
var world = PIXI_EXTENDED.shadows.init(app, world);

// Create a background (that doesn't cast shadows)
var bgTexture = PIXI_EXTENDED.Texture.fromImage("background.jpg");
var background = new PIXI.Sprite(bgTexture);
background.width = innerWidth;
background.height = innerHeight;
world.addChild(background);

// create viewport
var viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,
});

app.stage.addChild(viewport);

// activate plugins
viewport
    .drag()
    .pinch()
    .wheel()
    .decelerate();

// Create some shadow casting rocks
var rockTexture = PIXI_EXTENDED.Texture.fromImage("rocks.png");
rockTexture.baseTexture.scaleMode = PIXI_EXTENDED.SCALE_MODES.NEAREST; //For pixelated scaling

var jetTexture = PIXI_EXTENDED.Texture.fromImage("jet.png");
jetTexture.baseTexture.scaleMode = PIXI_EXTENDED.SCALE_MODES.NEAREST; //For pixelated scaling

let assetScaling = 0.25

window.elements = new Array();

addShadowElementToViewPort(viewport, window.elements, jetTexture, 500, 500, 0.2);
addShadowElementToViewPort(viewport, window.elements, rockTexture, 200, 200, assetScaling);
addShadowElementToViewPort(viewport, window.elements, rockTexture, 400, 200, assetScaling);
addShadowElementToViewPort(viewport, window.elements, rockTexture, 200, 400, assetScaling);

window.elements[0].pivot.x = 250;
window.elements[0].pivot.y = 250;
console.log(window.elements[0]);

window.shadowLights = new Array();
window.shadowLights.push(new PIXI_EXTENDED.shadows.Shadow(800, 1));
window.shadowLights[0].position.set(450, 150);
viewport.addChild(window.shadowLights[0]);


world.on("mousemove", function (event) {
    window.shadowLights[0].position.copy(event.data.global);
});

// Make the light track your mouse
world.interactive = true;

app.ticker.add(delta => mainLoop(delta));
