import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        {/* Back Link */}
        <div>
          <Button href="/work" variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </div>

        {/* 1. Header Metadata */}
        <div className="border-b border-border pb-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Tag variant="accent">{project.category}</Tag>
            <Tag variant="outline">{project.year}</Tag>
          </div>

          <h1 className="font-mono text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 font-mono text-xs text-muted-foreground border-t border-border/60">
            <div>
              <span className="block text-[10px] uppercase text-muted-foreground">CLIENT</span>
              <span className="text-foreground font-medium">{project.client}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted-foreground">ROLE</span>
              <span className="text-foreground font-medium">3D Lead & Technical Artist</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted-foreground">YEAR</span>
              <span className="text-foreground font-medium">{project.year}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted-foreground">DELIVERABLES</span>
              <span className="text-foreground font-medium">Render Set & Assets</span>
            </div>
          </div>
        </div>

        {/* 2. Hero Image */}
        <div className="relative aspect-[16/9] w-full border border-border overflow-hidden bg-card">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 3. Brief & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          <div className="lg:col-span-4 space-y-6">
            <div className="border-l-2 border-accent pl-4 space-y-2">
              <span className="font-mono text-xs text-accent uppercase tracking-wider block">
                THE BRIEF
              </span>
              <p className="text-sm text-foreground font-sans leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* Tools Used */}
            <div className="space-y-3 pt-4 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block">
                SOFTWARE & TOOLS USED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool} variant="outline">
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-mono text-xl font-bold text-foreground border-b border-border pb-3">
              Technical Implementation & Process
            </h2>
            <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-card p-4 border border-border">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Image Gallery */}
        <div className="space-y-6 pt-6 border-t border-border">
          <h2 className="font-mono text-xl font-bold text-foreground">
            Render Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] w-full border border-border bg-card overflow-hidden"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} render ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 5. Next / Prev Case Study Nav */}
        <div className="pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground transition-colors"
          >
            <span className="font-mono text-[11px] text-muted-foreground uppercase flex items-center">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> PREVIOUS CASE STUDY
            </span>
            <span className="font-mono text-sm font-semibold text-foreground group-hover:text-accent mt-2">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group border border-border bg-card p-6 flex flex-col justify-between items-end text-right hover:border-foreground transition-colors"
          >
            <span className="font-mono text-[11px] text-muted-foreground uppercase flex items-center">
              NEXT CASE STUDY <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
            <span className="font-mono text-sm font-semibold text-foreground group-hover:text-accent mt-2">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
