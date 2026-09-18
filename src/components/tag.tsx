import React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export function Tag({
  children,
  className,
  variant = "default",
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs tracking-wider uppercase border transition-colors",
        variant === "default" &&
          "border-border bg-card text-muted-foreground",
        variant === "outline" &&
          "border-border text-foreground bg-transparent",
        variant === "accent" &&
          "border-accent/40 bg-accent/10 text-accent font-medium",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
