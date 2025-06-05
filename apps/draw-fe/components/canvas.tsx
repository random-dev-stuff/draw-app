import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { ToolKit } from "./tool-kit";

export type Shape = "rect" | "pencil" | "circle";

export const Canvas = ({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTool, setSelectedTool] = useState<Shape>("pencil");

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    initDraw(canvasRef.current, roomId, socket);
  }, [canvasRef]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* TODO - Use a hook to dynamically render the height and width of the canvas */}
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      ></canvas>
      <div className="fixed top-10 left-10 ">
        <ToolKit
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />
      </div>
    </div>
  );
};
