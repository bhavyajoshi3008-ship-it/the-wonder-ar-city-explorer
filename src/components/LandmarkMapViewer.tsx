import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Compass,
  Navigation,
  ExternalLink,
  Layers,
  Eye,
  Maximize2,
  Crosshair,
  Route,
  Globe,
  Info
} from "lucide-react";
import L from "leaflet";
import { LandmarkRecognition } from "../types";

interface LandmarkMapViewerProps {
  recognition: LandmarkRecognition;
  className?: string;
  onClose?: () => void;
}

interface NearbySpot {
  id: string;
  name: string;
  category: "viewpoint" | "metro" | "square" | "historic" | "photo";
  lat: number;
  lng: number;
  description: string;
  distanceMeters: number;
}

export const LandmarkMapViewer: React.FC<LandmarkMapViewerProps> = ({
  recognition,
  className = "",
  onClose,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  // Map display modes: "google_embed" | "interactive_leaflet" | "radar"
  const [mapMode, setMapMode] = useState<"google_embed" | "interactive_leaflet">("interactive_leaflet");
  const [tileLayerType, setTileLayerType] = useState<"dark" | "streets" | "satellite">("dark");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [userDistance, setUserDistance] = useState<number | null>(null);
  const [locatingUser, setLocatingUser] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<NearbySpot | null>(null);

  const coords = recognition.coordinatesEstimate || { lat: 48.8584, lng: 2.2945 };
  const landmarkName = recognition.name;
  const cityName = recognition.city;

  // Generate contextual nearby spots around coordinates
  const nearbySpots: NearbySpot[] = [
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
      name: `${cityName} Heritage Walk Plaza`,
      category: "square",
      lat: coords.lat - 0.0019,
      lng: coords.lng + 0.002,
      description: "Historic cobblestone promenade with informational historic markers and artisan cafes.",
      distanceMeters: 290,
    },
    {
      id: "spot-3",
      name: "Architectural Audio Observation Point",
      category: "viewpoint",
      lat: coords.lat + 0.0025,
      lng: coords.lng - 0.0018,
      description: "Quiet elevated vantage point recommended for listening to narrated architectural tours.",
      distanceMeters: 380,
    },
    {
      id: "spot-4",
      name: `${cityName} Transit & Tour Hub`,
      category: "metro",
      lat: coords.lat - 0.003,
      lng: coords.lng - 0.0022,
      description: "Direct metro and heritage tram connectivity serving the historical monument precinct.",
      distanceMeters: 450,
    },
  ];

  // Haversine formula for distance in meters
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3; // metres
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

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser.");
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

        // If map is initialized, pan to encompass both
        if (leafletMapRef.current) {
          const bounds = L.latLngBounds(
            [userCoords.lat, userCoords.lng],
            [coords.lat, coords.lng]
          );
          leafletMapRef.current.fitBounds(bounds, { padding: [50, 50] });

          // Add user pin
          const userIcon = L.divIcon({
            className: "custom-user-marker",
            html: `
              <div class="relative flex items-center justify-center">
                <div class="absolute w-7 h-7 rounded-full bg-cyan-500/30 animate-ping"></div>
                <div class="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-lg"></div>
              </div>
            `,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
          });
          L.marker([userCoords.lat, userCoords.lng], { icon: userIcon })
            .addTo(leafletMapRef.current)
            .bindPopup("<b>Your Current Position</b>");
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

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (mapMode !== "interactive_leaflet") return;
    if (!mapContainerRef.current) return;

    // Clean up old map instance
    if (leafletMapRef.current) {
      leafletMapRef.current.remove();
      leafletMapRef.current = null;
    }

    try {
      const map = L.map(mapContainerRef.current, {
        center: [coords.lat, coords.lng],
        zoom: 16,
        zoomControl: false,
      });

      L.control.zoom({ position: "topright" }).addTo(map);

      // Tile layers
      let tileUrl = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
      let attribution = '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

      if (tileLayerType === "dark") {
        tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
      } else if (tileLayerType === "satellite") {
        tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
        attribution = "&copy; Esri, Maxar, Earthstar Geographics";
      }

      L.tileLayer(tileUrl, {
        attribution,
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      // Landmark Custom Neon Marker Pin
      const landmarkIcon = L.divIcon({
        className: "custom-landmark-marker",
        html: `
          <div class="relative flex flex-col items-center group cursor-pointer">
            <div class="absolute -top-1 w-10 h-10 rounded-full bg-cyan-500/30 animate-pulse"></div>
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-white shadow-xl shadow-cyan-950 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="w-2 h-2 rounded-full bg-cyan-300 mt-1 shadow-md"></div>
          </div>
        `,
        iconSize: [40, 48],
        iconAnchor: [20, 48],
      });

      const landmarkMarker = L.marker([coords.lat, coords.lng], { icon: landmarkIcon })
        .addTo(map)
        .bindPopup(
          `
          <div style="font-family: sans-serif; min-width: 180px; padding: 4px;">
            <div style="font-weight: 700; font-size: 14px; color: #0f172a; margin-bottom: 4px;">${landmarkName}</div>
            <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">${cityName}, ${recognition.country}</div>
            <div style="font-size: 11px; color: #0284c7; font-weight: 600;">${recognition.architecturalStyle}</div>
          </div>
        `,
          { closeButton: false }
        );

      landmarkMarker.openPopup();

      // Add radar circle around landmark
      L.circle([coords.lat, coords.lng], {
        color: "#06b6d4",
        fillColor: "#0891b2",
        fillOpacity: 0.12,
        radius: 300,
        weight: 1.5,
        dashArray: "4, 6",
      }).addTo(map);

      // Add Nearby POI pins
      nearbySpots.forEach((spot) => {
        const poiIcon = L.divIcon({
          className: "custom-poi-marker",
          html: `
            <div class="w-6 h-6 rounded-lg bg-slate-900/90 border border-cyan-400/70 text-cyan-300 flex items-center justify-center shadow-md hover:scale-125 transition-transform cursor-pointer">
              <span style="font-size: 10px; font-weight: bold;">POI</span>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        const m = L.marker([spot.lat, spot.lng], { icon: poiIcon }).addTo(map);
        m.on("click", () => {
          setSelectedSpot(spot);
        });
        m.bindPopup(`<b>${spot.name}</b><br/><span style="font-size: 11px;">${spot.description}</span>`);
      });

      leafletMapRef.current = map;
    } catch (err) {
      console.warn("Leaflet map initialization warning:", err);
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [mapMode, tileLayerType, coords.lat, coords.lng, landmarkName, cityName]);

  // Direct links to Google Maps ecosystem
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${landmarkName} ${cityName} ${recognition.country}`)}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;
  const googleStreetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${coords.lat},${coords.lng}`;
  const googleEarthUrl = `https://earth.google.com/web/search/${encodeURIComponent(`${landmarkName} ${cityName}`)}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=16&output=embed`;

  return (
    <div
      id="landmark-map-viewer"
      className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${className}`}
    >
      {/* Header Bar */}
      <div className="p-4 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {landmarkName} Map Explorer
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                {coords.lat.toFixed(4)}°N, {coords.lng.toFixed(4)}°E
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Integrated with Google Maps navigation, Street View 360°, and interactive GIS radar
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            id="btn-interactive-map-mode"
            onClick={() => setMapMode("interactive_leaflet")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              mapMode === "interactive_leaflet"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Radar</span>
          </button>
          <button
            id="btn-google-embed-mode"
            onClick={() => setMapMode("google_embed")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              mapMode === "google_embed"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Google Maps Live</span>
          </button>
        </div>
      </div>

      {/* Main Map View Area */}
      <div className="relative w-full h-[380px] sm:h-[420px] bg-slate-950 flex flex-col">
        {mapMode === "interactive_leaflet" ? (
          <>
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Tile Layer Controls (Floating overlay) */}
            <div className="absolute top-3 left-3 z-[400] flex items-center space-x-1 bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 shadow-lg">
              <Layers className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              <button
                onClick={() => setTileLayerType("dark")}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition ${
                  tileLayerType === "dark" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => setTileLayerType("streets")}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition ${
                  tileLayerType === "streets" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Streets
              </button>
              <button
                onClick={() => setTileLayerType("satellite")}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition ${
                  tileLayerType === "satellite" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Satellite
              </button>
            </div>

            {/* Locate Me Button (Floating overlay) */}
            <div className="absolute bottom-4 right-4 z-[400] flex flex-col items-end space-y-2">
              <button
                id="btn-locate-user"
                onClick={handleLocateMe}
                disabled={locatingUser}
                className="px-3 py-2 bg-slate-900/95 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 rounded-xl text-xs font-semibold shadow-xl flex items-center space-x-2 transition backdrop-blur-md"
              >
                <Crosshair className={`w-4 h-4 ${locatingUser ? "animate-spin text-amber-400" : ""}`} />
                <span>{locatingUser ? "Locating..." : "Calculate Walking Distance"}</span>
              </button>
            </div>

            {/* Telemetry / Distance Badge */}
            {userDistance !== null && (
              <div className="absolute top-3 right-14 z-[400] bg-cyan-950/90 border border-cyan-500/40 text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-mono shadow-xl backdrop-blur-md flex items-center space-x-2">
                <Route className="w-3.5 h-3.5 text-cyan-400" />
                <span>
                  {userDistance > 1000
                    ? `${(userDistance / 1000).toFixed(1)} km away`
                    : `${userDistance} meters away`}
                </span>
                <span className="text-[10px] text-slate-400 font-sans">
                  (~{Math.max(1, Math.round(userDistance / 80))} min walk)
                </span>
              </div>
            )}
          </>
        ) : (
          /* Google Maps Embed Mode */
          <div className="w-full h-full relative">
            <iframe
              id="google-maps-embed-frame"
              title={`${landmarkName} Google Maps`}
              src={googleMapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick badge indicating Google Maps view */}
            <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs text-slate-200 shadow-lg flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-medium">Live Google Maps View</span>
            </div>
          </div>
        )}
      </div>

      {/* Geolocation feedback message if error */}
      {geoError && (
        <div className="px-4 py-2 bg-amber-950/40 border-t border-amber-500/30 text-xs text-amber-300 flex items-center space-x-2">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>{geoError}</span>
        </div>
      )}

      {/* Selected POI Details Bar */}
      {selectedSpot && (
        <div className="p-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-xs">
              POI
            </div>
            <div>
              <div className="text-xs font-bold text-white">{selectedSpot.name}</div>
              <div className="text-[11px] text-slate-400">{selectedSpot.description}</div>
            </div>
          </div>
          <button
            onClick={() => setSelectedSpot(null)}
            className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Bottom Google Maps Action Bar */}
      <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Google Maps Actions:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* 1. Open in Google Maps */}
          <a
            id="link-google-maps-search"
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center space-x-1.5 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
          </a>

          {/* 2. Turn-by-Turn Directions */}
          <a
            id="link-google-maps-directions"
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold rounded-xl text-xs transition flex items-center space-x-1.5 shadow-md shadow-cyan-950"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Turn-by-Turn Directions</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>

          {/* 3. 360° Street View */}
          <a
            id="link-google-street-view"
            href={googleStreetViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center space-x-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>360° Street View</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
          </a>

          {/* 4. Google Earth 3D */}
          <a
            id="link-google-earth"
            href={googleEarthUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium border border-slate-700 transition flex items-center space-x-1.5 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Earth 3D</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
