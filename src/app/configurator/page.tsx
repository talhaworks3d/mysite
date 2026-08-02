import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configurator",
  description: "Interactive real-time 3D PlayCanvas car configurator.",
};

export default function ConfiguratorPage() {
  return (
    <main className="w-full h-[calc(100vh-4rem)] bg-background relative overflow-hidden">
      <iframe
        src="https://playcanv.as/b/c8bfab9f"
        title="Car Configurator"
        className="w-full h-full border-0"
        allow="fullscreen; xr-spatial-tracking"
        loading="lazy"
      />
    </main>
  );
}
