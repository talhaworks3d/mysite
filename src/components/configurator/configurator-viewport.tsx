"use client";

import React, { useState } from "react";
import { useConfigurator, CAMERA_PRESETS } from "./configurator-context";
import { cn } from "@/lib/utils";
import {
  RefreshCw,
  Camera,
  DoorOpen,
  Check,
  Maximize2,
  Play,
} from "lucide-react";

export function ConfiguratorViewport() {
  const { state, iframeRef, setIsReady, setCamera, toggleDoor } = useConfigurator();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const el = document.getElementById("configurator-viewport-container");
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  };

  return (
    <div
      id="configurator-viewport-container"
      className="relative w-full aspect-video min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[600px] bg-neutral-950 border border-border overflow-hidden select-none group shadow-lg"
    >
      {/* Hairline Grid Overlay background */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none z-0" />

      {/* Loading Overlay */}
      {!state.isReady && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center space-y-4 bg-background/90 backdrop-blur-sm font-mono text-xs text-muted-foreground p-4 text-center">
          <div className="relative">
            <RefreshCw className="w-8 h-8 text-accent animate-spin" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-accent animate-ping" />
          </div>
          <div className="space-y-1.5 max-w-sm">
            <p className="font-bold text-foreground tracking-wider uppercase text-sm">
              Initializing 918 Spyder Engine
            </p>
            <p className="text-[11px] text-muted-foreground font-sans">
              Connecting PlayCanvas WebGL Shader Pipelines…
            </p>
            {state.bufferedCount > 0 && (
              <span className="inline-block px-2.5 py-0.5 mt-1 bg-accent/10 border border-accent/30 text-accent text-[10px] font-mono">
                {state.bufferedCount} configuration command(s) queued
              </span>
            )}
          </div>

          <button
            onClick={() => setIsReady(true)}
            className="mt-2 px-4 py-2 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 transition-all cursor-pointer flex items-center space-x-2 shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Enter 3D Studio</span>
          </button>
        </div>
      )}

      {/* Active Indicator Badge */}
      {state.isReady && (
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-background/90 border border-accent/40 px-3 py-1.5 font-mono text-[10px] text-accent backdrop-blur-md pointer-events-none shadow-xs">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="font-bold tracking-widest uppercase">3D VIEWPORT LIVE</span>
        </div>
      )}

      {/* Quick Doors Kinematics Overlay */}
      {state.isReady && (
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <button
            onClick={() => toggleDoor("L")}
            className={cn(
              "px-3 py-1.5 font-mono text-xs border transition-all flex items-center space-x-1.5 backdrop-blur-md cursor-pointer",
              state.doors.L
                ? "bg-accent text-accent-foreground border-accent font-bold"
                : "bg-background/80 border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground"
            )}
            title="Toggle Left Door"
          >
            <DoorOpen className="w-3.5 h-3.5" />
            <span>DOOR L {state.doors.L ? "[OPEN]" : "[CLOSED]"}</span>
          </button>
          <button
            onClick={() => toggleDoor("R")}
            className={cn(
              "px-3 py-1.5 font-mono text-xs border transition-all flex items-center space-x-1.5 backdrop-blur-md cursor-pointer",
              state.doors.R
                ? "bg-accent text-accent-foreground border-accent font-bold"
                : "bg-background/80 border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground"
            )}
            title="Toggle Right Door"
          >
            <DoorOpen className="w-3.5 h-3.5" />
            <span>DOOR R {state.doors.R ? "[OPEN]" : "[CLOSED]"}</span>
          </button>
        </div>
      )}

      {/* Floating Camera Presets Bar */}
      {state.isReady && (
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-background/90 border border-border p-1 backdrop-blur-md pointer-events-auto overflow-x-auto max-w-full">
            <div className="px-2 py-1 font-mono text-[10px] text-muted-foreground uppercase hidden sm:flex items-center space-x-1">
              <Camera className="w-3 h-3 text-accent" />
              <span>VIEWS</span>
            </div>
            {CAMERA_PRESETS.map((preset) => {
              const isSelected = state.activeCamera === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setCamera(preset.id)}
                  className={cn(
                    "px-2.5 py-1 text-xs font-mono transition-all whitespace-nowrap cursor-pointer flex items-center space-x-1",
                    isSelected
                      ? "bg-foreground text-background font-bold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {isSelected && <Check className="w-3 h-3 text-accent" />}
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2 bg-background/90 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors backdrop-blur-md pointer-events-auto cursor-pointer"
            title="Toggle Viewport Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* PlayCanvas Iframe — Direct WebGL App link for direct postMessage communication */}
      <iframe
        ref={iframeRef}
        src="https://playcanv.as/apps/881852a9/index.html"
        title="Porsche 918 Spyder 3D Configurator Studio"
        onLoad={() => setIsReady(true)}
        className="w-full h-full border-0 relative z-10 pointer-events-auto"
        allow="fullscreen; xr-spatial-tracking"
        loading="eager"
      />
    </div>
  );
}
