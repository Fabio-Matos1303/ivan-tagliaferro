import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-gray-200 p-6 shadow-sm transition-all duration-200",
        hover && "hover:shadow-md hover:scale-[1.02] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

