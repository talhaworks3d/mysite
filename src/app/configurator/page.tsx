import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Configurator Studio — Coming Soon",
  description: "Interactive real-time 3D PlayCanvas configurator studio.",
};

export default function ConfiguratorPage() {
  return (
    <main className="w-full min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>UNDER DEVELOPMENT</span>
      </div>
      <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground">
        Full 3D Configurator Studio — Coming Soon
      </h1>
      <p className="text-sm md:text-base text-muted-foreground font-sans max-w-lg leading-relaxed">
        We are currently engineering a dedicated standalone 3D WebGL configurator studio. In the meantime, feel free to try the interactive preview on our homepage.
      </p>
      <div className="pt-4">
        <Button href="/" variant="primary" size="md">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homepage
        </Button>
      </div>
    </main>
  );
}
