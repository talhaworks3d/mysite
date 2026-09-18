import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { WorkCard } from "@/components/work-card";
import { FadeIn } from "@/components/fade-in";
import ConfiguratorEmbed from "@/components/configurator-embed";
import { PROJECTS, CAPABILITIES, SITE_METADATA } from "@/lib/data";
import { ArrowRight, Box, ChevronRight, Terminal, Quote } from "lucide-react";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const cameraControlProject = PROJECTS.find(
    (p) => p.slug === "camera-control-cinema-robots"
  );

  return (
    <div>
      {/* 1. Hero Section */}
      <Section className="border-b border-border grid-bg pt-20 pb-24 md:pt-28 md:pb-36 relative overflow-hidden">
        <FadeIn>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="accent">3D VISUALIZATION</Tag>
              <Tag variant="outline" className="text-muted-foreground">
                PLAYCANVAS // BLENDER // CAD
              </Tag>
            </div>

            <h1 className="text-7xl font-sans font-bold tracking-tight text-foreground leading-[1.1]">
              Engineered 3D visuals.
            </h1>

            <p className="text-xl font-mono text-muted-foreground leading-relaxed max-w-xl">
              Precision 3D for hardware, robotics, and product launches.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/work" variant="primary" size="lg">
                View Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Start a Project
                <Box className="w-4 h-4 ml-2 text-accent" />
              </Button>
            </div>
          </div>

          {/* Spec strip */}
          <div className="mt-12 pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-mono text-muted-foreground">
            <div>
              <span className="block text-sm font-mono text-muted-foreground uppercase">CAD Formats</span>
              <span className="text-foreground font-medium">STEP / IGES</span>
            </div>
            <div>
              <span className="block text-sm font-mono text-muted-foreground uppercase">Realtime</span>
              <span className="text-foreground font-medium">PlayCanvas</span>
            </div>
            <div>
              <span className="block text-sm font-mono text-muted-foreground uppercase">Offline</span>
              <span className="text-foreground font-medium">Cycles 8K</span>
            </div>
            <div>
              <span className="block text-sm font-mono text-muted-foreground uppercase">Response</span>
              <span className="text-foreground font-medium">&lt; 24 Hrs</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 2. Capabilities Strip */}
      <section className="border-b border-border bg-card py-5 text-sm font-mono overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 min-w-[600px] text-muted-foreground">
          <span className="flex items-center text-foreground font-bold tracking-wider uppercase shrink-0">
            <Terminal className="w-4 h-4 mr-2 text-accent" />
            CAPABILITIES
          </span>
          {CAPABILITIES.map((cap, idx) => (
            <span key={idx} className="flex items-center space-x-2 shrink-0">
              <span className="text-border">/</span>
              <span>{cap}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 3. Media Backdrop — Hero Reel (placeholder for video/animation) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden border-b border-border bg-black">
        {/* Media slot — swap src for your video/image when ready */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10" />
        {/* Placeholder backdrop — replace with <video> or <Image> */}
        <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest border border-border px-4 py-2">
            MEDIA SLOT — HERO REEL
          </span>
        </div>

        {/* Overlaid text — Nothing style: bottom-left anchored */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-14">
          <FadeIn>
            <div className="max-w-2xl space-y-3">
              <Tag variant="accent">CAMERA CONTROL</Tag>
              <h2 className="text-7xl font-sans font-bold text-white leading-tight">
                13 Cinema Robots. One unified catalog.
              </h2>
              <p className="text-xl font-mono text-white/60 ">
                CAD to render-ready in weeks, not months.
              </p>
              <div className="pt-2">
                <Button href="/work/camera-control-cinema-robots" variant="outline" size="md">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Featured Work Grid */}
      <Section bordered containerClassName="space-y-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-sm font-mono text-accent uppercase tracking-widest mb-1">
              SELECTED WORK
            </div>
            <h2 className="text-7xl font-sans font-bold text-foreground">
              Case Studies
            </h2>
          </div>
          <Button href="/work" variant="ghost">
            All Work ({PROJECTS.length})
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

      {/* 5. Media Backdrop — Client Quote */}
      {cameraControlProject?.review && (
        <section className="relative w-full overflow-hidden border-b border-border bg-black">
          {/* Media slot — place a dark product image/video here */}
          <div className="absolute inset-0 bg-[#080808]" />
          {/* Placeholder label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm font-mono text-white/10 uppercase tracking-widest border border-white/5 px-4 py-2">
              MEDIA SLOT — CLIENT BACKDROP
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

          {/* Quote overlay */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-36">
            <FadeIn className="max-w-2xl space-y-6">
              <Quote className="w-8 h-8 text-accent" />
              <blockquote className="text-xl font-mono font-bold text-white leading-snug">
                "{cameraControlProject.review.comment}"
              </blockquote>
              <div className="space-y-1">
                <p className="text-sm font-mono text-white/50 uppercase tracking-widest">
                  Camera Control — Los Angeles
                </p>
                <p className="text-sm font-mono text-white/30">
                  {cameraControlProject.review.dateRange}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* 6. PlayCanvas Configurator Teaser */}
      <Section bordered className="bg-card">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-2">
              <Tag variant="accent">INTERACTIVE 3D DEMO</Tag>
              <Tag variant="accent" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">LIVE</Tag>
            </div>
            <h2 className="text-7xl font-sans font-bold text-foreground leading-tight">
              Real-Time Configurator
            </h2>
            <p className="text-xl font-mono text-muted-foreground leading-relaxed ">
              Customize finishes, rims, trim, and doors in real-time.
            </p>
            <div className="pt-2">
              <Button href="/configurator" variant="primary" size="md" className="text-sm font-mono uppercase">
                Launch Studio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 border border-border bg-background p-4 relative">
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4 text-sm font-mono text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-foreground font-semibold">VIEWPORT.GLTF</span>
              </div>
              <span>60 FPS</span>
            </div>

            <ConfiguratorEmbed />
          </div>
        </FadeIn>
      </Section>

      {/* 7. Media Backdrop — Second visual slot */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden border-b border-border bg-black">
        <div className="absolute inset-0 bg-[#060606]" />
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-sm font-mono text-white/10 uppercase tracking-widest border border-white/5 px-4 py-2">
            MEDIA SLOT — SIMBRIDGE / SECONDARY
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-14">
          <FadeIn>
            <div className="max-w-xl space-y-3">
              <Tag variant="accent">SIMBRIDGE</Tag>
              <h2 className="text-7xl font-sans font-bold text-white leading-tight">
                Real-to-sim. Photorealistic.
              </h2>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <Section>
        <FadeIn className="max-w-3xl mx-auto text-center space-y-6 border border-border bg-card p-10 md:p-14">
          <Tag variant="accent">GET IN TOUCH</Tag>
          <h2 className="text-7xl font-sans font-bold text-foreground">
            Ready to visualize?
          </h2>
          <p className="text-xl font-mono text-muted-foreground max-w-md mx-auto leading-relaxed">
            CAD files to interactive assets — let's build it.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Pricing
            </Button>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
