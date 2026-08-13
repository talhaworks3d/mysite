"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, Box } from "lucide-react";

const NAV_ITEMS = [
  { label: "WORK", href: "/work" },
  { label: "CONFIGURATOR", href: "/configurator" },
  { label: "SERVICES", href: "/services" },
  { label: "PRICING", href: "/pricing" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md transition-colors">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo + Navigation immediately from the left */}
        <div className="flex items-center space-x-8 lg:space-x-12">
          <Link href="/" className="group flex items-center space-x-2 font-mono text-sm tracking-wider shrink-0">
            <div className="w-7 h-7 border border-border group-hover:border-foreground flex items-center justify-center bg-card transition-colors">
              <Box className="w-4 h-4 text-accent" />
            </div>
            <span className="font-bold text-foreground">TALHA</span>
            <span className="text-muted-foreground text-xs font-normal">// STUDIO XYZ</span>
          </Link>

          {/* Desktop Navigation immediately following brand name */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-xs tracking-widest">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground relative py-1",
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action / Theme Switcher on far right */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-border text-foreground hover:bg-card cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-6 space-y-4 font-mono text-xs">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block py-2 text-sm tracking-wider border-b border-border/40",
                pathname === item.href ? "text-accent font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
