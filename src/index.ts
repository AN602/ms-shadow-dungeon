import * as PIXI from 'pixi.js';
import "pixi-layers";
import "pixi-shadows";

// Create your application
var width = 1280;
var height = 720;
var app = new PIXI.Application(width, height);
document.body.appendChild(app.view);

// Create a world container
var world = PIXI.shadows.init(app, world);

// A function to combine different assets if your world object, but give them a common transform by using pixi-layers
// It is of course recommended to create a custom class for this, but this demo just shows the minimal steps required
function createShadowSprite(texture, shadowTexture) {
    var container = new PIXI.Container(); // This represents your final 'sprite'

    // Things that create shadows
    if (shadowTexture) {
        var shadowCastingSprite = new PIXI.Sprite(shadowTexture);
        shadowCastingSprite.parentGroup = PIXI.shadows.casterGroup;
        container.addChild(shadowCastingSprite);
    }

    // The things themselves (their texture)
    var sprite = new PIXI.Sprite(texture);
    container.addChild(sprite);

    return container;
}

// Create a light that casts shadows
var shadow = new PIXI.shadows.Shadow(700, 1);
shadow.position.set(450, 150);
world.addChild(shadow);

// Create a background (that doesn't cast shadows)
var bgTexture = PIXI.Texture.fromImage("background.jpg");
var background = new PIXI.Sprite(bgTexture);
world.addChild(background);

// Create some shadow casting rocks
var demonTexture = PIXI.Texture.fromImage("rocks.png");
demonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST; //For pixelated scaling

let assetScaling = 0.25

var demon1 = createShadowSprite(demonTexture, demonTexture);
demon1.position.set(100, 100);
demon1.scale.set(assetScaling);
world.addChild(demon1);

var demon2 = createShadowSprite(demonTexture, demonTexture);
demon2.position.set(500, 100);
demon2.scale.set(assetScaling);
world.addChild(demon2);

var demon3 = createShadowSprite(demonTexture, demonTexture);
demon3.position.set(300, 200);
demon3.scale.set(assetScaling);
world.addChild(demon3);

// Make the light track your mouse
world.interactive = true;
world.on("mousemove", function(event) {
    shadow.position.copy(event.data.global);
});

// Create a light point on click
world.on("pointerdown", function(event) {
    var shadow = new PIXI.shadows.Shadow(700, 0.7);
    shadow.position.copy(event.data.global);
    world.addChild(shadow);
});