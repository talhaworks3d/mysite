import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Section } from "@/components/section";
import { Tag } from "@/components/tag";
import { ConfiguratorProvider } from "@/components/configurator/configurator-context";
import { ConfiguratorViewport } from "@/components/configurator/configurator-viewport";
import { ConfiguratorControls } from "@/components/configurator/configurator-controls";
import { ConfiguratorSummary } from "@/components/configurator/configurator-summary";
import { RefreshCw, Box, Cpu, Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "918 Spyder 3D WebGL Configurator Studio | TALHA",
  description:
    "Interactive real-time 3D PlayCanvas WebGL configurator for the Porsche 918 Spyder. Customize paint finishes, Weissach magnesium wheels, race Alcantara trim, and kinematic doors.",
};

function ConfiguratorLoadingFallback() {
  return (
    <div className="w-full h-[600px] bg-card border border-border flex flex-col items-center justify-center space-y-3 font-mono text-xs text-muted-foreground">
      <RefreshCw className="w-6 h-6 text-accent animate-spin" />
      <span>LOADING CONFIGURATOR APPLICATION…</span>
    </div>
  );
}

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
                <span className="text-xs font-mono text-muted-foreground uppercase">
                  PLAYCANVAS WEBGL 2.0 ENGINE
                </span>
              </div>
              <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                918 SPYDER 3D STUDIO
              </h1>
            </div>

            <div className="hidden sm:flex items-center space-x-3 text-xs font-mono text-muted-foreground">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 border border-border bg-card">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>POSTMESSAGE BRIDGE V2</span>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-3xl leading-relaxed">
            Real-time WebGL hardware visualizer and car configurator built on PlayCanvas. Interact with PBR material shaders, toggle Weissach lightweight forged rims, rotate kinematic door panels, and inspect driver cockpit camera views.
          </p>
        </div>

        {/* Configurator Studio Layout wrapped in Provider + Suspense */}
        <Suspense fallback={<ConfiguratorLoadingFallback />}>
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

        {/* Technical Architecture Overview */}
        <div className="pt-8 border-t border-border space-y-6">
          <div className="space-y-1">
            <h2 className="font-mono text-lg font-bold text-foreground uppercase tracking-wider">
              Technical Pipeline & Integration Specifications
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground font-sans">
              How this 3D WebGL configurator is engineered for production eCommerce & hardware catalogs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-border bg-card space-y-3">
              <div className="w-9 h-9 border border-border bg-background flex items-center justify-center text-accent">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground uppercase">
                CAD Retopology & Mesh Hierarchy
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Raw industrial STEP/IGES CAD converted into lightweight quad/tri topology with single shared material maps across body panels (<code className="text-foreground">body</code>, <code className="text-foreground">door_l</code>, <code className="text-foreground">door_r</code>).
              </p>
            </div>

            <div className="p-5 border border-border bg-card space-y-3">
              <div className="w-9 h-9 border border-border bg-background flex items-center justify-center text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground uppercase">
                Bi-Directional PostMessage Protocol
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                React context coordinates asynchronous postMessage handshakes with PlayCanvas (<code className="text-foreground">PC_READY</code>, <code className="text-foreground">SET_PAINT</code>, <code className="text-foreground">SET_WHEELS</code>, <code className="text-foreground">CONFIG_APPLIED</code>) with automatic command buffering.
              </p>
            </div>

            <div className="p-5 border border-border bg-card space-y-3">
              <div className="w-9 h-9 border border-border bg-background flex items-center justify-center text-accent">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground uppercase">
                Physically Based Shader Tuning
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Dynamic metalness and gloss adjustments tune the single shared material instance in real time, switching between high-reflection metallics, deep solid lacquers, and custom special paint clears.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
