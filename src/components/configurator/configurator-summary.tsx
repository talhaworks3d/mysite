"use client";

import React, { useState } from "react";
import { useConfigurator } from "./configurator-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import {
  Share2,
  RotateCcw,
  Send,
  Check,
  X,
  ShieldCheck,
  FileText,
} from "lucide-react";

export function ConfiguratorSummary() {
  const { state, resetConfig, calculateTotalPrice } = useConfigurator();
  const [copied, setCopied] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalPrice = calculateTotalPrice();

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowInquiryModal(false);
    }, 2500);
  };

  return (
    <>
      <div className="w-full bg-card border border-border p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none">
        {/* Left Specification Summary */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase font-bold tracking-widest">
              HYBRID SUPERCAR SPECIFICATION
            </span>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              918 SPYDER WEISSACH / BASE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-foreground">
            <div>
              <span className="text-muted-foreground">PAINT: </span>
              <span className="font-bold text-accent">{state.paint.name}</span>
            </div>
            <div>
              <span className="text-muted-foreground">WHEELS: </span>
              <span className="font-bold text-foreground">{state.wheels.name}</span>
            </div>
            <div>
              <span className="text-muted-foreground">TRIM: </span>
              <span className="font-bold text-foreground">{state.trim.name}</span>
            </div>
          </div>
        </div>

        {/* Right Price & Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <div className="text-left sm:text-right space-y-0.5">
            <span className="text-[10px] font-mono text-muted-foreground uppercase block">
              ESTIMATED BUILD MSRP
            </span>
            <span className="text-xl md:text-2xl font-mono font-bold text-foreground block">
              ${totalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2.5 bg-background border border-border hover:border-foreground/40 text-foreground transition-colors cursor-pointer relative"
              title="Share Configuration URL"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background font-mono text-[10px] px-2 py-0.5 whitespace-nowrap shadow-md">
                  LINK COPIED!
                </span>
              )}
            </button>

            <button
              onClick={resetConfig}
              className="p-2.5 bg-background border border-border hover:border-foreground/40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Reset to Factory Defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <Button
              onClick={() => setShowInquiryModal(true)}
              variant="primary"
              size="md"
              className="font-mono text-xs uppercase"
            >
              <FileText className="w-4 h-4 mr-2" />
              Save Build / Inquiry
            </Button>
          </div>
        </div>
      </div>

      {/* Save Build / Request Quote Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-card border border-border p-6 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>CUSTOM BUILD QUOTE</span>
                </div>
                <h3 className="font-mono text-lg font-bold text-foreground">
                  Porsche 918 Spyder Specification
                </h3>
              </div>
              <button
                onClick={() => setShowInquiryModal(false)}
                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-2 font-mono text-xs border border-border p-3 bg-background/50">
              <div className="flex justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground">Base Model:</span>
                <span className="text-foreground">918 Spyder Hybrid ($845,000)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground">Paint Finish:</span>
                <span className="text-foreground">
                  {state.paint.name} ({state.paint.price === 0 ? "Included" : `+$${state.paint.price.toLocaleString()}`})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground">Wheel Assembly:</span>
                <span className="text-foreground">
                  {state.wheels.name} ({state.wheels.price === 0 ? "Included" : `+$${state.wheels.price.toLocaleString()}`})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/50">
                <span className="text-muted-foreground">Interior Trim:</span>
                <span className="text-foreground">
                  {state.trim.name} ({state.trim.price === 0 ? "Included" : `+$${state.trim.price.toLocaleString()}`})
                </span>
              </div>
              <div className="flex justify-between py-2 pt-3 font-bold text-sm text-accent">
                <span>Total Estimated Build MSRP:</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Contact form */}
            {formSubmitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs text-center space-y-1">
                <Check className="w-6 h-6 mx-auto text-emerald-400 animate-bounce" />
                <p className="font-bold">Specification inquiry submitted!</p>
                <p className="text-[11px] text-muted-foreground font-sans">
                  We have saved your 3D PlayCanvas configuration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="space-y-1">
                  <label className="block font-mono text-xs text-muted-foreground uppercase">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Thorne"
                    className="w-full px-3 py-2 bg-background border border-border focus:border-accent text-foreground font-sans text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs text-muted-foreground uppercase">
                    Work / Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@hardware.com"
                    className="w-full px-3 py-2 bg-background border border-border focus:border-accent text-foreground font-sans text-sm outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full font-mono text-xs uppercase">
                    <Send className="w-4 h-4 mr-2" />
                    Send Custom 3D Config Specification
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
