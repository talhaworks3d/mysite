import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">THE STUDIO</Tag>
          <h1 className="text-7xl font-sans font-bold text-foreground tracking-tight">
            About & Process
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-xl">
            Converting industrial CAD into production-ready 3D assets for web and simulation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-7xl font-sans font-bold text-foreground">
              CAD to Web. CAD to Sim.
            </h2>
            <div className="space-y-4 text-xl font-mono text-muted-foreground leading-relaxed">
              <p>
                Hardware companies spend months engineering CAD assemblies in SolidWorks, STEP, or Rhino — presenting them online or in simulation environments often becomes a bottleneck.
              </p>
              <p>
                We bridge raw CAD geometry with high-performance real-time assets. From retopologizing 13 cinema robot rigs for web catalogs to building photorealistic digital twins with accurate hinge kinematics for AI training in Isaac Sim and MuJoCo.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="md">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border bg-card p-6 space-y-6">
            <h3 className="text-sm font-mono font-bold text-foreground uppercase border-b border-border pb-3">
              TECHNICAL STACK
            </h3>

            <div className="space-y-4 text-sm font-mono text-muted-foreground">
              <div>
                <span className="text-sm font-mono text-muted-foreground uppercase block">PRIMARY TOOLS</span>
                <span className="text-foreground font-medium">Blender / Substance Painter / ZBrush</span>
              </div>
              <div>
                <span className="text-sm font-mono text-muted-foreground uppercase block">SIMULATION</span>
                <span className="text-foreground font-medium">Isaac Sim / MuJoCo / USD / URDF</span>
              </div>
              <div>
                <span className="text-sm font-mono text-muted-foreground uppercase block">WEB 3D</span>
                <span className="text-foreground font-medium">PlayCanvas / Three.js / GLTF</span>
              </div>
              <div>
                <span className="text-sm font-mono text-muted-foreground uppercase block">CAD FORMATS</span>
                <span className="text-foreground font-medium">STEP, IGES, SolidWorks, OBJ, FBX</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
