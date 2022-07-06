import { Events, Body } from "matter-js";
export const eventCollisionStart = (current) => {
  Events.on(current, "collisionStart", (event) => {
    const source = event.source;
    const arrayPair = source.detector.pairs;
    const { bodyA, bodyB } = arrayPair.collisionStart[0];
    if (bodyA.label === "circle1" && bodyB.label === 1) Body.setVelocity(bodyB, { x: -3, y: -3 });
    if (bodyA.label === "circle1" && bodyB.label === 2) Body.setVelocity(bodyB, { x: 3, y: -3 });
  });
};
