export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  tools: string[];
  heroImage: string;
  gallery: string[];
  brief: string;
  process: string[];
  featured: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Capabilities {
  title: string;
  items: string[];
}

export const SITE_METADATA = {
  title: "TALHA — 3D Hardware Visualization & Web Configurators",
  author: "Talha",
  positioning: "3D visualization for hardware companies that don't have a CAD-to-render pipeline yet.",
  bio: "Specialized in turning raw industrial CAD files into interactive web configurators, high-fidelity photorealistic product stills, and real-time 3D experiences.",
  location: "UTC+6 · Available for global remote contracts",
  email: "contact@talha.design",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    playcanvas: "https://playcanvas.com",
    twitter: "https://twitter.com",
  },
};

export const CAPABILITIES: string[] = [
  "Product Renders",
  "ZBrush Sculpting",
  "CAD to Mesh Conversion",
  "Interactive Web Configurators",
  "PlayCanvas Real-time 3D",
  "Digital Twins & Visualizers",
];

export const PROJECTS: Project[] = [
  {
    slug: "hyperion-gtr-configurator",
    title: "Hyperion GTR Real-Time Configurator",
    category: "Web 3D Configurator",
    client: "Hyperion Dynamics",
    year: "2026",
    summary: "Interactive real-time 3D car configurator powered by PlayCanvas with instant trim, paint, and wheel customization.",
    tools: ["Blender", "PlayCanvas", "WebGL", "JavaScript", "GLTF/GLB"],
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    ],
    brief: "Hyperion Dynamics needed a lightweight, high-fps web configurator for their upcoming sports prototype to embed directly on pre-order landing pages without heavy loading times.",
    process: [
      "Optimized dense STEP CAD assemblies into clean quad topology, reducing polygon count by 78% while preserving hard-surface bevels.",
      "Developed custom PBR shader materials for metallic flake paints, exposed carbon fiber weave, and glass refraction within PlayCanvas.",
      "Built low-latency state synchronization with React UI controls for real-time variant switching.",
    ],
    featured: true,
  },
  {
    slug: "apex-industrial-arm",
    title: "Apex Robotics Arm — Hardware Viz",
    category: "Product Renders",
    client: "Apex Robotics",
    year: "2025",
    summary: "High-resolution technical renders and explosive assembly views for an industrial 6-axis articulated robot arm.",
    tools: ["SolidWorks", "Blender", "Substance Painter", "Cycles"],
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    ],
    brief: "Create marketing hero stills and exploded technical diagrams showing internal planetary gearsets for product catalog launch.",
    process: [
      "Extracted production CAD parts directly from SolidWorks.",
      "Created procedural anodized aluminum and industrial powder-coat materials.",
      "Configured studio lighting rigs for crisp, technical accentuation of precision machined surfaces.",
    ],
    featured: true,
  },
  {
    slug: "orbit-watch-chassis",
    title: "Orbit Mechanical Enclosure",
    category: "ZBrush & Render",
    client: "Orbit Horology",
    year: "2025",
    summary: "Precision sculpt and mechanical visualization for a skeletonized titanium timepiece chassis.",
    tools: ["ZBrush", "KeyShot", "Photoshop"],
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    ],
    brief: "Sculpt complex curved chamfers and micro-textures on a titanium grade-5 watch case for high-end luxury print collateral.",
    process: [
      "Detailed organic ergonomics in ZBrush using boolean surface operations.",
      "Generated micro-brushed metal textures and anti-reflective sapphire crystal reflections.",
      "Rendered 8K hero stills for print displays.",
    ],
    featured: true,
  },
  {
    slug: "quantum-vr-headset",
    title: "Quantum HMD — Hardware Prototype",
    category: "Animation & Stills",
    client: "Quantum Labs",
    year: "2025",
    summary: "Photorealistic product visualization and 360-degree rotation study for next-gen optical VR headset.",
    tools: ["Rhino", "Blender", "Octane Render"],
    heroImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
    ],
    brief: "Visualize lightweight fabric mesh, optical lenses, and heat dissipation vents before physical prototype manufacturing.",
    process: [
      "Converted IGES surface CAD data into render-ready meshes.",
      "Simulated fabric weave textures and micro-perforated silicone pads.",
      "Rendered lighting passes for dark mode website marketing integration.",
    ],
    featured: false,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "product-renders",
    title: "Product Renders & Hero Stills",
    description: "Transform complex CAD files into magazine-ready photorealistic images for launch campaigns, websites, and technical datasheets.",
    deliverables: ["4K/8K Studio Stills", "Exploded CAD Diagrams", "Material Variant Renders", "Transparent PNG Cutouts"],
  },
  {
    id: "web-configurators",
    title: "Interactive Web 3D Configurators",
    description: "Embed real-time 3D viewers or turntable rotators directly into your website. Allow customers to explore materials, colors, and options in real time.",
    deliverables: ["PlayCanvas / Three.js Web Viewers", "360° Drag-to-Rotate Image Sequences", "Mobile-Optimized Assets", "Custom UI Integration"],
  },
  {
    id: "cad-pipeline",
    title: "CAD-to-Render Pipeline Setup",
    description: "Establish a streamlined workflow to bridge the gap between engineering CAD data (STEP, SolidWorks, Rhino) and high-end visual marketing assets.",
    deliverables: ["Mesh Optimization & Retopology", "PBR Material Library Setup", "Automated Batch Rendering", "Web-Ready Asset Optimization"],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "single-render",
    name: "Single Hero Render",
    tagline: "Ideal for single product launch teasers and website headers.",
    price: "$300 – $800",
    priceNote: "per asset / model",
    features: [
      "1 hardware model or product",
      "Studio lighting & custom environment",
      "Up to 3 camera angles & 3 revisions",
      "Full CAD cleanup & retopology",
      "4K resolution export (PNG/TIFF)",
    ],
  },
  {
    id: "render-set",
    name: "Render Set",
    tagline: "Comprehensive visual coverage for full product catalogs.",
    price: "Custom Scope",
    priceNote: "priced per project",
    features: [
      "Multiple product angles & exploded views",
      "Material, color, and finish (CMF) variations",
      "Hero lifestyle & studio environments",
      "High-res print & web optimized exports",
      "Dedicated review cycles",
    ],
    recommended: true,
  },
  {
    id: "turntable-configurator",
    name: "360° Image Configurator",
    tagline: "Pre-rendered turntable viewer with instant web rotation.",
    price: "$1,500 – $4,000",
    priceNote: "starting price",
    features: [
      "360° smooth drag-to-rotate interaction",
      "Pre-rendered high-quality image sequences",
      "Zero WebGL performance overhead",
      "Static web hosting ready",
      "Mobile & desktop touch responsive",
    ],
  },
  {
    id: "realtime-configurator",
    name: "Real-Time 3D Configurator",
    tagline: "Fully interactive PlayCanvas 3D web experience.",
    price: "$4,000 – $9,000",
    priceNote: "starting price",
    features: [
      "Interactive 3D PlayCanvas application",
      "2-6 swappable parts, colors & trims",
      "Real-time dynamic PBR shaders",
      "Ultra-fast loading & 60fps performance",
      "Embed-ready iframe or React package",
    ],
  },
];
