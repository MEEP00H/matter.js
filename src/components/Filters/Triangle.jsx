import "pathseg";
import { Bodies, Svg, Composite, Common, Vertices } from "matter-js";
const Triangle = (world, x, y, angle, category, s) => {
  var vertexSets = [];
  Common.setDecomp(require("poly-decomp"));
  const paths = ["M 191.276 278.018 L 224.621 299.474 L 157.93 299.474 L 191.276 278.018 Z"];
  paths.forEach((path, i) => {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newElement.setAttribute("d", path);

    var points = Svg.pathToVertices(newElement);

    const r = Bodies.fromVertices(
      x,
      y,
      Vertices.scale(points, s, s),
      {
        isStatic: true,
        label: "Triangle",
        angle: angle,
        collisionFilter: {
          group: category,
          mask: 0,
        },
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 1,
        },
      },
      true
    );
    vertexSets.push(r);

    Composite.add(world, vertexSets);
  });
};
export default Triangle;
