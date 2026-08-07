export interface ClientReview {
  projectTitle?: string;
  rating: number;
  dateRange?: string;
  comment: string;
  endorsement?: string;
  attributes?: string[];
}

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
  review?: ClientReview;
  liveUrl?: string;
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
  positioning: "High-precision 3D visualization, CAD optimization, and real-to-sim digital twin assets for hardware & robotics leaders.",
  bio: "Specialized in converting raw industrial CAD into web-ready 3D catalog assets, simulation-ready digital twins for AI & robotics platforms (Isaac Sim / MuJoCo), and photorealistic product marketing renders.",
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
    slug: "camera-control-cinema-robots",
    title: "Camera Control — Cinema Robotics Suite",
    category: "Product Renders & 3D Modeling",
    client: "Camera Control (Los Angeles)",
    year: "2026",
    summary: "High-resolution product renders for 13 cinema camera robots, transforming raw CAD files and ground-up models into uniform website catalog assets for CameraControl.com.",
    tools: ["SolidWorks", "Blender", "Substance Painter", "Cycles"],
    heroImage: "/camera_control/cinebot_nano/cinebot-nano.webp",
    gallery: [
      "/camera_control/scout/scout.webp",
      "/camera_control/milo/milo.webp",
      "/camera_control/bolt/bolt.webp",
      "/camera_control/doggicam/doggicam.webp",
    ],
    brief: "Camera Control, an LA-based industry leader in motion control camera rigs, needed their complete fleet of 13 cinema robots rendered with consistent studio lighting, corrected CAD geometry, and custom props for their main website.",
    process: [
      "Converted complex raw CAD files into optimized render topology, fixing geometry bugs and surface defects.",
      "Built specialized motion control robot models from the ground up based on physical hardware specs.",
      "Engineered a unified studio environment with consistent backdrop lighting and props now hosted on CameraControl.com.",
    ],
    featured: true,
    review: {
      projectTitle: "13 Cinema Robots Rigged & Textured",
      rating: 5.0,
      dateRange: "April 2026 - August 2026",
      comment: "Client review pending publication on profile...",
      endorsement: "Endorsed by client",
      attributes: [
        "Committed to Quality",
        "Clear Communicator",
        "Detail Oriented"
      ],
    },
    liveUrl: "https://cameracontrol.com",
  },
  {
    slug: "simbridge-simulation-assets",
    title: "Simbridge — Simulation-Ready Appliances",
    category: "Real-to-Sim 3D Assets",
    client: "Simbridge",
    year: "2026",
    summary: "Ultra-optimized, photorealistic 3D home appliance models engineered for robotic manipulation and training in Isaac Sim and MuJoCo.",
    tools: ["Blender", "Substance Painter", "USD / URDF", "Isaac Sim", "MuJoCo"],
    heroImage: "/simbridge/hero/hero.webp",
    gallery: [
      "/simbridge/fridge/fridge.webp",
      "/simbridge/stove/stove.webp",
      "/simbridge/dishwasher/dishwasher.webp",
      "/simbridge/sink/sink.webp",
    ],
    brief: "Simbridge, a Santa Clara based AI Simulation company, required highly realistic, performance-tuned 3D home appliances (fridge, stove, dishwasher, sink) to populate real-to-sim environments for training AI and robotics models.",
    process: [
      "Retopologized raw CAD geometry into clean quad-to-tri topology optimized for real-time simulation engines.",
      "Configured precise pivot points and kinematic axes for accurate door, drawer, and hinge manipulation.",
      "Baked crisp PBR maps and normal textures to deliver photorealism without compromising physics frame rates.",
    ],
    featured: true,
    review: {
      projectTitle: "Digital Twin creation for appliances",
      rating: 5.0,
      dateRange: "May 25, 2026 - Jun 26, 2026",
      comment: "I worked with Talha on generating digital twins for kitchen appliances. He was very responsive and clear with his communication ensuring all details could be agreed on with no surprises during or at the end of each milestone. The output was exactly as planned!",
      endorsement: "Endorsed by client",
      attributes: [
        "Committed to Quality",
        "Clear Communicator",
        "Detail Oriented"
      ],
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "product-renders",
    title: "Product Renders & Hero Stills",
    description: "Transform complex CAD files (STEP, IGES, SolidWorks) into magazine-ready photorealistic stills for launch campaigns, websites, and technical datasheets.",
    deliverables: [
      "4K/8K Studio Stills",
      "CAD Mesh Retopology & Cleanup",
      "Exploded CAD Diagrams",
      "PBR Material & Lighting Setup",
      "Material Variant Renders",
      "Transparent PNG Cutouts",
    ],
  },
  {
    id: "product-animation",
    title: "Product Animation",
    description: "Dynamic 3D motion graphics and kinematic animations highlighting internal mechanical assemblies, exploded views, and key product features.",
    deliverables: [
      "Exploded Assembly Animations",
      "360° Turntable Video Reels",
      "Camera Motion Fly-throughs",
      "Kinematic Mechanism Motion",
    ],
  },
  {
    id: "web-configurators",
    title: "Interactive Web 3D Configurators",
    description: "Embed real-time 3D viewers or turntable rotators directly into your website. Allow customers to explore materials, colors, and options in real time.",
    deliverables: [
      "PlayCanvas / Three.js Web Viewers",
      "360° Drag-to-Rotate Image Sequences",
      "Mobile-Optimized Realtime Assets",
      "Custom UI & Trim Integration",
    ],
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
