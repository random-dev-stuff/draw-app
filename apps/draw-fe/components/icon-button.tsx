import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  activated: boolean;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick, activated }: IconButtonProps) => {
  return (
    <div
      className={`p-2 hover:cursor-pointer outline-1 rounded-full ${activated ? "text-red-400" : "text-white"}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
