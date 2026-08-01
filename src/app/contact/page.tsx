import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { Tag } from "@/components/tag";
import { ContactForm } from "@/components/contact-form";
import { SITE_METADATA } from "@/lib/data";
import { Mail, Clock, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <Section className="py-12 md:py-20">
      <FadeIn className="space-y-12">
        <div className="border-b border-border pb-8 space-y-4">
          <Tag variant="accent">DIRECT TRANSMISSION</Tag>
          <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Start a Project
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-sans max-w-2xl">
            Have a product or CAD file ready for rendering or WebGL configurator integration? Submit your technical inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border bg-card p-6 space-y-6">
              <h2 className="font-mono text-sm font-bold text-foreground uppercase border-b border-border pb-3">
                DIRECT CONTACT CHANNELS
              </h2>

              <div className="space-y-4 font-mono text-xs text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-muted-foreground block">EMAIL</span>
                    <a
                      href={`mailto:${SITE_METADATA.email}`}
                      className="text-foreground hover:text-accent font-medium transition-colors"
                    >
                      {SITE_METADATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-muted-foreground block">RESPONSE TIME</span>
                    <span className="text-foreground font-medium">Within 24 Hours (Mon–Fri)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-muted-foreground block">LOCATION / TIMEZONE</span>
                    <span className="text-foreground font-medium">{SITE_METADATA.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-background p-6 font-mono text-xs space-y-2">
              <h3 className="font-bold text-foreground">NEED AN NDA FIRST?</h3>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                If your CAD files contain unreleased intellectual property, send over your mutual NDA to <a href={`mailto:${SITE_METADATA.email}`} className="text-accent underline">{SITE_METADATA.email}</a> prior to uploading assets.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
