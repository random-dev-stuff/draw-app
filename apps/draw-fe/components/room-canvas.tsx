"use client";

import { useEffect, useState } from "react";
import { Canvas } from "./canvas";
import { WS_URL } from "@/config";

export const RoomCanvas = ({ roomId }: { roomId: string }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtYW9hbm43MTAwMDBtMnhvYzR2cW5hd3YiLCJpYXQiOjE3NDc1NTk4MzV9.rNDOFePQQT1r5osxGjiFOtdS9QaUbDoXt7wdzsGNWaI`
    );

    ws.onopen = () => {
      setSocket(ws);
      ws.send(
        JSON.stringify({
          type: "join_room",
          roomId,
        })
      );
    };
  }, []);

  if (!socket) {
    return <div>Connecting to Web socket...</div>;
  }
  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
};
