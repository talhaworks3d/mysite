import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Section } from "@/components/section";
import { Tag } from "@/components/tag";
import { ConfiguratorProvider } from "@/components/configurator/configurator-context";
import { ConfiguratorViewport } from "@/components/configurator/configurator-viewport";
import { ConfiguratorControls } from "@/components/configurator/configurator-controls";
import { ConfiguratorSummary } from "@/components/configurator/configurator-summary";
import { Box, Cpu, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "918 Spyder 3D Configurator | Studio XYZ",
  description:
    "Interactive real-time 3D WebGL configurator. Customize paint, wheels, interior trim, and kinematic doors.",
};


export default function ConfiguratorPage() {
  return (
    <Section className="py-8 md:py-12">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-4 border-b border-border pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Tag variant="accent">PORTFOLIO LAB</Tag>
                <span className="text-sm font-mono text-muted-foreground uppercase">
                  PLAYCANVAS WEBGL 2.0 ENGINE
                </span>
              </div>
              <h1 className="text-7xl font-sans font-bold tracking-tight text-foreground">
                918 SPYDER 3D STUDIO
              </h1>
            </div>

            <div className="hidden sm:flex items-center space-x-3 text-sm font-mono text-muted-foreground">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 border border-border bg-card">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>POSTMESSAGE BRIDGE V2</span>
              </div>
            </div>
          </div>

          <p className="text-xl font-mono text-muted-foreground max-w-xl">
            Interactive WebGL configurator. Customize paint, wheels, trim, and doors in real-time.
          </p>
        </div>

        {/* Configurator Studio Layout */}
        <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-muted/10 border border-border flex items-center justify-center text-sm font-mono text-muted-foreground">Loading Studio...</div>}>
          <ConfiguratorProvider>
            <div className="space-y-6">
              {/* 3D Viewport + Controls Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* 3D Viewport (8 Columns on desktop) */}
                <div className="lg:col-span-8 w-full">
                  <ConfiguratorViewport />
                </div>

                {/* Control Panel Sidebar (4 Columns on desktop) */}
                <div className="lg:col-span-4 w-full">
                  <ConfiguratorControls />
                </div>
              </div>

              {/* Bottom Specs & Price Bar */}
              <ConfiguratorSummary />
            </div>
          </ConfiguratorProvider>
        </Suspense>

        {/* Tech spec strip */}
        <div className="pt-6 border-t border-border flex flex-wrap gap-8 text-sm font-mono text-muted-foreground">
          <div>
            <span className="block text-sm font-mono uppercase">Engine</span>
            <span className="text-foreground font-medium">PlayCanvas WebGL 2.0</span>
          </div>
          <div>
            <span className="block text-sm font-mono uppercase">Bridge</span>
            <span className="text-foreground font-medium">PostMessage v2</span>
          </div>
          <div>
            <span className="block text-sm font-mono uppercase">Shading</span>
            <span className="text-foreground font-medium">PBR Real-Time</span>
          </div>
          <div>
            <span className="block text-sm font-mono uppercase">Mesh</span>
            <span className="text-foreground font-medium">CAD Retopology</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
