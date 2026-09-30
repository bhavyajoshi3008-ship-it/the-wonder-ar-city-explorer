import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Eye,
  Crosshair,
  Route,
  Globe,
  Camera,
  Compass,
  Building,
  Train,
  Layers,
  Map as MapIcon
} from "lucide-react";
import { LandmarkRecognition } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface LandmarkMapViewerProps {
  recognition: LandmarkRecognition;
  photoUrl?: string | null;
  className?: string;
  onClose?: () => void;
}

interface NearbySpot {
  id: string;
  name: string;
  category: "photo" | "square" | "viewpoint" | "metro";
  lat: number;
  lng: number;
  description: string;
  distanceMeters: number;
}

export const LandmarkMapViewer: React.FC<LandmarkMapViewerProps> = ({
  recognition,
  photoUrl,
  className = "",
  onClose,
}) => {
  const { t } = useLanguage();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [userDistance, setUserDistance] = useState<number | null>(null);
  const [locatingUser, setLocatingUser] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<NearbySpot | null>(null);

  const landmarkName = recognition.name;
  const cityName = recognition.city;
  const coords = recognition.coordinatesEstimate || { lat: 0, lng: 0 };

  const isDefaultParis =
    Math.abs(coords.lat - 48.8584) < 0.005 &&
    Math.abs(coords.lng - 2.2945) < 0.005 &&
    !cityName?.toLowerCase().includes("paris") &&
    !landmarkName?.toLowerCase().includes("eiffel");

  const hasValidCoords =
    coords &&
    (Math.abs(coords.lat) > 0.001 || Math.abs(coords.lng) > 0.001) &&
    !isDefaultParis;

  // Prefer interactive OpenStreetMap / Leaflet when valid GPS coordinates are available to avoid iframe ad-block / x-frame issues
  const [mapMode, setMapMode] = useState<"interactive" | "google">(() => (hasValidCoords ? "interactive" : "google"));
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  const leafletContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const effectiveQuery = [landmarkName, cityName, recognition.country].filter(Boolean).join(", ");
  const mapQueryParam = hasValidCoords
    ? `${coords.lat},${coords.lng}`
    : encodeURIComponent(effectiveQuery || "World Landmark");

  const destParam = hasValidCoords
    ? `${coords.lat},${coords.lng}`
    : encodeURIComponent(effectiveQuery || landmarkName);

  // Contextual nearby viewpoints and POIs around coordinates
  const nearbySpots: NearbySpot[] = hasValidCoords
    ? [
        {
          id: "spot-1",
          name: `${landmarkName} - Prime Photo Vista`,
          category: "photo",
          lat: coords.lat + 0.0018,
          lng: coords.lng + 0.0015,
          description: "Optimal wide-angle viewpoint capturing the entire architectural facade with reflection pools.",
          distanceMeters: 240,
        },
        {
          id: "spot-2",
          name: `${cityName || "City"} Heritage Walk Plaza`,
          category: "square",
          lat: coords.lat - 0.0019,
          lng: coords.lng + 0.002,
          description: "Historic promenade with informational markers and pedestrian access.",
          distanceMeters: 290,
        },
        {
          id: "spot-3",
          name: "Panoramic Observation Vantage",
          category: "viewpoint",
          lat: coords.lat + 0.0025,
          lng: coords.lng - 0.0018,
          description: "Elevated vantage point recommended for taking in the full skyline view.",
          distanceMeters: 380,
        },
        {
          id: "spot-4",
          name: `${cityName || "City"} Transit Hub`,
          category: "metro",
          lat: coords.lat - 0.003,
          lng: coords.lng - 0.0022,
          description: "Direct transit connectivity serving the historical monument precinct.",
          distanceMeters: 450,
        },
      ]
    : [];

  // Haversine formula for distance in meters
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c);
  };

  // Initialize and update Leaflet Interactive Map
  useEffect(() => {
    if (mapMode !== "interactive" || !hasValidCoords || !leafletContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(leafletContainerRef.current, {
        center: [coords.lat, coords.lng],
        zoom: 16,
        zoomControl: false,
      });

      // Add zoom control at bottom right to avoid overlay header conflicts
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // CartoDB Voyager tiles (clean, high-resolution, global coverage)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      // Custom high-contrast Landmark Pin Icon with glowing cyan beacon
      const landmarkIcon = L.divIcon({
        className: "custom-leaflet-landmark",
        html: `<div style="background: linear-gradient(135deg, #06b6d4, #0284c7); width: 36px; height: 36px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 16px rgba(6,182,212,0.9), 0 4px 8px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer;">🏛️</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18],
      });

      const marker = L.marker([coords.lat, coords.lng], { icon: landmarkIcon }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: inherit; padding: 4px; min-width: 160px; color: #0f172a;">
          <h4 style="font-weight: 700; margin: 0 0 4px 0; font-size: 13px; color: #0f172a;">${landmarkName}</h4>
          <p style="margin: 0; color: #475569; font-size: 11px;">${cityName || ""} ${recognition.country || ""}</p>
          <div style="margin-top: 6px; font-size: 10px; font-family: monospace; color: #0284c7;">
            ${coords.lat.toFixed(4)}°, ${coords.lng.toFixed(4)}°
          </div>
        </div>
      `).openPopup();

      // Add nearby viewpoints markers
      nearbySpots.forEach((spot) => {
        const spotIcon = L.divIcon({
          className: "custom-leaflet-spot",
          html: `<div style="background: #0f172a; width: 28px; height: 28px; border-radius: 50%; border: 2px solid #38bdf8; box-shadow: 0 2px 8px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; font-size: 13px; cursor: pointer;">${
            spot.category === "photo" ? "📸" : spot.category === "viewpoint" ? "👁️" : spot.category === "metro" ? "🚆" : "🏛️"
          }</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14],
        });

        const spotMarker = L.marker([spot.lat, spot.lng], { icon: spotIcon }).addTo(map);
        spotMarker.bindPopup(`
          <div style="font-family: inherit; padding: 4px; max-width: 200px; color: #0f172a;">
            <h5 style="font-weight: 700; margin: 0 0 3px 0; font-size: 12px; color: #0f172a;">${spot.name}</h5>
            <p style="margin: 0 0 4px 0; color: #475569; font-size: 11px; line-height: 1.4;">${spot.description}</p>
            <span style="font-size: 10px; color: #0284c7; font-weight: 600;">~${spot.distanceMeters}m from center</span>
          </div>
        `);
      });

      mapInstanceRef.current = map;
    } else {
      mapInstanceRef.current.setView([coords.lat, coords.lng], 16);
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
      }, 100);
    }
  }, [mapMode, coords.lat, coords.lng, hasValidCoords, landmarkName]);

  // Clean up map instance on component unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.");
      return;
    }
    if (!hasValidCoords) {
      setGeoError("Exact GPS pin is being resolved for this city. Use 'Open in Maps' or 'Directions' for live routing.");
      return;
    }
    setLocatingUser(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(userCoords);
        const dist = calculateDistance(
          userCoords.lat,
          userCoords.lng,
          coords.lat,
          coords.lng
        );
        setUserDistance(dist);
        setLocatingUser(false);

        // Add user marker on interactive map if visible
        if (mapInstanceRef.current) {
          if (userMarkerRef.current) {
            userMarkerRef.current.remove();
          }
          const userIcon = L.divIcon({
            className: "custom-user-marker",
            html: `<div style="background: #3b82f6; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 14px rgba(59,130,246,0.9); display: flex; align-items: center; justify-content: center;"><div style="width: 6px; height: 6px; background: white; border-radius: 50%;"></div></div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11],
          });
          const userMarker = L.marker([userCoords.lat, userCoords.lng], { icon: userIcon }).addTo(mapInstanceRef.current);
          userMarker.bindPopup("<b>Your Current Location</b>").openPopup();
          userMarkerRef.current = userMarker;

          mapInstanceRef.current.fitBounds(
            [
              [userCoords.lat, userCoords.lng],
              [coords.lat, coords.lng],
            ],
            { padding: [50, 50], maxZoom: 17 }
          );
        }
      },
      (err) => {
        console.warn("Geolocation request error:", err);
        setGeoError("Could not retrieve your location. Location permission may be disabled.");
        setLocatingUser(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const handleSpotClick = (spot: NearbySpot) => {
    setSelectedSpot(selectedSpot?.id === spot.id ? null : spot);
    if (mapMode === "interactive" && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([spot.lat, spot.lng], 17, { duration: 1.2 });
    }
  };

  // Direct links to Google Maps ecosystem
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${landmarkName} ${cityName || ""} ${recognition.country || ""}`)}`;
  const googleMapsDirectionsUrl = userLocation
    ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destParam}`
    : `https://www.google.com/maps/dir/?api=1&destination=${destParam}`;
  const googleStreetViewUrl = hasValidCoords
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${coords.lat},${coords.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${landmarkName} ${cityName || ""} 360`)}`;
  const googleEarthUrl = `https://earth.google.com/web/search/${encodeURIComponent(`${landmarkName} ${cityName || ""}`)}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${mapQueryParam}&z=16&output=embed`;

  return (
    <div
      id="landmark-map-viewer"
      className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${className}`}
    >
      {/* Header Bar */}
      <div className="p-3 sm:p-4 bg-slate-950/80 border-b border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          {photoUrl ? (
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40 shrink-0 bg-slate-950 shadow-md">
              <img
                src={photoUrl}
                alt={landmarkName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
          )}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {landmarkName} {t("map_explorer_title", "Map Explorer")}
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                {hasValidCoords
                  ? `${Math.abs(coords.lat).toFixed(4)}°${coords.lat >= 0 ? "N" : "S"}, ${Math.abs(coords.lng).toFixed(4)}°${coords.lng >= 0 ? "E" : "W"}`
                  : [cityName, recognition.country].filter(Boolean).join(", ") || "City Center"}
              </span>
            </div>
            <p className="text-xs text-slate-400 truncate sm:whitespace-normal">
              {t("map_explorer_sub", "Interactive street map navigation, Street View 360°, and satellite views")}
            </p>
          </div>
        </div>

        {/* Action Controls: Mode Switcher, Distance & Maps Link */}
        <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-1">
          {/* View Mode Toggle: Interactive Street Map vs Google Maps */}
          {hasValidCoords && (
            <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-xl">
              <button
                type="button"
                id="btn-mode-interactive-map"
                onClick={() => setMapMode("interactive")}
                className={`py-1 px-2.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition cursor-pointer ${
                  mapMode === "interactive"
                    ? "bg-cyan-600 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t("interactive_map", "Street Map")}</span>
              </button>
              <button
                type="button"
                id="btn-mode-google-map"
                onClick={() => setMapMode("google")}
                className={`py-1 px-2.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition cursor-pointer ${
                  mapMode === "google"
                    ? "bg-cyan-600 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>{t("google_embed", "Google Embed")}</span>
              </button>
            </div>
          )}

          <button
            id="btn-calculate-walking-distance"
            onClick={handleLocateMe}
            disabled={locatingUser}
            className="py-1.5 px-3 bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer"
          >
            <Crosshair className={`w-3.5 h-3.5 ${locatingUser ? "animate-spin text-amber-400" : "text-cyan-400"}`} />
            <span>{locatingUser ? t("locating", "Locating...") : userDistance !== null ? `${userDistance > 1000 ? (userDistance / 1000).toFixed(1) + "km" : userDistance + "m"}` : t("calculate_distance", "Calculate Distance")}</span>
          </button>

          <a
            id="btn-open-google-maps-header"
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold rounded-xl text-xs flex items-center space-x-1.5 transition shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>{t("open_in_maps", "Open in Maps")}</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Main Map Viewport */}
      <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-950 flex flex-col overflow-hidden">
        {mapMode === "interactive" && hasValidCoords ? (
          /* Interactive Leaflet OpenStreetMap View */
          <div
            id="leaflet-interactive-map-container"
            ref={leafletContainerRef}
            className="w-full h-full z-0"
            style={{ minHeight: "100%" }}
          />
        ) : (
          /* Google Maps Embed View */
          <>
            <iframe
              id="google-maps-embed-frame"
              title={`${landmarkName} Google Maps`}
              src={googleMapsEmbedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mb-3" />
                <p className="text-xs text-slate-300 font-medium">Loading Google Maps view...</p>
                {hasValidCoords && (
                  <button
                    onClick={() => setMapMode("interactive")}
                    className="mt-3 text-xs text-cyan-400 hover:underline font-semibold cursor-pointer"
                  >
                    Switch to Interactive Street Map
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Overlay Telemetry Badge */}
        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs text-slate-200 shadow-lg flex items-center space-x-2 pointer-events-none z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold text-white">
            {mapMode === "interactive" ? "Interactive Street Map" : t("google_maps_live_view", "Google Maps Live View")}
          </span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">({cityName || ""}, {recognition.country || ""})</span>
        </div>

        {/* Distance Badge if located */}
        {userDistance !== null && (
          <div className="absolute top-3 right-3 bg-cyan-950/90 border border-cyan-500/40 text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-mono shadow-xl backdrop-blur-md flex items-center space-x-2 z-10">
            <Route className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>
              {userDistance > 1000
                ? `${(userDistance / 1000).toFixed(1)} km away`
                : `${userDistance} meters away`}
            </span>
            <span className="text-[10px] text-slate-300 font-sans hidden sm:inline">
              (~{Math.max(1, Math.round(userDistance / 80))} min walk)
            </span>
          </div>
        )}
      </div>

      {/* Geolocation feedback message if error */}
      {geoError && (
        <div className="px-4 py-2 bg-amber-950/40 border-t border-amber-500/30 text-xs text-amber-300 flex items-center space-x-2">
          <span>{geoError}</span>
        </div>
      )}

      {/* Nearby Architectural Viewpoints & Photo Spots */}
      {nearbySpots.length > 0 ? (
        <div className="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t("recommended_viewpoints", "Recommended Viewing Points & Nearby Hubs")}</span>
            </div>
            <span className="text-[11px] text-slate-400">{t("click_to_view_location", "Click to view location on map")}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {nearbySpots.map((spot) => {
              const isSelected = selectedSpot?.id === spot.id;
              const spotMapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;
              return (
                <div
                  key={spot.id}
                  onClick={() => handleSpotClick(spot)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-cyan-950/60 border-cyan-400/80 text-white shadow-md shadow-cyan-950"
                      : "bg-slate-900/80 hover:bg-slate-850 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className="flex items-center space-x-1.5 truncate">
                        {spot.category === "photo" && <Camera className="w-3 h-3 text-cyan-400 shrink-0" />}
                        {spot.category === "square" && <Building className="w-3 h-3 text-blue-400 shrink-0" />}
                        {spot.category === "viewpoint" && <Eye className="w-3 h-3 text-emerald-400 shrink-0" />}
                        {spot.category === "metro" && <Train className="w-3 h-3 text-amber-400 shrink-0" />}
                        <span className="truncate">{spot.name}</span>
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/90 shrink-0 ml-1">
                        ~{spot.distanceMeters}m
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {spot.lat.toFixed(4)}°, {spot.lng.toFixed(4)}°
                    </span>
                    <a
                      href={spotMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-0.5"
                    >
                      <span>{t("view_in_maps", "View")}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-4">
          <div className="flex items-center space-x-2">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Map & Turn-by-Turn Navigation for {landmarkName} in {cityName || "City"}</span>
          </div>
          <span className="text-slate-500 font-mono text-[11px]">Regional Geo-Mapping</span>
        </div>
      )}

      {/* Bottom Google Maps Action Bar */}
      <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {t("google_maps_actions", "External Navigation:")}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2">
          {/* 1. Open in Google Maps */}
          <a
            id="link-google-maps-search"
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-9 px-3.5 sm:px-3 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center justify-center space-x-1.5 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{t("open_in_google_maps", "Open in Google Maps")}</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5 shrink-0" />
          </a>

          {/* 2. Turn-by-Turn Directions */}
          <a
            id="link-google-maps-directions"
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-9 px-3.5 sm:px-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold rounded-xl text-xs transition flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-950"
          >
            <Navigation className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{t("turn_by_turn_directions", "Turn-by-Turn Directions")}</span>
            <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
          </a>

          {/* 3. 360° Street View */}
          <a
            id="link-google-street-view"
            href={googleStreetViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-9 px-3.5 sm:px-3 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center justify-center space-x-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">{t("street_view_360", "360° Street View")}</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5 shrink-0" />
          </a>

          {/* 4. Google Earth 3D */}
          <a
            id="link-google-earth"
            href={googleEarthUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-9 px-3.5 sm:px-3 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center justify-center space-x-1.5 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{t("google_earth_3d", "Google Earth 3D")}</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
