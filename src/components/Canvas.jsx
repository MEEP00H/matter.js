import React from "react";
import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";
import Balls from "./Shape/Balls";
import Serrated02 from "./Filters/Serrated02";
import Grille from "./Filters/Grille";
import Rect from "./Shape/Rect";
import Triangle from "./Filters/Triangle";
import { calPercent } from "./utils";
import Filter01 from "./Filters/Filter01";

const Canvas = () => {
  const scene = useRef();
  const engine = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );

  useEffect(() => {
    const cw = document.body.clientWidth;
    //1440 document.body.clientWidth
    console.log(cw);
    const ch = 4734;
    //4734
    const current = engine.current;

    const render = Render.create({
      element: scene.current,
      engine: current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        showSleeping: false,
        showDebug: true,
        background: "transparent",
      },
    });

    World.add(current.world, [
      Bodies.rectangle(cw / 2, -5, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    // Serrated02(current.world, 770, 650);
    // Triangle(current.world, 790, 555, 4.7, 0x0001);
    // Triangle(current.world, 770, 550, 3.7, 0x0002);
    // Grille(current.world, 800, 1200, 3);

    Balls(current.world, 500);
    Balls(current.world, cw - 60);

    //Filter01
    Filter01(current.world, cw / 2, calPercent(25, ch), 2.75);
    Triangle(current.world, cw / 2 - 18, calPercent(20.5, ch), 3.6, 0x0001, 5);
    Triangle(current.world, cw / 2 - 18, calPercent(21.5, ch), 3.6, 0x0002, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(18.5, ch), 2.0, 0x0003, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(16.5, ch), 2.8, 0x0004, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(22.5, ch), 2.6, 0x0005, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(22.5, ch), 2.7, 0x0006, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(21.5, ch), 2.5, 0x0007, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0008, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0009, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0010, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0011, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0012, 5);
    Triangle(current.world, cw / 2 + 17, calPercent(23.5, ch), 2.4, 0x0013, 5);

    // Triangle(current.world, 790, 555, 4.7, 0x0001);
    //
    Composite.add(current.world, [
      //start
      Rect(600, calPercent(7, ch), 1200, 40, "Start1", 3.4, 0x0000, 1),
      Rect(cw + 50, calPercent(10, ch), cw, 40, "Start2", 6.025, 0x0000, 1),
      //
      // Rect(300, 300, 800, 40, "Filter1", 3.4, 0x0001),
      //rect1
      // Rect(300, 900, 800, 40, "Filter2", 3.5, 0x0003),
      // Rect(300, 900, 800, 40, "Filter2", 3.5, 0x0004),
      // Rect(300, 900, 800, 40, "Filter2", 3.5, 0x0002),
    ]);

    Engine.run(current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(current.world);
      Engine.clear(current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return <div ref={scene} style={{ width: "100%", height: "100%" }} />;
};

export default Canvas;
