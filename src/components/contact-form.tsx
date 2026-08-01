"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="border border-border bg-card p-8 text-center space-y-4">
        <CheckCircle2 className="w-10 h-10 text-accent mx-auto" />
        <h3 className="font-mono text-lg text-foreground uppercase tracking-wider">
          Message Received
        </h3>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          Thank you for getting in touch. I will review your CAD specs or project request and get back to you within 24 hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Name / Company *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="e.g. Apex Robotics Inc."
            className="w-full bg-background border border-border px-4 py-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="name@company.com"
            className="w-full bg-background border border-border px-4 py-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Project Type
        </label>
        <select
          id="service"
          className="w-full bg-background border border-border px-4 py-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent transition-colors"
        >
          <option value="product-renders">Product Renders / Hero Stills ($300 – $800+)</option>
          <option value="web-configurator">Web 3D Configurator ($1,500 – $9,000)</option>
          <option value="cad-pipeline">CAD-to-Render Pipeline Setup</option>
          <option value="other">Other / Custom Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Project Brief / CAD Details *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Tell me about your product, timeline, and deliverables required..."
          className="w-full bg-background border border-border p-4 font-sans text-xs text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
        {loading ? "Transmitting..." : "Send Technical Inquiry"}
        <Send className="w-3.5 h-3.5 ml-2 inline-block" />
      </Button>
    </form>
  );
}
