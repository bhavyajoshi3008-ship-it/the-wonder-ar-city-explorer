import { RELIGIOUS_STRUCTURE_DOSSIERS, RELIGIOUS_ALIASES } from "./religiousStructuresKnowledge";

export interface FallbackLandmarkData {
  name: string;
  localName: string;
  city: string;
  country: string;
  architecturalStyle: string;
  periodEra: string;
  confidence: number;
  summary: string;
  coordinatesEstimate: { lat: number; lng: number };
  arKeypoints: Array<{
    id: string;
    label: string;
    featureType: string;
    description: string;
    x: number;
    y: number;
  }>;
  historicalTimeline: Array<{
    yearOrEra: string;
    event: string;
    description: string;
  }>;
  architecturalSecrets: string[];
  culturalSignificance: string;
  visitorTips: string[];
  narrationScript: string;
  chapters: Array<{
    id: string;
    title: string;
    timestampHint: string;
    script: string;
    focusPointId: string;
  }>;
}

export const KNOWN_LANDMARK_DOSSIERS: Record<string, FallbackLandmarkData> = {
  "eiffel tower": {
    name: "Eiffel Tower",
    localName: "Tour Eiffel",
    city: "Paris",
    country: "France",
    architecturalStyle: "Wrought Iron Puddle Lattice (Structural Expressionism)",
    periodEra: "1887–1889",
    confidence: 98,
    summary: "Erected as the gateway arch to the 1889 World's Fair, this 330-meter monumental tower is France's most universally recognized architectural wonder.",
    coordinatesEstimate: { lat: 48.8584, lng: 2.2945 },
    arKeypoints: [
      { id: "pt-1", label: "Tower Apex & Telecomm Mast", featureType: "spire", description: "Houses the lightning rod and radio antenna; height expands up to 15cm in summer heat due to thermal expansion.", x: 50, y: 15 },
      { id: "pt-2", label: "Gustave Eiffel's Secret Apartment", featureType: "facade", description: "Private salon on the 3rd floor where Eiffel entertained Thomas Edison and elite guests.", x: 50, y: 35 },
      { id: "pt-3", label: "Second Observation Deck", featureType: "facade", description: "Panoramic viewing platform 115 meters above Paris housing the Le Jules Verne restaurant.", x: 50, y: 56 },
      { id: "pt-4", label: "Grand Base Archway", featureType: "arch", description: "Decorative semicircular arches joining the four massive masonry piers resting on hydraulic jacks.", x: 50, y: 84 },
    ],
    historicalTimeline: [
      { yearOrEra: "1887", event: "Groundbreaking Construction", description: "Maurice Koechlin and Émile Nouguier conceived the initial design, calculated by Gustave Eiffel." },
      { yearOrEra: "1889", event: "Exposition Universelle Inauguration", description: "Opened on March 31, 1889, surpassing the Washington Monument to become the world's tallest human-made structure." },
      { yearOrEra: "1909", event: "Radio Transmission Salvation", description: "Scheduled for demolition after 20 years, it was saved by its strategic value as a military radiotelegraph tower." },
      { yearOrEra: "1944", event: "Liberation of Paris", description: "Hitler ordered General Dietrich von Choltitz to blow up the tower, but the military governor refused." }
    ],
    architecturalSecrets: [
      "The tower is painted with 60 tons of paint every seven years in three progressive shades to counteract atmospheric perspective.",
      "In cold winter weather, thermal contraction causes the iron tower to shrink by up to 10 centimeters.",
      "Names of 72 prominent French scientists and mathematicians are engraved in gold letters along the base frieze."
    ],
    culturalSignificance: "A beacon of human industrial ambition, the Eiffel Tower redefined structural ironwork from utilitarian railway bridges to monumental civic sculpture, inspiring the French avant-garde and modern poetry.",
    visitorTips: [
      "Book summit elevator tickets at least 60 days ahead or climb the 674 stairs to the second deck for half the queue.",
      "The best photo angle is from the Pont de Bir-Hakeim or the Jardins du Trocadéro at blue hour when the 20,000 flashbulbs sparkle.",
      "Visit after 10 PM to witness the beacon light sweeping across the Seine."
    ],
    narrationScript: "Welcome to the Champ de Mars in Paris. Rising 330 meters into the sky, the Eiffel Tower is a triumphant marvel of 18,000 puddle-iron segments. Built for the 1889 World's Fair, it was initially protested by artists as an industrial monstrosity, yet it revolutionized civil engineering forever. Look closely at the summit—high above the city sits Gustave Eiffel's secret private apartment. As day transitions into dusk, watch 20,000 sparkling strobe lights illuminate this eternal symbol of France.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Standing at the Champ de Mars, the colossal iron lattice frames the Parisian sky. Completed in just 26 months, it weighs 10,100 tonnes.", focusPointId: "pt-4" },
      { id: "chap-2", title: "Engineering Marvels", timestampHint: "0:25", script: "Constructed without a single fatal crane accident, the four legs rest on hydraulic presses that allowed microscopic leveling during assembly.", focusPointId: "pt-3" },
      { id: "chap-3", title: "Secrets of the Past", timestampHint: "0:50", script: "High above on the top tier sits Gustave Eiffel's private apartment, preserved with wax figures of Eiffel and Thomas Edison in conversation.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Saved from the wrecking ball by early wireless telegraphy, the tower remains a beacon of liberty and architectural audacity.", focusPointId: "pt-1" }
    ]
  },
  "colosseum": {
    name: "Colosseum",
    localName: "Amphitheatrum Flavium",
    city: "Rome",
    country: "Italy",
    architecturalStyle: "Flavian Roman Classical Architecture",
    periodEra: "70–80 AD",
    confidence: 97,
    summary: "The greatest amphitheater of antiquity, engineered from travertine and Roman concrete to host gladiatorial games and naval naumachia for 80,000 spectators.",
    coordinatesEstimate: { lat: 41.8902, lng: 12.4922 },
    arKeypoints: [
      { id: "pt-1", label: "Upper Attic & Velarium Brackets", featureType: "facade", description: "Corinthian pilasters and corbels that held 240 wooden masts supporting a giant retractable canvas awning.", x: 50, y: 18 },
      { id: "pt-2", label: "Flavian Arcaded Facades", featureType: "arch", description: "Three tiers of 80 arches framed by Doric, Ionic, and Corinthian classical orders.", x: 50, y: 44 },
      { id: "pt-3", label: "Hypogeum Subterranean Labyrinth", featureType: "entrance", description: "Underground staging network of mechanical elevators and cages for gladiators and wild animals.", x: 50, y: 72 },
    ],
    historicalTimeline: [
      { yearOrEra: "70–72 AD", event: "Commissioned by Vespasian", description: "Emperor Vespasian financed construction from the spoils of the Great Jewish Revolt on Nero's former Golden House lake." },
      { yearOrEra: "80 AD", event: "Titus Inaugural Games", description: "Emperor Titus celebrated completion with 100 consecutive days of gladiatorial fights and mock naval battles." },
      { yearOrEra: "1349", event: "The Great Earthquake", description: "A massive earthquake caused the collapse of the entire southern outer wall, with fallen travertine quarried for palaces." }
    ],
    architecturalSecrets: [
      "The arena floor was originally covered in wood and silver-gilded sand (harena) to absorb spilled blood.",
      "An advanced plumbing system allowed the arena to be completely flooded with water to stage naval battles.",
      "Spectator seating was strictly stratified by social rank, from senators on marble benches to enslaved people on top wooden tiers."
    ],
    culturalSignificance: "An emblem of Roman imperial authority, engineering triumph, and social ritual, the Colosseum remains the enduring symbol of the Eternal City.",
    visitorTips: [
      "Book underground hypogeum tickets for rare access beneath the reconstructed arena floor.",
      "Walk up the Oppian Hill at twilight for a breathtaking perspective framed by Roman umbrella pines."
    ],
    narrationScript: "You are gazing upon the Colosseum, the grandest amphitheater the ancient world ever conceived. Begun under Emperor Vespasian in 70 AD, this monumental arena held up to 80,000 citizens. Beneath the wooden floor lay the hypogeum—a complex two-level maze of trap doors and hydraulic winches. High above, Roman sailors operated the velarium, a colossal canvas sail shielding spectators from the Mediterranean sun.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Approaching the Piazza del Colosseo, the four-story travertine facade towers 48 meters over ancient Rome.", focusPointId: "pt-2" },
      { id: "chap-2", title: "Engineering Marvels", timestampHint: "0:25", script: "Eighty numbered entrance arches—the vomitoria—could empty 50,000 spectators into the city streets in under 15 minutes.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Secrets of the Hypogeum", timestampHint: "0:50", script: "Underneath the arena, elevator pulleys powered by enslaved laborers hauled ferocious beasts through secret trapdoors.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Surviving earthquakes and stone scavengers, the Colosseum endures as a monument to Roman civilization.", focusPointId: "pt-1" }
    ]
  },
  "taj mahal": {
    name: "Taj Mahal",
    localName: "ताज महल",
    city: "Agra",
    country: "India",
    architecturalStyle: "Mughal Architecture (Indo-Islamic)",
    periodEra: "1632–1653",
    confidence: 99,
    summary: "The pinnacle of Mughal architectural artistry, this glowing white Makrana marble mausoleum was built by Emperor Shah Jahan in tribute to Mumtaz Mahal.",
    coordinatesEstimate: { lat: 27.1751, lng: 78.0421 },
    arKeypoints: [
      { id: "pt-1", label: "Central Onion Dome & Brass Finial", featureType: "dome", description: "Double dome rising 73 meters, topped by a gilded bronze crescent finial.", x: 50, y: 22 },
      { id: "pt-2", label: "Grand Iwan Portal & Calligraphy", featureType: "arch", description: "Recessed arched portal inlaid with black jasper Thuluth Arabic script from the Quran.", x: 50, y: 55 },
      { id: "pt-3", label: "Tilting Minarets", featureType: "column", description: "Four 40-meter minarets engineered with an outward tilt to protect the main tomb during earthquakes.", x: 22, y: 52 },
    ],
    historicalTimeline: [
      { yearOrEra: "1631", event: "Death of Empress Mumtaz", description: "Mumtaz Mahal passed away giving birth to their fourteenth child; grief-stricken Shah Jahan commissioned the mausoleum." },
      { yearOrEra: "1632–1648", event: "Marble Construction", description: "Over 20,000 artisans, calligraphers, and stone carvers labored with 1,000 elephants transporting Makrana marble." },
      { yearOrEra: "1983", event: "UNESCO Inscription", description: "Designated as 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world'." }
    ],
    architecturalSecrets: [
      "The monument is strictly symmetrical except for one element: the cenotaph of Shah Jahan himself, placed later by his son.",
      "The Makrana marble changes hue throughout the day: blush pink at dawn, brilliant milk-white at noon, and golden amber under moonlight.",
      "The decorative flowers are inlaid using pietra dura (parchin kari) with semi-precious lapis lazuli, jade, malachite, and turquoise."
    ],
    culturalSignificance: "Celebrated as the ultimate architectural monument to eternal devotion, the Taj Mahal harmonizes Persian symmetry with Indian stone-inlay mastery.",
    visitorTips: [
      "Arrive at sunrise for soft diffused light, zero crowds, and mirror reflections in the Yamuna River.",
      "Visit the Mehtab Bagh gardens across the river for an unobstructed silhouette sunset view."
    ],
    narrationScript: "Behold the Taj Mahal, the jewel of Mughal architecture. Built by Emperor Shah Jahan as an eternal memorial to Mumtaz Mahal, it took 20,000 artisans over two decades to sculpt. Crafted from Makrana translucent marble, the structure reflects the sky's moods—pink at dawn, pearlescent white by day, and luminous gold beneath the stars.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Passing through the red sandstone Great Gate, the white marble tomb appears framed against the horizon.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Architectural Marvels", timestampHint: "0:25", script: "The four corner minarets tilt slightly outward by two degrees, so that in an earthquake they would collapse away from the central dome.", focusPointId: "pt-3" },
      { id: "chap-3", title: "Parchin Kari Inlays", timestampHint: "0:50", script: "Inlaid with 28 varieties of precious gemstones, single marble flower petals are composed of up to 60 carved stones.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Standing peacefully beside the Yamuna River, it remains humanity's most poetic monument to love.", focusPointId: "pt-1" }
    ]
  },
  "sagrada": {
    name: "Basílica de la Sagrada Família",
    localName: "Temple Expiatori de la Sagrada Família",
    city: "Barcelona",
    country: "Spain",
    architecturalStyle: "Catalan Modernisme / Bio-Gothic",
    periodEra: "1882–Present",
    confidence: 99,
    summary: "Antoni Gaudí's unfinished basilica reimagines Gothic architecture through organic biomimicry, featuring tree-branching columns and hyperbolic vaulting.",
    coordinatesEstimate: { lat: 41.4036, lng: 2.1744 },
    arKeypoints: [
      { id: "pt-1", label: "Nativity Facade Sculptures", featureType: "facade", description: "Directly overseen by Gaudí before his death in 1926, brimming with flora and fauna carvings.", x: 48, y: 38 },
      { id: "pt-2", label: "Tower of Jesus Christ", featureType: "spire", description: "The central spire rising 172.5 meters, engineered to be half a meter shorter than Montjuïc hill out of respect for God.", x: 50, y: 15 },
      { id: "pt-3", label: "Passion Facade Portal", featureType: "entrance", description: "Austere, skeletal carvings by Josep Maria Subirachs depicting the agony of Christ.", x: 52, y: 68 },
    ],
    historicalTimeline: [
      { yearOrEra: "1882", event: "First Stone Laid", description: "Original architect Francisco de Paula del Villar began crypt construction before resigning due to disagreements." },
      { yearOrEra: "1883", event: "Gaudí Appointed Chief Architect", description: "Antoni Gaudí took over at age 31, radically transforming the design into his naturalistic vision." },
      { yearOrEra: "2010", event: "Consecration by Pope Benedict XVI", description: "Declared a minor basilica and opened for international liturgical worship." }
    ],
    architecturalSecrets: [
      "No flat surfaces or straight lines exist inside the temple; Gaudí believed straight lines belonged to man, and curved lines to God.",
      "A magic square of 16 numbers on the Passion Facade always adds up to 33—the age of Christ at his crucifixion—in 310 combinations.",
      "Gaudí is buried inside the crypt of the chapel dedicated to the Virgin of El Carmen."
    ],
    culturalSignificance: "The crowning jewel of Catalan Modernism, the Sagrada Família is a testament to architectural perseverance and the synthesis of structural mechanics with sacred spirituality.",
    visitorTips: [
      "Visit mid-afternoon between 3 PM and 5 PM when the setting sun floods the interior through the warm red, orange, and gold stained glass.",
      "Book tower access for the Nativity Tower to walk down Gaudí's snail-shell spiral staircase."
    ],
    narrationScript: "You stand before the Basílica de la Sagrada Família, the visionary masterpiece of Antoni Gaudí. Begun in 1882, this temple is unlike any cathedral on Earth. Gaudí drew inspiration directly from nature, constructing tree-trunk stone columns that branch outward into a stone canopy. Stained glass windows bathe the interior in emerald and sapphire tones in the morning, and blazing crimson and amber at twilight. It stands as an eternal bridge between the divine and the organic world.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Approaching from Carrer de Mallorca, the forest of organic stone spires stretches toward the Mediterranean sky.", focusPointId: "pt-2" },
      { id: "chap-2", title: "Organic Engineering", timestampHint: "0:25", script: "Gaudí calculated the catenary arches using hanging string models weighted with lead shot to find pure compression paths.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Secrets & Symbolism", timestampHint: "0:50", script: "On the Passion facade, a mysterious 4x4 cryptographic grid adds to 33 across dozens of different permutations.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Financed purely through ticket admissions and private donations, its ongoing construction connects generations of craftsmen.", focusPointId: "pt-2" }
    ]
  },
  "big ben": {
    name: "Elizabeth Tower (Big Ben)",
    localName: "Big Ben Clock Tower",
    city: "London",
    country: "United Kingdom",
    architecturalStyle: "Victorian Gothic Revival",
    periodEra: "1843–1859",
    confidence: 98,
    summary: "Rising 96 meters above the Houses of Parliament, this four-dial clock tower is the world's most famous acoustic timekeeper and a symbol of British parliamentary democracy.",
    coordinatesEstimate: { lat: 51.5007, lng: -0.1246 },
    arKeypoints: [
      { id: "pt-1", label: "Great Clock Four-Dial Faces", featureType: "clock", description: "Each 7-meter dial contains 324 pieces of pot opal glass framed in gilded cast iron.", x: 50, y: 38 },
      { id: "pt-2", label: "Lantern Spire & Ayrton Light", featureType: "spire", description: "Gilded roof housing the Ayrton Light, which illuminates whenever Parliament sits after dark.", x: 50, y: 14 },
      { id: "pt-3", label: "Great Bell (Big Ben)", featureType: "facade", description: "The 13.7-tonne bell tuned to E-natural, cracked in 1859, giving it its distinctive resonance.", x: 50, y: 48 },
    ],
    historicalTimeline: [
      { yearOrEra: "1834", event: "The Great Fire of Westminster", description: "Destruction of the old Palace of Westminster spurred a competition won by architect Charles Barry." },
      { yearOrEra: "1859", event: "The Clock Starts Ticking", description: "The Great Clock began keeping time on May 31, and the Great Bell first struck on July 11." },
      { yearOrEra: "2017–2022", event: "The Great Restoration", description: "Scaffolding cocooned the tower for 5 years for painstaking cleaning, re-glazing, and mechanical restoration." }
    ],
    architecturalSecrets: [
      "The pendulum is adjusted using pre-decimal British penny coins placed on its weight tray; adding one penny changes the clock speed by two-fifths of a second per day.",
      "The tower leans slightly to the northwest by approximately 0.28 degrees (43.5 cm) due to tunnel excavations over a century.",
      "Latin inscriptions at the base of each clock face read: 'DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM' (Lord keep safe our Queen Victoria the First)."
    ],
    culturalSignificance: "During World War II, Big Ben's chimes were broadcast live across Europe by the BBC as a reassuring beacon of hope and resilience against totalitarianism.",
    visitorTips: [
      "Stand across Westminster Bridge near St Thomas' Hospital for the premier postcard photograph.",
      "Listen at the top of the hour for the famous Westminster Quarters melody followed by the deep strikes of the Great Bell."
    ],
    narrationScript: "Welcome to Westminster in London. Towering above the River Thames stands the Elizabeth Tower, universally known by the nickname of its colossal 13.7-tonne bell, Big Ben. Designed by Charles Barry and Augustus Pugin in glorious Gothic Revival style, its four magnificent clock dials are illuminated by hundreds of opal glass panes. For over 160 years, its resonant chimes have marked historic moments, broadcasts of peace, and the cadence of London life.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Approaching Westminster Bridge, the 96-meter limestone and cast-iron tower reflects into the River Thames.", focusPointId: "pt-2" },
      { id: "chap-2", title: "Horological Genius", timestampHint: "0:25", script: "The double three-legged gravity escapement designed by Lord Grimthorpe isolates the pendulum from external wind pressure on the hands.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Cracked Great Bell", timestampHint: "0:50", script: "When the original bell cracked during testing in 1859, the hammer was turned and a smaller weight fitted, creating its signature timbre.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Freshly restored to its original Victorian Prussian blue and gilded glory, Big Ben strikes as the enduring pulse of Great Britain.", focusPointId: "pt-1" }
    ]
  },
  "fushimi inari": {
    name: "Fushimi Inari Taisha",
    localName: "伏見稲荷大社",
    city: "Kyoto",
    country: "Japan",
    architecturalStyle: "Shinto Shrine Architecture (Nagare-zukuri)",
    periodEra: "711 AD",
    confidence: 99,
    summary: "The head shrine of the kami Inari, famous for its mesmerizing mountain paths shaded by over 10,000 vibrant vermilion torii gates dedicated by merchants for prosperity.",
    coordinatesEstimate: { lat: 34.9671, lng: 135.7727 },
    arKeypoints: [
      { id: "pt-1", label: "Senbon Torii (Thousand Torii Corridor)", featureType: "arch", description: "Twin parallel tunnels of tightly packed red gates donated by worshippers since the Edo period.", x: 50, y: 55 },
      { id: "pt-2", label: "Fox Statue (Kitsune) with Jewel", featureType: "statue", description: "Sacred messenger of Inari holding a wish-granting jewel (tama) or granary key in its mouth.", x: 30, y: 40 },
      { id: "pt-3", label: "Romon Tower Gate", featureType: "entrance", description: "Monumental two-story red entry gate built in 1589 by warlord Toyotomi Hideyoshi.", x: 50, y: 25 },
    ],
    historicalTimeline: [
      { yearOrEra: "711 AD", event: "Shrine Inception", description: "Founded on the first day of the horse in the second month by the Hata clan on Mount Inari." },
      { yearOrEra: "1589", event: "Hideyoshi's Romon Gate", description: "Toyotomi Hideyoshi funded the grand entrance gate praying for the recovery of his sick mother." },
      { yearOrEra: "Edo Period", event: "Torii Gate Custom Emerges", description: "Worshippers started erecting red cedar torii gates to thank Inari for commercial success." }
    ],
    architecturalSecrets: [
      "The vermilion color of the torii gates is made from cinnabar pigment, historically believed to repel evil spirits and preserve wood.",
      "Each torii gate has the donor's company name and donation date carved into the back of the pillars in black kanji.",
      "The fox statues throughout the complex always hold symbolic items: jewels, keys to rice granaries, sheaves of grain, or scrolls."
    ],
    culturalSignificance: "As Japan's premier shrine dedicated to agriculture and business prosperity, Fushimi Inari encapsulates centuries of Shinto reverence for sacred mountains and natural spirits.",
    visitorTips: [
      "Hike past the Yotsutsuji intersection at sunset for panoramic views of southern Kyoto away from daytime crowds.",
      "Visit early in the morning before 8 AM or after twilight when lanterns cast mystical shadows through the red tunnels."
    ],
    narrationScript: "Welcome to Fushimi Inari Taisha at the base of sacred Mount Inari in Kyoto. Founded in 711 AD, this is the primary shrine of Inari, the Shinto spirit of rice, prosperity, and craftsmanship. Look down the mountain path: thousands of vivid vermilion torii gates form an endless vermilion tunnel known as Senbon Torii. Notice the stone fox statues guarding the sacred grounds, clutching keys to ancient rice granaries and jewels of divine wisdom.",
    chapters: [
      { id: "chap-1", title: "The Grand Arrival", timestampHint: "0:00", script: "Approaching through the Romon gate, vermilion pavilions welcome pilgrims to the sacred slopes of Mount Inari.", focusPointId: "pt-3" },
      { id: "chap-2", title: "Senbon Torii Corridor", timestampHint: "0:25", script: "Over 10,000 tightly spaced torii gates form an awe-inspiring corridor of light and sacred cinnabar red.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Messengers of the Kami", timestampHint: "0:50", script: "Stone kitsune foxes act as guardians, holding sacred scrolls and grain keys in their jaws.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Living Heritage", timestampHint: "1:15", script: "Thousands of modern merchants still climb these steps annually to give thanks for enduring prosperity.", focusPointId: "pt-1" }
    ]
  },
  "statue of liberty": {
    name: "Statue of Liberty",
    localName: "Liberty Enlightening the World",
    city: "New York City",
    country: "United States",
    architecturalStyle: "Neoclassical with Repoussé Copper & Steel Pylon",
    periodEra: "1886",
    confidence: 98,
    summary: "A colossal neoclassical sculpture on Liberty Island in New York Harbor, gifted by the people of France to the United States and engineered with an innovative internal iron armature designed by Gustave Eiffel.",
    coordinatesEstimate: { lat: 40.6892, lng: -74.0445 },
    arKeypoints: [
      { id: "pt-1", label: "Gilded Torch of Freedom", featureType: "statue", description: "Symbol of enlightenment guiding the path to liberty, illuminated in 24k gold leaf.", x: 62, y: 15 },
      { id: "pt-2", label: "Seven-Pointed Radiant Crown", featureType: "statue", description: "Representing the seven seas and continents of the world, with 25 viewing windows.", x: 50, y: 22 },
      { id: "pt-3", label: "Tabula Ansata (Law Tablet)", featureType: "relief", description: "Inscribed with the date of the US Declaration of Independence in Roman numerals: JULY IV MDCCLXXVI.", x: 38, y: 38 },
      { id: "pt-4", label: "Broken Shackles at Feet", featureType: "statue", description: "Symbolizes emancipation and the absolute end of servitude and oppression.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1865", event: "Conception by Laboulaye", description: "Édouard René de Laboulaye proposed a gift honoring the centennial of the US Declaration of Independence." },
      { yearOrEra: "1886", event: "Dedication Ceremony", description: "President Grover Cleveland dedicated the statue on October 28, 1886, with New York's first ticker-tape parade." },
      { yearOrEra: "1986", event: "Centennial Restoration", description: "Complete restoration replacing the rusted iron armature with stainless steel and regilding the torch flame." }
    ],
    architecturalSecrets: [
      "The copper skin is only 2.4 millimeters (3/32 of an inch) thick—the thickness of two pennies pressed together.",
      "Gustave Eiffel designed a flexible interior iron truss skeleton that sways up to 3 inches in high winds while remaining structurally sound.",
      "The green patina (verdigris) formed naturally from oxidation of copper with sea air by 1906, protecting the underlying metal from decay."
    ],
    culturalSignificance: "For over a century, Lady Liberty served as the first physical sight of hope and freedom for more than 12 million immigrants arriving by ship through New York Harbor.",
    visitorTips: [
      "Take the free Staten Island Ferry for stunning harbor views of the statue without paying for the private tour boat.",
      "Book crown access tickets 3 to 4 months in advance as only a limited number of climbers are permitted daily."
    ],
    narrationScript: "Standing proudly in New York Harbor, the Statue of Liberty is an international emblem of freedom and democracy. Sculpted by Frédéric-Auguste Bartholdi with internal structural engineering by Gustave Eiffel, Lady Liberty's copper robes conceal a pioneering pylon framework. Notice the radiant crown with its seven spikes, symbolizing the universal reach of freedom across seven seas and seven continents, while broken chains lie crushed beneath her sandals.",
    chapters: [
      { id: "chap-1", title: "The Harbor Beacon", timestampHint: "0:00", script: "Approaching by water, the 93-meter monument emerges against the Manhattan skyline.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Eiffel's Skeletal Feat", timestampHint: "0:25", script: "Gustave Eiffel engineered the hidden iron skeleton allowing the copper plates to expand and breathe with temperature shifts.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Emancipation & Law", timestampHint: "0:50", script: "Clutched in her left hand, the keystone tablet bears July 4th, 1776, proclaiming liberty under law.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Golden Door", timestampHint: "1:15", script: "Beneath her pedestal, Emma Lazarus's timeless verses welcomed generations of newcomers to the new world.", focusPointId: "pt-4" }
    ]
  },
  "machu picchu": {
    name: "Machu Picchu",
    localName: "Machu Pikchu (Old Peak)",
    city: "Cusco Region",
    country: "Peru",
    architecturalStyle: "Inca Classical Ashlar Stone Architecture",
    periodEra: "c. 1450",
    confidence: 99,
    summary: "A 15th-century Inca citadel situated on a mountain ridge 2,430 meters above sea level in the Andes, celebrated for its sophisticated dry-stone walls built without mortar.",
    coordinatesEstimate: { lat: -13.1631, lng: -72.5450 },
    arKeypoints: [
      { id: "pt-1", label: "Intihuatana (Hitching Post of the Sun)", featureType: "statue", description: "Carved bedrock sundial and astronomical clock used by Incan astronomers to predict equinoxes.", x: 42, y: 28 },
      { id: "pt-2", label: "Temple of the Sun (Torreón)", featureType: "facade", description: "Semi-circular tower with ashlar masonry aligned with the winter solstice sunrise.", x: 55, y: 45 },
      { id: "pt-3", label: "Agricultural Terraces", featureType: "entrance", description: "Hundreds of stone retaining terraces preventing erosion and creating microclimates for crops.", x: 30, y: 70 },
      { id: "pt-4", label: "Main Plaza & Sacred Rock", featureType: "facade", description: "Central ceremonial expanse mirroring the sacred topography of Mount Yanantin.", x: 50, y: 50 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1450", event: "Inca Estate Construction", description: "Commissioned during the reign of Emperor Pachacuti as an elite royal estate and religious sanctuary." },
      { yearOrEra: "c. 1572", event: "Citadel Abandonment", description: "Inhabitants deserted the complex during the Spanish conquest; lush cloud forest overgrowth concealed it." },
      { yearOrEra: "1911", event: "Hiram Bingham Expedition", description: "Brought to global academic attention by Yale historian Hiram Bingham with local Quechua guides." }
    ],
    architecturalSecrets: [
      "The granite stones were shaped using ashlar masonry where blocks fit together so tightly that a knife blade cannot pass between them, without mortar.",
      "Inca engineers placed stones on seismic pivot cushions; during earthquakes, stones bounce slightly and settle back into place instead of collapsing.",
      "Over 60% of Machu Picchu's construction sits underground in a drainage network of crushed granite preventing landslides."
    ],
    culturalSignificance: "Machu Picchu stands as an unparalleled achievement of human engineering harmonizing with sacred Andean mountains (apus) and celestial cycles.",
    visitorTips: [
      "Book Circuit 2 for the quintessential classic high-view terrace photo overlooking the entire stone city.",
      "Arrive early in the morning to watch mist rise from the Urubamba River valley over the sacred peak of Huayna Picchu."
    ],
    narrationScript: "Perched 2,400 meters high above the Urubamba River in Peru, welcome to Machu Picchu, the crown jewel of the Inca Empire. Built around 1450 under Emperor Pachacuti, this royal retreat was engineered with staggering precision. Notice the smooth ashlar granite blocks: shaped without iron tools and assembled without a single drop of mortar. Step toward the Intihuatana stone, an ancient astronomical clock where Incan priests ceremonially hitched the sun during winter solstices.",
    chapters: [
      { id: "chap-1", title: "Cloud Forest Sanctuary", timestampHint: "0:00", script: "Cradled between dramatic Andean peaks, the stone citadel emerges through swirling clouds.", focusPointId: "pt-3" },
      { id: "chap-2", title: "Seismic Stone Precision", timestampHint: "0:25", script: "Incan masons dry-fitted massive multi-ton stones capable of surviving violent earthquakes for centuries.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Solar Clock", timestampHint: "0:50", script: "The Intihuatana carved monolith tracks the path of Inti, the solar deity, across the Andean sky.", focusPointId: "pt-1" },
      { id: "chap-4", title: "Eternal Mountain Heritage", timestampHint: "1:15", script: "Preserved by natural seclusion, Machu Picchu remains a wonder of sacred harmony between civilization and earth.", focusPointId: "pt-4" }
    ]
  },
  "pyramids": {
    name: "Great Pyramid of Giza",
    localName: "Khufu's Horizon (Akhet Khufu)",
    city: "Giza / Cairo",
    country: "Egypt",
    architecturalStyle: "Ancient Egyptian Monumental Pyramid Architecture",
    periodEra: "c. 2580–2560 BC",
    confidence: 99,
    summary: "The oldest and only substantially intact monument of the Seven Wonders of the Ancient World, built over 4,500 years ago as the monumental tomb for Pharaoh Khufu.",
    coordinatesEstimate: { lat: 29.9792, lng: 31.1342 },
    arKeypoints: [
      { id: "pt-1", label: "Apex & Missing Pyramidian", featureType: "spire", description: "Original capstone missing, revealing the flattened summit 138 meters above the desert.", x: 50, y: 15 },
      { id: "pt-2", label: "Grand Gallery & King's Chamber", featureType: "entrance", description: "Corbelled stone passageway leading deep into the heart to the granite sarcophagus chamber.", x: 48, y: 45 },
      { id: "pt-3", label: "Limestone Casing Remnants", featureType: "facade", description: "Polished Tura limestone that once caused the pyramid to gleam like a mirror under the sun.", x: 25, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 2560 BC", event: "Completion for Pharaoh Khufu", description: "Completed over a 20-year span using an estimated 2.3 million quarried limestone and granite blocks." },
      { yearOrEra: "c. 1303 AD", event: "Earthquake & Casing Stripping", description: "A major earthquake loosened the smooth outer Tura limestone casing stones, later repurposed for Cairo mosques." },
      { yearOrEra: "1979", event: "UNESCO Inscription", description: "Inscribed on the World Heritage List along with the Giza Necropolis and Memphis." }
    ],
    architecturalSecrets: [
      "The four base edges are aligned with true cardinal directions to within an accuracy of four-sixtieths of a degree.",
      "The pyramid is not four-sided, but subtly eight-sided with concave indentations down the center of each face.",
      "Massive 50-ton granite relieving beams above the King's Chamber protect the tomb from the weight of millions of tons of limestone above."
    ],
    culturalSignificance: "Representing the pinnacle of Old Kingdom Egypt's astronomical precision and labor mobilization, the pyramids materialized the pharaoh's ascent into the immortal stars.",
    visitorTips: [
      "View the panorama from the desert plateau dunes 1 kilometer southwest to frame all three major pyramids together.",
      "Visit in the morning before 10 AM to explore before the desert heat intensifies."
    ],
    narrationScript: "Standing before the Great Pyramid of Giza on the edge of the Sahara, you are gazing upon over four millennia of human history. Built around 2560 BC for Pharaoh Khufu, this monument was the tallest man-made structure on Earth for over 3,800 years. Originally coated in polished white Tura limestone that reflected the desert sun like a radiant star, its 2.3 million blocks were aligned with astonishing mathematical precision to true north.",
    chapters: [
      { id: "chap-1", title: "Monument to Eternity", timestampHint: "0:00", script: "Rising from the golden sands of Giza, the Great Pyramid commands the horizon.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Engineering the Impossible", timestampHint: "0:25", script: "Over two million limestone blocks, weighing on average two tons each, were placed with sub-millimeter precision.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The King's Inner Sanctum", timestampHint: "0:50", script: "Deep inside, the Grand Gallery ascends steeply to the King's Chamber, carved entirely of red Aswan granite.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Eternal Legacy", timestampHint: "1:15", script: "As the ancient proverb goes: Man fears Time, but Time fears the Pyramids.", focusPointId: "pt-1" }
    ]
  }
};

/**
 * Finds the most relevant dossier based on any landmark name, city, or query.
 * Returns null if no match is found (unless fallbackToDefault is true).
 */
/**
 * Normalized lookup that finds a dossier ONLY if the landmark name genuinely matches.
 * Strictly prevents false matches on generic words (like "tower", "temple", "bridge")
 * or broad city/country names, ensuring user pictures are never replaced with wrong landmarks.
 */
export function findLandmarkDossier(query?: string): FallbackLandmarkData | null {
  if (!query) return null;
  const norm = query.toLowerCase().replace(/[^a-z0-9 ]/g, " ").trim();
  if (!norm) return null;

  // Normalized key aliases
  const canonicalAliases: Record<string, string> = {
    "eiffel tower": "eiffel tower",
    "tour eiffel": "eiffel tower",
    "colosseum": "colosseum",
    "colosseo": "colosseum",
    "flavian amphitheatre": "colosseum",
    "taj mahal": "taj mahal",
    "statue of liberty": "statue of liberty",
    "liberty enlightening the world": "statue of liberty",
    "great pyramid of giza": "great pyramid of giza",
    "pyramid of khufu": "great pyramid of giza",
    "senso ji": "senso-ji temple",
    "sensoji": "senso-ji temple",
    "senso-ji temple": "senso-ji temple",
    "sensoji temple": "senso-ji temple",
    "sydney opera house": "sydney opera house",
    "sydney opera": "sydney opera house",
    "sagrada familia": "sagrada familia",
    "basilica de la sagrada familia": "sagrada familia",
    ...RELIGIOUS_ALIASES,
  };

  // Combined dossiers map
  const allDossiers: Record<string, FallbackLandmarkData> = {
    ...KNOWN_LANDMARK_DOSSIERS,
    ...RELIGIOUS_STRUCTURE_DOSSIERS,
  };

  // Direct alias check
  for (const [alias, dossierKey] of Object.entries(canonicalAliases)) {
    if (norm === alias || norm.startsWith(alias) || norm.includes(alias)) {
      if (allDossiers[dossierKey]) {
        return allDossiers[dossierKey];
      }
    }
  }

  // Exact match against primary name or localName in all dossiers
  for (const [key, dossier] of Object.entries(allDossiers)) {
    const dName = dossier.name.toLowerCase();
    const dLocal = (dossier.localName || "").toLowerCase();
    if (norm === key || norm === dName || (dLocal && norm === dLocal)) {
      return dossier;
    }
  }

  return null;
}

/**
 * Gets landmark dossier only if an authentic match exists; otherwise returns null
 * so callers can dynamically generate landmark-specific context without forcing wrong monuments.
 */
export function getLandmarkDossier(query?: string): FallbackLandmarkData | null {
  return findLandmarkDossier(query);
}

