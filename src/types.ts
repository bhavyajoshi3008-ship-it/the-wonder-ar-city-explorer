export interface ARKeypoint {
  id: string;
  label: string;
  featureType: string; // e.g., 'spire', 'dome', 'arch', 'facade', 'statue', 'clock', 'relief'
  description: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
}

export interface PhotoAnalysis {
  perspectiveAndAngle: string;
  lightingAndAtmosphere: string;
  visibleMaterialsAndTextures: string;
  structuralCondition: string;
  prominentVisualFeatures: string[];
  compositionNotes?: string;
}

export interface UnescoHeritageInfo {
  isWorldHeritage: boolean;
  officialName?: string;
  inscriptionYear?: number | string;
  criteria?: string;
  category?: 'Cultural' | 'Natural' | 'Mixed';
  unescoId?: string | number;
  region?: string;
  dangerStatus?: boolean;
}

export interface HistoricCollegeInfo {
  isCollegeOrUniversity: boolean;
  institutionName?: string;
  collegiateUnit?: string;
  foundedYear?: number | string;
  notableCollegesOrHalls?: string[];
  collegiateFeatures?: string[];
  famousAlumniOrScholars?: string[];
}

export interface LandmarkRecognition {
  name: string;
  localName?: string;
  city: string;
  country: string;
  architecturalStyle: string;
  periodEra: string;
  confidence: number;
  summary: string;
  photoAnalysis?: PhotoAnalysis;
  coordinatesEstimate?: {
    lat: number;
    lng: number;
  };
  arKeypoints: ARKeypoint[];
  modelUsed?: string;
  isLandmark?: boolean;
  detectedCategory?: 'landmark' | 'person' | 'animal' | 'nature' | 'food' | 'object' | 'indoor' | 'other';
  notLandmarkReason?: string;
  unescoInfo?: UnescoHeritageInfo;
  collegeInfo?: HistoricCollegeInfo;
  needsUserIdentification?: boolean;
  creditsDepleted?: boolean;
  candidateMatches?: string[];
}

export interface GroundingSource {
  title: string;
  url: string;
  isGoogleMaps?: boolean;
}

export interface GoogleMapsGroundingInfo {
  placeSummary?: string;
  primaryMapsUri: string;
  placeTitle: string;
  reviewSnippets?: string[];
  mapsLinks?: Array<{ title: string; url: string; isGoogleMaps: boolean }>;
}

export interface TourChapter {
  id: string;
  title: string;
  timestampHint: string;
  script: string;
  focusPointId?: string;
}

export interface LandmarkHistory {
  historicalTimeline: Array<{
    yearOrEra: string;
    event: string;
    description: string;
  }>;
  architecturalSecrets: string[];
  culturalSignificance: string;
  visitorTips: string[];
  narrationScript: string;
  chapters: TourChapter[];
  groundingQueries: string[];
  groundingSources: GroundingSource[];
  mapsGrounding?: GoogleMapsGroundingInfo;
  photoGroundedNotes?: string;
  modelUsed?: string;
}

export interface NarrationAudio {
  audioBase64: string; // data:audio/wav;base64,...
  voiceName: string;
  sampleRate: number;
  durationEstimateSec: number;
  modelUsed?: string;
  useClientFallback?: boolean;
  warning?: string;
  infoMessage?: string;
  status?: "ready" | "client_fallback" | "synthesizing" | "error";
}

export interface ScannedLandmarkEntry {
  id: string;
  scannedAt: string;
  imageDataUrl: string;
  recognition: LandmarkRecognition;
  history: LandmarkHistory;
  narration?: NarrationAudio;
  syncStatus?: 'syncing' | 'synced' | 'local';
}

export type AppViewMode = 'capture' | 'ar_tour' | 'history_log';
