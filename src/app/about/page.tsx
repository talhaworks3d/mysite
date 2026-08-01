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
              Bridging Engineering CAD and High-End Marketing
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground font-sans leading-relaxed">
              <p>
                Hardware companies spend months or years perfecting raw CAD assemblies in SolidWorks, STEP, or Rhino. However, when it comes time for marketing launches or web pre-orders, traditional CAD screen grabs or clunky renders fail to capture the true tactile aesthetic of the product.
              </p>
              <p>
                My focus is eliminating that friction. By combining hard-surface retopology in Blender & ZBrush with modern real-time WebGL engines (PlayCanvas), I craft lightweight 3D experiences that allow clients to view, rotate, and customize hardware products before manufacturing even begins.
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
                <span className="text-foreground font-medium">Blender / ZBrush / Substance Painter</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">WEB 3D ENGINES</span>
                <span className="text-foreground font-medium">PlayCanvas WebGL / Three.js / GLTF</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">CAD COMPATIBILITY</span>
                <span className="text-foreground font-medium">STEP, IGES, SolidWorks SLDPRT, OBJ, FBX</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground uppercase block">WEB FRAMEWORK</span>
                <span className="text-foreground font-medium">Next.js 14 (App Router), TypeScript, Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Philosophy */}
        <div className="border border-border bg-card p-8 md:p-12 space-y-6">
          <h2 className="font-mono text-xl font-bold text-foreground">
            The "Nothing" Design Language Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-accent font-bold">01 / RESTRAINT</span>
              <h3 className="font-bold text-foreground">No Unnecessary Decoration</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                No artificial glassmorphic blurs or gratuitous animations. Every line and pixel serves to highlight the hardware product.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-accent font-bold">02 / EXPOSED STRUCTURE</span>
              <h3 className="font-bold text-foreground">Visible Grid & Measurements</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Thin 1px borders and exposed technical metadata mirror the precision of real-world mechanical blueprints.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-accent font-bold">03 / FUNCTIONAL MOTION</span>
              <h3 className="font-bold text-foreground">Instant, Crisp Feedback</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Micro-transitions and subtle scroll reveals enhance navigation without slowing down performance.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
