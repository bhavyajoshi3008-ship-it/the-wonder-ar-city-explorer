import React, { useRef, useState, useEffect } from "react";
import { Camera, RefreshCw, Upload, Sparkles, Image as ImageIcon, MapPin, Compass, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SAMPLE_LANDMARKS, SampleLandmark } from "../data/sampleLandmarks";
import { fileToDataUrl, urlToDataUrl, optimizeBase64Image } from "../utils/imageUtils";
import { useLanguage } from "../context/LanguageContext";

interface CameraCaptureProps {
  onPhotoSelected: (imageDataUrl: string, landmarkPreset?: SampleLandmark, fileNameHint?: string) => void;
  isLoading: boolean;
}

const cleanFileNameHint = (name: string): string | undefined => {
  if (!name) return undefined;
  const base = name.replace(/\.[^/.]+$/, "");
  const cleaned = base.replace(/[_-]+/g, " ").trim();
  // Filter out generic camera filenames like IMG_1234, photo, screenshot
  if (/^(img|dsc|photo|pic|image|screenshot|capture|p)[\s\d_-]*$/i.test(cleaned) || cleaned.length < 3) {
    return undefined;
  }
  return cleaned;
};

export const CameraCapture: React.FC<CameraCaptureProps> = ({ onPhotoSelected, isLoading }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [sampleLoadingId, setSampleLoadingId] = useState<string | null>(null);

  // Start/Stop Camera
  const startCamera = async (facing: "environment" | "user" = facingMode) => {
    setCameraError(null);
    try {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facing },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraActive(true);
      }
    } catch (err: any) {
      console.warn("Camera access failed or unavailable:", err);
      setCameraError("Camera unavailable or permission denied. You can still upload a photo or choose a sample landmark.");
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
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
    const canvas = document.createElement("canvas");
    let vw = video.videoWidth || 1280;
    let vh = video.videoHeight || 720;
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
    const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
    stopCamera();
    onPhotoSelected(dataUrl);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const hint = cleanFileNameHint(file.name);
      const rawDataUrl = await fileToDataUrl(file);
      const optimized = await optimizeBase64Image(rawDataUrl);
      onPhotoSelected(optimized, undefined, hint);
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
        const hint = cleanFileNameHint(file.name);
        const rawDataUrl = await fileToDataUrl(file);
        const optimized = await optimizeBase64Image(rawDataUrl);
        onPhotoSelected(optimized, undefined, hint);
      } catch (err) {
        console.error("Error loading dropped file:", err);
      }
    }
  };

  const handleSelectSample = async (sample: SampleLandmark) => {
    try {
      setSampleLoadingId(sample.id);
      let dataUrl: string;
      try {
        dataUrl = await urlToDataUrl(sample.imageUrl);
      } catch (primaryErr) {
        console.warn("Primary image load failed, trying thumbnail fallback:", primaryErr);
        dataUrl = await urlToDataUrl(sample.thumbnailUrl);
      }
      onPhotoSelected(dataUrl, sample);
    } catch (err) {
      console.error("Failed to load sample landmark:", err);
    } finally {
      setSampleLoadingId(null);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Viewfinder / Capture Deck */}
      <div
        id="camera-viewport-card"
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[580px] bg-slate-900/90 rounded-2xl border ${
          dragOver ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]" : "border-slate-800"
        } overflow-hidden shadow-2xl flex flex-col items-center justify-center transition-all duration-300`}
      >
        {/* Animated Drag Over Active Overlay */}
        <AnimatePresence>
          {dragOver && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-6 border-2 border-dashed border-cyan-400 rounded-2xl pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="w-20 h-20 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-2xl shadow-cyan-500/50 mb-4 ring-4 ring-cyan-400/20"
              >
                <Upload className="w-10 h-10 text-cyan-300" />
              </motion.div>
              <h4 className="text-xl font-bold text-white tracking-wide mb-1">
                {t("or_drag_drop", "Drop landmark photo here")}
              </h4>
              <p className="text-xs font-mono text-cyan-300">
                Instant AI Architectural & Landmark Detection
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Video Element */}
        <video
          ref={videoRef}
          playsInline
          muted
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            cameraActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* AR Viewfinder Overlay Grid (when camera is active) */}
        {cameraActive && (
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-6">
            {/* Top Telemetry */}
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400/90 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold tracking-wider">AR OPTIC SENSOR ACTIVE</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <span>ISO AUTO</span>
                <span>FOV 84°</span>
                <span>AI VISION READY</span>
              </div>
            </div>

            {/* Target Reticle Reticles */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto my-auto border border-cyan-400/40 rounded-xl">
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-cyan-400" />
              {/* Center Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-0.5 bg-cyan-400/80" />
                <div className="h-4 w-0.5 bg-cyan-400/80 absolute" />
                <div className="w-16 h-16 rounded-full border border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              <div className="absolute -bottom-7 inset-x-0 text-center">
                <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                  Frame landmark in reticle
                </span>
              </div>
            </div>

            {/* Bottom Camera Action Bar */}
            <div className="flex items-center justify-between w-full max-w-sm mx-auto pointer-events-auto bg-slate-950/75 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700/60 shadow-xl">
              <button
                type="button"
                id="camera-flip-btn"
                onClick={toggleFacingMode}
                title="Switch Camera"
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition"
              >
                <RefreshCw className="w-5 h-5" />
              </button>

              {/* Shutter Button */}
              <button
                type="button"
                id="camera-shutter-btn"
                onClick={takeSnapshot}
                disabled={isLoading}
                title="Capture Landmark Photo"
                className="relative group p-1 rounded-full border-2 border-cyan-400 bg-transparent hover:scale-105 active:scale-95 transition"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-400 group-hover:bg-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/40 transition">
                  <Camera className="w-7 h-7 text-slate-950" />
                </div>
              </button>

              <button
                type="button"
                id="camera-close-btn"
                onClick={stopCamera}
                title="Close Camera"
                className="text-xs font-mono text-slate-400 hover:text-rose-400 px-3 py-1.5 rounded-md hover:bg-slate-800/80 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Inactive State: Upload & Live Camera Triggers */}
        {!cameraActive && (
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-lg">
            {/* Holographic Icon Badge with Float Animation */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="relative mb-5 animate-float cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-950/90 via-slate-900 to-blue-950/80 border border-cyan-500/40 flex items-center justify-center shadow-xl shadow-cyan-950/70 ring-1 ring-cyan-400/20">
                <Camera className="w-10 h-10 text-cyan-400 animate-pulse" />
              </div>
              <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-cyan-500/25 border border-cyan-400/60 flex items-center justify-center shadow-md shadow-cyan-500/30">
                <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
              {t("take_photo", "Capture a City Landmark")}
            </h3>

            <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] text-slate-300 font-mono">
              <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>Best results: Historic buildings, cathedrals, towers & monuments</span>
            </div>

            {cameraError && (
              <div className="mt-3 flex items-center space-x-2 text-xs text-amber-300/90 bg-amber-950/40 border border-amber-800/50 px-3 py-2 rounded-lg text-left">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>{cameraError}</span>
              </div>
            )}

            {/* Action Buttons with Instant Spring Feedback & Zero-Delay Animations */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6">
              {/* Primary Camera Button with Ambient Glow Aura & Shimmer Sweep */}
              <div className="relative group">
                {/* Breathing Ambient Cyan Halo (No delay) */}
                <div className="absolute -inset-1 rounded-2xl bg-cyan-400/40 blur-md animate-aura opacity-75 group-hover:opacity-100 group-hover:scale-105 pointer-events-none" />

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96, y: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  type="button"
                  id="open-live-camera-btn"
                  onClick={() => startCamera("environment")}
                  disabled={isLoading}
                  className="relative overflow-hidden flex items-center space-x-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 border border-cyan-200/50 disabled:opacity-50 cursor-pointer"
                >
                  {/* Immediate Continuous Shimmer Sweep Animation */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent animate-shimmer" />
                  </div>

                  {/* Camera Icon with Snappy Micro-tilt on hover */}
                  <motion.div
                    whileHover={{ rotate: [-6, 6, 0], scale: 1.18 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <Camera className="w-4 h-4 text-slate-950" />
                  </motion.div>

                  <span className="relative z-10 font-bold tracking-wide">
                    {t("take_photo", "Open Live Camera")}
                  </span>
                </motion.button>
              </div>

              {/* Upload Photo Button with Instant Hover & Floating Icon */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96, y: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                type="button"
                id="upload-photo-btn"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="group flex items-center space-x-2.5 px-6 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/90 hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-colors duration-150 disabled:opacity-50 shadow-sm cursor-pointer"
              >
                {/* Responsive Floating Upload Arrow */}
                <div className="animate-icon-float flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-150">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="tracking-wide">
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

            {/* Drag & Drop Hint (Zero delay, instant render) */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 text-xs text-slate-400 hover:text-cyan-300 mt-3.5 font-mono cursor-pointer transition-colors duration-150 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-ping" />
              <span className="group-hover:underline underline-offset-4">
                {t("or_drag_drop", "Supports JPEG, PNG, WEBP, HEIC (Drag & drop anywhere)")}
              </span>
            </div>
          </div>
        )}

        {/* Ambient Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      </div>

      {/* Curated Sample Landmarks Preset Deck */}
      <div id="sample-landmarks-deck" className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">
              {t("sample_landmarks", "Or Try Iconic City Presets")}
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">Instant 1-Click AI Inspection</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SAMPLE_LANDMARKS.map((sample, idx) => {
            const isCurrentlyLoading = sampleLoadingId === sample.id;
            return (
              <motion.button
                key={sample.id}
                type="button"
                id={`sample-landmark-${sample.id}`}
                onClick={() => handleSelectSample(sample)}
                disabled={isLoading || isCurrentlyLoading}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col text-left rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/60 overflow-hidden transition-colors duration-150 shadow-md hover:shadow-xl hover:shadow-cyan-950/40 disabled:opacity-60 cursor-pointer"
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
                        target.src = sample.imageUrl || "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=300&q=75";
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute top-1.5 left-1.5 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                    {sample.city}
                  </span>
                  <span className="absolute top-1.5 right-1.5 text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-pink-950/80 text-pink-300 border border-pink-500/40 backdrop-blur-sm shadow-sm flex items-center gap-1">
                    <span>{idx % 3 === 0 ? "✨" : idx % 3 === 1 ? "🏛️" : "📸"}</span>
                    <span>{sample.badge.split(" ")[0]}</span>
                  </span>
                </div>

                <div className="p-2.5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {sample.name}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="truncate">{sample.country}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] font-mono text-cyan-400/90 flex items-center space-x-1">
                    {isCurrentlyLoading ? (
                      <span className="text-amber-400 animate-pulse">Loading photo...</span>
                    ) : (
                      <>
                        <Sparkles className="w-2.5 h-2.5 text-cyan-400 group-hover:rotate-12 transition-transform duration-150" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-150">Run AR Scan</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
