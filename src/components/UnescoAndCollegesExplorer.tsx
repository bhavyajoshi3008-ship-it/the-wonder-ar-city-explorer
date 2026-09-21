import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Globe,
  Search,
  Sparkles,
  MapPin,
  BookOpen,
  Filter,
  Calendar,
  Award,
  ChevronRight,
  Compass,
} from "lucide-react";
import { SampleLandmark } from "../data/sampleLandmarks";
import { UNESCO_AND_COLLEGES_CATALOG, UnescoSiteEntry } from "../data/unescoWorldHeritage";
import { useLanguage } from "../context/LanguageContext";

interface UnescoAndCollegesExplorerProps {
  onSelectSite: (site: SampleLandmark) => void;
  isLoading: boolean;
  loadingId: string | null;
}

type FilterCategory = "all" | "colleges" | "unesco_cultural" | "unesco_natural" | "unesco_mixed";
type WorldRegion = "all" | "Europe and North America" | "Asia and the Pacific" | "Latin America and the Caribbean" | "Arab States" | "Africa";

export const UnescoAndCollegesExplorer: React.FC<UnescoAndCollegesExplorerProps> = ({
  onSelectSite,
  isLoading,
  loadingId,
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedRegion, setSelectedRegion] = useState<WorldRegion>("all");

  // Convert a UnescoSiteEntry into the SampleLandmark format needed by the AR Tour pipeline
  const convertToSampleLandmark = (site: UnescoSiteEntry): SampleLandmark => {
    return {
      id: site.id,
      name: site.name,
      city: site.city || site.country,
      country: site.country,
      architecturalStyle: site.architecturalStyle || (site.isHistoricUniversity ? "Collegiate Architecture" : "Historic World Heritage"),
      periodEra: site.periodEra || (site.foundedYear ? `Founded ${site.foundedYear} AD` : `Inscribed ${site.year}`),
      summary: site.summary,
      imageUrl: site.imageUrl,
      thumbnailUrl: site.thumbnailUrl,
      badge: site.badge || (site.isHistoricUniversity ? `Historic College (${site.foundedYear})` : `UNESCO #${site.unescoId}`),
      category: site.isHistoricUniversity ? "college" : "unesco",
      isUnesco: true,
      isCollege: site.isHistoricUniversity,
      unescoId: site.unescoId,
      unescoYear: site.year,
      foundedYear: site.foundedYear,
      region: site.region,
    };
  };

  const filteredSites = useMemo(() => {
    return UNESCO_AND_COLLEGES_CATALOG.filter((site) => {
      // Category filter
      if (activeCategory === "colleges" && !site.isHistoricUniversity) return false;
      if (activeCategory === "unesco_cultural" && (site.category !== "Cultural" || site.isHistoricUniversity)) return false;
      if (activeCategory === "unesco_natural" && site.category !== "Natural") return false;
      if (activeCategory === "unesco_mixed" && site.category !== "Mixed") return false;

      // Region filter
      if (selectedRegion !== "all" && site.region !== selectedRegion) return false;

      // Search text filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = site.name.toLowerCase().includes(query);
        const matchCountry = site.country.toLowerCase().includes(query);
        const matchCity = site.city?.toLowerCase().includes(query);
        const matchStyle = site.architecturalStyle?.toLowerCase().includes(query);
        const matchSummary = site.summary.toLowerCase().includes(query);
        const matchInst = site.institutionName?.toLowerCase().includes(query);
        const matchYear = site.year.toString().includes(query) || (site.foundedYear && site.foundedYear.toString().includes(query));
        return matchName || matchCountry || matchCity || matchStyle || matchSummary || matchInst || matchYear;
      }

      return true;
    });
  }, [searchQuery, activeCategory, selectedRegion]);

  const collegesCount = useMemo(() => UNESCO_AND_COLLEGES_CATALOG.filter((s) => s.isHistoricUniversity).length, []);
  const unescoSitesCount = useMemo(() => UNESCO_AND_COLLEGES_CATALOG.length, []);

  return (
    <div id="unesco-colleges-explorer-deck" className="space-y-4 sm:space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-[11px] font-mono">
              <Globe className="w-3.5 h-3.5" />
              <span>GLOBAL REPOSITORY</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-300 text-[11px] font-mono">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>HISTORIC COLLEGES</span>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight mt-1.5 flex items-center space-x-2">
            <span>{t("unesco_and_colleges_title", "World UNESCO Sites & Historic Colleges")}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Instant 1-Tap AR exploration of humanity's greatest collegiate institutions and UNESCO World Heritage sanctuaries.
          </p>
        </div>

        {/* Global Stats Counter */}
        <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>
              <strong className="text-slate-100">{collegesCount}</strong> Historic Colleges
            </span>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center space-x-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>
              <strong className="text-slate-100">{unescoSitesCount}</strong> Curated UNESCO
            </span>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="unesco-colleges-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Oxford, Harvard, Cambridge, Coimbra, Machu Picchu, Petra, Egypt, Greece, India..."
              className="w-full pl-9 pr-8 py-2 bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 focus:border-cyan-500 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs px-1.5 py-0.5 rounded"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Selector */}
          <div className="flex items-center space-x-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              id="unesco-colleges-region-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value as WorldRegion)}
              className="bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 focus:border-cyan-500 rounded-xl px-2.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
            >
              <option value="all">All World Regions</option>
              <option value="Europe and North America">Europe & North America</option>
              <option value="Asia and the Pacific">Asia & Pacific</option>
              <option value="Latin America and the Caribbean">Latin America & Caribbean</option>
              <option value="Arab States">Arab States</option>
              <option value="Africa">Africa</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            type="button"
            id="unesco-filter-all"
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Sites & Colleges ({UNESCO_AND_COLLEGES_CATALOG.length})
          </button>

          <button
            type="button"
            id="unesco-filter-colleges"
            onClick={() => setActiveCategory("colleges")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "colleges"
                ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Historic Colleges ({collegesCount})</span>
          </button>

          <button
            type="button"
            id="unesco-filter-cultural"
            onClick={() => setActiveCategory("unesco_cultural")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_cultural"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>UNESCO Cultural Monuments</span>
          </button>

          <button
            type="button"
            id="unesco-filter-natural"
            onClick={() => setActiveCategory("unesco_natural")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_natural"
                ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>UNESCO Natural Wonders</span>
          </button>

          <button
            type="button"
            id="unesco-filter-mixed"
            onClick={() => setActiveCategory("unesco_mixed")}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeCategory === "unesco_mixed"
                ? "bg-purple-500 text-slate-950 font-semibold shadow-sm"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <span>Dual Heritage (Machu Picchu)</span>
          </button>
        </div>
      </div>

      {/* Results Count & Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-0.5">
        <span>
          Showing <strong className="text-slate-200">{filteredSites.length}</strong> world sites
          {searchQuery && ` matching "${searchQuery}"`}
          {selectedRegion !== "all" && ` in ${selectedRegion}`}
        </span>
        <span className="font-mono text-[11px] text-cyan-400">Click card for 1-Tap AR Tour</span>
      </div>

      {/* Sites Grid */}
      {filteredSites.length === 0 ? (
        <div className="p-8 text-center bg-slate-900/50 border border-slate-800 rounded-2xl">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          <p className="text-sm text-slate-300 font-medium">No UNESCO sites or historic colleges matched your query</p>
          <p className="text-xs text-slate-500 mt-1">Try searching for another country, city, or clearing the filter.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
              setSelectedRegion("all");
            }}
            className="mt-3 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
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
                  className="group flex flex-col rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/70 overflow-hidden transition-all shadow-sm hover:shadow-cyan-950/40 hover:shadow-lg"
                >
                  {/* Photo Thumbnail with Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                      {site.isHistoricUniversity ? (
                        <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-950/90 text-amber-300 border border-amber-700/80 backdrop-blur-sm">
                          <GraduationCap className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>EST. {site.foundedYear || "MEDIEVAL"}</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-700/80 backdrop-blur-sm">
                          <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>UNESCO #{site.unescoId}</span>
                        </span>
                      )}

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-sm">
                        {site.category}
                      </span>
                    </div>

                    {/* Inscription / Founded Year Pill */}
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1 text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800/80 backdrop-blur-sm">
                      <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{site.isHistoricUniversity ? `Founded ${site.foundedYear} AD` : `Inscribed ${site.year}`}</span>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-2.5">
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {site.name}
                      </h4>
                      <div className="flex items-center space-x-1 text-xs text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                        <span className="truncate">{site.city ? `${site.city}, ${site.country}` : site.country}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {site.summary}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 truncate max-w-[140px]">
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
                          <span className="text-amber-300 animate-pulse">Loading...</span>
                        ) : (
                          <>
                            <Sparkles className="w-3 h-3 shrink-0" />
                            <span>Launch AR</span>
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
    </div>
  );
};
