export interface SampleLandmark {
  id: string;
  name: string;
  city: string;
  country: string;
  architecturalStyle: string;
  periodEra: string;
  summary: string;
  imageUrl: string;
  thumbnailUrl: string;
  badge: string;
}

export const SAMPLE_LANDMARKS: SampleLandmark[] = [
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    city: "Paris",
    country: "France",
    architecturalStyle: "Structural Expressionism / Wrought Iron Lattice",
    periodEra: "1887–1889",
    summary: "Built as the centerpiece for the 1889 World's Fair, this 330-meter wrought-iron lattice tower became the global cultural icon of France and one of the most visited monuments in the world.",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=300&q=75",
    badge: "Iconic European Landmark",
  },
  {
    id: "colosseum",
    name: "Colosseum",
    city: "Rome",
    country: "Italy",
    architecturalStyle: "Classical Roman Amphitheater (Flavian Dynasty)",
    periodEra: "70–80 AD",
    summary: "The largest ancient amphitheater ever built, engineered with travertine limestone, tuff, and brick-faced concrete to hold up to 80,000 spectators for gladiatorial contests and public spectacles.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=75",
    badge: "Wonder of the World",
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    city: "Agra",
    country: "India",
    architecturalStyle: "Mughal Architecture (Indo-Islamic)",
    periodEra: "1632–1653",
    summary: "An immense ivory-white marble mausoleum commissioned by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. Renowned for its bilateral symmetry and intricate pietra dura inlay.",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=300&q=75",
    badge: "UNESCO World Heritage",
  },
  {
    id: "bernabeu-stadium",
    name: "Santiago Bernabéu Stadium",
    city: "Madrid",
    country: "Spain",
    architecturalStyle: "High-Tech Neo-Futurism & Retractable Steel Facade",
    periodEra: "1947 / 2024 Renovation",
    summary: "Home to Real Madrid since 1947, the legendary Bernabéu features a futuristic stainless steel louvred envelope, 360-degree LED halo screen, retractable roof, and an underground greenhouse pitch system.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Santiago_Bernab%C3%A9u_Stadium_in_2017_before_the_2023_reconstruction.jpg?width=1200",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Santiago_Bernab%C3%A9u_Stadium_in_2017_before_the_2023_reconstruction.jpg?width=400",
    badge: "Real Madrid Cathedral",
  },
  {
    id: "big-ben",
    name: "Elizabeth Tower (Big Ben)",
    city: "London",
    country: "United Kingdom",
    architecturalStyle: "Gothic Revival (Victorian Gothic)",
    periodEra: "1843–1859",
    summary: "Designed by Charles Barry and Augustus Pugin at the north end of the Palace of Westminster, this four-faced chimes clock tower is one of Britain's most prominent symbols of democracy and timekeeping.",
    imageUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=300&q=75",
    badge: "Historic Westminster",
  },
  {
    id: "fushimi-inari",
    name: "Fushimi Inari Taisha",
    city: "Kyoto",
    country: "Japan",
    architecturalStyle: "Shinto Shrine Architecture (Nagare-zukuri)",
    periodEra: "711 AD",
    summary: "The head shrine of the kami Inari, famous for its mesmerizing mountain paths shaded by over 10,000 vibrant vermilion torii gates dedicated by merchants for prosperity.",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=75",
    badge: "Sacred Spiritual Walk",
  }
];
