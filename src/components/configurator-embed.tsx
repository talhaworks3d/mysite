"use client";

import { cn } from "@/lib/utils";

interface ConfiguratorEmbedProps {
  aspect?: string;
  className?: string;
}

export default function ConfiguratorEmbed({
  aspect = "aspect-video",
  className = "",
}: ConfiguratorEmbedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-border select-none",
        aspect,
        className
      )}
    >
      <iframe
        src="https://playcanv.as/apps/881852a9/index.html"
        title="Hyperion GTR Car Configurator"
        className="w-full h-full border-0"
        allow="fullscreen; xr-spatial-tracking"
        loading="lazy"
      />
    </div>
  );
}
