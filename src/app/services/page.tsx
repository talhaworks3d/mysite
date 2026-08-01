import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { SERVICES } from "@/lib/data";
import { ArrowRight, CheckCircle2, Cpu, Layers, Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">CAPABILITIES & SCOPE</Tag>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            What I Offer
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-2xl">
            Specialized 3D hardware visualization services designed for hardware startups, engineering teams, and automotive product launches.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="border border-border bg-card p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-foreground transition-colors"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="font-mono text-xs text-accent">0{idx + 1} // SERVICE</div>
                <h2 className="font-mono text-xl md:text-2xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block">
                  INCLUDED DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CAD Pipeline Highlight */}
        <div className="border border-border bg-background p-8 md:p-12 space-y-6">
          <div className="flex items-center space-x-3">
            <Cpu className="w-6 h-6 text-accent" />
            <h2 className="font-mono text-xl font-bold text-foreground">
              The CAD-to-Render Pipeline Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border border-border bg-card p-5 space-y-2">
              <span className="text-accent font-bold">STAGE 01</span>
              <h3 className="font-bold text-foreground text-sm">CAD Ingestion & Mesh Retopology</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Import raw STEP/IGES assemblies, fix flipped normals, and generate clean quad meshes preserving hard surface bevels.
              </p>
            </div>

            <div className="border border-border bg-card p-5 space-y-2">
              <span className="text-accent font-bold">STAGE 02</span>
              <h3 className="font-bold text-foreground text-sm">PBR Shading & Lighting</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Apply physically accurate surface shaders (anodized metals, carbon weave, glass) and configure realistic HDRI studio lighting.
              </p>
            </div>

            <div className="border border-border bg-card p-5 space-y-2">
              <span className="text-accent font-bold">STAGE 03</span>
              <h3 className="font-bold text-foreground text-sm">Export & WebGL Integration</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Render 8K marketing stills or bake textures for realtime 60fps PlayCanvas web configurator deployment.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center md:text-left">
            <Button href="/contact" variant="primary" size="md">
              Inquire About CAD Processing
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
