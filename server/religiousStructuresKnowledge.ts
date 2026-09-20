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
};
