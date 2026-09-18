import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { Button } from "@/components/button";
import { PRICING_TIERS } from "@/lib/data";
import { ArrowRight, Check, HelpCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">ESTIMATED TIERS & SCOPE</Tag>
          <h1 className="text-7xl font-sans font-bold text-foreground tracking-tight">
            Pricing
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-xl">
            Transparent packages for renders, render sets, and real-time 3D configurators.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`border bg-card p-6 flex flex-col justify-between transition-all ${
                tier.recommended
                  ? "border-accent shadow-sm relative"
                  : "border-border hover:border-foreground"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-4 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-sans font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-1 leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                <div className="border-t border-b border-border/80 py-4 space-y-1">
                  <div className="text-7xl font-mono font-bold text-foreground">
                    {tier.price}
                  </div>
                  {tier.priceNote && (
                    <div className="text-xs text-muted-foreground uppercase">
                      {tier.priceNote}
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 pt-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm font-mono text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60">
                <Button
                  href="/contact"
                  variant={tier.recommended ? "secondary" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Breakdown Matrix Table */}
        <div className="border border-border bg-card p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-sans font-bold text-foreground">
            Full Service Comparison Matrix
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-xs">
                  <th className="py-3 px-4 uppercase">Deliverable / Scope</th>
                  <th className="py-3 px-4 uppercase">Single Still</th>
                  <th className="py-3 px-4 uppercase">Render Set</th>
                  <th className="py-3 px-4 uppercase">360° Turntable</th>
                  <th className="py-3 px-4 uppercase">Real-Time 3D</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-3 px-4 font-semibold text-foreground">CAD Retopology & Cleanup</td>
                  <td className="py-3 px-4 text-emerald-500">Included</td>
                  <td className="py-3 px-4 text-emerald-500">Included</td>
                  <td className="py-3 px-4 text-emerald-500">Included</td>
                  <td className="py-3 px-4 text-emerald-500">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-foreground">High-Res Render Stills (4K/8K)</td>
                  <td className="py-3 px-4">1 Still</td>
                  <td className="py-3 px-4">5-12 Stills</td>
                  <td className="py-3 px-4">Pre-rendered frames</td>
                  <td className="py-3 px-4">Realtime WebGL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-foreground">Material / Paint Customization</td>
                  <td className="py-3 px-4">Fixed</td>
                  <td className="py-3 px-4">Up to 3 variants</td>
                  <td className="py-3 px-4">Pre-rendered variants</td>
                  <td className="py-3 px-4 text-accent font-semibold">Unlimited Realtime</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-foreground">Web Site Embed</td>
                  <td className="py-3 px-4">Static Image</td>
                  <td className="py-3 px-4">Gallery Grid</td>
                  <td className="py-3 px-4">Drag-to-rotate JS</td>
                  <td className="py-3 px-4 text-accent font-semibold">PlayCanvas iFrame</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Scope CTA */}
        <div className="border border-border bg-background p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-sans font-bold text-foreground">
              Need custom or enterprise scope?
            </h3>
            <p className="text-sm font-mono text-muted-foreground ">
              Volume rates, custom shaders, or full site integration — get in touch.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md" className="shrink-0">
            Discuss Custom Scope
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
