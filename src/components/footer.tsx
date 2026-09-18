import React from "react";
import Link from "next/link";
import { SITE_METADATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto text-sm font-mono text-muted-foreground">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border/60">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2 text-foreground font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STUDIO XYZ</span>
            </div>
            <p className="text-sm font-mono text-muted-foreground max-w-sm leading-relaxed ">
              {SITE_METADATA.positioning}
            </p>
            <div className="text-xs text-muted-foreground pt-1">
              {SITE_METADATA.location}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-foreground uppercase tracking-widest text-xs font-bold">NAVIGATION</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/work" className="hover:text-foreground transition-colors">WORK</Link></li>
              <li><Link href="/configurator" className="hover:text-foreground transition-colors">CONFIGURATOR</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">SERVICES</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">PRICING</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">ABOUT</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-foreground uppercase tracking-widest text-xs font-bold">CONNECT</h4>
            <ul className="space-y-2 text-xs">
              <li><a href={`mailto:${SITE_METADATA.email}`} className="hover:text-foreground transition-colors">{SITE_METADATA.email}</a></li>
              <li><a href={SITE_METADATA.socials.playcanvas} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">PLAYCANVAS</a></li>
              <li><a href={SITE_METADATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GITHUB</a></li>
              <li><a href={SITE_METADATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LINKEDIN</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Studio XYZ. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="text-accent">●</span> Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
