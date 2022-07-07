import "pathseg";
import { Bodies, Svg, Composite, Common, Vertices } from "matter-js";
const Filter01 = (world, x, y, s) => {
  var vertexSets = [];
  Common.setDecomp(require("poly-decomp"));
  const paths = [
    "M 208.601 211.106 L 50.708 323.036 L 203.152 257.674 L 239.732 258.084 L 403.619 317.158 L 233.718 211.425 L 208.601 211.106 Z",
  ];
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
        label: "Filter01",
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
export default Filter01;
