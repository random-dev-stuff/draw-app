import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";

export const Canvas = ({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    initDraw(canvasRef.current, roomId, socket);
  }, [canvasRef]);

  return <canvas width={2000} height={1080} ref={canvasRef}></canvas>;
};
