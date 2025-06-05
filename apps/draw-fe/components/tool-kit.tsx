import { Circle, Pencil, RectangleHorizontal } from "lucide-react";
import { IconButton } from "./icon-button";
import { Shape } from "./canvas";

export const ToolKit = ({
  selectedTool,
  setSelectedTool,
}: {
  selectedTool: Shape;
  setSelectedTool: (s: Shape) => void;
}) => {
  return (
    <div className="flex space-x-2 p-2 justify-center items-center">
      <IconButton
        icon={<Pencil />}
        onClick={() => {
          setSelectedTool("pencil");
        }}
        activated={selectedTool === "pencil"}
      />
      <IconButton
        icon={<RectangleHorizontal />}
        onClick={() => {
          setSelectedTool("rect");
        }}
        activated={selectedTool === "rect"}
      />
      <IconButton
        icon={<Circle />}
        onClick={() => {
          setSelectedTool("circle");
        }}
        activated={selectedTool === "circle"}
      />
    </div>
  );
};
