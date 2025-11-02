import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-[var(--primary)] text-white",
    success: "bg-[var(--success)] text-white",
    warning: "bg-[var(--warning)] text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

