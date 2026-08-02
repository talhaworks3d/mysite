import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { WorkCard } from "@/components/work-card";
import { FadeIn } from "@/components/fade-in";
import ConfiguratorEmbed from "@/components/configurator-embed";
import { PROJECTS, CAPABILITIES, SITE_METADATA } from "@/lib/data";
import { ArrowRight, Box, ChevronRight, Layers, Terminal } from "lucide-react";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div>
      {/* 1. Hero Section */}
      <Section className="border-b border-border grid-bg pt-20 pb-24 md:pt-28 md:pb-36 relative overflow-hidden">
        <FadeIn>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="accent">3D HARDWARE VISUALIZATION</Tag>
              <Tag variant="outline" className="text-muted-foreground">
                PLAYCANVAS // BLENDER // CAD
              </Tag>
            </div>

            <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Engineered 3D visuals for hardware products.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">
              {SITE_METADATA.positioning}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/work" variant="primary" size="lg">
                View Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/configurator" variant="outline" size="lg">
                Launch 3D Configurator
                <Box className="w-4 h-4 ml-2 text-accent" />
              </Button>
            </div>
          </div>

          {/* Exposed structure spec pill */}
          <div className="mt-12 pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-muted-foreground">
            <div>
              <span className="block text-[10px] text-muted-foreground uppercase">CAD Conversion</span>
              <span className="text-foreground font-medium">STEP / IGES / SolidWorks</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted-foreground uppercase">Realtime Engine</span>
              <span className="text-foreground font-medium">PlayCanvas WebGL</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted-foreground uppercase">Offline Renders</span>
              <span className="text-foreground font-medium">Cycles / Octane 8K</span>
            </div>
            <div>
              <span className="block text-[10px] text-muted-foreground uppercase">Response Time</span>
              <span className="text-foreground font-medium">&lt; 24 Hrs Inquiry</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 2. Capabilities Strip */}
      <section className="border-b border-border bg-card py-6 font-mono text-xs overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-w-[700px] space-x-6 text-muted-foreground">
          <span className="flex items-center text-foreground font-bold tracking-wider uppercase">
            <Terminal className="w-4 h-4 mr-2 text-accent" />
            CORE CAPABILITIES:
          </span>
          {CAPABILITIES.map((cap, idx) => (
            <span key={idx} className="flex items-center space-x-2">
              <span className="text-border">/</span>
              <span>{cap}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. Featured Work Grid */}
      <Section bordered containerClassName="space-y-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-1">
              SELECTED PORTFOLIO
            </div>
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">
              Featured Case Studies
            </h2>
          </div>
          <Button href="/work" variant="ghost">
            Explore All Work ({PROJECTS.length})
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 0.1}>
              <WorkCard project={project} priority={idx === 0} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 4. PlayCanvas Configurator Teaser */}
      <Section bordered className="bg-card">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Tag variant="accent">INTERACTIVE 3D DEMO</Tag>
            <h2 className="font-mono text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Real-Time Web 3D Car Configurator
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Experience dynamic paint, trim, and wheel customization embedded directly into a lightweight WebGL PlayCanvas viewport. Zero layout shifts, high-fps performance.
            </p>
            <div className="pt-2">
              <Button href="/configurator" variant="primary" size="md">
                Launch Fullscreen Configurator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 border border-border bg-background p-4 relative">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-foreground font-semibold">PLAYCANVAS_VIEWPORT.GLTF</span>
              </div>
              <span>60 FPS</span>
            </div>

            <ConfiguratorEmbed />
          </div>
        </FadeIn>
      </Section>

      {/* 5. Contact CTA */}
      <Section>
        <FadeIn className="max-w-3xl mx-auto text-center space-y-6 border border-border bg-card p-10 md:p-14">
          <Tag variant="accent">GET IN TOUCH</Tag>
          <h2 className="font-mono text-2xl md:text-4xl font-bold text-foreground">
            Have a product that needs to be seen properly?
          </h2>
          <p className="text-sm text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Whether you need a single 8K product render set or a complete interactive 3D web configurator for launch, let's turn your CAD files into marketing assets.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Review Pricing Tiers
            </Button>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
