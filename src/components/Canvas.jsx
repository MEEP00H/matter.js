import React from "react";
import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";
import Balls from "./Shape/Balls";
import Serrated from "./Filters/Serrated";
import Rect from "./Shape/Rect";
import { eventCollisionStart } from "./Event";
import RectFilter from "./Filters/Rect";

const Canvas = () => {
  const scene = useRef();
  const engine = useRef(Engine.create());

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
    const rect1 = Rect(300, 300, 800, 20, "test", 3.5, 1);
    const rect2 = Rect(300, 300, 800, 20, "test", 3.5, 2);
    eventCollisionStart(current);
    RectFilter(current.world, "circle1", 70, 700, 600);
    Serrated(current.world, 725, 800);
    Balls(current.world, cw);

    Composite.add(current.world, [rect1, rect2]);
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
