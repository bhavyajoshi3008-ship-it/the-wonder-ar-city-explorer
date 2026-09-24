import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  MapPin,
  Sparkles,
  ExternalLink,
  Search,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Camera,
  Layers,
  ArrowRight,
  Maximize2,
  X,
  RotateCcw,
  Sliders,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  Info,
  Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LandmarkRecognition, LocationGuessInfo, LocationReferencePhoto } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { translateUIBatch } from "../services/api";

interface LocationGuessComparePanelProps {
  userPhotoUrl: string;
  recognition: LandmarkRecognition;
  onConfirmAndTour?: () => void;
  onRescan?: () => void;
}

export const LocationGuessComparePanel: React.FC<LocationGuessComparePanelProps> = ({
  userPhotoUrl,
  recognition,
  onConfirmAndTour,
  onRescan,
}) => {
  const { currentLanguage, t } = useLanguage();
  const guess: LocationGuessInfo | undefined = recognition.locationGuess;
  const referencePhotos: LocationReferencePhoto[] = guess?.referencePhotos || recognition.referencePhotos || [];
  
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [comparisonMode, setComparisonMode] = useState<"side_by_side" | "slider">("side_by_side");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string>(userPhotoUrl);
  const [zoomedImageTitle, setZoomedImageTitle] = useState<string>("Your Photo");

  const activeRefPhoto = referencePhotos[selectedPhotoIndex] || null;

  const confidenceScore = guess?.confidenceScore || recognition.confidence || 85;
  const isHighConfidence = confidenceScore >= 80;
  const isMediumConfidence = confidenceScore >= 55 && confidenceScore < 80;

  const [translatedClues, setTranslatedClues] = useState<Record<string, string>>({});
  const cluesCacheRef = useRef<Record<string, Record<string, string>>>({});

  const estimatedTitle = translatedClues["estimatedSite"] || guess?.estimatedSite || recognition.name || "Identified Location";
  const estimatedArea = [guess?.estimatedCity || recognition.city, guess?.estimatedRegion, guess?.estimatedCountry || recognition.country]
    .filter(Boolean)
    .join(", ");

  const googleImagesUrl = guess?.googleImagesUrl || recognition.googleImagesUrl || `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(estimatedTitle + " " + (guess?.estimatedCity || recognition.city || ""))}`;
  const googleLensUrl = guess?.googleLensSearchUrl || recognition.googleLensSearchUrl || (userPhotoUrl && userPhotoUrl.startsWith("http") ? `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(userPhotoUrl)}` : "https://lens.google.com/");
  const googleMapsUrl = guess?.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estimatedTitle + " " + estimatedArea)}`;

  const clues = guess?.clues || [];

  useEffect(() => {
    if (currentLanguage.code === "en") {
      setTranslatedClues({});
      return;
    }
    const cacheKey = `${currentLanguage.code}:${guess?.estimatedSite || recognition.name || "location"}`;
    if (cluesCacheRef.current[cacheKey]) {
      setTranslatedClues(cluesCacheRef.current[cacheKey]);
      return;
    }

    const batchKeys: Record<string, string> = {};
    if (guess?.estimatedSite) {
      batchKeys["estimatedSite"] = guess.estimatedSite;
    }
    clues.forEach((c, idx) => {
      if (c.observation) batchKeys[`clue_${idx}_obs`] = c.observation;
      if (c.inferredLocation) batchKeys[`clue_${idx}_loc`] = c.inferredLocation;
    });

    if (Object.keys(batchKeys).length === 0) return;

    let isMounted = true;
    translateUIBatch(batchKeys, currentLanguage.code, currentLanguage.name)
      .then((res) => {
        if (isMounted && res && Object.keys(res).length > 0) {
          cluesCacheRef.current[cacheKey] = res;
          setTranslatedClues(res);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, [currentLanguage.code, currentLanguage.name, guess?.estimatedSite, recognition.name, clues]);

  const openZoomModal = (imgUrl: string, title: string) => {
    setZoomedImageUrl(imgUrl);
    setZoomedImageTitle(title);
    setIsZoomModalOpen(true);
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Top AI Detective Result Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/80 rounded-2xl border border-cyan-500/40 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5 min-w-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>{t("ai_geoguess_title", "AI Geo-Detective & Google Visual Match")}</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight flex items-center flex-wrap gap-2">
              <span>{estimatedTitle}</span>
              {guess?.isGuessMode && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Visual Deduction
                </span>
              )}
            </h2>

            <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{estimatedArea || "Global Heritage Coordinates"}</span>
              {recognition.coordinatesEstimate && (
                <span className="text-[11px] font-mono text-cyan-400/80 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800 hidden sm:inline">
                  {recognition.coordinatesEstimate.lat.toFixed(4)}°, {recognition.coordinatesEstimate.lng.toFixed(4)}°
                </span>
              )}
            </div>
          </div>

          {/* Confidence Badge & Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center space-x-2 bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800">
              <div
                className={`w-3 h-3 rounded-full ${
                  isHighConfidence ? "bg-emerald-400 animate-pulse" : isMediumConfidence ? "bg-amber-400" : "bg-cyan-400"
                }`}
              />
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {t("match_confidence", "Match Confidence")}
                </div>
                <div className="text-sm font-bold text-white flex items-center space-x-1">
                  <span>{confidenceScore}%</span>
                  <span className="text-[11px] font-normal text-slate-400">
                    ({isHighConfidence ? "High" : isMediumConfidence ? "Probable" : "Tentative"})
                  </span>
                </div>
              </div>
            </div>

            {onConfirmAndTour && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onConfirmAndTour}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-lg shadow-cyan-900/30 flex items-center space-x-2 border border-cyan-400/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>{t("confirm_and_start_tour", "Confirm & Tour in AR")}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Visual Comparison Section */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {t("photo_comparison_headline", "Visual Photo Verification: Your Capture vs. Photos on Google")}
              </h3>
            </div>

            {/* Comparison Mode Selector */}
            <div className="flex items-center space-x-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setComparisonMode("side_by_side")}
                className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                  comparisonMode === "side_by_side"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("side_by_side", "Side-by-Side")}
              </button>
              <button
                type="button"
                onClick={() => setComparisonMode("slider")}
                className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                  comparisonMode === "slider"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t("slider_compare", "Slider Compare")}
              </button>
            </div>
          </div>

          {/* 1. Side by side view */}
          {comparisonMode === "side_by_side" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* User Photo */}
              <div className="bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden flex flex-col group relative">
                <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-white">
                      {t("user_uploaded_photo", "Your Uploaded Photo")}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openZoomModal(userPhotoUrl, "Your Photo")}
                    className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Zoom in"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={userPhotoUrl}
                    alt="User capture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-slate-200">
                    {t("input_capture", "Input Capture")}
                  </div>
                </div>

                {recognition.photoAnalysis?.perspectiveAndAngle && (
                  <div className="p-2.5 text-[11px] text-slate-300 bg-slate-900/50 border-t border-slate-800/80">
                    <span className="text-slate-400">{t("perspective_label", "Perspective")}: </span>
                    {recognition.photoAnalysis.perspectiveAndAngle}
                  </div>
                )}
              </div>

              {/* Reference Photo on Google / Wikimedia */}
              <div className="bg-slate-950/80 rounded-2xl border border-cyan-500/30 overflow-hidden flex flex-col group relative">
                <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-300 flex items-center space-x-1">
                      <span>{t("verified_google_photos", "Verified Photo on Google / Wikimedia")}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </div>

                  {activeRefPhoto && (
                    <button
                      type="button"
                      onClick={() => openZoomModal(activeRefPhoto.imageUrl, activeRefPhoto.title)}
                      className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
                      title="Zoom in"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="relative aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
                  {activeRefPhoto ? (
                    <>
                      <img
                        src={activeRefPhoto.imageUrl}
                        alt={activeRefPhoto.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        crossOrigin="anonymous"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <div className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-slate-200 truncate max-w-[70%]">
                          {activeRefPhoto.title}
                        </div>
                        {activeRefPhoto.sourceUrl && (
                          <a
                            href={activeRefPhoto.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-[10px] text-cyan-300 hover:text-white flex items-center space-x-1"
                          >
                            <span>View Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 space-y-2">
                      <ImageIcon className="w-8 h-8 text-slate-600" />
                      <p className="text-xs">
                        Querying verified photographs for {estimatedTitle}...
                      </p>
                      <a
                        href={googleImagesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Search directly on Google Images</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {activeRefPhoto && (
                  <div className="p-2.5 text-[11px] text-slate-300 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <span className="truncate text-slate-400">
                      Credit: {activeRefPhoto.author || "Wikimedia / Public Domain"}
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0">
                      {activeRefPhoto.license || "CC-BY"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* 2. Interactive Slider View */
            <div className="bg-slate-950/80 rounded-2xl border border-cyan-500/30 overflow-hidden relative">
              <div className="relative aspect-[16/9] w-full max-h-[460px] overflow-hidden select-none">
                {/* Background image (Verified Reference Photo) */}
                <img
                  src={activeRefPhoto ? activeRefPhoto.imageUrl : userPhotoUrl}
                  alt="Verified Reference"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground image (User Photo) clipped by slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={userPhotoUrl}
                    alt="User capture"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: "100%", maxWidth: "none" }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                    Your Photo ({sliderPosition}%)
                  </div>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/40 text-xs font-semibold text-emerald-300">
                  Google / Verified Photo ({100 - sliderPosition}%)
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_#22d3ee] cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

                {/* Slider input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Image comparison slider"
                />
              </div>

              <div className="p-3 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-400 text-center">
                {t("drag_slider_hint", "Drag the slider left and right to inspect alignment between your photo and the Google reference photograph")}
              </div>
            </div>
          )}

          {/* Reference Photos Carousel / Selector */}
          {referencePhotos.length > 1 && (
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>{t("verified_photos_google_wikimedia", "VERIFIED REFERENCE PHOTOS FOUND ON GOOGLE & WIKIMEDIA")} ({referencePhotos.length}):</span>
                <span>{t("select_photo_compare", "Select a photo to compare")}</span>
              </div>
              <div className="flex items-center space-x-2.5 overflow-x-auto pb-2 scrollbar-thin">
                {referencePhotos.map((photo, idx) => (
                  <button
                    key={photo.id || idx}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                      selectedPhotoIndex === idx
                        ? "border-cyan-400 shadow-lg shadow-cyan-900/40 scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={photo.thumbnailUrl || photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] text-white truncate text-center">
                      {photo.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Google Visual Search Deep-Links Suite */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <a
              href={googleImagesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition flex items-center justify-between text-xs text-slate-200 group"
            >
              <div className="flex items-center space-x-2.5">
                <Search className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">{t("google_images_title", "Google Images")}</div>
                  <div className="text-[10px] text-slate-400">{t("google_images_sub", "Search more photos of this site")}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
            </a>

            <a
              href={googleLensUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 transition flex items-center justify-between text-xs text-slate-200 group"
            >
              <div className="flex items-center space-x-2.5">
                <Camera className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">{t("google_lens_title", "Google Lens")}</div>
                  <div className="text-[10px] text-slate-400">{t("google_lens_sub", "Visual reverse search photo")}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-300" />
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition flex items-center justify-between text-xs text-slate-200 group"
            >
              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">{t("google_maps_title", "Google Maps & 360°")}</div>
                  <div className="text-[10px] text-slate-400">{t("google_maps_sub", "View coordinates & Street View")}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300" />
            </a>
          </div>
        </div>
      </div>

      {/* AI Visual Clues Deduction Breakdown (Forensic GeoGuesser Logic) */}
      {clues.length > 0 && (
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center space-x-2.5 border-b border-slate-800 pb-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {t("geoguess_clues_headline", "AI Visual Deduction Clues (Forensic Geo-Analysis)")}
              </h3>
              <p className="text-xs text-slate-400">
                {t("geoguess_clues_subtitle", "How AI analyzed architectural style, vegetation, road signage, and terrain to deduce this location")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {clues.map((clue, idx) => {
              const categoryIcons: Record<string, string> = {
                architecture: "🏛️",
                vegetation: "🌿",
                signage: "🚏",
                infrastructure: "🚗",
                terrain: "🏔️",
                climate: "☀️",
              };
              const icon = categoryIcons[clue.category] || "🔍";

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/30 transition space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 flex items-center space-x-1.5 capitalize">
                      <span>{icon}</span>
                      <span>{clue.category} Clue</span>
                    </span>
                    {clue.inferredLocation && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                        {t("points_to", "Points to")}: {translatedClues[`clue_${idx}_loc`] || clue.inferredLocation}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed" dir={currentLanguage.dir || "ltr"}>
                    {translatedClues[`clue_${idx}_obs`] || clue.observation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Alternative Candidate Locations (if confidence is moderate or close alternatives exist) */}
      {guess?.candidateLocations && guess.candidateLocations.length > 1 && (
        <div className="bg-slate-900/70 rounded-2xl border border-slate-800/80 p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <Info className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {t("other_candidate_locations", "Other Candidate Locations Evaluated by AI")}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {guess.candidateLocations.map((candidate: any, idx: number) => {
              const name = typeof candidate === "string" ? candidate : candidate?.name || "Candidate Location";
              const region = typeof candidate === "object" && candidate?.region ? candidate.region : "";
              const confidence = typeof candidate === "object" && candidate?.confidence ? `${candidate.confidence}%` : "";

              return (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5"
                >
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="font-medium text-slate-200">{name}</span>
                  {region && <span className="text-[11px] text-slate-400">({region})</span>}
                  {confidence && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      {confidence}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Floating Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 rounded-2xl border border-slate-800">
        {onRescan && (
          <button
            type="button"
            onClick={onRescan}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 transition flex items-center space-x-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t("guess_another_photo", "Guess Another Photo")}</span>
          </button>
        )}

        {onConfirmAndTour && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onConfirmAndTour}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md flex items-center space-x-2 cursor-pointer ml-auto"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>{t("explore_ar_tour_of", "Explore Full AR Tour of")} {estimatedTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Modal Zoom View */}
      <AnimatePresence>
        {isZoomModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate">{zoomedImageTitle}</span>
                <button
                  type="button"
                  onClick={() => setIsZoomModalOpen(false)}
                  className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-2 max-h-[80vh] flex items-center justify-center overflow-auto bg-black">
                <img
                  src={zoomedImageUrl}
                  alt={zoomedImageTitle}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
