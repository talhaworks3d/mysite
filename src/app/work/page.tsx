"use client";

import React, { useState } from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { WorkCard } from "@/components/work-card";
import { Tag } from "@/components/tag";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = [
  "ALL",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-8">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">PORTFOLIO INDEX</Tag>
          <h1 className="text-7xl font-sans font-bold text-foreground tracking-tight">
            Work
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-xl">
            3D hardware visualizations, real-time WebGL configurators, and product renders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-mono uppercase px-3 py-1.5 border transition-all ${
                  isSelected
                    ? "border-foreground bg-foreground text-background font-semibold"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground bg-card"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 0.05}>
              <WorkCard project={project} priority={idx === 0} />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
