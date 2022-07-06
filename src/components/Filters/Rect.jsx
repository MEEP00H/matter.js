import { Bodies, Composite } from "matter-js";

const Rect = (world, label, w, x, y) => {
  Composite.add(
    world,
    Bodies.rectangle(x, y, w, 15, {
      label: label,
      isStatic: true,
    })
  );
};

export default Rect;
