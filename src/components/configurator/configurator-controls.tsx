"use client";

import React, { useState } from "react";
import {
  useConfigurator,
  PAINT_OPTIONS,
  WHEEL_OPTIONS,
  TRIM_OPTIONS,
  PaintOption,
} from "./configurator-context";
import { cn } from "@/lib/utils";
import {
  Palette,
  Disc,
  Layers,
  DoorOpen,
  Check,
  Sparkles,
  Info,
} from "lucide-react";

type TabId = "paint" | "wheels" | "trim" | "doors";

export function ConfiguratorControls() {
  const { state, setPaint, setWheels, setTrim, toggleDoor } = useConfigurator();
  const [activeTab, setActiveTab] = useState<TabId>("paint");

  const tabs = [
    { id: "paint" as TabId, label: "PAINT", icon: Palette },
    { id: "wheels" as TabId, label: "WHEELS", icon: Disc },
    { id: "trim" as TabId, label: "INTERIOR", icon: Layers },
    { id: "doors" as TabId, label: "KINEMATICS", icon: DoorOpen },
  ];

  // Group paints by tier
  const standardPaints = PAINT_OPTIONS.filter((p) => p.tier === "Standard");
  const metallicPaints = PAINT_OPTIONS.filter((p) => p.tier === "Metallic");
  const specialPaints = PAINT_OPTIONS.filter((p) => p.tier === "Special");

  return (
    <div className="w-full bg-card border border-border flex flex-col h-full select-none">
      {/* Control Tabs Header */}
      <div className="flex border-b border-border bg-background/50 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 min-w-[90px] py-3 px-3 font-mono text-xs tracking-wider flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 border-r border-border last:border-r-0 transition-colors cursor-pointer",
                isActive
                  ? "bg-card text-foreground font-bold border-b-2 border-b-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-accent" : "")} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div className="p-4 md:p-6 overflow-y-auto max-h-[520px] lg:max-h-[680px] space-y-6">
        {/* Tab 1: Paint Options */}
        {activeTab === "paint" && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">
                  Exterior Color Finish
                </h3>
                <span className="text-xs font-mono text-accent">
                  {state.paint.name}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                Select from standard high-pigment solids, metallic clearcoats, or special multi-layer paint formulations.
              </p>
            </div>

            {/* Standard Tiers */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground uppercase border-b border-border/50 pb-1">
                <span>Standard Colors</span>
                <span>Included</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {standardPaints.map((option) => (
                  <PaintSwatchCard
                    key={option.id}
                    option={option}
                    isSelected={state.paint.id === option.id}
                    onSelect={() => setPaint(option)}
                  />
                ))}
              </div>
            </div>

            {/* Metallic Tiers */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground uppercase border-b border-border/50 pb-1">
                <span>Metallic Finishes</span>
                <span>+ $1,800 – $11,900</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {metallicPaints.map((option) => (
                  <PaintSwatchCard
                    key={option.id}
                    option={option}
                    isSelected={state.paint.id === option.id}
                    onSelect={() => setPaint(option)}
                  />
                ))}
              </div>
            </div>

            {/* Special Tiers */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground uppercase border-b border-border/50 pb-1">
                <span>Special Colors</span>
                <span>+ $3,200</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specialPaints.map((option) => (
                  <PaintSwatchCard
                    key={option.id}
                    option={option}
                    isSelected={state.paint.id === option.id}
                    onSelect={() => setPaint(option)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Wheels */}
        {activeTab === "wheels" && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">
                Wheel Assembly & Rims
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Precision-engineered aluminum alloy and magnesium wheel sets designed for high-speed stability and aerodynamic downforce.
              </p>
            </div>

            <div className="space-y-3">
              {WHEEL_OPTIONS.map((wheel) => {
                const isSelected = state.wheels.id === wheel.id;
                return (
                  <button
                    key={wheel.id}
                    onClick={() => setWheels(wheel.id)}
                    className={cn(
                      "w-full text-left p-4 border transition-all cursor-pointer flex flex-col space-y-2 relative group",
                      isSelected
                        ? "bg-background border-accent shadow-sm"
                        : "bg-card border-border hover:border-foreground/30 hover:bg-muted/20"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-sm font-bold text-foreground uppercase">
                            {wheel.name}
                          </span>
                          {wheel.id === "weissach" && (
                            <span className="px-1.5 py-0.5 bg-amber-400/10 border border-amber-400/30 text-amber-500 font-mono text-[10px] uppercase flex items-center space-x-1">
                              <Sparkles className="w-3 h-3" />
                              <span>Race Spec</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                          {wheel.description}
                        </p>
                      </div>
                      {isSelected ? (
                        <div className="w-5 h-5 bg-accent text-accent-foreground flex items-center justify-center rounded-full shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 border border-border rounded-full shrink-0 group-hover:border-foreground/40" />
                      )}
                    </div>

                    <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-xs">
                      <span className="text-muted-foreground">PRICE DELTA:</span>
                      <span className={isSelected ? "text-accent font-bold" : "text-foreground"}>
                        {wheel.price === 0 ? "STANDARD" : `+$${wheel.price.toLocaleString()}`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Interior Trim */}
        {activeTab === "trim" && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">
                Cockpit Interior Upholstery
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Customize dash surrounds, door pull wraps, and race bucket seat trim packages.
              </p>
            </div>

            <div className="space-y-3">
              {TRIM_OPTIONS.map((trim) => {
                const isSelected = state.trim.id === trim.id;
                return (
                  <button
                    key={trim.id}
                    onClick={() => setTrim(trim.id)}
                    className={cn(
                      "w-full text-left p-4 border transition-all cursor-pointer flex flex-col space-y-2 relative group",
                      isSelected
                        ? "bg-background border-accent shadow-sm"
                        : "bg-card border-border hover:border-foreground/30 hover:bg-muted/20"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="font-mono text-sm font-bold text-foreground uppercase block">
                          {trim.name}
                        </span>
                        <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                          {trim.description}
                        </p>
                      </div>
                      {isSelected ? (
                        <div className="w-5 h-5 bg-accent text-accent-foreground flex items-center justify-center rounded-full shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 border border-border rounded-full shrink-0 group-hover:border-foreground/40" />
                      )}
                    </div>

                    <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-xs">
                      <span className="text-muted-foreground">TIER COST:</span>
                      <span className={isSelected ? "text-accent font-bold" : "text-foreground"}>
                        {trim.price === 0 ? "INCLUDED" : `+$${trim.price.toLocaleString()}`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Kinematics & Doors */}
        {activeTab === "doors" && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider">
                Kinematic Articulation Controls
              </h3>
              <p className="text-xs text-muted-foreground font-sans">
                Real-time PlayCanvas entity rotation testing door clearances and sill articulation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 border border-border bg-background space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-foreground uppercase">
                    Left Driver Door
                  </span>
                  <span
                    className={cn(
                      "px-2 py-0.5 font-mono text-[10px] uppercase border",
                      state.doors.L
                        ? "bg-accent/10 border-accent text-accent font-bold"
                        : "bg-muted border-border text-muted-foreground"
                    )}
                  >
                    {state.doors.L ? "OPEN" : "CLOSED"}
                  </span>
                </div>
                <button
                  onClick={() => toggleDoor("L")}
                  className="w-full py-2 bg-card border border-border hover:border-foreground/40 text-foreground font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {state.doors.L ? "Close Driver Door" : "Open Driver Door"}
                </button>
              </div>

              <div className="p-4 border border-border bg-background space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-foreground uppercase">
                    Right Passenger Door
                  </span>
                  <span
                    className={cn(
                      "px-2 py-0.5 font-mono text-[10px] uppercase border",
                      state.doors.R
                        ? "bg-accent/10 border-accent text-accent font-bold"
                        : "bg-muted border-border text-muted-foreground"
                    )}
                  >
                    {state.doors.R ? "OPEN" : "CLOSED"}
                  </span>
                </div>
                <button
                  onClick={() => toggleDoor("R")}
                  className="w-full py-2 bg-card border border-border hover:border-foreground/40 text-foreground font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {state.doors.R ? "Close Passenger Door" : "Open Passenger Door"}
                </button>
              </div>
            </div>

            <div className="p-3 bg-muted/40 border border-border text-xs text-muted-foreground space-y-1.5 font-sans">
              <div className="flex items-center space-x-1.5 font-mono text-foreground text-[11px] font-bold">
                <Info className="w-3.5 h-3.5 text-accent" />
                <span>3D Kinematics Tech Note</span>
              </div>
              <p>
                Door panel entities (<code className="text-foreground">door_l</code> and <code className="text-foreground">door_r</code>) serve as pivot targets in PlayCanvas, rotating smoothly up to 45° without clipping the outer carbon monocoque sill.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PaintSwatchCard({
  option,
  isSelected,
  onSelect,
}: {
  option: PaintOption;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "p-2.5 border text-left transition-all cursor-pointer flex items-center space-x-3 group relative",
        isSelected
          ? "bg-background border-accent shadow-xs"
          : "bg-card border-border hover:border-foreground/30 hover:bg-muted/20"
      )}
    >
      <div
        className="w-7 h-7 rounded-full border border-black/30 shrink-0 shadow-inner relative overflow-hidden"
        style={{ backgroundColor: option.hex }}
      >
        {option.finish === "metallic" && (
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
        )}
      </div>

      <div className="space-y-0.5 min-w-0 flex-1">
        <span className="font-mono text-xs font-bold text-foreground truncate block">
          {option.name}
        </span>
        <div className="flex items-center space-x-2 font-mono text-[10px] text-muted-foreground uppercase">
          <span>{option.finish}</span>
          <span>·</span>
          <span>{option.hex}</span>
        </div>
      </div>

      {isSelected && (
        <div className="w-4 h-4 bg-accent text-accent-foreground flex items-center justify-center rounded-full shrink-0">
          <Check className="w-2.5 h-2.5" />
        </div>
      )}
    </button>
  );
}
