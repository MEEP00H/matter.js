import { Bodies } from "matter-js";

const Rect = (x, y, w, h, label, angle, category) => {
  return Bodies.rectangle(x, y, w, h, {
    isStatic: true,
    label: label,
    angle: angle,
    collisionFilter: {
      group: category,
      mask: 0,
    },
  });
};

export default Rect;
