import "pathseg";
import { Bodies, Svg, Composite, Common, Vertices } from "matter-js";
const Serrated02 = (world, x, y) => {
  var vertexSets = [];
  Common.setDecomp(require("poly-decomp"));
  const paths = [
    "M 149.869 376.473 L 178.983 375.729 L 242.662 295.16 L 266.405 294.231 L 323.852 374.773 L 356.305 374.669 L 434.702 278.736 L 362.014 403.211 L 313.306 404.885 L 263.688 323.262 L 246.682 323.956 L 186.536 405.337 L 145.963 406.386 L 51.344 280.771 L 149.869 376.473 Z",
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
export default Serrated02;
