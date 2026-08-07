import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { PROJECTS } from "@/lib/data";
import { RenderGallery } from "@/components/render-gallery";
import { ArrowLeft, ArrowRight, CheckCircle, Star, Calendar, ShieldCheck, ThumbsUp, ExternalLink } from "lucide-react";

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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="accent">{project.category}</Tag>
              <Tag variant="outline">{project.year}</Tag>
            </div>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="self-start sm:self-auto text-accent border-accent/40 hover:border-accent hover:bg-accent/10"
              >
                Visit Live Website
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </Button>
            )}
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
            sizes="100vw"
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

        {/* Client Review Section */}
        {project.review && (
          <div className="pt-8 border-t border-border space-y-4">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              VERIFIED CLIENT REVIEW
            </div>
            <div className="border border-border bg-card p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                <div>
                  {project.review.projectTitle && (
                    <h3 className="font-mono text-base font-bold text-foreground">
                      {project.review.projectTitle}
                    </h3>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-xs text-muted-foreground">
                    {project.review.dateRange && (
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent" />
                        {project.review.dateRange}
                      </span>
                    )}
                    {project.review.endorsement && (
                      <span className="flex items-center text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px]">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                        {project.review.endorsement}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-background border border-border px-4 py-2 self-start sm:self-auto shrink-0">
                  <div className="flex items-center text-amber-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-sm font-bold text-foreground">
                    {project.review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              <blockquote className="relative pl-4 border-l-2 border-accent font-sans text-sm text-foreground/90 leading-relaxed italic">
                "{project.review.comment}"
              </blockquote>

              {project.review.attributes && project.review.attributes.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-muted-foreground text-[11px] uppercase mr-1">
                    Client Badges:
                  </span>
                  {project.review.attributes.map((attr) => (
                    <span
                      key={attr}
                      className="inline-flex items-center space-x-1.5 bg-accent/10 border border-accent/30 text-accent px-2.5 py-1 text-xs"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{attr}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. Image Gallery */}
        <div className="space-y-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xl font-bold text-foreground">
              Render Gallery
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              Click any render for high-res view
            </span>
          </div>
          <RenderGallery images={project.gallery} projectTitle={project.title} />
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
