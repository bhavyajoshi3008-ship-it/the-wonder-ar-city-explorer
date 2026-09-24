import { FallbackLandmarkData } from "./landmarkDossiers";

/**
 * Authoritative Backend Knowledge Base of Global Religious Structures
 * Encompassing sacred architectural monuments across all major world religions:
 * - Hinduism (Mandirs, Nagara, Dravidian, Kalinga, Hoysala, Vesara, Balinese Pura, Khmer)
 * - Islam (Mosques, Masjids, Minarets, Qubbas, Ottoman, Mughal, Safavid, Moorish, Sudano-Sahelian)
 * - Christianity (Cathedrals, Basilicas, Abbeys, Monasteries - Gothic, Byzantine, Baroque, Romanesque, Orthodox)
 * - Buddhism (Stupas, Pagodas, Viharas, Wats, Dzongs, Tibetan Gompas)
 * - Sikhism (Gurdwaras, Darbar Sahibs, Takhts, Sarovars, Nishan Sahib spires)
 * - Judaism (Synagogues, Batei Knesset, Moorish Revival, Ashkenazi, Sephardic, Western Wall)
 * - Jainism (Derasars, Basadis, Tirthas, Dilwara and Ranakpur marble filigree)
 * - Shinto (Jinja, Torii gates, Honden, Haiden, Shimenawa)
 * - Taoism / Chinese Folk Religion (Daoguan, Temple of Heaven, Wudang Mountain sanctums)
 * - Baháʼí Faith (Mashriqu'l-Adhkár, Lotus Temple, Shrine of the Báb)
 * - Zoroastrianism (Atash Behram, Agiary, Eternal Fire Temples)
 * - Ancient & Indigenous Sacred Architecture (Egyptian Temples, Mayan/Incan Pyramids, Ziggurats, Megaliths)
 */

