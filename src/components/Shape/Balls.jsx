import { Bodies, Composite } from "matter-js";
import { mockData, setColor } from "../utils";
const Balls = (world, x) => {
  mockData().forEach((e, _) => {
    Composite.add(
      world,
      Bodies.circle(x, 0, 12, {
        label: e.type,
        friction: 0,
        frictionAir: 0.03,
        restitution: 0.9,
        density: 0.003,
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
