import { Bodies } from "matter-js";

const Rect = (x, y, w, h, label, angle, category, m) => {
  return Bodies.rectangle(x, y, w, h, {
    isStatic: true,
    label: label,
    angle: angle,
    collisionFilter: {
      group: category,
      mask: m,
    },
  });
};

export default Rect;
