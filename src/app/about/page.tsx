import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { SITE_METADATA } from "@/lib/data";
import { ArrowRight, Code, Cpu, Database, HardDrive, Monitor } from "lucide-react";

export default function AboutPage() {
  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">BACKGROUND & HARDWARE STACK</Tag>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            About & Process
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-2xl">
            {SITE_METADATA.bio}
          </p>
        </div>

        {/* Bio & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-mono text-2xl font-bold text-foreground">
              Bridging Industrial CAD, Cinema Robotics, and AI Simulation
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground font-sans leading-relaxed">
              <p>
                Hardware and robotics companies spend months engineering complex CAD assemblies in SolidWorks, STEP, or Rhino. However, presenting those assets on public web catalogs or deploying them into physics simulation environments often presents a bottleneck.
              </p>
              <p>
                My focus is engineering production-ready 3D solutions. Whether it's retopologizing 13 cinema camera robot rigs for unified web catalog display (like <span className="text-foreground font-medium">Camera Control</span> in LA) or building photorealistic, quad-to-tri digital twins with accurate hinge kinematics for AI robot training (like <span className="text-foreground font-medium">Simbridge</span> in Isaac Sim and MuJoCo), I bridge raw CAD geometry with high-performance real-time assets.
              </p>
              <p>
                Every asset is delivered with clean topology, optimized PBR texture bakes, and low polygon overhead to ensure maximum visual fidelity without sacrificing frame rates or simulation speed.
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
            <h3 className="font-mono text-sm font-bold text-foreground uppercase border-b border-border pb-3">
              TECHNICAL SPECIFICATIONS
            </h3>

            <div className="space-y-4 font-mono text-xs text-muted-foreground">
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">PRIMARY TOOLSET</span>
                <span className="text-foreground font-medium">Blender / Substance Painter / ZBrush</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">SIMULATION & KINEMATICS</span>
                <span className="text-foreground font-medium">Isaac Sim / MuJoCo / USD / URDF</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">WEB 3D & REALTIME</span>
                <span className="text-foreground font-medium">PlayCanvas WebGL / Three.js / GLTF</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">CAD COMPATIBILITY</span>
                <span className="text-foreground font-medium">STEP, IGES, SolidWorks SLDPRT, OBJ, FBX</span>
              </div>
            </div>
          </div>
        </div>


      </FadeIn>
    </Section>
  );
}
