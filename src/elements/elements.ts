import { createShadowSprite } from "../lighting/shadows";

export function addShadowElementToViewPort(
    viewport: PIXI.Container,
    elements: PIXI.Container[],
    texture: PIXI.Texture,
    positionX: number,
    positionY: number,
    assetScaling: number
): number {
    let elementsCount = elements.push(createShadowSprite(texture, texture));
    elements[elementsCount - 1].position.set(positionX, positionY);
    elements[elementsCount - 1].scale.set(assetScaling);
    viewport.addChild(elements[elementsCount - 1]);

    return elementsCount;
}