export const RELIGIOUS_STRUCTURE_DOSSIERS: Record<string, FallbackLandmarkData> = {
  // ==========================================
  // HINDUISM
  // ==========================================
  "angkor wat": {
    name: "Angkor Wat",
    localName: "អังกវត្ត",
    city: "Siem Reap",
    country: "Cambodia",
    architecturalStyle: "Khmer Temple-Mountain & Galleried Architecture",
    periodEra: "Early 12th Century (c. 1113–1150 AD, Reign of Suryavarman II)",
    confidence: 99,
    summary: "The world's largest religious monument, Angkor Wat was conceived as a symbolic terrestrial model of Mount Meru, adorned with extensive bas-relief friezes depicting the Churning of the Ocean of Milk and epic Vedic lore.",
    coordinatesEstimate: { lat: 13.4125, lng: 103.867 },
    arKeypoints: [
      { id: "pt-1", label: "Central Quincunx Sanctuary Tower", featureType: "spire", description: "Rising 65m above the ground, this lotus-bud tower embodies the sacred apex of Mount Meru.", x: 50, y: 22 },
      { id: "pt-2", label: "Bas-Relief Churning Gallery", featureType: "relief", description: "Intricate 800-meter sandstoned frieze depicting 88 devas and 92 asuras churning the cosmic ocean.", x: 42, y: 58 },
      { id: "pt-3", label: "Moat & Causeway Gateway", featureType: "entrance", description: "Massive 190m-wide square moat symbolizing the cosmic ocean enclosing Mount Meru.", x: 50, y: 82 },
      { id: "pt-4", label: "Corner Prasat Turret", featureType: "facade", description: "Sandstone prasat tower stabilizing the temple's outer tier and equinox solar alignments.", x: 74, y: 38 }
    ],
    historicalTimeline: [
      { yearOrEra: "1113–1150 AD", event: "Consecration by Suryavarman II", description: "King Suryavarman II commissioned Angkor Wat as his state temple and funerary shrine dedicated to Lord Vishnu." },
      { yearOrEra: "Late 13th Century", event: "Theravada Buddhist Transformation", description: "Gradually transitioned into a Buddhist sanctuary while preserving its original Hindu stone cosmology." },
      { yearOrEra: "1992", event: "UNESCO World Heritage Inscription", description: "Enscribed as a World Heritage site under international conservation efforts following decades of conflict." }
    ],
    architecturalSecrets: [
      "Angkor Wat is oriented to the west rather than the east, aligning with the setting sun on equinox days across the central tower tip.",
      "The entire structure sits on an engineered sandy hydraulic foundation stabilized by the seasonal water pressure of its surrounding moat.",
      "Over 3,000 distinct devatas (celestial apsara dancers) are individually sculpted across the sandstone walls, each with unique hairstyles and ornaments."
    ],
    culturalSignificance: "Angkor Wat represents the absolute zenith of Khmer classical civilization, symbolizing national identity on Cambodia's flag and standing as one of humanity's greatest devotional stone monuments.",
    visitorTips: [
      "Arrive at the western reflecting pool before 5:30 AM to capture the iconic sunrise silhouetting the five lotus towers.",
      "Bring shoulders and knees covered with respectful attire to ascend to the Bakan sacred central sanctum.",
      "Inspect the northern and southern bas-relief galleries in the late afternoon when raking golden light illuminates the stone carvings."
    ],
    narrationScript: "Welcome to Angkor Wat, the crown jewel of the Khmer Empire and the largest religious monument on Earth. Conceived by King Suryavarman II in the 12th century, this immense temple-mountain is a stone microcosm of the universe. Its five central lotus towers mirror the sacred peaks of Mount Meru, surrounded by a cosmic ocean of deep water moats. Look at the balance of sandstone symmetry before you: every galleried tier and delicate apsara carving was chiseled by hand to bridge heaven and Earth.",
    chapters: [
      { id: "chap-1", title: "Arrival at the Cosmic Ocean", timestampHint: "0:00", script: "Approaching via the sandstone causeway across the massive moat, the scale of Angkor Wat's geometric symmetry dominates the horizon.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Celestial Lotus Towers", timestampHint: "0:25", script: "The central quincunx of five soaring towers captures the sun's trajectory during the spring and autumn equinoxes.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Stone Epics in Bas-Relief", timestampHint: "0:50", script: "Carved into nearly a kilometer of galleries, stone devas and asuras wage cosmic battles for immortality.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Living Spiritual Sanctuary", timestampHint: "1:15", script: "From its Hindu origins to centuries of Buddhist veneration, Angkor Wat remains an enduring sanctuary of human devotion.", focusPointId: "pt-4" }
    ]
  },

  "prambanan": {
    name: "Prambanan Temple",
    localName: "Candi Prambanan / Roro Jonggrang",
    city: "Yogyakarta",
    country: "Indonesia",
    architecturalStyle: "Classical Hindu Javanese Architecture (Mataram Kingdom)",
    periodEra: "c. 850 AD (Reign of Rakai Pikatan)",
    confidence: 98,
    summary: "Indonesia's grandest Hindu temple compound, Prambanan is dedicated to the Trimurti—Shiva the Destroyer, Brahma the Creator, and Vishnu the Preserver—featuring soaring 47-meter tall stepped spires.",
    coordinatesEstimate: { lat: -7.752, lng: 110.4914 },
    arKeypoints: [
      { id: "pt-1", label: "Shiva Mahadeva Central Spire", featureType: "spire", description: "47-meter high central tower housing the sanctum of Lord Shiva and Ganesha.", x: 50, y: 20 },
      { id: "pt-2", label: "Ramayana Narrative Relief Frieze", featureType: "relief", description: "Continuous stone carvings illustrating the epic tale of Rama, Sita, and Hanuman around the balustrade.", x: 44, y: 62 },
      { id: "pt-3", label: "Pervara Guardian Shrines", featureType: "arch", description: "Stepped terrace complex originally containing 224 surrounding auxiliary guardian shrines.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "850 AD", event: "Construction by Rakai Pikatan", description: "Built by the Sanjaya Dynasty to celebrate the return of Hindu rule to Central Java." },
      { yearOrEra: "c. 930 AD", event: "Abandonment after Volcanic Eruption", description: "Fell into ruin following major volcanic eruptions of Mount Merapi and political shifts to East Java." },
      { yearOrEra: "1991", event: "UNESCO World Heritage Recognition", description: "Designated a UNESCO World Heritage Site following extensive Dutch and Indonesian stone reconstruction." }
    ],
    architecturalSecrets: [
      "The layout follows the sacred Vastu Mandala with a concentric three-zone hierarchy: Bhurloka, Bhuvarloka, and Swarloka.",
      "The subterranean base of each temple was anchored by stone caskets called Pripih containing precious gems and sacred metals."
    ],
    culturalSignificance: "The supreme masterpiece of Indonesian Hindu architectural heritage, renowned for dramatic nightly performances of the Ramayana Ballet against the floodlit stone towers.",
    visitorTips: [
      "Visit in late afternoon to witness the sunset glow against the volcanic andesite stone.",
      "Attend the open-air Ramayana Ballet performance across the Opak River."
    ],
    narrationScript: "Rising majestically from the plains of Central Java, Prambanan is the pinnacle of ancient Indonesian Hindu architecture. Erected in the 9th century, its towering spires honor the Trimurti. Stand before the central 47-meter temple of Shiva Mahadeva, where detailed Ramayana stone carvings wrap along the terraces.",
    chapters: [
      { id: "chap-1", title: "The Trimurti Spire", timestampHint: "0:00", script: "Soaring into the tropical sky, Shiva's central temple exemplifies vertical Javanese stone engineering.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Epics in Volcanic Stone", timestampHint: "0:30", script: "Winding around the gallery balustrades, stone reliefs recount Rama and Lakshmana's quest.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Resurrection of Ruins", timestampHint: "1:00", script: "Restored block by block after centuries buried beneath volcanic ash, Prambanan stands triumphant.", focusPointId: "pt-3" }
    ]
  },

  "brihadisvara temple": {
    name: "Brihadisvara Temple",
    localName: "பெருவுடையார் கோயில் (Peruvudaiyar Koyil)",
    city: "Thanjavur",
    country: "India",
    architecturalStyle: "Pure Chola Dravidian Architecture",
    periodEra: "1003–1010 AD (Reign of Rajaraja Chola I)",
    confidence: 99,
    summary: "A colossal granitic marvel of South India, built by Emperor Rajaraja I of the Chola Dynasty, featuring a 66-meter Vimana crowned by an 81-ton monolithic granite Kumbam apex.",
    coordinatesEstimate: { lat: 10.7828, lng: 79.1318 },
    arKeypoints: [
      { id: "pt-1", label: "81-Ton Monolithic Granite Kumbam", featureType: "dome", description: "Carved from a single stone block and hauled atop the 66m tower via a 6-km inclined earthen ramp.", x: 50, y: 14 },
      { id: "pt-2", label: "Pyramidal 16-Tier Vimana", featureType: "spire", description: "Massive hollow stepped granite pyramid engineered without binding mortar using interlock joints.", x: 50, y: 42 },
      { id: "pt-3", label: "Monolithic Nandi Pavilion", featureType: "statue", description: "Sacred bull carved from a single 25-ton block of granite facing the inner sanctum lingam.", x: 65, y: 76 },
      { id: "pt-4", label: "Dravidian Gopuram Gateway", featureType: "entrance", description: "Monumental gateway embellished with Guardian Dwarapalakas and Chola military inscriptions.", x: 30, y: 68 }
    ],
    historicalTimeline: [
      { yearOrEra: "1010 AD", event: "Consecration by Rajaraja Chola I", description: "Completed in precisely 275 days and consecrated with golden Kalashams on the 25th regnal year of Rajaraja I." },
      { yearOrEra: "1025 AD", event: "Chola Naval Empire Center", description: "Served as the treasury and imperial command post for the maritime Chola Empire reaching Southeast Asia." },
      { yearOrEra: "1987", event: "UNESCO Great Living Chola Temples", description: "Inscribed as part of the UNESCO World Heritage cluster honoring Chola architectural mastery." }
    ],
    architecturalSecrets: [
      "The temple is made of 130,000 tons of granite in a region with no natural granite quarries within 60 kilometers.",
      "The octagonal 81-ton capstone casts a shadow that does not fall on the ground at solar noon during equinox seasons."
    ],
    culturalSignificance: "The supreme jewel of Dravidian temple design, Brihadisvara remains an active epicenter of classical Bharatanatyam dance, Carnatic music, and living Vedic rituals.",
    visitorTips: [
      "Visit at sunset when the raw granite turns from burnt ochre to deep radiant gold.",
      "Inspect the inner ambulatory corridor for 11th-century fresco paintings depicting Lord Shiva."
    ],
    narrationScript: "Standing before the Big Temple of Thanjavur, you witness the crowning triumph of the Chola maritime empire. Completed in 1010 AD by Emperor Rajaraja I, this entire sanctuary was hewn from 130,000 tons of granite. The 66-meter Vimana towers over the landscape, capped by an astonishing 81-ton single stone dome.",
    chapters: [
      { id: "chap-1", title: "The 81-Ton Apex Mystery", timestampHint: "0:00", script: "Engineers hauled this immense 81-tonne granite capstone up a 6-kilometer earthen ramp to complete the spire.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Granite Without Mortar", timestampHint: "0:25", script: "Every granite slab was carved to interlock with microscopic precision, withstanding a millennium of earthquakes.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Guardian Nandi", timestampHint: "0:50", script: "Seated in the courtyard, the monolithic 25-ton Nandi bull keeps eternal vigil before the sacred sanctum.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Imperial Chola Legacy", timestampHint: "1:15", script: "Inscriptions carved along the foundation chronicle thousands of temple dancers, musicians, and jewelers.", focusPointId: "pt-4" }
    ]
  },

  "meenakshi temple": {
    name: "Meenakshi Amman Temple",
    localName: "மீனாட்சி சுந்தரேஸ்வரர் கோயில்",
    city: "Madurai",
    country: "India",
    architecturalStyle: "Late Pandyan & Nayak Dravidian Architecture",
    periodEra: "c. 1623–1655 AD (Rebuilt under Thirumalai Nayak)",
    confidence: 99,
    summary: "The vibrant spiritual soul of Madurai, this historic temple complex features 14 monumental Gopuram towers adorned with thousands of polychrome mythological stucco figures and the sacred Hall of Thousand Pillars.",
    coordinatesEstimate: { lat: 9.9195, lng: 78.1193 },
    arKeypoints: [
      { id: "pt-1", label: "South Gopuram Pinnacle (52m)", featureType: "spire", description: "The tallest of the 14 gateways, rising 52 meters with 1,511 polychrome stucco sculptures.", x: 50, y: 16 },
      { id: "pt-2", label: "Golden Lotus Pond (Porthamarai Kulam)", featureType: "relief", description: "Sacred water reservoir where ancient Tamil Sangam literary poets tested literary manuscripts.", x: 50, y: 64 },
      { id: "pt-3", label: "Hall of 1000 Pillars (Aayiram Kaal Mandapam)", featureType: "column", description: "Masterpiece carved from granite depicting Yali mythological beasts and musical stone columns.", x: 70, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 6th Century AD", event: "Early Sangam Roots", description: "Mentioned extensively in ancient classical Tamil Sangam poetry as the spiritual capital of Pandya kings." },
      { yearOrEra: "14th Century", event: "Raid and Desecration", description: "Plundered by the Delhi Sultanate general Malik Kafur before being reclaimed by the Vijayanagara Empire." },
      { yearOrEra: "1560–1655 AD", event: "Nayak Golden Age Reconstruction", description: "Ruler Vishwanatha Nayak and King Thirumalai Nayak rebuilt the grand towers and pillared halls." }
    ],
    architecturalSecrets: [
      "Every 12 years during the Kumbhabhishekam festival, all 33,000 stucco sculptures across the 14 towers are hand-repaired and repainted with mineral pigments.",
      "The musical pillars in the outer corridors produce distinct notes of the Indian classical saptaswara scale when tapped."
    ],
    culturalSignificance: "One of the few ancient major Indian temples where the primary deity is the Goddess (Meenakshi, an avatar of Parvati) rather than a male deity, symbolizing feminine divine primacy.",
    visitorTips: [
      "Attend the evening procession ceremony (at 9:00 PM) when the idol of Lord Sundareswarar is carried in a silver palanquin to Meenakshi's shrine.",
      "Strict barefoot policy and dress code (shoulders and knees covered; no leather belts or bags inside)."
    ],
    narrationScript: "Step into the sensory wonder of the Meenakshi Amman Temple in Madurai, a living sacred city that has pulsed with devotional life for over two millennia. Look skyward at the 14 monumental Gopuram gateways, teeming with thousands of vibrant polychrome sculptures of deities, demons, and celestial beings. As incense drifts across the Golden Lotus tank, explore the Hall of a Thousand Pillars, where master stonecarvers coaxed musical tones from solid granite.",
    chapters: [
      { id: "chap-1", title: "The Soaring Polychrome Gopurams", timestampHint: "0:00", script: "Rising 52 meters into the Tamil sky, the South Tower dazzles with over 1,500 hand-sculpted mythological figures.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Sacred Golden Lotus Pond", timestampHint: "0:25", script: "For centuries, ancient Tamil poets gathered beside this sacred water to test their poetic verse.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Granite Symphony of 1000 Pillars", timestampHint: "0:50", script: "In the 985-pillar hall, stone columns carved with rearing mythical Yalis resonate like bells.", focusPointId: "pt-3" }
    ]
  },

  "kashi vishwanath": {
    name: "Kashi Vishwanath Temple",
    localName: "श्री काशी विश्वनाथ मंदिर",
    city: "Varanasi",
    country: "India",
    architecturalStyle: "Nagara Hindu Temple Architecture",
    periodEra: "1780 AD (Rebuilt by Maharani Ahilyabai Holkar)",
    confidence: 98,
    summary: "Standing on the holy western bank of the Ganges River, Kashi Vishwanath is one of the twelve sacred Jyotirlingas of Lord Shiva and the preeminent pilgrimage heart of Hinduism.",
    coordinatesEstimate: { lat: 25.3109, lng: 83.0107 },
    arKeypoints: [
      { id: "pt-1", label: "800kg Gold-Plated Shikhara Spire", featureType: "spire", description: "Donated by Maharaja Ranjit Singh of Punjab in 1835, gleaming over the sanctum.", x: 50, y: 22 },
      { id: "pt-2", label: "Jnana Vapi Sacred Well", featureType: "arch", description: "Historic 'Well of Wisdom' where the sacred Shiva Jyotirlinga was sheltered during medieval invasions.", x: 42, y: 65 },
      { id: "pt-3", label: "Vishwanath Dham Corridor", featureType: "entrance", description: "Modern ceremonial corridor linking the temple complex directly to the ghats of Mother Ganga.", x: 62, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Eternal City Mention in Skanda Purana", description: "Varanasi recognized as the abode of Shiva since ancient Vedic literature." },
      { yearOrEra: "1780 AD", event: "Ahilyabai Holkar Reconstruction", description: "The brave queen of Malwa, Maharani Ahilyabai Holkar, rebuilt the temple following centuries of destruction." },
      { yearOrEra: "1835 AD", event: "Maharaja Ranjit Singh Gold Donation", description: "Sikh Emperor Maharaja Ranjit Singh plated the two main shikharas with one tonne of pure gold." }
    ],
    architecturalSecrets: [
      "The temple spire's golden copper plating reflects sunrise across the Ganges, calibrated to shine over the Manikarnika Ghat.",
      "The temple is positioned on the sacred Panchakroshi pilgrimage route that circumambulates the cosmic boundary of Kashi."
    ],
    culturalSignificance: "In Hindu belief, a single darshan of the Kashi Vishwanath Jyotirlinga and a dip in the Ganges liberates the human soul from the cycle of rebirth (Moksha).",
    visitorTips: [
      "Experience the early morning Mangala Aarti (3:00 AM) or evening Sapta Rishi Aarti for sacred Vedic chants.",
      "Access the temple via the grand riverfront corridor directly from Lalita Ghat."
    ],
    narrationScript: "Welcome to Kashi Vishwanath, the golden spiritual beacon of Varanasi, the world's oldest living city. Rebuilt by the visionary queen Ahilyabai Holkar and crowned with shimmering gold by Maharaja Ranjit Singh, this sanctuary houses one of the 12 sacred Jyotirlingas. Here, on the steps of the sacred Ganga, millions have sought transcendence for thousands of years.",
    chapters: [
      { id: "chap-1", title: "The Golden Shikhara of Shiva", timestampHint: "0:00", script: "Gleaming with nearly a ton of gold, the temple shikhara stands as a beacon of eternal spiritual liberation.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Resilience Through Centuries", timestampHint: "0:30", script: "Reconstructed repeatedly across history, Kashi Vishwanath stands as a testament to cultural resilience.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Gateway to the Sacred Ganga", timestampHint: "1:00", script: "The new riverfront corridor unites the divine sanctum directly with the living waters of the Ganges.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // ISLAM
  // ==========================================
  "masjid al-haram": {
    name: "Masjid al-Haram (The Great Mosque of Mecca)",
    localName: "المسجد الحرام",
    city: "Mecca",
    country: "Saudi Arabia",
    architecturalStyle: "Monumental Islamic Sacred Architecture",
    periodEra: "Founded in Antiquity (Continuous Royal Expansions)",
    confidence: 100,
    summary: "The holiest site in Islam, Masjid al-Haram encloses the Kaaba toward which 1.9 billion Muslims pray five times daily, welcoming millions during the annual Hajj pilgrimage.",
    coordinatesEstimate: { lat: 21.4225, lng: 39.8262 },
    arKeypoints: [
      { id: "pt-1", label: "The Holy Kaaba (Bayt Allah)", featureType: "facade", description: "The granite cuboid structure draped in black silk Kiswah, housing the Black Stone (al-Hajar al-Aswad).", x: 50, y: 52 },
      { id: "pt-2", label: "King Abdullah Gate & Minarets (89m)", featureType: "spire", description: "Soaring limestone and marble minarets equipped with green crescent beacons.", x: 26, y: 18 },
      { id: "pt-3", label: "Mataf Circumambulation Floor", featureType: "entrance", description: "Paved with Greek Thassos snow-white marble engineered to stay cool even under scorching 50°C desert heat.", x: 50, y: 78 },
      { id: "pt-4", label: "Maqam Ibrahim Shrine", featureType: "relief", description: "Gilded crystal hexagonal dome preserving the sacred stone bearing the footprint impression of Prophet Ibrahim.", x: 62, y: 56 }
    ],
    historicalTimeline: [
      { yearOrEra: "Prophetic Era", event: "Restoration by Prophet Muhammad (PBUH)", description: "The Prophet cleared the Kaaba of idols in 630 AD, establishing monotheistic worship." },
      { yearOrEra: "Umayyad & Abbasid Eras", event: "First Arcaded Cloisters", description: "Caliphs expanded the open courtyard with marble colonnades and raised the first minarets." },
      { yearOrEra: "Modern Era", event: "Grand Saudi Expansions", description: "Tripled the mosque capacity to accommodate over 4 million worshippers simultaneously with advanced multi-tier skywalks." }
    ],
    architecturalSecrets: [
      "The snow-white Thassos marble quarried from Greece absorbs zero moisture and reflects thermal infrared radiation, remaining ice-cold to barefoot pilgrims.",
      "The black Kiswah covering the Kaaba is woven from 670 kilograms of pure raw silk and embroidered with 120 kilograms of gold and 100 kilograms of silver threads."
    ],
    culturalSignificance: "The central spiritual axis (Qibla) of the Islamic world, where believers unite in concentric circles of Tawaf around the Kaaba in total humility and universal equality.",
    visitorTips: [
      "The holy sanctuary is open exclusively to Muslim visitors in accordance with Islamic tradition.",
      "Pilgrims perform Tawaf across multiple air-conditioned levels including dedicated elevated rings for wheelchair mobility."
    ],
    narrationScript: "You are gazing upon Masjid al-Haram in Mecca, the spiritual heart of the Islamic world. At its center stands the Kaaba—the ancient House of God rebuilt by Prophet Ibrahim and Ismail. Look across the vast white marble Mataf, where millions of worshippers from every nation on Earth circle in unified prayer. The 89-meter minarets rise toward the sky, framing a site of profound peace, equality, and devotion.",
    chapters: [
      { id: "chap-1", title: "The Holy Kaaba at the Center", timestampHint: "0:00", script: "Draped in gold-embroidered black silk, the Kaaba stands as the unified direction of prayer for Muslims across the globe.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Miracle of Cool Marble", timestampHint: "0:30", script: "Engineered with specialized Thassos marble, the vast prayer plaza remains cool beneath the blazing Arabian sun.", focusPointId: "pt-3" },
      { id: "chap-3", title: "Towering Minarets of Peace", timestampHint: "1:00", script: "Thirteen monumental minarets crown the sanctuary gates, broadcasting the call to prayer across Mecca's hills.", focusPointId: "pt-2" }
    ]
  },

  "al-masjid an-nabawi": {
    name: "Al-Masjid an-Nabawi (The Prophet's Mosque)",
    localName: "المسجد النبوي",
    city: "Medina",
    country: "Saudi Arabia",
    architecturalStyle: "Islamic Classical & Modern Royal Arcaded Architecture",
    periodEra: "622 AD (Originally built by Prophet Muhammad)",
    confidence: 100,
    summary: "The second holiest site in Islam, established by Prophet Muhammad (PBUH) in Medina, renowned for its iconic Green Dome atop the Prophet's tomb and 250 giant automated folding umbrella canopies.",
    coordinatesEstimate: { lat: 24.4672, lng: 39.6108 },
    arKeypoints: [
      { id: "pt-1", label: "The Iconic Green Dome (Al-Qubbah Al-Khadra)", featureType: "dome", description: "Erected above the sacred chamber of Prophet Muhammad (PBUH) and caliphs Abu Bakr and Umar.", x: 50, y: 26 },
      { id: "pt-2", label: "Rawdah ash-Sharifah (Garden of Paradise)", featureType: "facade", description: "Sacred carpeted area between the Prophet's pulpit and house, described as a garden of Jannah.", x: 45, y: 58 },
      { id: "pt-3", label: "Automated Shading Umbrellas", featureType: "arch", description: "250 monumental Teflon folding canopies that bloom each morning to cool the vast courtyards.", x: 70, y: 38 }
    ],
    historicalTimeline: [
      { yearOrEra: "622 AD", event: "Original Mud-Brick Sanctuary", description: "Constructed with palm trunks and mud-brick alongside the Prophet's living quarters following the Hijrah." },
      { yearOrEra: "1818 AD", event: "Ottoman Green Dome Construction", description: "Sultan Mahmud II erected the current wooden dome structure, painted green in 1837 under Sultan Abdulmejid." },
      { yearOrEra: "Late 20th Century", event: "Modern Saudi Expansion", description: "Expanded to house over 1,000,000 worshippers with computerized retractable domes and massive umbrella plazas." }
    ],
    architecturalSecrets: [
      "The 250 giant mechanical umbrella canopies open in synchronized ballet over 3 minutes each morning, equipped with ultrasonic misting nozzles that drop temperature by up to 10°C.",
      "The 27 sliding dome units atop the prayer hall roof roll automatically on tracks to provide natural ventilation."
    ],
    culturalSignificance: "The city that welcomed the Prophet during the Hijra, representing brotherhood, sanctuary, and spiritual peace.",
    visitorTips: [
      "Access to the sacred Rawdah requires a scheduled reservation via the official Nusuk platform.",
      "Visit the vast courtyards during dusk when the umbrellas fold closed to reveal the glowing minarets and night sky."
    ],
    narrationScript: "Welcome to Al-Masjid an-Nabawi in Medina, the beloved Prophet's Mosque. First raised from humble palm trunks in 622 AD, this sanctuary has blossomed into one of the grandest architectural wonders of the modern world. Look up at the celebrated Green Dome, sheltering the final resting place of the Prophet. Around you, hundreds of giant mechanical umbrellas open like petals across marble courtyards, creating an atmosphere of deep tranquility.",
    chapters: [
      { id: "chap-1", title: "The Beloved Green Dome", timestampHint: "0:00", script: "Crowned in vibrant green against the desert sky, the dome marks the heart of Medina's spiritual sanctuary.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Rawdah of Paradise", timestampHint: "0:30", script: "Beneath golden Ottoman inscriptions lies the Rawdah, a place of prayer cherished as a piece of paradise on Earth.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Architecture in Motion", timestampHint: "1:00", script: "Giant folding Teflon umbrellas and retractable roof domes transform the architecture throughout the desert day.", focusPointId: "pt-3" }
    ]
  },

  "sheikh zayed grand mosque": {
    name: "Sheikh Zayed Grand Mosque",
    localName: "جامع الشيخ زايد الكبير",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    architecturalStyle: "Contemporary Neo-Islamic & Mughal-Moorish Architecture",
    periodEra: "1996–2007 (Commissioned by Sheikh Zayed bin Sultan Al Nahyan)",
    confidence: 99,
    summary: "A modern architectural masterpiece uniting world cultures through 82 pure Macedonian marble domes, 1,096 hand-carved columns inlaid with semi-precious stones, and the world's largest hand-knotted carpet.",
    coordinatesEstimate: { lat: 24.4128, lng: 54.4749 },
    arKeypoints: [
      { id: "pt-1", label: "Grand Central Dome & Minarets (107m)", featureType: "dome", description: "The largest of 82 domes, clad in pure white Sivec marble with floral gold finials.", x: 50, y: 18 },
      { id: "pt-2", label: "World's Largest Hand-Knotted Carpet", featureType: "relief", description: "5,627-square-meter wool carpet woven over two years by 1,200 artisans in Iran.", x: 50, y: 68 },
      { id: "pt-3", label: "Floral Pietra Dura Inlaid Colonnades", featureType: "column", description: "Columns inlaid with lapis lazuli, mother of pearl, amethyst, and red agate in botanical motifs.", x: 28, y: 52 },
      { id: "pt-4", label: "Reflective Water Basins", featureType: "arch", description: "Mirror pools reflecting the glowing white and gold arcades under dynamic lunar illumination.", x: 50, y: 84 }
    ],
    historicalTimeline: [
      { yearOrEra: "1996", event: "Vision of Sheikh Zayed", description: "Conceived by the founding father of the UAE as a cultural monument celebrating world architectural diversity." },
      { yearOrEra: "2007", event: "Grand Inauguration", description: "Opened to the world during Eid al-Adha after 11 years of international artisanal collaboration." }
    ],
    architecturalSecrets: [
      "The night lighting system projects clouds onto the white marble domes, shifting daily to match the current phase of the moon.",
      "The seven crystal chandeliers made by Faustig in Germany feature millions of Swarovski crystals and 24-carat galvanized gold."
    ],
    culturalSignificance: "A beacon of cultural dialogue and peaceful co-existence, welcoming visitors of all faiths from across the globe.",
    visitorTips: [
      "Arrive at 4:30 PM to see the pure white marble transform under sunset gold, followed by the dramatic lunar night lighting.",
      "Abayas and kanduras are provided if attire does not cover wrists and ankles."
    ],
    narrationScript: "Behold the Sheikh Zayed Grand Mosque in Abu Dhabi, a dazzling vision in pure white Macedonian marble. Conceived to unite the Islamic world's architectural traditions—from Moorish arches to Mughal domes—it features 82 domes and four 107-meter minarets. Step onto the vast floral courtyard, mirrored in still pools of water, and admire millions of hand-set lapis lazuli and mother-of-pearl stones blossoming across columns.",
    chapters: [
      { id: "chap-1", title: "Symphony in White Marble", timestampHint: "0:00", script: "Eighty-two radiant white domes gleam against the blue Gulf sky, crowned with 24-karat gold-leaf finials.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Botanical Pietra Dura Inlays", timestampHint: "0:25", script: "Over a thousand marble columns burst with hand-cut semi-precious flowers designed by British artist Kevin Dean.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The World's Greatest Carpet", timestampHint: "0:50", script: "Inside the main prayer hall lies the largest hand-knotted carpet on Earth, crafted with 2.2 billion individual knots.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Lunar Reflection Pools", timestampHint: "1:15", script: "Reflective water basins mirror the illuminated arches, illuminated by projectors synced to the lunar cycle.", focusPointId: "pt-4" }
    ]
  },

  "blue mosque": {
    name: "Sultan Ahmed Mosque (The Blue Mosque)",
    localName: "Sultanahmet Camii",
    city: "Istanbul",
    country: "Turkey",
    architecturalStyle: "Classical Ottoman Imperial Mosque Architecture",
    periodEra: "1609–1616 (Reign of Sultan Ahmed I, Architect Sedefkâr Mehmed Ağa)",
    confidence: 99,
    summary: "The definitive masterpiece of Ottoman mosque design, famous for its cascading domes, six slender minarets, and interior adorned with more than 20,000 hand-painted blue ceramic tiles from İznik.",
    coordinatesEstimate: { lat: 41.0054, lng: 28.9768 },
    arKeypoints: [
      { id: "pt-1", label: "Central Cascading Grand Dome", featureType: "dome", description: "Supported by four massive 'elephant foot' fluted piers, rising 43 meters high.", x: 50, y: 22 },
      { id: "pt-2", label: "Six Slender Fluted Minarets", featureType: "spire", description: "One of only a few historic mosques in the world built with six imperial minarets with sixteen balconies.", x: 22, y: 16 },
      { id: "pt-3", label: "İznik Blue Ceramic Tile Galleries", featureType: "relief", description: "Over 20,000 handmade cobalt-blue tiles depicting 50 distinct tulip, carnation, and cypress botanical designs.", x: 44, y: 58 },
      { id: "pt-4", label: "Carved Marble Mihrab & Minbar", featureType: "entrance", description: "Sculpted from a single block of Marmara marble, oriented precisely toward Mecca.", x: 62, y: 68 }
    ],
    historicalTimeline: [
      { yearOrEra: "1609", event: "Commission by Sultan Ahmed I", description: "Young Sultan Ahmed I commissioned royal architect Sedefkâr Mehmed Ağa to build an imperial mosque to rival Hagia Sophia." },
      { yearOrEra: "1616", event: "Grand Dedication", description: "Completed with six minarets; the Sultan famously financed a seventh minaret at Mecca to resolve the diplomatic controversy." }
    ],
    architecturalSecrets: [
      "Ostrich eggs were placed inside the chandeliers across the mosque because their scent naturally repels spiders, preventing cobwebs for centuries.",
      "The heavy iron chain hanging in the western court entrance forced the Sultan, who entered on horseback, to bow his head in humility every time he arrived."
    ],
    culturalSignificance: "The supreme icon of Istanbul's historic skyline, balancing the grand Byzantine dome of Hagia Sophia across Sultanahmet Square.",
    visitorTips: [
      "Closed to tourist visitors during the five daily prayer calls for approximately 30 minutes.",
      "Enter through the Hippodrome courtyard to appreciate the full monumental descent of the cascading semi-domes."
    ],
    narrationScript: "Welcome to Istanbul's Sultan Ahmed Mosque, universally known as the Blue Mosque. Completed in 1616 by architect Mehmed Ağa, it stands directly opposite Hagia Sophia. Its six minarets pierce the sky, while cascading domes create a pyramid of curves. Step inside, and you are bathed in sapphire light from 260 stained-glass windows illuminating over 20,000 handmade Iznik tiles.",
    chapters: [
      { id: "chap-1", title: "Cascading Domes of Istanbul", timestampHint: "0:00", script: "The exterior balances geometric power with lyrical grace through a cascade of domes and semi-domes.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Six Imperial Minarets", timestampHint: "0:25", script: "Six fluted minarets made history in 1616, rivaling the sacred sanctuary of Mecca itself.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Blue Tiles of İznik", timestampHint: "0:50", script: "Tens of thousands of cobalt-blue floral tiles shimmer beneath the massive Ottoman dome.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // CHRISTIANITY
  // ==========================================
  "st peters basilica": {
    name: "St. Peter's Basilica",
    localName: "Basilica Papale di San Pietro in Vaticano",
    city: "Vatican City",
    country: "Vatican City State",
    architecturalStyle: "High Renaissance & Italian Baroque Architecture",
    periodEra: "1506–1626 (Architects: Bramante, Michelangelo, Maderno, Bernini)",
    confidence: 100,
    summary: "The grandest church in Christendom and supreme triumph of Renaissance and Baroque architecture, crowned by Michelangelo's monumental 136-meter dome and Bernini's bronze Baldachin above the tomb of Saint Peter.",
    coordinatesEstimate: { lat: 41.9022, lng: 12.4539 },
    arKeypoints: [
      { id: "pt-1", label: "Michelangelo's Grand Cupola", featureType: "dome", description: "Rising 136 meters above the floor, the tallest dome in the world engineered with double-shell masonry.", x: 50, y: 15 },
      { id: "pt-2", label: "Bernini's Bronze Baldacchino", featureType: "column", description: "29-meter monumental Baroque bronze canopy with helical Solomonic columns over the Papal Altar.", x: 50, y: 64 },
      { id: "pt-3", label: "Maderno's Travertine Facade", featureType: "facade", description: "115m wide monumental classical facade featuring giant Corinthian columns and 13 colossal statues.", x: 50, y: 48 },
      { id: "pt-4", label: "St. Peter's Square Colonnade", featureType: "arch", description: "284 Doric columns designed by Bernini arranged in maternal arms embracing the world.", x: 74, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 64 AD", event: "Martyrdom of Saint Peter", description: "Apostle Peter crucified upside-down in the Circus of Nero and buried on Vatican Hill." },
      { yearOrEra: "1506", event: "Laying of New Foundation Stone", description: "Pope Julius II commissioned Donato Bramante to replace Constantine's 4th-century basilica." },
      { yearOrEra: "1547", event: "Michelangelo Assumes Chief Directorship", description: "At age 71, Michelangelo took charge of construction without payment, designing the monumental dome." },
      { yearOrEra: "1626", event: "Solemn Consecration", description: "Pope Urban VIII consecrated the completed basilica exactly 1,300 years after the first church." }
    ],
    architecturalSecrets: [
      "Every single artwork inside the basilica is a mosaic, not an oil painting; master artists transformed paintings into millions of micro-glass tesserae to prevent humidity damage.",
      "The bronze used for Bernini's Baldachin was partly harvested from the ancient Roman bronze portico of the Pantheon."
    ],
    culturalSignificance: "The spiritual center of the Roman Catholic Church, holding the Chair of Saint Peter and Michelangelo's Pieta.",
    visitorTips: [
      "Climb the 551 stairs to the dome lantern for the quintessential panoramic view over Rome and Bernini's keyhole piazza.",
      "Strict modesty rules: shoulders and knees must be covered to pass Swiss Guard security."
    ],
    narrationScript: "You stand in the presence of St. Peter's Basilica, the largest church in the Christian world. Constructed over a century and a quarter by the titans of the Italian Renaissance—Bramante, Raphael, Michelangelo, and Bernini—it stands directly over the tomb of the Apostle Peter. Look up at Michelangelo's awe-inspiring dome soaring 136 meters into the Roman sky. Inside, Bernini's colossal bronze Baldachin rises four stories above the papal altar.",
    chapters: [
      { id: "chap-1", title: "Bernini's Welcoming Arms", timestampHint: "0:00", script: "Approaching through the elliptical colonnade, Bernini designed the piazza to embrace humanity.", focusPointId: "pt-4" },
      { id: "chap-2", title: "Michelangelo's Crown of Rome", timestampHint: "0:25", script: "Michelangelo simplified the floor plan and raised a double-shell dome that defined world architecture.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Bronze Baldachin & Sacred Tomb", timestampHint: "0:50", script: "Twisted bronze columns cast from ancient Roman metal mark the underground tomb of Saint Peter.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Mosaics That Defy Time", timestampHint: "1:15", script: "Every colossal painting across the nave walls is composed of millions of indestructible glass mosaic pieces.", focusPointId: "pt-3" }
    ]
  },

  "notre dame": {
    name: "Notre-Dame de Paris",
    localName: "Cathédrale Notre-Dame de Paris",
    city: "Paris",
    country: "France",
    architecturalStyle: "French High Gothic Architecture",
    periodEra: "1163–1345 (Consecrated under Bishop Maurice de Sully)",
    confidence: 99,
    summary: "The heart of medieval Paris on the Île de la Cité, Notre-Dame is an archetype of French Gothic mastery, celebrated for its twin western towers, revolutionary flying buttresses, and 13th-century stained glass Rose Windows.",
    coordinatesEstimate: { lat: 48.853, lng: 2.3499 },
    arKeypoints: [
      { id: "pt-1", label: "Restored Viollet-le-Duc Spire (96m)", featureType: "spire", description: "Faithfully reconstructed in solid French oak and lead following the historic 2019 fire.", x: 50, y: 16 },
      { id: "pt-2", label: "Rayonnant South Rose Window", featureType: "relief", description: "12.9-meter stained glass masterpiece created in 1260 dedicated to the New Testament.", x: 50, y: 44 },
      { id: "pt-3", label: "Western Twin Towers & Gargoyles", featureType: "facade", description: "69-meter Gothic bell towers housing the famous 13-ton bourdon bell 'Emmanuel'.", x: 30, y: 28 },
      { id: "pt-4", label: "Gothic Flying Buttress Arcades", featureType: "arch", description: "Pioneering arched masonry supports that enabled soaring stone vaults and tall stained glass walls.", x: 75, y: 62 }
    ],
    historicalTimeline: [
      { yearOrEra: "1163", event: "Foundation Stone by Maurice de Sully", description: "Pope Alexander III laid the cornerstone on the Île de la Cité." },
      { yearOrEra: "1804", event: "Coronation of Napoleon I", description: "Napoleon crowned himself Emperor of the French inside the cathedral." },
      { yearOrEra: "1831", event: "Victor Hugo's Masterpiece", description: "The publication of 'The Hunchback of Notre-Dame' sparked a national campaign to restore the decaying cathedral." },
      { yearOrEra: "2019–2024", event: "Tragic Fire & Historic Rebirth", description: "Devastating fire on April 15, 2019 led to an unprecedented global artisanal restoration." }
    ],
    architecturalSecrets: [
      "The medieval roof was known as 'La Forêt' (The Forest) because an entire forest of over 1,300 ancient oak trees was felled to construct its timbers.",
      "Point Zéro des Routes de France is embedded in the stone plaza outside, from which all highway distances in France are measured."
    ],
    culturalSignificance: "An immortal symbol of French national heritage, literature, and architectural resilience.",
    visitorTips: [
      "Walk along the southern embankment of the Seine across the Pont de l'Archevêché for the most dramatic perspective of the flying buttresses.",
      "Look closely at the western portal of the Last Judgment to see medieval stone statues with individual expressive faces."
    ],
    narrationScript: "You are standing on the Île de la Cité before Notre-Dame de Paris, the stone heartbeat of France. Begun in 1163, this cathedral revolutionized architecture by deploying pioneering flying buttresses that allowed stone walls to open into soaring curtains of stained glass. Though scarred by the tragic fire of 2019, master stone masons, carpenters, and glassmakers from across the world have resurrected its 96-meter oak spire.",
    chapters: [
      { id: "chap-1", title: "Twin Towers on the Seine", timestampHint: "0:00", script: "Rising from the cradle of Paris, the western facade balances proportion, harmony, and stone majesty.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Flying Buttress Miracle", timestampHint: "0:25", script: "Slender arches of masonry thrust outward, bearing the weight of the vaulted ceiling into open space.", focusPointId: "pt-4" },
      { id: "chap-3", title: "The Rose Window in Stained Glass", timestampHint: "0:50", script: "Glowing with 13th-century cobalt blues and ruby reds, the south rose window floods the transept with light.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Resurrected Spire", timestampHint: "1:15", script: "Meticulously rebuilt with hand-hewn French oak, the spire once again reaches into the Parisian sky.", focusPointId: "pt-1" }
    ]
  },

  "st basils cathedral": {
    name: "Saint Basil's Cathedral",
    localName: "Собор Василия Блаженного",
    city: "Moscow",
    country: "Russia",
    architecturalStyle: "Russian Traditional Tent-Roof & Polychrome Onion Dome Architecture",
    periodEra: "1555–1561 (Commissioned by Tsar Ivan IV 'the Terrible')",
    confidence: 99,
    summary: "Crowning Red Square in Moscow, this iconic architectural fantasy features eight distinct church chapels clustered around a central tent-roof core, renowned for its swirling, colorful onion domes.",
    coordinatesEstimate: { lat: 55.7525, lng: 37.6231 },
    arKeypoints: [
      { id: "pt-1", label: "Central Tent-Roofed Spire (47m)", featureType: "spire", description: "The central Church of the Intercession of the Mother of God, crowned by a golden lantern.", x: 50, y: 16 },
      { id: "pt-2", label: "Swirling Polychrome Onion Domes", featureType: "dome", description: "Eight surrounding domes painted with vibrant spiral, faceted, and chevron jewel patterns.", x: 38, y: 35 },
      { id: "pt-3", label: "Red Brick Arcaded Basement", featureType: "arch", description: "Massive vaulted foundation built to support the nine individual churches on a unified platform.", x: 50, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "1552–1561", event: "Triumph over Kazan", description: "Ivan the Terrible ordered construction by legendary Russian architects Postnik Yakovlev and Barma." },
      { yearOrEra: "17th Century", event: "Vibrant Colors Added", description: "The domes were originally gold and white before being painted in the dazzling polychrome patterns seen today." },
      { yearOrEra: "1930s", event: "Miraculous Rescue from Demolition", description: "Architect Pyotr Baranovsky threatened suicide to stop Soviet authorities from razing the cathedral for military parades." }
    ],
    architecturalSecrets: [
      "The cathedral is not a single unified hall, but a labyrinth of eight independent stone chapels gathered symmetrically around the central spire.",
      "The onion dome design was engineered specifically to prevent heavy Russian snowdrifts from collapsing church roofs in winter."
    ],
    culturalSignificance: "The definitive symbol of traditional Russian architectural identity, celebrated worldwide on Red Square.",
    visitorTips: [
      "Explore the narrow interior painted brick galleries that wind between the nine individual chapels.",
      "Photograph from the St. Basil slope in the evening when floodlights make the vibrant domes pop against the dark sky."
    ],
    narrationScript: "Standing on Moscow's Red Square, Saint Basil's Cathedral looks like a fairy-tale palace born from a Russian dream. Commissioned in 1555 by Ivan the Terrible to celebrate victory in Kazan, it consists of eight individual chapels clustered like petals around a central 47-meter tent tower. Feast your eyes on the swirling onion domes—each painted with unique emerald greens, ruby reds, and golden stripes.",
    chapters: [
      { id: "chap-1", title: "A Symphony of Nine Chapels", timestampHint: "0:00", script: "Rather than one giant room, Saint Basil's is an interconnected cluster of nine sacred stone chapels.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Swirling Polychrome Domes", timestampHint: "0:30", script: "Each onion dome is uniquely patterned with faceted chevrons, spirals, and flame-like colors.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Rescued from the Wrecking Ball", timestampHint: "1:00", script: "Saved by brave architects from Soviet destruction, it remains the eternal crown of Red Square.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // BUDDHISM
  // ==========================================
  "borobudur": {
    name: "Borobudur Temple",
    localName: "Candi Borobudur",
    city: "Magelang, Central Java",
    country: "Indonesia",
    architecturalStyle: "Mahayana Buddhist Step-Pyramid Stupa Architecture",
    periodEra: "c. 750–825 AD (Sailendra Dynasty)",
    confidence: 100,
    summary: "The world's largest Buddhist temple monument, Borobudur is an immense stepped mandala consisting of nine stacked platforms, 2,672 bas-relief panels, and 72 openwork stupas housing meditating Buddha statues.",
    coordinatesEstimate: { lat: -7.6079, lng: 110.2038 },
    arKeypoints: [
      { id: "pt-1", label: "Monumental Grand Central Stupa", featureType: "dome", description: "The 35m-high supreme pinnacle representing Nirvana (Arupadhatu, the formless realm).", x: 50, y: 18 },
      { id: "pt-2", label: "Perforated Bell-Shaped Stupas", featureType: "statue", description: "72 lattice stone stupas on circular terraces, each enshrining a seated Dhyani Buddha.", x: 42, y: 44 },
      { id: "pt-3", label: "Karmavibhangga Narrative Reliefs", featureType: "relief", description: "Over 2,600 carved stone panels depicting the law of karma, life of Gautama Buddha, and Jataka tales.", x: 65, y: 68 },
      { id: "pt-4", label: "Makara Guardian Gateways", featureType: "entrance", description: "Stone arch portals framed by the fierce head of Kala devouring negative spirits.", x: 50, y: 84 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 800 AD", event: "Built by the Sailendra Kings", description: "Constructed over half a century using 2 million stone blocks of volcanic andesite." },
      { yearOrEra: "14th Century", event: "Burial Under Volcanic Ash", description: "Abandoned following the decline of Hindu-Buddhist kingdoms and eruptions of Mount Merapi." },
      { yearOrEra: "1814", event: "Rediscovery by Sir Stamford Raffles", description: "British colonial governor alerted by local villagers cleared the jungle to reveal the monument." },
      { yearOrEra: "1991", event: "UNESCO World Heritage Listing", description: "Designated a UNESCO World Heritage Site following a massive 8-year UNESCO restoration." }
    ],
    architecturalSecrets: [
      "The entire monument was assembled without an ounce of cement or mortar, relying on interlocking tongue-and-groove and dovetail joints.",
      "A pilgrim walking past every narrative relief from bottom to top completes a 5-kilometer spiritual journey of meditation."
    ],
    culturalSignificance: "The supreme monument of world Buddhism, serving as the global center for the annual celebration of Vesak (Buddha's Birthday) under the full moon.",
    visitorTips: [
      "Book the sunrise tour to watch morning mist lift from the Kedu Valley between surrounding active volcanoes.",
      "Climb via the eastern gate and circumambulate in a clockwise direction (pradaksina) to follow the narrative sequence."
    ],
    narrationScript: "You are looking upon Borobudur in Java, the largest Buddhist temple on Earth. Built in the 9th century from two million volcanic stone blocks, it is designed as a colossal three-dimensional mandala. As you ascend its nine stepped terraces, you spiritually journey through the realms of Buddhist cosmology—from desire to form, and finally into the formless realm of Nirvana among 72 perforated bell stupas.",
    chapters: [
      { id: "chap-1", title: "Ascent through the Cosmos", timestampHint: "0:00", script: "Borobudur rises in nine stone tiers, mapping the human spiritual journey from worldly attachment to enlightenment.", focusPointId: "pt-4" },
      { id: "chap-2", title: "Five Kilometers of Stone Carvings", timestampHint: "0:25", script: "Over 2,600 bas-reliefs document the life of Prince Siddhartha and the everyday bustling world of 8th-century Java.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The Stupas of the Formless Realm", timestampHint: "0:50", script: "On circular upper terraces, 72 stone bell stupas enshrine serenely meditating statues of the Buddha.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Silent Supreme Stupa", timestampHint: "1:15", script: "At the pinnacle sits the crowning stupa, completely sealed and empty, symbolizing the peace of Nirvana.", focusPointId: "pt-1" }
    ]
  },

  "shwedagon pagoda": {
    name: "Shwedagon Pagoda",
    localName: "ရွှေတိဂုံစေတီတော်",
    city: "Yangon",
    country: "Myanmar",
    architecturalStyle: "Burmese Mon Buddhist Stupa Architecture",
    periodEra: "c. 6th–10th Century AD (Legend traces to 588 BC)",
    confidence: 99,
    summary: "Myanmar's sacred golden heart, rising 99 meters above Singuttara Hill. Covered in genuine gold plates and crowned by an umbrella hti studded with over 7,000 diamonds, rubies, and a 76-carat diamond apex.",
    coordinatesEstimate: { lat: 16.7983, lng: 96.1497 },
    arKeypoints: [
      { id: "pt-1", label: "Diamond Orb & 76-Carat Apex", featureType: "spire", description: "The supreme finial holding 5,448 diamonds, 2,317 rubies, and a single flawless 76-carat diamond.", x: 50, y: 12 },
      { id: "pt-2", label: "Golden Bell & Inverted Bowl Stupa", featureType: "dome", description: "The 99m stupa body plated with thousands of genuine gold bars donated by Burmese royalty and citizens.", x: 50, y: 38 },
      { id: "pt-3", label: "Planetary Post Devotional Shrines", featureType: "facade", description: "Eight cardinal shrines corresponding to days of the Burmese week where pilgrims pour water over Buddha.", x: 38, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Enshrinement of Eight Sacred Hairs", description: "According to legend, two merchant brothers met Gautama Buddha and brought eight strands of his hair to be enshrined." },
      { yearOrEra: "15th Century", event: "Queen Shin Sawbu Gold Donation", description: "Queen Shin Sawbu initiated the tradition of gilding the pagoda with her own weight in pure gold." }
    ],
    architecturalSecrets: [
      "The pagoda contains more than 60 metric tons of real gold, and the hti umbrella bell chiming in the wind contains thousands of gold and silver bells.",
      "At specific colored tiles marked on the marble terrace, sunlight reflecting from the diamond orb flashes crimson, emerald, and azure hues."
    ],
    culturalSignificance: "The supreme pilgrimage site of Theravada Buddhism in Myanmar, revered for housing sacred relics of four previous Buddhas.",
    visitorTips: [
      "Visit at sunset to watch the golden bell transform from brilliant yellow into a warm fiery amber as thousands of oil lamps are lit.",
      "Find your birth-day planetary post to perform the traditional water pouring blessing."
    ],
    narrationScript: "Gleaming like a golden mountain against the tropical sky of Yangon, the Shwedagon Pagoda is the spiritual crown of Myanmar. Towering 99 meters, this sacred stupa enshrines eight sacred hairs of Gautama Buddha. Coated in genuine gold plates and crowned with thousands of diamonds, its golden light fills pilgrims with reverent peace.",
    chapters: [
      { id: "chap-1", title: "The 99-Meter Golden Stupa", timestampHint: "0:00", script: "Plated in solid gold bars, the stupa dominates the Yangon skyline with unmatched luminosity.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Crown of 7,000 Diamonds", timestampHint: "0:30", script: "High above the reach of humans, the diamond orb sparkles with rubies, sapphires, and an immense 76-carat gem.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Rituals of the Planetary Posts", timestampHint: "1:00", script: "Pilgrims gather at their day-of-birth posts, pouring cups of fragrant water in mindful meditation.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // SIKHISM
  // ==========================================
  "golden temple amritsar": {
    name: "Harmandir Sahib (The Golden Temple)",
    localName: "ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ",
    city: "Amritsar, Punjab",
    country: "India",
    architecturalStyle: "Sikh Architectural Marvel (Indo-Islamic & Rajput Synthesis)",
    periodEra: "1581–1604 (Founded by Guru Ram Das & Guru Arjan Dev)",
    confidence: 100,
    summary: "The holiest Gurdwara of Sikhism, Harmandir Sahib rises from the sacred Amrit Sarovar lake, plated with 750 kg of pure gold. With four open doors welcoming all humanity, it serves over 100,000 free hot meals daily in the world's largest community kitchen (Langar).",
    coordinatesEstimate: { lat: 31.62, lng: 74.8765 },
    arKeypoints: [
      { id: "pt-1", label: "Golden Gilded Sanctum & Fluted Dome", featureType: "dome", description: "Clad in 750 kg of pure gold leaf donated by Maharaja Ranjit Singh, glowing over the water.", x: 50, y: 32 },
      { id: "pt-2", label: "Amrit Sarovar (Pool of Nectar)", featureType: "facade", description: "Sacred 5.1-meter deep lake excavated in 1577, celebrated for spiritual healing and inner calm.", x: 50, y: 72 },
      { id: "pt-3", label: "The Four Open Doorways", featureType: "entrance", description: "Entrances on all four cardinal directions symbolizing universal acceptance of all castes and creeds.", x: 38, y: 52 },
      { id: "pt-4", label: "Akal Takht (Throne of the Timeless One)", featureType: "spire", description: "The highest seat of temporal authority in Sikhism, established by Guru Hargobind in 1606.", x: 74, y: 48 }
    ],
    historicalTimeline: [
      { yearOrEra: "1577 AD", event: "Excavation of Amrit Sarovar", description: "Guru Ram Das Ji excavated the sacred pool, founding the holy city of Amritsar." },
      { yearOrEra: "1589 AD", event: "Cornerstone by Sufi Saint Mian Mir", description: "Guru Arjan Dev Ji invited revered Muslim Sufi saint Hazrat Mian Mir to lay the foundation stone, enshrining interfaith respect." },
      { yearOrEra: "1604 AD", event: "Installation of Guru Granth Sahib", description: "The sacred scripture (Adi Granth) was reverently installed by Baba Buddha Ji." },
      { yearOrEra: "1830 AD", event: "Maharaja Ranjit Singh Gold Gilding", description: "Sikh Empire leader Maharaja Ranjit Singh covered the upper sanctum with heavy engraved gold leaf." }
    ],
    architecturalSecrets: [
      "Unlike traditional temples that sit on elevated hilltops, Harmandir Sahib was deliberately built at a lower level than surrounding ground so visitors must step down in humility.",
      "The Guru Ram Das Langar kitchen operates 24/7, serving between 50,000 to 100,000 free vegetarian meals every single day to anyone who arrives, regardless of religion or background."
    ],
    culturalSignificance: "The beating spiritual heart of the worldwide Sikh community, embodying the core values of Seva (selfless service), equality, humility, and divine music (Kirtan).",
    visitorTips: [
      "Heads must be covered with a scarf/rumal and shoes deposited at the free cloakroom; wash hands and feet in the purifying water threshold before entering.",
      "Experience the Palki Sahib ceremony (at night and early dawn) when the holy Guru Granth Sahib is carried in a flower-strewn golden palanquin."
    ],
    narrationScript: "You are looking upon Sri Harmandir Sahib, the Golden Temple of Amritsar—the holiest shrine of the Sikh faith. Rising like a golden lotus from the tranquil waters of the Amrit Sarovar, its four open doorways proclaim that all human beings, regardless of faith, caste, or background, are welcome as equals. Plated in 750 kilograms of pure gold, its sacred halls resound with continuous live singing of hymns, while its kitchens feed all with boundless love.",
    chapters: [
      { id: "chap-1", title: "A Sanctuary Built on Humility", timestampHint: "0:00", script: "Built lower than the surrounding city, travelers step downward in humility into the golden water courtyard.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Four Open Doors of Humanity", timestampHint: "0:25", script: "Four grand entrances face north, south, east, and west, welcoming every traveler on Earth without distinction.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The Golden Sanctum on Water", timestampHint: "0:50", script: "Gilded by Maharaja Ranjit Singh, pure gold reflects across the pool as sacred kirtan fills the air.", focusPointId: "pt-1" },
      { id: "chap-4", title: "The Akal Takht and Living Seva", timestampHint: "1:15", script: "Standing beside the temporal throne of the Akal Takht, millions are fed daily in the spirit of selfless service.", focusPointId: "pt-4" }
    ]
  },

  // ==========================================
  // JUDAISM
  // ==========================================
  "western wall": {
    name: "The Western Wall (Kotel)",
    localName: "הַכֹּתֶל הַמַּעֲרָבִי (HaKotel HaMa'aravi)",
    city: "Jerusalem",
    country: "Israel",
    architecturalStyle: "Herodian Classical Ashlar Masonry",
    periodEra: "c. 19 BCE (Second Temple Expansion by Herod the Great)",
    confidence: 100,
    summary: "The holiest place where Jewish prayer is permitted, the Western Wall is the sole surviving retaining wall of the Second Temple complex, where millions of handwritten prayer notes are tucked into ancient limestone crevices.",
    coordinatesEstimate: { lat: 31.7767, lng: 35.2345 },
    arKeypoints: [
      { id: "pt-1", label: "Herodian Chiseled Ashlar Blocks", featureType: "facade", description: "Massive limestone blocks weighing up to 570 tons, carved with distinctive draft-margined borders.", x: 50, y: 46 },
      { id: "pt-2", label: "Prayer Crevice Notes (Kvitelach)", featureType: "relief", description: "Millennia of handwritten notes containing heartfelt prayers tucked into stone seams.", x: 44, y: 68 },
      { id: "pt-3", label: "Wilson's Arch Entrance", featureType: "arch", description: "Ancient monumental stone bridge arch that carried worshippers directly to the Temple Mount.", x: 26, y: 58 }
    ],
    historicalTimeline: [
      { yearOrEra: "19 BCE", event: "Herod's Second Temple Expansion", description: "Herod the Great built the immense retaining wall to support the vast esplanade of the Second Temple." },
      { yearOrEra: "70 CE", event: "Roman Destruction of Jerusalem", description: "Titus and Roman legions destroyed the Temple; only the supporting western retaining wall remained." },
      { yearOrEra: "1967", event: "Reunification of Jerusalem", description: "Following the Six-Day War, the Western Wall Plaza was established for open public prayer." }
    ],
    architecturalSecrets: [
      "The stones are held together with no mortar whatsoever; their immense mass and slight inward incline ensure structural stability for over 2,000 years.",
      "Twice a year, all prayer notes (kvitelach) tucked into the wall's cracks are gently collected and buried respectfully on the Mount of Olives."
    ],
    culturalSignificance: "The emotional and spiritual anchor of Jewish memory, longing, and prayer for over two thousand years.",
    visitorTips: [
      "Men and women have separate prayer sections; men are requested to wear a kippah/head covering provided at the security entrance.",
      "Book tickets to the Western Wall Tunnels to walk alongside the gigantic 570-ton Western Stone hidden underground."
    ],
    narrationScript: "You stand before the Western Wall in Jerusalem's Old City—the Kotel. Built over 2,000 years ago by King Herod as the retaining foundation for the Second Temple, this weathered limestone wall is the most sacred prayer site in Judaism. Look closely at the golden Jerusalem stones: every seam holds folded paper notes containing the prayers, hopes, and tears of pilgrims from every corner of the earth.",
    chapters: [
      { id: "chap-1", title: "Two Millennia of Stone Memory", timestampHint: "0:00", script: "These colossal Herodian ashlar blocks survived the Roman destruction of 70 CE, standing as an unbroken link to antiquity.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Whispers in the Stone Crevices", timestampHint: "0:30", script: "Millions of handwritten prayers are pressed into the cracks between stones, collected twice yearly for sacred burial.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Wilson's Arch and Ancient Heights", timestampHint: "1:00", script: "Under Wilson's Arch, monumental stone vaults reveal the ancient bridge system that led to the Holy of Holies.", focusPointId: "pt-3" }
    ]
  },

  "dohany street synagogue": {
    name: "Dohány Street Synagogue (Great Synagogue)",
    localName: "Dohány utcai zsinagóga",
    city: "Budapest",
    country: "Hungary",
    architecturalStyle: "Moorish Revival (Neo-Mudéjar) Architecture",
    periodEra: "1854–1859 (Designed by Ludwig Förster)",
    confidence: 99,
    summary: "The largest synagogue in Europe and second largest in the world, renowned for its twin 43-meter octagonal onion-domed minaret-like towers, polychrome glazed brick facade, and the weeping willow Holocaust Memorial.",
    coordinatesEstimate: { lat: 47.4959, lng: 19.0598 },
    arKeypoints: [
      { id: "pt-1", label: "Twin Onion-Domed Moorish Towers (43m)", featureType: "spire", description: "Octagonal brick towers crowned with copper onion domes and gilded star motifs.", x: 50, y: 18 },
      { id: "pt-2", label: "Moorish Polychrome Brick Facade", featureType: "facade", description: "Banded yellow and terracotta brickwork with geometric Moorish arches and stained-glass rose window.", x: 50, y: 48 },
      { id: "pt-3", label: "Emanuel Tree of Life Weeping Willow", featureType: "statue", description: "Metal willow sculpture where each silver leaf is engraved with the name of a Hungarian Holocaust victim.", x: 74, y: 68 }
    ],
    historicalTimeline: [
      { yearOrEra: "1859", event: "Inauguration in Budapest", description: "Consecrated as the cultural center of the Neolog Jewish community in Hungary." },
      { yearOrEra: "1944", event: "Budapest Ghetto Boundary", description: "Marked the border of the Jewish ghetto during WWII and sheltered thousands of refugees." }
    ],
    architecturalSecrets: [
      "It features a 5,000-pipe organ played by Franz Liszt and Camille Saint-Saëns at its opening concert.",
      "The Moorish style was chosen deliberately by architect Ludwig Förster because of historic connections between Jewish culture and Moorish Spain."
    ],
    culturalSignificance: "A monumental symbol of European Jewish heritage, resilience, and memorial culture.",
    visitorTips: [
      "Visit the Raoul Wallenberg Memorial Park in the rear courtyard to view the weeping willow monument.",
      "A guided tour inside reveals the stunning gilded barrel vaults and grand chandelier."
    ],
    narrationScript: "Standing in Budapest, the Dohány Street Synagogue is the largest synagogue in Europe. Designed in 1859 by Viennese architect Ludwig Förster in dramatic Moorish Revival style, its twin octagonal towers and banded red-and-yellow brickwork reflect Sephardic and Middle Eastern traditions. Step through into its cavernous, organ-graced interior, and visit the silver Tree of Life honoring Holocaust memory.",
    chapters: [
      { id: "chap-1", title: "Twin Towers of Dohány", timestampHint: "0:00", script: "Soaring 43 meters high, the twin onion domes establish a majestic presence on the Budapest skyline.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Moorish Revival Splendor", timestampHint: "0:30", script: "Banded brickwork and geometric horseshoe arches celebrate golden-age Mediterranean Jewish culture.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Weeping Willow Tree of Life", timestampHint: "1:00", script: "In the courtyard, thousands of engraved silver leaves rustle in tribute to enduring remembrance.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // JAINISM
  // ==========================================
  "ranakpur jain temple": {
    name: "Ranakpur Jain Temple (Chaturmukha Dharana Vihara)",
    localName: "रणकपुर जैन मंदिर",
    city: "Pali District, Rajasthan",
    country: "India",
    architecturalStyle: "Māru-Gurjara Jain Temple Architecture",
    periodEra: "15th Century (c. 1437–1458 AD, Built by Dharna Shah & Rana Kumbha)",
    confidence: 100,
    summary: "A sublime forest jewel of Jain architecture, Ranakpur is renowned for its 1,444 uniquely carved white marble pillars—no two of which are alike—supporting 29 halls bathed in light and shadow.",
    coordinatesEstimate: { lat: 25.1158, lng: 73.4727 },
    arKeypoints: [
      { id: "pt-1", label: "1,444 Unique Marble Pillars", featureType: "column", description: "Intricately carved translucent marble columns, each displaying distinct floral, divine, and geometric motifs.", x: 50, y: 56 },
      { id: "pt-2", label: "Chaturmukha Four-Faced Adinatha Sanctum", featureType: "statue", description: "White marble quadruple idol of Lord Adinatha facing four cardinal directions.", x: 48, y: 38 },
      { id: "pt-3", label: "Carved Concentric Marble Dome", featureType: "dome", description: "Ceiling carved with cascading concentric bands and celestial Vidyadevis dancing in stone.", x: 50, y: 16 }
    ],
    historicalTimeline: [
      { yearOrEra: "1437 AD", event: "Vision of Dharna Shah", description: "Jain merchant Dharna Shah received a celestial dream of a cosmic vehicle and began building with royal patronage from Rana Kumbha." },
      { yearOrEra: "1458 AD", event: "Consecration of First Tirthankara", description: "Consecrated by Acharya Soma Sundar Suri after over 50 years of master stone carving." }
    ],
    architecturalSecrets: [
      "No two of the 1,444 marble pillars are carved identically; yet they are placed so that none obstructs a clear line of sight to the central Adinatha idol.",
      "The marble changes hue throughout the day—from cool pearl in the morning to radiant amber at sunset."
    ],
    culturalSignificance: "The supreme masterpiece of Jain non-violence (Ahimsa) manifested in stone, where harmony, light, and spiritual contemplation reach perfection.",
    visitorTips: [
      "Visit between 12:00 PM and 5:00 PM when non-Jain visitors are welcomed.",
      "No leather shoes, belts, or wallets are permitted on temple grounds in accordance with Jain principles."
    ],
    narrationScript: "Tucked into the Aravalli hills of Rajasthan lies Ranakpur, one of the five sacred pilgrimage sites of Jainism. Dedicated to Lord Adinatha, this 15th-century temple is an architectural miracle of 1,444 hand-carved marble pillars. Remarkably, no two pillars share the same design. As gentle mountain light filters through the 29 pillared halls, the white marble seems to glow from within.",
    chapters: [
      { id: "chap-1", title: "Forest of 1,444 Marble Pillars", timestampHint: "0:00", script: "Every pillar is a unique sculpture in translucent white marble, aligned so sightlines remain unobstructed.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Dancing Ceilings of Heaven", timestampHint: "0:30", script: "Looking upward, concentric stone domes cascade like blooming lotus blossoms carved in stone.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The Four-Faced Sanctum of Peace", timestampHint: "1:00", script: "Lord Adinatha gazes toward all four compass directions, radiating universal peace and non-violence.", focusPointId: "pt-2" }
    ]
  },

  // ==========================================
  // SHINTO
  // ==========================================
  "fushimi inari": {
    name: "Fushimi Inari-Taisha",
    localName: "伏見稲荷大社",
    city: "Kyoto",
    country: "Japan",
    architecturalStyle: "Classical Shinto Shrine Architecture (Inari-zukuri)",
    periodEra: "Founded 711 AD (Heian Era & Edo Expansions)",
    confidence: 100,
    summary: "The head shrine for Inari, the Shinto kami of rice, agriculture, and business prosperity, famous for its mesmerizing mountain paths winding beneath over 10,000 vivid vermilion Torii gates (Senbon Torii).",
    coordinatesEstimate: { lat: 34.9671, lng: 135.7727 },
    arKeypoints: [
      { id: "pt-1", label: "Senbon Torii Tunnel of Vermilion Gates", featureType: "arch", description: "Over 10,000 vermilion-lacquered wooden gates donated by pilgrims and businesses lining the mountain path.", x: 50, y: 52 },
      { id: "pt-2", label: "Kitsune Fox Messenger Statues", featureType: "statue", description: "Sacred stone foxes carrying the key to the rice granary, a jewel, or scroll in their mouths.", x: 68, y: 64 },
      { id: "pt-3", label: "Romon Grand Gate (1589)", featureType: "entrance", description: "Two-story vermilion gate donated by warlord Toyotomi Hideyoshi in gratitude for his mother's recovery.", x: 50, y: 24 }
    ],
    historicalTimeline: [
      { yearOrEra: "711 AD", event: "Founding by Hata no Irogu", description: "Established on Mount Inari during the Wado era before Kyoto became the imperial capital." },
      { yearOrEra: "1589", event: "Toyotomi Hideyoshi's Romon Gate", description: "The supreme samurai ruler of Japan built the magnificent main entrance gate." }
    ],
    architecturalSecrets: [
      "The bright vermilion color (Ake) is made from cinnabar, traditionally believed to repel evil spirits and preserve the wood against humidity.",
      "The inscription on the reverse side of each gate reveals the name of the donor and the date it was erected in gratitude."
    ],
    culturalSignificance: "Japan's most visited Shinto shrine, representing the deep spiritual communion between humans, nature, and the spirits of Mount Inari.",
    visitorTips: [
      "Begin climbing early in the morning (before 7:00 AM) or at dusk to experience the quiet mystical atmosphere without crowds.",
      "Hike all the way to the Yotsutsuji intersection for a stunning panoramic view over Kyoto city."
    ],
    narrationScript: "Step across the sacred threshold of Fushimi Inari-Taisha at the foot of Mount Inari in Kyoto. Founded in 711 AD, this is the supreme shrine dedicated to Inari, the Shinto kami of rice, fertility, and prosperity. Walk through the Senbon Torii—a winding, hypnotic corridor of over 10,000 vermilion gates. Along the paths, stone fox messengers hold keys to rice storehouses in their jaws, guarding the sacred mountain woods.",
    chapters: [
      { id: "chap-1", title: "The Romon Gate of Hideyoshi", timestampHint: "0:00", script: "Approaching through the vermilion grand gate built by Toyotomi Hideyoshi, you enter the kami's domain.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Vermilion Tunnel of 10,000 Torii", timestampHint: "0:25", script: "Step into the red-lacquered colonnade of torii gates, where dappled mountain sunlight flickers.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Kitsune: Messengers of Inari", timestampHint: "0:50", script: "Sacred stone foxes draped in red bibs keep silent watch, holding keys to harvest and prosperity.", focusPointId: "pt-2" }
    ]
  },

  // ==========================================
  // TAOISM
  // ==========================================
  "temple of heaven": {
    name: "Temple of Heaven (Tiantan)",
    localName: "天坛",
    city: "Beijing",
    country: "China",
    architecturalStyle: "Ming & Qing Chinese Imperial Ceremonial Architecture",
    periodEra: "1420 AD (Reign of the Yongle Emperor, Ming Dynasty)",
    confidence: 100,
    summary: "The supreme ceremonial altar of imperial China, where Ming and Qing emperors performed annual sacrifices praying for bountiful harvests, renowned for the circular Hall of Prayer for Good Harvests built entirely without nails.",
    coordinatesEstimate: { lat: 39.8822, lng: 116.4074 },
    arKeypoints: [
      { id: "pt-1", label: "Hall of Prayer for Good Harvests", featureType: "dome", description: "38-meter triple-gabled circular timber hall crowned with deep azure glazed tiles symbolizing heaven.", x: 50, y: 22 },
      { id: "pt-2", label: "Circular Mound Altar (Yuanqiutan)", featureType: "facade", description: "Open-air three-tiered marble altar where the Emperor communed directly with the cosmos.", x: 50, y: 76 },
      { id: "pt-3", label: "Echo Wall of the Imperial Vault", featureType: "relief", description: "Smooth circular perimeter wall that transmits whispers clearly across its 65-meter diameter.", x: 32, y: 62 }
    ],
    historicalTimeline: [
      { yearOrEra: "1420 AD", event: "Constructed by Emperor Yongle", description: "Completed alongside the Forbidden City as the ritual center for the Son of Heaven." },
      { yearOrEra: "1998", event: "UNESCO World Heritage Inscription", description: "Recognized as a masterpiece of architecture and landscape design symbolizing Chinese cosmological thought." }
    ],
    architecturalSecrets: [
      "The entire 38-meter Hall of Prayer was constructed completely out of wood without a single iron nail, held together by 28 colossal cedar pillars representing the 28 constellations.",
      "The southern part of the complex is square (representing Earth) while the northern part is semicircular (representing Heaven), embodying the ancient concept 'Tian Yuan Di Fang' (Round Heaven, Square Earth)."
    ],
    culturalSignificance: "The supreme manifestation of Chinese imperial ritual cosmology, honoring the harmonious balance between Heaven, Earth, and humanity.",
    visitorTips: [
      "Visit early in the morning to see local Beijing elders practicing Tai Chi, calligraphy, and traditional musical instruments under ancient cypress trees.",
      "Stand on the central 'Heaven's Heart Stone' (Tianxinshi) at the Circular Mound Altar to hear your own voice echo back."
    ],
    narrationScript: "You stand before the Temple of Heaven in Beijing, the magnificent ritual altar where the Emperors of China performed sacred winter solstice sacrifices. Completed in 1420, its celebrated Hall of Prayer for Good Harvests rises in three tiers of deep blue glazed tiles—the color of the heavens. Supported by 28 giant timber pillars without a single nail, it expresses the cosmic harmony between Heaven and Earth.",
    chapters: [
      { id: "chap-1", title: "The Blue Roof of Heaven", timestampHint: "0:00", script: "Triple tiers of deep cobalt-blue tiles evoke the infinite expanse of the heavens.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Joinery Without a Single Nail", timestampHint: "0:25", script: "Twenty-eight giant cedar pillars interlock with wooden brackets, symbolizing seasons, months, and constellations.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Acoustics of the Imperial Vault", timestampHint: "0:50", script: "The circular Echo Wall transmits whispered prayers across sixty meters of smooth brickwork.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Heart of Heaven Stone", timestampHint: "1:15", script: "At the open-air marble altar, the Emperor knelt on the center stone to report to the cosmic order.", focusPointId: "pt-2" }
    ]
  },

  // ==========================================
  // BAHÁ'Í FAITH
  // ==========================================
  "lotus temple": {
    name: "Lotus Temple (Baháʼí House of Worship)",
    localName: "कमल मंदिर (Kamal Mandir)",
    city: "New Delhi",
    country: "India",
    architecturalStyle: "Expressionist Organic Biomimetic Architecture",
    periodEra: "1986 (Designed by Iranian-Canadian Architect Fariborz Sahba)",
    confidence: 100,
    summary: "Shaped like a blossoming sacred lotus flower composed of 27 free-standing white Greek marble petals, this Baháʼí House of Worship welcomes people of all religions to pray and meditate in complete silence.",
    coordinatesEstimate: { lat: 28.5535, lng: 77.2588 },
    arKeypoints: [
      { id: "pt-1", label: "27 Free-Standing White Marble Petals", featureType: "facade", description: "Organized in nine clusters of three petals, clad in immaculate white Penteli marble from Greece.", x: 50, y: 34 },
      { id: "pt-2", label: "Nine Surrounding Ponds & Gardens", featureType: "arch", description: "Ponds designed like lotus leaves that naturally cool the interior hall through convection.", x: 50, y: 78 },
      { id: "pt-3", label: "Central Meditative Sanctuary", featureType: "dome", description: "Column-free central dome rising 34 meters, seating 2,500 people in reverent silence.", x: 50, y: 16 }
    ],
    historicalTimeline: [
      { yearOrEra: "1986", event: "Dedication in New Delhi", description: "Opened to the public in December 1986, quickly becoming one of the most visited buildings in the world." }
    ],
    architecturalSecrets: [
      "The temple uses pure natural ventilation: fresh air drawn across the nine surrounding ponds enters through basement openings and exits through the petal apex.",
      "The marble used is the same Penteli marble quarried in Greece that built the Parthenon in Athens."
    ],
    culturalSignificance: "A living symbol of interfaith unity, containing no pictures, idols, or sectarian rituals, open to every human being equally.",
    visitorTips: [
      "Experience the silence inside the main prayer hall—applause, photography, and musical instruments are forbidden to preserve contemplation.",
      "Walk the outer perimeter gardens at sunset when the white marble petals glow soft pink."
    ],
    narrationScript: "Rising gracefully above New Delhi, the Lotus Temple is one of the world's most celebrated modern architectural wonders. Designed by architect Fariborz Sahba, its 27 pure white marble petals bloom from nine surrounding ponds of clear water. The lotus flower, revered across Indian traditions as a symbol of purity, here represents the oneness of humanity and religion, welcoming all into its serene, column-free sanctuary.",
    chapters: [
      { id: "chap-1", title: "The Blossoming Petals of Peace", timestampHint: "0:00", script: "Twenty-seven free-standing marble petals unfurl toward the sky, clad in pristine Greek stone.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Nine Pools of Natural Cooling", timestampHint: "0:25", script: "Surrounded by nine azure ponds, desert breezes are cooled naturally before entering the sanctuary.", focusPointId: "pt-2" },
      { id: "chap-3", title: "A Sanctuary of Universal Silence", timestampHint: "0:50", script: "Inside the grand central dome, people of all faiths sit together in pure, unadorned peace.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // ZOROASTRIANISM
  // ==========================================
  "yazd atash behram": {
    name: "Yazd Atash Behram (Fire Temple of Yazd)",
    localName: "آتشکده یزد",
    city: "Yazd",
    country: "Iran",
    architecturalStyle: "Neo-Achaemenid Zoroastrian Fire Temple Architecture",
    periodEra: "1934 (House of the Sacred Victorious Fire Burning Since 470 AD)",
    confidence: 99,
    summary: "The spiritual capital of Zoroastrianism in Iran, housing the sacred Atash Behram (Victorious Fire) that has been kept continuously burning by consecrated priests since approximately 470 AD.",
    coordinatesEstimate: { lat: 31.8812, lng: 54.3736 },
    arKeypoints: [
      { id: "pt-1", label: "The Eternal Sacred Fire Chamber", featureType: "relief", description: "Enshrined behind glass in a bronze brazier, tended multiple times daily with fragrant almond wood.", x: 50, y: 46 },
      { id: "pt-2", label: "Winged Faravahar Pediment Relief", featureType: "facade", description: "The supreme Zoroastrian symbol of good thoughts, good words, and good deeds above the portico.", x: 50, y: 22 },
      { id: "pt-3", label: "Sacred Circular Reflection Pool", featureType: "arch", description: "Circular pool in the cypress courtyard reflecting the brick columns and temple facade.", x: 50, y: 82 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 470 AD", event: "Consecration of the Fire", description: "The fire was originally consecrated in the Sasanian Fire Temple of Karyan." },
      { yearOrEra: "1934", event: "Modern Temple Construction", description: "Built with funds raised by the Parsi Zoroastrian community of India and Iranian Zoroastrians." }
    ],
    architecturalSecrets: [
      "The sacred fire is fed exclusively with dry, barkless hard wood (such as almond and apricot) that burns cleanly without producing smoke.",
      "Only consecrated Zoroastrian priests wearing white cloths over their mouths (padan) may enter the inner sanctum to prevent human breath from touching the flame."
    ],
    culturalSignificance: "The highest grade of Zoroastrian fire temple (Atash Behram), preserving one of humanity's oldest surviving monotheistic continuous spiritual flames.",
    visitorTips: [
      "Respectfully view the eternal flame through the protective viewing glass window.",
      "Explore the on-site museum documenting the ancient Persian Zoroastrian traditions, calendar, and ceremonies."
    ],
    narrationScript: "You are looking upon the Atash Behram in the desert city of Yazd, Iran. Within this peaceful sanctuary burns an eternal flame that has not been extinguished for more than 1,500 years. Carried by Zoroastrian priests through mountain caves to protect it across centuries, this sacred fire symbolizes divine light and truth. Above the entrance columns, the winged Faravahar reminds every traveler of the eternal principle: Good Thoughts, Good Words, and Good Deeds.",
    chapters: [
      { id: "chap-1", title: "The 1,500-Year Eternal Flame", timestampHint: "0:00", script: "Burning continuously since 470 AD, the holy flame is tended with fragrant almond wood behind glass.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Faravahar Over the Columns", timestampHint: "0:30", script: "Carved into the pediment, the winged figure embodies the ancient Zoroastrian triad of pure thoughts, words, and deeds.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Desert Pool of Reflection", timestampHint: "1:00", script: "A circular pool surrounded by evergreen cypress trees reflects the ancient light of Yazd.", focusPointId: "pt-3" }
    ]
  },

  "prem mandir": {
    name: "Prem Mandir",
    localName: "प्रेम मंदिर",
    city: "Vrindavan, Mathura",
    country: "India",
    architecturalStyle: "Pure Italian Carrara Marble Nagara & Rajasthani Temple Architecture",
    periodEra: "2001–2012 (Dedicated by Jagadguru Kripalu Maharaj)",
    confidence: 99,
    summary: "Prem Mandir (The Temple of Divine Love) in holy Vrindavan is a breathtaking ivory-white marble temple complex crafted from 30,000 tons of flawless Italian Carrara marble, celebrated for its intricate filigree carvings, lila tableaux of Radha Krishna, and mesmerizing nighttime color illumination.",
    coordinatesEstimate: { lat: 27.5714, lng: 77.6744 },
    arKeypoints: [
      { id: "pt-1", label: "Central Shikhara & Kalash Apex", featureType: "spire", description: "Rising 125 feet high, the majestic marble spire is crowned with golden kalash and flag.", x: 50, y: 18 },
      { id: "pt-2", label: "Carrara Marble Carved Pillars", featureType: "column", description: "84 monumental pillars hand-carved with lifelike reliefs of celestial dancers and floral motifs.", x: 38, y: 55 },
      { id: "pt-3", label: "Radha Krishna Sanctum Portal", featureType: "entrance", description: "Grand entrance archway adorned with intricate peacocks and divine leela tableaux.", x: 50, y: 72 },
      { id: "pt-4", label: "Illuminated Marble Plinth & Balustrade", featureType: "relief", description: "Pristine white marble circumambulatory pathway that glows with changing chromatic light at dusk.", x: 74, y: 82 }
    ],
    historicalTimeline: [
      { yearOrEra: "January 2001", event: "Foundation Stone Laid", description: "Foundation stone laid by spiritual preceptor Jagadguru Kripalu Parishat in the sacred soil of Vrindavan." },
      { yearOrEra: "February 2012", event: "Grand Consecration", description: "Inaugurated after 11 years of painstaking artisan stone masonry by over 1,000 master craftsmen." },
      { yearOrEra: "Present Era", event: "Global Pilgrimage & Heritage Wonder", description: "Welcomes millions of pilgrims and architectural enthusiasts annually from across India and the globe." }
    ],
    architecturalSecrets: [
      "Constructed entirely from premium Italian Carrara marble imported from Tuscany, with no iron or steel reinforcement used in the core sanctum.",
      "The perimeter garden displays life-sized tableaux depicting Krishna raising Govardhan Hill and dancing upon Kaliya Nag.",
      "A dynamic architectural lighting system shifts the temple facade through 30+ chromatic color transitions every evening without heat damage to the marble."
    ],
    culturalSignificance: "Prem Mandir embodies devotion, artistic excellence, and peace, standing as one of Mathura-Vrindavan's most celebrated modern spiritual landmarks.",
    visitorTips: [
      "Visit in late afternoon around 5:30 PM to admire the pure white marble in daylight, then watch the spectacular evening musical fountain and illumination at 7:00 PM.",
      "Dress respectfully with covered shoulders and knees.",
      "Take time to circumambulate the 54-acre garden complex and inspect the Govardhan Leela displays."
    ],
    narrationScript: "Welcome to Prem Mandir, the Temple of Divine Love in Vrindavan, India. Rising before you in pristine ivory elegance, this monumental temple was sculpted from 30,000 tons of Italian Carrara marble. Look at the balance of Nagara architecture, hand-carved jali filigree, and soaring shikharas reaching 125 feet into the sky. At nightfall, the entire marble facade glows in kaleidoscopic shades of blue, amber, and violet.",
    chapters: [
      { id: "chap-1", title: "Temple of Divine Love", timestampHint: "0:00", script: "Prem Mandir stands as a modern wonder of sacred Indian architecture, carved from flawless Italian Carrara marble.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Artisan Marble Craftsmanship", timestampHint: "0:25", script: "More than a thousand master craftsmen spent eleven years carving every arch, pillar, and celestial tableau by hand.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Sacred Sanctum of Vrindavan", timestampHint: "0:50", script: "The central shrine honors Radha Krishna and Sita Rama with devotion and peace.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Twilight Symphony of Light", timestampHint: "1:15", script: "At dusk, dynamic illumination bathes the marble in radiant colors, transforming the sacred grounds into a celestial vision.", focusPointId: "pt-4" }
    ]
  },

  "tirupati balaji": {
    name: "Sri Venkateswara Swamy Temple (Tirupati Balaji)",
    localName: "తిరుమల వేంకటేశ్వర స్వామి దేవాలయం",
    city: "Tirumala, Tirupati",
    country: "India",
    architecturalStyle: "Classical Dravidian Temple Architecture & Gilded Ananda Nilayam Vimana",
    periodEra: "c. 300 AD (Mentioned in Sangam literature, patronized by Pallava, Chola & Vijayanagara dynasties)",
    confidence: 99,
    summary: "Perched atop the sacred Seshachalam Seven Hills in Tirumala, the Venkateswara Temple is the most visited sacred shrine on Earth. Famed for its golden Ananda Nilayam Vimana dome, Dravidian courtyards, and deep spiritual lore of Lord Balaji (Kaliyuga Varada).",
    coordinatesEstimate: { lat: 13.6833, lng: 79.3472 },
    arKeypoints: [
      { id: "pt-1", label: "Ananda Nilayam Golden Vimana", featureType: "dome", description: "Colossal three-tiered sanctum tower sheathed entirely in gilded gold copper plates.", x: 50, y: 22 },
      { id: "pt-2", label: "Bangaru Vakili (Golden Entrance Portal)", featureType: "entrance", description: "Historic gilded gateway adorned with the Dashavatara reliefs leading directly to the Garbhagriha.", x: 48, y: 62 },
      { id: "pt-3", label: "Dhwaja Stambha Flagstaff & Balipeetham", featureType: "column", description: "Tall gold-plated ceremonial flag mast that consecrates the temple precinct during Brahmotsavam.", x: 35, y: 75 },
      { id: "pt-4", label: "Mukkoti Pradakshinam & Tiered Gopuram", featureType: "facade", description: "Granite circumambulation corridor and imposing Dravidian entrance tower greeting millions of pilgrims.", x: 72, y: 40 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 300–800 AD", event: "Early Sangam & Pallava Devotion", description: "Celebrated in ancient Tamil Sangam poetry and patronized by the Pallava Queen Samavai." },
      { yearOrEra: "1517 AD", event: "Vijayanagara Golden Age", description: "Emperor Krishnadevaraya visited seven times, donating gold jewels and regilding the Ananda Nilayam dome." },
      { yearOrEra: "Modern Era", event: "Global Spiritual Hub", description: "The world's most venerated pilgrimage destination, welcoming over 60,000 to 100,000 pilgrims daily." }
    ],
    architecturalSecrets: [
      "The self-manifested (Swayambhu) deity idol of Lord Balaji is carved from smooth black stone that maintains a natural constant body temperature of 110°F.",
      "The Ananda Nilayam Vimana is covered in over 500 kilograms of pure gold, catching early morning sunlight above the mountain valley.",
      "The temple kitchen (Potu) prepares the world-renowned Tirupati Laddu Prasadam, which holds a registered Geographical Indication (GI) tag."
    ],
    culturalSignificance: "Revered as Kaliyuga Vaikuntha (the earthly abode of Vishnu in the current age), Tirupati Balaji is the spiritual heartbeat of millions worldwide.",
    visitorTips: [
      "Book Special Entry Darshan tokens well in advance via the official TTD portal.",
      "Follow traditional dress code (dhoti/kurta for men, saree/churidar for women).",
      "Visit the sacred Swami Pushkarini holy water tank before entering the main gopuram."
    ],
    narrationScript: "Welcome to Sri Venkateswara Swamy Temple at Tirumala, celebrated worldwide as Tirupati Balaji. High in the mist-veiled Seshachalam hills, this temple is the spiritual summit of Kaliyuga. Look above at the Ananda Nilayam: a radiant three-tiered dome clad entirely in gold, rising above the inner sanctum where Lord Venkateswara stands in timeless compassion. For two millennia, emperors, saints, and millions of humble seekers have climbed these holy hills to witness this radiant presence.",
    chapters: [
      { id: "chap-1", title: "The Seven Sacred Peaks", timestampHint: "0:00", script: "Tirumala sits nestled amid seven emerald mountain ridges representing the hoods of Adishesha.", focusPointId: "pt-4" },
      { id: "chap-2", title: "Ananda Nilayam: Abode of Bliss", timestampHint: "0:25", script: "The golden dome glows in morning light, engineered with ancient Dravidian stone craft and Vijayanagara gold.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Through the Golden Portal", timestampHint: "0:50", script: "Passing through the Bangaru Vakili, pilgrims enter the ancient sanctum where prayers have echoed for millennia.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Eternal Festival", timestampHint: "1:15", script: "Around the Dhwaja Stambha, the sacred energy of Brahmotsavam and devotional song resonates without pause.", focusPointId: "pt-3" }
    ]
  },

  "somnath temple": {
    name: "Shree Somnath Jyotirlinga Temple",
    localName: "સોમનાથ જ્યોતિર્લિંગ મંદિર",
    city: "Prabhas Patan, Veraval, Gujarat",
    country: "India",
    architecturalStyle: "Maru-Gurjara (Chaulukya) Kailash Mahameru Prasad Style",
    periodEra: "Ancient antiquity; Modern temple reconstructed 1951 (Consecrated by President Dr. Rajendra Prasad)",
    confidence: 99,
    summary: "Standing proudly on the shores of the Arabian Sea in Saurashtra, Somnath is the First of the Twelve sacred Jyotirlingas of Lord Shiva. Known as 'The Shrine Eternal', it has risen invincibly through centuries of destruction and reconstruction, showcasing exquisite sandstone carvings and soaring spires.",
    coordinatesEstimate: { lat: 20.8880, lng: 70.4013 },
    arKeypoints: [
      { id: "pt-1", label: "155ft Main Shikhara & Golden Kalash", featureType: "spire", description: "Soaring Kailash Mahameru Prasad spire crowned by a 10-ton stone Kalash and 27ft flag mast.", x: 50, y: 20 },
      { id: "pt-2", label: "Baan Stambh (Arrow Pillar of the Sea)", featureType: "column", description: "Historic sea pillar marking an unobstructed zero-land straight line to the South Pole (Antarctica).", x: 25, y: 72 },
      { id: "pt-3", label: "Sabha Mandapa & Carved Torana Arches", featureType: "facade", description: "Intricately sculpted assembly hall featuring Maru-Gurjara bracket figures and ribbed ceilings.", x: 52, y: 55 },
      { id: "pt-4", label: "Arabian Sea Shoreline Promenade", featureType: "relief", description: "Fortified stone seawall where the waves of the Arabian Sea continuously lap the holy temple foundation.", x: 78, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Vedic Era", event: "Prabhas Teertha Consecration", description: "Revered in the Rigveda, Mahabharata, and Skanda Purana as the place where Moon god Soma worshipped Shiva." },
      { yearOrEra: "1026–1706 AD", event: "Era of Resilience", description: "Destroyed and valiantly rebuilt multiple times across centuries by Chaulukya kings and Queen Ahilyabai Holkar." },
      { yearOrEra: "May 1951", event: "The Shrine Eternal Reborn", description: "Reconstructed in authentic Maru-Gurjara style championed by Sardar Vallabhbhai Patel and consecrated by India's first President." }
    ],
    architecturalSecrets: [
      "The Baan Stambh (Arrow Pillar) bears a 6th-century Sanskrit inscription stating that from this exact point on Earth, a straight line reaches Antarctica with zero landmass in between.",
      "The modern spire is built strictly according to ancient Shilpa Shastras using golden-yellow sandstone from Dhrangadhra without iron reinforcement.",
      "At night, a high-tech sound and light show projected across the sandstone facade narrates the temple's thousand-year triumph of spirit."
    ],
    culturalSignificance: "Somnath is the eternal symbol of India's cultural resilience and spiritual devotion, honoring Shiva as the Lord of the Moon and protector of the cosmos.",
    visitorTips: [
      "Attend the evening Ganga-style Arabian Sea Aarti at 7:00 PM followed by the sound and light show.",
      "Walk along the scenic Somnath Promenade overlooking the crashing waves.",
      "Electronics, cameras, and leather items must be placed in free cloakrooms before security."
    ],
    narrationScript: "Welcome to Shree Somnath Temple, the premier and first of the twelve sacred Jyotirlingas of Lord Shiva. Standing against the roaring breakers of the Arabian Sea, Somnath is known as 'The Shrine Eternal'—a monument that repeatedly rose from the ashes of history. Gaze upon its 155-foot Shikhara carved in golden sandstone: every pillar and arch tells the story of unyielding faith, where the sacred and the sea merge into eternity.",
    chapters: [
      { id: "chap-1", title: "The Shrine Eternal", timestampHint: "0:00", script: "Somnath stands on the western edge of India, where ocean winds and sacred chants have met for thousands of years.", focusPointId: "pt-4" },
      { id: "chap-2", title: "The Great Spire of Shiva", timestampHint: "0:25", script: "The 155-foot Kailash Mahameru Shikhara dominates the coastline, hand-carved according to ancient Vedic geometry.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Arrow Pillar of the Sea", timestampHint: "0:50", script: "The ancient Baan Stambh marks a navigational miracle: a direct meridian line connecting Somnath to the South Pole.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Resilience in Stone", timestampHint: "1:15", script: "Inside the grand Sabha Mandapa, master craftsmen resurrected classical Maru-Gurjara architecture in the 20th century.", focusPointId: "pt-3" }
    ]
  },

  "kedarnath temple": {
    name: "Kedarnath Jyotirlinga Temple",
    localName: "केदारनाथ ज्योतिर्लिंग मंदिर",
    city: "Kedarnath, Rudraprayag, Uttarakhand",
    country: "India",
    architecturalStyle: "Himalayan Katyuri Granite Ashlar Architecture",
    periodEra: "8th Century AD (Revitalized by Adi Shankaracharya; Pandava legendary origins)",
    confidence: 99,
    summary: "Nestled at 11,755 feet in the Garhwal Himalayas near the Chorabari Glacier and Mandakini River, Kedarnath is the highest of the 12 Jyotirlingas and the crowning jewel of the Chota Char Dham. Built from interlocking giant grey granite slabs that have endured avalanches, snowstorms, and earthquakes for over a millennium.",
    coordinatesEstimate: { lat: 30.7352, lng: 79.0669 },
    arKeypoints: [
      { id: "pt-1", label: "Interlocking Granite Shikhara & Spire", featureType: "spire", description: "Stepped Katyuri-style pyramidal stone shikhara built from massive grey granite ashlar blocks.", x: 50, y: 24 },
      { id: "pt-2", label: "Kedarnath Snow Peak Backdrop", featureType: "peak", description: "The monumental 22,769ft Kedarnath mountain massif looming directly behind the temple sanctuary.", x: 50, y: 10 },
      { id: "pt-3", label: "Colossal Stone Nandi Portal", featureType: "statue", description: "Carved stone bull guarding the pillared hall entrance, worshipped by every ascending pilgrim.", x: 38, y: 70 },
      { id: "pt-4", label: "Bhim Shila (Miracle Protective Boulder)", featureType: "relief", description: "Massive natural rock that deflected torrential waters and boulders behind the temple during the 2013 flash floods.", x: 68, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "Mahabharata Antiquity", event: "Pandava Founding Lore", description: "Legend records that the Pandavas sought Lord Shiva's grace here, where Shiva dove into the earth as a bull." },
      { yearOrEra: "8th Century AD", event: "Adi Shankaracharya Restructuring", description: "The great philosopher-saint revived the pilgrimage circuit and attained Mahasamadhi behind the temple." },
      { yearOrEra: "June 2013", event: "The Miracle of Bhim Shila", description: "During catastrophic Himalayan flash floods, a massive boulder settled behind the shrine, parting the torrent and saving the ancient temple." }
    ],
    architecturalSecrets: [
      "The temple is assembled from enormous cut granite blocks held together with iron clamps and mortise joints, engineered to withstand centuries under glaciers.",
      "The sanctum features an irregular triangular rock pedestal (the hump of Shiva in bull form) instead of a conventional cylindrical lingam.",
      "Geological surveys revealed the temple spent over 400 years buried entirely under ice during the Little Ice Age (14th–18th century) without structural collapse."
    ],
    culturalSignificance: "Kedarnath is the supreme Himalayan pilgrimage destination, open only six months a year from Akshaya Tritiya to Diwali before winter snows close the valley.",
    visitorTips: [
      "Trek 16 km from Gaurikund or book authorized helicopter tickets via the official IRCTC portal.",
      "Acclimatize carefully to the 11,755ft altitude and carry thermals and rainwear even in summer.",
      "Visit the Bhim Shila boulder directly behind the temple to witness the stone that saved Kedarnath."
    ],
    narrationScript: "Welcome to Kedarnath, the highest and most awe-inspiring of the twelve Jyotirlingas, perched 11,755 feet high in the Garhwal Himalayas. Look behind the stone temple: towering directly into the clouds is the 22,000-foot Kedarnath peak and snowfields. Assembled from titanic granite blocks over a thousand years ago, this temple survived centuries buried under ice and weathered violent glacial floods. Notice the Bhim Shila boulder just behind the sanctum—a guardian stone that parted raging waters in 2013.",
    chapters: [
      { id: "chap-1", title: "Throne of the Himalayas", timestampHint: "0:00", script: "Surrounded by snow-capped peaks and the Mandakini River, Kedarnath is one of the most sacred places on Earth.", focusPointId: "pt-2" },
      { id: "chap-2", title: "Titanic Granite Engineering", timestampHint: "0:25", script: "Katyuri craftsmen interlocked massive stone slabs without cement, creating an indestructible mountain fortress of faith.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Bhim Shila: The Miracle Stone", timestampHint: "0:50", script: "Resting behind the sanctum, the Bhim Shila boulder miraculously sheltered the temple from catastrophe.", focusPointId: "pt-4" },
      { id: "chap-4", title: "The Sacred Nandi Guard", timestampHint: "1:15", script: "Before the arched entrance, the monolithic stone Nandi bull gazes eternally into the sanctum sanctorum.", focusPointId: "pt-3" }
    ]
  },

  "badrinath temple": {
    name: "Badrinath Temple (Badri Vishal)",
    localName: "श्री बद्रीनाथ मंदिर",
    city: "Badrinath, Chamoli, Uttarakhand",
    country: "India",
    architecturalStyle: "Traditional Himalayan Pagoda-Nagara Architecture with Vibrant Painted Facade",
    periodEra: "Ancient origins; Rebuilt by Garhwal kings and Adi Shankaracharya in 9th Century",
    confidence: 99,
    summary: "Situated along the rushing Alaknanda River between the Nar and Narayana mountain ranges, Badrinath is the principal Himalayan Char Dham shrine dedicated to Lord Vishnu as Badri Vishal. Distinguished by its brightly painted arched facade, gilded cupola roof, and nearby natural hot sulfur springs (Tapt Kund).",
    coordinatesEstimate: { lat: 30.7447, lng: 79.4930 },
    arKeypoints: [
      { id: "pt-1", label: "Vibrant Arched Himalayan Facade", featureType: "facade", description: "Iconic brightly painted multihued facade featuring neoclassical arches and traditional Garhwali wooden eaves.", x: 50, y: 35 },
      { id: "pt-2", label: "Golden Gilded Cupola Roof", featureType: "dome", description: "Gilded copper cupola crowning the sanctum that glints against the snowy Neelkanth peak.", x: 50, y: 18 },
      { id: "pt-3", label: "Alaknanda River Gorge & Bridge", featureType: "relief", description: "Glacial river torrent rushing beneath the temple cliffs, fed directly by the Satopanth glacier.", x: 28, y: 80 },
      { id: "pt-4", label: "Tapt Kund Thermal Sulfur Springs", featureType: "entrance", description: "Natural steaming sulfur water pools on the riverbank where pilgrims purify themselves before darshan.", x: 72, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "9th Century AD", event: "Adi Shankaracharya Consecration", description: "Adi Shankaracharya discovered the black Shaligram idol of Lord Badrinarayan in the Alaknanda's Narad Kund and enshrined it." },
      { yearOrEra: "16th–17th Century", event: "Garhwal Royal Renovations", description: "The Kings of Garhwal expanded the temple complex after avalanches, adding the colorful arched gateway." },
      { yearOrEra: "Modern Era", event: "Supreme Vaishnava Pilgrimage", description: "Revered as the holiest of the 108 Divya Desams and the core of the all-India Char Dham circuit." }
    ],
    architecturalSecrets: [
      "The 1-meter-tall black stone deity of Lord Badrinarayan depicts Vishnu seated in deep Padmasana meditation under a Badri (jujube) tree canopy.",
      "The temple is traditionally served by a Nambudiri Brahmin head priest (Rawal) from Kerala, maintaining a cultural bond established by Adi Shankaracharya across North and South India.",
      "The Tapt Kund natural hot springs maintain a constant temperature of 131°F (55°C) year-round, despite freezing Himalayan river waters flowing just feet away."
    ],
    culturalSignificance: "Badrinath is the premier Char Dham sanctuary where humanity seeks spiritual liberation amidst the grandest alpine scenery of the Indian subcontinent.",
    visitorTips: [
      "Bathe in the natural mineral waters of Tapt Kund before ascending the stone steps to the temple.",
      "Visit Mana village (the last Indian village before the Tibet border), just 3 km past Badrinath.",
      "Marvel at the pyramidal Neelkanth Peak rising behind the temple at sunrise."
    ],
    narrationScript: "Welcome to Badrinath Temple, the hallowed seat of Lord Badri Vishal in the high Himalayas. Standing at 10,279 feet along the foaming waters of the Alaknanda River, Badrinath is instantly recognizable by its vibrant, colorful arched facade and gilded roof. Founded by Adi Shankaracharya in the 9th century, this temple unites India: its Kerala-born Rawal priest performs sacred rites beneath the gaze of the Nar and Narayana mountain ranges.",
    chapters: [
      { id: "chap-1", title: "Abode of Badri Vishal", timestampHint: "0:00", script: "Surrounded by vertical Himalayan cliffs, Badrinath welcomes seekers into the heart of the sacred mountains.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Gilded Crown", timestampHint: "0:25", script: "The gold-plated cupola reflects morning light between the majestic peaks of Nar and Narayana.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Waters of the Alaknanda", timestampHint: "0:50", script: "The roaring Alaknanda River carries glacial waters right past the temple steps.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Tapt Kund: Thermal Blessing", timestampHint: "1:15", script: "Steam rises from Tapt Kund, where boiling mineral waters have comforted travelers for millennia.", focusPointId: "pt-4" }
    ]
  },

  "jagannath temple": {
    name: "Shree Jagannath Temple, Puri",
    localName: "ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର",
    city: "Puri",
    country: "India",
    architecturalStyle: "Kalinga Rekha Deula Temple Architecture",
    periodEra: "12th Century AD (Reconstructed by King Anantavarman Chodaganga Deva)",
    confidence: 99,
    summary: "One of the supreme Char Dham sanctuaries, the Jagannath Temple in Puri is a 214-foot architectural colossus of Kalinga stonework. Renowned for its mysterious sacred traditions, the world's largest kitchen (Rosha Ghara), and the monumental annual Ratha Yatra chariot festival.",
    coordinatesEstimate: { lat: 19.8049, lng: 85.8179 },
    arKeypoints: [
      { id: "pt-1", label: "214ft Main Rekha Deula Shikhara", featureType: "spire", description: "Curvilinear stone sanctuary tower dominating the Bay of Bengal coastline, crowned with the Neela Chakra.", x: 50, y: 18 },
      { id: "pt-2", label: "Neela Chakra & Patitapabana Flag", featureType: "relief", description: "Eight-metal (Ashtadhatu) sacred discus atop the spire; its flag defies the sea breeze daily.", x: 50, y: 8 },
      { id: "pt-3", label: "Singhadwara (The Lion Gate)", featureType: "entrance", description: "Monumental eastern portal guarded by colossal stone lions, leading to the Baisipahacha (22 sacred steps).", x: 42, y: 78 },
      { id: "pt-4", label: "Aruna Stambha (Sun Pillar)", featureType: "column", description: "16-sided monolithic chlorite stone pillar brought from the Konark Sun Temple in the 18th century.", x: 68, y: 82 }
    ],
    historicalTimeline: [
      { yearOrEra: "12th Century AD", event: "Reign of Eastern Ganga Dynasty", description: "King Anantavarman Chodaganga Deva initiated the construction of the present massive stone temple complex." },
      { yearOrEra: "1568 AD", event: "Resistance & Restoration", description: "Temple treasures protected by sevayats across turbulent sieges and re-established by Gajapati rulers." },
      { yearOrEra: "Annual Tradition", event: "The Grand Ratha Yatra", description: "Millions gather each summer to pull the towering wooden chariots of Jagannath, Balabhadra, and Subhadra." }
    ],
    architecturalSecrets: [
      "The Patitapabana flag fluttering atop the 214ft spire naturally flutters in the opposite direction of the prevailing wind.",
      "No birds or airplanes are ever observed flying over the central spire of the Jagannath temple.",
      "The temple kitchen feeds over 50,000 people daily using 7 earthen pots stacked atop each other over wood fires; the top pot cooks first."
    ],
    culturalSignificance: "Jagannath (Lord of the Universe) transcends caste, sect, and dogma, celebrating divine love and brotherhood through the world's oldest and grandest chariot festival.",
    visitorTips: [
      "Traditional Indian attire is mandatory; leather goods, mobile phones, and cameras are strictly prohibited inside.",
      "Taste the sacred Mahaprasad (Ananda Bazaar) prepared fresh in the world's largest temple kitchen.",
      "Inspect the Aruna Stambha monolithic sun pillar standing before the Lion Gate."
    ],
    narrationScript: "Welcome to Shree Jagannath Temple in Puri, on the eastern coast of Odisha. Rising 214 feet into the sky, this curvilinear stone marvel is a pinnacle of Kalinga architecture. Dedicated to Jagannath, Balabhadra, and Subhadra, the temple is alive with ancient mysteries: its flag flutters against the wind, its shadow never falls upon the ground at noon, and its kitchen is the largest on Earth. Every year, millions gather right here to pull the giant chariots of the Ratha Yatra.",
    chapters: [
      { id: "chap-1", title: "Kalinga Stone Colossus", timestampHint: "0:00", script: "The soaring Rekha Deula shikhara has watched over the Bay of Bengal for over nine centuries.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Neela Chakra & Flying Flag", timestampHint: "0:25", script: "At the peak sits the ancient eight-metal Neela Chakra discus, re-flagged every single afternoon by fearless climbers.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Singhadwara: The Lion's Portal", timestampHint: "0:50", script: "Two stone lions guard the eastern entrance, leading pilgrims across the sacred twenty-two steps.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Aruna Stambha: Pillar of the Sun", timestampHint: "1:15", script: "Carved from polished dark chlorite, the Aruna Stambha once stood before the Sun Temple of Konark.", focusPointId: "pt-4" }
    ]
  },

  "ramanathaswamy temple": {
    name: "Ramanathaswamy Temple (Rameswaram)",
    localName: "இராமேசுவரம் இராமநாதசுவாமி கோயில்",
    city: "Rameswaram, Ramanathapuram, Tamil Nadu",
    country: "India",
    architecturalStyle: "Dravidian Architecture with Monumental Pillared Corridors",
    periodEra: "12th–17th Century AD (Expanded by Pandya Kings and Jaffna Sethupathis)",
    confidence: 99,
    summary: "Located on Pamban Island at the southern tip of India, Ramanathaswamy Temple is both a Jyotirlinga and an all-India Char Dham shrine. It boasts the longest and most spectacular pillared temple corridor on Earth, with over 1,200 hand-carved granite pillars lining its third corridor.",
    coordinatesEstimate: { lat: 9.2881, lng: 79.3174 },
    arKeypoints: [
      { id: "pt-1", label: "Third Corridor of 1,212 Pillars", featureType: "column", description: "The world's longest pillared hall: 1,220 meters of sculpted granite columns and painted geometric ceiling beams.", x: 50, y: 55 },
      { id: "pt-2", label: "Towering Eastern Rajagopuram", featureType: "spire", description: "126-foot high multi-tiered Dravidian gateway tower dominating the island skyline.", x: 50, y: 22 },
      { id: "pt-3", label: "Agni Teertham Sacred Sea Beach", featureType: "relief", description: "Holy Bay of Bengal shoreline where pilgrims take their first ritual dip before bathing at the 22 wells.", x: 25, y: 80 },
      { id: "pt-4", label: "22 Theertham Sacred Wells", featureType: "entrance", description: "Ancient freshwater wells within the temple complex, each containing water of distinct taste and mineral content.", x: 74, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ramayana Era", event: "Consecration by Lord Rama", description: "Lord Rama worshipped Shiva here, consecrating the sand lingam created by Sita to atone for the war in Lanka." },
      { yearOrEra: "12th Century AD", event: "Chola & Pandya Expansion", description: "Expanded from a humble thatched shrine into a magnificent stone temple complex by Parakrama Bahu and Jaffna rulers." },
      { yearOrEra: "18th Century AD", event: "Sethupathi Masterpiece", description: "Muthuramalinga Sethupathi completed the monumental third pillared corridor, carving over 1,200 continuous granite pillars." }
    ],
    architecturalSecrets: [
      "The outer corridor measures 6.9 meters high, 197 meters east-west, and 133 meters north-south, forming the longest temple corridor in the world.",
      "Granite blocks for the massive corridors had to be transported across the Pamban sea straits, as no granite quarries exist on the sandy island.",
      "The temple houses two lingams: the Ramalingam molded by Sita out of sand, and the Viswalingam brought by Hanuman from Mount Kailash."
    ],
    culturalSignificance: "Rameswaram links Northern and Southern spiritual traditions: a pilgrimage to Kashi (Varanasi) is considered complete only after bringing Ganga water to Ramanathaswamy.",
    visitorTips: [
      "Begin by bathing at Agni Teertham sea beach, then bathe at the 22 holy wells inside the temple before darshan.",
      "Walk the Third Corridor early in the morning when shafts of sunlight illuminate the perspective of granite pillars.",
      "Visit nearby Dhanushkodi and Ram Setu (Adam's Bridge) to see where the coral reefs cross toward Sri Lanka."
    ],
    narrationScript: "Welcome to Ramanathaswamy Temple in Rameswaram, on Pamban Island at the southern threshold of India. Reaching across history as both a Jyotirlinga and Char Dham, this temple contains one of humanity's greatest architectural wonders: a labyrinth of soaring pillared corridors stretching over a kilometer in length. Walk beneath 1,212 granite pillars carved by master artisans centuries ago, where Lord Rama prayed before crossing the ocean to Lanka.",
    chapters: [
      { id: "chap-1", title: "Pillared Corridor of the World", timestampHint: "0:00", script: "Stretching nearly 200 meters in a single perspective, this corridor is the longest pillared hall on Earth.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Gateway of Pamban Island", timestampHint: "0:25", script: "The multi-tiered eastern Rajagopuram towers above the palm trees and ocean waters of Rameswaram.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The 22 Holy Wells", timestampHint: "0:50", script: "Within the temple courtyards lie 22 sacred wells, each drawn to bless and purify visiting pilgrims.", focusPointId: "pt-4" },
      { id: "chap-4", title: "Agni Teertham: Shores of Faith", timestampHint: "1:15", script: "Where calm turquoise waters meet the sand, pilgrims perform sacred rites before entering the temple gates.", focusPointId: "pt-3" }
    ]
  },

  "konark sun temple": {
    name: "Sun Temple, Konark (Black Pagoda)",
    localName: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର",
    city: "Konark, Puri, Odisha",
    country: "India",
    architecturalStyle: "Kalinga Monumental Chariot Architecture (UNESCO World Heritage)",
    periodEra: "c. 1250 AD (Reign of King Narasimhadeva I, Eastern Ganga Dynasty)",
    confidence: 99,
    summary: "A UNESCO World Heritage masterpiece, the Konark Sun Temple is conceived as a gargantuan stone chariot for Surya, the Sun God. Featuring 24 intricately sculpted stone wheels that function as accurate astronomical sundials, pulled by seven spirited horses along the Bay of Bengal coast.",
    coordinatesEstimate: { lat: 19.8876, lng: 86.0945 },
    arKeypoints: [
      { id: "pt-1", label: "24 Carved Sundial Wheels", featureType: "relief", description: "9.9ft high stone wheels featuring 8 major and 8 minor spokes that calculate time to the exact minute by shadow.", x: 38, y: 72 },
      { id: "pt-2", label: "Jagamohana (Assembly Hall) Pyramid", featureType: "dome", description: "Stepped 128ft pyramidal stone roof adorned with sculptures of celestial musicians (Surasundaris).", x: 50, y: 32 },
      { id: "pt-3", label: "Natya Mandapa (Hall of Dance)", featureType: "facade", description: "Pillared open-air dance pavilion entirely covered in bas-relief sculptures of Odissi classical dance postures.", x: 68, y: 65 },
      { id: "pt-4", label: "Galloping Stone Horses of the Sun", featureType: "statue", description: "Seven monumental war-horse sculptures rearing forward, symbolizing the seven days of the week and rainbow colors.", x: 22, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1250 AD", event: "Construction by King Narasimhadeva I", description: "1,200 artisans spent 12 years quarrying Khondalite and chlorite stone to build the colossal chariot of the Sun." },
      { yearOrEra: "16th–17th Century", event: "European Sailor Navigation", description: "European mariners named Konark the 'Black Pagoda' using its dark stone silhouette as a landmark for navigation." },
      { yearOrEra: "1984", event: "UNESCO World Heritage Recognition", description: "Enscribed by UNESCO as one of humanity's greatest architectural and astronomical achievements." }
    ],
    architecturalSecrets: [
      "The wheels are functioning sundials: by placing a finger or stick at the center of the axle, the shadow cast across the carved beads indicates the precise time of day.",
      "The original temple sanctuary tower was over 229 feet (70m) high, engineered with magnetic iron beams that reportedly held the central Surya idol floating in midair.",
      "The temple is aligned with mathematical precision: the first rays of dawn at the winter and summer solstices illuminate the center of the sanctum."
    ],
    culturalSignificance: "Konark is the highest achievement of Kalinga stone artistry, capturing time, rhythm, and cosmic energy in an immortal chariot of sandstone.",
    visitorTips: [
      "Hire an authorized heritage guide or inspect the wheels closely to see how the spoke shadows calculate time.",
      "Visit early in the morning when warm golden sunlight lights up the musicians carved into the upper tiers.",
      "Attend the annual Konark Dance Festival held in December against the illuminated stone backdrop."
    ],
    narrationScript: "Welcome to the Sun Temple of Konark, a UNESCO World Heritage wonder on the coast of Odisha. Conceived in the 13th century by King Narasimhadeva, this is not merely a temple—it is a cosmic chariot in stone. Look at the twenty-four titanic wheels carved into its base: each is an accurate sundial, pulled by seven galloping horses across the heavens. Carved from red Khondalite stone, every square inch celebrates dance, astronomy, and the life-giving warmth of the Sun.",
    chapters: [
      { id: "chap-1", title: "The Cosmic Stone Chariot", timestampHint: "0:00", script: "Conceived as the chariot of the Sun God Surya, Konark is one of the grandest architectural feats in human history.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Wheels of Time", timestampHint: "0:25", script: "Twenty-four stone wheels line the plinth, sculpted with spokes that tell time to the minute by the sun's shadow.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Natya Mandapa: Hall of Rhythm", timestampHint: "0:50", script: "Every pillar in the dance hall is covered in graceful dancers preserving the ancient traditions of Odissi.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Seven Horses of Dawn", timestampHint: "1:15", script: "Seven rearing stone horses leap from the plinth, pulling the chariot toward the golden horizon of the Bay of Bengal.", focusPointId: "pt-4" }
    ]
  },

  "akshardham temple": {
    name: "Swaminarayan Akshardham, New Delhi",
    localName: "स्वामीनारायण अक्षरधाम मंदिर",
    city: "New Delhi",
    country: "India",
    architecturalStyle: "Classical Nagara & Rajasthani Vastu Shastra Architecture",
    periodEra: "Consecrated November 2005 (Inspired by Pramukh Swami Maharaj)",
    confidence: 99,
    summary: "Spanning 100 acres along the Yamuna River, Swaminarayan Akshardham in New Delhi is the largest comprehensive Hindu temple complex in the world. Constructed without structural steel from pink Rajasthani sandstone and Italian Carrara marble, it features 234 carved pillars, 9 domes, and 20,000 murtis.",
    coordinatesEstimate: { lat: 28.6127, lng: 77.2773 },
    arKeypoints: [
      { id: "pt-1", label: "141ft Central Mandir & Golden Murti", featureType: "spire", description: "Monumental central sanctum rising 141 feet, featuring 9 ornate domes and hand-carved stone shikharas.", x: 50, y: 22 },
      { id: "pt-2", label: "Gajendra Pith (Elephant Plinth)", featureType: "relief", description: "148 life-sized stone elephants carved around the base honoring peace, nature, and divine compassion.", x: 50, y: 75 },
      { id: "pt-3", label: "Yagnapurush Kund Stepwell", featureType: "entrance", description: "India's largest stepwell featuring 2,870 stone steps and a dramatic musical laser water show.", x: 78, y: 65 },
      { id: "pt-4", label: "Parikrama Colonnade of 234 Pillars", featureType: "column", description: "Continuous red sandstone colonnade with hand-carved capitals depicting India's saints and philosophers.", x: 25, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "November 2000", event: "Construction Commences", description: "Over 7,000 artisans and 4,000 volunteers began carving thousands of tons of sandstone without heavy machinery." },
      { yearOrEra: "November 2005", event: "Grand Dedication", description: "Inaugurated by President Dr. A.P.J. Abdul Kalam and Prime Minister Manmohan Singh." },
      { yearOrEra: "2007", event: "Guinness World Record", description: "Formally verified by Guinness World Records as the World's Largest Comprehensive Hindu Temple." }
    ],
    architecturalSecrets: [
      "Built entirely from interlocking sandstone and marble blocks without a single gram of structural steel or reinforced concrete.",
      "The Gajendra Pith plinth weighs over 3,000 tons and represents one of the largest continuous stone animal reliefs in world history.",
      "Surrounding the monument is the Narayan Sarovar, containing water from 151 sacred rivers and lakes across India."
    ],
    culturalSignificance: "Akshardham celebrates the timeless heritage of Sanatana Dharma, Indian art, architecture, and universal human values of peace and devotion.",
    visitorTips: [
      "Plan at least 3–4 hours to explore the central mandir, the cultural boat ride, and the evening musical fountain show.",
      "Electronic devices, bags, and phones are securely stored in the outer cloakroom.",
      "Admire the Gajendra Pith elephant carvings around the lower perimeter."
    ],
    narrationScript: "Welcome to Swaminarayan Akshardham in New Delhi, the world's largest comprehensive Hindu temple complex. Consecrated in 2005 under the spiritual guidance of Pramukh Swami Maharaj, this monumental sanctuary was hand-carved by 11,000 artisans from pink Rajasthani sandstone and Italian Carrara marble. Look at the central monument rising 141 feet high: surrounded by 148 stone elephants and 234 sculpted pillars, it stands as a testament to the living heritage of Indian architecture.",
    chapters: [
      { id: "chap-1", title: "A Modern Wonder of Stone", timestampHint: "0:00", script: "Built without steel or concrete, Akshardham demonstrates the timeless power of classical Indian stone carving.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Elephant Plinth", timestampHint: "0:25", script: "Around the base, 148 life-sized stone elephants carry the temple upon their backs in tribute to peace and nature.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Yagnapurush Kund", timestampHint: "0:50", script: "India's largest stepwell combines ancient geometry with modern multimedia laser and water fountains.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Pillared Colonnade of Saints", timestampHint: "1:15", script: "The colonnade of 234 carved pillars honors the sages, scientists, and spiritual teachers of Indian civilization.", focusPointId: "pt-4" }
    ]
  },

  "mahakaleshwar temple": {
    name: "Mahakaleshwar Jyotirlinga Temple",
    localName: "श्री महाकालेश्वर ज्योतिर्लिंग",
    city: "Ujjain, Madhya Pradesh",
    country: "India",
    architecturalStyle: "Bhumija & Maratha-Nagara Temple Architecture",
    periodEra: "Antiquity; Renovated by Paramara Dynasty & General Ranoji Shinde in 1734 AD",
    confidence: 99,
    summary: "Located on the sacred banks of the Shipra River in ancient Ujjain (Avantika), Mahakaleshwar is the only South-Facing (Dakshinmukhi) Jyotirlinga among the twelve. Famed for its legendary early-morning Bhasma Aarti and its multi-tiered sanctum where Shiva reigns as the Lord of Time and Death (Mahakala).",
    coordinatesEstimate: { lat: 23.1827, lng: 75.7682 },
    arKeypoints: [
      { id: "pt-1", label: "Multi-Tiered Shikhara & Spire", featureType: "spire", description: "Bhumija-style stone shikhara rising above the Rudrasagar Lake and Ujjain skyline.", x: 50, y: 22 },
      { id: "pt-2", label: "Dakshinmukhi Garbhagriha Portal", featureType: "entrance", description: "Subterranean sanctum housing the south-facing swayambhu Jyotirlinga lingam.", x: 45, y: 65 },
      { id: "pt-3", label: "Koteshwar Kund Holy Water Tank", featureType: "relief", description: "Sacred stepped stone tank within the temple courtyard surrounded by smaller shrines.", x: 72, y: 75 },
      { id: "pt-4", label: "Mahakal Lok Grand Corridor", featureType: "column", description: "Expansive 900-meter cultural corridor featuring 108 grand stone pillars and Shiva Purana murals.", x: 28, y: 70 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Avantika: The Greenwich of Ancient India", description: "Ujjain served as the prime meridian of Hindu astronomy and the legendary capital of Emperor Vikramaditya." },
      { yearOrEra: "1734 AD", event: "Maratha Revival by Ranoji Shinde", description: "General Ranoji Shinde rebuilt the present temple structure and revived traditional worship rituals." },
      { yearOrEra: "October 2022", event: "Mahakal Lok Corridor Unveiled", description: "Inauguration of the massive 900m cultural promenade celebrating Shiva's cosmic lore." }
    ],
    architecturalSecrets: [
      "Mahakaleshwar is the only Jyotirlinga facing south (Dakshinmukhi)—the direction of Yama (death)—symbolizing Shiva's power to conquer death itself.",
      "The sanctum has three tiers: Mahakaleshwar in the lower subterranean level, Omkareshwar in the middle tier, and Nagchandreshwar in the top tier (opened only once a year on Nag Panchami).",
      "The sacred Bhasma Aarti uses holy cremation ash at 4:00 AM every morning in a ritual practiced nowhere else in the world."
    ],
    culturalSignificance: "Ujjain is one of the four sacred Kumbh Mela sites (Simhastha), with Mahakaleshwar at the center of astronomical and spiritual gravity.",
    visitorTips: [
      "Register online in advance for the world-famous 4:00 AM Bhasma Aarti.",
      "Walk through the newly inaugurated Mahakal Lok corridor in the evening when the murals and statues are illuminated.",
      "Take a holy bath at Ram Ghat along the Shipra River before visiting the temple."
    ],
    narrationScript: "Welcome to Mahakaleshwar Temple in Ujjain, the ancient city of Avantika. Here, Lord Shiva reigns as Mahakala—the Master of Time, Eternity, and Death. Unlike all other Jyotirlingas, Mahakaleshwar faces south toward the realm of death, offering protection and liberation to all who seek his grace. Enter into the sacred subterranean sanctum where the scent of bilva leaves and the rhythms of the dawn Bhasma Aarti have reverberated for thousands of years.",
    chapters: [
      { id: "chap-1", title: "Lord of Time and Eternity", timestampHint: "0:00", script: "In ancient Ujjain, the prime meridian of Vedic astronomy, Mahakala governs the cosmic cycle.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The South-Facing Sanctum", timestampHint: "0:25", script: "Deep within the subterranean stone chamber rests the self-manifested south-facing Jyotirlinga.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Koteshwar Kund", timestampHint: "0:50", script: "The historic stepped tank mirrors the temple towers, offering peaceful reflection within the complex.", focusPointId: "pt-3" },
      { id: "chap-4", title: "The Mahakal Lok Corridor", timestampHint: "1:15", script: "Over 100 stone pillars and massive murals bring the epics of the Shiva Purana to life.", focusPointId: "pt-4" }
    ]
  },

  "kailasa temple": {
    name: "Kailasa Temple, Ellora (Cave 16)",
    localName: "कैलास मंदिर, वेरुळ",
    city: "Ellora, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra",
    country: "India",
    architecturalStyle: "Monolithic Rock-Cut Rashtrakuta Dravidian Architecture (UNESCO World Heritage)",
    periodEra: "8th Century AD (c. 756–773 AD, Commissioned by King Krishna I)",
    confidence: 99,
    summary: "The pinnacle of rock-cut architecture on Earth, Cave 16 of the Ellora Caves is a colossal monolithic temple carved entirely from a single basalt cliffside from the top down. Over 200,000 tons of rock were chiseled away to create a multi-story freestanding temple mirroring Mount Kailash.",
    coordinatesEstimate: { lat: 20.0238, lng: 75.1793 },
    arKeypoints: [
      { id: "pt-1", label: "Top-Down Monolithic Central Vimana", featureType: "spire", description: "Rising 30 meters high, carved out of the living basalt cliff without a single joined stone.", x: 50, y: 25 },
      { id: "pt-2", label: "Ravana Shaking Mount Kailash Relief", featureType: "relief", description: "World-renowned dramatic stone relief depicting demon king Ravana trapped beneath Shiva's toe on Kailash.", x: 42, y: 65 },
      { id: "pt-3", label: "Monolithic Elephant & Dhwaja Stambha", featureType: "statue", description: "Life-sized stone war elephant and 15-meter victory pillar carved from the courtyard floor.", x: 30, y: 72 },
      { id: "pt-4", label: "Two-Story Nandi Mandapa Bridge", featureType: "facade", description: "Elevated rock bridge connecting the entrance gateway to the Nandi shrine and main assembly hall.", x: 72, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 756–773 AD", event: "Rashtrakuta Engineering Feat", description: "King Krishna I commissioned master sculptors who began at the cliff top, carving downward with chisels and hammers." },
      { yearOrEra: "1983", event: "UNESCO World Heritage Inscription", description: "Honored by UNESCO as one of the most astonishing achievements of human genius." }
    ],
    architecturalSecrets: [
      "Unlike conventional construction where stone is piled up, Kailasa was carved top-down from the mountain ridge; a single mistake in measurement would have ruined the entire temple.",
      "Over 200,000 to 400,000 tons of solid volcanic basalt were removed over several decades without modern explosives or steel machinery.",
      "The temple was originally coated in brilliant white plaster to resemble the snow-covered peak of Mount Kailash in the Himalayas."
    ],
    culturalSignificance: "Kailasa Temple is widely recognized by architectural historians and civil engineers as the greatest single rock-carved monolithic structure on planet Earth.",
    visitorTips: [
      "Climb the cliffside trail overlooking Cave 16 to appreciate the breathtaking top-down scale of the excavation.",
      "Bring a flashlight to examine the intricate Ramayana and Mahabharata narrative friezes in the lower galleries.",
      "Visit early in the morning for cooler weather and stunning directional light."
    ],
    narrationScript: "Welcome to Kailasa Temple at Ellora, the greatest monolithic rock-cut monument ever achieved by human hands. What you are looking at was not built—it was excavated. Starting at the crest of the basalt cliff above, master Rashtrakuta artisans carved downward through solid mountain rock, chiseling away over two hundred thousand tons of volcanic stone. What emerged is a freestanding multi-story temple, complete with two-story halls, life-sized elephants, and towering pillars, all carved from a single mountain.",
    chapters: [
      { id: "chap-1", title: "Carved from a Mountain", timestampHint: "0:00", script: "Kailasa stands as an unmatched marvel of engineering: an entire palace-temple carved from top to bottom.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Ravana Beneath the Mountain", timestampHint: "0:25", script: "The relief of Ravana shaking Kailash captures raw kinetic energy and dramatic tension in ancient stone.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Monolithic Elephants", timestampHint: "0:50", script: "In the courtyard, life-sized stone elephants and soaring victory pillars stand rooted in the living bedrock.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Bridges in the Sky", timestampHint: "1:15", script: "Carved stone bridges span the courtyard, connecting the entrance gate to the assembly hall above.", focusPointId: "pt-4" }
    ]
  },

  "kandariya mahadeva temple": {
    name: "Kandariya Mahadeva Temple, Khajuraho",
    localName: "कंदरिया महादेव मंदिर, खजुराहो",
    city: "Khajuraho, Chhatarpur, Madhya Pradesh",
    country: "India",
    architecturalStyle: "High Nagara Sandhara Shikhara Style (UNESCO World Heritage)",
    periodEra: "c. 1030 AD (Reign of King Vidyadhara, Chandela Dynasty)",
    confidence: 99,
    summary: "The grandest and tallest temple in the UNESCO-inscribed Khajuraho Western Group, Kandariya Mahadeva represents the absolute zenith of Nagara temple architecture. Its 31-meter main spire replicates a mountain range with 84 mini-spires (Urushringas), covered in over 870 breathtaking sculptures.",
    coordinatesEstimate: { lat: 24.8532, lng: 79.9197 },
    arKeypoints: [
      { id: "pt-1", label: "31m Mountain-Cluster Shikhara", featureType: "spire", description: "Masterpiece Nagara spire cascading into 84 secondary urushringa spires mimicking Mount Meru.", x: 50, y: 18 },
      { id: "pt-2", label: "Carved Mithuna & Surasundari Reliefs", featureType: "relief", description: "Famous friezes of celestial nymphs applying makeup, playing music, and celebratory divine couples.", x: 45, y: 58 },
      { id: "pt-3", label: "Jagati High Raised Platform", featureType: "facade", description: "Elevated granite and sandstone terrace elevating the monument above the landscape.", x: 50, y: 82 },
      { id: "pt-4", label: "Makara Torana Entrance Arch", featureType: "entrance", description: "Spectacular stone archway carved with mythical makaras leading into the Ardhamandapa portico.", x: 68, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1030 AD", event: "Built by Chandela King Vidyadhara", description: "Constructed to celebrate the king's victory over Mahmud of Ghazni and dedicated to Lord Shiva." },
      { yearOrEra: "13th–19th Century", event: "Hidden in the Forest", description: "Preserved from destruction by the dense forests of Bundelkhand until rediscovery by British engineer T.S. Burt in 1838." },
      { yearOrEra: "1986", event: "UNESCO World Heritage Listing", description: "Inscribed by UNESCO as an exceptional testimony to medieval Indian architectural genius." }
    ],
    architecturalSecrets: [
      "The complex geometry of the 84 cascading subsidiary spires creates a rhythmic visual sensation of looking at a natural mountain range from every angle.",
      "The sandstone blocks were fitted together with precision tongue-and-groove joints without mortar, standing rock-solid for a thousand years.",
      "While famous for sensuous iconography, erotic motifs represent less than 10% of the carvings—the remaining 90% depict daily medieval life, musicians, soldiers, and sacred deities."
    ],
    culturalSignificance: "Kandariya Mahadeva celebrates the wholeness of human existence—dharma, artha, kama, and moksha—integrated into sacred temple geometry.",
    visitorTips: [
      "Visit during golden hour (late afternoon) when warm sunlight highlights the three-dimensional depth of the carvings.",
      "Use binoculars or a telephoto camera lens to study the intricate jewelry and hairstyles on the upper tiers.",
      "Attend the vibrant Khajuraho Dance Festival in February held right before the floodlit temples."
    ],
    narrationScript: "Welcome to the Kandariya Mahadeva Temple in Khajuraho, the crowning masterpiece of medieval Indian architecture. Built in the 11th century by Chandela King Vidyadhara, this temple rises like a stone mountain range 102 feet into the sky. Its shikhara cascades into eighty-four smaller spires, mimicking Mount Meru. Over eight hundred hand-carved statues adorn its golden sandstone walls, celebrating every facet of life, love, music, and divine liberation.",
    chapters: [
      { id: "chap-1", title: "The Mountain of Meru", timestampHint: "0:00", script: "The stepped shikhara rises like a mountain summit, representing the ascent of human consciousness.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Art of Celestial Grace", timestampHint: "0:25", script: "Over eight hundred sculptures of celestial nymphs, warriors, and dancers adorn the sandstone walls.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Makara Torana", timestampHint: "0:50", script: "Passing beneath the sculpted makara arch, the worshiper steps into the sacred inner chambers.", focusPointId: "pt-4" },
      { id: "chap-4", title: "The High Terrace of Faith", timestampHint: "1:15", script: "Standing on the elevated Jagati terrace, the temple commands the landscape with monumental grace.", focusPointId: "pt-3" }
    ]
  },

  "virupaksha temple": {
    name: "Virupaksha Temple, Hampi",
    localName: "ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ, ಹಂಪಿ",
    city: "Hampi, Vijayanagara, Karnataka",
    country: "India",
    architecturalStyle: "Dravidian Vijayanagara Imperial Temple Architecture (UNESCO World Heritage)",
    periodEra: "7th Century origins; Major expansion 1510 AD by Emperor Krishnadevaraya",
    confidence: 99,
    summary: "The spiritual heart of the UNESCO World Heritage city of Hampi, Virupaksha Temple has seen uninterrupted worship since the 7th century AD. Standing beside the Tungabhadra River, it is famed for its 50-meter tiered eastern Rajagopuram, Ranga Mandapa ceiling murals, and ancient inverted pinhole shadow phenomenon.",
    coordinatesEstimate: { lat: 15.3353, lng: 76.4600 },
    arKeypoints: [
      { id: "pt-1", label: "50-Meter 9-Tiered Eastern Rajagopuram", featureType: "spire", description: "Imposing brick-and-granite entrance tower commanding the Hampi Bazaar street.", x: 50, y: 20 },
      { id: "pt-2", label: "Inverted Pinhole Shadow Chamber", featureType: "relief", description: "Ancient camera obscura optical aperture that casts an inverted shadow of the 50m tower onto an interior wall.", x: 38, y: 55 },
      { id: "pt-3", label: "Ranga Mandapa & Vijayanagara Ceiling Murals", featureType: "facade", description: "Pillared hall built by Krishnadevaraya featuring 16th-century murals of the Mahabharata and Shiva's wedding.", x: 52, y: 65 },
      { id: "pt-4", label: "Sacred Tungabhadra River Ghats", featureType: "entrance", description: "Granite steps descending to the holy Tungabhadra River, lined with shrines and massive boulders.", x: 74, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "7th Century AD", event: "Pre-Vijayanagara Origins", description: "Began as a humble riverside shrine to Lord Virupaksha (an aspect of Shiva) and Goddess Pampa." },
      { yearOrEra: "1510 AD", event: "Krishnadevaraya Coronation Gift", description: "Emperor Krishnadevaraya built the grand Ranga Mandapa and the eastern tower to mark his accession." },
      { yearOrEra: "1565 AD to Present", event: "Living Temple Survival", description: "Miraculously survived the destruction of Hampi, continuing daily worship without interruption to this day." }
    ],
    architecturalSecrets: [
      "In a small rear dark chamber, a tiny pinhole slit in the stone wall acts as a natural camera obscura, projecting a crisp upside-down shadow of the 50m eastern tower.",
      "The temple elephant Lakshmi blesses devotees at the entrance portal every morning with her trunk.",
      "The main street extending 700 meters from the gate was the famous Hampi Bazaar, where medieval international merchants traded pearls, rubies, and Arabian war horses."
    ],
    culturalSignificance: "Virupaksha is the living soul of Hampi—a rare ancient temple where chants and bells have continued without pause across fourteen centuries.",
    visitorTips: [
      "Ask a temple priest or guide to show you the inverted pinhole camera shadow room near the rear sanctum.",
      "Climb Matanga Hill at sunrise for a panoramic view of Virupaksha's tower rising above the boulder-strewn landscape.",
      "Watch the temple elephant take her morning bath at the river ghats around 8:00 AM."
    ],
    narrationScript: "Welcome to the Virupaksha Temple in Hampi, the eternal spiritual capital of the Vijayanagara Empire. Unlike the surrounding ruins of this medieval metropolis, worship here has never ceased for over thirteen centuries. Look up at the soaring 50-meter Rajagopuram rising above the ancient bazaar. Inside, discover optical wonders where ancient architects engineered a camera obscura into the stone, casting an inverted shadow of the great tower on the sanctum wall.",
    chapters: [
      { id: "chap-1", title: "Eternal Beacon of Hampi", timestampHint: "0:00", script: "Virupaksha has witnessed the rise and fall of empires while keeping its sacred flame alive.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Optical Wonder", timestampHint: "0:25", script: "Inside a darkened stone chamber, ancient architects engineered an inverted pinhole camera shadow.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Murals of Krishnadevaraya", timestampHint: "0:50", script: "The Ranga Mandapa ceiling preserves 16th-century paintings of the Ramayana and Vijayanagara royal court.", focusPointId: "pt-3" },
      { id: "chap-4", title: "River of the Goddess Pampa", timestampHint: "1:15", script: "The granite ghats descend to the Tungabhadra River, where myths of Shiva and Pampa began.", focusPointId: "pt-4" }
    ]
  },

  "padmanabhaswamy temple": {
    name: "Sree Padmanabhaswamy Temple",
    localName: "ശ്രീ പദ്മനാഭസ്വാമി ക്ഷേത്രം",
    city: "Thiruvananthapuram, Kerala",
    country: "India",
    architecturalStyle: "Chera & Dravidian Fusion Architecture with 100ft Gopuram",
    periodEra: "Ancient 8th Century origins; Rebuilt 1731 AD by King Anizham Thirunal Marthanda Varma",
    confidence: 99,
    summary: "Located in the heart of Kerala's capital, Sree Padmanabhaswamy Temple is renowned as the wealthiest religious institution on planet Earth. Featuring a majestic 100-foot 7-tier gopuram, a 30-foot idol of Lord Vishnu reclining on the serpent Anantha seen through three doors, and enigmatic underground vaults (Kallaras).",
    coordinatesEstimate: { lat: 8.4830, lng: 76.9436 },
    arKeypoints: [
      { id: "pt-1", label: "100ft 7-Tiered Dravidian Rajagopuram", featureType: "spire", description: "Magnificent sculpted tower displaying intricate stone reliefs of the Dashavatara against the Kerala sky.", x: 50, y: 22 },
      { id: "pt-2", label: "Padmatheertham Sacred Lotus Tank", featureType: "relief", description: "Large rectangular stone water body in front of the temple where royal rituals and sacred baths take place.", x: 50, y: 78 },
      { id: "pt-3", label: "Ottakkal Mandapam & Three-Door Sanctum", featureType: "entrance", description: "Monolithic single-stone granite platform leading to the three doors viewing head, torso, and feet of reclining Vishnu.", x: 45, y: 55 },
      { id: "pt-4", label: "Subterranean Vaults (Kallara Vault B)", featureType: "facade", description: "Subterranean treasure chambers housing ancient gold, diamonds, and royal artifacts valued in the billions.", x: 70, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "8th Century AD", event: "Mentioned by Alvars", description: "Celebrated in Divya Prabandham literature by Nammalvar as one of the 108 supreme Divya Desams." },
      { yearOrEra: "1750 AD", event: "Thrippadidanam Royal Dedication", description: "King Marthanda Varma surrendered his entire kingdom of Travancore to Lord Padmanabha, ruling as His humble servant (Padmanabhadasa)." },
      { yearOrEra: "2011", event: "Discovery of Treasure Vaults", description: "Supreme Court inventory revealed historic gold idols, precious gems, and antique coins worth an estimated $22 billion in Vaults A to F." }
    ],
    architecturalSecrets: [
      "The 18-foot reclining idol of Padmanabha is composed of 12,008 sacred Shaligram stones brought on elephant back from Nepal's Gandaki River, coated with a special herbal plaster (Kadu Sharkara Yogam).",
      "During the equinoxes, the setting sun aligns with mathematical precision through all seven tiers of the 100ft Rajagopuram windows.",
      "Vault B remains unopened and surrounded by mystical legends of iron cobras and ancient acoustic seals."
    ],
    culturalSignificance: "The temple is the patron sanctuary of the Royal Family of Travancore and represents the spiritual crown of Kerala's heritage.",
    visitorTips: [
      "Strict traditional Kerala dress code: men must wear white mundu/dhoti without shirts; women must wear sarees.",
      "Strict security checks; all electronics and phones must be deposited in the outer cloakrooms.",
      "Arrive early in the morning (around 6:30 AM) to experience the peaceful atmosphere before long queues form."
    ],
    narrationScript: "Welcome to Sree Padmanabhaswamy Temple in Thiruvananthapuram, Kerala—the richest temple on planet Earth. Gaze upon its 100-foot Dravidian gopuram rising above the Padmatheertham lotus pond. In 1750, the King of Travancore surrendered his entire kingdom to the deity, ruling merely as a servant of Padmanabha. Inside the sanctum, Vishnu reclines on the thousand-headed serpent Anantha, carved from twelve thousand holy Shaligram stones.",
    chapters: [
      { id: "chap-1", title: "The Royal Gopuram", timestampHint: "0:00", script: "The seven-tiered tower blends Tamil Dravidian sculpture with Kerala's traditional rooflines.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Padmatheertham: The Lotus Pond", timestampHint: "0:25", script: "The sacred water body reflects the stone tower in peaceful morning light.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Three Sacred Portals", timestampHint: "0:50", script: "Devotees view the colossal reclining deity through three doors: head and Shiva lingam, chest, and lotus feet.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Vaults of Antiquity", timestampHint: "1:15", script: "Deep below the stone courtyards lie the ancient vaults holding millenniums of royal offerings.", focusPointId: "pt-4" }
    ]
  },

  "ranganathaswamy temple": {
    name: "Sri Ranganathaswamy Temple, Srirangam",
    localName: "ஸ்ரீ ரங்கநாதசுவாமி கோயில், ஸ்ரீரங்கம்",
    city: "Tiruchirappalli, Tamil Nadu",
    country: "India",
    architecturalStyle: "Dravidian Temple Complex (Largest Functioning Hindu Temple on Earth)",
    periodEra: "c. 6th–16th Century (Chola, Pandya, Hoysala, Vijayanagara Dynasties)",
    confidence: 99,
    summary: "Spanning 156 acres on an island in the Kaveri River, Srirangam is the largest functioning Hindu temple complex in the world. It features 7 concentric walled enclosures (Prakaras), 21 colossal Gopuram towers, the 236-foot Rajagopuram (tallest temple tower in Asia), and the celebrated Hall of 1,000 Pillars.",
    coordinatesEstimate: { lat: 10.8622, lng: 78.6901 },
    arKeypoints: [
      { id: "pt-1", label: "236ft Southern Rajagopuram", featureType: "spire", description: "Asia's tallest temple tower, a 13-tiered polychrome Dravidian colossus completed in 1987.", x: 50, y: 18 },
      { id: "pt-2", label: "Hall of 1,000 Pillars & Rearing Steeds", featureType: "column", description: "Monumental granite hall featuring dynamic sculptures of warriors mounted on rampant rearing horses.", x: 40, y: 65 },
      { id: "pt-3", label: "Golden Ranga Vimana", featureType: "dome", description: "Pure gold-plated circular sanctum tower shaped like the Omkar Pranava over the reclining Ranganatha.", x: 55, y: 35 },
      { id: "pt-4", label: "Seven Concentric Enclosure Walls", featureType: "entrance", description: "Massive perimeter granite ramparts enclosing a living temple city of over 40,000 residents.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 6th–10th Century", event: "Chola Dynasty Foundations", description: "Patronized by Chola emperors and praised by all twelve Alvar saints as the first Divya Desam." },
      { yearOrEra: "1310–1323 AD", event: "Sieges & Preservation", description: "Temple treasures protected during the Delhi Sultanate invasions by heroic sevayats." },
      { yearOrEra: "1987", event: "Completion of the Grand Rajagopuram", description: "The 236-foot Southern Rajagopuram was completed under the leadership of the 44th Jeeyar of Ahobila Mutt." }
    ],
    architecturalSecrets: [
      "With a perimeter of 4 kilometers and 156 acres, Srirangam is larger than Vatican City, functioning as an entire living religious municipality.",
      "The Hall of 1,000 Pillars (actually 953 pillars) was carved from single granite shafts during the Vijayanagara period, with intricate undercuts so deep a thread can pass through.",
      "The temple houses an ancient solar clock and stone inscriptions spanning over eight centuries in Tamil, Sanskrit, Kannada, and Telugu."
    ],
    culturalSignificance: "Srirangam is the premier temple of Sri Vaishnavism, honored as the premier Bhoologa Vaikundam (heaven on Earth).",
    visitorTips: [
      "Climb to the rooftop viewing platform on the inner enclosure for a breathtaking view of all 21 Gopurams.",
      "Visit during the 21-day Vaikunta Ekadasi festival in December to witness the opening of the Paramapada Vasal (Gate of Heaven).",
      "Allow at least 3 hours to appreciate the vast scale of the outer and inner courtyards."
    ],
    narrationScript: "Welcome to Sri Ranganathaswamy Temple in Srirangam, the largest functioning Hindu temple on Earth. Spanning an entire island of 156 acres between the Kaveri and Kollidam rivers, this temple city is enclosed within seven concentric granite walls. Look at the towering southern Rajagopuram: rising 236 feet into the sky, it is the tallest temple tower in all of Asia. Inside, over nine hundred monolithic stone pillars and twenty-one gopurams create a stone mandala of devotion.",
    chapters: [
      { id: "chap-1", title: "Asia's Tallest Gateway", timestampHint: "0:00", script: "The 236-foot Rajagopuram stands as an engineering colossus greeting millions of pilgrims.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Seven Walled Cities", timestampHint: "0:25", script: "Seven concentric stone enclosures represent the seven bodies and chakras of human existence.", focusPointId: "pt-4" },
      { id: "chap-3", title: "Hall of Rearing War Horses", timestampHint: "0:50", script: "The Thousand Pillar Hall features master Vijayanagara carvings of wild horses leaping into battle.", focusPointId: "pt-2" },
      { id: "chap-4", title: "The Golden Sanctuary", timestampHint: "1:15", script: "Beneath the golden Ranga Vimana dome rests Lord Ranganatha in timeless cosmic slumber.", focusPointId: "pt-3" }
    ]
  },

  "shore temple": {
    name: "Shore Temple, Mahabalipuram",
    localName: "மாமல்லபுரம் கடற்கரை கோயில்",
    city: "Mamallapuram, Chengalpattu, Tamil Nadu",
    country: "India",
    architecturalStyle: "Pallava Structural Granite Architecture (UNESCO World Heritage)",
    periodEra: "c. 700–728 AD (Reign of King Narasimhavarman II / Rajasimha)",
    confidence: 99,
    summary: "One of the earliest structural stone temples of Southern India, the Shore Temple stands directly on the Bay of Bengal shoreline at Mahabalipuram. A UNESCO World Heritage icon, its twin granite spires have endured ocean gales, salt spray, and tsunamis for over 1,300 years.",
    coordinatesEstimate: { lat: 12.6162, lng: 80.1983 },
    arKeypoints: [
      { id: "pt-1", label: "Twin Pyramidal Granite Spires", featureType: "spire", description: "Stepped vimana towers of carved granite blocks facing directly east toward the sunrise over the sea.", x: 50, y: 30 },
      { id: "pt-2", label: "Monolithic Nandi Perimeter Enclosure", featureType: "statue", description: "Compound wall surmounted by dozens of weathered monolithic stone Nandi bulls.", x: 35, y: 68 },
      { id: "pt-3", label: "Bay of Bengal Ocean Breakers", featureType: "relief", description: "Crashing waves of the Coromandel Coast that historically greeted ancient international merchant fleets.", x: 78, y: 75 },
      { id: "pt-4", label: "Reclining Vishnu & Somaskanda Sanctums", featureType: "entrance", description: "Ancient inner shrines housing both Shiva and a rare bedrock carving of reclining Vishnu (Anantasayana).", x: 48, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 700–728 AD", event: "Pallava Structural Revolution", description: "King Narasimhavarman II pioneered structural block masonry, shifting from cave-excavated temples to freestanding stone." },
      { yearOrEra: "8th Century AD", event: "Bustling Silk & Spice Port", description: "Served as a navigational landmark for ships sailing between India, Sri Lanka, China, and Southeast Asia." },
      { yearOrEra: "2004", event: "The Tsunami Revelation", description: "The 2004 Indian Ocean tsunami briefly receded, uncovering ancient submerged granite foundations of the legendary 'Seven Pagodas'." }
    ],
    architecturalSecrets: [
      "The temple survived the catastrophic 2004 tsunami with minimal damage due to its heavy granite foundation and a submerged breakwater system engineered by Pallava builders.",
      "It represents a transitional turning point in Indian art, moving from rock-cut caves to freestanding structural stone temples.",
      "Ancient European travelers called this coast the 'Seven Pagodas', believing six other sister temples were submerged beneath the waves."
    ],
    culturalSignificance: "The Shore Temple is the crowning gem of Pallava maritime architecture, blending sacred devotion with ancient international trade routes.",
    visitorTips: [
      "Visit at sunrise to photograph the golden light illuminating the granite towers against the Bay of Bengal.",
      "Explore nearby monuments: the monolithic Pancha Rathas and Arjuna's Penance giant rock relief.",
      "Notice the protective casuarina trees and stone seawalls preserving the temple from salt erosion."
    ],
    narrationScript: "Welcome to the Shore Temple of Mahabalipuram, standing on the wave-swept coast of Tamil Nadu. For over thirteen hundred years, these twin granite spires have caught the first rays of sunrise over the Bay of Bengal. Built in the 8th century by the Pallava king Rajasimha, this was one of South India's first structural stone temples. Surrounded by dozens of carved stone Nandi bulls, it has weathered ocean storms and tsunamis, standing as an eternal beacon between the land and the sea.",
    chapters: [
      { id: "chap-1", title: "Guardian of the Bay of Bengal", timestampHint: "0:00", script: "Standing at the edge of the ocean, the Shore Temple greeted ancient merchants sailing to Southeast Asia.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Nandi Wall", timestampHint: "0:25", script: "Weathered by thirteen centuries of sea spray, stone Nandi bulls guard the sacred perimeter.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Twin Shrines of Shiva and Vishnu", timestampHint: "0:50", script: "Inside lie three sanctuaries dedicated to both Shiva's cosmic family and reclining Vishnu.", focusPointId: "pt-4" },
      { id: "chap-4", title: "Legend of the Seven Pagodas", timestampHint: "1:15", script: "The sea whispers ancient legends of six other sister temples resting beneath the coastal waves.", focusPointId: "pt-3" }
    ]
  },

  "kamakhya temple": {
    name: "Maa Kamakhya Devalaya",
    localName: "মা কামাখ্যা দেৱালয়",
    city: "Guwahati",
    country: "India",
    architecturalStyle: "Nilachal Hybrid Architecture (Cruciform Base with Beehive Dome)",
    periodEra: "Ancient origins; Reconstructed 1565 AD by King Nara Narayana & General Chilarai",
    confidence: 99,
    summary: "Perched atop the lush Nilachal Hill overlooking the Brahmaputra River in Assam, Kamakhya is the most revered of the 51 Shakti Peethas. Celebrated for its unique Nilachal beehive shikhara architecture and the sacred subterranean cave shrine where the divine creative force of Mother Earth is worshipped.",
    coordinatesEstimate: { lat: 26.1664, lng: 91.7058 },
    arKeypoints: [
      { id: "pt-1", label: "Beehive-Shaped Nilachal Shikhara", featureType: "spire", description: "Distinctive polygonal stone tower with horizontal ribbed mouldings and miniature spires.", x: 50, y: 24 },
      { id: "pt-2", label: "Subterranean Natural Spring Garbhagriha", featureType: "entrance", description: "Dark cave sanctum housing a natural underground freshwater spring over a sacred rock fissure.", x: 42, y: 65 },
      { id: "pt-3", label: "Brahmaputra River Valley Overlook", featureType: "relief", description: "Panoramic vistas of the mighty Brahmaputra River winding through the green hills of Assam.", x: 78, y: 35 },
      { id: "pt-4", label: "Natamandapa & Outer Sculptured Wall", featureType: "facade", description: "Assembly hall adorned with stone reliefs of Ganesha, Chamunda, and ancient Koch dynasty kings.", x: 55, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Puranic Era", event: "Origin of the Shakti Peetha", description: "According to legend, the yoni (creative organ) of Sati fell on Nilachal Hill, consecrating it as the supreme Tantric shrine." },
      { yearOrEra: "1565 AD", event: "Rebuilding by Koch Kings", description: "King Nara Narayana and general Chilarai rebuilt the temple in its unique hybrid architectural form." },
      { yearOrEra: "Annual June Event", event: "Ambubachi Mela", description: "Attracts hundreds of thousands of pilgrims and sadhus celebrating the annual fertility cycle of Mother Earth." }
    ],
    architecturalSecrets: [
      "The temple has no sculpted deity figure in its sanctum—devotees worship a natural cleft in the bedrock continuously moistened by an underground spring.",
      "The unique 'Nilachal' style was invented when master masons failed to rebuild the collapsed original Nagara spire, designing a sturdy dome of dressed stone that has stood for 450 years.",
      "During the annual Ambubachi Mela in June, the subterranean spring water turns red for three days, symbolizing the creative generative cycle of the cosmos."
    ],
    culturalSignificance: "Kamakhya is the premier sanctuary of Tantric Shakti worship, honoring the divine feminine as the primary creator, nurturer, and transformer of the universe.",
    visitorTips: [
      "Arrive early in the morning as queues for the inner cave sanctum can take several hours.",
      "Dress conservatively in traditional clothes and remove footwear at the entrance gates.",
      "Enjoy the panoramic sunset views of the Brahmaputra River from the temple complex."
    ],
    narrationScript: "Welcome to Maa Kamakhya Devalaya on Nilachal Hill in Guwahati, Assam. Revered as the supreme seat of the fifty-one Shakti Peethas, Kamakhya honors the primordial creative power of the universe. Look at its unique beehive-shaped dome: known as the Nilachal style, it was engineered in the 16th century after ancient stone spires collapsed. Inside the dark, cool cave beneath, an underground natural spring flows over the sacred rock, celebrating the eternal life-giving energy of Mother Earth.",
    chapters: [
      { id: "chap-1", title: "Seat of the Divine Mother", timestampHint: "0:00", script: "High on Nilachal Hill, Kamakhya is the most revered sanctuary of Shakti worship in the world.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Subterranean Spring", timestampHint: "0:25", script: "Down stone steps into a natural cave, an eternal spring flows over the bedrock sanctum.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Nilachal Architectural Style", timestampHint: "0:50", script: "The distinctive ribbed dome combines indigenous Assamese and classical Indian architectural elements.", focusPointId: "pt-4" },
      { id: "chap-4", title: "Over the Mighty Brahmaputra", timestampHint: "1:15", script: "From the temple gardens, the great Brahmaputra River winds majestically through the valley.", focusPointId: "pt-3" }
    ]
  },

  "ram mandir ayodhya": {
    name: "Shri Ram Janmabhoomi Mandir",
    localName: "श्री राम जन्मभूमि मंदिर, अयोध्या",
    city: "Ayodhya, Uttar Pradesh",
    country: "India",
    architecturalStyle: "Grand Nagara Style with Traditional Vastu Shastra",
    periodEra: "Consecrated January 2024 (Chief Architect: Chandrakant Sompura)",
    confidence: 99,
    summary: "Erected at the sacred birthplace of Lord Rama along the holy Sarayu River in Ayodhya, the Shri Ram Janmabhoomi Mandir is a monumental masterpiece of Nagara temple architecture. Built entirely from hand-carved Bansi Paharpur pink sandstone and Makrana white marble without steel or iron, designed to endure for over a thousand years.",
    coordinatesEstimate: { lat: 26.7956, lng: 82.1943 },
    arKeypoints: [
      { id: "pt-1", label: "161ft High Nagara Main Shikhara", featureType: "spire", description: "Soaring central spire crowned with golden Amrit Kalash and saffron flag.", x: 50, y: 18 },
      { id: "pt-2", label: "Five Grand Mandapas (Domes)", featureType: "dome", description: "Five sacred pavilions: Nritya, Rang, Sabha, Prarthana, and Kirtan Mandapas with carved cupolas.", x: 50, y: 45 },
      { id: "pt-3", label: "392 Sculpted Sandstone Pillars", featureType: "column", description: "Three-tiered pillars carved with statues of deities, apsaras, and Ramayana motifs.", x: 32, y: 65 },
      { id: "pt-4", label: "Singhadwara & 32-Step Marble Stairway", featureType: "entrance", description: "Grand entrance gateway flanked by carved stone elephants, lions, Hanuman, and Garuda.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Antiquity", event: "Birthplace of Shri Rama", description: "Revered in the Ramayana as the capital of the ancient Ikshvaku dynasty and the birthplace of Lord Rama." },
      { yearOrEra: "August 2020", event: "Bhoomi Pujan Ceremony", description: "Foundation stone laid following centuries of civilizational devotion and cultural aspiration." },
      { yearOrEra: "22 January 2024", event: "Pran Pratishtha Consecration", description: "The 51-inch black granite idol of Ram Lalla was consecrated in a historic national ceremony." }
    ],
    architecturalSecrets: [
      "Built without a single ounce of iron or steel reinforcement to ensure the structure lasts over 1,000 years without corrosion.",
      "The temple foundation is made of a 14-meter-thick engineered roller-compacted concrete rock mass that mimics natural bedrock.",
      "A Surya Tilak optical mirror-and-lens mechanism was engineered by CBRI scientists to focus the sun's rays directly onto the forehead of Ram Lalla every Ram Navami at noon."
    ],
    culturalSignificance: "The temple represents the cultural soul and civilizational homecoming of millions of devotees worldwide, celebrating righteousness (Maryada Purushottam).",
    visitorTips: [
      "Book Aarti or Sugam Darshan passes via the official Shri Ram Janmabhoomi Teerth Kshetra portal.",
      "Enjoy the newly renovated Sarayu River Aarti and Ram Ki Paidi illuminated steps in the evening.",
      "Follow traditional respectful dress guidelines."
    ],
    narrationScript: "Welcome to the Shri Ram Janmabhoomi Mandir in Ayodhya, the revered birthplace of Lord Rama. Rising 161 feet above the sacred soil of the Ikshvaku kings, this monumental temple is an epic of Indian Nagara architecture. Crafted from 380,000 cubic feet of pink Bansi Paharpur sandstone from Rajasthan and pristine Makrana marble, it stands without a single beam of iron or steel. Step through the Singhadwara, where 392 intricately carved pillars guide your journey into the sanctum of Ram Lalla.",
    chapters: [
      { id: "chap-1", title: "The Sacred Spire of Ayodhya", timestampHint: "0:00", script: "Rising 161 feet, the central Shikhara represents the return of ancient Indian classical architecture.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Five Mandapas of Devotion", timestampHint: "0:25", script: "Five carved domes represent song, prayer, dance, assembly, and celebration.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Forest of Stone Pillars", timestampHint: "0:50", script: "Nearly four hundred pillars are carved with divine deities and epics of the Ramayana.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Through the Singhadwara", timestampHint: "1:15", script: "Stone lions, elephants, Hanuman, and Garuda guard the grand 32-step marble entrance stairway.", focusPointId: "pt-4" }
    ]
  },

  "batu caves": {
    name: "Batu Caves (Lord Murugan Temple)",
    localName: "பத்து மலை முருகன் கோயில்",
    city: "Gombak, Selangor",
    country: "Malaysia",
    architecturalStyle: "Limestone Karst Cave Temple with Colossal Murugan Statue",
    periodEra: "Consecrated 1890; Monumental Golden Statue unveiled 2006",
    confidence: 99,
    summary: "Just north of Kuala Lumpur, Batu Caves is a colossal 400-million-year-old limestone hill honeycombed with vast cave temples. Fronted by the world's tallest statue of Lord Murugan (140 feet, coated in 300 liters of gold paint) and a steep flight of 272 rainbow-colored steps leading up to the Cathedral Cave.",
    coordinatesEstimate: { lat: 3.2379, lng: 101.6840 },
    arKeypoints: [
      { id: "pt-1", label: "140ft Colossal Golden Murugan Statue", featureType: "statue", description: "The world's second-tallest Hindu deity statue, crafted from 250 tons of steel and 1,550 cubic meters of concrete.", x: 32, y: 48 },
      { id: "pt-2", label: "272 Rainbow Painted Steps", featureType: "entrance", description: "Famous steep staircase painted in vibrant rainbow hues ascending 100 meters up the limestone cliff.", x: 50, y: 70 },
      { id: "pt-3", label: "Cathedral Cave (Temple Cave) Ceiling", featureType: "relief", description: "Titanic natural limestone chamber soaring 100 meters high with natural skylights and shrines.", x: 50, y: 20 },
      { id: "pt-4", label: "Ornate Dravidian Temple Shrines Inside", featureType: "facade", description: "Vibrant South Indian Gopuram and sanctums sheltered inside the ancient cavern.", x: 68, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "1890", event: "Dedicated by K. Thamboosamy Pillai", description: "Prominent Tamil community leader founded the temple inside the cave, recognizing the cave entrance resembled the spear (vel) of Murugan." },
      { yearOrEra: "1892", event: "First Thaipusam Festival", description: "Began celebrating the annual Thaipusam festival, which now attracts over 1.5 million pilgrims every January." },
      { yearOrEra: "2006", event: "Unveiling of the Golden Murugan", description: "Three years of sculpting by 15 Indian master artisans culminated in the 140-foot golden statue." }
    ],
    architecturalSecrets: [
      "The limestone formation is estimated by geologists to be over 400 million years old, having provided shelter to ancient indigenous peoples and wildlife.",
      "The colossal Murugan statue took 350 tons of steel bars, 1,550 cubic meters of concrete, and 300 liters of gold paint brought from Thailand.",
      "During Thaipusam, devotees carrying elaborate kavadis and milk pots ascend the 272 steps in a trance accompanied by the rhythm of urumi melam drums."
    ],
    culturalSignificance: "Batu Caves is the focal spiritual center for the Hindu diaspora in Southeast Asia, celebrated for its harmony of nature and devotion.",
    visitorTips: [
      "Dress respectfully: shoulders and knees must be covered to climb the 272 steps.",
      "Watch out for the playful resident macaque monkeys along the stairs—keep food and water bottles inside bags.",
      "Visit in the morning between 7:30 AM and 9:00 AM to beat the tropical heat and crowds."
    ],
    narrationScript: "Welcome to Batu Caves in Selangor, Malaysia, one of the most iconic Hindu shrines outside India. Rising before you is the 140-foot golden statue of Lord Murugan, gleaming brilliantly against a 400-million-year-old limestone cliff. To reach the sacred Cathedral Cave above, climb the famous flight of 272 rainbow-painted steps. Inside, the limestone ceiling soars 300 feet into the air, with natural sunbeams illuminating ornate Dravidian shrines sheltered within the earth.",
    chapters: [
      { id: "chap-1", title: "The Golden Colossus", timestampHint: "0:00", script: "Standing 140 feet tall, the statue of Lord Murugan welcomes millions of pilgrims from around the world.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Rainbow Stairway", timestampHint: "0:25", script: "Two hundred and seventy-two colorful steps climb straight up the sheer limestone cliffside.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Cathedral of Nature", timestampHint: "0:50", script: "Inside the mountain, a colossal natural limestone cave creates an ancient natural sanctuary.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Thaipusam: Festival of Faith", timestampHint: "1:15", script: "Every winter, over a million devotees gather here carrying kavadis in devotion to Lord Murugan.", focusPointId: "pt-4" }
    ]
  },

  "tanah lot": {
    name: "Pura Tanah Lot",
    localName: "Pura Tanah Lot, Bali",
    city: "Tabanan, Bali",
    country: "Indonesia",
    architecturalStyle: "Balinese Sea Temple (Pura Segara) & Meru Tower Architecture",
    periodEra: "16th Century AD (Founded by Dang Hyang Nirartha)",
    confidence: 99,
    summary: "Perched dramatically atop an ancient wave-swept offshore rock formation in the Indian Ocean, Pura Tanah Lot is Bali's most photographed sea temple. Famous for its multi-tiered thatched Meru towers silhouetted against brilliant tropical sunsets, and holy freshwater springs bubbling in the saltwater sea.",
    coordinatesEstimate: { lat: -8.6212, lng: 115.0868 },
    arKeypoints: [
      { id: "pt-1", label: "Multi-Tiered Thatched Meru Roofs", featureType: "spire", description: "Traditional black palm-fiber thatched roofs rising in odd-numbered tiers honoring sea deities.", x: 50, y: 30 },
      { id: "pt-2", label: "Wave-Carved Offshore Rock Island", featureType: "peak", description: "Rugged black volcanic rock pedestal completely surrounded by ocean waves at high tide.", x: 50, y: 65 },
      { id: "pt-3", label: "Holy Freshwater Cave Spring", featureType: "entrance", description: "Sacred cave beneath the rock where natural freshwater flows miraculously in the middle of the sea.", x: 38, y: 78 },
      { id: "pt-4", label: "Candi Bentar (Split Gateway)", featureType: "facade", description: "Characteristic Balinese split entrance gateway framing views of the ocean waves and temple.", x: 72, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "16th Century AD", event: "Founded by Dang Hyang Nirartha", description: "The venerated Hindu sage Nirartha slept on the rock and instructed local fishermen to build a shrine to the sea gods." },
      { yearOrEra: "1980", event: "Restoration of the Rock Foundation", description: "The Japanese government assisted the Indonesian heritage department in reinforcing the eroded rock with discreet artificial stone." },
      { yearOrEra: "Present Era", event: "Iconic Cultural Heritage", description: "Remains one of the seven sea temples forming an unbroken protective spiritual chain around the coast of Bali." }
    ],
    architecturalSecrets: [
      "Tanah Lot is one of seven sea temples along the Balinese coast, positioned so that each temple is visually in sight of the next one.",
      "At high tide, the rock is completely cut off from the mainland, turning the temple into an island floating upon the surf.",
      "Local legend holds that sacred venomous sea snakes living in caves beneath the rock guard the temple from evil spirits."
    ],
    culturalSignificance: "Tanah Lot plays a vital role in Balinese Hindu spirituality, dedicated to Bhatara Segara (the sea deity) to protect the island from ocean storms.",
    visitorTips: [
      "Arrive around 4:30 PM to explore the grounds at low tide, then stay for the breathtaking sunset at 6:00 PM.",
      "Non-Balinese Hindus cannot enter the inner sanctum atop the rock, but can walk around the base and receive a blessing at the freshwater spring.",
      "Wear water-resistant footwear as rocks can be wet and slippery."
    ],
    narrationScript: "Welcome to Pura Tanah Lot, the iconic sea temple of Bali, Indonesia. Perched atop an offshore rock carved by centuries of ocean waves, Tanah Lot means 'Land in the Sea.' Founded in the 16th century by the sage Nirartha, this sacred shrine honors the ocean deities who protect Bali. At high tide, the waves encircle the rock, isolating the temple like a mythical island. Gaze at its dark thatched Meru towers silhouetted against the glowing colors of an Indian Ocean sunset.",
    chapters: [
      { id: "chap-1", title: "Temple on the Waves", timestampHint: "0:00", script: "Perched on volcanic rock, Tanah Lot has guarded Bali's southern shores for five hundred years.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Meru Spire of the Sea", timestampHint: "0:25", script: "Black palm-fiber thatched roofs rise in tiered layers toward the tropical sky.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Freshwater in the Salt Sea", timestampHint: "0:50", script: "Beneath the rock, a holy freshwater spring flows continuously amid the saltwater ocean.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Sunset Over the Indian Ocean", timestampHint: "1:15", script: "As dusk falls, the silhouette of Tanah Lot becomes one of the world's most breathtaking visions.", focusPointId: "pt-4" }
    ]
  },

  "pura ulun danu beratan": {
    name: "Pura Ulun Danu Beratan",
    localName: "Pura Ulun Danu Beratan, Bedugul",
    city: "Bedugul, Tabanan, Bali",
    country: "Indonesia",
    architecturalStyle: "Balinese Water Temple (Pura Tirta) & Meru Pagoda Architecture",
    periodEra: "Built 1633 AD by I Gusti Agung Putu (King of Mengwi)",
    confidence: 99,
    summary: "Floating serenely on the misty waters of Lake Bratan 4,000 feet above sea level in Bali's volcanic highlands, Pura Ulun Danu Beratan is a breathtaking 17th-century water temple. Dedicated to Dewi Danu, the goddess of lakes and rivers, its 11-tiered Meru tower seems to float magically upon the water against a backdrop of mist-shrouded volcanic peaks.",
    coordinatesEstimate: { lat: -8.2751, lng: 115.1656 },
    arKeypoints: [
      { id: "pt-1", label: "11-Tiered Lingga Petak Meru Pagoda", featureType: "spire", description: "Iconic eleven-roofed black palm thatch tower dedicated to Lord Shiva and Goddess Parvati.", x: 50, y: 25 },
      { id: "pt-2", label: "Reflecting Waters of Lake Bratan", featureType: "relief", description: "Serene volcanic crater lake reflecting the temple towers and alpine mountain clouds.", x: 50, y: 75 },
      { id: "pt-3", label: "7-Tiered Pura Penataran Pucak Mangu", featureType: "dome", description: "Secondary tiered Meru shrine dedicated to the god of Mount Mangu.", x: 68, y: 40 },
      { id: "pt-4", label: "Lush Botanical Gardens & Candi Bentar", featureType: "entrance", description: "Manicured highland garden courtyards featuring split stone gates and lotus ponds.", x: 30, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1633 AD", event: "Commissioned by the King of Mengwi", description: "Built by I Gusti Agung Putu to manage the island's Subak irrigation network and honor the water goddess." },
      { yearOrEra: "2012", event: "UNESCO World Heritage Recognition", description: "Recognized as part of the cultural landscape of Bali's Subak cooperative water management system." }
    ],
    architecturalSecrets: [
      "The temple controls the water flow of Lake Bratan, which feeds the rivers that irrigate southern Bali's famous UNESCO rice terraces through the ancient Subak system.",
      "The 11-tiered tower rests on two small islets just off the lake shoreline, appearing to float weightlessly when the water level rises.",
      "A Buddhist stupa with a statue of Buddha seated under a parasol sits inside the complex, symbolizing centuries of peaceful Hindu-Buddhist syncretism in Bali."
    ],
    culturalSignificance: "Ulun Danu Beratan is the agricultural life-giver of Bali, ensuring abundance, clean water, and fertile crops for the entire island.",
    visitorTips: [
      "Arrive early between 8:00 AM and 9:30 AM before afternoon mountain mist and rain roll into the highlands.",
      "Rent a traditional pedal boat or wooden canoe to view and photograph the floating temple from the lake waters.",
      "Bring a light sweater or jacket as the highland mountain climate is noticeably cooler than coastal Bali."
    ],
    narrationScript: "Welcome to Pura Ulun Danu Beratan, floating upon the misty waters of Lake Bratan in the highlands of Bali, Indonesia. Built in 1633 by the King of Mengwi, this serene temple is dedicated to Dewi Danu, the goddess of waters who nourishes Bali's rice terraces. Gaze at the eleven-tiered Meru tower rising from the water: surrounded by reflections of volcanic ridges and alpine clouds, it is a timeless masterpiece of Balinese spiritual harmony with nature.",
    chapters: [
      { id: "chap-1", title: "Temple on the Mountain Lake", timestampHint: "0:00", script: "Four thousand feet high in the volcanic caldera, Lake Bratan cradles this floating water sanctuary.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Eleven Tiers of Meru", timestampHint: "0:25", script: "The eleven-tiered thatched pagoda seems to drift upon the water, honoring Shiva and Parvati.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Goddess of the Waters", timestampHint: "0:50", script: "For centuries, Balinese farmers have gathered here to pray for the holy water that irrigates their fields.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Harmony in the Highlands", timestampHint: "1:15", script: "Surrounded by blooming gardens, the temple embodies the sacred Balinese philosophy of Tri Hita Karana.", focusPointId: "pt-4" }
    ]
  },

  "pashupatinath temple": {
    name: "Pashupatinath Temple",
    localName: "श्री पशुपतिनाथ मन्दिर, काठमाडौँ",
    city: "Kathmandu",
    country: "Nepal",
    architecturalStyle: "Nepalese Tiered Pagoda Style (UNESCO World Heritage)",
    periodEra: "Origins c. 400 AD; Rebuilt 1692 AD by King Bhupatindra Malla",
    confidence: 99,
    summary: "Stretching along both banks of the sacred Bagmati River in Kathmandu, Pashupatinath is the oldest and most venerated Hindu temple complex in Nepal. A UNESCO World Heritage site, celebrated for its two-tiered golden pagoda roof, colossal gilded bronze Nandi Bull, four-faced Mukhalinga, and riverside cremation ghats.",
    coordinatesEstimate: { lat: 27.7104, lng: 85.3487 },
    arKeypoints: [
      { id: "pt-1", label: "Two-Tiered Golden Pagoda Spire", featureType: "spire", description: "Spectacular copper pagoda roof layered in heavy gold leaf, crowned with a golden Gajur pinnacle.", x: 50, y: 22 },
      { id: "pt-2", label: "Colossal Gilded Bronze Nandi Bull", featureType: "statue", description: "Massive kneeling bull statue plated in gold positioned directly facing the western door.", x: 42, y: 68 },
      { id: "pt-3", label: "Bagmati River & Arya Ghat", featureType: "relief", description: "Sacred river steps where solemn Hindu cremation rituals and evening Maha Aarti take place.", x: 74, y: 75 },
      { id: "pt-4", label: "Four Silver-Sheeted Sanctum Portals", featureType: "entrance", description: "Embossed silver repoussé doorways opening to the four faces of the holy Pashupatinath Mukhalinga.", x: 50, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 400 AD", event: "Licchavi Dynasty Foundations", description: "Recorded as an ancient sanctuary dedicated to Lord Shiva as Pashupati (Lord of all Beings)." },
      { yearOrEra: "1692 AD", event: "Malla Pagoda Reconstruction", description: "King Bhupatindra Malla reconstructed the present two-tiered golden pagoda after termite damage." },
      { yearOrEra: "April 2015", event: "Earthquake Survival", description: "Miraculously survived the massive 7.8-magnitude Nepal earthquake with its main pagoda intact." }
    ],
    architecturalSecrets: [
      "The sanctum houses a one-meter-tall black stone four-faced Lingam (Mukhalinga), with each face looking toward the four cardinal directions representing different aspects of Shiva.",
      "The wooden roof struts supporting the two pagoda tiers are hand-carved with intricate figures of deities, including rare protective avatars.",
      "By ancient tradition, the four priests (Bhattas) of Pashupatinath are chosen exclusively from Vedic scholars from Karnataka and South India, preserving a millennium-old cultural bond."
    ],
    culturalSignificance: "Pashupatinath is the national guardian deity of Nepal and the supreme Himalayan sanctuary for millions of Shiva devotees.",
    visitorTips: [
      "Attend the mesmerizing Bagmati River Ganga-style Maha Aarti across from the main temple at 6:30 PM every evening.",
      "Non-Hindus cannot enter the inner courtyard, but have an incredible full view of the golden pagoda and ghats from the eastern terrace.",
      "Respect the solemnity of the Arya Ghat cremation areas along the riverbank."
    ],
    narrationScript: "Welcome to Pashupatinath Temple on the banks of the sacred Bagmati River in Kathmandu, Nepal. Revered as the oldest Hindu sanctuary in the Kathmandu Valley, Pashupatinath honors Lord Shiva as the Protector of all Living Beings. Gaze across the river at its two-tiered pagoda roof, gleaming with sheets of pure gold. Around its base, silver-plated doors and a colossal golden Nandi bull watch over rituals that have accompanied birth, life, and transition into eternity for over fifteen centuries.",
    chapters: [
      { id: "chap-1", title: "Lord of All Beings", timestampHint: "0:00", script: "Standing beside the sacred Bagmati River, Pashupatinath is the spiritual center of Nepal.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Golden Pagoda", timestampHint: "0:25", script: "Layers of gold-plated copper rise in classical Nepalese pagoda architecture.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Golden Bull of Shiva", timestampHint: "0:50", script: "Before the western silver doors kneels a monumental gilded bronze statue of Nandi.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Waters of the Bagmati", timestampHint: "1:15", script: "Along the stone steps of the river, evening lamps and incense rise in eternal tribute.", focusPointId: "pt-3" }
    ]
  },

  "wat arun": {
    name: "Wat Arun Ratchawararam (Temple of Dawn)",
    localName: "วัดอรุณราชวรารามราชวรมหาวิหาร",
    city: "Bangkok",
    country: "Thailand",
    architecturalStyle: "Khmer-Style Prang Encrusted with Chinese Glazed Porcelain",
    periodEra: "Ayutthaya Kingdom origins; Central Prang completed 1851 (Reigns of Rama II & Rama III)",
    confidence: 99,
    summary: "Rising majestically on the west bank of the Chao Phraya River, Wat Arun (The Temple of Dawn) is one of Bangkok's most famous landmarks. It features a spectacular 82-meter Khmer-style central tower (Prang) encrusted with millions of pieces of colorful Chinese porcelain, reflecting the first light of dawn.",
    coordinatesEstimate: { lat: 13.7437, lng: 100.4889 },
    arKeypoints: [
      { id: "pt-1", label: "82-Meter Central Porcelain Prang", featureType: "spire", description: "Towering central pagoda symbolizing Mount Meru, adorned with seashells and colorful porcelain mosaics.", x: 50, y: 18 },
      { id: "pt-2", label: "Chinese Glazed Ceramic Flower Tiles", featureType: "relief", description: "Intricate floral mosaics recycled from Chinese merchant ship porcelain ballast.", x: 40, y: 55 },
      { id: "pt-3", label: "Chao Phraya River Waterfront Pier", featureType: "entrance", description: "Scenic riverside boat pier framing views of Bangkok's river traffic and historic skyline.", x: 50, y: 82 },
      { id: "pt-4", label: "Four Corner Subsidiary Prangs", featureType: "facade", description: "Four smaller satellite prang towers dedicated to Phra Phai, the wind god, at the cardinal directions.", x: 74, y: 40 }
    ],
    historicalTimeline: [
      { yearOrEra: "1768", event: "Named Temple of Dawn by King Taksin", description: "King Taksin arrived at sunrise after the fall of Ayutthaya and established his new capital here, renaming it Wat Chaeng." },
      { yearOrEra: "1824–1851", event: "Grand Prang Construction", description: "Kings Rama II and Rama III raised the central spire to its current 82m height and decorated it with porcelain." }
    ],
    architecturalSecrets: [
      "The colorful porcelain tiles decorating the entire tower were once ballast on merchant ships sailing between China and Siam; rather than discarding broken plates, artisans recycled them into floral mosaics.",
      "The central prang represents Mount Meru of Buddhist cosmology, while the four surrounding smaller towers represent the four guardians of the universe.",
      "King Taksin originally enshrined the famous Emerald Buddha here before King Rama I moved it across the river to Wat Phra Kaew."
    ],
    culturalSignificance: "Wat Arun is the visual emblem of Bangkok and Thailand, symbolizing rebirth, spiritual ascent, and the dawn of a new era.",
    visitorTips: [
      "Take the cross-river ferry from Tha Tien pier for only a few Thai Baht to reach the temple steps.",
      "Climb the steep lower stairs of the central prang for an unforgettable panoramic view across the Chao Phraya River.",
      "Visit in the late afternoon to see the temple up close, then watch it glow in floodlit gold from across the river at night."
    ],
    narrationScript: "Welcome to Wat Arun, the Temple of Dawn, rising on the banks of the Chao Phraya River in Bangkok, Thailand. Named after Aruna, the Hindu god of dawn, this 82-meter tower is an architectural marvel. Look closely at its surface: it is encrusted with millions of pieces of colorful glazed Chinese porcelain and seashells that once served as ship ballast. Representing Mount Meru, the temple catches the first light of morning and glows in gold across the river at dusk.",
    chapters: [
      { id: "chap-1", title: "The Spire of Dawn", timestampHint: "0:00", script: "Rising 82 meters above the river, Wat Arun is one of the most recognizable landmarks in Asia.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Mosaics of Chinese Porcelain", timestampHint: "0:25", script: "Up close, millions of discarded Chinese teacups and plates form intricate floral tapestries in stone.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Four Towers of the Winds", timestampHint: "0:50", script: "Four satellite prangs guard the cardinal directions, each crowned with the sacred trident of Shiva.", focusPointId: "pt-4" },
      { id: "chap-4", title: "The River of Kings", timestampHint: "1:15", script: "From the riverfront terrace, the Chao Phraya River flows past Bangkok's historic temples and palaces.", focusPointId: "pt-3" }
    ]
  },

  "wat rong khun": {
    name: "Wat Rong Khun (White Temple)",
    localName: "วัดร่องขุ่น, เชียงราย",
    city: "Chiang Rai",
    country: "Thailand",
    architecturalStyle: "Contemporary Surrealist Thai Buddhist Architecture",
    periodEra: "Designed by Master Chalermchai Kositpipat (Opened 1997)",
    confidence: 99,
    summary: "Located in northern Thailand's Chiang Rai province, Wat Rong Khun (The White Temple) is an extraordinary contemporary temple complex executed entirely in blinding white plaster and embedded mirror fragments. Designed by master artist Chalermchai Kositpipat to express purity, human desire, and Buddhist enlightenment.",
    coordinatesEstimate: { lat: 19.8242, lng: 99.7631 },
    arKeypoints: [
      { id: "pt-1", label: "Blinding White Gilded Ubosot", featureType: "spire", description: "Pure white main chapel featuring intricate flame-like eaves and millions of embedded sparkling mirrors.", x: 50, y: 25 },
      { id: "pt-2", label: "Bridge of the Cycle of Rebirth", featureType: "entrance", description: "Sculpted causeway crossing a sea of hundreds of reaching hands symbolizing human greed and suffering.", x: 50, y: 68 },
      { id: "pt-3", label: "Gate of Heaven & Mythical Guardians", featureType: "statue", description: "Dramatic white statues of Rahu and Death guarding the entrance to the inner sanctuary.", x: 38, y: 55 },
      { id: "pt-4", label: "Golden Restroom Palace", featureType: "facade", description: "Elaborately gilded gold palace-like building contrasting worldly desires with the purity of the white temple.", x: 78, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1997", event: "Project Inception", description: "Renowned Chiang Rai artist Chalermchai Kositpipat bought the decaying local temple and began rebuilding it entirely with his own funds." },
      { yearOrEra: "May 2014", event: "Earthquake Survival & Restoration", description: "A major earthquake shook northern Thailand; the artist repaired damaged murals and committed to completing the 9-building vision." }
    ],
    architecturalSecrets: [
      "The choice of white rather than traditional Thai gold symbolizes the absolute purity of the Buddha, while mirrored glass represents the Dharma reflecting wisdom into the human mind.",
      "Inside the main chapel, instead of only traditional murals, the artist painted contemporary pop-culture figures (Neo from The Matrix, spaceships, Superman, nuclear explosions) to illustrate human conflict and the search for peace.",
      "The artist has refused all government and corporate funding, financing the temple exclusively through his artwork to maintain total creative and spiritual freedom."
    ],
    culturalSignificance: "Wat Rong Khun is a world-famous masterwork of contemporary sacred art, redefining traditional Buddhist architecture for the modern age.",
    visitorTips: [
      "Wear sunglasses on sunny days: the white plaster and mirror mosaics reflect intense northern Thai sunlight.",
      "Photography is strictly prohibited inside the main Ubosot, so take your time examining the surprising contemporary murals.",
      "Visit in the early morning at 8:00 AM before tour buses arrive from Chiang Mai."
    ],
    narrationScript: "Welcome to Wat Rong Khun, the White Temple of Chiang Rai in northern Thailand. Designed and built by visionary master artist Chalermchai Kositpipat, this is one of the most astonishing temples of the 21st century. Constructed entirely in pure white plaster embedded with mirrored glass, it glints like an icy palace in the tropical sun. To enter, you must cross the Bridge of Rebirth over a sea of reaching hands—a passage from desire and suffering into peace and enlightenment.",
    chapters: [
      { id: "chap-1", title: "A Vision of Pure White", timestampHint: "0:00", script: "White symbolizes the purity of the Buddha, while thousands of mirrors reflect cosmic wisdom.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Bridge of the Cycle of Rebirth", timestampHint: "0:25", script: "Crossing the bridge over reaching hands reminds seekers to conquer greed and attachment.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Guardians of Heaven", timestampHint: "0:50", script: "Mythical Naga serpents and guardians flank the gateway into the inner sanctuary.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Art for Eternity", timestampHint: "1:15", script: "Inside the chapel, contemporary pop culture and ancient Buddhist wisdom unite on the walls.", focusPointId: "pt-4" }
    ]
  },

  "baps robbinsville": {
    name: "BAPS Shri Swaminarayan Mandir (Akshardham USA)",
    localName: "BAPS Swaminarayan Akshardham, New Jersey",
    city: "Robbinsville, New Jersey",
    country: "United States",
    architecturalStyle: "Hand-Carved European Marble & Limestone Nagara Mandir",
    periodEra: "Inaugurated October 2023 (Consecrated by Mahant Swami Maharaj)",
    confidence: 99,
    summary: "Spread over 185 acres in Robbinsville, New Jersey, this is the largest Hindu temple in the Western Hemisphere and the second-largest in the world. Sculpted by 12,500 volunteers from Italian Carrara marble, Greek marble, and Bulgarian limestone, featuring 10,000 carved statues, 151 musical instruments, and the sacred Brahma Kund.",
    coordinatesEstimate: { lat: 40.2311, lng: -74.5779 },
    arKeypoints: [
      { id: "pt-1", label: "Central Mahamandir Dome & Shikharas", featureType: "dome", description: "Rising 191 feet high, hand-carved in pure white European marble with intricate celestial dancers.", x: 50, y: 22 },
      { id: "pt-2", label: "Brahma Kund Sacred Water Stepwell", featureType: "entrance", description: "Traditional stepwell pond containing holy water gathered from over 108 sacred rivers worldwide.", x: 50, y: 78 },
      { id: "pt-3", label: "10,000 Carved Murtis & Relief Figures", featureType: "relief", description: "Intricate reliefs depicting philosophers, scientists, and ancient Indian musical traditions.", x: 35, y: 55 },
      { id: "pt-4", label: "Welcome Center & Limestone Colonnade", featureType: "column", description: "Warm Bulgarian limestone colonnade with ornate arches greeting international visitors.", x: 74, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "2011", event: "Groundbreaking & Global Carving", description: "Stone quarrying began in Europe, transported to Rajasthan where thousands of master artisans carved panels by hand." },
      { yearOrEra: "October 2023", event: "Grand Inauguration", description: "Dedicated as an international monument of universal peace, service, and spiritual harmony." }
    ],
    architecturalSecrets: [
      "Over 1.9 million cubic feet of stone from four European countries were used, making it the largest stone temple built outside India in modern history.",
      "More than 12,500 volunteers from around the world dedicated over 4.7 million volunteer hours to piece together the interlocking stone puzzle.",
      "The Welcome Center incorporates reclaimed wood and environmentally conscious geothermal heating systems."
    ],
    culturalSignificance: "The temple stands as a cultural bridge in North America, celebrating universal humanitarian values, spiritual wisdom, and architectural heritage.",
    visitorTips: [
      "Admission is free; book online visit passes in advance on weekends.",
      "Dress code: shoulders and knees must be covered; shoes are removed before entering the Mandir.",
      "Visit the vegetarian Nilkanth cafeteria for authentic freshly prepared snacks and meals."
    ],
    narrationScript: "Welcome to BAPS Swaminarayan Akshardham in Robbinsville, New Jersey, the largest Hindu temple in the Western Hemisphere. Rising across 185 acres of green American countryside, this monument was hand-carved by twelve thousand volunteers using pristine marble from Italy and Greece. Gaze upon its central Mahamandir rising 191 feet into the sky: surrounded by ten thousand sculpted figures, it stands as an enduring monument to global peace and selfless service.",
    chapters: [
      { id: "chap-1", title: "A Landmark in America", timestampHint: "0:00", script: "In the heart of New Jersey, classical Indian stone architecture reaches new heights in the Western world.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Living Stone of Europe", timestampHint: "0:25", script: "Carrara and Bulgarian limestone unite in a symphony of hand-carved pillars and celestial domes.", focusPointId: "pt-3" },
      { id: "chap-3", title: "Brahma Kund: Waters of Unity", timestampHint: "0:50", script: "The holy stepwell holds waters from over a hundred sacred rivers across India and the globe.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Spirit of Selfless Service", timestampHint: "1:15", script: "Millions of volunteer hours built this sanctuary as a gift of peace to future generations.", focusPointId: "pt-4" }
    ]
  },

  "baps abu dhabi": {
    name: "BAPS Hindu Mandir, Abu Dhabi",
    localName: "بابس معبد هندوسي أبوظبي",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    architecturalStyle: "Hand-Carved Pink Sandstone & White Marble Traditional Hindu Architecture",
    periodEra: "Consecrated February 2024 (Inaugurated by PM Narendra Modi & Mahant Swami Maharaj)",
    confidence: 99,
    summary: "The first traditional hand-carved stone Hindu temple in the Middle East, the BAPS Hindu Mandir in Abu Dhabi is a landmark symbol of interfaith harmony and peace. Constructed from 40,000 cubic meters of marble and 180,000 cubic meters of pink Rajasthan sandstone, featuring 7 towering Shikharas representing the seven Emirates of the UAE.",
    coordinatesEstimate: { lat: 24.5786, lng: 54.7678 },
    arKeypoints: [
      { id: "pt-1", label: "Seven Hand-Carved Sandstone Shikharas", featureType: "spire", description: "Seven towering spires honoring the seven Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al-Quwain, Ras Al Khaimah, Fujairah.", x: 50, y: 20 },
      { id: "pt-2", label: "White Italian Marble Pillar Carvings", featureType: "column", description: "Over 400 interior pillars depicting 14 global civilizational tales from Maya, Egyptian, and Arab lore.", x: 40, y: 60 },
      { id: "pt-3", label: "Dune-Inspired Desert Amphitheater", featureType: "relief", description: "Peaceful desert water channels and amphitheater celebrating global tolerance and friendship.", x: 68, y: 75 },
      { id: "pt-4", label: "Dome of Harmony & Global Values", featureType: "dome", description: "Intricate ceiling dome carved with symbols of earth, water, fire, air, and space.", x: 50, y: 40 }
    ],
    historicalTimeline: [
      { yearOrEra: "August 2015", event: "Land Gifted by UAE Government", description: "The UAE Government led by Crown Prince Sheikh Mohamed bin Zayed Al Nahyan graciously gifted 27 acres of land." },
      { yearOrEra: "February 2024", event: "Historic Consecration", description: "Inaugurated by Indian Prime Minister Narendra Modi and Mahant Swami Maharaj amid international leaders." }
    ],
    architecturalSecrets: [
      "Built with zero structural steel or carbon reinforcement, using innovative thermal-resistant sandstone suited to the desert climate.",
      "More than 300 high-tech sensors are embedded within the temple stone to monitor real-time temperature, pressure, and seismic activity.",
      "The walls uniquely feature carved bas-reliefs illustrating parables from ancient Mesopotamian, Native American, Maya, Aztec, and Arabian civilizations."
    ],
    culturalSignificance: "A historic beacon of tolerance and global friendship, demonstrating how culture, faith, and mutual respect bridge nations.",
    visitorTips: [
      "Book your visiting slot on the official mandir.ae website prior to arrival.",
      "Dress respectfully: full-length clothing covering shoulders and knees is mandatory.",
      "Inspect the 'Dome of Harmony' ceiling to admire the confluence of universal civilizational values."
    ],
    narrationScript: "Welcome to the BAPS Hindu Mandir in Abu Dhabi, the first traditional hand-carved stone temple in the Middle East. Standing majestically in the desert between Abu Dhabi and Dubai, this temple was built from 180,000 cubic meters of pink sandstone and white marble without a single piece of steel. Notice its seven towering Shikharas, each paying tribute to one of the seven Emirates of the UAE. Here in the desert, ancient craftsmanship and modern friendship unite in an immortal sanctuary of global peace.",
    chapters: [
      { id: "chap-1", title: "Seven Spires of Friendship", timestampHint: "0:00", script: "Seven sandstone spires reach into the desert sky, honoring the seven Emirates of the UAE.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Dome of Universal Harmony", timestampHint: "0:25", script: "Under the central dome, carvings depict the shared wisdom of ancient world civilizations.", focusPointId: "pt-4" },
      { id: "chap-3", title: "Italian Marble Craftsmanship", timestampHint: "0:50", script: "More than four hundred hand-carved marble pillars create a cool, serene sanctuary of light.", focusPointId: "pt-2" },
      { id: "chap-4", title: "Oasis of Peace in the Desert", timestampHint: "1:15", script: "Waterways and green courtyards surround the temple, creating an oasis of friendship and reflection.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // GLOBAL CATHEDRALS & CHURCHES
  // ==========================================
  "sagrada familia": {
    name: "Basílica de la Sagrada Família",
    localName: "Temple Expiatori de la Sagrada Família",
    city: "Barcelona, Catalonia",
    country: "Spain",
    architecturalStyle: "Catalan Modernisme & Organic Gothic Revival",
    periodEra: "Commenced 1882 (Designed by Antoni Gaudí)",
    confidence: 99,
    summary: "Antoni Gaudí's unfinished magnum opus and a UNESCO World Heritage site, the Sagrada Família represents the ultimate synthesis of Gothic geometry and natural biomimetic engineering, featuring tree-like interior columns, dazzling stained-glass luminescence, and eighteen soaring spires.",
    coordinatesEstimate: { lat: 41.4036, lng: 2.1744 },
    arKeypoints: [
      { id: "pt-1", label: "Nativity Facade Sculptural Group", featureType: "facade", description: "Completed under Gaudí's direct guidance, depicting the birth of Christ through hyper-detailed flora and fauna stone carvings.", x: 50, y: 55 },
      { id: "pt-2", label: "Tower of Jesus Christ Central Spire", featureType: "spire", description: "The soaring central spire rising to 172.5 meters, crowned with a four-armed illuminated cross.", x: 50, y: 15 },
      { id: "pt-3", label: "Arborescent Forest Columns", featureType: "column", description: "Interior branching stone columns engineered as hyperbolic paraboloids to mimic towering forest trees.", x: 38, y: 65 },
      { id: "pt-4", label: "Passion Facade Angular Statues", featureType: "relief", description: "Angular, bone-like stone sculptures by Josep Maria Subirachs recounting the Passion and crucifixion.", x: 70, y: 50 }
    ],
    historicalTimeline: [
      { yearOrEra: "1882", event: "Cornerstone Laid", description: "Initial construction began under diocesan architect Francisco de Paula del Villar before Antoni Gaudí took over in 1883." },
      { yearOrEra: "1926", event: "Death of Antoni Gaudí", description: "Gaudí was buried in the crypt of the Sagrada Família after dedicating over four decades to its vision." },
      { yearOrEra: "1984 & 2005", event: "UNESCO World Heritage Listing", description: "Gaudí's Nativity facade and crypt inscribed as a UNESCO World Heritage cultural masterpiece." },
      { yearOrEra: "2010", event: "Consecration by Pope Benedict XVI", description: "Consecrated as a minor basilica, opening the forest-like nave to global worshippers." }
    ],
    architecturalSecrets: [
      "Gaudí planned the height of the central Jesus tower (172.5m) to be exactly one meter lower than Montjuïc hill, believing human work should never exceed God's creation.",
      "The interior columns are constructed from varying stones according to weight-bearing demand: red porphyry from Iran for the largest columns, basalt, granite, and soft sandstone.",
      "The stained glass windows are arranged chromatically: cold blues and greens to the east capture morning light, while warm reds and oranges to the west catch the fiery setting sun."
    ],
    culturalSignificance: "The definitive symbol of Barcelona and an undisputed triumph of 20th-century religious architecture, fusing faith, nature, and pioneering mathematics.",
    visitorTips: [
      "Book entry tickets weeks in advance with tower access to the Nativity or Passion spires.",
      "Visit between 3:00 PM and 5:00 PM when western afternoon sunlight sets the nave ablaze in ruby and amber hues.",
      "Visit the underground museum to see Gaudí's inverted string-and-weight catenary models."
    ],
    narrationScript: "You are gazing upon the Sagrada Família in Barcelona, Antoni Gaudí's immortal architectural dream. Commenced in 1882 and crafted across generations, this cathedral is an engineered forest in stone. Look at the Nativity Facade on your left: its stones cascade with flowers, animals, and angels chiseled under Gaudí's personal touch. Step within, and tree-like stone trunks branch into hyperbolic canopies bathed in jewel-toned sunlight. Here, architecture leaves behind rigid dogma to become a living, breathing hymn to nature and the cosmos.",
    chapters: [
      { id: "ch-1", title: "A Temple of Living Stone", timestampHint: "0:00", script: "Antoni Gaudí transformed a traditional basilica into a biomimetic cathedral inspired by nature.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Spires Reaching for the Sky", timestampHint: "0:30", script: "Eighteen spires will crown the basilica, the tallest honoring Jesus Christ at 172.5 meters.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Canopy of Light & Porphyry", timestampHint: "1:00", script: "Branching columns and kaleidoscopic stained glass turn the interior into an ethereal Mediterranean forest.", focusPointId: "pt-3" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Works of Antoni Gaudí - Nativity Façade and Crypt of La Sagrada Família",
      inscriptionYear: 2005,
      criteria: "(i)(ii)(iv)",
      category: "Cultural",
      unescoId: "320"
    }
  },

  "hagia sophia": {
    name: "Hagia Sophia",
    localName: "Ayasofya-i Kebir Cami-i Şerifi",
    city: "Istanbul",
    country: "Turkey",
    architecturalStyle: "Byzantine Imperial & Ottoman Classical",
    periodEra: "Completed 537 AD (Emperor Justinian I) / Minarets 15th-16th Century",
    confidence: 99,
    summary: "Built in 537 AD as the imperial cathedral of Constantinople, Hagia Sophia ('Holy Wisdom') revolutionized world architecture with its monumental 32-meter pendentive dome suspended seemingly by a golden chain from heaven, later crowned by four Ottoman minarets by master architect Mimar Sinan.",
    coordinatesEstimate: { lat: 41.0086, lng: 28.9802 },
    arKeypoints: [
      { id: "pt-1", label: "Monumental Pendentive Central Dome", featureType: "dome", description: "32-meter diameter dome supported by four spherical triangular pendentives, pierced by 40 radiating arched windows.", x: 50, y: 22 },
      { id: "pt-2", label: "Golden Deësis Mosaic Gallery", featureType: "relief", description: "Masterpiece 13th-century Byzantine mosaic in the upper southern gallery depicting Christ Pantocrator flanked by the Virgin Mary and John the Baptist.", x: 42, y: 62 },
      { id: "pt-3", label: "Mimar Sinan Reinforcement Minarets", featureType: "spire", description: "Four majestic stone minarets added following the 1453 conquest of Constantinople.", x: 78, y: 35 },
      { id: "pt-4", label: "Imperial Marble Porphyry Columns", featureType: "column", description: "Ancient green marble columns brought from the Temple of Artemis at Ephesus and Baalbek.", x: 30, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "537 AD", event: "Consecration by Justinian I", description: "Inaugurated on December 27, 537, with Emperor Justinian proclaiming: 'Solomon, I have surpassed thee!'" },
      { yearOrEra: "1453", event: "Ottoman Conversion by Mehmed II", description: "Sultan Mehmed II preserved the structure and converted it to the principal imperial mosque of the Ottoman Empire." },
      { yearOrEra: "1935–2020", event: "Museum Era to Mosque Reversion", description: "Transformed into a secular museum by Mustafa Kemal Atatürk in 1935, and restored as an active mosque in 2020." }
    ],
    architecturalSecrets: [
      "The dome rests on four pendentives—spherical triangles that bridge a square ground plan to a circular dome, an engineering feat that changed global sacred architecture forever.",
      "The 40 perimeter windows beneath the dome allow sunlight to flood the interior, creating the visual illusion that the dome floats weightlessly in the air.",
      "Viking runic graffiti ('Halfdan carved these runes') is carved into the marble balustrade of the top southern gallery by an imperial Varangian guardsman from the 9th century."
    ],
    culturalSignificance: "For nearly a millennium the largest cathedral in the Christian world and for five centuries a flagship Ottoman mosque, Hagia Sophia is humanity's supreme crossroads between East and West.",
    visitorTips: [
      "Remove shoes before stepping onto the lush prayer carpets in the nave.",
      "Look up at the pendentive seraphim mosaics where centuries of Christian iconography and monumental Arabic calligraphy medina medallions coexist."
    ],
    narrationScript: "Standing beneath the great dome of Hagia Sophia, you are at the physical and spiritual crossroads of world empires. Consecrated in 537 AD under Byzantine Emperor Justinian, its pendentive dome was described by contemporaries as hanging from heaven by a golden chain. When Ottoman Sultan Mehmed II entered in 1453, he fell to his knees in awe and ordered its preservation. Today, golden Byzantine mosaics of Christ and Mary shimmer alongside colossal gilded calligraphy medallions celebrating Allah and the Prophet Muhammad—a sanctuary where civilizations converge.",
    chapters: [
      { id: "ch-1", title: "Justinian's Heavenly Dome", timestampHint: "0:00", script: "Completed in just five years, the 32-meter dome defied gravity and defined Byzantine architecture.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Mosaics of the Imperial Age", timestampHint: "0:30", script: "In the upper galleries, millions of gold glass cubes form breathtaking portraits of Christ Pantocrator.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Ottoman Imperial Grandeur", timestampHint: "1:00", script: "Minarets and calligraphy roundels by Kazasker Mustafa Izzet Effendi completed its majestic dual heritage.", focusPointId: "pt-3" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Historic Areas of Istanbul",
      inscriptionYear: 1985,
      criteria: "(i)(ii)(iii)(iv)",
      category: "Cultural",
      unescoId: "356"
    }
  },

  "westminster abbey": {
    name: "Westminster Abbey",
    localName: "Collegiate Church of Saint Peter at Westminster",
    city: "London",
    country: "United Kingdom",
    architecturalStyle: "Anglo-French High Gothic & Perpendicular Gothic",
    periodEra: "Rebuilt 1245 by King Henry III (Origins 960 AD)",
    confidence: 99,
    summary: "The coronation church of British monarchs since 1066 and the final resting place of monarchs, poets, and world-shaping scientists, Westminster Abbey features Britain's highest Gothic vault and the breathtaking Henry VII Lady Chapel fan-vaulted ceiling.",
    coordinatesEstimate: { lat: 51.4993, lng: -0.1273 },
    arKeypoints: [
      { id: "pt-1", label: "Coronation Theatre & Cosmati Pavement", featureType: "relief", description: "Rare 13th-century geometric marble and porphyry mosaic floor where every British monarch has been crowned since 1066.", x: 50, y: 70 },
      { id: "pt-2", label: "Henry VII Lady Chapel Fan Vault", featureType: "dome", description: "Pendant fan vault ceiling completed in 1519, celebrated as a pinnacle of English Perpendicular stone masonry.", x: 65, y: 25 },
      { id: "pt-3", label: "Western Twin Towers", featureType: "spire", description: "68-meter Gothic Revival Portland stone towers designed by Nicholas Hawksmoor and completed in 1745.", x: 50, y: 15 },
      { id: "pt-4", label: "Poets' Corner", featureType: "facade", description: "South transept sanctuary enshrining memorials to Geoffrey Chaucer, William Shakespeare, Charles Dickens, and Jane Austen.", x: 30, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1066", event: "William the Conqueror's Coronation", description: "William the Conqueror was crowned king on Christmas Day 1066, beginning a near thousand-year unbroken coronation tradition." },
      { yearOrEra: "1245", event: "Henry III's Gothic Rebuilding", description: "King Henry III demolished Edward the Confessor's Romanesque church to build the magnificent Anglo-French Gothic abbey we see today." },
      { yearOrEra: "1987", event: "UNESCO World Heritage Inscription", description: "Inscribed as a World Heritage Site alongside the Palace of Westminster and St Margaret's Church." }
    ],
    architecturalSecrets: [
      "The Cosmati Pavement before the High Altar contains an enigmatic riddle predicting the end of the world after 19,683 years.",
      "The Coronation Chair, commissioned by King Edward I in 1296, incorporates the sacred Scottish 'Stone of Scone' enclosed beneath the wooden seat.",
      "Sir Isaac Newton, Charles Darwin, and Stephen Hawking are buried side-by-side in the central nave."
    ],
    culturalSignificance: "The spiritual heart of British national identity, having hosted 40 royal coronations, 16 royal weddings, and enshrining over 3,300 notable figures in world history.",
    visitorTips: [
      "Stand before the High Altar to admire the Cosmati Pavement.",
      "Attend Evensong at 5:00 PM to experience the Abbey's sublime choir acoustics."
    ],
    narrationScript: "Step into Westminster Abbey, where the history of the English-speaking world has been written in stone for over a millennium. Since William the Conqueror in 1066, forty British monarchs have been crowned right upon this sacred Cosmati pavement. Above you in the Henry VII Lady Chapel, stone hangs in gravity-defying fan vaults like carved lace. Around every pier lie kings and queens, while in Poets' Corner and the nave, Chaucer, Shakespeare, Isaac Newton, and Charles Darwin rest in eternal remembrance.",
    chapters: [
      { id: "ch-1", title: "Coronation of Kings", timestampHint: "0:00", script: "Since 1066, the Coronation Chair and ancient Cosmati floor have seen forty royal coronations.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Stone Lacework of Henry VII", timestampHint: "0:30", script: "The pendant fan vaults of the Lady Chapel represent the peak of English Perpendicular Gothic art.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Sanctuary of Human Genius", timestampHint: "1:00", script: "From Newton and Darwin to Chaucer and Dickens, Britain's greatest minds rest within these aisles.", focusPointId: "pt-4" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Westminster Palace, Westminster Abbey and Saint Margaret's Church",
      inscriptionYear: 1987,
      criteria: "(i)(ii)(iv)",
      category: "Cultural",
      unescoId: "426"
    }
  },

  "duomo di milano": {
    name: "Milan Cathedral (Duomo di Milano)",
    localName: "Duomo di Milano / Basilica Cattedrale Metropolitana di Santa Maria Nascente",
    city: "Milan, Lombardy",
    country: "Italy",
    architecturalStyle: "Italian Flamboyant Gothic & Neoclassical",
    periodEra: "Commenced 1386 (Took nearly six centuries to complete)",
    confidence: 99,
    summary: "One of the largest cathedrals in the world, Milan's Duomo is constructed from luminous pink-and-white Candoglia marble, featuring 135 delicate spires, 3,400 statues, and its golden Madonnina protecting the Lombard capital.",
    coordinatesEstimate: { lat: 45.4641, lng: 9.1919 },
    arKeypoints: [
      { id: "pt-1", label: "La Madonnina Golden Spire", featureType: "spire", description: "Gilded copper statue of the Virgin Mary rising atop the central 108.5-meter lantern spire, protecting the city since 1774.", x: 50, y: 15 },
      { id: "pt-2", label: "Forest of Marble Pinnacles & Spines", featureType: "spire", description: "135 soaring Candoglia marble spires and flying buttresses adorning the walkable rooftop terraces.", x: 60, y: 35 },
      { id: "pt-3", label: "Flamboyant Marble Facade", featureType: "facade", description: "Intricately sculpted marble facade featuring Gothic portals, floral reliefs, and thousands of biblical figures.", x: 50, y: 65 },
      { id: "pt-4", label: "Saint Bartholomew Flayed Statue", featureType: "statue", description: "Famed hyper-realistic 1562 marble sculpture by Marco d'Agrate showing Saint Bartholomew carrying his own flayed skin.", x: 30, y: 70 }
    ],
    historicalTimeline: [
      { yearOrEra: "1386", event: "Fabbrica del Duomo Founded", description: "Gian Galeazzo Visconti initiated construction, establishing dedicated quarries in Candoglia with free canal transport into Milan." },
      { yearOrEra: "1805", event: "Napoleon's Coronation Order", description: "Napoleon Bonaparte ordered the completion of the facade prior to his coronation as King of Italy." },
      { yearOrEra: "1965", event: "Final Bronze Door Inauguration", description: "The last portal door was dedicated, officially concluding nearly six centuries of continuous craftsmanship." }
    ],
    architecturalSecrets: [
      "The cathedral is constructed from unique Candoglia marble containing pink feldspar veins, transported via the Navigli canals with special duty-free marks reading 'AUF' (Ad Usum Fabricae).",
      "Visitors can walk directly across the entire open-air marble rooftop, threading between dozens of Gothic flying buttresses and gargoyles with views of the Alps.",
      "A red light bulb high in the apse vault marks the location of a Holy Nail from the True Cross, lowered once a year via a 16th-century wooden elevator basket."
    ],
    culturalSignificance: "The beating heart of Milan and an enduring marvel of European stonemasonry, uniting centuries of Italian, French, and German craftsmen under the Veneranda Fabbrica.",
    visitorTips: [
      "Take the rooftop terrace elevator or stairs at sunset for panoramic vistas of Milan and the snowcapped Alps.",
      "Look for the famous sundial meridian line on the marble floor near the main entrance."
    ],
    narrationScript: "Welcome to the Duomo di Milano, an immense marble mountain rising in the heart of Lombardy. Commissioned in 1386, it took nearly six centuries to bring this Flamboyant Gothic dream into reality. More than three thousand statues and one hundred and thirty-five delicate spires crown its pink Candoglia marble terraces. High above the central spire, the golden Madonnina gleams against the Alpine horizon, guarding the city below. Walk its marble roof to discover one of the most sublime architectural panoramas on Earth.",
    chapters: [
      { id: "ch-1", title: "Six Centuries of Devotion", timestampHint: "0:00", script: "Begun in 1386, the Duomo took 579 years to complete, uniting European Gothic traditions.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Walkway of the Spire Forest", timestampHint: "0:30", script: "On the rooftop terraces, visitors stroll among 135 marble spires and intricate flying buttresses.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The Golden Madonnina", timestampHint: "1:00", script: "Shining at 108 meters, the golden statue of the Virgin Mary is the beloved protector of Milan.", focusPointId: "pt-1" }
    ]
  },

  "cologne cathedral": {
    name: "Cologne Cathedral (Kölner Dom)",
    localName: "Hohe Domkirche Sankt Petrus",
    city: "Cologne, North Rhine-Westphalia",
    country: "Germany",
    architecturalStyle: "High Gothic & German Neo-Gothic",
    periodEra: "Commenced 1248 / Completed 1880",
    confidence: 99,
    summary: "Standing 157 meters high beside the Rhine, Cologne Cathedral is Germany's most visited monument and a masterwork of High Gothic architecture, housing the gilded Shrine of the Three Kings and featuring the largest Gothic church facade in the world.",
    coordinatesEstimate: { lat: 50.9413, lng: 6.9583 },
    arKeypoints: [
      { id: "pt-1", label: "Twin 157-Meter Gothic Spires", featureType: "spire", description: "Monumental twin perforated stone spires that were the tallest structures in the world from 1880 to 1884.", x: 50, y: 15 },
      { id: "pt-2", label: "Shrine of the Three Holy Kings", featureType: "relief", description: "Nicholas of Verdun's colossal 12th-century gilded triple-sarcophagus containing the venerated relics of the Magi.", x: 50, y: 70 },
      { id: "pt-3", label: "Flying Buttress Skeletal System", featureType: "arch", description: "Soaring double flying buttresses and pinnacles transferring the tremendous weight of the 43-meter high central vault.", x: 75, y: 40 },
      { id: "pt-4", label: "Gerhard Richter Pixel Stained Glass", featureType: "facade", description: "Breathtaking 106-square-meter modern window composed of 11,263 hand-blown glass squares in 72 colors.", x: 30, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "1248", event: "Foundation Stone Laid", description: "Archbishop Konrad von Hochstaden laid the foundation stone to build a worthy home for the relics of the Three Kings." },
      { yearOrEra: "1560–1842", event: "Three-Century Construction Halt", description: "Building ceased for nearly 300 years with a wooden medieval crane famously remaining atop the south tower." },
      { yearOrEra: "1880", event: "Grand Imperial Completion", description: "Completed under Prussian patronage, celebrated nationwide as a symbol of German national unity." },
      { yearOrEra: "1996", event: "UNESCO World Heritage Recognition", description: "Inscribed as an exceptional work of human creative genius and a testament to European Gothic faith." }
    ],
    architecturalSecrets: [
      "The cathedral survived 14 direct aerial bomb hits during World War II while the surrounding city of Cologne was leveled to the ground, serving as an essential navigation beacon for pilots.",
      "The Shrine of the Three Kings is the largest reliquary in the Western world, crafted from gilded copper and silver and set with over 1,000 precious jewels and ancient cameos.",
      "St. Peter's Bell ('Decke Pitter'), weighing 24,000 kg, is the largest free-swinging bell in the world hung on straight yokes."
    ],
    culturalSignificance: "A paramount pilgrimage site of the Middle Ages that fundamentally shaped the European tradition of Gothic cathedral building and sacred German heritage.",
    visitorTips: [
      "Climb the 533 stone steps of the South Tower for an unforgettable panoramic view across the Rhine.",
      "Marvel at the Shrine of the Magi behind the high altar, glowing with medieval gold and enamel."
    ],
    narrationScript: "Standing before Cologne Cathedral, you are looking at one of humanity's most breathtaking Gothic achievements. Begun in 1248 to house the sacred relics of the Three Magi, its construction spanned over six hundred years. Its twin perforated stone spires pierce the German sky at 157 meters. During the devastation of World War II, this cathedral miraculously endured fourteen direct bomb strikes while the city crumbled around it—standing today as an immortal monument to human resilience and devotion.",
    chapters: [
      { id: "ch-1", title: "Twin Towers of the Rhine", timestampHint: "0:00", script: "Soaring 157 meters above Cologne, these twin spires formed the tallest building on Earth in 1880.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Golden Reliquary of the Magi", timestampHint: "0:30", script: "The gilded triple-sarcophagus of the Three Kings made Cologne a premier medieval pilgrimage capital.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Miracle of Survival", timestampHint: "1:00", script: "Surviving fourteen bomb hits in World War II, the Dom remains a beacon of hope and heritage.", focusPointId: "pt-3" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Cologne Cathedral",
      inscriptionYear: 1996,
      criteria: "(i)(ii)(iv)",
      category: "Cultural",
      unescoId: "292"
    }
  },

  "basilica of bom jesus": {
    name: "Basilica of Bom Jesus",
    localName: "Basílica do Bom Jesus",
    city: "Old Goa, Goa",
    country: "India",
    architecturalStyle: "Portuguese Baroque & Mannerist Jesuit Architecture",
    periodEra: "Consecrated 1605 (Built 1594–1605)",
    confidence: 99,
    summary: "A UNESCO World Heritage site and India's premier Catholic landmark, the Basilica of Bom Jesus holds the sacred incorrupt mortal remains of Saint Francis Xavier. Built from exposed reddish basalt and laterite stone, it is a peerless triumph of Baroque church design in Asia.",
    coordinatesEstimate: { lat: 15.5009, lng: 73.9116 },
    arKeypoints: [
      { id: "pt-1", label: "Exposed Laterite Baroque Facade", featureType: "facade", description: "Three-tiered triangular pedimented facade sculpted with Jesuit IHS monogram and classical Doric and Corinthian orders.", x: 50, y: 35 },
      { id: "pt-2", label: "Silver Casket of St. Francis Xavier", featureType: "relief", description: "Exquisite 17th-century Florentine marble mausoleum and silver reliquary casket holding the mortal remains of the patron saint.", x: 65, y: 65 },
      { id: "pt-3", label: "Gilded Reredos & High Altar", featureType: "altar", description: "Monumental gilded wooden altar portraying the infant Jesus (Bom Jesus) surmounted by Saint Ignatius of Loyola.", x: 50, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "1594–1605", event: "Construction by the Jesuits", description: "Built by Jesuit brothers and consecrated on May 15, 1605, by Archbishop Dom Fr. Aleixo de Menezes." },
      { yearOrEra: "1624", event: "Translation of Saint Francis Xavier", description: "The sacred body of Saint Francis Xavier was brought to the Basilica and enshrined in the Chapel of the Blessed Sacrament." },
      { yearOrEra: "1986", event: "UNESCO World Heritage Inscription", description: "Designated as a World Heritage site under the 'Churches and Convents of Goa' landmark inscription." }
    ],
    architecturalSecrets: [
      "The facade was originally plastered with lime, but the mortar was stripped away in the 1960s to reveal the rich reddish laterite stone beneath.",
      "The silver casket holding St. Francis Xavier was crafted by Goan silversmiths between 1636 and 1637 and is lowered for public exposition once every decade.",
      "The marble mausoleum base was carved in Florence by sculptor Giovanni Battista Foggini and shipped to Goa as a gift from the Grand Duke of Tuscany."
    ],
    culturalSignificance: "The foremost spiritual sanctuary of Christianity in India, drawing millions of pilgrims from every religion during the solemn Decennial Exposition.",
    visitorTips: [
      "Visit in the morning to quietly reflect in the side chapel of St. Francis Xavier.",
      "Cross the street to visit the Se Cathedral—the largest church in Asia—for a comprehensive heritage experience."
    ],
    narrationScript: "You stand before the Basilica of Bom Jesus in Old Goa, India's most celebrated Baroque monument and a UNESCO World Heritage site. Consecrated in 1605 by the Jesuits, its bold, unplastered red laterite facade showcases Corinthian and Doric orders chiseled by Goan craftsmen. Inside beneath a soaring gilded altar rests the sacred silver casket of Saint Francis Xavier. For over four centuries, this sanctuary has stood as an enduring bridge between Europe and the Indian subcontinent.",
    chapters: [
      { id: "ch-1", title: "Baroque Heritage of Goa", timestampHint: "0:00", script: "Built in 1605, Bom Jesus introduced European Baroque church architecture to the Indian coast.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Gilded Sanctuary", timestampHint: "0:30", script: "The towering altar glorifies Bom Jesus—the Good Jesus—and Jesuit founder Ignatius of Loyola.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Resting Place of St. Francis Xavier", timestampHint: "1:00", script: "A masterpiece of Florentine marble and Goan silver enshrines the beloved patron saint.", focusPointId: "pt-2" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Churches and Convents of Goa",
      inscriptionYear: 1986,
      criteria: "(ii)(iv)(vi)",
      category: "Cultural",
      unescoId: "234"
    }
  },

  "lalibela rock hewn churches": {
    name: "Rock-Hewn Churches of Lalibela (Biete Ghiorgis)",
    localName: "ቤተ ጊዮርጊስ / Bete Giyorgis (Church of Saint George)",
    city: "Lalibela, Amhara Region",
    country: "Ethiopia",
    architecturalStyle: "Monolithic Rock-Hewn Aksumite & Ethiopian Orthodox Architecture",
    periodEra: "Late 12th – Early 13th Century (Reign of King Gebre Mesqel Lalibela)",
    confidence: 99,
    summary: "Carved downwards out of solid red volcanic tuff as a single monolithic block in the shape of a Greek cross, Biete Ghiorgis is the crowning jewel of the eleven medieval rock-hewn churches of Lalibela, known as the 'New Jerusalem' of the Ethiopian Orthodox Christian faith.",
    coordinatesEstimate: { lat: 12.0319, lng: 39.0411 },
    arKeypoints: [
      { id: "pt-1", label: "Monolithic Greek Cross Roof", featureType: "relief", description: "Equal-armed Greek cross roof carved directly out of living volcanic bedrock with three tiers of drainage relief carving.", x: 50, y: 35 },
      { id: "pt-2", label: "25-Meter Deep Sunken Courtyard Pit", featureType: "facade", description: "Enormous trench chiseled into the rock, separating the freestanding church entirely from the bedrock mountain.", x: 50, y: 70 },
      { id: "pt-3", label: "Ogive & Aksumite Window Frames", featureType: "arch", description: "Carved Aksumite-style windows adorned with ornate floral cross tracery, illuminating the hollowed-out interior sanctum.", x: 35, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1181–1221 AD", event: "Reign of King Lalibela", description: "King Lalibela envisioned a pilgrimage capital after Muslim conquests halted Ethiopian pilgrimages to Jerusalem." },
      { yearOrEra: "1978", event: "UNESCO World Heritage Pioneer", description: "Inscribed on the very first UNESCO World Heritage list in 1978 among the world's inaugural 12 heritage treasures." }
    ],
    architecturalSecrets: [
      "The entire church was carved from the top down: masons chiseled a perimeter trench 25 meters into the basalt, then hollowed the interior through windows and doorways without a single joint, block, or brick.",
      "The church is reached only via a subterranean trench system of stone tunnels, symbolizing the path of biblical trials and resurrection.",
      "Local tradition recounts that heavenly angels worked alongside stonemasons at night, completing the monument in record time."
    ],
    culturalSignificance: "A vibrant living pilgrimage destination of Ethiopian Orthodox Tewahedo Christianity and an engineering miracle of subterranean monolithic stone carving.",
    visitorTips: [
      "Arrive at dawn on Sunday to hear traditional ge'ez liturgical chanting accompanied by prayer drums and sistra.",
      "Wear slip-on shoes as footwear must be removed before entering every stone church."
    ],
    narrationScript: "Look down into the earth at Biete Ghiorgis—the Church of Saint George in Lalibela. Carved in the 12th century under King Lalibela, this is not a building assembled from stones, but a single colossal rock sculpted from the living crust of Ethiopia. Masons chiseled twenty-five meters downward into red volcanic tuff to create a freestanding Greek cross. Descend through dark subterranean tunnels into its cool interior sanctum, where candlelight illuminates centuries of unbroken Orthodox prayer.",
    chapters: [
      { id: "ch-1", title: "A Cathedral Carved Downward", timestampHint: "0:00", script: "Masons sculpted Biete Ghiorgis straight out of solid red basalt bedrock from the top down.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Cross of Saint George", timestampHint: "0:30", script: "Viewed from above, the three-tiered Greek cross roof stands as an immortal symbol of faith.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Subterranean Pilgrim Ways", timestampHint: "1:00", script: "Stone trenches and tunnels lead into a sacred sanctuary that has welcomed pilgrims for eight centuries.", focusPointId: "pt-3" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Rock-Hewn Churches, Lalibela",
      inscriptionYear: 1978,
      criteria: "(i)(ii)(iii)",
      category: "Cultural",
      unescoId: "18"
    }
  },

  // ==========================================
  // GLOBAL MOSQUES & ISLAMIC MASTERPIECES
  // ==========================================
  "dome of the rock": {
    name: "Dome of the Rock (Qubbat al-Sakhrah)",
    localName: "قبة الصخرة / Qubbat aṣ-Ṣakhra",
    city: "Old City of Jerusalem",
    country: "Jerusalem",
    architecturalStyle: "Umayyad Islamic & Byzantine Octagonal Architecture",
    periodEra: "Completed 691–692 AD (Reign of Caliph Abd al-Malik)",
    confidence: 99,
    summary: "One of the oldest surviving masterpieces of Islamic architecture, the Dome of the Rock crowns the Temple Mount / Haram al-Sharif with its dazzling 20-meter golden dome, vibrant Persian ceramic tilework, and octagonal arcade encircling the sacred Foundation Stone.",
    coordinatesEstimate: { lat: 31.778, lng: 35.2354 },
    arKeypoints: [
      { id: "pt-1", label: "Golden Gilded Outer Dome", featureType: "dome", description: "20.4-meter gilded copper-aluminum dome gleaming across the Jerusalem skyline, commissioned by Caliph Abd al-Malik.", x: 50, y: 18 },
      { id: "pt-2", label: "Suleiman Persian Tilework", featureType: "facade", description: "Intricate floral and geometric Iznik ceramic tiles commissioned by Ottoman Sultan Suleiman the Magnificent in 1545.", x: 50, y: 58 },
      { id: "pt-3", label: "The Sacred Foundation Stone", featureType: "relief", description: "The holy rock (as-Sakhrah) beneath the dome associated with Abraham's sacrifice and the Prophet's Night Journey (Mi'raj).", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "691–692 AD", event: "Umayyad Construction", description: "Erected by Umayyad Caliph Abd al-Malik as an architectural landmark of Islamic faith in Jerusalem." },
      { yearOrEra: "1545", event: "Ottoman Tile Renovation", description: "Sultan Suleiman the Magnificent replaced external mosaics with vibrant Iznik ceramic tiles." },
      { yearOrEra: "1981", event: "UNESCO World Heritage Recognition", description: "Inscribed on the UNESCO World Heritage List under the Old City of Jerusalem and its Walls." }
    ],
    architecturalSecrets: [
      "The building's geometry is based on a rotating square that creates an octagonal concentric arcade, mirroring the dimensions of the Church of the Holy Sepulchre rotunda.",
      "Inside runs a 240-meter Quranic inscription band in gold mosaic Kufic script—the oldest surviving monumental Arabic inscription in existence.",
      "The golden dome was gifted its distinctive 80 kilograms of gold foil through a collaborative restoration sponsored by King Hussein of Jordan in 1993."
    ],
    culturalSignificance: "A paramount holy site in Islam, Judaism, and Christianity, anchoring the celestial panorama of Jerusalem for over 1,300 years.",
    visitorTips: [
      "Non-Muslim visitors may access the Temple Mount via the Mughrabi Bridge next to the Western Wall during designated morning hours.",
      "Dress conservatively with shoulders and legs fully covered."
    ],
    narrationScript: "You stand before the Dome of the Rock in Jerusalem, one of the oldest and most recognizable works of sacred architecture on Earth. Completed in 692 AD under Umayyad Caliph Abd al-Malik, its gleaming golden dome hovers over the historic Foundation Stone. Look closely at the octagonal exterior walls: thousands of brilliant turquoise and cobalt ceramic tiles wrap the building in flowing arabesques and sacred calligraphy. Here at the crossroads of monotheistic history, faith and mathematics combine in immortal harmony.",
    chapters: [
      { id: "ch-1", title: "Golden Crown of Jerusalem", timestampHint: "0:00", script: "Completed in 692 AD, the golden dome has anchored the Jerusalem skyline for over thirteen centuries.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Tilework of the Ottomans", timestampHint: "0:30", script: "Vibrant Iznik tiles added by Suleiman the Magnificent envelop the octagonal stone arcade.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The Sacred Foundation Stone", timestampHint: "1:00", script: "Deep within lies the bedrock stone revered across millennia by prophets and pilgrims.", focusPointId: "pt-3" }
    ],
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Old City of Jerusalem and its Walls",
      inscriptionYear: 1981,
      criteria: "(ii)(iii)(vi)",
      category: "Cultural",
      unescoId: "148"
    }
  },

  "badshahi mosque": {
    name: "Badshahi Mosque",
    localName: "بادشاہی مسجد / Badshahi Masjid",
    city: "Lahore, Punjab",
    country: "Pakistan",
    architecturalStyle: "Mughal Monumental Architecture",
    periodEra: "Completed 1673 (Commissioned by Emperor Aurangzeb)",
    confidence: 99,
    summary: "Built by Mughal Emperor Aurangzeb in 1673, the Badshahi Mosque in Lahore is an imperial masterpiece constructed from carved red sandstone from Rajasthan, featuring three bulbous white marble domes, four 54-meter minarets, and a vast courtyard capable of holding 100,000 worshippers.",
    coordinatesEstimate: { lat: 31.588, lng: 74.3094 },
    arKeypoints: [
      { id: "pt-1", label: "Three Bulbous White Marble Domes", featureType: "dome", description: "Fluted white marble domes creating a dramatic contrast against the red sandstone facade.", x: 50, y: 22 },
      { id: "pt-2", label: "54-Meter Octagonal Sandstone Minarets", featureType: "spire", description: "Four soaring corner minarets crowned with marble cupolas providing panoramic views of old Lahore.", x: 80, y: 20 },
      { id: "pt-3", label: "Vast Imperial Courtyard (Sahn)", featureType: "facade", description: "Paved with red sandstone tiles, this monumental courtyard spans 276,000 square feet.", x: 50, y: 75 },
      { id: "pt-4", label: "Central Pishtaq Archway", featureType: "arch", description: "Monumental arched entrance adorned with intricate floral stucco relief and Quranic calligraphy.", x: 50, y: 48 }
    ],
    historicalTimeline: [
      { yearOrEra: "1671–1673", event: "Built under Aurangzeb", description: "Constructed in just two years under the supervision of the Emperor's foster brother, Muzaffar Hussain (Fidai Khan Koka)." },
      { yearOrEra: "1799–1849", event: "Sikh & British Military Use", description: "Used as a military garrison and stables during the Sikh Empire before being restored to Muslims in 1852." },
      { yearOrEra: "1960", event: "Major National Restoration", description: "Extensive restoration using original sandstone quarry materials restored the mosque to pristine splendor." }
    ],
    architecturalSecrets: [
      "The acoustic design allows the imam's voice from the central prayer niche (mihrab) to echo clearly across the immense prayer hall without electronic amplification.",
      "The red sandstone was quarried from Bharatpur in Rajasthan and transported over 500 kilometers to Lahore.",
      "It was the largest mosque in the world for 313 years from 1673 until the completion of Faisal Mosque in 1986."
    ],
    culturalSignificance: "The definitive symbol of Lahore and the supreme culmination of Mughal imperial mosque architecture.",
    visitorTips: [
      "Visit at dusk when the setting sun illuminates the red sandstone and floodlights highlight the marble domes.",
      "Combine your visit with the Lahore Fort directly opposite across the Huzuri Bagh quadrangle."
    ],
    narrationScript: "Welcome to the Badshahi Mosque in Lahore, the crowning jewel of Mughal monumental architecture. Commissioned by Emperor Aurangzeb in 1671, its red sandstone facade and three luminous white marble domes dominate the historic city. Step into its immense courtyard—a space so vast that a hundred thousand worshippers can bow in unison beneath four soaring fifty-four meter minarets. Here, imperial grandeur and spiritual serenity stand united across the centuries.",
    chapters: [
      { id: "ch-1", title: "Mughal Empire's Grandest Mosque", timestampHint: "0:00", script: "Completed in 1673, Badshahi was the world's largest mosque for over three centuries.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Great Red Courtyard", timestampHint: "0:30", script: "A vast sandstone courtyard accommodates one hundred thousand worshippers in prayer.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Four Spires of Lahore", timestampHint: "1:00", script: "Four octagonal minarets frame the skyline opposite the royal ramparts of Lahore Fort.", focusPointId: "pt-2" }
    ]
  },

  "hassan ii mosque": {
    name: "Hassan II Mosque",
    localName: "مسجد الحسن الثاني / Grande Mosquée Hassan II",
    city: "Casablanca",
    country: "Morocco",
    architecturalStyle: "Moroccan Moorish & Andalusian Islamic Architecture",
    periodEra: "Completed 1993 (Designed by Michel Pinseau)",
    confidence: 99,
    summary: "Perched dramatically over the roaring Atlantic Ocean in Casablanca, the Hassan II Mosque features the second tallest minaret in the world at 210 meters, topped by a 30-kilometer laser beam pointing toward Mecca, with a retractable roof and glass floor overlooking the sea.",
    coordinatesEstimate: { lat: 33.6086, lng: -7.6328 },
    arKeypoints: [
      { id: "pt-1", label: "210-Meter Soaring Minaret", featureType: "spire", description: "Sixty-story minaret crowned with a green ceramic-tiled lantern and laser pointing toward Mecca.", x: 50, y: 18 },
      { id: "pt-2", label: "Oceanfront Promenade Arcade", featureType: "arch", description: "Horseshoe arches built over the Atlantic Ocean, inspired by the Quranic verse: 'His throne was over the water'.", x: 65, y: 70 },
      { id: "pt-3", label: "Automated Retractable Roof", featureType: "dome", description: "A 1,100-ton titanium-clad roof that glides open in three minutes to turn the prayer hall into an open-air celestial temple.", x: 50, y: 40 },
      { id: "pt-4", label: "Hand-Carved Zellij Tilework", featureType: "relief", description: "Millions of handcrafted ceramic zellij tiles cut and assembled by 6,000 Moroccan master artisans (maâlems).", x: 35, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1986", event: "Construction Commences", description: "King Hassan II initiated the project to provide Casablanca with a world-class spiritual and architectural beacon." },
      { yearOrEra: "August 30, 1993", event: "Grand Inauguration", description: "Inaugurated on the eve of the Prophet's birthday after seven years of continuous day-and-night craftsmanship." }
    ],
    architecturalSecrets: [
      "Over half of the mosque rests on a reinforced concrete platform cantilevered directly out over the waves of the Atlantic Ocean.",
      "The prayer hall floor includes sections of high-strength glass allowing worshippers to look down directly into the crashing ocean waves below.",
      "The minaret's nocturnal laser has a range of 30 kilometers, aligning precisely along the Great Circle route towards the Kaaba in Mecca."
    ],
    culturalSignificance: "Morocco's greatest contemporary architectural achievement, showcasing the enduring genius of traditional Moroccan zellij, carved plaster, and cedarwood craftsmanship.",
    visitorTips: [
      "It is one of the few active mosques in Morocco open to non-Muslims via guided educational tours.",
      "Stroll the coastal Corniche at dusk to photograph the dramatic silhouette against the breaking Atlantic surf."
    ],
    narrationScript: "You are looking at the Hassan II Mosque in Casablanca, where Moorish architecture meets the Atlantic Ocean. Inspired by the verse 'God's throne was over the water,' this sanctuary stands on a promontory jutting into the sea. At two hundred and ten meters, its minaret rises higher than any other in Africa, casting a thirty-kilometer laser beam toward Mecca every night. Inside, six thousand master artisans hand-carved cedarwood, marble, and millions of zellij tiles, while an automated roof glides open to let prayers rise directly to the stars.",
    chapters: [
      { id: "ch-1", title: "Throne Over the Waters", timestampHint: "0:00", script: "Built out over the Atlantic Ocean, the mosque fulfills a vision of sacred oceanic grandeur.", focusPointId: "pt-2" },
      { id: "ch-2", title: "Beacon of Casablanca", timestampHint: "0:30", script: "The 210-meter minaret projects a nocturnal laser pointing precisely toward Mecca.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Zellij & Cedar Masterpiece", timestampHint: "1:00", script: "Six thousand Moroccan artisans chiseled stone, plaster, and cedar into exquisite sacred patterns.", focusPointId: "pt-4" }
    ]
  },

  "jama masjid delhi": {
    name: "Jama Masjid, Delhi",
    localName: "مسجدِ جہاں نما / Masjid-i Jehan-Numa",
    city: "Old Delhi",
    country: "India",
    architecturalStyle: "Mughal Classical Red Sandstone & White Marble",
    periodEra: "Completed 1656 (Commissioned by Emperor Shah Jahan)",
    confidence: 99,
    summary: "Commissioned by Mughal Emperor Shah Jahan—the builder of the Taj Mahal—Jama Masjid ('World-Reflecting Mosque') is one of India's grandest and most historic mosques, constructed from alternating bands of red sandstone and white marble with two 40-meter minarets overlooking Chandni Chowk and the Red Fort.",
    coordinatesEstimate: { lat: 28.6507, lng: 77.2334 },
    arKeypoints: [
      { id: "pt-1", label: "Three Black-and-White Marble Domes", featureType: "dome", description: "Striped bulbous marble domes crowned with gilded brass finials rising above the central prayer hall.", x: 50, y: 22 },
      { id: "pt-2", label: "40-Meter Striped Red Sandstone Minarets", featureType: "spire", description: "Four-tiered minarets providing an unbroken aerial vista across Old Delhi, Chandni Chowk, and the Red Fort.", x: 78, y: 30 },
      { id: "pt-3", label: "Elevated Monumental Gateway Stairs", featureType: "entrance", description: "Dramatic 35-step red sandstone flight of stairs elevating the mosque courtyard 30 feet above Old Delhi's bustling streets.", x: 50, y: 78 },
      { id: "pt-4", label: "Great Ablution Hawz & Courtyard", featureType: "facade", description: "Red sandstone courtyard holding up to 25,000 worshippers surrounding a central marble ablution fountain.", x: 45, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1650–1656", event: "Constructed by Shah Jahan", description: "Built at a cost of one million rupees by 5,000 artisans and inaugurated by Syed Abdul Ghafoor Shah Bukhari of Bukhara." },
      { yearOrEra: "1857", event: "The Indian Uprising", description: "Occupied by British forces following the 1857 Revolt; spared from demolition due to intense public reverence." }
    ],
    architecturalSecrets: [
      "The mosque was built on an elevated natural rocky outcrop called Bhojla Pahari, ensuring it towered over the surrounding Mughal capital of Shahjahanabad.",
      "The central prayer archway contains an inlay inscription with the date of construction and praises of Shah Jahan's reign written in flowing Persian Naskh script.",
      "The courtyard was designed to hold exactly 25,000 people, with each prayer space marked out by black and white marble floor outlines."
    ],
    culturalSignificance: "The epic focal point of Islamic culture and heritage in the historic heart of Old Delhi.",
    visitorTips: [
      "Climb the southern minaret for a sweeping 360-degree panorama of Old Delhi and the Red Fort.",
      "Remove your shoes at the monumental gateway; robes are available for visitors wearing sleeveless attire or shorts."
    ],
    narrationScript: "You stand at the monumental gates of Jama Masjid in Old Delhi, built by Emperor Shah Jahan in 1656. Ascend its thirty-five broad red sandstone steps into a courtyard capable of holding twenty-five thousand worshippers. Ahead, three black-and-white striped marble domes gleam above the central prayer hall, flanked by twin forty-meter minarets. From here across the bustling alleys of Chandni Chowk stands the Red Fort—a panorama of imperial Mughal architecture preserved in the living heart of Delhi.",
    chapters: [
      { id: "ch-1", title: "Shah Jahan's World-Reflecting Mosque", timestampHint: "0:00", script: "Inaugurated in 1656, Jama Masjid crowned the Mughal capital of Shahjahanabad.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Domes of Striped Marble", timestampHint: "0:30", script: "Three fluted domes of white and black marble reflect light across the red sandstone prayer hall.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Panorama of Old Delhi", timestampHint: "1:00", script: "Twin minarets offer sweeping views across Chandni Chowk and the walls of the Red Fort.", focusPointId: "pt-2" }
    ]
  },

  "taj-ul-masajid": {
    name: "Taj-ul-Masajid",
    localName: "تاج المساجد / Crown of Mosques",
    city: "Bhopal, Madhya Pradesh",
    country: "India",
    architecturalStyle: "Late Mughal & Indo-Islamic Architecture",
    periodEra: "Commenced 1868 (Nawab Shah Jahan Begum) / Completed 1985",
    confidence: 99,
    summary: "Known as the 'Crown of Mosques', Taj-ul-Masajid in Bhopal is one of the largest mosques in Asia. Commissioned by the legendary female ruler Nawab Shah Jahan Begum, it features a pink facade, three bulbous white domes, and two 18-story minarets with an expansive courtyard.",
    coordinatesEstimate: { lat: 23.2625, lng: 77.3931 },
    arKeypoints: [
      { id: "pt-1", label: "Twin 18-Story Octagonal Minarets", featureType: "spire", description: "62-meter soaring pink sandstone minarets crowned with marble cupolas dominating Bhopal's skyline.", x: 75, y: 25 },
      { id: "pt-2", label: "Three Mammoth Marble Domes", featureType: "dome", description: "Fluted white marble domes rising majestically over the central high-ceilinged prayer hall.", x: 50, y: 20 },
      { id: "pt-3", label: "Massive Pink Sandstone Courtyard", featureType: "facade", description: "Expansive pink courtyard with a central ablution tank holding up to 175,000 worshippers during gatherings.", x: 50, y: 70 }
    ],
    historicalTimeline: [
      { yearOrEra: "1868", event: "Initiated by Shah Jahan Begum", description: "The Begum of Bhopal began construction, envisioning the grandest mosque on the subcontinent." },
      { yearOrEra: "1971–1985", event: "Final Completion", description: "Allama Mohammad Imran Khan Nadwi Azhari spearheaded the final construction and historic opening." }
    ],
    architecturalSecrets: [
      "The mosque features a natural lake named Motia Talab connected to the complex, historically providing cool air and fresh water for ablution.",
      "The monumental entrance gate is an architectural tribute to the Buland Darwaza of Fatehpur Sikri."
    ],
    culturalSignificance: "A triumphant tribute to the visionary female Begums of Bhopal who ruled and nurtured the arts and architecture of central India for over a century.",
    visitorTips: [
      "Visit during non-prayer hours to admire the peaceful reflection of the pink minarets in the courtyard pool.",
      "Dress conservatively with respectful clothing covering shoulders and knees."
    ],
    narrationScript: "Welcome to Taj-ul-Masajid in Bhopal—the 'Crown of Mosques' and one of the largest Islamic monuments in Asia. Initiated in 1868 by Nawab Shah Jahan Begum, one of Bhopal's visionary female rulers, its pink sandstone facade and three soaring white marble domes command the central Indian landscape. Flanked by twin eighteen-story minarets, this courtyard can welcome over one hundred and seventy-five thousand worshippers. It stands as an enduring testament to the cultural renaissance of Bhopal.",
    chapters: [
      { id: "ch-1", title: "Crown of Mosques", timestampHint: "0:00", script: "Initiated by the Begum of Bhopal in 1868, this monument lives up to its name as the Crown of Mosques.", focusPointId: "pt-2" },
      { id: "ch-2", title: "Eighteen-Story Minarets", timestampHint: "0:30", script: "Twin pink sandstone towers soar 62 meters into the sky over central Bhopal.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Imperial Gathering Courtyard", timestampHint: "1:00", script: "Surrounding the central pool, this immense courtyard hosts thousands in peaceful prayer.", focusPointId: "pt-3" }
    ]
  }
};


/**
 * Normalized alias dictionary for instant backend resolution of religious structures
 */
export const RELIGIOUS_ALIASES: Record<string, string> = {
  // Hinduism
  "angkor wat": "angkor wat",
  "angkor": "angkor wat",
  "ankor wat": "angkor wat",
  "prambanan": "prambanan",
  "candi prambanan": "prambanan",
  "roro jonggrang": "prambanan",
  "brihadisvara": "brihadisvara temple",
  "brihadisvara temple": "brihadisvara temple",
  "thanjavur big temple": "brihadisvara temple",
  "peruvudaiyar koyil": "brihadisvara temple",
  "tanjore temple": "brihadisvara temple",
  "meenakshi": "meenakshi temple",
  "meenakshi temple": "meenakshi temple",
  "meenakshi amman": "meenakshi temple",
  "madurai meenakshi": "meenakshi temple",
  "kashi vishwanath": "kashi vishwanath",
  "kashi vishwanath temple": "kashi vishwanath",
  "vishwanath temple": "kashi vishwanath",
  "varanasi temple": "kashi vishwanath",
  "prem mandir": "prem mandir",
  "prem mandir vrindavan": "prem mandir",
  "prem temple": "prem mandir",
  "vrindavan prem mandir": "prem mandir",
  "radha krishna mandir vrindavan": "prem mandir",

  // Additional Indian Temples (Char Dham, Jyotirlingas, South Indian, Shakti Peethas)
  "tirupati": "tirupati venkateswara temple",
  "tirupati balaji": "tirupati venkateswara temple",
  "tirumala": "tirupati venkateswara temple",
  "tirumala venkateswara": "tirupati venkateswara temple",
  "sri venkateswara temple": "tirupati venkateswara temple",
  "venkateswara temple": "tirupati venkateswara temple",
  "tirupati temple": "tirupati venkateswara temple",
  "somnath": "somnath temple",
  "somnath temple": "somnath temple",
  "somnath jyotirlinga": "somnath temple",
  "shree somnath": "somnath temple",
  "kedarnath": "kedarnath temple",
  "kedarnath temple": "kedarnath temple",
  "kedarnath dham": "kedarnath temple",
  "shri kedarnath": "kedarnath temple",
  "badrinath": "badrinath temple",
  "badrinath temple": "badrinath temple",
  "badrinath dham": "badrinath temple",
  "badri vishal": "badrinath temple",
  "badrinarayan": "badrinath temple",
  "jagannath": "jagannath temple puri",
  "jagannath puri": "jagannath temple puri",
  "jagannath temple": "jagannath temple puri",
  "puri temple": "jagannath temple puri",
  "shri jagannath": "jagannath temple puri",
  "puri jagannath": "jagannath temple puri",
  "rameswaram": "ramanathaswamy temple",
  "rameshwaram": "ramanathaswamy temple",
  "ramanathaswamy": "ramanathaswamy temple",
  "ramanathaswamy temple": "ramanathaswamy temple",
  "rameshwaram temple": "ramanathaswamy temple",
  "konark": "konark sun temple",
  "konark temple": "konark sun temple",
  "sun temple konark": "konark sun temple",
  "konark sun temple": "konark sun temple",
  "black pagoda": "konark sun temple",
  "akshardham": "akshardham temple",
  "akshardham temple": "akshardham temple",
  "akshardham delhi": "akshardham temple",
  "swaminarayan akshardham": "akshardham temple",
  "mahakaleshwar": "mahakaleshwar temple",
  "mahakaleshwar temple": "mahakaleshwar temple",
  "mahakal": "mahakaleshwar temple",
  "mahakal ujjain": "mahakaleshwar temple",
  "ujjain temple": "mahakaleshwar temple",
  "kailasa temple": "kailasa temple",
  "kailash temple": "kailasa temple",
  "ellora cave 16": "kailasa temple",
  "kailasa ellora": "kailasa temple",
  "cave 16 ellora": "kailasa temple",
  "kandariya mahadeva": "kandariya mahadeva temple",
  "kandariya mahadev": "kandariya mahadeva temple",
  "kandariya mahadeva temple": "kandariya mahadeva temple",
  "khajuraho temple": "kandariya mahadeva temple",
  "khajuraho": "kandariya mahadeva temple",
  "virupaksha": "virupaksha temple",
  "virupaksha temple": "virupaksha temple",
  "hampi temple": "virupaksha temple",
  "virupaksha hampi": "virupaksha temple",
  "padmanabhaswamy": "padmanabhaswamy temple",
  "padmanabhaswamy temple": "padmanabhaswamy temple",
  "sree padmanabhaswamy": "padmanabhaswamy temple",
  "trivandrum temple": "padmanabhaswamy temple",
  "anantha padmanabha": "padmanabhaswamy temple",
  "ranganathaswamy": "ranganathaswamy temple",
  "ranganathaswamy temple": "ranganathaswamy temple",
  "srirangam": "ranganathaswamy temple",
  "srirangam temple": "ranganathaswamy temple",
  "sri ranganathaswamy": "ranganathaswamy temple",
  "shore temple": "shore temple",
  "mahabalipuram shore temple": "shore temple",
  "mamallapuram shore temple": "shore temple",
  "shore temple mahabalipuram": "shore temple",
  "kamakhya": "kamakhya temple",
  "kamakhya temple": "kamakhya temple",
  "maa kamakhya": "kamakhya temple",
  "kamakhya guwahati": "kamakhya temple",
  "ram mandir": "ram mandir ayodhya",
  "ram mandir ayodhya": "ram mandir ayodhya",
  "ayodhya ram mandir": "ram mandir ayodhya",
  "shri ram janmabhoomi": "ram mandir ayodhya",
  "ram janmabhoomi": "ram mandir ayodhya",
  "ram janmabhoomi mandir": "ram mandir ayodhya",
  "batu caves": "batu caves temple",
  "batu caves temple": "batu caves temple",
  "murugan batu caves": "batu caves temple",
  "tanah lot": "tanah lot temple",
  "tanah lot temple": "tanah lot temple",
  "pura tanah lot": "tanah lot temple",
  "ulun danu": "pura ulun danu beratan",
  "ulun danu beratan": "pura ulun danu beratan",
  "pura ulun danu beratan": "pura ulun danu beratan",
  "lake beratan temple": "pura ulun danu beratan",
  "pashupatinath": "pashupatinath temple",
  "pashupatinath temple": "pashupatinath temple",
  "shri pashupatinath": "pashupatinath temple",
  "wat arun": "wat arun",
  "temple of dawn": "wat arun",
  "wat rong khun": "wat rong khun",
  "white temple chiang rai": "wat rong khun",
  "akshardham usa": "baps akshardham usa",
  "akshardham new jersey": "baps akshardham usa",
  "baps robbinsville": "baps akshardham usa",
  "baps akshardham usa": "baps akshardham usa",
  "baps abu dhabi": "baps abu dhabi",
  "baps hindu mandir abu dhabi": "baps abu dhabi",
  "abu dhabi mandir": "baps abu dhabi",

  // Islam
  "masjid al-haram": "masjid al-haram",
  "masjid al haram": "masjid al-haram",
  "kaaba": "masjid al-haram",
  "the kaaba": "masjid al-haram",
  "great mosque of mecca": "masjid al-haram",
  "mecca mosque": "masjid al-haram",
  "al-masjid an-nabawi": "al-masjid an-nabawi",
  "masjid an nabawi": "al-masjid an-nabawi",
  "prophet's mosque": "al-masjid an-nabawi",
  "prophets mosque": "al-masjid an-nabawi",
  "medina mosque": "al-masjid an-nabawi",
  "green dome medina": "al-masjid an-nabawi",
  "sheikh zayed grand mosque": "sheikh zayed grand mosque",
  "sheikh zayed mosque": "sheikh zayed grand mosque",
  "grand mosque abu dhabi": "sheikh zayed grand mosque",
  "blue mosque": "blue mosque",
  "sultan ahmed mosque": "blue mosque",
  "sultanahmet camii": "blue mosque",
  "blue mosque istanbul": "blue mosque",

  // Christianity
  "st peter's basilica": "st peters basilica",
  "st peters basilica": "st peters basilica",
  "saint peter's basilica": "st peters basilica",
  "saint peters basilica": "st peters basilica",
  "vatican basilica": "st peters basilica",
  "san pietro": "st peters basilica",
  "notre dame": "notre dame",
  "notre-dame": "notre dame",
  "notre dame de paris": "notre dame",
  "notre-dame de paris": "notre dame",
  "st basil's cathedral": "st basils cathedral",
  "st basils cathedral": "st basils cathedral",
  "saint basil's cathedral": "st basils cathedral",
  "saint basils cathedral": "st basils cathedral",
  "saint basil": "st basils cathedral",
  "cathedral of vasily the blessed": "st basils cathedral",

  // Buddhism
  "borobudur": "borobudur",
  "candi borobudur": "borobudur",
  "borobudur temple": "borobudur",
  "shwedagon": "shwedagon pagoda",
  "shwedagon pagoda": "shwedagon pagoda",
  "great dagon pagoda": "shwedagon pagoda",
  "golden pagoda yangon": "shwedagon pagoda",

  // Sikhism
  "golden temple": "golden temple amritsar",
  "harmandir sahib": "golden temple amritsar",
  "sri harmandir sahib": "golden temple amritsar",
  "darbar sahib": "golden temple amritsar",
  "golden temple amritsar": "golden temple amritsar",

  // Judaism
  "western wall": "western wall",
  "wailing wall": "western wall",
  "kotel": "western wall",
  "hakotel": "western wall",
  "dohany street synagogue": "dohany street synagogue",
  "dohany synagogue": "dohany street synagogue",
  "great synagogue budapest": "dohany street synagogue",

  // Jainism
  "ranakpur": "ranakpur jain temple",
  "ranakpur jain temple": "ranakpur jain temple",
  "ranakpur temple": "ranakpur jain temple",
  "chaturmukha dharana vihara": "ranakpur jain temple",

  // Shinto
  "fushimi inari": "fushimi inari",
  "fushimi inari taisha": "fushimi inari",
  "fushimi inari-taisha": "fushimi inari",
  "fushimi inari shrine": "fushimi inari",
  "thousand torii gates": "fushimi inari",

  // Taoism
  "temple of heaven": "temple of heaven",
  "tiantan": "temple of heaven",
  "beijing temple of heaven": "temple of heaven",
  "hall of prayer for good harvests": "temple of heaven",

  // Bahá'í
  "lotus temple": "lotus temple",
  "lotus temple delhi": "lotus temple",
  "bahai lotus temple": "lotus temple",
  "baháʼí house of worship delhi": "lotus temple",

  // Zoroastrianism
  "yazd atash behram": "yazd atash behram",
  "fire temple of yazd": "yazd atash behram",
  "atashkadeh yazd": "yazd atash behram",
  "yazd fire temple": "yazd atash behram",

  // Cathedrals & Churches Worldwide
  "sagrada familia": "sagrada familia",
  "basilica de la sagrada familia": "sagrada familia",
  "la sagrada familia": "sagrada familia",
  "gaudi cathedral": "sagrada familia",
  "sagrada familia barcelona": "sagrada familia",
  "hagia sophia": "hagia sophia",
  "ayasofya": "hagia sophia",
  "ayasofya camii": "hagia sophia",
  "saint sophia istanbul": "hagia sophia",
  "westminster abbey": "westminster abbey",
  "westminster abbey london": "westminster abbey",
  "collegiate church of st peter": "westminster abbey",
  "duomo di milano": "duomo di milano",
  "milan cathedral": "duomo di milano",
  "duomo milan": "duomo di milano",
  "cologne cathedral": "cologne cathedral",
  "kolner dom": "cologne cathedral",
  "dom zu koln": "cologne cathedral",
  "basilica of bom jesus": "basilica of bom jesus",
  "bom jesus goa": "basilica of bom jesus",
  "bom jesus church": "basilica of bom jesus",
  "basilica of bom jesus goa": "basilica of bom jesus",
  "old goa church": "basilica of bom jesus",
  "lalibela": "lalibela rock hewn churches",
  "lalibela churches": "lalibela rock hewn churches",
  "biete ghiorgis": "lalibela rock hewn churches",
  "church of saint george lalibela": "lalibela rock hewn churches",
  "rock hewn churches of lalibela": "lalibela rock hewn churches",

  // Mosques & Islamic Sacred Monuments
  "dome of the rock": "dome of the rock",
  "qubbat al-sakhrah": "dome of the rock",
  "qubbat al sakhra": "dome of the rock",
  "golden dome jerusalem": "dome of the rock",
  "al aqsa dome": "dome of the rock",
  "badshahi mosque": "badshahi mosque",
  "badshahi masjid": "badshahi mosque",
  "badshahi mosque lahore": "badshahi mosque",
  "badshahi masjid lahore": "badshahi mosque",
  "hassan ii mosque": "hassan ii mosque",
  "mosquee hassan ii": "hassan ii mosque",
  "hassan 2 mosque": "hassan ii mosque",
  "casablanca mosque": "hassan ii mosque",
  "jama masjid": "jama masjid delhi",
  "jama masjid delhi": "jama masjid delhi",
  "delhi jama masjid": "jama masjid delhi",
  "masjid-i jehan-numa": "jama masjid delhi",
  "old delhi mosque": "jama masjid delhi",
  "taj-ul-masajid": "taj-ul-masajid",
  "taj ul masajid": "taj-ul-masajid",
  "taj ul masjid": "taj-ul-masajid",
  "taj-ul-masjid": "taj-ul-masajid",
  "bhopal mosque": "taj-ul-masajid",
  "taj ul masajid bhopal": "taj-ul-masajid",
};
