import React, { useRef, useState, useEffect } from "react";
import { Camera, RefreshCw, Upload, Sparkles, Image as ImageIcon, MapPin, Compass, AlertCircle, GraduationCap, Globe, BookOpen, Layers, Landmark, Search, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SAMPLE_LANDMARKS, SampleLandmark } from "../data/sampleLandmarks";
import { UNESCO_AND_COLLEGES_CATALOG } from "../data/historicalColleges";
import { fileToDataUrl, urlToDataUrl, optimizeBase64Image } from "../utils/imageUtils";
import { useLanguage } from "../context/LanguageContext";
import { ARScanOverlay } from "./ARScanOverlay";
import { UnescoAndCollegesExplorer } from "./UnescoAndCollegesExplorer";
import { LandmarkSearchModal } from "./LandmarkSearchModal";

interface CameraCaptureProps {
  onPhotoSelected: (
    imageDataUrl: string,
    landmarkPreset?: SampleLandmark,
    explicitHint?: string,
    mode?: "landmark_tour" | "guess_location"
  ) => void;
  isLoading: boolean;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({ onPhotoSelected, isLoading }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [scanMode, setScanMode] = useState<"landmark_tour" | "guess_location">("landmark_tour");
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [sampleLoadingId, setSampleLoadingId] = useState<string | null>(null);
  const [presetDeckView, setPresetDeckView] = useState<"quick" | "unesco_catalog">("quick");
  const [quickFilter, setQuickFilter] = useState<"all" | "wonders" | "unesco" | "monuments">("all");
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [selectedTargetMonument, setSelectedTargetMonument] = useState<{ name: string; city?: string } | null>(null);

  const streamRef = useRef<MediaStream | null>(null);

  // Start/Stop Camera
  const startCamera = async (facing: "environment" | "user" = facingMode) => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facing },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch((playErr) => {
          console.warn("Video play interrupted or disallowed:", playErr);
        });
        setCameraActive(true);
      } else {
        // If unmounted before stream arrived
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
    } catch (err: any) {
      console.warn("Camera access failed or unavailable:", err);
      setCameraError(t("camera_error", "Camera unavailable or permission denied. You can still upload a photo or choose a sample landmark."));
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const toggleFacingMode = () => {
    const nextMode = facingMode === "environment" ? "user" : "environment";
    setFacingMode(nextMode);
    if (cameraActive) {
      startCamera(nextMode);
    }
  };

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const takeSnapshot = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (video.readyState < 2 || !video.videoWidth || !video.videoHeight) {
      console.warn("Camera stream not yet active or decoding frames.");
      return;
    }
    const canvas = document.createElement("canvas");
    let vw = video.videoWidth;
    let vh = video.videoHeight;
    const maxDim = 1024;
    if (vw > maxDim || vh > maxDim) {
      if (vw > vh) {
        vh = Math.round((vh * maxDim) / vw);
        vw = maxDim;
      } else {
        vw = Math.round((vw * maxDim) / vh);
        vh = maxDim;
      }
    }
    canvas.width = vw;
    canvas.height = vh;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // If front-facing, mirror horizontally
    if (facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    stopCamera();
    // Fresh live camera capture: AI vision inspects the photograph pixels directly
    onPhotoSelected(dataUrl, undefined, selectedTargetMonument?.name || undefined, scanMode);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const rawDataUrl = await fileToDataUrl(file);
      const optimized = await optimizeBase64Image(rawDataUrl);

      // Clean base name without extensions or generic camera prefixes / generic nouns
      const rawName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim();
      const baseName = rawName.replace(/\b\d{3,5}\s*[xX*×]\s*\d{3,5}\b/g, "").replace(/\b\d{10,}\b/g, "").replace(/\s+/g, " ").trim();
      const isGeneric = /^(img|image|photo|screenshot|camera|download|file|picture|dsc|pic|p_|\d+|bridge|church|temple|tower|gate|nature|view|monument|building|wallpaper|untitled|landscape|street|square|park|place|city|travel|tourism)[\s\d_]*$/i.test(baseName);
      const hint = !isGeneric && baseName.length >= 3 && baseName.length <= 60 ? baseName : undefined;

      onPhotoSelected(optimized, undefined, hint, scanMode);
    } catch (err) {
      console.error("Error loading photo file:", err);
    } finally {
      if (e.target) {
        e.target.value = "";
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      try {
        const rawDataUrl = await fileToDataUrl(file);
        const optimized = await optimizeBase64Image(rawDataUrl);

        const rawName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim();
        const baseName = rawName.replace(/\b\d{3,5}\s*[xX*×]\s*\d{3,5}\b/g, "").replace(/\b\d{10,}\b/g, "").replace(/\s+/g, " ").trim();
        const isGeneric = /^(img|image|photo|screenshot|camera|download|file|picture|dsc|pic|p_|\d+|bridge|church|temple|tower|gate|nature|view|monument|building|wallpaper|untitled|landscape|street|square|park|place|city|travel|tourism)[\s\d_]*$/i.test(baseName);
        const hint = !isGeneric && baseName.length >= 3 && baseName.length <= 60 ? baseName : undefined;

        onPhotoSelected(optimized, undefined, hint, scanMode);
      } catch (err) {
        console.error("Error loading dropped file:", err);
      }
    }
  };

  const findMatchingPreset = (monumentName: string): SampleLandmark | null => {
    if (!monumentName || !monumentName.trim()) return null;
    const target = monumentName.toLowerCase().trim();
    const cleanTarget = target.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

    // 1. Exact or substring match in SAMPLE_LANDMARKS
    const exactSample = SAMPLE_LANDMARKS.find(
      (s) => s.name.toLowerCase() === target || s.id.toLowerCase() === target
    );
    if (exactSample) return exactSample;

    const subSample = SAMPLE_LANDMARKS.find((s) => {
      const sName = s.name.toLowerCase();
      return (
        sName.includes(target) ||
        target.includes(sName) ||
        (cleanTarget.length >= 4 && sName.includes(cleanTarget))
      );
    });
    if (subSample) return subSample;

    // Common shorthand monument nicknames
    if (target.includes("colosseum")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "colosseum");
      if (match) return match;
    }
    if (target.includes("big ben") || target.includes("westminster")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "big-ben");
      if (match) return match;
    }
    if (target.includes("petra")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "petra-treasury");
      if (match) return match;
    }
    if (target.includes("machu picchu")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "machu-picchu");
      if (match) return match;
    }
    if (target.includes("pyramid") || target.includes("giza") || target.includes("sphinx")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "giza-pyramids");
      if (match) return match;
    }
    if (target.includes("statue of liberty") || target.includes("liberty")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "statue-of-liberty");
      if (match) return match;
    }
    if (target.includes("eiffel")) {
      const match = SAMPLE_LANDMARKS.find((s) => s.id === "eiffel-tower");
      if (match) return match;
    }

    // 2. Search UNESCO_AND_COLLEGES_CATALOG
    const matchedSite = UNESCO_AND_COLLEGES_CATALOG.find((site) => {
      const siteName = site.name.toLowerCase();
      const localName = site.localName?.toLowerCase() || "";
      return (
        siteName === target ||
        site.id === target ||
        localName === target ||
        siteName.includes(target) ||
        target.includes(siteName) ||
        (cleanTarget.length >= 4 && siteName.includes(cleanTarget))
      );
    });

    if (matchedSite) {
      return {
        id: matchedSite.id,
        name: matchedSite.name,
        city: matchedSite.city,
        country: matchedSite.country,
        architecturalStyle: matchedSite.architecturalStyle || "Historic Architectural Structure",
        periodEra: matchedSite.periodEra || (matchedSite.year ? `${matchedSite.year} AD` : "Historical Era"),
        summary: matchedSite.summary,
        imageUrl: matchedSite.imageUrl,
        thumbnailUrl: matchedSite.thumbnailUrl || matchedSite.imageUrl,
        badge: matchedSite.badge || "World Heritage Site",
        category: (matchedSite as any).isCollegeOrUniversity ? "college" : "unesco",
        isUnesco: true,
        unescoId: matchedSite.unescoId,
      };
    }

    // 3. Match authentic local image filenames in /images/landmarks/
    const localImageMap: Record<string, string> = {
      "golden gate": "/images/landmarks/golden-gate-bridge.jpg",
      "stonehenge": "/images/landmarks/stonehenge.jpg",
      "pisa": "/images/landmarks/leaning-tower-pisa.jpg",
      "leaning tower": "/images/landmarks/leaning-tower-pisa.jpg",
      "fuji": "/images/landmarks/mount-fuji.jpg",
      "hagia sophia": "/images/landmarks/hagia-sophia.jpg",
      "arc de triomphe": "/images/landmarks/arc-de-triomphe.jpg",
      "bernabeu": "/images/landmarks/bernabeu-stadium.jpg",
      "cappadocia": "/images/landmarks/cappadocia.jpg",
      "florence": "/images/landmarks/florence.jpg",
      "red square": "/images/landmarks/red-square.jpg",
      "versailles": "/images/landmarks/versailles.jpg",
      "venice": "/images/landmarks/venice.jpg",
      "victoria falls": "/images/landmarks/victoria-falls.jpg",
      "grand canyon": "/images/landmarks/grand-canyon.jpg",
      "yellowstone": "/images/landmarks/yellowstone.jpg",
      "burj khalifa": "/images/landmarks/burj-khalifa.jpg",
      "galapagos": "/images/landmarks/galapagos.jpg",
      "borobudur": "/images/landmarks/borobudur.jpg",
      "bagan": "/images/landmarks/bagan.jpg",
      "plitvice": "/images/landmarks/plitvice.jpg",
      "mont saint michel": "/images/landmarks/mont-saint-michel.jpg",
      "alhambra": "/images/landmarks/alhambra.jpg",
      "prague": "/images/landmarks/prague.jpg",
      "serengeti": "/images/landmarks/serengeti.jpg",
      "great barrier reef": "/images/landmarks/great-barrier-reef.jpg",
      "ha long": "/images/landmarks/ha-long-bay.jpg",
      "iguazu": "/images/landmarks/iguazu.jpg",
      "kinkaku": "/images/landmarks/kinkaku-ji.jpg",
      "golden pavilion": "/images/landmarks/kinkaku-ji.jpg",
      "fushimi": "/images/landmarks/fushimi-inari.jpg",
      "himeji": "/images/landmarks/himeji-castle.jpg",
      "forbidden city": "/images/landmarks/forbidden-city.jpg",
      "lalibela": "/images/landmarks/lalibela.jpg",
    };

    for (const [key, imgPath] of Object.entries(localImageMap)) {
      if (target.includes(key)) {
        return {
          id: `local-${key.replace(/\s+/g, "-")}`,
          name: monumentName,
          city: "Global Landmark",
          country: "World Heritage",
          architecturalStyle: "Historic Architecture",
          periodEra: "Historic Era",
          summary: `${monumentName} architectural landmark exploration.`,
          imageUrl: imgPath,
          thumbnailUrl: imgPath,
          badge: "Curated Landmark Photo",
          category: "monument",
        };
      }
    }

    return null;
  };

  const handleSelectMonumentDirectly = (monumentName: string) => {
    const matchedSample = findMatchingPreset(monumentName);
    if (matchedSample) {
      handleSelectSample(matchedSample);
    } else {
      setSelectedTargetMonument({ name: monumentName });
      setShowSearchModal(false);
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const grad = ctx.createLinearGradient(0, 0, 1200, 800);
          grad.addColorStop(0, "#020617");
          grad.addColorStop(0.5, "#0f172a");
          grad.addColorStop(1, "#1e1b4b");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 1200, 800);

          ctx.beginPath();
          ctx.arc(600, 360, 180, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(6, 182, 212, 0.08)";
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(450, 560);
          ctx.lineTo(520, 320);
          ctx.lineTo(600, 240);
          ctx.lineTo(680, 320);
          ctx.lineTo(750, 560);
          ctx.closePath();
          ctx.strokeStyle = "rgba(6, 182, 212, 0.8)";
          ctx.lineWidth = 4;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(400, 560);
          ctx.lineTo(800, 560);
          ctx.strokeStyle = "#06b6d4";
          ctx.lineWidth = 4;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(600, 235, 12, 0, Math.PI * 2);
          ctx.fillStyle = "#06b6d4";
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 36px system-ui, -apple-system, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(monumentName, 600, 630);

          ctx.fillStyle = "#94a3b8";
          ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
          ctx.fillText("ARCHITECTURAL GROUNDING TOUR", 600, 675);

          const cardJpeg = canvas.toDataURL("image/jpeg", 0.85);
          onPhotoSelected(cardJpeg, undefined, monumentName, scanMode);
          return;
        }
      } catch (e) {
        console.warn("Could not generate canvas card:", e);
      }
      onPhotoSelected("", undefined, monumentName, scanMode);
    }
  };

  const handleSelectSample = async (sample: SampleLandmark) => {
    try {
      setSampleLoadingId(sample.id);
      let dataUrl: string = sample.imageUrl;
      try {
        dataUrl = await urlToDataUrl(sample.imageUrl);
      } catch (primaryErr) {
        console.warn("Primary image load notice, trying thumbnail fallback:", primaryErr);
        try {
          dataUrl = await urlToDataUrl(sample.thumbnailUrl);
        } catch {
          dataUrl = sample.imageUrl;
        }
      }
      onPhotoSelected(dataUrl || sample.imageUrl, sample, undefined, scanMode);
    } catch (err) {
      console.warn("Sample selection notice, proceeding with direct sample image:", err);
      onPhotoSelected(sample.imageUrl, sample, undefined, scanMode);
    } finally {
      setSampleLoadingId(null);
    }
  };

  return (
    <div className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-5 sm:space-y-6 lg:space-y-8">
      {/* Visual Mode Selector: 🏛️ Landmark Tour vs 🌍 Guess Location with Google Photos */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-2 px-2">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-300">
            {scanMode === "guess_location"
              ? t("mode_guess_location_label", "AI Geo-Detective & Photo Verification Mode")
              : t("mode_landmark_tour_label", "CityLens AR Exploration Mode")}
          </span>
        </div>

        <div className="flex items-center p-1 bg-slate-950/90 rounded-xl border border-slate-800 w-full sm:w-auto">
          <button
            type="button"
            id="mode-landmark-tour-btn"
            onClick={() => setScanMode("landmark_tour")}
            className={`flex-1 sm:flex-initial py-1.5 px-3.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
              scanMode === "landmark_tour"
                ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Landmark className="w-3.5 h-3.5 text-cyan-400" />
            <span>🏛️ {t("mode_landmark_tour", "Landmark AR Tour")}</span>
          </button>

          <button
            type="button"
            id="mode-guess-location-btn"
            onClick={() => setScanMode("guess_location")}
            className={`flex-1 sm:flex-initial py-1.5 px-3.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
              scanMode === "guess_location"
                ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-300 border border-indigo-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>🌍 {t("mode_guess_location", "Guess Location (Google Photos)")}</span>
          </button>
        </div>
      </div>

      {/* Viewfinder / Capture Deck */}
      <div
        id="camera-viewport-card"
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`relative w-full ${
          cameraActive
            ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[65vh] lg:max-h-[75vh] bg-slate-950"
            : "bg-slate-900/90 py-5 px-3 sm:py-8 sm:px-8 lg:py-16 lg:px-12 xl:py-20 xl:px-16 lg:min-h-[400px] xl:min-h-[440px]"
        } rounded-2xl sm:rounded-3xl lg:rounded-[32px] border ${
          dragOver ? "border-cyan-400 bg-cyan-950/20" : "border-cyan-500/35"
        } overflow-hidden shadow-2xl shadow-cyan-950/30 flex flex-col items-center justify-center transition-all duration-300`}
      >
        {/* Holographic Glowing Ambient Background Orbs */}
        <div className="absolute -top-28 -left-28 w-56 h-56 lg:w-80 lg:h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-glow" />
        <div className="absolute -bottom-28 -right-28 w-56 h-56 lg:w-80 lg:h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-glow" />

        {/* AR Matrix Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40c_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40c_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] lg:bg-[size:2rem_2rem] pointer-events-none" />

        {/* Corner AR Brackets */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 lg:top-5 lg:left-5 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7 border-t-2 lg:border-t-[3px] border-l-2 lg:border-l-[3px] border-cyan-400/70 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 lg:top-5 lg:right-5 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7 border-t-2 lg:border-t-[3px] border-r-2 lg:border-r-[3px] border-cyan-400/70 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 lg:bottom-5 lg:left-5 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7 border-b-2 lg:border-b-[3px] border-l-2 lg:border-l-[3px] border-cyan-400/70 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 lg:bottom-5 lg:right-5 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7 border-b-2 lg:border-b-[3px] border-r-2 lg:border-r-[3px] border-cyan-400/70 pointer-events-none" />

        {/* Animated Drag Over Active Overlay */}
        <AnimatePresence>
          {dragOver && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 border-2 border-dashed border-cyan-400 rounded-2xl sm:rounded-3xl lg:rounded-[32px] pointer-events-none"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-cyan-500/15 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-3 animate-bounce">
                <Upload className="w-8 h-8 lg:w-10 lg:h-10 text-cyan-300" />
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide mb-1">
                {t("or_drag_drop", "Drop landmark photo here")}
              </h4>
              <p className="text-xs lg:text-sm font-mono text-cyan-300">
                {t("instant_detection_desc", "Instant AI Architectural & Landmark Detection")}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Video Element */}
        <video
          ref={videoRef}
          playsInline
          muted
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            cameraActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* AR Viewfinder Overlay Grid (when camera is active) */}
        {cameraActive && (
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-3 sm:p-5 lg:p-6">
            {/* Top Telemetry */}
            <div className="flex items-center justify-between text-xs lg:text-sm font-mono text-cyan-300 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-cyan-500/30 shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold tracking-wider text-[11px] sm:text-xs lg:text-sm">{t("camera_active", "CAMERA ACTIVE")}</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300 text-[10px] sm:text-xs lg:text-sm">
                <span>{t("ai_vision", "AI VISION")}</span>
                <span className="hidden sm:inline">FOV 84°</span>
                <span>{t("ready", "READY")}</span>
              </div>
            </div>

            {/* Volumetric AR Optical Viewfinder Beam */}
            <ARScanOverlay variant="active" label={t("ar_optic_active", "AR // OPTIC ACTIVE")} showLabel={false} />

            {/* Target Reticle */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 mx-auto my-auto border border-cyan-400/40 rounded-2xl lg:rounded-3xl shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 lg:w-6 lg:h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-6 lg:h-6 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 lg:w-6 lg:h-6 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 lg:w-6 lg:h-6 border-b-2 border-r-2 border-cyan-400" />
              {/* Center Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 lg:w-6 h-0.5 bg-cyan-400/80" />
                <div className="h-4 lg:h-6 w-0.5 bg-cyan-400/80 absolute" />
              </div>
              <div className="absolute -bottom-6 lg:-bottom-8 inset-x-0 text-center">
                <span className="text-[10px] lg:text-xs font-mono text-cyan-300 uppercase tracking-wider bg-slate-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  {t("align_monument_in_frame", "Align monument in frame")}
                </span>
              </div>
            </div>

            {/* Bottom Camera Action Bar */}
            <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto pointer-events-auto bg-slate-950/90 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-full border border-slate-700/80 shadow-2xl">
              <button
                type="button"
                id="camera-flip-btn"
                onClick={toggleFacingMode}
                title={t("switch_camera", "Switch Camera")}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full text-slate-200 hover:text-white hover:bg-slate-800 transition flex items-center justify-center cursor-pointer active:rotate-180 duration-300"
              >
                <RefreshCw className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Ergonomic Shutter Button with Pulsing Glow Ring */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-cyan-400/40 animate-ping pointer-events-none" />
                <button
                  type="button"
                  id="camera-shutter-btn"
                  onClick={takeSnapshot}
                  disabled={isLoading}
                  title={t("capture_landmark_photo", "Capture Landmark Photo")}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full border-2 border-white/90 p-1 flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer shadow-lg shadow-cyan-500/40"
                >
                  <div className="w-full h-full rounded-full bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center shadow-md transition">
                    <Camera className="w-6 h-6 lg:w-7 lg:h-7 text-slate-950" />
                  </div>
                </button>
              </div>

              <button
                type="button"
                id="camera-close-btn"
                onClick={stopCamera}
                title={t("close_camera", "Close Camera")}
                className="h-10 lg:h-11 px-3 lg:px-4 rounded-full text-xs lg:text-sm font-semibold text-slate-300 hover:text-rose-400 hover:bg-slate-800 transition flex items-center justify-center cursor-pointer"
              >
                {t("cancel", "Cancel")}
              </button>
            </div>
          </div>
        )}

        {/* Inactive State: Upload & Live Camera Triggers */}
        {!cameraActive && (
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl lg:max-w-2xl w-full">
            {/* Holographic Floating Emblem with Pulsing Aura */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative mb-3 sm:mb-4 lg:mb-6 animate-float cursor-pointer group"
              title="Click to select photo"
            >
              {/* Ambient pulsing glowing aura */}
              <div className="absolute -inset-2.5 lg:-inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/35 via-blue-500/35 to-purple-500/35 blur-md lg:blur-xl animate-aura pointer-events-none" />

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-2xl sm:rounded-3xl lg:rounded-[28px] bg-slate-950/90 border border-cyan-400/60 flex items-center justify-center text-cyan-400 shadow-xl lg:shadow-2xl shadow-cyan-950/70 overflow-hidden">
                {/* Shimmer light sweep */}
                <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent animate-shimmer pointer-events-none" />
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-cyan-400 animate-icon-float" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {scanMode === "guess_location"
                ? t("guess_location_title", "AI Geo-Detective: Guess Location with Google Photos")
                : t("capture_landmark_title", "Capture a City Landmark")}
            </h3>

            <div className="mt-2 sm:mt-2.5 flex items-center justify-center px-4 w-full">
              <p className="text-xs sm:text-sm text-slate-400 text-center flex items-center justify-center gap-1.5 leading-none">
                {scanMode === "guess_location" ? (
                  <>
                    <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0 translate-y-[0.5px]" />
                    <span className="leading-none">
                      {t("guess_location_hint", "Upload any street, building, or landscape — AI deduces location & matches photos on Google")}
                    </span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 translate-y-[0.5px]" />
                    <span className="leading-none">{t("landmark_types_hint", "Monuments, cathedrals, temples & historic sites")}</span>
                  </>
                )}
              </p>
            </div>

            {cameraError && (
              <div className="mt-3 lg:mt-4 flex items-center space-x-2 text-xs lg:text-sm text-amber-300 bg-amber-950/40 border border-amber-800/50 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl text-left max-w-md lg:max-w-lg">
                <AlertCircle className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 text-amber-400" />
                <span>{cameraError}</span>
              </div>
            )}

            {/* Direct Global Monument Search & Lock */}
            <div className="w-full max-w-md mx-auto mt-3 sm:mt-4 px-2">
              <div
                onClick={() => setShowSearchModal(true)}
                className="relative flex items-center bg-slate-900/90 hover:bg-slate-850 border border-slate-700 hover:border-cyan-400/60 rounded-xl px-3.5 py-2.5 cursor-pointer shadow-lg transition-all group"
              >
                <Search className="w-4 h-4 text-cyan-400 mr-2.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-200 truncate flex-1 text-left">
                  {selectedTargetMonument ? `Target: ${selectedTargetMonument.name}` : t("search_choose_monument", "Search or choose any global monument...")}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 shrink-0">
                  {selectedTargetMonument ? t("change_btn", "CHANGE") : t("search_btn", "SEARCH")}
                </span>
              </div>

              {/* Target Monument Locked Banner */}
              {selectedTargetMonument && (
                <div className="mt-2 flex items-center justify-between bg-cyan-950/70 border border-cyan-500/40 rounded-xl p-2 px-3 text-xs animate-in fade-in">
                  <div className="flex items-center space-x-2 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-white font-semibold truncate">Target: {selectedTargetMonument.name}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleSelectMonumentDirectly(selectedTargetMonument.name)}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[11px] hover:bg-cyan-400 transition cursor-pointer"
                    >
                      {t("tour_now", "Tour Now")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTargetMonument(null)}
                      className="p-1 text-slate-400 hover:text-white rounded cursor-pointer"
                      title="Clear target"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Popular Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto mt-2.5 pb-1 scrollbar-none text-[11px]">
                <span className="text-slate-500 font-mono shrink-0">Quick Tour:</span>
                {["Taj Mahal", "Eiffel Tower", "Colosseum", "Pyramids of Giza", "Machu Picchu", "Big Ben", "Petra"].map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleSelectMonumentDirectly(name)}
                    className="px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition shrink-0 cursor-pointer"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: 100% On-Screen with High Tactile Ergonomics & Motion */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 lg:gap-4 w-full max-w-xs sm:max-w-none mt-4 sm:mt-5 lg:mt-7">
              {/* Primary Camera Button */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34, 211, 238, 0.45)" }}
                whileTap={{ scale: 0.96 }}
                type="button"
                id="open-live-camera-btn"
                onClick={() => startCamera("environment")}
                disabled={isLoading}
                className="relative group overflow-hidden w-full sm:w-auto min-h-[46px] sm:min-h-[48px] lg:min-h-[54px] xl:min-h-[56px] flex items-center justify-center space-x-2 px-6 py-3 lg:px-8 lg:py-3.5 rounded-xl lg:rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 font-bold text-sm lg:text-base shadow-lg shadow-cyan-500/30 transition-all cursor-pointer disabled:opacity-50"
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 w-1/3 bg-white/30 skew-x-12 group-hover:translate-x-[350%] transition-transform duration-700 pointer-events-none" />
                <Camera className="w-4 h-4 lg:w-5 lg:h-5 text-slate-950 shrink-0" />
                <span className="tracking-wide whitespace-nowrap">
                  {t("open_camera", "Open Live Camera")}
                </span>
              </motion.button>

              {/* Upload Photo Button */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(15, 23, 42, 0.6)" }}
                whileTap={{ scale: 0.96 }}
                type="button"
                id="upload-photo-btn"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] lg:min-h-[54px] xl:min-h-[56px] flex items-center justify-center space-x-2 px-6 py-3 lg:px-8 lg:py-3.5 rounded-xl lg:rounded-2xl bg-slate-800/90 hover:bg-slate-750 text-white font-semibold text-sm lg:text-base border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-200 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                <Upload className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-300 shrink-0" />
                <span className="tracking-wide whitespace-nowrap">
                  {t("upload_photo", "Upload Photo")}
                </span>
              </motion.button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Drag & Drop Hint */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-1.5 text-[11px] sm:text-xs lg:text-sm text-slate-400 hover:text-cyan-300 mt-2.5 sm:mt-3 lg:mt-4 font-mono cursor-pointer transition-colors"
            >
              <span>{t("or_drag_drop", "Supports JPEG, PNG, WEBP, HEIC (or tap to browse)")}</span>
            </div>
          </div>
        )}
      </div>

      {/* Curated Sample Landmarks & UNESCO Explorer Deck */}
      <div id="sample-landmarks-deck" className="space-y-3 sm:space-y-4">
        {/* Top Deck Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-slate-900/60 p-2 sm:p-2.5 rounded-2xl border border-slate-800">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              id="deck-view-quick"
              onClick={() => setPresetDeckView("quick")}
              className={`px-3 py-1.5 rounded-xl font-medium text-xs sm:text-sm flex items-center space-x-1.5 transition-all cursor-pointer ${
                presetDeckView === "quick"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t("sample_landmarks", "Famous Landmarks")}</span>
            </button>

            <button
              type="button"
              id="deck-view-unesco"
              onClick={() => setPresetDeckView("unesco_catalog")}
              className={`px-3 py-1.5 rounded-xl font-medium text-xs sm:text-sm flex items-center space-x-1.5 transition-all cursor-pointer ${
                presetDeckView === "unesco_catalog"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t("unesco_sites_photos_tab", "UNESCO Sites (40+ With Photos)")}</span>
            </button>
          </div>

          {presetDeckView === "quick" && (
            <div className="flex items-center space-x-1.5 text-xs">
              <button
                type="button"
                onClick={() => setQuickFilter("all")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-xs ${
                  quickFilter === "all" ? "bg-slate-800 text-cyan-300 font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                {t("all_landmarks", "All Landmarks")}
              </button>
              <button
                type="button"
                onClick={() => setQuickFilter("wonders")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs ${
                  quickFilter === "wonders" ? "bg-slate-800 text-amber-300 font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{t("wonders_filter", "Wonders")}</span>
              </button>
              <button
                type="button"
                onClick={() => setQuickFilter("unesco")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs ${
                  quickFilter === "unesco" ? "bg-slate-800 text-cyan-300 font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>{t("unesco_filter", "UNESCO")}</span>
              </button>
              <button
                type="button"
                id="btn-filter-monuments"
                onClick={() => setQuickFilter("monuments")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer flex items-center space-x-1 text-xs ${
                  quickFilter === "monuments" ? "bg-slate-800 text-purple-300 font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                <Landmark className="w-3 h-3 text-purple-400" />
                <span>{t("monuments_filter", "Monuments")}</span>
              </button>
            </div>
          )}
        </div>

        {/* View 1: Quick Presets Deck */}
        {presetDeckView === "quick" ? (
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
              {SAMPLE_LANDMARKS.filter((sample) => {
                if (quickFilter === "wonders") return sample.category === "wonder";
                if (quickFilter === "unesco") return sample.isUnesco;
                if (quickFilter === "monuments") return sample.isMonument || sample.category === "monument";
                return true;
              }).map((sample) => {
                const isCurrentlyLoading = sampleLoadingId === sample.id;
                return (
                  <motion.button
                    key={sample.id}
                    type="button"
                    id={`sample-landmark-${sample.id}`}
                    onClick={() => handleSelectSample(sample)}
                    disabled={isLoading || isCurrentlyLoading}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col text-left rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/60 overflow-hidden transition-colors shadow-sm hover:shadow-md disabled:opacity-60 cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      <img
                        src={sample.thumbnailUrl}
                        alt={sample.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.triedFallback) {
                            target.dataset.triedFallback = "true";
                            target.src = sample.imageUrl;
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between">
                        <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-950/80 text-cyan-300 border border-slate-700 backdrop-blur-sm">
                          {sample.city}
                        </span>

                        {quickFilter === "monuments" || sample.category === "monument" ? (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-purple-950/90 text-purple-300 border border-purple-600/80 backdrop-blur-sm">
                            {t("monument_badge", "Monument")}
                          </span>
                        ) : sample.category === "wonder" ? (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-amber-950/90 text-amber-300 border border-amber-600/80 backdrop-blur-sm">
                            {t("wonder_badge", "Wonder")}
                          </span>
                        ) : sample.isUnesco ? (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-600/80 backdrop-blur-sm">
                            {t("unesco_pill", "UNESCO")}
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700 backdrop-blur-sm">
                            {t("monument_badge", "Monument")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-2 sm:p-2.5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="text-xs font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {sample.name}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                          <span className="truncate">{sample.country}</span>
                        </div>
                      </div>

                      <div className="mt-2 text-[10px] font-mono text-cyan-400 flex items-center space-x-1">
                        {isCurrentlyLoading ? (
                          <span className="text-amber-400 animate-pulse">{t("loading", "Loading...")}</span>
                        ) : (
                          <>
                            <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                            <span>{t("run_ar_scan", "Run AR Scan")}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                id="open-full-unesco-catalog-btn"
                onClick={() => setPresetDeckView("unesco_catalog")}
                className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("explore_unesco_sites_photos", "Explore All 40+ UNESCO World Heritage Sites (With Photos)")}</span>
                <span className="text-cyan-400">→</span>
              </button>
            </div>
          </div>
        ) : (
          /* View 2: Full Interactive UNESCO & Colleges Catalog Explorer */
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-3 sm:p-5">
            <UnescoAndCollegesExplorer
              onSelectSite={handleSelectSample}
              isLoading={isLoading}
              loadingId={sampleLoadingId}
            />
          </div>
        )}
      </div>

      <LandmarkSearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSelectLandmark={(name) => {
          setSelectedTargetMonument({ name });
          setShowSearchModal(false);
          handleSelectMonumentDirectly(name);
        }}
        currentLandmarkName={selectedTargetMonument?.name}
      />
    </div>
  );
};
