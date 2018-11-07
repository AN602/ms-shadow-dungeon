export function mainLoop(delta: number) {
    window.shadowLights[0].x += window.globalVelocity.vx;
    window.shadowLights[0].y += window.globalVelocity.vy;
}