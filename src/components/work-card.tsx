import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data";
import { Tag } from "./tag";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border border-border bg-card hover:border-foreground transition-all duration-200"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20 border-b border-border">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute top-3 left-3">
          <Tag variant="accent">{project.category}</Tag>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border p-1.5 text-foreground">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-mono text-base font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed font-sans">
            {project.summary}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((tool) => (
            <Tag key={tool} variant="outline" className="text-[10px]">
              {tool}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
