import React from "react";
import Link from "next/link";
import { SITE_METADATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto font-mono text-xs text-muted-foreground">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border/60">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2 text-foreground font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{SITE_METADATA.author.toUpperCase()} // STUDIO XYZ</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed font-sans">
              {SITE_METADATA.positioning}
            </p>
            <div className="text-[11px] text-muted-foreground pt-1">
              LOC: <span className="text-foreground">{SITE_METADATA.location}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-foreground uppercase tracking-widest text-[11px] font-bold">NAVIGATION</h4>
            <ul className="space-y-2 text-[11px]">
              <li><Link href="/work" className="hover:text-foreground transition-colors">WORK / CASE STUDIES</Link></li>
              <li><Link href="/configurator" className="hover:text-foreground transition-colors">3D CONFIGURATOR</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">SERVICES</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">PRICING TIERS</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">ABOUT & PROCESS</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-foreground uppercase tracking-widest text-[11px] font-bold">CONNECT</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href={`mailto:${SITE_METADATA.email}`} className="hover:text-foreground transition-colors">{SITE_METADATA.email}</a></li>
              <li><a href={SITE_METADATA.socials.playcanvas} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">PLAYCANVAS PROFILE</a></li>
              <li><a href={SITE_METADATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GITHUB</a></li>
              <li><a href={SITE_METADATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LINKEDIN</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {SITE_METADATA.author}. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 sm:mt-0">
            SYSTEM_STATUS: <span className="text-accent">ONLINE (READY FOR NEW CONTRACTS)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
