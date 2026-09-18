"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./button";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mqervdol");

  if (state.succeeded) {
    return (
      <div className="border border-border bg-card p-8 text-center space-y-4">
        <CheckCircle2 className="w-10 h-10 text-accent mx-auto" />
        <h3 className="text-xl font-sans text-foreground uppercase tracking-wider">
          Message Received
        </h3>
        <p className="text-sm font-mono text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you for getting in touch. Your technical inquiry has been transmitted directly to my inbox. I will review your CAD specs or project request and get back to you within 24 hours.
        </p>
        <div className="pt-2">
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            Send Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8 space-y-6">
      {state.errors && (
        <div className="p-3 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-mono flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Submission failed. Please check your fields and try again.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Name / Company *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Apex Robotics Inc."
            className="w-full bg-background border border-border px-4 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent transition-colors"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm font-mono text-red-500 " />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="w-full bg-background border border-border px-4 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent transition-colors"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm font-mono text-red-500 " />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="block text-sm font-mono uppercase tracking-wider text-muted-foreground">
          Project Type
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-background border border-border px-4 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent transition-colors"
        >
          <option value="Product Renders / Hero Stills ($300 – $800+)">Product Renders / Hero Stills ($300 – $800+)</option>
          <option value="Web 3D Configurator ($1,500 – $9,000)">Web 3D Configurator ($1,500 – $9,000)</option>
          <option value="CAD-to-Render Pipeline Setup">CAD-to-Render Pipeline Setup</option>
          <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-mono uppercase tracking-wider text-muted-foreground">
          Project Brief / CAD Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your product, timeline, and deliverables required..."
          className="w-full bg-background border border-border p-4 text-sm font-mono text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm font-mono text-red-500 " />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={state.submitting}>
        {state.submitting ? "Transmitting..." : "Send Technical Inquiry"}
        <Send className="w-3.5 h-3.5 ml-2 inline-block" />
      </Button>
    </form>
  );
}
