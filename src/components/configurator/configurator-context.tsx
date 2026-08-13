"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

export interface PaintOption {
  id: string;
  name: string;
  hex: string;
  finish: "solid" | "metallic" | "special";
  tier: "Standard" | "Metallic" | "Special";
  price: number;
}

export interface WheelOption {
  id: "standard" | "weissach";
  name: string;
  description: string;
  price: number;
}

export interface TrimOption {
  id: "leather" | "alcantara" | "carbon";
  name: string;
  description: string;
  price: number;
}

export interface CameraPreset {
  id: "hero" | "side" | "rear" | "wheelCloseup" | "interior";
  name: string;
  description: string;
}

export const PAINT_OPTIONS: PaintOption[] = [
  { id: "black", name: "Black", hex: "#0a0a0a", finish: "solid", tier: "Standard", price: 0 },
  { id: "white", name: "White", hex: "#f2f2f0", finish: "solid", tier: "Standard", price: 0 },
  { id: "guards-red", name: "Guards Red", hex: "#a30014", finish: "solid", tier: "Standard", price: 0 },
  { id: "racing-yellow", name: "Racing Yellow", hex: "#f5d300", finish: "special", tier: "Special", price: 3200 },
  { id: "gt-silver", name: "GT Silver Metallic", hex: "#9a9a96", finish: "metallic", tier: "Metallic", price: 1800 },
  { id: "rhodium-silver", name: "Rhodium Silver Metallic", hex: "#8f9295", finish: "metallic", tier: "Metallic", price: 1800 },
  { id: "liquid-metal", name: "Liquid Metal Silver", hex: "#b8b8b8", finish: "metallic", tier: "Metallic", price: 11900 },
  { id: "sapphire-blue", name: "Sapphire Blue Metallic", hex: "#1a3a6e", finish: "metallic", tier: "Metallic", price: 1800 },
  { id: "dark-blue", name: "Dark Blue Metallic", hex: "#12233f", finish: "metallic", tier: "Metallic", price: 1800 },
  { id: "meteor-grey", name: "Meteor Grey Metallic", hex: "#5c5f61", finish: "metallic", tier: "Metallic", price: 1800 },
  { id: "basalt-black", name: "Basalt Black Metallic", hex: "#1c1c1e", finish: "metallic", tier: "Metallic", price: 1800 },
];

export const WHEEL_OPTIONS: WheelOption[] = [
  {
    id: "standard",
    name: "918 Spyder Standard Alloy",
    description: "Dual 5-spoke light alloy wheels in Silver finish",
    price: 0,
  },
  {
    id: "weissach",
    name: "Weissach Forged Magnesium",
    description: "Ultra-lightweight forged magnesium racing wheels (-14 kg mass reduction)",
    price: 32500,
  },
];

export const TRIM_OPTIONS: TrimOption[] = [
  {
    id: "leather",
    name: "Leather Ergonomic Cockpit",
    description: "Hand-stitched leather upholstery with subtle contrast piping",
    price: 0,
  },
  {
    id: "alcantara",
    name: "Weissach Race Alcantara",
    description: "High-grip Alcantara steering wheel, dash, and bucket seat trim",
    price: 7500,
  },
  {
    id: "carbon",
    name: "Carbon Interior Package",
    description: "Exposed matte carbon fiber instrument cluster surround and door pulls",
    price: 12000,
  },
];

export const CAMERA_PRESETS: CameraPreset[] = [
  { id: "hero", name: "Hero 3/4", description: "Front perspective studio view" },
  { id: "side", name: "Side Profile", description: "Flush elevation view" },
  { id: "rear", name: "Rear 3/4", description: "Dual top-exhaust view" },
  { id: "wheelCloseup", name: "Wheel Hub", description: "Macro view of front wheel" },
  { id: "interior", name: "Interior", description: "Cockpit perspective" },
];

export const BASE_PRICE = 845000;

export interface ConfiguratorState {
  paint: PaintOption;
  wheels: WheelOption;
  trim: TrimOption;
  doors: { L: boolean; R: boolean };
  activeCamera: CameraPreset["id"];
  isReady: boolean;
  bufferedCount: number;
}

interface ConfiguratorContextType {
  state: ConfiguratorState;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  setPaint: (paint: PaintOption) => void;
  setWheels: (wheelId: WheelOption["id"]) => void;
  setTrim: (trimId: TrimOption["id"]) => void;
  toggleDoor: (side: "L" | "R") => void;
  setCamera: (presetId: CameraPreset["id"]) => void;
  resetConfig: () => void;
  calculateTotalPrice: () => number;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | null>(null);

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Parse initial config from search params or fallback to defaults
  const initialPaintId = searchParams.get("paint") || "black";
  const initialWheelId = (searchParams.get("wheels") as WheelOption["id"]) || "standard";
  const initialTrimId = (searchParams.get("trim") as TrimOption["id"]) || "leather";

  const foundPaint = PAINT_OPTIONS.find((p) => p.id === initialPaintId) || PAINT_OPTIONS[0];
  const foundWheel = WHEEL_OPTIONS.find((w) => w.id === initialWheelId) || WHEEL_OPTIONS[0];
  const foundTrim = TRIM_OPTIONS.find((t) => t.id === initialTrimId) || TRIM_OPTIONS[0];

  const [paint, setPaintState] = useState<PaintOption>(foundPaint);
  const [wheels, setWheelsState] = useState<WheelOption>(foundWheel);
  const [trim, setTrimState] = useState<TrimOption>(foundTrim);
  const [doors, setDoors] = useState<{ L: boolean; R: boolean }>({ L: false, R: false });
  const [activeCamera, setActiveCamera] = useState<CameraPreset["id"]>("hero");
  const [isReady, setIsReady] = useState(false);
  const [commandBuffer, setCommandBuffer] = useState<any[]>([]);

