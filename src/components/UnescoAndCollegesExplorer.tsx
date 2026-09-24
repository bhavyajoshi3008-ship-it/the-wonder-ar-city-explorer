import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Search,
  Sparkles,
  MapPin,
  Filter,
  Calendar,
  Award,
  ChevronRight,
  Compass,
  Maximize2,
  X,
  Image as ImageIcon,
  LayoutGrid,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { SampleLandmark } from "../data/sampleLandmarks";
import { UnescoSiteEntry } from "../data/unescoWorldHeritage";
import {
  UNESCO_AND_COLLEGES_CATALOG,
  HISTORICAL_COLLEGES_CATALOG,
  HistoricalCollegeOrUnescoSite,
} from "../data/historicalColleges";
import { useLanguage } from "../context/LanguageContext";

interface UnescoAndCollegesExplorerProps {
  onSelectSite: (site: SampleLandmark) => void;
  isLoading: boolean;
  loadingId: string | null;
}

type FilterCategory = "all" | "colleges" | "indian_colleges" | "unesco_cultural" | "unesco_natural" | "unesco_mixed";
type WorldRegion =
  | "all"
  | "Europe and North America"
  | "Asia and the Pacific"
  | "Latin America and the Caribbean"
  | "Arab States"
  | "Africa";

type ViewStyle = "detailed" | "photo_gallery";

