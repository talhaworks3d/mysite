import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bordered?: boolean;
  containerClassName?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  bordered = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32 relative",
        bordered && "border-b border-border",
        className
      )}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
