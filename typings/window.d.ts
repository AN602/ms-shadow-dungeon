declare interface Window {
    maxVelocity?: number;
    globalVelocity?: GlobalVelocity;
    globalVelocityTiming?: GlobalVelocityTiming;

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