  // Post message dispatcher
  const postMsg = useCallback(
    (msg: any) => {
      if (!isReady) {
        setCommandBuffer((prev) => [...prev, msg]);
        return;
      }
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(msg, "*");
      }
    },
    [isReady]
  );

  // Sync state changes to URL search params
  const syncUrl = useCallback(
    (pId: string, wId: string, tId: string) => {
      const params = new URLSearchParams();
      params.set("paint", pId);
      params.set("wheels", wId);
      params.set("trim", tId);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router]
  );

  // Paint setter
  const setPaint = useCallback(
    (newPaint: PaintOption) => {
      setPaintState(newPaint);
      postMsg({ type: "SET_PAINT", hex: newPaint.hex, finish: newPaint.finish });
      syncUrl(newPaint.id, wheels.id, trim.id);
    },
    [postMsg, syncUrl, wheels.id, trim.id]
  );

  // Wheel setter
  const setWheels = useCallback(
    (wheelId: WheelOption["id"]) => {
      const option = WHEEL_OPTIONS.find((w) => w.id === wheelId) || WHEEL_OPTIONS[0];
      setWheelsState(option);
      postMsg({ type: "SET_WHEELS", id: option.id });
      syncUrl(paint.id, option.id, trim.id);
    },
    [postMsg, syncUrl, paint.id, trim.id]
  );

  // Trim setter
  const setTrim = useCallback(
    (trimId: TrimOption["id"]) => {
      const option = TRIM_OPTIONS.find((t) => t.id === trimId) || TRIM_OPTIONS[0];
      setTrimState(option);
      postMsg({ type: "SET_TRIM", tierId: option.id });
      syncUrl(paint.id, wheels.id, option.id);
    },
    [postMsg, syncUrl, paint.id, wheels.id]
  );

  // Door toggle
  const toggleDoor = useCallback(
    (side: "L" | "R") => {
      const nextOpen = !doors[side];
      setDoors((prev) => ({ ...prev, [side]: nextOpen }));
      postMsg({ type: "OPEN_DOOR", side, open: nextOpen });
    },
    [doors, postMsg]
  );

  // Camera preset setter
  const setCamera = useCallback(
    (presetId: CameraPreset["id"]) => {
      setActiveCamera(presetId);
      postMsg({ type: "SET_CAMERA", presetId });
    },
    [postMsg]
  );

  // Reset configuration
  const resetConfig = useCallback(() => {
    const defaultPaint = PAINT_OPTIONS[0];
    const defaultWheels = WHEEL_OPTIONS[0];
    const defaultTrim = TRIM_OPTIONS[0];
    setPaintState(defaultPaint);
    setWheelsState(defaultWheels);
    setTrimState(defaultTrim);
    setDoors({ L: false, R: false });
    setActiveCamera("hero");

    postMsg({ type: "SET_PAINT", hex: defaultPaint.hex, finish: defaultPaint.finish });
    postMsg({ type: "SET_WHEELS", id: defaultWheels.id });
    postMsg({ type: "SET_TRIM", tierId: defaultTrim.id });
    postMsg({ type: "OPEN_DOOR", side: "L", open: false });
    postMsg({ type: "OPEN_DOOR", side: "R", open: false });
    postMsg({ type: "SET_CAMERA", presetId: "hero" });

    syncUrl(defaultPaint.id, defaultWheels.id, defaultTrim.id);
  }, [postMsg, syncUrl]);

  // Price calculator
  const calculateTotalPrice = useCallback(() => {
    return BASE_PRICE + paint.price + wheels.price + trim.price;
  }, [paint.price, wheels.price, trim.price]);

  // Handle incoming postMessage from PlayCanvas & safety timer
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      let msg = event.data;
      if (typeof msg === "string") {
        try {
          msg = JSON.parse(msg);
        } catch {
          // Ignore invalid JSON strings
        }
      }
      if (!msg || typeof msg !== "object" || !msg.type) return;

      if (msg.type === "PC_READY") {
        setIsReady(true);
      }
    };

    window.addEventListener("message", handleMessage);

    // Fallback safety timer: set isReady to true after 3 seconds max so user is never stuck
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Flush buffer once ready
  useEffect(() => {
    if (isReady && commandBuffer.length > 0) {
      commandBuffer.forEach((msg) => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(msg, "*");
        }
      });
      setCommandBuffer([]);
    }
  }, [isReady, commandBuffer]);

  // Send initial state to PlayCanvas once ready if no buffered commands
  useEffect(() => {
    if (isReady && commandBuffer.length === 0) {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const win = iframeRef.current.contentWindow;
        win.postMessage({ type: "SET_PAINT", hex: paint.hex, finish: paint.finish }, "*");
        win.postMessage({ type: "SET_WHEELS", id: wheels.id }, "*");
        win.postMessage({ type: "SET_TRIM", tierId: trim.id }, "*");
        win.postMessage({ type: "SET_CAMERA", presetId: activeCamera }, "*");
      }
    }
  }, [isReady]);

  return (
    <ConfiguratorContext.Provider
      value={{
        state: {
          paint,
          wheels,
          trim,
          doors,
          activeCamera,
          isReady,
          bufferedCount: commandBuffer.length,
        },
        iframeRef,
        setIsReady,
        setPaint,
        setWheels,
        setTrim,
        toggleDoor,
        setCamera,
        resetConfig,
        calculateTotalPrice,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) {
    throw new Error("useConfigurator must be used within a ConfiguratorProvider");
  }
  return ctx;
}
