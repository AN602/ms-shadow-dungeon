export function mainLoop(delta: number) {
    window.elements[0].x += window.globalVelocity.vx;
    window.elements[0].y += window.globalVelocity.vy;

    window.elements[0].rotation += window.globalRotationSpeed;

    console.log(Math.cos(window.elements[0].rotation), Math.sin(window.elements[0].rotation));
}