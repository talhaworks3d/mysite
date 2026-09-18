import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  disabled?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  disabled,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center text-sm font-mono uppercase tracking-widest transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none",
    size === "sm" && "px-3 py-1.5 text-xs",
    size === "md" && "px-5 py-2.5 text-sm font-mono",
    size === "lg" && "px-7 py-3 text-sm font-mono",
    variant === "primary" &&
      "bg-foreground text-background border border-foreground hover:bg-transparent hover:text-foreground",
    variant === "secondary" &&
      "bg-accent text-accent-foreground border border-accent hover:bg-accent/90",
    variant === "outline" &&
      "border border-border text-foreground bg-transparent hover:border-foreground hover:bg-card",
    variant === "ghost" &&
      "text-muted-foreground hover:text-foreground bg-transparent hover:bg-card",
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
