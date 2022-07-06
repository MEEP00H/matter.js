import "pathseg";
import { Bodies, Svg, Composite, Common } from "matter-js";
const Serrated = (world, x, y) => {
  var vertexSets = [];
  Common.setDecomp(require("poly-decomp"));
  const paths = [
    "M 230.76 126.661 C 240.061 125.16 253.136 126.734 260.469 128.342 C 265.702 129.49 268.928 131.254 272.24 133.387 C 275.277 135.343 277.022 136.751 279.807 140.394 C 284.054 145.949 291.999 158.718 294.381 166.179 C 296.205 171.888 296.041 176.611 295.502 181.313 C 294.997 185.725 293.798 188.673 291.579 193.645 C 288.488 200.569 277.145 214.934 277.005 219.43 C 276.937 221.596 279.402 222.32 280.088 223.073 C 280.48 223.505 280.34 223.245 280.928 223.914 C 283.019 226.292 292.597 237.14 298.866 245.775 C 306.305 256.022 313.936 270.84 322.408 282.21 C 330.687 293.32 341.01 307.167 349.034 313.32 C 354.689 317.657 359.135 318.729 364.729 320.046 C 370.508 321.407 377.811 321.693 383.227 321.167 C 387.895 320.714 390.915 320.37 395.558 317.804 C 402.075 314.203 411.211 305.747 418.26 298.466 C 425.539 290.948 433.855 280.521 438.44 273.241 C 441.906 267.738 443.067 264.637 445.166 258.667 C 447.824 251.108 450.947 240.521 452.453 230.64 C 454.042 220.216 452.124 204.5 454.135 197.569 C 455.366 193.325 456.783 191.345 459.46 189.441 C 462.447 187.317 468.148 185.732 471.792 186.078 C 475.065 186.389 478.402 187.978 480.48 190.562 C 482.862 193.523 483.893 197.612 484.404 203.735 C 485.195 213.219 483.576 231.716 481.04 244.654 C 478.607 257.071 474.574 269.776 469.83 279.968 C 465.589 289.078 460.005 296.382 454.695 303.51 C 449.698 310.219 445.24 315.627 439 321.728 C 431.966 328.605 420.893 337.905 414.056 342.468 C 409.2 345.708 406.134 347.144 401.724 348.634 C 397.183 350.168 392.431 350.946 387.15 351.436 C 381.314 351.979 374.808 352.323 368.092 351.436 C 360.686 350.459 351.987 348.606 344.549 345.271 C 336.926 341.851 330.123 337.466 322.969 330.977 C 314.505 323.3 305.947 311.871 297.744 300.708 C 288.911 288.686 280.611 273.161 271.96 260.91 C 263.881 249.468 253.225 232.415 247.576 229.239 C 244.85 227.706 243.492 227.177 241.13 229.8 C 234.683 236.96 225.435 287.716 217.027 305.753 C 211.138 318.387 200.918 330.203 198.809 332.939 C 198.25 333.665 198.668 333.231 197.969 333.78 C 195.488 335.726 180.814 346.783 174.706 349.755 C 170.598 351.754 168.829 351.904 164.617 352.558 C 159.017 353.427 150.754 354.236 143.316 353.679 C 135.3 353.078 125.106 351.703 118.092 348.634 C 111.849 345.902 107.775 341.998 102.677 337.143 C 96.832 331.576 91.097 324.813 85.301 316.403 C 78.394 306.383 70.553 293.474 64.561 279.968 C 58.059 265.314 51.633 243.813 48.305 231.201 C 45.95 222.276 43.748 215.699 44.381 209.901 C 44.892 205.223 47.387 200.888 49.706 198.41 C 51.59 196.398 54.081 195.603 56.433 195.046 C 58.755 194.496 61.218 194.223 63.72 195.046 C 66.699 196.027 69.858 196.559 72.969 201.493 C 79.389 211.676 85.542 250.675 92.588 267.636 C 97.905 280.436 103.222 288.571 109.404 297.345 C 115.163 305.519 122.479 314.863 128.182 318.925 C 132.194 321.783 135.084 322.145 139.392 322.849 C 144.409 323.668 151.836 323.69 156.769 322.849 C 160.93 322.139 163.932 320.991 167.419 318.925 C 171.329 316.609 177.149 310.992 178.91 309.116 C 179.698 308.277 179.34 308.661 180.031 307.434 C 182.184 303.615 190.984 288.968 195.727 276.605 C 201.495 261.568 212.014 229.759 210.861 222.232 C 210.392 219.17 207.951 220.304 206.377 218.309 C 204.112 215.436 200.881 209.746 199.09 205.416 C 197.401 201.334 196.548 198.559 195.727 193.084 C 194.533 185.128 193.622 168.548 194.045 160.573 C 194.334 155.129 194.504 152.1 196.287 148.241 C 198.19 144.123 200.914 140.055 205.536 136.75 C 211.436 132.531 221.792 128.108 230.76 126.661 Z",
  ];
  paths.forEach((path, i) => {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newElement.setAttribute("d", path);

    var points = Svg.pathToVertices(newElement);

    const r = Bodies.fromVertices(
      x,
      y,
      points,
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
export default Serrated;
