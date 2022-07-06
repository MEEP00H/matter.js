import "pathseg";
import { Bodies, Svg, Composite, Common, Vertices } from "matter-js";
const Serrated01 = (world, x, y) => {
  var vertexSets = [];
  Common.setDecomp(require("poly-decomp"));
  const paths = [
    "M 171.179 135.539 L 52.754 236.883 L 82.241 222.174 L 177.092 176.718 L 204.236 175.881 C 202.752 166.81 323.362 247.708 324.422 254.19 L 372.299 253.447 L 437.577 173.419 L 464.723 136.876 L 362.263 227.587 L 332.388 228.528 L 211.278 135.967 L 171.179 135.539 Z",
  ];
  paths.forEach((path, i) => {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newElement.setAttribute("d", path);

    var points = Svg.pathToVertices(newElement);

    const r = Bodies.fromVertices(
      x,
      y,
      Vertices.scale(points, 1.5, 1.5),
      {
        isStatic: true,
        label: "serrated",
        render: {
          fillStyle: "black",
          strokeStyle: "black",
          lineWidth: 1,
        },
      },
      true
    );
    vertexSets.push(r);

    Composite.add(world, vertexSets);
  });
};
export default Serrated01;
