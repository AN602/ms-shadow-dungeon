import * as PIXI_BASE from 'pixi.js';
import "pixi-layers";
import "pixi-shadows";

declare namespace PIXI_SHADOWS {
    let shadows: shadows;
}

interface shadows {
    init(app: PIXI_BASE.Application, world: any): any;
    Shadow: Shadow;
    casterGroup: PIXI_BASE.display.Group;
}

interface Shadow {
    new(size: number, intensity: number): Shadow;
}

export const PIXI_EXTENDED: (typeof PIXI_BASE & typeof PIXI_SHADOWS) = PIXI_BASE as any;