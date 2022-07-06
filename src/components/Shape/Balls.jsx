import { Bodies, Composite } from "matter-js";
import { mockData, setColor } from "../utils";
const Balls = (world, cw) => {
  mockData().forEach((e, i) => {
    Composite.add(
      world,
      Bodies.circle(20, 0, 10, {
        label: e.type,
        // friction: 0.03,
        frictionAir: 0.05,
        restitution: 1,
        density: 0.06,
        frictionStatic: 0,
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
