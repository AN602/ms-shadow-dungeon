declare interface Window {
    maxVelocity?: number;
    globalVelocity?: GlobalVelocity;
    globalVelocityTiming?: GlobalVelocityTiming;

    maxRotationSpeed?: number;
    globalRotationSpeed?: number;
    globalRotationSpeedTiming: NodeJS.Timer;

    elements: any[];
    shadowLights: any[];
}

declare interface GlobalVelocity {
    vx: number;
    vy: number;
}

declare interface GlobalVelocityTiming {
    vxt: NodeJS.Timer;
    vyt: NodeJS.Timer;
}