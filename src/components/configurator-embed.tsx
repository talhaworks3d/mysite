"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { RefreshCw, MousePointerClick } from "lucide-react";

interface ConfiguratorEmbedProps {
  aspect?: string; // Tailwind aspect-ratio class, default aspect-video
  className?: string;
  autoActivate?: boolean;
}

export default function ConfiguratorEmbed({
  aspect = "aspect-video",
  className = "",
  autoActivate = false,
}: ConfiguratorEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(autoActivate);

  const embedUrl = "https://playcanv.as/b/3b4fac3c";

  return (
    <div
      onMouseLeave={() => {
        if (!autoActivate) {
          setActive(false);
        }
      }}
      className={cn(
        "relative w-full overflow-hidden border border-border bg-card transition-colors select-none",
        aspect,
        className
      )}
    >
      {/* Loading Screen */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-3 bg-background/95 font-mono text-xs text-muted-foreground">
          <RefreshCw className="w-6 h-6 text-accent animate-spin" />
          <span>LOADING CONFIGURATOR…</span>
        </div>
      )}

      {/* Interaction Overlay: Requires click to interact */}
      {!active && loaded && (
        <button
          onClick={() => setActive(true)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-3 bg-background/60 backdrop-blur-[2px] text-foreground font-mono text-xs group cursor-pointer transition-all hover:bg-background/40"
        >
          <div className="w-12 h-12 border border-border bg-background flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors shadow-sm">
            <MousePointerClick className="w-5 h-5 text-accent animate-bounce" />
          </div>
          <div className="space-y-1 text-center">
            <span className="bg-background px-3 py-1.5 border border-border font-bold uppercase tracking-wider text-xs block">
              Click to interact with 3D model
            </span>
            <span className="text-[10px] text-muted-foreground font-sans block">
              Enables 360° rotation & zoom controls
            </span>
          </div>
        </button>
      )}

      {/* Active Indicator Badge */}
      {active && loaded && !autoActivate && (
        <div className="absolute top-3 right-3 z-10 flex items-center space-x-2 bg-background/90 border border-accent/40 px-2.5 py-1 font-mono text-[10px] text-accent backdrop-blur-xs pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span>3D VIEWPORT ACTIVE</span>
        </div>
      )}

      {/* PlayCanvas Iframe */}
      <iframe
        src={embedUrl}
        title="Hyperion GTR Car Configurator"
        className={cn(
          "w-full h-full border-0",
          !active ? "pointer-events-none" : "pointer-events-auto"
        )}
        allow="fullscreen; xr-spatial-tracking"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