export const UnescoAndCollegesExplorer: React.FC<UnescoAndCollegesExplorerProps> = ({
  onSelectSite,
  isLoading,
  loadingId,
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedRegion, setSelectedRegion] = useState<WorldRegion>("all");
  const [viewStyle, setViewStyle] = useState<ViewStyle>("detailed");
  const [lightboxSite, setLightboxSite] = useState<HistoricalCollegeOrUnescoSite | null>(null);

  // Convert a HistoricalCollegeOrUnescoSite into the SampleLandmark format needed by AR Tour pipeline
  const convertToSampleLandmark = (site: HistoricalCollegeOrUnescoSite): SampleLandmark => {
    const isCollege = Boolean((site as any).isCollegeOrUniversity);
    return {
      id: site.id,
      name: site.name,
      city: site.city || site.country,
      country: site.country,
      architecturalStyle: site.architecturalStyle || (isCollege ? "Historic Collegiate Architecture" : "Historic World Heritage"),
      periodEra: site.periodEra || (isCollege ? `Founded ${(site as any).foundedYear}` : `Inscribed ${site.year}`),
      summary: site.summary,
      imageUrl: site.imageUrl,
      thumbnailUrl: site.thumbnailUrl,
      badge: site.badge || (isCollege ? `Founded ${(site as any).foundedYear}` : `UNESCO #${site.unescoId}`),
      category: isCollege ? "college" : "unesco",
      isUnesco: !isCollege || Boolean(site.unescoId),
      unescoId: site.unescoId,
      unescoYear: site.year,
      region: site.region,
    };
  };

  const filteredSites = useMemo(() => {
    return UNESCO_AND_COLLEGES_CATALOG.filter((site) => {
      const isCollege = Boolean((site as any).isCollegeOrUniversity);

      // Category filter
      if (activeCategory === "colleges" && !isCollege) return false;
      if (activeCategory === "indian_colleges" && (!isCollege || !site.country.toLowerCase().includes("india"))) return false;
      if (activeCategory === "unesco_cultural" && (site.category !== "Cultural" || isCollege)) return false;
      if (activeCategory === "unesco_natural" && site.category !== "Natural") return false;
      if (activeCategory === "unesco_mixed" && site.category !== "Mixed") return false;

      // Region filter
      if (selectedRegion !== "all" && site.region !== selectedRegion) return false;

      // Search text filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = site.name.toLowerCase().includes(query);
        const matchLocalName = site.localName?.toLowerCase().includes(query);
        const matchCountry = site.country.toLowerCase().includes(query);
        const matchCity = site.city?.toLowerCase().includes(query);
        const matchStyle = site.architecturalStyle?.toLowerCase().includes(query);
        const matchSummary = site.summary.toLowerCase().includes(query);
        const matchYear = site.year != null ? site.year.toString().includes(query) : false;
        const matchUnescoId = site.unescoId?.toString().includes(query);
        const matchMotto = (site as any).famousMotto?.toLowerCase().includes(query);
        const matchFounded = (site as any).foundedYear?.toString().toLowerCase().includes(query);
        const matchBuildings = (site as any).notableHistoricBuildings?.some((b: string) =>
          b.toLowerCase().includes(query)
        );

        return (
          matchName ||
          matchLocalName ||
          matchCountry ||
          matchCity ||
          matchStyle ||
          matchSummary ||
          matchYear ||
          matchUnescoId ||
          matchMotto ||
          matchFounded ||
          matchBuildings
        );
      }

      return true;
    });
  }, [searchQuery, activeCategory, selectedRegion]);

  const stats = useMemo(() => {
    const total = UNESCO_AND_COLLEGES_CATALOG.length;
    const colleges = HISTORICAL_COLLEGES_CATALOG.length;
    const indianColleges = HISTORICAL_COLLEGES_CATALOG.filter((s) => s.country.toLowerCase().includes("india")).length;
    const cultural = UNESCO_AND_COLLEGES_CATALOG.filter((s) => s.category === "Cultural" && !(s as any).isCollegeOrUniversity).length;
    const natural = UNESCO_AND_COLLEGES_CATALOG.filter((s) => s.category === "Natural").length;
    const mixed = UNESCO_AND_COLLEGES_CATALOG.filter((s) => s.category === "Mixed").length;
    return { total, colleges, indianColleges, cultural, natural, mixed };
  }, []);

  return (
    <div id="unesco-world-heritage-explorer" className="space-y-4 sm:space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-700/80 text-cyan-300 text-[11px] font-mono">
              <Globe className="w-3.5 h-3.5" />
              <span>{t("unesco_badge", "UNESCO WORLD HERITAGE SITES")}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 text-[11px] font-mono">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{t("verified_photos", "100% WITH VERIFIED HD PHOTOS")}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/90 border border-amber-700/80 text-amber-300 text-[11px] font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>{t("official_catalog", "OFFICIAL HERITAGE CATALOG")}</span>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight mt-2 flex items-center space-x-2">
            <span>{t("unesco_catalog_title", "All UNESCO World Heritage Sites & Natural Wonders")}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t("unesco_catalog_subtitle", `Explore ${stats.total} globally renowned UNESCO World Heritage sanctuaries, ancient architectural temples, and natural wonders with high-resolution photography and 1-tap AR tours.`)}
          </p>
        </div>

        {/* View Mode & Stats */}
        <div className="flex items-center space-x-3 text-xs shrink-0">
          {/* View Mode Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-xl">
            <button
              type="button"
              id="view-mode-detailed"
              onClick={() => setViewStyle("detailed")}
              title={t("detailed_cards_tooltip", "Detailed Cards with History & Architectural Era")}
              className={`px-2.5 py-1.5 rounded-lg flex items-center space-x-1.5 text-xs transition-colors cursor-pointer ${
                viewStyle === "detailed"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("detailed_cards", "Detailed Cards")}</span>
            </button>
            <button
              type="button"
              id="view-mode-gallery"
              onClick={() => setViewStyle("photo_gallery")}
              title={t("photo_gallery_tooltip", "Visual Photo Gallery with Immersive Photography")}
              className={`px-2.5 py-1.5 rounded-lg flex items-center space-x-1.5 text-xs transition-colors cursor-pointer ${
                viewStyle === "photo_gallery"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t("photo_gallery", "Photo Gallery")}</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl hidden lg:flex items-center space-x-2 text-slate-300 font-mono">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              <strong className="text-cyan-300">{stats.total}</strong> {t("sites_inscribed", "Sites Inscribed")}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="unesco-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_unesco_placeholder", "Search UNESCO sites (e.g. Machu Picchu, Taj Mahal, Venice, Mount Fuji, Egypt, Italy, Japan)...")}
              className="w-full pl-10 pr-9 py-2.5 bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 focus:border-cyan-500 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs px-1.5 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Dropdown Filter */}
          <div className="flex items-center space-x-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              id="unesco-region-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value as WorldRegion)}
              className="bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 cursor-pointer"
            >
              <option value="all">{t("all_continents", "All Continents & Regions")} ({stats.total})</option>
              <option value="Europe and North America">{t("region_europe_na", "Europe & North America")}</option>
              <option value="Asia and the Pacific">{t("region_asia_pacific", "Asia & Pacific")}</option>
              <option value="Latin America and the Caribbean">{t("region_latam", "Latin America & Caribbean")}</option>
              <option value="Arab States">{t("region_arab_states", "Arab States")}</option>
              <option value="Africa">{t("region_africa", "Africa")}</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            type="button"
            id="unesco-filter-all"
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {t("all_unesco_sites", "All Heritage & Colleges")} ({stats.total})
          </button>

          <button
            type="button"
            id="filter-colleges"
            onClick={() => setActiveCategory("colleges")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "colleges"
                ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>{t("oldest_colleges_label", "All Historic Colleges")} ({stats.colleges})</span>
          </button>

          <button
            type="button"
            id="filter-indian-colleges"
            onClick={() => setActiveCategory("indian_colleges")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "indian_colleges"
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <span className="text-sm">🇮🇳</span>
            <span>{t("indian_colleges_label", "Old Colleges of India")} ({stats.indianColleges})</span>
          </button>

          <button
            type="button"
            id="unesco-filter-cultural"
            onClick={() => setActiveCategory("unesco_cultural")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_cultural"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{t("cultural_monuments", "Cultural Monuments")} ({stats.cultural})</span>
          </button>

          <button
            type="button"
            id="unesco-filter-natural"
            onClick={() => setActiveCategory("unesco_natural")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_natural"
                ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("natural_wonders", "Natural Wonders")} ({stats.natural})</span>
          </button>

          <button
            type="button"
            id="unesco-filter-mixed"
            onClick={() => setActiveCategory("unesco_mixed")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_mixed"
                ? "bg-purple-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-purple-400" />
            <span>{t("mixed_heritage", "Dual Cultural & Natural")} ({stats.mixed})</span>
          </button>
        </div>
      </div>

      {/* Results Count & Instructions */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {t("showing_count", "Showing")} <strong className="text-slate-200">{filteredSites.length}</strong> {t("of_count", "of")} {stats.total} {t("unesco_sites_label", "UNESCO sites")}
          {searchQuery && ` "${searchQuery}"`}
          {selectedRegion !== "all" && ` (${selectedRegion})`}
        </span>
        <span className="font-mono text-[11px] text-cyan-400 hidden sm:inline">
          {t("gallery_hint", "Click photo to enlarge • Click Launch AR for instant 3D tour")}
        </span>
      </div>

      {/* Sites Container */}
      {filteredSites.length === 0 ? (
        <div className="p-10 text-center bg-slate-900/50 border border-slate-800 rounded-2xl">
          <Globe className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <p className="text-sm text-slate-300 font-medium">{t("no_sites_matched", "No UNESCO sites matched your query")}</p>
          <p className="text-xs text-slate-500 mt-1">{t("try_searching_different", "Try searching for a different country, monument, or clear your filters.")}</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
              setSelectedRegion("all");
            }}
            className="mt-3.5 px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors cursor-pointer"
          >
            {t("reset_filters", "Reset Filters")}
          </button>
        </div>
      ) : viewStyle === "photo_gallery" ? (
        /* View 1: Immersive Photo Gallery Showcase */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSites.map((site) => {
              const isCurrentlyLoading = loadingId === site.id;
              const sampleLandmark = convertToSampleLandmark(site);

              return (
                <motion.div
                  key={site.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 hover:border-cyan-500 transition-all shadow-md hover:shadow-cyan-950/40 cursor-pointer"
                  onClick={() => setLightboxSite(site)}
                >
                  <img
                    src={site.imageUrl}
                    alt={site.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = "true";
                        target.src = site.thumbnailUrl;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Bar with UNESCO / College Badge & Zoom Icon */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    {(site as any).isCollegeOrUniversity ? (
                      <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-950/90 text-amber-300 border border-amber-600/80 backdrop-blur-md">
                        <GraduationCap className="w-3 h-3 text-amber-400" />
                        <span>{(site as any).foundedYear ? `Est. ${(site as any).foundedYear}` : "Historic College"}</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/80 backdrop-blur-md">
                        <Globe className="w-3 h-3 text-cyan-400" />
                        <span>UNESCO #{site.unescoId}</span>
                      </span>
                    )}

                    <span className="p-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-700/80 backdrop-blur-md group-hover:text-cyan-300 group-hover:scale-110 transition-all">
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Bottom Information & 1-Tap Action */}
                  <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end space-y-1.5">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-cyan-400">
                      <MapPin className="w-3 h-3 shrink-0 text-cyan-400" />
                      <span className="truncate">{site.city ? `${site.city}, ${site.country}` : site.country}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 leading-tight group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {site.name}
                    </h4>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-400">
                        {(site as any).isCollegeOrUniversity
                          ? `Founded ${(site as any).foundedYear || site.year}`
                          : `${t("inscribed_year", "Inscribed")} ${site.year}`}
                      </span>

                      <button
                        type="button"
                        id={`gallery-launch-ar-${site.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSite(sampleLandmark);
                        }}
                        disabled={isLoading || isCurrentlyLoading}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-[10px] font-bold flex items-center space-x-1 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isCurrentlyLoading ? (
                          <span>{t("loading", "Loading...")}</span>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span>{t("launch_ar", "Launch AR")}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        /* View 2: Detailed Architectural Cards */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSites.map((site) => {
              const isCurrentlyLoading = loadingId === site.id;
              const sampleLandmark = convertToSampleLandmark(site);

              return (
                <motion.div
                  key={site.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/80 overflow-hidden transition-all shadow-sm hover:shadow-cyan-950/40 hover:shadow-lg"
                >
                  {/* Photo Thumbnail with Badges & Lightbox click */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
                    onClick={() => setLightboxSite(site)}
                    title="Click to view full photo"
                  >
                    <img
                      src={site.thumbnailUrl}
                      alt={site.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = "true";
                          target.src = site.imageUrl;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                      {(site as any).isCollegeOrUniversity ? (
                        <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-950/90 text-amber-300 border border-amber-600/80 backdrop-blur-sm">
                          <GraduationCap className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{(site as any).foundedYear ? `Est. ${(site as any).foundedYear}` : "Historic College"}</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/80 backdrop-blur-sm">
                          <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>UNESCO #{site.unescoId}</span>
                        </span>
                      )}

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/90 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                        {(site as any).isCollegeOrUniversity ? "Historic College" : site.category}
                      </span>
                    </div>

                    {/* Inscription / Founded Year Pill & Zoom preview icon */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800/80 backdrop-blur-sm">
                        <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>
                          {(site as any).isCollegeOrUniversity
                            ? `Founded ${(site as any).foundedYear || site.year}`
                            : `${t("inscribed_year", "Inscribed")} ${site.year}`}
                        </span>
                      </div>

                      <div className="p-1 rounded bg-slate-950/80 text-slate-400 group-hover:text-cyan-300 transition-colors backdrop-blur-sm border border-slate-800">
                        <Maximize2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-3.5 flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {site.name}
                      </h4>
                      <div className="flex items-center space-x-1 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                        <span className="truncate">{site.city ? `${site.city}, ${site.country}` : site.country}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {site.summary}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 truncate max-w-[130px]">
                        {site.architecturalStyle || site.region}
                      </span>

                      <button
                        type="button"
                        id={`launch-ar-${site.id}`}
                        onClick={() => onSelectSite(sampleLandmark)}
                        disabled={isLoading || isCurrentlyLoading}
                        className="px-2.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-500 border border-cyan-700/60 hover:border-cyan-400 text-cyan-300 hover:text-slate-950 font-mono text-[11px] font-semibold flex items-center space-x-1 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                      >
                        {isCurrentlyLoading ? (
                          <span className="text-amber-300 animate-pulse">{t("loading", "Loading...")}</span>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span>{t("launch_ar", "Launch AR")}</span>
                            <ChevronRight className="w-3 h-3 shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Lightbox / High-Resolution Photo Zoom Modal */}
      <AnimatePresence>
        {lightboxSite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setLightboxSite(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                id="close-unesco-lightbox"
                onClick={() => setLightboxSite(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                title="Close photo viewer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full-bleed Photo Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                <img
                  src={lightboxSite.imageUrl}
                  alt={lightboxSite.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="flex items-center space-x-1 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/80 backdrop-blur-md">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>UNESCO #{lightboxSite.unescoId}</span>
                  </span>

                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-950/90 text-slate-300 border border-slate-700/80 backdrop-blur-md">
                    {lightboxSite.category} {t("heritage_label", "Heritage")}
                  </span>
                </div>
              </div>

              {/* Modal Details & Action Footer */}
              <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-100">
                      {lightboxSite.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs sm:text-sm text-cyan-400 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{lightboxSite.city ? `${lightboxSite.city}, ${lightboxSite.country}` : lightboxSite.country}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 flex items-center space-x-3 shrink-0">
                    <span className="px-2 py-1 bg-slate-800 rounded-lg border border-slate-700">
                      {t("inscribed_year", "Inscribed")} {lightboxSite.year}
                    </span>
                    {lightboxSite.criteria && (
                      <span className="px-2 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-400">
                        {t("criteria_label", "Criteria:")} {lightboxSite.criteria}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lightboxSite.summary}
                </p>

                {lightboxSite.architecturalStyle && (
                  <div className="text-xs font-mono text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    <strong className="text-cyan-300">{t("arch_geo_classification", "Architectural & Geological Classification:")} </strong>
                    <span>{lightboxSite.architecturalStyle}</span>
                    {lightboxSite.periodEra && (
                      <span className="text-slate-500"> • {lightboxSite.periodEra}</span>
                    )}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setLightboxSite(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                  >
                    {t("close_preview", "Close Preview")}
                  </button>

                  <button
                    type="button"
                    id="lightbox-launch-ar-btn"
                    onClick={() => {
                      const sample = convertToSampleLandmark(lightboxSite);
                      setLightboxSite(null);
                      onSelectSite(sample);
                    }}
                    disabled={isLoading}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t("launch_ar_with_photo", "Launch 1-Tap AR Tour With This Photo")}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
