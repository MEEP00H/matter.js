import { Bodies, Composite } from "matter-js";
import { mockData, setColor } from "../utils";
const Balls = (world, cw) => {
  mockData().forEach((e, i) => {
    Composite.add(
      world,
      Bodies.circle(15, 0, 10, {
        label: e.type,
        friction: 0,
        frictionAir: 0.02,
        restitution: 0.8,
        density: 0.005,
        // frictionStatic: 0.5,
        collisionFilter: {
          group: e.type,
        },
        render: {
          fillStyle: setColor(e.type),
        },
      })
    );
  });
};

export default Balls;
