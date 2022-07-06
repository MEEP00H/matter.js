import React from "react";
import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";
import Balls from "./Shape/Balls";
import Serrated02 from "./Filters/Serrated02";
import Grille from "./Filters/Grille";
import Rect from "./Shape/Rect";
import { eventCollisionStart } from "./Event";
import Triangle from "./Filters/Triangle";

const Canvas = () => {
  const scene = useRef();
  const engine = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );

  useEffect(() => {
    const cw = document.body.clientWidth;
    //1440

    const ch = document.body.clientHeight;
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
    const rect1 = Rect(300, 300, 800, 40, "Filter1", 3.4, 1);
    const rect2 = Rect(300, 300, 800, 40, "Filter2", 3.4, 2);
    const rect3 = Rect(300, 900, 800, 40, "Filter2", 3.5, 3);

    eventCollisionStart(current);
    Serrated02(current.world, 770, 650);
    Triangle(current.world, 790, 555, 4.7, 1);
    Triangle(current.world, 770, 550, 3.7, 2);
    Grille(current.world, 800, 1200, 3);
    Balls(current.world, cw);

    Composite.add(current.world, [rect1, rect2, rect3]);

    Engine.clear(current);
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
