import React, { useState } from "react";
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
  Train
} from "lucide-react";
import { LandmarkRecognition } from "../types";

interface LandmarkMapViewerProps {
  recognition: LandmarkRecognition;
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
  className = "",
  onClose,
}) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [userDistance, setUserDistance] = useState<number | null>(null);
  const [locatingUser, setLocatingUser] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<NearbySpot | null>(null);

  const coords = recognition.coordinatesEstimate || { lat: 48.8584, lng: 2.2945 };
  const landmarkName = recognition.name;
  const cityName = recognition.city;

  // Contextual nearby viewpoints and POIs around coordinates
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
      description: "Historic cobblestone promenade with informational markers and pedestrian access.",
      distanceMeters: 290,
    },
    {
      id: "spot-3",
      name: "Panoramic Audio Observation Point",
      category: "viewpoint",
      lat: coords.lat + 0.0025,
      lng: coords.lng - 0.0018,
      description: "Quiet elevated vantage point recommended for taking in the full skyline view.",
      distanceMeters: 380,
    },
    {
      id: "spot-4",
      name: `${cityName} Transit & Tour Hub`,
      category: "metro",
      lat: coords.lat - 0.003,
      lng: coords.lng - 0.0022,
      description: "Direct transit connectivity serving the historical monument precinct.",
      distanceMeters: 450,
    },
  ];

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
      },
      (err) => {
        console.warn("Geolocation request error:", err);
        setGeoError("Could not retrieve your location. Location permission may be disabled.");
        setLocatingUser(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Direct links to Google Maps ecosystem
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${landmarkName} ${cityName} ${recognition.country}`)}`;
  const googleMapsDirectionsUrl = userLocation
    ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${coords.lat},${coords.lng}`
    : `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;
  const googleStreetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${coords.lat},${coords.lng}`;
  const googleEarthUrl = `https://earth.google.com/web/search/${encodeURIComponent(`${landmarkName} ${cityName}`)}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=16&output=embed`;

  return (
    <div
      id="landmark-map-viewer"
      className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${className}`}
    >
      {/* Header Bar */}
      <div className="p-3 sm:p-4 bg-slate-950/80 border-b border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {landmarkName} Map Explorer
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                {coords.lat.toFixed(4)}°N, {coords.lng.toFixed(4)}°E
              </span>
            </div>
            <p className="text-xs text-slate-400 truncate sm:whitespace-normal">
              Interactive Google Maps navigation, Street View 360°, and satellite views
            </p>
          </div>
        </div>

        {/* Action button to open full Google Maps */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            id="btn-calculate-walking-distance"
            onClick={handleLocateMe}
            disabled={locatingUser}
            className="py-1.5 px-3 bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer"
          >
            <Crosshair className={`w-3.5 h-3.5 ${locatingUser ? "animate-spin text-amber-400" : "text-cyan-400"}`} />
            <span>{locatingUser ? "Locating..." : userDistance !== null ? `${userDistance > 1000 ? (userDistance / 1000).toFixed(1) + "km" : userDistance + "m"}` : "Calculate Distance"}</span>
          </button>

          <a
            id="btn-open-google-maps-header"
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold rounded-xl text-xs flex items-center space-x-1.5 transition shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Main Google Maps Viewport */}
      <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-950 flex flex-col">
        <iframe
          id="google-maps-embed-frame"
          title={`${landmarkName} Google Maps`}
          src={googleMapsEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay Telemetry Badge */}
        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs text-slate-200 shadow-lg flex items-center space-x-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold text-white">Google Maps Live View</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">({cityName}, {recognition.country})</span>
        </div>

        {/* Distance Badge if located */}
        {userDistance !== null && (
          <div className="absolute top-3 right-3 bg-cyan-950/90 border border-cyan-500/40 text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-mono shadow-xl backdrop-blur-md flex items-center space-x-2">
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
      <div className="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recommended Viewing Points & Nearby Hubs</span>
          </div>
          <span className="text-[11px] text-slate-400">Click to view location</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {nearbySpots.map((spot) => {
            const isSelected = selectedSpot?.id === spot.id;
            const spotMapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;
            return (
              <div
                key={spot.id}
                onClick={() => setSelectedSpot(isSelected ? null : spot)}
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
                    <span>View</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Google Maps Action Bar */}
      <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Google Maps Actions:
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
            <span className="truncate">Open in Google Maps</span>
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
            <span className="truncate">Turn-by-Turn Directions</span>
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
            <span className="truncate">360° Street View</span>
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
            <span className="truncate">Google Earth 3D</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
