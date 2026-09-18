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
          <h1 className="text-7xl font-sans font-bold text-foreground tracking-tight">
            Services
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-xl">
            Specialized 3D visualization for hardware startups, engineering teams, and product launches.
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
                <div className="text-sm font-mono text-accent">0{idx + 1} // SERVICE</div>
                <h2 className="text-xl font-sans font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                <span className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold block">
                  INCLUDED DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </FadeIn>
    </Section>
  );
}
