import { FallbackLandmarkData } from "./landmarkDossiers";

/**
 * Comprehensive Global Hindu Temples Dossiers & Knowledge Base
 * Encompassing all major Hindu temples across the world:
 * - Nepal & Kathmandu Valley (Pashupatinath, Changu Narayan, Budhanilkantha, Guhyeshwari, Muktinath, Janaki Mandir)
 * - Southeast Asia (Pura Besakih, Tanah Lot, Uluwatu, Ulun Danu Beratan, Lempuyang, Banteay Srei, Preah Vihear, Sri Mahamariamman KL, Sri Mariamman Singapore, Sri Srinivasa Perumal)
 * - Sri Lanka (Koneswaram, Nallur Kandaswamy, Munneswaram, Seetha Amman)
 * - North America & Europe (BAPS Akshardham NJ, SV Temple Pittsburgh, BAPS Neasden London, BAPS Toronto, BAPS Chino Hills, Sri Shiva Vishnu DC)
 * - Australia, Pacific & Caribbean (Sydney Murugan, Sri Siva Soobramaniar Fiji, Ganga Talao Mauritius, Temple in the Sea Trinidad)
 * - India's 12 Jyotirlingas, Char Dham, Shakti Peethas & Architectural Icons (Dwarkadhish, Akshardham Gandhinagar & Delhi, Modhera, Ambaji, Siddhivinayak, Trimbakeshwar, Bhimashankar, Omkareshwar, Grishneshwar, Baidyanath, Mallikarjuna, Nageshwar, Belur Chennakeshava, Halebidu Hoysaleswara, Murudeshwar, Sabarimala, Guruvayur, Chidambaram Nataraja, Tiruvannamalai Annamalaiyar, Kanchipuram Ekambareswarar, Srikalahasti, Lingaraj, Kamakhya, Dakshineswar, Kalighat, Mayapur TOVP, Vaishno Devi, Amarnath, Pushkar Brahma, Banke Bihari, Krishna Janmasthan)
 */

export const HINDU_TEMPLES_GLOBAL_DOSSIERS: Record<string, FallbackLandmarkData> = {
  // ==========================================
  // NEPAL & KATHMANDU VALLEY
  // ==========================================
  "changu narayan temple": {
    name: "Changu Narayan Temple",
    localName: "चाँगु नारायण मन्दिर (Kathmandu Valley)",
    city: "Bhaktapur / Kathmandu Valley",
    country: "Nepal",
    architecturalStyle: "Classical Nepalese Two-Tiered Pagoda (Oldest in Nepal / UNESCO)",
    periodEra: "c. 4th–5th Century AD (King Manadeva / Licchavi Dynasty)",
    confidence: 99,
    summary: "Perched atop a forested high ridge in the Kathmandu Valley, Changu Narayan is officially the oldest documented Hindu temple in Nepal. Dedicated to Lord Vishnu, this UNESCO World Heritage masterpiece features 5th-century stone inscriptions, masterfully carved wood struts depicting the Dashavatara avatars, and an ancient kneeling Garuda statue.",
    coordinatesEstimate: { lat: 27.7161, lng: 85.4278 },
    arKeypoints: [
      { id: "pt-1", label: "Two-Tiered Copper Pagoda Roof", featureType: "spire", description: "Stepped wooden pagoda crowned by a gilded Kalash pinnacle and supported by multi-armed deity struts.", x: 50, y: 22 },
      { id: "pt-2", label: "5th-Century King Manadeva Inscribed Pillar", featureType: "column", description: "Oldest stone inscription in Nepal (464 AD) chronicling early Licchavi monarchical lineage.", x: 42, y: 72 },
      { id: "pt-3", label: "5th-Century Kneeling Garuda Statue", featureType: "statue", description: "Ancient stone vahana of Vishnu kneeling in deep devotion directly before the western portal.", x: 55, y: 68 },
      { id: "pt-4", label: "Embossed Gilt Sanctum Torana", featureType: "entrance", description: "Repoussé gilded bronze portal flanked by stone elephants, lions, and makara gargoyles.", x: 50, y: 54 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 325–464 AD", event: "Licchavi Foundation", description: "Consecrated during the Licchavi dynasty; King Manadeva erected Nepal's oldest deciphered Sanskrit stone pillar in 464 AD." },
      { yearOrEra: "1702 AD", event: "Post-Fire Restoration", description: "Queen Mother Bhashkar Devi rebuilt the wooden pagoda after a catastrophic fire while preserving ancient stone sculptures." },
      { yearOrEra: "1979", event: "UNESCO World Heritage Inscription", description: "Inscribed as one of seven Monument Zones of the Kathmandu Valley World Heritage site." }
    ],
    architecturalSecrets: [
      "The temple houses one of the finest collections of Licchavi-period stone carving anywhere in the Himalayas, including the famous 8th-century Vishvarupa Vishnu relief.",
      "The wooden roof struts (tudal) are angled precisely at 45 degrees, transferring the heavy terracotta tile loads down to internal brick masonry cores without nails."
    ],
    culturalSignificance: "Revered as the supreme guardian sanctuary of the Kathmandu Valley, embodying the historic fusion of Newari Newar woodwork, Sanskrit Vedic epigraphy, and Himalayan architecture.",
    visitorTips: [
      "Visit in the early morning for unobstructed views of the snow-capped Himalayan peaks framing the sacred ridge.",
      "Explore the private living museum located within the courtyard to see centuries-old Newari agricultural and ritual artifacts."
    ],
    narrationScript: "You stand atop the high forested ridge of Changu in the Kathmandu Valley, gazing at Changu Narayan—the oldest documented Hindu temple in all of Nepal. Consecrated during the 4th century Licchavi era, this two-tiered pagoda sanctuary honors Lord Vishnu. Look closely at the carved wooden struts beneath the eaves: every plank depicts the cosmic avatars of Vishnu chiseled by Newari master artisans fifteen centuries ago. Miraculously surviving earthquakes through millennia, Changu Narayan remains the eternal spiritual heartbeat of Nepal.",
    chapters: [
      { id: "chap-1", title: "The Oldest Sanctuary of Nepal", timestampHint: "0:00", script: "Elevated above the valley floor, Changu Narayan has safeguarded ancient Himalayan Vedic faith for over 1,600 years.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 464 AD Pillar of King Manadeva", timestampHint: "0:25", script: "This Sanskrit inscribed pillar preserves the earliest recorded history of royal civilization in the Himalayas.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Guardian Garuda", timestampHint: "0:50", script: "Carved from dense Himalayan stone in the 5th century, Vishnu's winged eagle mount kneels in perpetual vigilance.", focusPointId: "pt-3" },
      { id: "chap-4", title: "Mastery of Newari Timberwork", timestampHint: "1:15", script: "The wooden tudal struts showcase the zenith of medieval Newar artistic craftsmanship.", focusPointId: "pt-4" }
    ],
    unescoYear: 1979,
    unescoId: "121",
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Kathmandu Valley - Changu Narayan Monument Zone",
      inscriptionYear: 1979,
      criteria: "(iii)(iv)(vi)",
      category: "Cultural",
      unescoId: "121"
    }
  },

  "budhanilkantha temple": {
    name: "Budhanilkantha Temple (Sleeping Vishnu)",
    localName: "बुढानीलकण्ठ मन्दिर (Jalasayana Narayana)",
    city: "Kathmandu",
    country: "Nepal",
    architecturalStyle: "Licchavi Monolithic Open-Air Pond Sanctuary",
    periodEra: "c. 7th Century AD (King Vishnugupta / Licchavi Dynasty)",
    confidence: 99,
    summary: "Located at the northern base of Shivapuri Hill in Kathmandu, Budhanilkantha is world-renowned for its colossal 5-meter (16.4ft) monolithic black basalt sculpture of Lord Vishnu reclining peacefully upon the coils of the cosmic multi-headed serpent Shesha (Ananta), floating serenely in a recessed sacred pool.",
    coordinatesEstimate: { lat: 27.7672, lng: 85.3586 },
    arKeypoints: [
      { id: "pt-1", label: "Colossal Monolithic Reclining Vishnu (5m)", featureType: "statue", description: "Carved from a single basalt boulder, depicting the four-armed Narayana floating upon the cosmic cosmic ocean.", x: 50, y: 50 },
      { id: "pt-2", label: "Eleven-Headed Sheshanaga Canopy", featureType: "relief", description: "Eleven coiled cobra hoods sheltering the crowned head of Vishnu as cosmic guardian.", x: 42, y: 40 },
      { id: "pt-3", label: "Sacred Recessed Water Tank", featureType: "arch", description: "13-meter natural spring-fed holy basin holding the floating stone deity.", x: 50, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 640 AD", event: "Licchavi Monolithic Sculpture", description: "Sculpted during the reign of King Vishnugupta or Jishnugupta, transported from the northern hills." },
      { yearOrEra: "17th Century", event: "Royal Monarchical Prophecy", description: "A famous royal curse forbade Kings of Nepal from gazing upon this statue, leading to a twin statue in Kathmandu." },
      { yearOrEra: "Present", event: "Haribodhini Ekadashi Festival", description: "Thousands of devotees gather annually in October-November to celebrate Vishnu awakening from his cosmic slumber." }
    ],
    architecturalSecrets: [
      "Despite weighing over 15 tons, the basalt stone deity floats in the water with minimal supportive anchoring—a marvel of ancient hydro-dynamic weight distribution.",
      "The deity holds the four iconic attributes of Vishnu: the Sudarshana Chakra, Shankha (conch), Gada (mace), and Padma (lotus)."
    ],
    culturalSignificance: "Budhanilkantha is the supreme Vaishnava pilgrimage destination in Kathmandu, venerated equally by Hindus and Buddhists as an embodiment of serene cosmic meditation (Yoga Nidra).",
    visitorTips: [
      "Non-Hindus can view and photograph the magnificent open-air deity freely from the perimeter walkway around the water tank.",
      "Visit during the morning puja when priests offer sacred basil (tulsi) leaves and floral garlands."
    ],
    narrationScript: "Welcome to Budhanilkantha Temple in northern Kathmandu. Before you in this sacred pool rests one of the greatest sculptural marvels of Asia: a colossal five-meter monolithic black stone statue of Lord Vishnu reclining on the coils of the cosmic serpent Shesha. Sculpted in the 7th century during Nepal's golden Licchavi age, Vishnu's serene expression reflects Yoga Nidra—the cosmic dream from which all universes are born. Notice the eleven hooded serpents rising like a royal canopy above his crowned head.",
    chapters: [
      { id: "chap-1", title: "Cosmic Ocean of Creation", timestampHint: "0:00", script: "Floating in the sacred water tank, Vishnu reclines upon the infinite coils of Sheshanaga.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Eleven Serpent Hoods", timestampHint: "0:30", script: "Carved from a single boulder, the multi-headed serpent shields the divine preserver.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Living Himalayan Devotion", timestampHint: "1:00", script: "Devotees circumambulate the pool offering prayers for universal balance and inner peace.", focusPointId: "pt-3" }
    ]
  },

  "guhyeshwari temple": {
    name: "Guhyeshwari Temple",
    localName: "गुह्येश्वरी मन्दिर (Kathmandu)",
    city: "Kathmandu",
    country: "Nepal",
    architecturalStyle: "Traditional Newari Pagoda & Tantric Shakti Peetha",
    periodEra: "c. 17th Century (King Pratap Malla / Ancient Roots)",
    confidence: 98,
    summary: "Situated just one kilometer east of Pashupatinath on the banks of the sacred Bagmati River, Guhyeshwari is the supreme Shakti Peetha of Nepal. Revered as the place where Goddess Sati's hips or secret organ fell, it is a vital epicenter of divine feminine energy for both Hindu and Buddhist Tantric worshippers.",
    coordinatesEstimate: { lat: 27.7128, lng: 85.3551 },
    arKeypoints: [
      { id: "pt-1", label: "Golden Kalash Tiered Shikhara", featureType: "spire", description: "Gilded roof crowning the inner sanctum dedicated to Goddess Guhyakali.", x: 50, y: 24 },
      { id: "pt-2", label: "Sacred Water Spring Sanctum", featureType: "entrance", description: "Natural underground spring covered by a silver yoni-shaped basin worshipped without an idol.", x: 50, y: 64 },
      { id: "pt-3", label: "Pashupatinath Riverfront Path", featureType: "arch", description: "Sacred stone stairway connecting the temple through the Mrigasthali forest to Pashupatinath.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Puranic Shakti Peetha Recognition", description: "Named in the Shiva Purana and Kalika Purana as one of the most auspicious Maha Shakti Peethas." },
      { yearOrEra: "1654 AD", event: "King Pratap Malla Reconstruction", description: "The scholarly King Pratap Malla renovated the temple and composed Tantric devotional hymns inscribed on stone." }
    ],
    architecturalSecrets: [
      "Instead of an anthropomorphic idol, the sanctum enshrines a natural underground water spring venerated through an ornate silver vessel.",
      "The temple is architecturally and spiritually paired with Pashupatinath: worship of Shiva at Pashupatinath is considered incomplete without paying homage to Goddess Guhyeshwari."
    ],
    culturalSignificance: "The preeminent center of Shakta and Tantric worship in Nepal, attracting thousands of pilgrims during Navaratri and Maha Shivaratri.",
    visitorTips: [
      "The inner sanctum is open only to Hindu worshippers; international travelers can admire the courtyard and historic Mrigasthali forest surroundings.",
      "Walk the wooded trail through Mrigasthali deer park to Pashupatinath Temple."
    ],
    narrationScript: "You stand before the sacred Guhyeshwari Temple on the banks of the Bagmati River in Kathmandu. In Hindu mythology, this is one of the 51 venerated Shakti Peethas, honoring the divine feminine power of Goddess Sati. Paired intimately with neighboring Pashupatinath Temple, Guhyeshwari embodies the eternal cosmic union of Shiva and Shakti.",
    chapters: [
      { id: "chap-1", title: "The Supreme Shakti Peetha", timestampHint: "0:00", script: "Revered for centuries as the epicenter of divine mother energy in the Himalayas.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Formless Sanctum", timestampHint: "0:30", script: "A natural underground spring serves as the sacred altar of Goddess Guhyakali.", focusPointId: "pt-2" }
    ]
  },

  "muktinath temple": {
    name: "Muktinath Temple (Chumig Gyatsa)",
    localName: "मुक्तिनाथ मन्दिर (Muktikshetra, Mustang)",
    city: "Mustang / Annapurna Region",
    country: "Nepal",
    architecturalStyle: "High-Altitude Himalayan Pagoda (3,800m / 12,467ft)",
    periodEra: "Ancient Origins; Pagoda Rebuilt 1815 AD by Queen Subarna Prabha",
    confidence: 99,
    summary: "Perched at an astonishing altitude of 3,800 meters (12,467 feet) at the foot of the Thorong La mountain pass in Mustang, Muktinath is one of the world's highest Hindu temples. One of the 108 Divya Desams dedicated to Lord Vishnu as Muktinath (Lord of Liberation), it features 108 sacred stone bull-head water spouts and natural gas flame springs.",
    coordinatesEstimate: { lat: 28.8169, lng: 83.8717 },
    arKeypoints: [
      { id: "pt-1", label: "108 Sacred Carved Bull-Head Fountains (Muktidhara)", featureType: "arch", description: "Semicircular wall of 108 stone spouts pouring ice-cold sacred mountain water over pilgrims.", x: 50, y: 70 },
      { id: "pt-2", label: "Two-Tiered Golden Pagoda Sanctum", featureType: "spire", description: "Himalayan brass and copper pagoda roof framed against the snow peaks of the Annapurna massif.", x: 50, y: 26 },
      { id: "pt-3", label: "Jwala Mai Eternal Natural Gas Flame", featureType: "entrance", description: "Nearby rock shrine where natural underground gas flames burn continuously atop flowing water.", x: 74, y: 55 },
      { id: "pt-4", label: "Pure Gold Murti of Lord Vishnu", featureType: "statue", description: "Life-sized gold idol of Vishnu flanked by Goddess Lakshmi and Saraswati inside the sanctum.", x: 50, y: 48 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Discovery of Sacred Shaligram Stones", description: "Revered in the Mahabharata as the sacred source of fossilized black ammonite Shaligrams along the Kali Gandaki." },
      { yearOrEra: "1815 AD", event: "Royal Reconstruction", description: "Queen Subarna Prabha of Nepal renovated the pagoda and installed the 108 brass Muktidhara fountains." }
    ],
    architecturalSecrets: [
      "The temple is the sole high-altitude Himalayan sanctuary counted among the sacred 108 Divya Desams praised by the South Indian Tamil Alvar saints.",
      "The surrounding Kali Gandaki River bed is the only place on Earth where sacred fossilized Shaligram stones (black ammonites from the Jurassic Tethys Ocean) are found."
    ],
    culturalSignificance: "A sacred sanctuary of harmonious coexistence, worshipped by Hindus as Muktikshetra (place of liberation) and by Tibetan Buddhists as Chumig Gyatsa (Hundred Springs).",
    visitorTips: [
      "Acclimatize properly in Pokhara or Jomsom before ascending to 3,800m altitude.",
      "Pilgrims complete a sacred bath under all 108 water spouts followed by a dip in the two holy ponds."
    ],
    narrationScript: "Welcome to Muktinath, standing at 3,800 meters in the dramatic trans-Himalayan kingdom of Mustang, Nepal. Revered as one of the 108 Divya Desams, this remote temple is a haven of ultimate spiritual liberation. Behind the golden two-tiered pagoda, 108 stone bull-headed fountains pour sacred glacial waters. Here, Hindu sadhus and Tibetan Buddhist lamas pray side by side beneath the majestic Annapurna and Dhaulagiri peaks.",
    chapters: [
      { id: "chap-1", title: "Sanctuary of Liberation", timestampHint: "0:00", script: "Perched 3,800 meters high, Muktinath offers liberation from the cycle of rebirth.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The 108 Sacred Spouts", timestampHint: "0:30", script: "Glacial waters flow through 108 stone spouts, cleansing pilgrims in the crisp mountain air.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Shaligrams of the Kali Gandaki", timestampHint: "1:00", script: "In the valleys below lie ancient ammonite fossils revered as natural emblems of Vishnu.", focusPointId: "pt-3" }
    ]
  },

  "janaki mandir": {
    name: "Janaki Mandir (Nau Lakha Mandir)",
    localName: "जानकी मन्दिर (जनकपुरधाम, नेपाल)",
    city: "Janakpur",
    country: "Nepal",
    architecturalStyle: "Indo-Islamic Mughal-Rajput Fusion & Mithila Palatial Style",
    periodEra: "1895–1910 AD (Commissioned by Queen Vrisha Bhanu of Tikamgarh)",
    confidence: 99,
    summary: "Spanning 4,860 square feet in the ancient capital of Mithila (Janakpur, Nepal), Janaki Mandir is a palatial three-tiered white stone temple commemorating the birthplace of Goddess Sita. Popularly called 'Nau Lakha Mandir' because nine lakh (900,000) gold coins were spent on its construction, it features 60 rooms, colored glass lattice windows, and Mughal domes.",
    coordinatesEstimate: { lat: 26.7288, lng: 85.9244 },
    arKeypoints: [
      { id: "pt-1", label: "Three-Tiered Palatial Marble Facade", featureType: "facade", description: "Grand 50-meter wide white stone palace facade embellished with Rajput cupolas and Mughal archways.", x: 50, y: 35 },
      { id: "pt-2", label: "Golden Sanctum Murti of Sita & Rama", featureType: "statue", description: "Enshrined idol of Janaki found in 1657 AD by saint Surkishordas on this sacred spot.", x: 50, y: 62 },
      { id: "pt-3", label: "Central Fluted Chhatri Domes", featureType: "dome", description: "Delicate ornamental fluted domes and colored glass windows reminiscent of royal Rajasthani palaces.", x: 50, y: 18 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1657 AD", event: "Discovery by Saint Surkishordas", description: "The hermit saint discovered a golden image of Goddess Sita buried at the site of King Janaka's ancient palace." },
      { yearOrEra: "1910 AD", event: "Grand Marble Palace Completion", description: "Queen Vrisha Bhanu of Tikamgarh completed the present palatial temple costing 900,000 rupees (Nau Lakha)." }
    ],
    architecturalSecrets: [
      "The temple is architecturally distinct from traditional Nepalese pagodas, adopting a breathtaking Rajput-Mughal palatial design with 60 rooms decorated with Mithila paintings.",
      "Every year during Vivaha Panchami, thousands of pilgrims reenact the royal wedding of Lord Rama and Sita in the adjacent Vivaha Mandap courtyard."
    ],
    culturalSignificance: "The supreme spiritual and cultural heart of the ancient Mithila region, celebrating Goddess Sita's virtues of devotion, courage, and unconditional compassion.",
    visitorTips: [
      "Visit during the Vivaha Panchami festival in November-December to witness grand Mithila cultural processions.",
      "Explore the adjacent Vivaha Mandap, where the royal wedding canopy of Rama and Sita is preserved in stone."
    ],
    narrationScript: "Gaze upon the radiant white Janaki Mandir in Janakpur, Nepal—the legendary birthplace of Goddess Sita and capital of King Janaka's ancient Mithila kingdom. Completed in 1910 by Queen Vrisha Bhanu of Tikamgarh at a cost of nine lakh gold coins, this palatial three-story temple blends Rajput and Mughal grace. Its fluted domes, colored glass lattices, and sixty regal rooms stand as a timeless tribute to the divine mother Sita.",
    chapters: [
      { id: "chap-1", title: "The Nau Lakha Palatial Wonder", timestampHint: "0:00", script: "Built with nine hundred thousand gold coins, Janaki Mandir gleams like a white palace.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Birthplace of Mother Sita", timestampHint: "0:30", script: "Here in Mithila, Sita was born from the furrowed earth and wed Lord Rama.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Mithila Cultural Grandeur", timestampHint: "1:00", script: "Ornate Rajput cupolas and Mithila artistic heritage celebrate ancient Vedic literature.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // BALI & INDONESIA
  // ==========================================
  "pura besakih": {
    name: "Pura Besakih (Mother Temple of Bali)",
    localName: "Pura Agung Besakih",
    city: "Karangasem / Mount Agung, Bali",
    country: "Indonesia",
    architecturalStyle: "Balinese Hindu Mountain Sanctuary (Pura Kahyangan Jagat)",
    periodEra: "Origins c. 1007 AD (Sri Kesari Warmadewa / Ancient Foundations)",
    confidence: 99,
    summary: "Known as the 'Mother Temple of Bali', Pura Besakih is the largest, holiest, and most majestic Hindu temple complex on the island of Bali. Perched 1,000 meters high on the southwestern slopes of the sacred volcano Mount Agung, it encompasses 23 separate temples arranged across six ascending stepped terraces, crowned by multi-tiered black palm-fiber thatched Meru towers.",
    coordinatesEstimate: { lat: -8.3739, lng: 115.4522 },
    arKeypoints: [
      { id: "pt-1", label: "Grand Ascending Staircase & Candi Bentar Split Gate", featureType: "entrance", description: "Monumental split gate leading up the terraced volcano slope toward Pura Penataran Agung.", x: 50, y: 75 },
      { id: "pt-2", label: "Multi-Tiered Thatched Meru Spires (11 Tiers)", featureType: "spire", description: "Sacred black ijuk palm-fiber stepped towers symbolizing Mount Meru, home of the deities.", x: 50, y: 22 },
      { id: "pt-3", label: "Lotus Throne Shrine (Padmasana Tiga)", featureType: "relief", description: "Three-seated stone lotus throne honoring the Balinese Hindu Trimurti (Siwa, Sadasiwa, Paramasiwa).", x: 65, y: 52 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 8th–10th Century", event: "Origins with Sage Rsi Markandeya", description: "Ancient sage Rsi Markandeya established the initial terraced mountain sanctuary dedicated to the God of Mount Agung." },
      { yearOrEra: "1963", event: "Miraculous Eruption Survival", description: "During the catastrophic 1963 eruption of Mount Agung, lava flows split and bypassed the temple by mere meters, hailed as a divine miracle." }
    ],
    architecturalSecrets: [
      "The temple is architecturally aligned along the sacred Kaja-Kelod axis: oriented toward the sacred volcanic peak of Mount Agung, the spiritual center of the universe for the Balinese people.",
      "The multi-tiered thatched spires are always constructed in odd numbers (up to 11 tiers for supreme royalty and deities), made from resilient black sugar palm fibers called ijuk."
    ],
    culturalSignificance: "The supreme spiritual sanctuary for the entire island of Bali, where all Balinese Hindu castes unite to participate in the centennial Panca Wali Krama purification rites.",
    visitorTips: [
      "Wear a traditional Balinese sarong and sash (kamben) to enter the sacred complex.",
      "Arrive in the early morning before clouds gather over Mount Agung to witness the volcanic backdrop in full glory."
    ],
    narrationScript: "Welcome to Pura Besakih, the revered Mother Temple of Bali. Clinging to the slopes of the sacred volcano Mount Agung at an elevation of 1,000 meters, this is the spiritual heart of Balinese Hinduism. Ascend the grand staircase through the dramatic Candi Bentar split gate: ahead rise dozens of multi-tiered Meru towers thatched in deep black palm fiber. Miraculously spared by deadly lava flows during the 1963 eruption, Besakih stands as an immortal sanctuary of faith and harmony between humanity, nature, and the divine.",
    chapters: [
      { id: "chap-1", title: "The Mother Temple of Bali", timestampHint: "0:00", script: "Perched high on Mount Agung, Besakih unites all Balinese Hindu worshippers.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Thatched Meru Spires", timestampHint: "0:30", script: "Black palm-thatched towers reach toward heaven in symbolic tiers of Mount Meru.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Miracle of the Volcano", timestampHint: "1:00", script: "Sparing the ancient shrines, lava flows from Mount Agung parted around the temple perimeter in 1963.", focusPointId: "pt-3" }
    ]
  },

  "pura tanah lot": {
    name: "Pura Tanah Lot (Balinese Sea Temple)",
    localName: "Pura Tanah Lot (Tabanan)",
    city: "Tabanan, Bali",
    country: "Indonesia",
    architecturalStyle: "Classical Balinese Offshore Sea Temple (Pura Segara)",
    periodEra: "c. 16th Century (Sage Dang Hyang Nirartha)",
    confidence: 99,
    summary: "Perched dramatically upon a wave-carved offshore rock formation along the southwestern coast of Bali, Pura Tanah Lot ('Land in the Sea') is one of Bali's most photographed landmarks. Founded by the revered 16th-century sage Dang Hyang Nirartha, it is dedicated to Dewa Baruna (God of the Sea) and guarded by sacred sea snakes.",
    coordinatesEstimate: { lat: -8.6212, lng: 115.0868 },
    arKeypoints: [
      { id: "pt-1", label: "Offshore Crag & Wave-Carved Arch", featureType: "arch", description: "Natural volcanic sea rock carved by tidal breakers over centuries, isolated at high tide.", x: 50, y: 72 },
      { id: "pt-2", label: "Stepped Meru Thatched Sanctuaries", featureType: "spire", description: "Multi-tiered black thatched shrines silhouetted against the Indian Ocean sunset.", x: 50, y: 35 },
      { id: "pt-3", label: "Sacred Freshwater Spring Cave", featureType: "entrance", description: "Cave beneath the rock where natural freshwater springs bubble directly inside the salty ocean.", x: 42, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1540 AD", event: "Establishment by Dang Hyang Nirartha", description: "The Majapahit sage rested on the offshore crag and instructed local fishermen to build a sea temple to honor the ocean guardians." },
      { yearOrEra: "1980", event: "Japanese-Indonesian Conservation", description: "Extensive restoration stabilized the eroding coastal rock face with specialized artificial stone reinforcements." }
    ],
    architecturalSecrets: [
      "Beneath the ocean-swept rock sits a natural freshwater spring (Tirta Pabresihan)—fresh drinking water bubbling out right in the middle of crashing salty ocean waves.",
      "The temple is one of seven sea temples forming an unbroken chain of visual line-of-sight protection around Bali's southwestern coast."
    ],
    culturalSignificance: "A primary link in the sacred chain of Balinese sea temples (Pura Segara), protecting the island from harmful oceanic spirits.",
    visitorTips: [
      "Arrive around 5:00 PM to capture the iconic golden hour sunset behind the temple silhouette.",
      "At low tide, visitors can walk across the wet sand causeway to the base of the rock to receive a holy water blessing."
    ],
    narrationScript: "Standing before Pura Tanah Lot, you behold Bali's most iconic offshore sea sanctuary. Perched on a volcanic rock carved by crashing waves, this temple was established in the 16th century by the wandering sage Dang Hyang Nirartha. At high tide, the rock is completely surrounded by ocean water, transforming it into an isolated floating island. Beneath the rock, natural freshwater springs bubble up amidst the saltwater—a miraculous gift where pilgrims receive sacred blessings as the sun dips into the Indian Ocean.",
    chapters: [
      { id: "chap-1", title: "Temple on the Sea Crag", timestampHint: "0:00", script: "Perched atop ocean waves, Tanah Lot guards the southwest coast of Bali.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Miracle Freshwater Spring", timestampHint: "0:30", script: "Bubbling directly beneath the salty ocean, fresh mountain springs provide holy water.", focusPointId: "pt-3" },
      { id: "chap-3", title: "The Sunset Silhouette", timestampHint: "1:00", script: "As dusk falls, the thatched Meru towers cast iconic dark silhouettes across glowing skies.", focusPointId: "pt-2" }
    ]
  },

  "pura uluwatu": {
    name: "Pura Luhur Uluwatu (Cliffside Sea Temple)",
    localName: "Pura Luhur Uluwatu (Pecatu)",
    city: "Pecatu / Bukit Peninsula, Bali",
    country: "Indonesia",
    architecturalStyle: "Balinese Cliff-Top Coral Stone Architecture",
    periodEra: "c. 11th Century (Mpu Kuturan / Expanded by Dang Hyang Nirartha in 16th Century)",
    confidence: 99,
    summary: "Perched precariously atop the sheer edge of a 70-meter (230ft) limestone cliff plunging directly into the Indian Ocean on Bali's southern Bukit Peninsula, Pura Uluwatu is one of the island's nine directional directional temples (Sad Kahyangan), famous for dramatic Kecak fire dance performances at sunset.",
    coordinatesEstimate: { lat: -8.8291, lng: 115.0849 },
    arKeypoints: [
      { id: "pt-1", label: "70-Meter Limestone Ocean Precipice", featureType: "facade", description: "Vertical cliff face dropping straight down into the crashing surf of the Indian Ocean.", x: 50, y: 78 },
      { id: "pt-2", label: "Winged Stone Portal Gate (Candi Kurung)", featureType: "entrance", description: "Ancient black coral-stone arched portal flanked by guardian statues and mythical Garuda wings.", x: 50, y: 48 },
      { id: "pt-3", label: "Open-Air Kecak Sunset Amphitheatre", featureType: "arch", description: "Cliffside stone circular stage where 70 chanting performers enact the Ramayana epic at dusk.", x: 74, y: 64 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1000 AD", event: "Establishment by Mpu Kuturan", description: "The Javanese sage Mpu Kuturan established the cliff sanctuary as a Sad Kahyangan directional temple." },
      { yearOrEra: "1550 AD", event: "Nirartha's Moksha Ascension", description: "Sage Dang Hyang Nirartha attained supreme spiritual liberation (Moksha) at this exact cliff edge." }
    ],
    architecturalSecrets: [
      "Constructed entirely from dark gray coral stone quarried directly from the surrounding sea cliffs, withstanding corrosive salty maritime winds for a millennium.",
      "The temple entrance features a rare winged split gate (Candi Bentar Berlarat) depicting the celestial wings of Garuda, found in only a few 11th-century Balinese sanctuaries."
    ],
    culturalSignificance: "Protects Bali from malevolent sea spirits entering from the southwest, revered as the site where the great sage Dang Hyang Nirartha achieved ultimate union with the cosmos.",
    visitorTips: [
      "Purchase tickets for the world-famous 6:00 PM Kecak and Fire Dance performance at least an hour in advance.",
      "Beware of the resident macaque monkeys who are notorious for snatching glasses, hats, and shiny items."
    ],
    narrationScript: "You stand 70 meters above the roaring waves of the Indian Ocean on the sheer limestone precipice of Uluwatu. Dating back to the 11th century, this black coral stone sanctuary is one of Bali's six supreme directional pillars. Gaze out past the winged stone gate: below, powerful oceanic swells crash against the cliffs, while above, the setting sun casts a radiant crimson glow across the sky as the rhythmic chants of the Ramayana Kecak dance echo into the twilight.",
    chapters: [
      { id: "chap-1", title: "The 70-Meter Ocean Cliff", timestampHint: "0:00", script: "Perched on the edge of the world, Uluwatu overlooks the vast Indian Ocean.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Ancient Winged Coral Gate", timestampHint: "0:30", script: "Carved from dark coral stone, the winged gateway bears witness to a thousand years of tides.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Chants of the Kecak Fire Dance", timestampHint: "1:00", script: "Rhythmic vocal choruses recount the Ramayana as flames illuminate the twilight sky.", focusPointId: "pt-3" }
    ]
  },

  "pura ulun danu beratan": {
    name: "Pura Ulun Danu Beratan (Lake Water Temple)",
    localName: "Pura Ulun Danu Bratan (Bedugul)",
    city: "Bedugul / Tabanan, Bali",
    country: "Indonesia",
    architecturalStyle: "Classical Balinese Floating Water Temple (Pura Tirta)",
    periodEra: "1633 AD (Reign of King of Mengwi, I Gusti Agung Putu)",
    confidence: 99,
    summary: "Situated 1,200 meters above sea level on the shores of Lake Beratan in the misty Bedugul highlands, Pura Ulun Danu Beratan appears to float magically upon the water. Dedicated to Dewi Danu, the goddess of water, lakes, and rivers, its 11-tiered Meru tower is featured on the Indonesian 50,000 Rupiah banknote.",
    coordinatesEstimate: { lat: -8.2751, lng: 115.1664 },
    arKeypoints: [
      { id: "pt-1", label: "Floating 11-Tiered Lingga Petak Meru", featureType: "spire", description: "Iconic eleven-roofed black thatched tower rising directly out of the lake water surface.", x: 50, y: 28 },
      { id: "pt-2", label: "Three-Tiered Pura Penataran Pucak Mangu", featureType: "spire", description: "Smaller three-tiered thatched water shrine honoring Lord Shiva and Vishnu.", x: 68, y: 44 },
      { id: "pt-3", label: "Reflecting Mountain Lake Basin", featureType: "arch", description: "Volcanic crater lake Beratan providing irrigation water to downstream subak rice paddies.", x: 50, y: 74 }
    ],
    historicalTimeline: [
      { yearOrEra: "1633 AD", event: "Foundation by King of Mengwi", description: "Built by I Gusti Agung Putu to ensure harmonious water distribution across the agricultural kingdom." }
    ],
    architecturalSecrets: [
      "The temple complex sits at the heart of the UNESCO World Heritage Subak irrigation system: all farmers in Central Bali revere Dewi Danu for the life-giving water flowing through their rice terraces.",
      "Early morning mountain fog often settles across Lake Beratan, creating the breathtaking visual illusion that the thatched Meru towers are floating weightlessly."
    ],
    culturalSignificance: "The supreme water sanctuary of Bali, where farmers perform traditional Subak ceremonies to bless irrigation waters and guarantee abundant harvests.",
    visitorTips: [
      "Visit between 7:00 AM and 9:00 AM before highland tour buses arrive and while the lake water is mirror-calm for photography.",
      "Rent a traditional swan paddleboat or wooden canoe to view the floating shrines from the open water."
    ],
    narrationScript: "Breathe in the cool mountain air of Bedugul as you behold Pura Ulun Danu Beratan. Resting 1,200 meters above sea level in the caldera of an ancient volcano, this picturesque water temple appears to float serenely on the glassy surface of Lake Beratan. Built in 1633 by the King of Mengwi, its 11-tiered thatched tower honors Dewi Danu, the goddess of water who nourishes Bali's emerald rice paddies.",
    chapters: [
      { id: "chap-1", title: "The Floating Lake Sanctuary", timestampHint: "0:00", script: "Surrounded by misty mountain peaks, the eleven-tiered Meru tower seems to float on the lake.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Goddess of the Sacred Waters", timestampHint: "0:30", script: "Dedicated to Dewi Danu, source of life-giving water for Bali's UNESCO subak irrigation.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Highland Serenity", timestampHint: "1:00", script: "Calm reflective waters and blooming tropical gardens create an oasis of spiritual peace.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // CAMBODIA, MALAYSIA & SINGAPORE
  // ==========================================
  "banteay srei": {
    name: "Banteay Srei (Citadel of Women)",
    localName: "ប្រាសាទបន្ទាយស្រី",
    city: "Siem Reap",
    country: "Cambodia",
    architecturalStyle: "Classical Khmer Pink Sandstone Architecture",
    periodEra: "967 AD (Consecrated under King Rajendravarman II / Jayavarman V)",
    confidence: 99,
    summary: "Known as the 'Jewel of Khmer Art', Banteay Srei ('Citadel of Women') is a 10th-century Hindu temple dedicated to Lord Shiva. Constructed from hard rose-pink sandstone that can be carved like wood, it is celebrated for the most delicate, deeply undercut, and intricate stone bas-reliefs in the entire ancient world.",
    coordinatesEstimate: { lat: 13.5989, lng: 103.963 },
    arKeypoints: [
      { id: "pt-1", label: "Central Rose-Pink Sandstone Prasat", featureType: "spire", description: "Miniature 10-meter central sanctuary tower built from rare fine-grained pink sandstone.", x: 50, y: 32 },
      { id: "pt-2", label: "Exquisite Three-Dimensional Door Lintels", featureType: "relief", description: "Masterpieces of stone carving illustrating the slaying of Kamsa and Shiva's cosmic dance.", x: 50, y: 56 },
      { id: "pt-3", label: "Kneeling Monkey & Lion Guardians", featureType: "statue", description: "Sculpted stone guardians with human bodies and simian/lion heads guarding the sanctum stairways.", x: 62, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "967 AD", event: "Consecration by Royal Brahmin Yajnavaraha", description: "Unlike other imperial Angkor monuments, Banteay Srei was commissioned by a scholarly royal guru rather than a king." },
      { yearOrEra: "1914", event: "Rediscovery in Dense Jungle", description: "Rediscovered by French explorers and restored using anastylosis by Henri Marchal in the 1930s." }
    ],
    architecturalSecrets: [
      "The rare pink sandstone used to build Banteay Srei hardens upon exposure to air, preserving its razor-sharp chisel marks after over a thousand years.",
      "The buildings were constructed on an intentionally intimate, human scale—far smaller than monumental Angkor Wat—giving rise to the myth that it could only have been carved by the delicate hands of women."
    ],
    culturalSignificance: "Widely regarded by art historians as the absolute artistic summit of classical Southeast Asian stone sculpture.",
    visitorTips: [
      "Visit in the early morning (between 7:30 and 9:00 AM) when the rising sun illuminates the pink stone with a warm, glowing rose color.",
      "Bring binoculars or a telephoto camera lens to appreciate the miniature floral details carved into the pediments."
    ],
    narrationScript: "Welcome to Banteay Srei, the Citadel of Women, nestled 25 kilometers north of Angkor. Completed in 967 AD, this sanctuary is crafted from rare, fine-grained rose-pink sandstone. Look closely at the door lintels and pediments before you: the stone was chiseled with such microscopic mastery that it resembles intricately carved wood or lace. Dedicated to Shiva, Banteay Srei proves that true monumental grandeur lies not in colossal size, but in exquisite perfection.",
    chapters: [
      { id: "chap-1", title: "Jewel of Khmer Art", timestampHint: "0:00", script: "Hewn from blushing pink sandstone, Banteay Srei represents the peak of ancient stonecraft.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Stone Carved Like Lace", timestampHint: "0:30", script: "Every lintel bursts with mythological stories chiseled in deep, layered relief.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Mythical Guardians", timestampHint: "1:00", script: "Lion and monkey-headed sentinels keep eternal watch over the sacred threshold.", focusPointId: "pt-3" }
    ],
    unescoYear: 1992,
    unescoId: "668",
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Angkor - Banteay Srei Monument",
      inscriptionYear: 1992,
      criteria: "(i)(ii)(iii)(iv)",
      category: "Cultural",
      unescoId: "668"
    }
  },

  "sri mariamman temple singapore": {
    name: "Sri Mariamman Temple (Chinatown, Singapore)",
    localName: "ஸ்ரீ மாரியம்மன் கோயில், சிங்கப்பூர்",
    city: "Chinatown, Singapore",
    country: "Singapore",
    architecturalStyle: "South Indian Dravidian Architecture (Singapore National Monument)",
    periodEra: "Founded 1827 by Naraina Pillai; Present Gopuram 1925",
    confidence: 99,
    summary: "Standing proudly in the heart of Singapore's historic Chinatown, Sri Mariamman Temple is the oldest Hindu temple in Singapore. Dedicated to Goddess Mariamman (famed for her power to heal epidemics and diseases), this gazetted National Monument features an iconic six-tiered Raja Gopuram covered in vivid plaster sculptures of deities, sepoys, and mythological beasts.",
    coordinatesEstimate: { lat: 1.2828, lng: 103.8453 },
    arKeypoints: [
      { id: "pt-1", label: "Six-Tiered Polychrome Raja Gopuram (South Bridge Rd)", featureType: "spire", description: "Ornamental tower gateway teeming with hundreds of brightly hand-painted Hindu deities and celestial figures.", x: 50, y: 18 },
      { id: "pt-2", label: "Sanctum of Mother Mariamman", featureType: "entrance", description: "Inner holy sanctum housing the deity of Mariamman, framed by painted mandapa ceiling murals.", x: 50, y: 58 },
      { id: "pt-3", label: "The Theemithi Fire-Walking Pit", featureType: "arch", description: "Sacred courtyard area where thousands of barefoot devotees walk across burning hot coals during the annual festival.", x: 68, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "1827", event: "Foundation by Naraina Pillai", description: "Pioneer Indian leader Naraina Pillai established a wood and attap shrine after accompanying Sir Stamford Raffles to Singapore." },
      { yearOrEra: "1843", event: "Plaster and Brick Reconstruction", description: "Tamil convict laborers and artisans reconstructed the core brick and plaster sanctuary." },
      { yearOrEra: "1973", event: "Singapore National Monument Gazetting", description: "Gazetted as an official National Monument of Singapore for its irreplaceable heritage value." }
    ],
    architecturalSecrets: [
      "Look carefully at the ornamental gopuram sculptures: among the ancient deities, you will spot sculpted British colonial Indian Sepoy soldiers in traditional uniform—a unique colonial-era architectural detail.",
      "The temple is the focal point of the dramatic annual Theemithi festival, where devotees fulfill vows by walking barefoot across a four-meter pit of red-hot glowing wood coals."
    ],
    culturalSignificance: "The founding mother temple of the Singapore Hindu community, serving as a sanctuary of cultural identity, legal marriage registry, and community refuge for two centuries.",
    visitorTips: [
      "Remove footwear at the entrance; visitors must have shoulders and knees covered (wraps are provided at the entrance).",
      "Look up at the mandapa ceiling murals depicting the planetary Navagrahas and floral mandala yantras."
    ],
    narrationScript: "Welcome to Sri Mariamman Temple on South Bridge Road in Singapore. Established in 1827 by pioneer Naraina Pillai, this is the oldest Hindu temple in the Lion City. Gaze up at the six-tiered entrance Gopuram, densely populated with hundreds of vibrant, hand-painted mythological sculptures. In a magnificent display of multicultural harmony, this South Indian Dravidian sanctuary stands proudly in the middle of Chinatown, welcoming visitors of all backgrounds for nearly two centuries.",
    chapters: [
      { id: "chap-1", title: "The Pioneer Temple of Singapore", timestampHint: "0:00", script: "Founded in 1827, Sri Mariamman is Singapore's oldest Hindu national monument.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Vibrant Dravidian Gopuram", timestampHint: "0:30", script: "Six tiers of deities, sages, and historical sepoys greet visitors on South Bridge Road.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Sacred Fire-Walking Rite", timestampHint: "1:00", script: "The courtyard hosts the annual Theemithi ritual of faith, devotion, and purification.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // SRI LANKA (PANCHA ISHWARAMS & SANCTUARIES)
  // ==========================================
  "koneswaram temple": {
    name: "Koneswaram Temple (Thirukonamalai)",
    localName: "திருக்கோணேச்சரம் (Trincomalee)",
    city: "Trincomalee",
    country: "Sri Lanka",
    architecturalStyle: "Classical Tamil Dravidian Coastal Cliff Sanctuary",
    periodEra: "Ancient Origins (Documented 3rd Century BC; Rebuilt 1952)",
    confidence: 99,
    summary: "Perched dramatically 130 meters above the azure waters of the Indian Ocean atop Swami Rock in Trincomalee, Koneswaram is the most celebrated of the ancient Pancha Ishwarams (Five Abodes of Shiva) in Sri Lanka. Praised in the Tamil Tevaram hymns of saint Sambandar, its cliffside promontory overlooks one of the finest natural deep-water harbors in the world.",
    coordinatesEstimate: { lat: 8.5786, lng: 81.2421 },
    arKeypoints: [
      { id: "pt-1", label: "Swami Rock Ocean Cliff Precipice (Lover's Leap)", featureType: "facade", description: "Dramatic 130-meter vertical black rock cliff dropping straight into the deep ocean waters.", x: 50, y: 78 },
      { id: "pt-2", label: "Colossal Golden Statue of Lord Shiva", featureType: "statue", description: "Towering seated golden murti of Shiva in blessing posture overlooking the sea promontory.", x: 50, y: 32 },
      { id: "pt-3", label: "Dravidian Gopuram Gateway", featureType: "entrance", description: "Vibrant South Indian style gateway erected during the 20th-century community restoration.", x: 34, y: 64 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 3rd Century BC", event: "Ancient Pancha Ishwaram Temple", description: "Known as the 'Temple of a Thousand Pillars', recorded as a prominent Shiva shrine visited by kings." },
      { yearOrEra: "1624 AD", event: "Portuguese Destruction", description: "Portuguese general Constantino de Sá de Noronha demolished the historic temple, using its stone to build Fort Frederick." },
      { yearOrEra: "1952 AD", event: "Resurrection from the Sea", description: "Diver and author Arthur C. Clarke discovered submerged stone pillars and statues, leading to the temple's modern reconstruction." }
    ],
    architecturalSecrets: [
      "In 1956, famous science-fiction author Arthur C. Clarke and diver Mike Wilson discovered the original submerged stone pillars and bronzes of the 1000-pillar temple off the seabed of Swami Rock.",
      "The cliff promontory has been a sacred navigational landmark for maritime trade between Tamil Nadu, Sri Lanka, and Southeast Asia for over 2,500 years."
    ],
    culturalSignificance: "Revered as the supreme Shiva sanctuary of Sri Lanka, mentioned in the Ramayana where Ravana was said to have worshipped the Shiva lingam at this cliff.",
    visitorTips: [
      "Take a peaceful walk through the ramparts of Fort Frederick, passing herds of friendly wild spotted deer roaming freely.",
      "Visit in the late afternoon to see the sun glint off the golden Shiva statue and watch schools of blue whales in the bay."
    ],
    narrationScript: "Standing atop Swami Rock in Trincomalee, Sri Lanka, you are perched 130 meters above the open Indian Ocean at Koneswaram Temple. Known as the Temple of a Thousand Pillars in classical antiquity, this sacred coastal promontory is the foremost of Sri Lanka's five ancient Pancha Ishwarams. Though destroyed by the Portuguese in 1624, its sunken pillars were rediscovered by Arthur C. Clarke in the 1950s, sparking its triumphant resurrection. Gaze out past the golden statue of Shiva across the sweeping ocean horizon.",
    chapters: [
      { id: "chap-1", title: "Temple on the Ocean Cliff", timestampHint: "0:00", script: "Perched high above Trincomalee harbor, Koneswaram has watched over mariners for millennia.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Submerged Secrets", timestampHint: "0:30", script: "Rediscovered on the ocean floor in 1956, ancient temple stones returned to the clifftop.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Pancha Ishwaram Legacy", timestampHint: "1:00", script: "Praising Lord Shiva, Tamil poets sang hymns to this sanctuary across the centuries.", focusPointId: "pt-3" }
    ]
  },

  "nallur kandaswamy kovil": {
    name: "Nallur Kandaswamy Kovil (Jaffna)",
    localName: "நல்லூர் கந்தசுவாமி கோயில் (யாழ்ப்பாணம்)",
    city: "Jaffna",
    country: "Sri Lanka",
    architecturalStyle: "Pure Dravidian Tamil Temple Architecture with Golden Gopurams",
    periodEra: "Founded 948 AD by Bhuvanekabahu; Present Grand Temple 1734 AD",
    confidence: 99,
    summary: "The cultural, spiritual, and architectural crown jewel of the Northern Province of Sri Lanka, Nallur Kandaswamy Kovil in Jaffna is dedicated to Lord Murugan (Skanda/Kartikeya). Revered for its strict devotional discipline, spotless red-and-white striped walls, shimmering golden Raja Gopurams, and the world-renowned 25-day annual Nallur Festival.",
    coordinatesEstimate: { lat: 9.6744, lng: 80.0294 },
    arKeypoints: [
      { id: "pt-1", label: "Golden Multi-Tiered Southern Raja Gopuram", featureType: "spire", description: "Soaring 5-tiered golden entrance tower embellished with intricate brass work and kalashams.", x: 50, y: 18 },
      { id: "pt-2", label: "Sacred Vel Sanctum (Sanctuary of Skanda)", featureType: "entrance", description: "Inner sanctum enshrining the sacred golden spear (Vel) of Lord Murugan rather than a stone idol.", x: 50, y: 58 },
      { id: "pt-3", label: "Stepwell Sacred Water Tank (Theertham)", featureType: "arch", description: "Immaculately maintained stepped stone temple pond where ritual purification baths are conducted.", x: 72, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "948 AD", event: "Original Jaffna Kingdom Temple", description: "Established as the state temple of the royal Jaffna Kingdom under King Bhuvanekabahu." },
      { yearOrEra: "1620 AD", event: "Portuguese Demolition", description: "Fell during the Portuguese conquest of Jaffna; rebuilt during Dutch rule in 1734 by Don Juan Ragunatha Mappana Mudaliyar." },
      { yearOrEra: "2011", event: "Erection of New Golden Gopurams", description: "Consecrated soaring new Raja Gopurams, solidifying Nallur as the preeminent Hindu temple of Sri Lanka." }
    ],
    architecturalSecrets: [
      "In accordance with ancient Tamil Saiva tradition, the inner sanctum does not enshrine a conventional anthropomorphic murti; worship is centered upon the divine Vel (golden spear of wisdom).",
      "Male devotees must enter the temple bare-chested in accordance with centuries-old Jaffna Saivite purity protocols."
    ],
    culturalSignificance: "The supreme institutional symbol of Tamil cultural resilience and Saiva Siddhanta devotion in Sri Lanka, attracting over a million pilgrims during its 25-day festival.",
    visitorTips: [
      "Male visitors must remove shirts before entering; female visitors should wear modest traditional clothing (saree or salwar).",
      "Visit during the annual August festival to witness massive wooden chariots (Ther) pulled by thousands of devotees."
    ],
    narrationScript: "Welcome to Nallur Kandaswamy Kovil, the glorious spiritual heart of Jaffna in northern Sri Lanka. Established in the 10th century during the Jaffna Kingdom, this temple honors Lord Murugan through his sacred golden Vel—the spear of divine intellect. Look at its soaring golden gopurams and pristine red-and-white courtyard walls: Nallur is celebrated worldwide for its immaculate cleanliness, strict spiritual decorum, and vibrant devotional energy.",
    chapters: [
      { id: "chap-1", title: "The Pride of Jaffna", timestampHint: "0:00", script: "Nallur stands as the historic state temple and cultural beacon of the Jaffna Kingdom.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Golden Vel Sanctum", timestampHint: "0:30", script: "Inside the inner sanctum, the golden spear of Murugan embodies divine wisdom.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Grand Chariot Festival", timestampHint: "1:00", script: "Each August, hundreds of thousands gather to pull colossal wooden temple chariots.", focusPointId: "pt-3" }
    ]
  },

  // ==========================================
  // NORTH AMERICA, EUROPE & OCEANIA
  // ==========================================
  "baps shri swaminarayan mandir london": {
    name: "BAPS Shri Swaminarayan Mandir (Neasden Temple)",
    localName: "Neasden Temple, London",
    city: "London",
    country: "United Kingdom",
    architecturalStyle: "Pure Traditional Hindu Stone Architecture (Nagara / Solanki Style)",
    periodEra: "Opened August 20, 1995 (Inaugurated by Pramukh Swami Maharaj)",
    confidence: 100,
    summary: "Known universally as the Neasden Temple, this breathtaking architectural wonder in North London was Europe's first traditional Hindu stone temple. Hand-carved in India from 5,000 tonnes of Italian Carrara marble and Bulgarian limestone, it was assembled without any structural steel, featuring 7 pinnacles, 193 pillars, and 43 vaulted ceilings.",
    coordinatesEstimate: { lat: 51.5478, lng: -0.2608 },
    arKeypoints: [
      { id: "pt-1", label: "Central Shikhara Spire (Carrara Marble)", featureType: "spire", description: "Main ornamental tower carved with celestial motifs rising 70 feet above Brent.", x: 50, y: 22 },
      { id: "pt-2", label: "Intricate Fluted Pillar Forest (193 Columns)", featureType: "column", description: "Hand-chiseled marble columns depicting Vedic rishis, saints, and cosmic musicians.", x: 42, y: 64 },
      { id: "pt-3", label: "Bulgarian Limestone Grand Facade", featureType: "facade", description: "Hand-assembled exterior steps and portico constructed entirely without steel reinforcement.", x: 50, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "1992–1995", event: "Artisan Hand-Carving in Gujarat", description: "Over 1,500 master sculptors in India hand-chiseled 26,300 individual stone pieces before shipping to London." },
      { yearOrEra: "1995", event: "Consecration by Pramukh Swami Maharaj", description: "Consecrated as Europe's first authentic Hindu mandir, recognized by Guinness World Records." }
    ],
    architecturalSecrets: [
      "The entire mandir contains zero structural steel: all marble and limestone pieces interlock using traditional stone mortise and tenon joints.",
      "The stone blocks were transported across 14,000 miles: Bulgarian limestone was quarried, shipped to Rajasthan for carving by hand, and then transported to London for assembly."
    ],
    culturalSignificance: "A landmark triumph of the British Asian diaspora, welcoming millions of visitors of all faiths and winning numerous civic and architectural awards in the UK.",
    visitorTips: [
      "Admission is completely free; visit the permanent exhibition 'Understanding Hinduism' on the ground floor.",
      "Arrive at 11:45 AM to observe the sacred midday Arti ceremony in the upper marble sanctum."
    ],
    narrationScript: "You stand before the Neasden Temple in North London—Europe's first traditional Hindu stone mandir. Consecrated in 1995, this masterpiece was carved from 5,000 tonnes of Italian Carrara marble and Bulgarian limestone by 1,500 master artisans in India. Miraculously assembled without a single beam of structural steel, gaze at the intricate lace-like marble domes and 193 chiseled columns that transform this corner of London into an ethereal sanctuary of peace.",
    chapters: [
      { id: "chap-1", title: "Europe's First Stone Mandir", timestampHint: "0:00", script: "Rising over London, Neasden Temple is a triumph of traditional Vedic architecture.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Forest of Marble Columns", timestampHint: "0:30", script: "193 marble pillars depict celestial musicians and ancient spiritual sages.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Engineering Without Steel", timestampHint: "1:00", script: "Interlocking stone joints hold 26,000 chiseled blocks together in perfect harmony.", focusPointId: "pt-3" }
    ]
  },

  "sri venkateswara temple pittsburgh": {
    name: "Sri Venkateswara Temple (Pittsburgh)",
    localName: "S.V. Temple, Penn Hills, PA",
    city: "Pittsburgh, Pennsylvania",
    country: "United States",
    architecturalStyle: "Pure South Indian Dravidian Architecture",
    periodEra: "1975–1976 AD (One of the Oldest Hindu Temples in the USA)",
    confidence: 99,
    summary: "Consecrated in 1976 in Penn Hills outside Pittsburgh, Pennsylvania, the Sri Venkateswara Temple is one of the earliest and most historically significant traditional Hindu temples built in the United States. Architecturally modeled directly after the sacred Tirumala Venkateswara temple in India, it features an authentic granite sanctum and brilliant white Raja Gopuram.",
    coordinatesEstimate: { lat: 40.4851, lng: -79.8055 },
    arKeypoints: [
      { id: "pt-1", label: "Brilliant White Dravidian Raja Gopuram", featureType: "spire", description: "Multi-tiered tower entrance modeled after the sacred Tirumala hill temple.", x: 50, y: 24 },
      { id: "pt-2", label: "Granite Sanctum of Lord Venkateswara", featureType: "statue", description: "Black granite deity of Lord Balaji adorned with diamond crowns and silk vestments.", x: 50, y: 62 },
      { id: "pt-3", label: "Golden Dhwajasthambham Flagstaff", featureType: "column", description: "Brass-clad ceremonial flagpole standing in the courtyard axis before the sanctum.", x: 50, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "1975–1976", event: "Pioneering North American Foundation", description: "Founded by early Indian-American scientists and engineers, with architectural guidance from Tirumala Tirupati Devasthanams." },
      { yearOrEra: "Present", event: "Golden Jubilee Heritage", description: "Serves as an enduring spiritual anchor for generations of Hindu Americans across the eastern United States." }
    ],
    culturalSignificance: "A pioneering national landmark of the American Hindu community, establishing the benchmark for authentic Agamic temple construction across North America.",
    architecturalSecrets: [
      "Designed by the Chief Sthapati of Tirumala Tirupati Devasthanams, utilizing exact geometric proportions from the ancient Agamas.",
      "The temple is positioned on a hill elevation in Penn Hills to mirror the sacred seven hills of Tirumala in Andhra Pradesh.",
      "The black granite murtis were carved in Mahabalipuram, India, by traditional guild sculptors and flown across the Atlantic."
    ],
    visitorTips: [
      "Enjoy traditional South Indian temple canteen prasad (tamarind rice, dosa, and laddu) on the lower level.",
      "Check the temple calendar for the annual Brahmotsavam chariot festival in the summer."
    ],
    narrationScript: "Welcome to the Sri Venkateswara Temple in Penn Hills, Pennsylvania, near Pittsburgh. Consecrated in 1976, this historic sanctuary is one of the very first traditional Hindu temples built on American soil. Modeled directly on the famous Tirupati Balaji temple in South India, its striking white Dravidian tower rises proudly against the Pennsylvania hills, standing as a pioneer beacon of Vedic faith in the Western Hemisphere.",
    chapters: [
      { id: "chap-1", title: "Pioneer Temple of North America", timestampHint: "0:00", script: "Built in 1976, SV Temple Pittsburgh paved the way for Hindu temples across the USA.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Modeled After Tirupati", timestampHint: "0:30", script: "Dravidian architectural plans from Tirumala guided the creation of this sacred hill shrine.", focusPointId: "pt-2" }
    ]
  },

  "baps shri swaminarayan mandir toronto": {
    name: "BAPS Shri Swaminarayan Mandir (Toronto)",
    localName: "BAPS Toronto Mandir (Etobicoke)",
    city: "Toronto, Ontario",
    country: "Canada",
    architecturalStyle: "Hand-Carved Traditional Hindu Stone Architecture",
    periodEra: "Opened July 22, 2007 (Inaugurated by Pramukh Swami Maharaj)",
    confidence: 99,
    summary: "Located in Etobicoke, Toronto, this architectural jewel was hand-crafted from 24,000 pieces of Italian Carrara marble, Turkish limestone, and Indian pink sandstone. Built in adherence to ancient Shilpa Shastras, it features 160 pillars, 43 ceilings, and a permanent Canadian Museum of Hindu Civilization.",
    coordinatesEstimate: { lat: 43.7439, lng: -79.6053 },
    arKeypoints: [
      { id: "pt-1", label: "Central Carrara Marble Shikhara Spire", featureType: "spire", description: "Towering pinnacle carved with intricate deities and celestial motifs.", x: 50, y: 22 },
      { id: "pt-2", label: "Hand-Carved Stone Haveli Wooden Foyer", featureType: "facade", description: "Traditional Gujarati courtyard crafted from hand-carved Burmese teakwood.", x: 62, y: 68 },
      { id: "pt-3", label: "Sacred Inner Marble Sanctum (Garbhagriha)", featureType: "statue", description: "Polished Italian marble mandap housing the sacred murtis of Bhagwan Swaminarayan.", x: 50, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "2007", event: "Grand Consecration", description: "Opened in a grand ceremony attended by Canadian Prime Minister Stephen Harper and spiritual leader Pramukh Swami Maharaj." }
    ],
    culturalSignificance: "A major cultural icon of the Canadian multicultural mosaic, celebrated for community service and preserving authentic ancient stone craftsmanship.",
    architecturalSecrets: [
      "Engineered without any structural steel, using an interlocking system of stone pegs and grooved joints to withstand Canadian winters down to -30°C.",
      "Composed of 24,000 individually numbered stone segments hand-carved in Rajasthan and assembled in Toronto like a colossal 3D puzzle.",
      "Features radiant geothermal heating beneath the Italian marble floors so pilgrims can walk barefoot year-round in sub-zero temperatures."
    ],
    visitorTips: [
      "Open to visitors of all backgrounds daily; audio guide headsets are available at reception.",
      "Explore the attached Haveli with its stunning peacock-carved teakwood columns."
    ],
    narrationScript: "You stand before the BAPS Shri Swaminarayan Mandir in Toronto, Canada. Opened in 2007, this ethereal sanctuary was chiseled from 24,000 pieces of Italian Carrara marble and Indian sandstone. Inside, 160 intricately carved pillars and exquisite ribbed domes transport visitors from urban Toronto into an ancient realm of spiritual tranquility.",
    chapters: [
      { id: "chap-1", title: "A Canadian Architectural Wonder", timestampHint: "0:00", script: "24,000 hand-carved stone pieces unite in an inspiring testament to global craftsmanship.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Hand-Carved Teak Haveli", timestampHint: "0:30", script: "Burmese teakwood balconies showcase centuries-old Gujarati woodcraft.", focusPointId: "pt-2" }
    ]
  },

  "sydney murugan temple": {
    name: "Sydney Murugan Temple",
    localName: "Sydney Murugan Kovil (Mays Hill, NSW)",
    city: "Mays Hill, Sydney, New South Wales",
    country: "Australia",
    architecturalStyle: "Classical South Indian Tamil Dravidian Temple",
    periodEra: "1997–1999 AD (Consecrated May 1999)",
    confidence: 99,
    summary: "Perched on the summit of Mays Hill in Greater Western Sydney, the Sydney Murugan Temple is Australia's foremost sanctuary dedicated to Lord Murugan (Skanda). Featuring an authentic South Indian Dravidian granite sanctum and a towering multi-tiered Raja Gopuram, it serves as the cultural and religious beacon for the Australian Tamil diaspora.",
    coordinatesEstimate: { lat: -33.8248, lng: 150.9856 },
    arKeypoints: [
      { id: "pt-1", label: "Dravidian Multi-Tiered Raja Gopuram", featureType: "spire", description: "Colorful South Indian entrance tower with kalashams and sculpted mythological deities.", x: 50, y: 22 },
      { id: "pt-2", label: "Black Granite Sanctum of Lord Murugan", featureType: "statue", description: "Carved granite shrine of Murugan flanked by consorts Valli and Deivayanai.", x: 50, y: 62 },
      { id: "pt-3", label: "Sacred Chariot Shed (Ther Mutti)", featureType: "arch", description: "Houses the elaborately carved wooden chariot pulled during annual festivals.", x: 68, y: 74 }
    ],
    historicalTimeline: [
      { yearOrEra: "1999", event: "Maha Kumbhabhishekam", description: "Consecrated by prominent Hindu priests following years of dedication by Tamil migrants in Australia." }
    ],
    culturalSignificance: "The spiritual and cultural home of the Australian Hindu community, fostering Tamil language classes, Carnatic music, and Bharatanatyam dance.",
    architecturalSecrets: [
      "Perched on the crest of Mays Hill following the classic Agamic rule that temples to Murugan should occupy prominent hilltops (Kundruthoradal).",
      "Features a five-tiered Raja Gopuram embellished with intricate stucco figures painted in traditional South Indian temple hues.",
      "The inner sanctum stones were oriented precisely according to the sunrise axis over Sydney's western plains."
    ],
    visitorTips: [
      "Traditional vegetarian meals are served at the temple hall on festival and auspicious days.",
      "Check out the vibrant Thaipusam festival celebrations held early each year."
    ],
    narrationScript: "Welcome to the Sydney Murugan Temple in Mays Hill, New South Wales. Consecrated in 1999, this South Indian Dravidian sanctuary is the supreme temple dedicated to Lord Murugan in Australia. Built atop a hill in the traditional agamic fashion, its colorful Gopuram welcomes devotees and curious visitors from across the Southern Hemisphere.",
    chapters: [
      { id: "chap-1", title: "Temple on the Hill", timestampHint: "0:00", script: "Rising above Sydney's Mays Hill, the temple honors Lord Murugan in Southern skies.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Living Australian Tamil Heritage", timestampHint: "0:30", script: "Carnatic music, Vedic rituals, and Tamil tradition thrive in this modern sanctuary.", focusPointId: "pt-2" }
    ]
  },

  // ==========================================
  // INDIA: CHAR DHAM, 12 JYOTIRLINGAS & SHAKTI PEETHAS
  // ==========================================
  "dwarkadhish temple": {
    name: "Dwarkadhish Temple (Jagat Mandir, Dwarka)",
    localName: "શ્રી દ્વારકાધીશ મંદિર (જગત મંદિર, દ્વારકા)",
    city: "Dwarka, Gujarat",
    country: "India",
    architecturalStyle: "Chalukya-Solanki Nagara Sandstone Temple (Char Dham)",
    periodEra: "Origins c. 2,200 Years Ago; Present 5-Tier Temple 16th Century",
    confidence: 100,
    summary: "One of the sacred Char Dham and 108 Divya Desams, the Dwarkadhish Temple (Jagat Mandir) stands where Lord Krishna established his ancient golden kingdom of Dwarka along the Arabian Sea. Supported by 72 sculptured limestone pillars across five magnificent tiers, its 78-meter high spire flies a massive 52-yard sacred flag (Dhwaja) that changes five times daily.",
    coordinatesEstimate: { lat: 22.2376, lng: 68.9678 },
    arKeypoints: [
      { id: "pt-1", label: "78-Meter Five-Story Shikhara (Nij Mandir)", featureType: "spire", description: "Soaring 5-story sandstone tower supported by 72 pillars carved without mortar joints.", x: 50, y: 18 },
      { id: "pt-2", label: "52-Yard Sacred Flag (Dhwaja)", featureType: "relief", description: "Massive 52-yard multi-colored flag depicting the sun and moon, hoisted five times a day.", x: 50, y: 8 },
      { id: "pt-3", label: "Moksha Dwar & Swarga Dwar", featureType: "entrance", description: "The two grand gateways: Swarga Dwar (56 steps from the Gomti River) and Moksha Dwar.", x: 42, y: 74 },
      { id: "pt-4", label: "Black Marble Murti of Dwarkadhish", featureType: "statue", description: "Four-armed deity of Lord Krishna holding the Shankha, Chakra, Gada, and Padma.", x: 50, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 400 BC", event: "Original Vajranabha Foundation", description: "According to tradition, Krishna's great-grandson Vajranabha built the first temple over Krishna's residential palace." },
      { yearOrEra: "8th Century", event: "Adi Shankara Consecration", description: "Adi Shankaracharya visited Dwarka and established the Sharda Peeth, designating Dwarka as the western pillar of the Char Dham." },
      { yearOrEra: "16th Century", event: "Reconstruction under Vadodara & Marathas", description: "Expanded and rebuilt in magnificent yellow-gold sandstone following medieval invasions." }
    ],
    architecturalSecrets: [
      "The sacred flag (Dhwaja) measures 52 yards—representing the 52 gates of ancient Dwarka and the 52 administrative Yadava clans under King Krishna.",
      "The flag can be seen from miles away across the Arabian Sea, and uniquely flutters in the direction opposite to the prevailing wind according to local belief."
    ],
    culturalSignificance: "One of the four supreme Char Dham sanctuaries of Hinduism, revered as the western kingdom where Lord Krishna ruled as King of the Universe (Dwarkadhish).",
    visitorTips: [
      "Ascend via Swarga Dwar after taking a holy dip in the sacred Gomti River where it meets the Arabian Sea.",
      "Witness the flag-changing ceremony (Dhwajaa Arohan) held five times a day, sponsored months in advance by devotees."
    ],
    narrationScript: "Standing before the Dwarkadhish Temple on the westernmost tip of Gujarat, you behold one of the four supreme Char Dham shrines of India. Known as Jagat Mandir, or the Universal Temple, this 78-meter sandstone marvel rises where Lord Krishna established his legendary marine capital after leaving Mathura. Look up at the soaring five-tier shikhara: high above flies the famous 52-yard flag, fluttering against the coastal winds as waves from the Arabian Sea lap the sacred Gomti Ghat below.",
    chapters: [
      { id: "chap-1", title: "The Western Char Dham", timestampHint: "0:00", script: "Dwarkadhish stands as the western gateway of spiritual liberation in India.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 52-Yard Sacred Flag", timestampHint: "0:30", script: "Changing five times daily, the massive banner honors the 52 gates of ancient Dwarka.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Between the River and the Sea", timestampHint: "1:00", script: "Ascend 56 steps from the sacred Gomti River into the celestial courtyard.", focusPointId: "pt-3" }
    ]
  },

  "akshardham gandhinagar": {
    name: "Akshardham Mandir (Gandhinagar)",
    localName: "સ્વામિનારાયણ અક્ષરધામ (ગાંધીનગર, ગુજરાત)",
    city: "Gandhinagar, Gujarat",
    country: "India",
    architecturalStyle: "Pure Traditional Nagara Pink Sandstone Architecture",
    periodEra: "Opened October 30, 1992 (Pramukh Swami Maharaj)",
    confidence: 100,
    summary: "Spanning 23 landscaped acres in Gujarat's capital, Akshardham Gandhinagar is a monumental cultural and spiritual complex constructed from 6,000 metric tonnes of pink Bansipaharpur sandstone without structural steel. Enshrining a 7-foot gold-leaf murti of Bhagwan Swaminarayan, it features 97 carved pillars, 17 domes, and the Sahaj Anand water show.",
    coordinatesEstimate: { lat: 23.2323, lng: 72.6738 },
    arKeypoints: [
      { id: "pt-1", label: "108-Foot Pink Sandstone Main Monument", featureType: "spire", description: "Carved from Rajasthani pink sandstone without steel or concrete reinforcement.", x: 50, y: 24 },
      { id: "pt-2", label: "7-Foot Gold-Plated Swaminarayan Murti", featureType: "statue", description: "Enshrined in the inner sanctum sitting in abhaya mudra under an ornate carved canopy.", x: 50, y: 58 },
      { id: "pt-3", label: "Sahajanand Van & Cultural Exhibitions", featureType: "facade", description: "Extensive colonnaded parikrama walkway and multimedia halls depicting timeless Indian values.", x: 68, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "1992", event: "Inauguration by Pramukh Swami Maharaj", description: "Opened after 13 years of meticulous construction by thousands of volunteers and stone artisans." }
    ],
    architecturalSecrets: [
      "Engineered according to ancient Vastu Shastra principles to last a thousand years without a single piece of ferrous metal or iron rebar.",
      "The foundation rests on a massive sand bed engineered to absorb seismic shockwaves during major earthquakes."
    ],
    culturalSignificance: "A premier cultural landmark of Gujarat, celebrating universal humanitarian values, Indian philosophy, and traditional arts.",
    visitorTips: [
      "Do not miss the evening Sat-Chit-Anand water show featuring water fountains, lasers, and fire.",
      "Strict security policy: all electronic devices (phones, cameras) must be safely deposited in free lockers."
    ],
    narrationScript: "Welcome to Swaminarayan Akshardham in Gandhinagar, Gujarat. Consecrated in 1992, this majestic 108-foot pink sandstone monument is a triumph of traditional Indian stone engineering. Built without an ounce of structural steel, 6,000 tonnes of Bansipaharpur sandstone were hand-chiseled into 97 pillars and 17 domes. At its heart sits a luminous 7-foot golden murti of Bhagwan Swaminarayan, radiating peace and spiritual wisdom.",
    chapters: [
      { id: "chap-1", title: "Pink Sandstone Masterpiece", timestampHint: "0:00", script: "Rising 108 feet, Akshardham Gandhinagar honors ancient Indian craftsmanship.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Engineering Without Steel", timestampHint: "0:30", script: "Interlocking sandstone blocks create a seismic-resistant monument built to endure for centuries.", focusPointId: "pt-2" }
    ]
  },

  "sun temple modhera": {
    name: "Sun Temple, Modhera",
    localName: "મોઢેરા સૂર્ય મંદિર (મહેસાણા, ગુજરાત)",
    city: "Modhera / Mehsana, Gujarat",
    country: "India",
    architecturalStyle: "Solanki (Maru-Gurjara) Architecture (UNESCO Tentative)",
    periodEra: "1026–1027 AD (Reign of King Bhima I / Solanki Dynasty)",
    confidence: 100,
    summary: "Built in 1026 AD by King Bhima I of the Solanki dynasty on the banks of the Pushpavati River in Gujarat, the Sun Temple at Modhera is an architectural masterpiece of geometric precision. Designed so that the first rays of the rising sun on equinox days illuminated the diamond crown of Surya, it consists of three distinct components: the stepped Surya Kund tank with 108 shrines, the Sabha Mandapa (Hall of Gatherings), and the Guda Mandapa (Sanctum).",
    coordinatesEstimate: { lat: 23.5835, lng: 72.1332 },
    arKeypoints: [
      { id: "pt-1", label: "Surya Kund Stepped Stepwell Reservoir", featureType: "arch", description: "Immense geometric stepwell tank flanked by 108 miniature carved shrines dedicated to Ganesha, Shiva, and Sitala.", x: 50, y: 78 },
      { id: "pt-2", label: "Sabha Mandapa (52 Carved Torana Pillars)", featureType: "column", description: "Magnificent open octagonal assembly hall with 52 intricately carved pillars representing the 52 weeks of the solar year.", x: 50, y: 48 },
      { id: "pt-3", label: "Astronomically Aligned Guda Mandapa (Sanctum)", featureType: "entrance", description: "Inner sanctum calibrated so sunrise rays during solar equinoxes shone directly onto the deity.", x: 38, y: 35 }
    ],
    historicalTimeline: [
      { yearOrEra: "1026 AD", event: "Consecration by Bhima I", description: "Commissioned to celebrate the golden age of the Solanki dynasty following regional invasions." },
      { yearOrEra: "1960s–Present", event: "National Monument & Solar Village", description: "Protected by the Archaeological Survey of India; in 2022 Modhera became India's first 100% solar-powered village." }
    ],
    architecturalSecrets: [
      "The temple is situated exactly on the Tropic of Cancer (23.6°N latitude), perfectly calibrated for solar astronomy and equinox calculations.",
      "The 52 pillars of the Sabha Mandapa depict intricate bas-relief scenes from the Ramayana and Mahabharata, symbolizing the 52 weeks of the solar calendar year."
    ],
    culturalSignificance: "A pinnacle of Maru-Gurjara architecture in Gujarat, celebrated for the annual Uttarardh Mahotsav dance festival held against the floodlit stepped tank.",
    visitorTips: [
      "Visit at sunrise to see golden light dance across the stepped geometric pyramids of the Surya Kund.",
      "Attend the vibrant Uttarardh Mahotsav dance festival held every January after Makar Sankranti."
    ],
    narrationScript: "You stand before the 1,000-year-old Sun Temple at Modhera, Gujarat—one of the crowning architectural marvels of medieval India. Commissioned in 1026 AD by King Bhima I of the Solanki dynasty, this sanctuary was designed with astronomical precision on the Tropic of Cancer. Gaze down into the spectacular Surya Kund: 108 miniature stone shrines cascade down geometric steps into the turquoise water. Step into the Sabha Mandapa, where 52 hand-carved pillars symbolize the 52 weeks of the solar year.",
    chapters: [
      { id: "chap-1", title: "Geometric Brilliance of Surya Kund", timestampHint: "0:00", script: "Descending steps and 108 shrines create a mesmerizing rhythmic water reflection.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 52 Pillars of Time", timestampHint: "0:30", script: "In the Sabha Mandapa, 52 carved pillars chronicle the journey of the sun through the seasons.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Equinox Solar Alignment", timestampHint: "1:00", script: "Engineered so equinox rays pierced the darkness to bathe the solar deity in golden dawn light.", focusPointId: "pt-3" }
    ]
  },

  "ambaji temple": {
    name: "Ambaji Mata Temple",
    localName: "શ્રી આરાસુરી અંબાજી માતા મંદિર (ગબ્બર ગઢ, બનાસકાંઠા)",
    city: "Ambaji / Banaskantha, Gujarat",
    country: "India",
    architecturalStyle: "Pure White Marble Nagara Shikhara (51 Shakti Peethas)",
    periodEra: "Ancient Vedic Origins; Present Marble Temple Expanded 1970–Present",
    confidence: 100,
    summary: "Located near the source of the sacred Saraswati River in the Aravalli Hills of Gujarat, Ambaji is one of the 51 sacred Shakti Peethas where the Heart of Goddess Sati is believed to have fallen. Exceptionally unique among Indian temples, Ambaji has no anthropomorphic idol—worship is directed exclusively toward the sacred gold-plated Viso Yantra inscribed with Vedic mantras.",
    coordinatesEstimate: { lat: 24.3312, lng: 72.8529 },
    arKeypoints: [
      { id: "pt-1", label: "103-Foot Gold-Plated Marble Shikhara", featureType: "spire", description: "Towering white Makrana marble spire capped with a colossal gold Kalash weighing over three tonnes.", x: 50, y: 22 },
      { id: "pt-2", label: "Sacred Gilded Viso Yantra Sanctum", featureType: "relief", description: "Sacred geometric Yantra with 51 sacred Aksharas worshipped blindfolded by priests.", x: 50, y: 58 },
      { id: "pt-3", label: "Gabbar Hill Akhand Jyoti (Original Seat)", featureType: "arch", description: "Sacred hill 4.5km away where an eternal flame (Akhand Jyoti) burns at the original Shakti Peetha.", x: 68, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Puranic Heart Shakti Peetha", description: "Revered in the Devi Bhagavata Purana as the heart of Mother Sati." },
      { yearOrEra: "Present", event: "Bhadarvi Poonam Mega Pilgrimage", description: "Over 3 million devotees walk on foot (Padyatra) from all over Gujarat during Bhadarvi Poonam." }
    ],
    culturalSignificance: "The supreme mother goddess sanctuary of Western India, welcoming millions of walking pilgrims every year.",
    architecturalSecrets: [
      "Unique in Indian pilgrimage: there is no anthropomorphic idol; devotees revere the sacred Viso Yantra which priests worship blindfolded.",
      "The grand marble temple features a 103-foot-high shikhara capped by a gold Kalash weighing over 3,000 kilograms.",
      "Constructed entirely from white Makrana marble quarried from the same historic veins as the Taj Mahal and Dilwara Temples."
    ],
    visitorTips: [
      "Take the cable car (Udan Khatola) to the summit of nearby Gabbar Hill to visit the original seat and the 51 replica Shakti Peeth temples.",
      "Cameras and photography are prohibited inside the inner gold sanctum."
    ],
    narrationScript: "Welcome to Ambaji Mata Temple, nestled in the ancient Aravalli Hills of North Gujarat. Revered as one of the 51 supreme Shakti Peethas where the heart of Goddess Sati fell, Ambaji holds a unique spiritual secret: inside the golden sanctum, there is no statue of the goddess. Instead, devotion is focused upon the sacred gold Viso Yantra, a geometric emblem of infinite divine energy. Look up at the 103-foot white marble spire crowned with pure gold, gleaming over millions of pilgrims.",
    chapters: [
      { id: "chap-1", title: "The Heart of the Mother", timestampHint: "0:00", script: "Revered as the sacred heart Shakti Peetha, Ambaji pulses with pure maternal grace.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Sacred Viso Yantra", timestampHint: "0:30", script: "Without a stone idol, devotion centers on the sacred geometric golden yantra.", focusPointId: "pt-2" }
    ]
  },

  "siddhivinayak temple mumbai": {
    name: "Shree Siddhivinayak Ganapati Mandir",
    localName: "श्री सिद्धिविनायक गणपती मंदिर (प्रभादेवी, मुंबई)",
    city: "Mumbai, Maharashtra",
    country: "India",
    architecturalStyle: "Multi-Tiered Octagonal Gold-Crowned Temple Architecture",
    periodEra: "Consecrated November 19, 1801 (Laxman Vithu & Deubai Patil)",
    confidence: 100,
    summary: "Located in Prabhadevi, Mumbai, Shree Siddhivinayak is one of India's richest and most famous Ganesha sanctuaries. Originally built in 1801, the modern six-story octagonal temple is crowned by a dazzling gold-plated dome housing the two-and-a-half-foot self-manifested (Swayambhu) black stone idol of Ganesha, distinctively carved with his trunk turned to the right (Siddhi-Vinayak).",
    coordinatesEstimate: { lat: 19.0169, lng: 72.8304 },
    arKeypoints: [
      { id: "pt-1", label: "Multi-Tiered Gold-Plated Apex Dome (Kalash)", featureType: "dome", description: "Central golden dome weighing 12 kilograms rising above the 6-story octagonal marble structure.", x: 50, y: 22 },
      { id: "pt-2", label: "Swayambhu Black Stone Ganesha Murti", featureType: "statue", description: "2.5-foot idol of Ganesha carved from a single black stone with his trunk curved to the right.", x: 50, y: 58 },
      { id: "pt-3", label: "Gold-Plated Inner Sanctum Ceilings & Ashta Vinayak Doors", featureType: "entrance", description: "Wooden doors carved with images of the eight Ashtavinayak temples of Maharashtra.", x: 42, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "1801", event: "Original Foundation", description: "Contractor Laxman Vithu built the shrine, funded by childless devotee Deubai Patil to grant fertility blessings to women." },
      { yearOrEra: "1993", event: "Grand Multilevel Renovation", description: "Architect Sharad Athale redesigned the temple into a monumental six-story octagonal palace of marble and gold." }
    ],
    architecturalSecrets: [
      "Ganesha's trunk is curved to the right (Navasacha Ganapati), signifying uncompromising spiritual discipline and the direct fulfillment of sincere desires (Siddhi).",
      "The sanctum roof and inner doorframes are plated in pure gold gifted by devotees, watched over by Goddesses Riddhi and Siddhi on either side."
    ],
    culturalSignificance: "The spiritual guardian of Mumbai, visited by millions every Tuesday (Angarki Chaturthi) including business leaders, film icons, and ordinary citizens alike.",
    visitorTips: [
      "Visit early on Tuesday morning or pre-book online VIP darshan passes to avoid queues of over 100,000 devotees.",
      "Offer traditional modak sweets and fresh durva grass sacred to Lord Ganesha."
    ],
    narrationScript: "You stand in Prabhadevi, Mumbai, outside the Shree Siddhivinayak Ganapati Mandir—the spiritual heart of India's commercial capital. Founded in 1801, this six-story octagonal marble temple is crowned with a brilliant gold-plated central dome. Inside the sanctum sits the self-manifested black stone idol of Ganesha, affectionately known as 'Navasacha Ganapati'—the Granter of Wishes. Look at the right-turned trunk and the golden gates depicting the Ashtavinayak, welcoming millions into the warm embrace of Ganesha.",
    chapters: [
      { id: "chap-1", title: "The Wish-Fulfilling Guardian of Mumbai", timestampHint: "0:00", script: "For over two centuries, Siddhivinayak has been the spiritual protector of Mumbai.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Unique Right-Turned Trunk", timestampHint: "0:30", script: "Carved from black basalt, the deity's right-curving trunk symbolizes powerful spiritual fulfillment.", focusPointId: "pt-2" }
    ]
  },

  "trimbakeshwar jyotirlinga temple": {
    name: "Trimbakeshwar Shiva Temple",
    localName: "श्री त्र्यંબકેશ્વર જ્યોતિર્લિંગ મંદિર (નાશિક, મહારાષ્ટ્ર)",
    city: "Nashik / Trimbak, Maharashtra",
    country: "India",
    architecturalStyle: "Hemadpanthi Black Basalt Nagara Architecture (12 Jyotirlingas)",
    periodEra: "1755–1786 AD (Commissioned by Peshwa Balaji Baji Rao)",
    confidence: 100,
    summary: "Situated 28 kilometers from Nashik at the foot of Brahmagiri Mountain, Trimbakeshwar is one of the twelve sacred Jyotirlingas of Lord Shiva and the source of the holy Godavari River. Constructed from black basalt by the Maratha Peshwa Balaji Baji Rao, the temple features an extraordinary three-faced lingam embodying the Hindu Trinity—Lord Brahma, Lord Vishnu, and Lord Rudra (Shiva).",
    coordinatesEstimate: { lat: 19.9324, lng: 73.5308 },
    arKeypoints: [
      { id: "pt-1", label: "Massive Black Basalt Shikhara & Spire", featureType: "spire", description: "Hemadpanthi black basalt stone tower carved with intricate figures of rishis, gods, and yakshas.", x: 50, y: 22 },
      { id: "pt-2", label: "The Three-Faced Trimbak Lingam (Trinity)", featureType: "statue", description: "Unique cavity housing three small lingams representing Brahma, Vishnu, and Shiva.", x: 50, y: 62 },
      { id: "pt-3", label: "Kushavarta Sacred Teerth Kund", featureType: "arch", description: "Sacred stone water reservoir where the river Godavari re-emerges and Kumbh Mela rituals occur.", x: 68, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "1755–1786", event: "Peshwa Reconstruction", description: "Third Peshwa Balaji Baji Rao (Nana Saheb) spent 1.6 million rupees to build the massive black basalt stone sanctuary." },
      { yearOrEra: "Periodic", event: "Nashik-Trimbakeshwar Simhastha Kumbh Mela", description: "One of four world Kumbh Mela sites, hosting tens of millions of pilgrims every 12 years." }
    ],
    architecturalSecrets: [
      "Unlike all other eleven Jyotirlingas where Shiva alone is represented, Trimbakeshwar is the only Jyotirlinga with three faces representing the Trimurti: Brahma, Vishnu, and Mahesh.",
      "The famous diamond-studded 'Nassak Diamond' (now in a private collection) originally served as the sparkling eye of the Shiva idol before being looted in the Anglo-Maratha wars."
    ],
    culturalSignificance: "Revered as the origin of the sacred Godavari River and a supreme center for ancestral rites (Narayan Nagbali and Pitru Shraddha).",
    visitorTips: [
      "Devotees take a sacred holy bath at the nearby Kushavarta Kund before entering the temple.",
      "Hike up Brahmagiri Hill (750 steps) to see Gangadwar, where the river Godavari drops from the cliffs."
    ],
    narrationScript: "You stand before the magnificent black stone walls of the Trimbakeshwar Jyotirlinga Temple at the foot of Brahmagiri Mountain in Maharashtra. Built in the 18th century by the Maratha Peshwas from black volcanic basalt, this sanctuary houses one of the 12 sacred Jyotirlingas. But Trimbakeshwar is unique in all the world: inside the sanctum, the lingam has three faces, representing Brahma the Creator, Vishnu the Preserver, and Shiva the Transformer.",
    chapters: [
      { id: "chap-1", title: "The Trinity Jyotirlinga", timestampHint: "0:00", script: "Trimbakeshwar is the only Jyotirlinga embodying Brahma, Vishnu, and Shiva together.", focusPointId: "pt-2" },
      { id: "chap-2", title: "Black Basalt of the Peshwas", timestampHint: "0:30", script: "Peshwa Nana Saheb spent thirty years crafting this black volcanic stone fortress of faith.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Cradle of the Godavari", timestampHint: "1:00", script: "Here at the foot of Brahmagiri, the holy river Godavari begins its journey to the sea.", focusPointId: "pt-3" }
    ]
  },

  "omkareshwar jyotirlinga temple": {
    name: "Omkareshwar Jyotirlinga Temple",
    localName: "श्री ओंकारेश्वर ज्योतिर्लिंग मंदिर (मांधाता, मध्य प्रदेश)",
    city: "Khandwa / Narmada, Madhya Pradesh",
    country: "India",
    architecturalStyle: "Five-Story Nagara Stone Architecture (Island Shaped Like OM)",
    periodEra: "Ancient Roots; Present Nagara Shrines 11th–18th Century",
    confidence: 100,
    summary: "Situated on the sacred island of Mandhata in the holy Narmada River, Omkareshwar is one of the twelve revered Jyotirlingas of Lord Shiva. The island itself is naturally shaped in the sacred Hindu syllable 'OM' (ॐ). The multi-tiered stone temple features five levels of shrines supported by intricately carved stone pillars.",
    coordinatesEstimate: { lat: 22.2458, lng: 76.1517 },
    arKeypoints: [
      { id: "pt-1", label: "Five-Tiered Stone Temple Shikhara", featureType: "spire", description: "Stepped Nagara temple tower rising over the gorge of the sacred Narmada River.", x: 50, y: 22 },
      { id: "pt-2", label: "Holy Omkareshwar Jyotirlinga Sanctum", featureType: "statue", description: "Sacred self-manifested lingam naturally fed with water from the Narmada River.", x: 50, y: 62 },
      { id: "pt-3", label: "Narmada River Suspension Footbridge (Jhula Pul)", featureType: "arch", description: "Pedestrian bridge spanning the river gorge connecting the mainland to the OM-shaped island.", x: 62, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "King Mandhata Penance", description: "Ikshvaku King Mandhata performed intense tapasya on this island, prompting Shiva to manifest as the Jyotirlinga." },
      { yearOrEra: "11th–18th Century", event: "Paramara & Holkar Patronage", description: "Paramara rulers and later Maharani Ahilyabai Holkar expanded the shrines and river ghats." }
    ],
    architecturalSecrets: [
      "Aerial topographical photography confirms that the natural mountain contour of Mandhata Island in the Narmada River forms the visual glyph of the sacred symbol 'OM' (ॐ).",
      "Omkareshwar is paired with the Mamleshwar (Amareshwar) temple on the south bank: tradition dictates that visiting both completes the full Jyotirlinga pilgrimage."
    ],
    culturalSignificance: "A central stop on the sacred Narmada Parikrama pilgrimage, where devotees circumambulate the entire 1,312-kilometer length of the Narmada River on foot.",
    visitorTips: [
      "Cross to the island either via the scenic suspension footbridge or by taking a traditional wooden boat across the Narmada River.",
      "Complete the 7-kilometer parikrama around the perimeter of the OM-shaped island."
    ],
    narrationScript: "You gaze upon Omkareshwar Jyotirlinga, situated on the sacred island of Mandhata in the holy Narmada River. From above, the island naturally outlines the sacred Sanskrit symbol 'OM'. As one of the twelve revered Jyotirlingas, Omkareshwar has welcomed seekers of liberation for thousands of years. Cross the swinging footbridge above the green river waters to enter the five-tiered stone sanctuary of Lord Shiva.",
    chapters: [
      { id: "chap-1", title: "The Island of OM", timestampHint: "0:00", script: "Nature shaped this sacred island in the Narmada into the cosmic syllable OM.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Eternal River Sanctum", timestampHint: "0:30", script: "Five tiers of stone shrines echo with the chanting of ancient Shiva mantras.", focusPointId: "pt-1" }
    ]
  },

  "bhimashankar jyotirlinga temple": {
    name: "Bhimashankar Jyotirlinga Temple",
    localName: "श्री भीमाशंकर ज्योतिर्लिंग मंदिर (पुणे, महाराष्ट्र)",
    city: "Pune / Sahyadri, Maharashtra",
    country: "India",
    architecturalStyle: "Nagara & Hemadpanthi Architecture (Source of Bhima River)",
    periodEra: "c. 13th Century / Sabhamandapa 18th Century (Nana Phadnavis)",
    confidence: 100,
    summary: "Nestled in the lush, mist-shrouded Sahyadri mountains at the source of the holy Bhima River, Bhimashankar is the sixth sacred Jyotirlinga of Lord Shiva. Built in the elegant Nagara style from dark volcanic stone, it features a low Nagara shikhara, carved wooden sabhamandapa ceilings, and an ornate Roman Portuguese cast-bronze bell.",
    coordinatesEstimate: { lat: 19.0722, lng: 73.5358 },
    arKeypoints: [
      { id: "pt-1", label: "Nagara Black Basalt Shikhara Spire", featureType: "spire", description: "Stepped stone tower rising amidst the dense evergreen forests of the Western Ghats.", x: 50, y: 24 },
      { id: "pt-2", label: "Swayambhu Motiswar Jyotirlinga", featureType: "statue", description: "Massive self-manifested lingam located in a recessed stone floor, surrounded by water.", x: 50, y: 62 },
      { id: "pt-3", label: "Historic Portuguese War Trophy Bell", featureType: "arch", description: "Huge cast-bronze bell with Roman Catholic cross relief, captured by Chimaji Appa in the Battle of Vasai (1739).", x: 68, y: 52 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 13th Century", event: "Medieval Sanctum", description: "Built in early Hemadpanthi style over the spot where Shiva vanquished the demon Bhima." },
      { yearOrEra: "18th Century", event: "Nana Phadnavis Renovation", description: "Peshwa statesman Nana Phadnavis rebuilt the grand shikhara and added the wooden sabhamandap." }
    ],
    architecturalSecrets: [
      "The massive bronze church bell hanging in the entrance courtyard was won as a trophy of war by Chimaji Appa (brother of Peshwa Baji Rao I) after defeating the Portuguese at Vasai Fort in 1739.",
      "The temple is surrounded by the Bhimashankar Wildlife Sanctuary, home to the rare and colorful Malabar Giant Squirrel (Shekru), the state animal of Maharashtra."
    ],
    culturalSignificance: "Revered as the place where Lord Shiva destroyed the tyrannical demon king Bhima, son of Kumbhakarna, with his cosmic trident.",
    visitorTips: [
      "Visit during the monsoon season (July–September) when waterfalls cascade down the surrounding cliffs and fog wraps the stone spires.",
      "Explore the origin point of the Bhima River located just a short walk through the forest behind the temple."
    ],
    narrationScript: "Step into the mist-covered forests of the Sahyadri mountains at Bhimashankar. Surrounded by ancient trees and cascading waterfalls, this black stone sanctuary houses the sixth of the twelve sacred Jyotirlingas. Here, Lord Shiva manifested to protect his devotees from the demon Bhima. Look up in the courtyard to discover an extraordinary historical relic: a giant Portuguese bronze church bell captured in battle during the 18th century, still tolling across the mountain wilderness.",
    chapters: [
      { id: "chap-1", title: "Sanctuary in the Cloud Forest", timestampHint: "0:00", script: "Bhimashankar rests deep in the Western Ghats at the birthplace of the Bhima River.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 1739 Portuguese Bell", timestampHint: "0:30", script: "A captured bronze bell from Vasai Fort hangs as a unique trophy of Maratha history.", focusPointId: "pt-3" }
    ]
  },

  "grishneshwar jyotirlinga temple": {
    name: "Grishneshwar Jyotirlinga Temple (Verul)",
    localName: "श्री घृष्णेश्वर ज्योतिर्लिंग मंदिर (वेरूळ, छत्रपती संभाजीनगर)",
    city: "Ellora / Chhatrapati Sambhaji Nagar, Maharashtra",
    country: "India",
    architecturalStyle: "South Indian Nagara Red Basalt Architecture (12th Jyotirlinga)",
    periodEra: "18th Century (Reconstructed by Maharani Ahilyabai Holkar)",
    confidence: 100,
    summary: "Located less than a kilometer from the famous UNESCO World Heritage Ellora Caves, Grishneshwar (also called Ghrushneshwar) is the twelfth and final Jyotirlinga described in the Shiva Purana. Reconstructed in magnificent red volcanic basalt stone by Queen Ahilyabai Holkar of Indore, this five-tiered temple features intricately carved friezes of the Dashavatara and a golden Kalash.",
    coordinatesEstimate: { lat: 20.0242, lng: 75.1706 },
    arKeypoints: [
      { id: "pt-1", label: "Five-Tiered Red Basalt Shikhara Spire", featureType: "spire", description: "Stepped red stone tower tapering gracefully toward a golden pinnacle.", x: 50, y: 22 },
      { id: "pt-2", label: "Intricate Dashavatara Carved Wall Friezes", featureType: "relief", description: "Masterfully sculpted red stone panels illustrating the ten avatars of Lord Vishnu and Shiva legends.", x: 50, y: 52 },
      { id: "pt-3", label: "Shivalaya Sacred Water Reservoir", featureType: "arch", description: "Historic stone stepwell tank connected to the miraculous healing legends of the temple.", x: 68, y: 76 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Puranic Legend of Devotee Kusuma", description: "Named in the Shiva Purana after the virtuous woman Grishna whose devotion revived her drowned son." },
      { yearOrEra: "18th Century", event: "Reconstruction by Ahilyabai Holkar", description: "Maharani Ahilyabai Holkar of Indore rebuilt the present red basalt monument following medieval destructions." }
    ],
    architecturalSecrets: [
      "Grishneshwar is the smallest in physical scale among the twelve Jyotirlingas, yet celebrated as one of the most artistically refined in its stone carving.",
      "The temple is built from red volcanic rock quarried locally, giving it a distinctive warm terra-cotta hue unlike the dark basalt of neighboring Ellora."
    ],
    culturalSignificance: "Completes the sacred cycle of the 12 Jyotirlingas of Lord Shiva; visiting Grishneshwar alongside the nearby Kailasa Cave Temple (Cave 16) is a pinnacle spiritual experience.",
    visitorTips: [
      "Combine your visit with the world-famous rock-cut Kailasa Temple at Ellora Caves located just 1km away.",
      "Male devotees must remove shirts before entering the inner sanctum to touch the sacred Jyotirlinga."
    ],
    narrationScript: "You stand before Grishneshwar, the twelfth and final Jyotirlinga described in the ancient Shiva Purana. Situated just footsteps from the rock-cut wonders of Ellora in Maharashtra, this temple was rebuilt in warm red basalt stone by the visionary queen Ahilyabai Holkar. Gaze at the five-tiered shikhara and the delicate Dashavatara carvings along the walls, marking the triumphant completion of the twelve sacred light shrines of Lord Shiva.",
    chapters: [
      { id: "chap-1", title: "The Twelfth Jyotirlinga", timestampHint: "0:00", script: "Grishneshwar completes the sacred pilgrimage of the twelve Jyotirlingas of India.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Queen Ahilyabai's Red Stone Jewel", timestampHint: "0:30", script: "Rebuilt with devotion in warm red volcanic stone, standing beside the wonders of Ellora.", focusPointId: "pt-2" }
    ]
  },

  "mallikarjuna jyotirlinga temple": {
    name: "Mallikarjuna Jyotirlinga Temple (Srisailam)",
    localName: "శ్రీ భ్రమరాంబ మల్లికార్జున స్వామి దేవస్థానం (శ్రీశైలం)",
    city: "Srisailam, Andhra Pradesh",
    country: "India",
    architecturalStyle: "Vijayanagara & Kakatiya Dravidian Fortified Temple",
    periodEra: "c. 2nd Century AD (Satavahanas; Present Walls 14th Century Vijayanagara)",
    confidence: 100,
    summary: "Perched high on the Nallamala Hills along the Krishna River in Andhra Pradesh, Mallikarjuna Swamy Temple at Srisailam is extraordinarily rare: it is one of only two places in the world that is simultaneously a sacred Jyotirlinga of Lord Shiva and an ancient Maha Shakti Peetha (Goddess Bhramaramba). Enclosed by colossal stone fortress ramparts carved with thousands of relief panels, it was patronized by the Vijayanagara emperors and Chhatrapati Shivaji Maharaj.",
    coordinatesEstimate: { lat: 16.0739, lng: 78.8687 },
    arKeypoints: [
      { id: "pt-1", label: "Colossal Fortified Stone Prakara Ramparts", featureType: "facade", description: "Massive 6-meter high stone enclosure walls carved with 3,200 continuous relief panels of warriors, elephants, and epic lore.", x: 50, y: 78 },
      { id: "pt-2", label: "Golden Vimana of Lord Mallikarjuna", featureType: "spire", description: "Gold-plated temple tower rising over the inner sanctum housing the sacred Shiva Jyotirlinga.", x: 50, y: 24 },
      { id: "pt-3", label: "Bhramaramba Devi Maha Shakti Peetha", featureType: "entrance", description: "Ancient sanctum honoring the Mother Goddess where Sati's upper lip is believed to have fallen.", x: 68, y: 52 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 2nd Century AD", event: "Satavahana & Ikshvaku Inscriptions", description: "Mentioned as a prominent pilgrimage center in early classical inscriptions." },
      { yearOrEra: "1398 AD", event: "Reddi & Vijayanagara Golden Age", description: "Emperor Harihara II and King Prolaya Vema Reddi constructed the grand stepped pathways (Sopana Margas) and Mukha Mandapam." },
      { yearOrEra: "1677 AD", event: "Chhatrapati Shivaji Maharaj Visit", description: "The legendary Maratha king meditated here and built the southern gopuram of the temple." }
    ],
    architecturalSecrets: [
      "Srisailam is unique in all of India: it is simultaneously one of the 12 Jyotirlingas and one of the 18 Maha Shakti Peethas (Ashtadasa Shakti Peethas).",
      "The massive outer stone walls are over 2,000 feet in perimeter and contain over 3,000 individual carved panels depicting hunts, cavalry battles, and the Ramayana."
    ],
    culturalSignificance: "Revered as the 'Kashi of the South', praised in the Mahabharata and visited by Adi Shankaracharya, who composed his famous Sivananda Lahari hymn here.",
    visitorTips: [
      "Devotees are permitted to perform Sparsha Darshan (physically touching the Shiva lingam) during designated early morning hours.",
      "Take the ropeway cable car down to Pathala Ganga along the Krishna River."
    ],
    narrationScript: "You stand before the fortified stone ramparts of Srisailam Mallikarjuna in the Nallamala Hills of Andhra Pradesh. High above the Krishna River, this ancient sanctuary holds a sacred distinction shared with almost no other place on Earth: it is both one of the 12 sacred Jyotirlingas and one of the 18 supreme Maha Shakti Peethas. Walk past the massive fortress walls, carved with thousands of Vijayanagara warriors and stone elephants, to enter the golden court of Lord Mallikarjuna.",
    chapters: [
      { id: "chap-1", title: "Confluence of Shiva and Shakti", timestampHint: "0:00", script: "Srisailam unites the divine masculine and feminine as both Jyotirlinga and Shakti Peetha.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Fortress of Vijayanagara", timestampHint: "0:30", script: "Massive stone ramparts recount epic battles, praised by Adi Shankara and Shivaji Maharaj.", focusPointId: "pt-1" }
    ]
  },

  "chennakeshava temple belur": {
    name: "Chennakeshava Temple, Belur",
    localName: "ಶ್ರೀ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ (ಬೇಲೂರು, ಹಾಸನ, ಕರ್ನಾಟಕ)",
    city: "Belur / Hassan, Karnataka",
    country: "India",
    architecturalStyle: "Hoysala Chloritic Schist Soapstone Architecture (UNESCO World Heritage)",
    periodEra: "Commissioned 1117 AD (King Vishnuvardhana / 103 Years to Complete)",
    confidence: 100,
    summary: "Inscribed on the UNESCO World Heritage list in 2023 as part of the Sacred Ensembles of the Hoysalas, the Chennakeshava Temple at Belur is one of the greatest artistic triumphs in Indian architectural history. Commissioned in 1117 AD by Hoysala King Vishnuvardhana to commemorate military victory, this star-shaped soapstone temple took 103 years and three generations of master sculptors to complete, renowned for 42 Madanika (bracket celestial dancer) figures with microscopic filigree stone lace.",
    coordinatesEstimate: { lat: 13.1623, lng: 75.8643 },
    arKeypoints: [
      { id: "pt-1", label: "Star-Shaped Jagati Platform & Elephant Friezes", featureType: "arch", description: "Stellate stone platform base encircled by 650 individually carved stone elephants, each with unique postures.", x: 50, y: 78 },
      { id: "pt-2", label: "The 42 Madanika Bracket Dancers (Silabalikas)", featureType: "statue", description: "Microscopically carved chloritic schist celestial dancers capturing classical Bharatanatyam and Natya Shastra poses.", x: 50, y: 48 },
      { id: "pt-3", label: "Mohini & Narasimha Carved Lathe-Turned Pillars", featureType: "column", description: "Pillars rotated on ancient stone lathes to achieve a glass-like polish, including the movable Narasimha Pillar.", x: 42, y: 62 },
      { id: "pt-4", label: "Dravidian Raja Gopuram Gateway", featureType: "spire", description: "Towering 7-tiered entrance gateway added during the Vijayanagara period.", x: 30, y: 35 }
    ],
    historicalTimeline: [
      { yearOrEra: "1117 AD", event: "Consecration by Vishnuvardhana", description: "King Vishnuvardhana commissioned the temple following his victory over the Cholas at the Battle of Talakad." },
      { yearOrEra: "1220 AD", event: "Grand Completion", description: "Three generations of master sculptors (including Ruvari Mallitamma and Dasoja) completed the intricate marvel." },
      { yearOrEra: "2023", event: "UNESCO World Heritage Inscription", description: "Inscribed as a UNESCO World Heritage Site honoring the supreme architectural mastery of the Hoysala dynasty." }
    ],
    architecturalSecrets: [
      "The stone used is chloritic schist (soapstone), which is soft and easily chiseled when freshly quarried, but permanently oxidizes and hardens upon exposure to air.",
      "The legendary 'Darpana Sundari' (Lady with the Mirror) Madanika bracket is so precisely carved that beads of water droplets and tiny hollow curls of hair can be seen through microscopic undercutting."
    ],
    culturalSignificance: "The artistic pinnacle of medieval Hoysala architecture, celebrating music, classical dance, and Vaishnava devotional poetry.",
    visitorTips: [
      "Hire an authorized ASI guide with a flashlight to illuminate the lathe-turned pillars and the astonishing 10-foot ceiling dome inside the navaranga.",
      "Combine your visit with the Hoysaleswara Temple at Halebidu, located just 16 kilometers away."
    ],
    narrationScript: "You stand before the Chennakeshava Temple in Belur, Karnataka—a UNESCO World Heritage wonder of the Hoysala Empire. Completed over 103 years starting in 1117 AD, this star-shaped temple was sculpted from fine-grained soapstone. Run your eyes along the base: over 650 unique stone elephants march along the foundation. Look up beneath the eaves at the 42 world-famous Madanika bracket dancers: chiseled with such microscopic perfection that individual stone bead necklaces and mirror reflections appear as light and delicate as lace.",
    chapters: [
      { id: "chap-1", title: "103 Years of Hoysala Genius", timestampHint: "0:00", script: "Three generations of master sculptors dedicated their lives to create this soapstone masterpiece.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 42 Madanika Dancers", timestampHint: "0:30", script: "Celestial dancers chiseled in soapstone display classical dance poses with unmatched delicate lace.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Lathe-Turned Pillars", timestampHint: "1:00", script: "Ancient stone lathes turned solid rock into gleaming, polished columns that support the central dome.", focusPointId: "pt-3" }
    ],
    unescoYear: 2023,
    unescoId: "1670",
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Sacred Ensembles of the Hoysalas - Belur",
      inscriptionYear: 2023,
      criteria: "(i)(ii)(iv)",
      category: "Cultural",
      unescoId: "1670"
    }
  },

  "hoysaleswara temple halebidu": {
    name: "Hoysaleswara Temple, Halebidu",
    localName: "ಶ್ರೀ ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಾಲಯ (ಹಳೇಬೀಡು, ಕರ್ನಾಟಕ)",
    city: "Halebidu / Hassan, Karnataka",
    country: "India",
    architecturalStyle: "Twin-Shrined Stellate Hoysala Soapstone Architecture (UNESCO)",
    periodEra: "c. 1121–1160 AD (Reign of King Vishnuvardhana & Narasimha I)",
    confidence: 100,
    summary: "Inscribed on the UNESCO World Heritage list in 2023, the Hoysaleswara Temple at Halebidu (ancient Dwarasamudra) is a twin-sanctuary marvel dedicated to Lord Shiva. Elevated on a star-shaped soapstone platform, its exterior walls display over 240 sprawling, continuous horizontal relief friezes of celestial dancers, rearing mythical Yali beasts, and dynamic battlefield scenes from the Ramayana and Mahabharata, acclaimed as the finest relief carving in Asian antiquity.",
    coordinatesEstimate: { lat: 13.2162, lng: 75.9936 },
    arKeypoints: [
      { id: "pt-1", label: "Twin Stellate Dvikuta Sanctuaries", featureType: "spire", description: "Twin star-shaped temples dedicated to Hoysaleswara and Shantaleswara on a single platform.", x: 50, y: 35 },
      { id: "pt-2", label: "Continuous 240-Meter Mythological Relief Wall", featureType: "relief", description: "Eight horizontal bands of detailed relief friezes running continuously around the entire temple exterior.", x: 50, y: 65 },
      { id: "pt-3", label: "Monolithic Monolithic Nandi Pavilions", featureType: "statue", description: "Two massive polished black soapstone Nandi bulls seated before the twin sanctums.", x: 68, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "1121 AD", event: "Commission by Ketamalla", description: "Hoysala civic official Ketamalla commissioned the grand twin temple during the reign of King Vishnuvardhana." },
      { yearOrEra: "1311 & 1326 AD", event: "Sack of Dwarasamudra", description: "Plundered during the Delhi Sultanate invasions of Malik Kafur, after which the capital was named 'Halebidu' (the Old Ruin)." },
      { yearOrEra: "2023", event: "UNESCO World Heritage Recognition", description: "Inscribed alongside Belur as part of the Sacred Ensembles of the Hoysalas." }
    ],
    architecturalSecrets: [
      "The temple has over 20,000 individually carved mythological figures across its outer perimeter walls—each carved with minute jewelry, dynamic musculature, and facial expressions.",
      "The lowest band features 1,248 stone elephants, followed above by lions (courage), floral scrolls (creativity), horses (speed), and mythological Makaras."
    ],
    culturalSignificance: "The supreme showcase of secular and religious medieval life in South India, praised by 19th-century architectural historian James Fergusson as a triumph of stone sculpture exceeding Greek and Gothic works in richness of ornament.",
    visitorTips: [
      "Spend ample time walking clockwise around the outer star-shaped platform to read the stone comic strip of the Mahabharata.",
      "Visit the adjacent Archaeological Museum to see recovered Hoysala Jain and Hindu stone sculptures."
    ],
    narrationScript: "Welcome to Hoysaleswara Temple in Halebidu, Karnataka—a UNESCO World Heritage treasure. Completed in the 12th century as the imperial state temple of the Hoysala Empire, this twin-sanctuary complex is hewn entirely from dark soapstone. Stand before the exterior walls: eight continuous horizontal stone bands wrap around the entire building, depicting over 1,200 elephants, galloping cavalry, and epic duels between Arjuna and Karna. Every square inch of stone was transformed by master artisans into a living symphony of art.",
    chapters: [
      { id: "chap-1", title: "Twin Shrines of Halebidu", timestampHint: "0:00", script: "Dedicated to Shiva, twin sanctuaries rise side-by-side upon an interconnected star platform.", focusPointId: "pt-1" },
      { id: "chap-2", title: "240 Meters of Epic Stone", timestampHint: "0:30", script: "Over twenty thousand sculpted figures bring the Mahabharata and Ramayana to life.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Colossal Nandi Bulls", timestampHint: "1:00", script: "Polished black soapstone bulls keep eternal vigil before the sacred twin sanctuaries.", focusPointId: "pt-3" }
    ],
    unescoYear: 2023,
    unescoId: "1670",
    unescoInfo: {
      isWorldHeritage: true,
      officialName: "Sacred Ensembles of the Hoysalas - Halebidu",
      inscriptionYear: 2023,
      criteria: "(i)(ii)(iv)",
      category: "Cultural",
      unescoId: "1670"
    }
  },

  "murudeshwar temple": {
    name: "Murudeshwar Temple (Lord Shiva)",
    localName: "ಶ್ರೀ ಮುರುಡೇಶ್ವರ ದೇವಾಲಯ (ಉತ್ತರ ಕನ್ನಡ, ಕರ್ನಾಟಕ)",
    city: "Bhatkal / Murudeshwar, Karnataka",
    country: "India",
    architecturalStyle: "Dravidian Coastal Peninsula Architecture with Colossal Statue",
    periodEra: "Ancient Atma Linga Roots; Modern 20-Story Gopura Completed 2008",
    confidence: 100,
    summary: "Perched dramatically on Kanduka Hill surrounded by the Arabian Sea on three sides in coastal Karnataka, Murudeshwar is famous for the world's second tallest statue of Lord Shiva (123 feet / 37.5m) and the towering 20-story Raja Gopura (249 feet / 76m), equipped with a modern high-speed elevator taking visitors to observation decks overlooking the ocean.",
    coordinatesEstimate: { lat: 14.0942, lng: 74.4899 },
    arKeypoints: [
      { id: "pt-1", label: "Colossal 123-Foot Seated Shiva Statue", featureType: "statue", description: "World's second-tallest Shiva statue, glistening in silver and gold paint against the blue Arabian Sea.", x: 50, y: 28 },
      { id: "pt-2", label: "20-Story Raja Gopura (249ft / 76m)", featureType: "spire", description: "Towering South Indian gateway tower with high-speed elevator to the 18th floor observation deck.", x: 50, y: 15 },
      { id: "pt-3", label: "Kanduka Hill Coastal Peninsula", featureType: "facade", description: "Rugged promontory flanked by crashing sea waves on three sides.", x: 62, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Atma Linga Legend", description: "According to the Ramayana, Ravana threw the cloth covering the sacred Atma Linga here at Kanduka Giri." },
      { yearOrEra: "2008", event: "Completion of Colossal Statue & 249ft Gopura", description: "Philanthropist R. N. Shetty completed the iconic 123ft Shiva statue and 20-story elevator gopura." }
    ],
    architecturalSecrets: [
      "The 123-foot Shiva statue took two years to sculpt by Kashinath Sthapati and was positioned deliberately to face the sun so that it shines in golden light throughout the day.",
      "The 249-foot Raja Gopura is the only major Hindu temple tower in the world featuring high-speed interior passenger elevators taking visitors up 18 stories to panoramic viewing windows."
    ],
    culturalSignificance: "Associated with the legendary Gokarna Atma Linga story, attracting millions of coastal pilgrims and international tourists.",
    visitorTips: [
      "Take the lift to the 18th floor of the Raja Gopura for breathtaking 360-degree aerial views of the Arabian Sea and the 123ft Shiva statue.",
      "Visit the subterranean cave beneath the giant statue to see life-sized animated dioramas explaining the history of the temple."
    ],
    narrationScript: "Welcome to Murudeshwar on the sun-drenched coast of Karnataka. Surrounded by the Arabian Sea on three sides, Kanduka Hill is crowned by one of the most astonishing sights in modern India: a colossal 123-foot statue of Lord Shiva seated in deep meditation against the ocean horizon. Step beneath the soaring 249-foot Raja Gopura, take the elevator up 18 stories, and look out over crashing sea waves and coastal palms in this breathtaking coastal sanctuary.",
    chapters: [
      { id: "chap-1", title: "The Colossus of the Arabian Sea", timestampHint: "0:00", script: "Rising 123 feet into the sky, Lord Shiva gazes out over the sparkling ocean waters.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 20-Story Elevator Gopura", timestampHint: "0:30", script: "Modern engineering meets ancient temple architecture with high-speed elevator viewing decks.", focusPointId: "pt-2" }
    ]
  },

  "sabarimala ayyappa temple": {
    name: "Sabarimala Sree Dharma Sastha Temple",
    localName: "ശബരിമല ശ്രീ ധർമ്മശാസ്താ ക്ഷേത്രം (പത്തനംതിട്ട, കേരളം)",
    city: "Pathanamthitta / Periyar Tiger Reserve, Kerala",
    country: "India",
    architecturalStyle: "Traditional Kerala Timber & Copper-Plated Hill Temple",
    periodEra: "Ancient Origins; Consecrated by Sage Parashurama (Puranic)",
    confidence: 100,
    summary: "Perched 4,000 feet (1,260m) high amidst the eighteen dense forested hills of the Periyar Tiger Reserve in Kerala, Sabarimala is one of the largest annual pilgrimage sites in the world, drawing an estimated 40 to 50 million devotees. Dedicated to Lord Ayyappa (Dharma Sastha), the pilgrimage requires 41 days of strict spiritual austerity (Vratham) and ascending the sacred 18 gold-clad stone steps (Pathinettam Padi).",
    coordinatesEstimate: { lat: 9.4406, lng: 77.0817 },
    arKeypoints: [
      { id: "pt-1", label: "The 18 Sacred Gold-Clad Steps (Pathinettam Padi)", featureType: "entrance", description: "Steep flight of eighteen gold-covered holy steps climbed only by devotees carrying the Irumudi kettu.", x: 50, y: 72 },
      { id: "pt-2", label: "Gold-Roofed Sannidhanam (Sanctum of Ayyappa)", featureType: "spire", description: "Copper and gold-plated temple roof housing the seated panchaloha idol of Lord Ayyappa.", x: 50, y: 28 },
      { id: "pt-3", label: "Makaravilakku Celestial Horizon", featureType: "arch", description: "The mountain horizon of Ponnambalamedu where the sacred divine light appears on Makaravillakku day.", x: 68, y: 44 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Parashurama Installation", description: "According to tradition, sage Parashurama consecrated the Sastha idol on the summit of Sabarimala." },
      { yearOrEra: "1950 & 1985", event: "Restoration & Golden Steps", description: "The sacred 18 granite steps were plated in panchaloha and gold leaf to preserve them from devotee friction." }
    ],
    architecturalSecrets: [
      "Each of the 18 sacred steps symbolizes a specific spiritual threshold: the first 5 represent the human senses (Indriyas), the next 8 represent the passions (Ragas), the next 3 represent the Gunas, and the final 2 represent Vidya and Avidya.",
      "The temple is built without caste or religious barriers: worshippers of all faiths wear black or saffron garments and greet each other as 'Swami', embodying universal spiritual equality."
    ],
    culturalSignificance: "A world-famous pilgrimage phenomenon of spiritual discipline, unity, and surrender to divine truth, centered on the phrase 'Tat Tvam Asi' (Thou Art That).",
    visitorTips: [
      "Pilgrims traditionally observe 41 days of celibacy, vegetarianism, and prayer before undertaking the trek through the forest from Pamba.",
      "The temple is open primarily during the Mandala Pooja season (mid-November to late December) and Makaravilakku (January)."
    ],
    narrationScript: "High in the rainforest-cloaked Western Ghats of Kerala stands Sabarimala, sanctuary of Lord Ayyappa. Each winter, over forty million pilgrims clad in black garments undertake an arduous trek through mountain forests, carrying the sacred Irumudi bundle upon their heads. Stand before the Pathinettam Padi—the eighteen gold-covered steps. Only those who have observed 41 days of pure spiritual austerity may climb these steps to gaze upon the golden sanctum where the words 'Tat Tvam Asi' remind every pilgrim: That Divine Essence is Within You.",
    chapters: [
      { id: "chap-1", title: "The 41-Day Sacred Pilgrimage", timestampHint: "0:00", script: "Millions unite in black robes, chanting 'Swamiye Saranam Ayyappa' through the mountain mist.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 18 Golden Steps", timestampHint: "0:30", script: "Each step represents a spiritual victory over the senses, ego, and worldly desires.", focusPointId: "pt-1" },
      { id: "chap-3", title: "Tat Tvam Asi", timestampHint: "1:00", script: "Above the sanctum, ancient Upanishadic truth proclaims the divinity in every human soul.", focusPointId: "pt-2" }
    ]
  },

  "guruvayur temple": {
    name: "Guruvayur Sri Krishna Temple",
    localName: "ഗുരുവായൂർ ശ്രീകൃഷ്ണ ക്ഷേത്രം (തൃശ്ശൂർ, കേരളം)",
    city: "Guruvayur / Thrissur, Kerala",
    country: "India",
    architecturalStyle: "Pure Classical Kerala Wood & Laterite Temple Architecture",
    periodEra: "Ancient Vedic Origins; Recorded in 14th Century Tamil Kokasandesa",
    confidence: 100,
    summary: "Revered throughout India as 'Bhuloka Vaikunta' (The Earthly Abode of Lord Vishnu), the Guruvayur Temple in Kerala is dedicated to Lord Krishna in his childhood infant form (Guruvayurappan). The sanctum houses the sacred four-armed idol of Vishnu carved from rare black Patala Anjanam stone, famous for traditional mural paintings, 33-meter gold flagstaff, and the nearby Punnathur Kotta elephant sanctuary housing over 40 temple tuskers.",
    coordinatesEstimate: { lat: 10.5946, lng: 76.0409 },
    arKeypoints: [
      { id: "pt-1", label: "Golden 33-Meter Dhwajasthambham (Flagstaff)", featureType: "column", description: "Colossal teak flagstaff encased in pure gold leaf rising before the Chuttambalam cloisters.", x: 50, y: 35 },
      { id: "pt-2", label: "Deepastambham (Pillar of 1,000 Oil Lamps)", featureType: "spire", description: "Magnificent 24-foot brass multi-tiered lamp tree illuminated with sesame oil during evening prayers.", x: 50, y: 72 },
      { id: "pt-3", label: "Copper-Roofed Sree Kovil Sanctum", featureType: "entrance", description: "Square sanctum housing the sacred Patala Anjanam stone idol with four divine weapons.", x: 42, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Consecration by Guru and Vayu", description: "According to legend, Guru (preceptor of gods) and Vayu (wind god) installed the idol saved from submerged Dwarka." },
      { yearOrEra: "1586 AD", event: "Narayaneeyam Composition", description: "Poet Melpathur Narayana Bhattathiri composed the immortal Sanskrit epic Narayaneeyam here, curing his paralysis." }
    ],
    architecturalSecrets: [
      "The deity is carved from Patala Anjanam (magnetic bismuth stone), which possesses extraordinary therapeutic and mineral qualities when bathed in herbal oils.",
      "The temple maintains the ancient classical dance-drama art form 'Krishnanattam'—an eight-night cycle depicting Krishna's life, created here in 1654 AD."
    ],
    culturalSignificance: "The supreme devotional heart of Kerala, hosting thousands of weddings each year and serving as the cradle of classical Kerala mural art and music.",
    visitorTips: [
      "Strict Kerala dress code: men must wear mundu (dhoti) without shirts; women must wear sarees or traditional set mundu.",
      "Visit Punnathur Kotta (Anakkotta), 3km from the temple, to see over 40 royal temple elephants in their palatial coconut grove."
    ],
    narrationScript: "Welcome to Guruvayur, the Earthly Vaikuntha of Lord Krishna in the lush heart of Kerala. According to legend, when Dwarka submerged beneath the Arabian Sea, Guru and Vayu carried Krishna's sacred idol here to bless the world. Gaze across the courtyard at the 33-meter golden flagstaff and the towering Deepastambham, whose thousand brass oil lamps glow warm against the night. Within the copper-roofed Sree Kovil, Lord Guruvayurappan bestows peace and unconditional love upon millions.",
    chapters: [
      { id: "chap-1", title: "Bhuloka Vaikunta", timestampHint: "0:00", script: "Revered as the earthly dwelling of Vishnu, saved from the submerged city of Dwarka.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Thousand Golden Lamps", timestampHint: "0:30", script: "Pillars of brass oil lamps illuminate the cloistered wooden verandahs at twilight.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Royal Elephants of Krishna", timestampHint: "1:00", script: "Home to legendary temple tuskers who carry the golden deity during grand processions.", focusPointId: "pt-1" }
    ]
  },

  "thillai nataraja temple chidambaram": {
    name: "Thillai Nataraja Temple, Chidambaram",
    localName: "தில்லை நடராஜர் கோயில் (சிதம்பரம், தமிழ்நாடு)",
    city: "Chidambaram, Tamil Nadu",
    country: "India",
    architecturalStyle: "Pure Chola Dravidian Architecture with Gilded Roof (Pancha Bhoota Sthalam)",
    periodEra: "Ancient Roots; Consecrated 10th Century by Imperial Chola Monarchs",
    confidence: 100,
    summary: "Representing the sacred Akasha (Space/Ether) element among the five cosmic Pancha Bhoota Sthalas, the Thillai Nataraja Temple in Chidambaram is the supreme center of Shaivism. Here, Lord Shiva performs the Ananda Tandava (Cosmic Dance of Bliss) as Nataraja inside the golden-roofed Kanaka Sabha (covered in 21,600 pure gold tiles), featuring the mysterious 'Chidambara Rahasyam' (the secret of formless divine space).",
    coordinatesEstimate: { lat: 11.3992, lng: 79.6936 },
    arKeypoints: [
      { id: "pt-1", label: "Golden Roof of Kanaka Sabha (21,600 Gold Tiles)", featureType: "dome", description: "Sacred sanctum roof plated in 21,600 golden tiles secured by 72,000 golden nails, representing human breaths and nadis.", x: 50, y: 28 },
      { id: "pt-2", label: "Bronze Murti of Nataraja (Cosmic Dancer)", featureType: "statue", description: "Iconic cosmic dance of Shiva with four arms, dancing within a ring of cosmic flames (Prabha Mandala).", x: 50, y: 55 },
      { id: "pt-3", label: "Four Soaring 7-Tier Gopuram Gateways (43m)", featureType: "spire", description: "Carved with all 108 classical Bharatanatyam dance Karanas described in the Natya Shastra.", x: 30, y: 22 },
      { id: "pt-4", label: "Chidambara Rahasyam (The Cosmic Secret)", featureType: "entrance", description: "Curtained sanctum revealing only a garland of golden vilva leaves against empty, infinite space.", x: 62, y: 58 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 907–955 AD", event: "Parantaka Chola I Golden Roof", description: "Chola King Parantaka I covered the sanctum with gold, earning the title 'Pon Veintha Cholan' (He who tiled with gold)." },
      { yearOrEra: "12th Century", event: "108 Dance Karanas Carved", description: "The four monumental gopurams were inscribed with all 108 poses of Bharatanatyam under the later Cholas and Pandyas." }
    ],
    architecturalSecrets: [
      "The golden roof of the Chit Sabha contains exactly 21,600 gold tiles representing the 21,600 breaths a human takes daily, held together by 72,000 golden nails symbolizing the 72,000 nadis (energy channels).",
      "Behind the Nataraja idol hangs the curtain of the 'Chidambara Rahasyam': when pulled back, there is no idol—only a string of golden vilva leaves hanging in empty space, revealing that God is formless, infinite consciousness."
    ],
    culturalSignificance: "The supreme temple for all classical Bharatanatyam dancers and musicians worldwide, hosting the international Natyanjali Dance Festival every Maha Shivaratri.",
    visitorTips: [
      "Do not miss the 108 Bharatanatyam Karana stone carvings lining the interior walls of the eastern and western gopurams.",
      "Attend the midday Abhishekam ritual where the ruby Nataraja (Ratnasabhapati) glows under lamps."
    ],
    narrationScript: "Step into the Thillai Nataraja Temple in Chidambaram, where Lord Shiva performs the Ananda Tandava—the eternal Cosmic Dance of Creation and Dissolution. As the Ether or Space element of the Pancha Bhoota Sthalas, Chidambaram holds a profound secret. Gaze up at the Kanaka Sabha: its roof is plated in 21,600 pure gold tiles, mirroring the breaths of human life. Beyond the golden curtain lies the Chidambara Rahasyam—a sacred empty space reminding us that the supreme divine is formless, infinite, and within us all.",
    chapters: [
      { id: "chap-1", title: "The Cosmic Dancer of Bliss", timestampHint: "0:00", script: "Nataraja dances within a ring of cosmic fire, balancing creation and destruction.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The 21,600 Golden Tiles", timestampHint: "0:30", script: "Every tile on the golden roof corresponds to a breath of human life.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Secret of Empty Space", timestampHint: "1:00", script: "The Chidambara Rahasyam reveals the ultimate truth: God is formless, infinite consciousness.", focusPointId: "pt-4" }
    ]
  },

  "annamalaiyar temple tiruvannamalai": {
    name: "Arulmigu Arunachaleswarar Temple (Annamalaiyar)",
    localName: "அருள்மிகு அருணாசலேஸ்வரர் திருக்கோயில் (திருவண்ணாமலை)",
    city: "Tiruvannamalai, Tamil Nadu",
    country: "India",
    architecturalStyle: "Monumental Dravidian Architecture (Fire Element / Agni Sthalam)",
    periodEra: "c. 9th–16th Century (Cholas, Hoysalas & Krishnadevaraya of Vijayanagara)",
    confidence: 100,
    summary: "Covering 25 sprawling acres at the base of the sacred volcanic hill of Arunachala in Tamil Nadu, Annamalaiyar Temple embodies the Fire (Agni) element of the Pancha Bhoota Sthalas. Featuring four monumental gopurams—including the soaring 66-meter (217ft) Eastern Rajagopuram built by Emperor Krishnadevaraya—it is the setting of the famous Karthigai Deepam festival, when a colossal sacred beacon of fire is lit atop Mount Arunachala.",
    coordinatesEstimate: { lat: 12.2312, lng: 79.0677 },
    arKeypoints: [
      { id: "pt-1", label: "Eastern Rajagopuram (66m / 217ft, Krishnadevaraya)", featureType: "spire", description: "One of the tallest entrance towers in India, erected by Vijayanagara Emperor Krishnadevaraya.", x: 50, y: 15 },
      { id: "pt-2", label: "Arunachala Sacred Hill (Embodiment of Shiva)", featureType: "facade", description: "Ancient 800m granite peak revered as the physical manifestation of the Pillar of Fire.", x: 50, y: 40 },
      { id: "pt-3", label: "Thousand-Pillar Mandapam & Sivaganga Tank", featureType: "column", description: "Colossal granite hypostyle hall with exquisitely sculpted rearing Yali columns.", x: 68, y: 72 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 9th Century", event: "Chola Inscriptions", description: "Early Chola monarchs constructed the stone inner sanctum around the ancient Agni Lingam." },
      { yearOrEra: "1516 AD", event: "Vijayanagara Grand Gopuram", description: "Emperor Krishnadevaraya of Vijayanagara erected the 11-tiered 66-meter Eastern Rajagopuram." }
    ],
    architecturalSecrets: [
      "The entire holy mountain of Arunachala is worshipped as the physical embodiment of the Lingodbhava—the infinite pillar of fire with no beginning and no end.",
      "During the Karthigai Deepam festival, over 3,000 kilograms of ghee and 1,000 meters of cotton cloth are burned to light a massive sacred flame atop the mountain summit, visible for 35 kilometers."
    ],
    culturalSignificance: "A premier epicenter of Advaita Vedanta philosophy and self-inquiry (Atma Vichara), immortalized in the modern era by the presence of sage Sri Ramana Maharshi.",
    visitorTips: [
      "Participate in the 14-kilometer barefoot Giri Pradakshina (circumambulation) around the base of Mount Arunachala during the full moon.",
      "Visit the nearby Sri Ramana Ashram at the foot of the mountain for peaceful silent meditation."
    ],
    narrationScript: "You stand at the foot of Mount Arunachala before the colossal towers of the Annamalaiyar Temple in Tiruvannamalai. Spanning 25 acres, this sacred sanctuary represents the Fire element among the five cosmic shrines of Shiva. Behind the 66-meter Rajagopuram rises Arunachala itself, venerated as the infinite column of cosmic light. Every year, during the Karthigai Deepam festival, a great flame is kindled on the mountain summit, casting a warm beacon of wisdom and liberation across Tamil Nadu.",
    chapters: [
      { id: "chap-1", title: "The Pillar of Fire", timestampHint: "0:00", script: "Representing Agni, Annamalaiyar honors the infinite light of Shiva.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The 66-Meter Tower of Krishnadevaraya", timestampHint: "0:30", script: "Eleven tiers of stone rise above the landscape, erected by the Vijayanagara Empire.", focusPointId: "pt-1" },
      { id: "chap-3", title: "The Sacred Giri Pradakshina", timestampHint: "1:00", script: "Devotees walk fourteen kilometers barefoot around the sacred mountain under the full moon.", focusPointId: "pt-3" }
    ]
  },

  "lingaraj temple bhubaneswar": {
    name: "Lingaraj Temple, Bhubaneswar",
    localName: "ଶ୍ରୀ ଲିଙ୍ଗରାଜ ମନ୍ଦିର (ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା)",
    city: "Bhubaneswar, Odisha",
    country: "India",
    architecturalStyle: "Quintessential Kalinga Stone Architecture (Deula & Jagamohana)",
    periodEra: "11th Century AD (c. 1090–1104 AD, Somavamshi Dynasty / King Jajati Keshari)",
    confidence: 100,
    summary: "Dominating the skyline of Bhubaneswar ('The City of Temples'), Lingaraj Temple is the supreme masterpiece of Kalinga temple architecture. Constructed in dark red sandstone during the 11th century by the Somavamshi kings, its soaring 55-meter (180ft) curvilinear Deula tower is adorned with exquisite stone friezes. Uniquely, the sanctum enshrines Harihara—a combined form of Lord Vishnu (Hari) and Lord Shiva (Hara).",
    coordinatesEstimate: { lat: 20.2382, lng: 85.8336 },
    arKeypoints: [
      { id: "pt-1", label: "55-Meter Curvilinear Deula Tower", featureType: "spire", description: "Monumental curvilinear Kalinga sandstone tower crowned with a fluted Amalaka and trident-disc emblem.", x: 50, y: 18 },
      { id: "pt-2", label: "Bindu Sagar Sacred Lake", featureType: "arch", description: "Sacred 1,300-foot lake containing water from all holy rivers and tanks in India.", x: 65, y: 78 },
      { id: "pt-3", label: "Harihara Swayambhu Lingam Sanctum", featureType: "statue", description: "Massive natural granite lingam worshipped jointly with bilva leaves (Shiva) and tulsi leaves (Vishnu).", x: 50, y: 56 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1090–1104 AD", event: "Somavamshi Foundation", description: "Built by King Jajati Keshari and completed by Lalatendu Keshari as the religious pinnacle of ancient Utkala." },
      { yearOrEra: "12th Century", event: "Ganga Dynasty Expansion", description: "The Eastern Ganga kings added the Natamandira (Dance Hall) and Bhogamandapa (Hall of Offerings)." }
    ],
    architecturalSecrets: [
      "The temple reflects the unique religious synthesis of medieval Odisha: the deity is worshipped as Harihara, half-Vishnu and half-Shiva, symbolized by offering both holy tulsi leaves and sacred bael leaves.",
      "The massive Deula tower is hollow and was engineered using horizontal stone corbelling without mortar, standing unharmed for nearly a millennium."
    ],
    culturalSignificance: "The foremost religious and architectural landmark of Bhubaneswar, surrounded by over 50 subsidiary shrines within a massive laterite compound wall.",
    visitorTips: [
      "Non-Hindus can view the magnificent temple complex and tower from an elevated stone viewing platform erected nearby during Lord Curzon's viceroyalty.",
      "Take a peaceful stroll along the ghats of the historic Bindu Sagar lake just north of the temple."
    ],
    narrationScript: "You stand before the grand Lingaraj Temple, the architectural crown of Bhubaneswar, Odisha's Temple City. Erected in the 11th century by the Somavamshi dynasty, its 55-meter curvilinear sandstone tower represents the zenith of Kalinga stonecraft. Look at the balance of its four components: the towering Deula, the assembly hall, the dance pavilion, and the hall of offerings. Within this red stone fortress, Shiva and Vishnu are worshipped as one in the divine form of Harihara.",
    chapters: [
      { id: "chap-1", title: "Masterpiece of Kalinga Architecture", timestampHint: "0:00", script: "Soaring 55 meters high, the curvilinear Deula tower defines the historic Bhubaneswar skyline.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Union of Hari and Hara", timestampHint: "0:30", script: "Lord Shiva and Lord Vishnu unite in a single sacred granite lingam worshipped with tulsi and bilva.", focusPointId: "pt-3" }
    ]
  },

  "kamakhya temple guwahati": {
    name: "Kamakhya Temple (Nilachal Hill)",
    localName: "মা কামাখ্যা দেৱালয় (গুৱাহাটী, অসম)",
    city: "Guwahati, Assam",
    country: "India",
    architecturalStyle: "Nilachal Style (Beehive-Shaped Shikhara / Koch-Ahom Architecture)",
    periodEra: "Ancient Roots; Rebuilt 1565 AD by King Nara Narayana of the Koch Dynasty",
    confidence: 100,
    summary: "Perched atop Nilachal Hill overlooking the mighty Brahmaputra River in Guwahati, Assam, Kamakhya is the supreme Tantric Shakti Peetha of India. Revered as the place where the Yoni (organ of creation) of Mother Sati fell, it celebrates the creative power of womanhood. Characterized by its unique hybrid beehive-shaped dome (Nilachal style), the temple is world-famous for the annual Ambubachi Mela celebrating the fertile cycle of Mother Earth.",
    coordinatesEstimate: { lat: 26.1664, lng: 91.7058 },
    arKeypoints: [
      { id: "pt-1", label: "Beehive-Shaped Nilachal Shikhara Dome", featureType: "dome", description: "Distinctive hybrid beehive dome built over a cruciform base, encircled by miniature spires.", x: 50, y: 24 },
      { id: "pt-2", label: "Natural Underground Cave Spring (Garbhagriha)", featureType: "entrance", description: "Subterranean rock cave where a natural spring flows over a yoni-shaped stone fissure.", x: 50, y: 64 },
      { id: "pt-3", label: "Nilachal Hill & Brahmaputra River Overlook", featureType: "facade", description: "Forested hilltop promontory offering breathtaking vistas across the wide Brahmaputra waters.", x: 72, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 7th–10th Century", event: "Early Mlechchha Dynasty Shrines", description: "Mentioned in the Kalika Purana and Yogini Tantra as the primary seat of Tantric esoteric worship." },
      { yearOrEra: "1565 AD", event: "Koch King Nara Narayana Reconstruction", description: "General Chilarai and King Nara Narayana reconstructed the present beehive temple following Bengal Sultanate destruction." },
      { yearOrEra: "1665–1744", event: "Ahom Royal Patronage", description: "Ahom Kings, including Rudra Singha, patronized the temple and added defensive stone walls." }
    ],
    architecturalSecrets: [
      "The temple has no anthropomorphic idol: devotees descend into a dark subterranean cave chamber where natural spring water continuously moistens a sacred rock fissure.",
      "The architectural style is known specifically as the 'Nilachal Type': a cruciform base surmounted by a ribbed, multi-tiered beehive dome inspired by both Hindu and Islamic domes."
    ],
    culturalSignificance: "The supreme epicenter of Tantric and Shakta worship in Asia, celebrating feminine creative energy, menstrual fertility, and nature's regeneration during Ambubachi Mela.",
    visitorTips: [
      "Be prepared to wait in line for the sacred subterranean cave darshan, especially on Tuesdays and Saturdays.",
      "Visit the surrounding ten Mahavidya temples located on Nilachal Hill to complete the sacred cluster."
    ],
    narrationScript: "You stand atop Nilachal Hill in Guwahati, Assam, looking out over the wide Brahmaputra River to the Kamakhya Temple. Revered as the foremost among all 51 Shakti Peethas, Kamakhya celebrates the divine creative force of Mother Earth. Its unique beehive-shaped dome was rebuilt in 1565 by the Koch kings. Descend the stone steps into the subterranean cave: here, where a natural spring bubbles over a sacred rock cleft, pilgrims honor the divine mother as the source of all life.",
    chapters: [
      { id: "chap-1", title: "The Mother of All Shakti Peethas", timestampHint: "0:00", script: "Revered as the creative matrix of the cosmos high above the Brahmaputra River.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Subterranean Spring", timestampHint: "0:30", script: "A natural spring flows eternally across the sacred stone sanctum within the cave.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Ambubachi Mela", timestampHint: "1:00", script: "Every monsoon, millions gather to celebrate the fertile regenerative power of Mother Earth.", focusPointId: "pt-3" }
    ]
  },

  "dakshineswar kali temple": {
    name: "Dakshineswar Kali Temple",
    localName: "দক্ষিণেশ্বর কালী মন্দির (কলকাতা, পশ্চিমবঙ্গ)",
    city: "Kolkata, West Bengal",
    country: "India",
    architecturalStyle: "Traditional Bengali Navaratna (Nine-Spired) Temple Architecture",
    periodEra: "Consecrated May 31, 1855 (Commissioned by Rani Rashmoni)",
    confidence: 100,
    summary: "Standing on the eastern bank of the Hooghly River north of Kolkata, Dakshineswar Kali Temple is a three-tiered Navaratna (nine-spired) architectural masterpiece dedicated to Goddess Bhavatarini (an aspect of Kali). Founded in 1855 by the philanthropist Rani Rashmoni, it is world-renowned as the spiritual home of the mystic saint Sri Ramakrishna Paramahamsa, featuring twelve identical riverside Shiva shrines and the sacred Panchavati grove.",
    coordinatesEstimate: { lat: 22.6558, lng: 88.3575 },
    arKeypoints: [
      { id: "pt-1", label: "Three-Tiered Nine-Spired Navaratna Tower", featureType: "spire", description: "Magnificent 46-foot tall three-story temple topped with nine ornamental spires in traditional Bengal style.", x: 50, y: 22 },
      { id: "pt-2", label: "Sanctum of Mother Bhavatarini Kali", featureType: "statue", description: "Black basalt stone idol of Kali standing on the chest of Lord Shiva on a silver lotus.", x: 50, y: 58 },
      { id: "pt-3", label: "Twelve Riverfront Shiva Shrines (Dwadash Shiva)", featureType: "arch", description: "Row of 12 classic Aat-Chala brick temples flanking the Hooghly River steps.", x: 30, y: 74 },
      { id: "pt-4", label: "Room of Sri Ramakrishna Paramahamsa", featureType: "entrance", description: "Preserved historic chamber where Sri Ramakrishna lived, meditated, and taught Swami Vivekananda.", x: 74, y: 68 }
    ],
    historicalTimeline: [
      { yearOrEra: "1855", event: "Consecration by Rani Rashmoni", description: "Visionary widow Rani Rashmoni overcame caste orthodoxies to consecrate the grand temple on Snana Yatra day." },
      { yearOrEra: "1856–1886", event: "Spiritual Ministry of Sri Ramakrishna", description: "Sri Ramakrishna served as chief priest, attaining God-realization through various religious paths." }
    ],
    architecturalSecrets: [
      "The temple is built in the classic Navaratna (nine-jewel) style native to Bengal: four spires on the first floor, four on the second, and one crowning central pinnacle.",
      "Directly across the river Hooghly sits Belur Math, headquarters of the Ramakrishna Mission, designed by Swami Vivekananda to blend Hindu, Christian, and Islamic motifs in harmony."
    ],
    culturalSignificance: "The birthplace of modern Indian spiritual renaissance, where Sri Ramakrishna preached the universal harmony of all world religions ('Joto mot, toto poth'—As many faiths, so many paths).",
    visitorTips: [
      "Visit the peaceful Panchavati grove where Sri Ramakrishna practiced intense Tantric and Advaitic sadhana.",
      "Take a river ferry directly across the Hooghly River from the temple ghat to Belur Math."
    ],
    narrationScript: "You stand on the banks of the sacred Hooghly River at Dakshineswar Kali Temple in Kolkata. Completed in 1855 by the visionary Rani Rashmoni, this nine-spired Navaratna temple is consecrated to Mother Bhavatarini. Along the river steps stand twelve identical Shiva temples. Here, within these very courtyards, the great mystic Sri Ramakrishna Paramahamsa experienced divine ecstasy and taught that all world religions lead to the same eternal truth.",
    chapters: [
      { id: "chap-1", title: "The Nine-Spired Jewel of Bengal", timestampHint: "0:00", script: "Rani Rashmoni's vision created this three-tiered Navaratna masterpiece of brick and marble.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Mother Bhavatarini", timestampHint: "0:30", script: "In the central sanctum, Goddess Kali stands upon Shiva as the redeemer of the universe.", focusPointId: "pt-2" },
      { id: "chap-3", title: "The Cradle of Universal Harmony", timestampHint: "1:00", script: "Sri Ramakrishna taught here that all world faiths lead to the same divine light.", focusPointId: "pt-4" }
    ]
  },

  "mayapur iskcon tovp": {
    name: "Temple of the Vedic Planetarium (TOVP, Mayapur)",
    localName: "শ্রী মায়াপুর চন্দ্রোদয় মন্দির (নদীয়া, পশ্চিমবঙ্গ)",
    city: "Mayapur / Nadia, West Bengal",
    country: "India",
    architecturalStyle: "Monumental Neoclassical & Vedic Fusion Architecture",
    periodEra: "2010–Present (Global Headquarters of ISKCON)",
    confidence: 100,
    summary: "Rising 113 meters (370 feet) on the banks of the holy Ganges in Mayapur, West Bengal, the Temple of the Vedic Planetarium (TOVP) features the largest Hindu temple dome in the world. Enclosed by Bolivian blue marble and titanium-nitride gilded domes, it houses a massive rotating 3D chandelier model illustrating the cosmic structure of the universe as described in the ancient Srimad Bhagavatam.",
    coordinatesEstimate: { lat: 23.4244, lng: 88.3905 },
    arKeypoints: [
      { id: "pt-1", label: "Colossal Central Dome (113m / 370ft High)", featureType: "dome", description: "The world's largest temple dome, adorned with golden filigree and stars against blue titanium.", x: 50, y: 18 },
      { id: "pt-2", label: "The Cosmic 3D Vedic Chandelier", featureType: "statue", description: "Enormous suspended moving mechanical model depicting the 14 planetary systems and spiritual realms.", x: 50, y: 48 },
      { id: "pt-3", label: "Grand Marble Hall (Capacity 10,000 Worshippers)", featureType: "facade", description: "Acre-wide interior floor paved with rare Vietnamese and Bolivian blue marble.", x: 50, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "1971", event: "Vision of A.C. Bhaktivedanta Swami Prabhupada", description: "ISKCON founder Srila Prabhupada envisioned a planetary temple in Mayapur demonstrating the Vedic cosmos." },
      { yearOrEra: "2010–Present", event: "Monumental Construction", description: "Engineered with cutting-edge composite materials and global marble, creating one of the largest religious buildings on Earth." }
    ],
    culturalSignificance: "The international spiritual headquarters of the Gaudiya Vaishnava tradition, marking the sacred birthplace of 16th-century saint Sri Chaitanya Mahaprabhu.",
    architecturalSecrets: [
      "Features the world's largest temple dome spanning 177 feet in diameter, constructed using advanced composite materials and titanium-nitride gold coating.",
      "Houses an immense rotating Vedic planetarium chandelier that mechanizes the astronomical calculations of the 5th Canto of Srimad Bhagavatam.",
      "Floored with over an acre of rare Bolivian blue marble and white Vietnamese stone to accommodate 10,000 pilgrims at a time."
    ],
    visitorTips: [
      "Attend the evening Sandhya Aarti in the main temple hall with hundreds of devotees singing the Hare Krishna Mahamantra.",
      "Explore the Vedic Science exhibitions explaining the astronomical calculations of ancient Indian astronomy (Surya Siddhanta)."
    ],
    narrationScript: "Look skyward at the monumental Temple of the Vedic Planetarium rising 113 meters above Mayapur, West Bengal. Enclosing the largest Hindu temple dome in the world, this marvel was envisioned by ISKCON founder A.C. Bhaktivedanta Swami Prabhupada. Under its soaring titanium dome hangs a gigantic rotating chandelier illustrating the structure of the universe from ancient Vedic cosmology. It stands as a beacon of universal brotherhood and devotion on the sacred banks of the Ganges.",
    chapters: [
      { id: "chap-1", title: "The World's Largest Temple Dome", timestampHint: "0:00", script: "Soaring 113 meters high, this planetary dome redefines monumental sacred architecture.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Cosmic Chandelier", timestampHint: "0:30", script: "Suspended in the dome, a 3D model illustrates the fourteen planetary realms of the cosmos.", focusPointId: "pt-2" }
    ]
  },

  "akshardham new delhi": {
    name: "Swaminarayan Akshardham (New Delhi)",
    localName: "स्वामीनारायण अक्षरधाम (नई दिल्ली)",
    city: "New Delhi",
    country: "India",
    architecturalStyle: "Traditional Hindu Nagara Temple Architecture (Guinness World Record)",
    periodEra: "Opened November 6, 2005 (Pramukh Swami Maharaj)",
    confidence: 100,
    summary: "Certified by Guinness World Records as the World's Largest Comprehensive Hindu Temple, Swaminarayan Akshardham in New Delhi spans 100 sprawling acres along the Yamuna River. Measuring 141 feet high, 316 feet wide, and 356 feet long, this monumental marvel was carved from Rajasthani pink sandstone and Italian Carrara marble without structural steel, featuring 234 ornately carved pillars, 9 domes, 20,000 statues, and the monumental Gajendra Pith base of 148 life-sized stone elephants.",
    coordinatesEstimate: { lat: 28.6127, lng: 77.2773 },
    arKeypoints: [
      { id: "pt-1", label: "Central 141-Foot Mandir & Nine Ornate Domes", featureType: "spire", description: "Carved from 300,000 pieces of pink sandstone and white marble with no structural steel.", x: 50, y: 22 },
      { id: "pt-2", label: "Gajendra Pith (148 Life-Sized Stone Elephants)", featureType: "relief", description: "Colossal foundation plinth depicting 148 life-sized elephants weighing 3,000 tonnes illustrating peace and nature.", x: 50, y: 76 },
      { id: "pt-3", label: "Sahaj Anand Musical Water Fountain", featureType: "arch", description: "Breathtaking multi-media water show based on stories from the Kena Upanishad.", x: 68, y: 64 },
      { id: "pt-4", label: "11-Foot Gilded Murti of Bhagwan Swaminarayan", featureType: "statue", description: "Seated golden deity of Bhagwan Swaminarayan surrounded by gurus under an ornate filigree canopy.", x: 50, y: 52 }
    ],
    historicalTimeline: [
      { yearOrEra: "2000–2005", event: "Five-Year Epic Construction", description: "7,000 master artisans and 3,000 volunteers assembled the monumental complex in just five years." },
      { yearOrEra: "2007", event: "Guinness World Record", description: "Officially certified as the World's Largest Comprehensive Hindu Temple." }
    ],
    architecturalSecrets: [
      "The monument contains 20,000 hand-carved statues of spiritual personalities, avatāras, and deities, including 234 ornately carved pillars that tell the story of Indian spiritual civilization.",
      "The entire structure uses no structural steel or iron: massive interlocking sandstone and marble blocks rely exclusively on gravity and traditional mortise-tenon joinery."
    ],
    culturalSignificance: "A globally acclaimed showcase of 10,000 years of Indian art, spiritual wisdom, architecture, and universal humanitarian values.",
    visitorTips: [
      "Plan for at least 4 to 5 hours: experience the cultural boat ride (Sanskruti Vihar) and the evening Sahaj Anand water show.",
      "Strict security: all phones, electronics, bags, and tobacco products must be stored in free lockers before entry."
    ],
    narrationScript: "Welcome to Swaminarayan Akshardham in New Delhi, recognized by Guinness World Records as the world's largest comprehensive Hindu temple. Spanning 100 acres beside the Yamuna River, this awe-inspiring monument was carved from pink sandstone and Carrara marble without a single ounce of steel. Look at the base: 148 life-sized stone elephants form the majestic foundation plinth. Above rise nine intricate domes and 234 pillars adorned with 20,000 hand-carved statues, celebrating the eternal wisdom and soul of India.",
    chapters: [
      { id: "chap-1", title: "World's Largest Hindu Temple", timestampHint: "0:00", script: "Certified by Guinness World Records, Akshardham is a monumental marvel of Indian architecture.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The 148 Elephants of Gajendra Pith", timestampHint: "0:30", script: "148 life-sized elephants carved in pink stone honor the harmony between humanity and nature.", focusPointId: "pt-2" },
      { id: "chap-3", title: "Universal Spirit of Peace", timestampHint: "1:00", script: "Ten thousand years of Indian philosophy and devotional arts come alive in stone.", focusPointId: "pt-4" }
    ]
  },

  "vaishno devi mandir katra": {
    name: "Shri Mata Vaishno Devi Mandir",
    localName: "श्री माता वैष्णो देवी मन्दिर (कटरा, जम्मू एवं कश्मीर)",
    city: "Katra / Trikuta Mountains, Jammu & Kashmir",
    country: "India",
    architecturalStyle: "Sacred High-Altitude Cave Shrine (5,200ft / Trikuta Mountains)",
    periodEra: "Ancient Puranic Origins (Over 1,000 Years Recorded Pilgrimage)",
    confidence: 100,
    summary: "Nestled high at an altitude of 5,200 feet (1,585m) in the three-peaked Trikuta Mountains of Jammu and Kashmir, Shri Mata Vaishno Devi is India's second most visited religious pilgrimage site. Worshipped within a holy natural cave, the Goddess is venerated not through an idol, but in the form of three natural rock formations called 'Pindies'—representing Maha Kali, Maha Lakshmi, and Maha Saraswati.",
    coordinatesEstimate: { lat: 33.0308, lng: 74.9491 },
    arKeypoints: [
      { id: "pt-1", label: "Sacred Natural Holy Cave (Bhawan)", featureType: "entrance", description: "Ancient natural limestone cave where the three sacred rock Pindies are enshrined.", x: 50, y: 55 },
      { id: "pt-2", label: "Trikuta Mountain Triple Peaks", featureType: "facade", description: "Majestic 5,200ft Himalayan mountain range framing the holy pilgrimage complex.", x: 50, y: 22 },
      { id: "pt-3", label: "13-Kilometer Pilgrimage Mountain Trail", featureType: "arch", description: "Paved illuminated mountain path ascending from Katra through Ban Ganga and Ardhkuwari.", x: 65, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Bhairon Nath & Sridhar Legend", description: "Pandit Sridhar discovered the holy cave after Goddess Vaishnavi appeared in his vision." },
      { yearOrEra: "1986", event: "Shri Mata Vaishno Devi Shrine Board (SMVDSB)", description: "Under Governor Jagmohan, the Shrine Board modernized the 13km trail, helipads, and cable cars." }
    ],
    architecturalSecrets: [
      "Within the original holy cave, holy water known as the Charan Ganga continuously flows over the feet of the three sacred Pindies.",
      "The three Pindies are distinct in color: Maha Kali (black), Maha Lakshmi (yellow-reddish), and Maha Saraswati (white)."
    ],
    culturalSignificance: "A premier pilgrimage of faith and endurance in the Himalayas, drawing over 8 million devotees annually chanting 'Jai Mata Di'.",
    visitorTips: [
      "Devotees can ascend the 13km trail on foot, by battery-operated car, pony, palanquin, or helicopter from Katra.",
      "Visit the Bhairon Nath temple at the mountain peak (accessible by modern cable car) to complete the sacred pilgrimage."
    ],
    narrationScript: "You are climbing high into the Trikuta Mountains of Jammu and Kashmir toward the holy shrine of Shri Mata Vaishno Devi. Nestled at 5,200 feet, this revered sanctuary draws millions each year who echo the joyful chant 'Jai Mata Di' across mountain trails. Within the sacred natural cave, the Mother Goddess manifests as three natural rock Pindies representing wisdom, prosperity, and power. Feel the cool Himalayan breeze as your eyes take in the mountain peaks of this sacred realm.",
    chapters: [
      { id: "chap-1", title: "The Ascent of Faith", timestampHint: "0:00", script: "Millions trek thirteen kilometers through the misty Trikuta mountains toward the holy cave.", focusPointId: "pt-3" },
      { id: "chap-2", title: "The Three Sacred Pindies", timestampHint: "0:30", script: "Within the cave, Maha Kali, Maha Lakshmi, and Maha Saraswati manifest in natural stone.", focusPointId: "pt-1" }
    ]
  },

  "amarnath cave temple": {
    name: "Amarnath Cave Temple (Ice Shiva Lingam)",
    localName: "श्री अमरनाथ गुफा मन्दिर (पहलगाम, कश्मीर)",
    city: "Pahalgam / Baltal, Jammu & Kashmir",
    country: "India",
    architecturalStyle: "High-Altitude Glacial Natural Cave Sanctuary (3,888m / 12,756ft)",
    periodEra: "Ancient Antiquity (Recorded in 12th Century Rajatarangini of Kalhana)",
    confidence: 100,
    summary: "Situated at an awe-inspiring altitude of 3,888 meters (12,756 feet) amidst the snow-clad peaks of the Lidder Valley in Jammu and Kashmir, the holy Amarnath Cave is one of Hinduism's most sacred pilgrimage sites. Here, during the summer months, a natural ice stalagmite Shiva Lingam (Baba Barfani) waxes and wanes with the moon phases, marking the secret cave where Lord Shiva revealed the Amar Katha—the secret of immortality and creation—to Goddess Parvati.",
    coordinatesEstimate: { lat: 34.2155, lng: 75.5036 },
    arKeypoints: [
      { id: "pt-1", label: "Natural Ice Stalagmite Shiva Lingam (Baba Barfani)", featureType: "statue", description: "Natural ice stalagmite forming from water droplets freezing on the cave floor, reaching up to 12 feet high.", x: 50, y: 55 },
      { id: "pt-2", label: "Colossal Himalayan Natural Cave Opening (40m Wide)", featureType: "entrance", description: "Massive natural rock cave mouth opening into the glaciated mountain amphitheater.", x: 50, y: 35 },
      { id: "pt-3", label: "Glacial Mountain Approach Across Snowfields", featureType: "facade", description: "High Himalayan trail traversing the Sheshnag Lake, Mahagunas Pass (14,500ft), and Sangam valley.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "Ancient Era", event: "Puranic Amar Katha", description: "Lord Shiva left his bull Nandi, snake, moon, and son Ganesha behind at various mountain stages to reveal the secret of immortality." },
      { yearOrEra: "c. 1850 AD", event: "Rediscovery by Buta Malik", description: "A local Muslim shepherd, Buta Malik, rediscovered the cave, following which his family shared in the temple's traditional pilgrimage service." }
    ],
    architecturalSecrets: [
      "The ice lingam forms naturally as mineral-rich water drips from the cave roof and freezes in the sub-zero cave air, wax-forming during the summer Shukla Paksha and waning with the full moon.",
      "A pair of immortal white pigeons (Amar Pakshi) is said to inhabit the cave, having overheard the secret of immortality from Lord Shiva."
    ],
    culturalSignificance: "The supreme annual Himalayan pilgrimage (Amarnath Yatra) of courage, devotion, and communal harmony between Hindu pilgrims and Kashmiri locals.",
    visitorTips: [
      "Requires advance medical fitness certificate and registration with the Shri Amarnathji Shrine Board (SASB).",
      "Pilgrims can choose between the traditional 4-day scenic trail from Pahalgam (48km) or the steeper 1-day trek from Baltal (14km)."
    ],
    narrationScript: "You have arrived at the high-altitude realm of Amarnath Cave, 3,888 meters above sea level in the glaciated mountains of Kashmir. Deep within this natural limestone cave, pure mountain water freezes into the legendary ice stalagmite of Lord Shiva—affectionately known as Baba Barfani. In Hindu mythology, this is the sacred sanctuary where Shiva revealed the secret of immortality to Parvati. Surrounded by jagged snow peaks, the Amarnath Yatra stands as an enduring testament to human endurance, faith, and transcendence.",
    chapters: [
      { id: "chap-1", title: "The Secret of Immortality", timestampHint: "0:00", script: "In this secluded cave, Shiva whispered the secret of eternal life to Goddess Parvati.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Ice Lingam of Baba Barfani", timestampHint: "0:30", script: "A natural column of glacial ice rises and wanes with the phases of the summer moon.", focusPointId: "pt-1" }
    ]
  },

  "brahma temple pushkar": {
    name: "Jagatpita Brahma Mandir, Pushkar",
    localName: "जगतपिता ब्रह्मा मन्दिर (पुष्कर, राजस्थान)",
    city: "Pushkar, Rajasthan",
    country: "India",
    architecturalStyle: "Traditional Rajasthani Nagara Architecture with Red Shikhara",
    periodEra: "14th Century AD (Ancient Vedic Origins; Rebuilt by Gokul Chand Parakh)",
    confidence: 100,
    summary: "Standing beside the sacred Pushkar Lake in Rajasthan, the Jagatpita Brahma Temple is one of the extremely rare surviving temples in the world dedicated to Lord Brahma, the Creator. Distinguished by its soaring red shikhara spire, the image of the celestial swan (Hamsa), and marble stone steps inlaid with thousands of silver coins donated by pilgrims.",
    coordinatesEstimate: { lat: 26.4886, lng: 74.5522 },
    arKeypoints: [
      { id: "pt-1", label: "Vivid Red Shikhara Spire & Hamsa Pinnacle", featureType: "spire", description: "Eye-catching crimson temple spire topped with the celestial swan (vahana) of Lord Brahma.", x: 50, y: 22 },
      { id: "pt-2", label: "Chaturmukhi Four-Faced Murti of Lord Brahma", featureType: "statue", description: "Life-sized deity of four-faced Brahma in cross-legged padmasana holding the Vedas.", x: 50, y: 58 },
      { id: "pt-3", label: "Sacred Pushkar Lake Ghats", featureType: "arch", description: "Holy lake created where lotus petals (Pushpa) dropped from Lord Brahma's hand.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "8th Century", event: "Adi Shankara Consecration", description: "Adi Shankaracharya visited Pushkar and renovated the Brahma shrine." },
      { yearOrEra: "1809 AD", event: "Maratha Gwalior Reconstruction", description: "Gokul Chand Parakh, minister of Gwalior, rebuilt the present structure in stone and marble." }
    ],
    architecturalSecrets: [
      "Silver coins engraved with donors' names are embedded directly into the marble floor tiles and walls throughout the pillared hall.",
      "The temple is one of only a handful of Brahma temples in the world due to the mythical curse of Goddess Savitri when Brahma performed a yagna with Gayatri."
    ],
    culturalSignificance: "The supreme focal point of the world-famous annual Pushkar Camel Fair and Kartik Poornima pilgrimage.",
    visitorTips: [
      "Take a holy bath at the sacred 52 ghats of Pushkar Lake before climbing the marble steps to the temple.",
      "Hike up to the nearby hilltop Savitri Temple at sunrise for sweeping panoramic views of the entire desert town."
    ],
    narrationScript: "Welcome to Pushkar, Rajasthan, home to the rare and revered Jagatpita Brahma Temple. According to ancient lore, Lord Brahma dropped a celestial lotus flower here, giving birth to the sacred Pushkar Lake. Because of Goddess Savitri's mythical curse, temples to Brahma are exceptionally rare throughout the world. Notice the vibrant red spire rising into the desert sky, crowned by the celestial swan. Walk across marble floors inlaid with silver coins to gaze upon the four-faced creator of the cosmos.",
    chapters: [
      { id: "chap-1", title: "The Temple of the Creator", timestampHint: "0:00", script: "One of the few shrines on Earth dedicated to Lord Brahma, the architect of the cosmos.", focusPointId: "pt-1" },
      { id: "chap-2", title: "The Sacred Lotus Lake", timestampHint: "0:30", script: "Created where divine lotus petals fell, 52 holy ghats surround the turquoise desert waters.", focusPointId: "pt-3" }
    ]
  },

  "banke bihari temple vrindavan": {
    name: "Shri Banke Bihari Mandir",
    localName: "श्री बाँके बिहारी मन्दिर (वृन्दावन, मथुरा)",
    city: "Vrindavan / Mathura, Uttar Pradesh",
    country: "India",
    architecturalStyle: "Rajasthani Haveli Style Temple Architecture",
    periodEra: "Established c. 1543 AD by Swami Haridas; Present Mandir 1864",
    confidence: 100,
    summary: "Located in the sacred town of Vrindavan, Banke Bihari is the most beloved and celebrated Krishna temple in the holy land of Braj. Established by the saint-musician Swami Haridas (guru of Tansen), the black stone idol of Lord Krishna stands in the charming 'Tribhanga' (three-bent) posture. Uniquely, the temple does not use bells or conch shells; instead, curtains are drawn open and shut every few moments so the deity's mesmerizing gaze does not overwhelm worshippers.",
    coordinatesEstimate: { lat: 27.5807, lng: 77.7006 },
    arKeypoints: [
      { id: "pt-1", label: "Rajasthani Haveli Arches & Courtyard", featureType: "facade", description: "Intricate cusped arches and multi-tiered balconies overlooking the central devotional hall.", x: 50, y: 35 },
      { id: "pt-2", label: "Tribhanga Posture Murti of Banke Bihari", featureType: "statue", description: "Enchanting black stone murti of Krishna bent at three angles, adorned with peacock feathers.", x: 50, y: 62 },
      { id: "pt-3", label: "The Intermittent Silk Curtain Ritual (Parda)", featureType: "entrance", description: "Velvet curtain drawn shut every few minutes to interrupt the hypnotic divine gaze.", x: 50, y: 48 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1543 AD", event: "Manifestation to Swami Haridas", description: "Appeared to saint-musician Swami Haridas at Nidhivan in answer to his divine devotional singing." },
      { yearOrEra: "1864 AD", event: "Present Haveli Construction", description: "Goswamis constructed the grand present Rajasthani haveli temple in Vrindavan." }
    ],
    architecturalSecrets: [
      "No bells, chimes, or conch shells are sounded inside the temple, as Lord Krishna is treated as a delicate child who might be startled by loud noises.",
      "The darshan curtain is pulled open and closed intermittently every two minutes: tradition holds that if someone stares continuously into Banke Bihari's magnetic eyes, they will lose consciousness in divine ecstasy."
    ],
    culturalSignificance: "The supreme devotional heart of Braj Bhumi, celebrated for exuberant Holi festivals where flowers and herbal gulal fill the air.",
    visitorTips: [
      "Keep glasses and small belongings safe from the playful monkeys who inhabit the narrow lanes of Vrindavan.",
      "Experience the famous Phoolon ki Holi (Holi of Flowers) during springtime."
    ],
    narrationScript: "You have arrived at the vibrant Shri Banke Bihari Mandir in the holy lanes of Vrindavan. Manifested in the 16th century through the divine singing of the mystic Swami Haridas, this is the most beloved Krishna sanctuary in all of Braj. Inside this Rajasthani haveli, Lord Krishna stands in the charming three-bent Tribhanga posture. Notice the hush of the courtyard—no loud bells ring here to disturb the divine child, while velvet curtains are drawn and opened so devotees can catch brief, ecstatic glimpses of his loving gaze.",
    chapters: [
      { id: "chap-1", title: "The Beloved of Vrindavan", timestampHint: "0:00", script: "Banke Bihari radiates the playful, loving sweetness of Krishna in Braj.", focusPointId: "pt-2" },
      { id: "chap-2", title: "The Dance of the Velvet Curtain", timestampHint: "0:30", script: "Drawn shut every few moments, the curtain protects devotees from the hypnotic divine gaze.", focusPointId: "pt-3" }
    ]
  },

  "krishna janmasthan mathura": {
    name: "Shri Krishna Janmasthan Temple Complex",
    localName: "श्री कृष्ण जन्मस्थान मन्दिर (मथुरा, उत्तर प्रदेश)",
    city: "Mathura, Uttar Pradesh",
    country: "India",
    architecturalStyle: "Monumental North Indian Nagara Architecture & Ancient Prison Cell",
    periodEra: "Ancient Foundations (c. 1st Century BC; Present Complex 1953–1982)",
    confidence: 100,
    summary: "Built directly over the historic prison cell (Garbha Griha) where Lord Krishna was born to Devaki and Vasudeva in Mathura, this monumental complex is one of the holiest places in Hinduism. Excavations have revealed 5,000 years of continuous settlement, while the modern complex features the marble Keshavdeva Temple, the Gita Bhavan, and the ancient prison sanctum.",
    coordinatesEstimate: { lat: 27.5055, lng: 77.6698 },
    arKeypoints: [
      { id: "pt-1", label: "The Sacred Prison Cell (Garbha Griha)", featureType: "entrance", description: "Subterranean stone chamber marking the exact spot where Krishna was born at midnight.", x: 50, y: 62 },
      { id: "pt-2", label: "Keshavdeva Grand Nagara Mandir", featureType: "spire", description: "Modern red sandstone temple tower housing the four-armed deity of Keshavdeva.", x: 50, y: 22 },
      { id: "pt-3", label: "Potra Kund Sacred Water Tank", featureType: "arch", description: "Ancient stepped pond where infant Krishna's baby clothes were washed.", x: 68, y: 78 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1st Century BC", event: "Mahakshatrapa Sodasa Inscription", description: "Inscriptions record early stone sanctuaries dedicated to Vasudeva at Mathura." },
      { yearOrEra: "1953–1982", event: "Modern Reconstruction", description: "Reconstructed through the dedicated leadership of Pandit Madan Mohan Malaviya and the Birla trust." }
    ],
    culturalSignificance: "The supreme birthplace of Lord Krishna, visited by millions during the midnight celebrations of Krishna Janmashtami.",
    architecturalSecrets: [
      "The subterranean Garbha Griha features original ancient stone masonry walls believed to be remnants of the Kamsa prison fortress.",
      "Archaeological excavations directly beneath the complex revealed painted grey ware dating back over 3,000 years to the Mahabharata era.",
      "The complex incorporates both the historic prison cell and the majestic Keshavdeva temple built in the classical Nagara red sandstone style."
    ],
    visitorTips: [
      "Strict security: all electronic items, mobile phones, and bags must be deposited in cloakrooms outside.",
      "Visit during Janmashtami in August-September to witness the midnight celebration of Krishna's divine birth."
    ],
    narrationScript: "Welcome to the Shri Krishna Janmasthan in Mathura. Here, beneath these temple halls, lies the subterranean prison cell where Lord Krishna was born five thousand years ago on a stormy midnight to Devaki and Vasudeva. Reconstructed across centuries, this sacred complex stands as an unshakeable monument to hope, righteousness, and the victory of truth over tyranny.",
    chapters: [
      { id: "chap-1", title: "The Prison Cell of the Avatar", timestampHint: "0:00", script: "On a dark midnight in this ancient stone cell, the divine child Krishna appeared.", focusPointId: "pt-1" },
      { id: "chap-2", title: "Birthplace of Bhagavad Gita", timestampHint: "0:30", script: "From Mathura to Kurukshetra, the life of Krishna shaped the philosophical soul of India.", focusPointId: "pt-2" }
    ]
  }
};

/**
 * Rich Canonical Search Aliases for All Global Hindu Temples
 * Guarantees that searches like "kathmandu temple", "nepal temple", "dwarkadhish",
 * "baps new jersey", "baps london", "bali temple", etc. resolve instantly and accurately!
 */
export const HINDU_TEMPLES_GLOBAL_ALIASES: Record<string, string> = {
  // ==========================================
  // KATHMANDU & NEPAL TEMPLES
  // ==========================================
  "kathmandu temple": "pashupatinath temple",
  "kathmandu temples": "pashupatinath temple",
  "temple in kathmandu": "pashupatinath temple",
  "temples in kathmandu": "pashupatinath temple",
  "kathmandu hindu temple": "pashupatinath temple",
  "kathmandu shiva temple": "pashupatinath temple",
  "pashupatinath kathmandu": "pashupatinath temple",
  "kathmandu pashupatinath": "pashupatinath temple",
  "nepal temple": "pashupatinath temple",
  "nepal temples": "pashupatinath temple",
  "nepal hindu temple": "pashupatinath temple",
  "nepal shiva temple": "pashupatinath temple",
  "bagmati temple": "pashupatinath temple",
  "bagmati river temple": "pashupatinath temple",
  "shri pashupatinath": "pashupatinath temple",
  "pashupati nath": "pashupatinath temple",
  "pashupatinath mandir": "pashupatinath temple",
  "काठमाडौँ मन्दिर": "pashupatinath temple",
  "पशुपतिनाथ": "pashupatinath temple",

  // Changu Narayan (Kathmandu Valley / Bhaktapur)
  "changu narayan": "changu narayan temple",
  "changu narayan temple": "changu narayan temple",
  "changu narayana": "changu narayan temple",
  "changu narayan kathmandu": "changu narayan temple",
  "changu narayan bhaktapur": "changu narayan temple",
  "bhaktapur temple": "changu narayan temple",
  "oldest temple in nepal": "changu narayan temple",
  "oldest hindu temple nepal": "changu narayan temple",
  "changu temple": "changu narayan temple",

  // Budhanilkantha (Kathmandu Sleeping Vishnu)
  "budhanilkantha": "budhanilkantha temple",
  "budhanilkantha temple": "budhanilkantha temple",
  "budhanilkantha kathmandu": "budhanilkantha temple",
  "sleeping vishnu": "budhanilkantha temple",
  "sleeping vishnu temple": "budhanilkantha temple",
  "sleeping vishnu kathmandu": "budhanilkantha temple",
  "sleeping vishnu nepal": "budhanilkantha temple",
  "floating vishnu": "budhanilkantha temple",
  "jalasayana narayana": "budhanilkantha temple",
  "budhanilkantha mandir": "budhanilkantha temple",

  // Guhyeshwari (Kathmandu)
  "guhyeshwari": "guhyeshwari temple",
  "guhyeshwari temple": "guhyeshwari temple",
  "guhyeshwari mandir": "guhyeshwari temple",
  "guhyeshwari shakti peetha": "guhyeshwari temple",
  "guhyeshwari kathmandu": "guhyeshwari temple",
  "guhyakali temple": "guhyeshwari temple",

  // Muktinath (Mustang, Nepal)
  "muktinath": "muktinath temple",
  "muktinath temple": "muktinath temple",
  "muktinath mandir": "muktinath temple",
  "muktinath nepal": "muktinath temple",
  "muktinath mustang": "muktinath temple",
  "muktikshetra": "muktinath temple",
  "shri muktinath": "muktinath temple",
  "108 taps nepal": "muktinath temple",

  // Janaki Mandir (Janakpur, Nepal)
  "janaki mandir": "janaki mandir",
  "janaki temple": "janaki mandir",
  "janakpur temple": "janaki mandir",
  "janakpur mandir": "janaki mandir",
  "sita mandir janakpur": "janaki mandir",
  "sita temple nepal": "janaki mandir",
  "nau lakha mandir": "janaki mandir",
  "janakpurdham": "janaki mandir",

  // ==========================================
  // BALI & INDONESIA TEMPLES
  // ==========================================
  "pura besakih": "pura besakih",
  "besakih": "pura besakih",
  "besakih temple": "pura besakih",
  "mother temple of bali": "pura besakih",
  "mother temple bali": "pura besakih",
  "bali mother temple": "pura besakih",
  "pura agung besakih": "pura besakih",
  "mount agung temple": "pura besakih",
  "bali temple": "pura besakih",
  "temple in bali": "pura besakih",
  "temple bali": "pura besakih",

  "tanah lot": "pura tanah lot",
  "pura tanah lot": "pura tanah lot",
  "tanah lot temple": "pura tanah lot",
  "bali sea temple": "pura tanah lot",
  "tanah lot bali": "pura tanah lot",
  "sea temple bali": "pura tanah lot",
  "tanah lot sea temple": "pura tanah lot",

  "uluwatu": "pura uluwatu",
  "pura uluwatu": "pura uluwatu",
  "uluwatu temple": "pura uluwatu",
  "pura luhur uluwatu": "pura uluwatu",
  "bali cliff temple": "pura uluwatu",
  "uluwatu cliff temple": "pura uluwatu",
  "uluwatu bali": "pura uluwatu",

  "ulun danu": "pura ulun danu beratan",
  "pura ulun danu": "pura ulun danu beratan",
  "pura ulun danu beratan": "pura ulun danu beratan",
  "pura ulun danu bratan": "pura ulun danu beratan",
  "ulun danu temple": "pura ulun danu beratan",
  "bedugul temple": "pura ulun danu beratan",
  "bedugul lake temple": "pura ulun danu beratan",
  "bali lake temple": "pura ulun danu beratan",
  "lake beratan temple": "pura ulun danu beratan",

  // ==========================================
  // CAMBODIA, MALAYSIA & SINGAPORE
  // ==========================================
  "banteay srei": "banteay srei",
  "banteay srei temple": "banteay srei",
  "banteay srey": "banteay srei",
  "citadel of women": "banteay srei",
  "pink temple cambodia": "banteay srei",
  "pink sandstone temple": "banteay srei",

  "sri mariamman": "sri mariamman temple singapore",
  "sri mariamman temple": "sri mariamman temple singapore",
  "sri mariamman singapore": "sri mariamman temple singapore",
  "sri mariamman temple singapore": "sri mariamman temple singapore",
  "singapore oldest hindu temple": "sri mariamman temple singapore",
  "chinatown hindu temple": "sri mariamman temple singapore",
  "mariamman temple singapore": "sri mariamman temple singapore",

  // ==========================================
  // SRI LANKA TEMPLES
  // ==========================================
  "koneswaram": "koneswaram temple",
  "koneswaram temple": "koneswaram temple",
  "koneswaram kovil": "koneswaram temple",
  "trincomalee temple": "koneswaram temple",
  "swami rock temple": "koneswaram temple",
  "thirukonamalai koneswaram": "koneswaram temple",
  "thirukoneswaram": "koneswaram temple",

  "nallur": "nallur kandaswamy kovil",
  "nallur temple": "nallur kandaswamy kovil",
  "nallur kovil": "nallur kandaswamy kovil",
  "nallur kandaswamy": "nallur kandaswamy kovil",
  "nallur kandaswamy kovil": "nallur kandaswamy kovil",
  "nallur kandaswamy temple": "nallur kandaswamy kovil",
  "jaffna temple": "nallur kandaswamy kovil",
  "jaffna hindu temple": "nallur kandaswamy kovil",

  // ==========================================
  // NORTH AMERICA, UK & OCEANIA
  // ==========================================
  "neasden temple": "baps shri swaminarayan mandir london",
  "neasden mandir": "baps shri swaminarayan mandir london",
  "baps neasden": "baps shri swaminarayan mandir london",
  "baps london": "baps shri swaminarayan mandir london",
  "london hindu temple": "baps shri swaminarayan mandir london",
  "london swaminarayan mandir": "baps shri swaminarayan mandir london",
  "baps shri swaminarayan mandir london": "baps shri swaminarayan mandir london",

  "sv temple pittsburgh": "sri venkateswara temple pittsburgh",
  "sri venkateswara temple pittsburgh": "sri venkateswara temple pittsburgh",
  "pittsburgh balaji temple": "sri venkateswara temple pittsburgh",
  "pittsburgh hindu temple": "sri venkateswara temple pittsburgh",
  "penn hills hindu temple": "sri venkateswara temple pittsburgh",

  "baps toronto": "baps shri swaminarayan mandir toronto",
  "toronto hindu temple": "baps shri swaminarayan mandir toronto",
  "baps shri swaminarayan mandir toronto": "baps shri swaminarayan mandir toronto",
  "etobicoke mandir": "baps shri swaminarayan mandir toronto",

  "sydney murugan": "sydney murugan temple",
  "sydney murugan temple": "sydney murugan temple",
  "sydney murugan kovil": "sydney murugan temple",
  "murugan temple sydney": "sydney murugan temple",
  "mays hill temple": "sydney murugan temple",

  // ==========================================
  // INDIA: CHAR DHAM, JYOTIRLINGAS & SHAKTI PEETHAS
  // ==========================================
  // Dwarka
  "dwarkadhish": "dwarkadhish temple",
  "dwarkadhish temple": "dwarkadhish temple",
  "dwarka temple": "dwarkadhish temple",
  "dwarkadheesh": "dwarkadhish temple",
  "dwarkadheesh temple": "dwarkadhish temple",
  "jagat mandir dwarka": "dwarkadhish temple",
  "shri dwarkadhish": "dwarkadhish temple",
  "dwarka jagat mandir": "dwarkadhish temple",
  "દ્વારકાધીશ": "dwarkadhish temple",

  // Akshardham Gandhinagar
  "akshardham gandhinagar": "akshardham gandhinagar",
  "gandhinagar akshardham": "akshardham gandhinagar",
  "akshardham gujarat": "akshardham gandhinagar",
  "swaminarayan akshardham gandhinagar": "akshardham gandhinagar",
  "અક્ષરધામ ગાંધીનગર": "akshardham gandhinagar",

  // Modhera Sun Temple
  "modhera": "sun temple modhera",
  "modhera sun temple": "sun temple modhera",
  "sun temple modhera": "sun temple modhera",
  "modhera temple": "sun temple modhera",
  "surya mandir modhera": "sun temple modhera",
  "સૂર્ય મંદિર મોઢેરા": "sun temple modhera",

  // Ambaji
  "ambaji": "ambaji temple",
  "ambaji temple": "ambaji temple",
  "ambaji mata temple": "ambaji temple",
  "ambaji mandir": "ambaji temple",
  "arasur ambaji": "ambaji temple",
  "gabbar ambaji": "ambaji temple",
  "અંબાજી": "ambaji temple",

  // Siddhivinayak Mumbai
  "siddhivinayak": "siddhivinayak temple mumbai",
  "siddhivinayak temple": "siddhivinayak temple mumbai",
  "siddhivinayak mandir": "siddhivinayak temple mumbai",
  "siddhivinayak mumbai": "siddhivinayak temple mumbai",
  "shree siddhivinayak": "siddhivinayak temple mumbai",
  "shree siddhivinayak ganapati mandir": "siddhivinayak temple mumbai",
  "prabhadevi ganpati": "siddhivinayak temple mumbai",
  "सिद्धिविनायक": "siddhivinayak temple mumbai",

  // Trimbakeshwar (10th Jyotirlinga)
  "trimbakeshwar": "trimbakeshwar jyotirlinga temple",
  "trimbakeshwar temple": "trimbakeshwar jyotirlinga temple",
  "trimbakeshwar jyotirlinga": "trimbakeshwar jyotirlinga temple",
  "tryambakeshwar": "trimbakeshwar jyotirlinga temple",
  "trimbakeshwar shiva temple": "trimbakeshwar jyotirlinga temple",
  "nashik jyotirlinga": "trimbakeshwar jyotirlinga temple",
  "त्र्यंबकेश्वर": "trimbakeshwar jyotirlinga temple",

  // Omkareshwar (4th Jyotirlinga)
  "omkareshwar": "omkareshwar jyotirlinga temple",
  "omkareshwar temple": "omkareshwar jyotirlinga temple",
  "omkareshwar jyotirlinga": "omkareshwar jyotirlinga temple",
  "mandhata temple": "omkareshwar jyotirlinga temple",
  "omkareshwar mandir": "omkareshwar jyotirlinga temple",
  "ओंकारेश्वर": "omkareshwar jyotirlinga temple",

  // Bhimashankar (6th Jyotirlinga)
  "bhimashankar": "bhimashankar jyotirlinga temple",
  "bhimashankar temple": "bhimashankar jyotirlinga temple",
  "bhimashankar jyotirlinga": "bhimashankar jyotirlinga temple",
  "bhimashankar mandir": "bhimashankar jyotirlinga temple",
  "pune jyotirlinga": "bhimashankar jyotirlinga temple",
  "भीमाशंकर": "bhimashankar jyotirlinga temple",

  // Grishneshwar (12th Jyotirlinga)
  "grishneshwar": "grishneshwar jyotirlinga temple",
  "grishneshwar temple": "grishneshwar jyotirlinga temple",
  "grishneshwar jyotirlinga": "grishneshwar jyotirlinga temple",
  "ghrushneshwar": "grishneshwar jyotirlinga temple",
  "ellora jyotirlinga": "grishneshwar jyotirlinga temple",
  "verul temple": "grishneshwar jyotirlinga temple",
  "घृष्णेश्वर": "grishneshwar jyotirlinga temple",

  // Mallikarjuna Srisailam (2nd Jyotirlinga)
  "mallikarjuna": "mallikarjuna jyotirlinga temple",
  "mallikarjuna temple": "mallikarjuna jyotirlinga temple",
  "srisailam": "mallikarjuna jyotirlinga temple",
  "srisailam temple": "mallikarjuna jyotirlinga temple",
  "mallikarjuna jyotirlinga": "mallikarjuna jyotirlinga temple",
  "srisailam mallikarjuna": "mallikarjuna jyotirlinga temple",
  "bhramaramba mallikarjuna": "mallikarjuna jyotirlinga temple",
  "మల్లికార్జున": "mallikarjuna jyotirlinga temple",

  // Belur Chennakeshava (Hoysala)
  "belur": "chennakeshava temple belur",
  "belur temple": "chennakeshava temple belur",
  "chennakeshava": "chennakeshava temple belur",
  "chennakeshava temple": "chennakeshava temple belur",
  "chennakesava temple": "chennakeshava temple belur",
  "chennakeshava temple belur": "chennakeshava temple belur",
  "belur chennakeshava": "chennakeshava temple belur",
  "hoysala belur": "chennakeshava temple belur",
  "ಬೇಲೂರು ಚನ್ನಕೇಶವ": "chennakeshava temple belur",

  // Halebidu Hoysaleswara (Hoysala)
  "halebidu": "hoysaleswara temple halebidu",
  "halebid": "hoysaleswara temple halebidu",
  "halebidu temple": "hoysaleswara temple halebidu",
  "halebid temple": "hoysaleswara temple halebidu",
  "hoysaleswara": "hoysaleswara temple halebidu",
  "hoysaleswara temple": "hoysaleswara temple halebidu",
  "hoysaleswara temple halebidu": "hoysaleswara temple halebidu",
  "ಹಳೇಬೀಡು": "hoysaleswara temple halebidu",

  // Murudeshwar
  "murudeshwar": "murudeshwar temple",
  "murudeshwar temple": "murudeshwar temple",
  "murudeshwara": "murudeshwar temple",
  "murudeshwara temple": "murudeshwar temple",
  "giant shiva statue karnataka": "murudeshwar temple",
  "bhatkal shiva temple": "murudeshwar temple",
  "ಮುರುಡೇಶ್ವರ": "murudeshwar temple",

  // Sabarimala
  "sabarimala": "sabarimala ayyappa temple",
  "sabarimala temple": "sabarimala ayyappa temple",
  "ayyappa temple": "sabarimala ayyappa temple",
  "sabarimala ayyappa": "sabarimala ayyappa temple",
  "sabarimala ayyappa temple": "sabarimala ayyappa temple",
  "sabarimala kerala": "sabarimala ayyappa temple",
  "ശബരിമല": "sabarimala ayyappa temple",

  // Guruvayur
  "guruvayur": "guruvayur temple",
  "guruvayur temple": "guruvayur temple",
  "guruvayoor": "guruvayur temple",
  "guruvayoor temple": "guruvayur temple",
  "guruvayur sri krishna": "guruvayur temple",
  "guruvayurappan": "guruvayur temple",
  "ഗുരുവായൂർ": "guruvayur temple",

  // Chidambaram Nataraja
  "chidambaram": "thillai nataraja temple chidambaram",
  "chidambaram temple": "thillai nataraja temple chidambaram",
  "thillai nataraja": "thillai nataraja temple chidambaram",
  "thillai nataraja temple": "thillai nataraja temple chidambaram",
  "chidambaram nataraja": "thillai nataraja temple chidambaram",
  "chidambaram nataraja temple": "thillai nataraja temple chidambaram",
  "thillai natarajar": "thillai nataraja temple chidambaram",
  "சிதம்பரம் நடராஜர்": "thillai nataraja temple chidambaram",

  // Tiruvannamalai Annamalaiyar
  "tiruvannamalai": "annamalaiyar temple tiruvannamalai",
  "tiruvannamalai temple": "annamalaiyar temple tiruvannamalai",
  "annamalaiyar": "annamalaiyar temple tiruvannamalai",
  "annamalaiyar temple": "annamalaiyar temple tiruvannamalai",
  "arunachaleswarar": "annamalaiyar temple tiruvannamalai",
  "arunachaleswarar temple": "annamalaiyar temple tiruvannamalai",
  "arunachala temple": "annamalaiyar temple tiruvannamalai",
  "திருவண்ணாமலை": "annamalaiyar temple tiruvannamalai",

  // Lingaraj Bhubaneswar
  "lingaraj": "lingaraj temple bhubaneswar",
  "lingaraj temple": "lingaraj temple bhubaneswar",
  "lingaraja": "lingaraj temple bhubaneswar",
  "lingaraja temple": "lingaraj temple bhubaneswar",
  "lingaraj temple bhubaneswar": "lingaraj temple bhubaneswar",
  "bhubaneswar lingaraj": "lingaraj temple bhubaneswar",
  "ଲିଙ୍ଗରାଜ": "lingaraj temple bhubaneswar",

  // Kamakhya Guwahati
  "kamakhya": "kamakhya temple guwahati",
  "kamakhya temple": "kamakhya temple guwahati",
  "kamakhya devi": "kamakhya temple guwahati",
  "kamakhya guwahati": "kamakhya temple guwahati",
  "kamakhya temple guwahati": "kamakhya temple guwahati",
  "kamakhya shakti peetha": "kamakhya temple guwahati",
  "কামাখ্যা": "kamakhya temple guwahati",

  // Dakshineswar Kali
  "dakshineswar": "dakshineswar kali temple",
  "dakshineswar kali": "dakshineswar kali temple",
  "dakshineswar temple": "dakshineswar kali temple",
  "dakshineswar kali temple": "dakshineswar kali temple",
  "dakshineswar kolkata": "dakshineswar kali temple",
  "দক্ষিণেশ্বর কালী": "dakshineswar kali temple",

  // Mayapur TOVP
  "mayapur": "mayapur iskcon tovp",
  "mayapur temple": "mayapur iskcon tovp",
  "mayapur iskcon": "mayapur iskcon tovp",
  "tovp": "mayapur iskcon tovp",
  "temple of the vedic planetarium": "mayapur iskcon tovp",
  "iskcon mayapur": "mayapur iskcon tovp",
  "chandradoya mandir mayapur": "mayapur iskcon tovp",

  // Akshardham Delhi
  "akshardham delhi": "akshardham new delhi",
  "akshardham new delhi": "akshardham new delhi",
  "delhi akshardham": "akshardham new delhi",
  "new delhi akshardham": "akshardham new delhi",
  "swaminarayan akshardham delhi": "akshardham new delhi",
  "अक्षरधाम दिल्ली": "akshardham new delhi",

  // Vaishno Devi
  "vaishno devi": "vaishno devi mandir katra",
  "vaishno devi temple": "vaishno devi mandir katra",
  "vaishno devi mandir": "vaishno devi mandir katra",
  "katra vaishno devi": "vaishno devi mandir katra",
  "mata vaishno devi": "vaishno devi mandir katra",
  "shri mata vaishno devi": "vaishno devi mandir katra",
  "वैष्णो देवी": "vaishno devi mandir katra",

  // Amarnath Cave
  "amarnath": "amarnath cave temple",
  "amarnath cave": "amarnath cave temple",
  "amarnath temple": "amarnath cave temple",
  "amarnath yatra": "amarnath cave temple",
  "baba barfani": "amarnath cave temple",
  "holy amarnath cave": "amarnath cave temple",
  "अमरनाथ": "amarnath cave temple",

  // Pushkar Brahma
  "brahma temple": "brahma temple pushkar",
  "brahma temple pushkar": "brahma temple pushkar",
  "pushkar temple": "brahma temple pushkar",
  "pushkar brahma temple": "brahma temple pushkar",
  "jagatpita brahma mandir": "brahma temple pushkar",
  "ब्रह्मा मंदिर पुष्कर": "brahma temple pushkar",

  // Banke Bihari Vrindavan
  "banke bihari": "banke bihari temple vrindavan",
  "banke bihari temple": "banke bihari temple vrindavan",
  "banke bihari mandir": "banke bihari temple vrindavan",
  "vrindavan temple": "banke bihari temple vrindavan",
  "bankey bihari": "banke bihari temple vrindavan",
  "बाँके बिहारी": "banke bihari temple vrindavan",

  // Krishna Janmasthan Mathura
  "krishna janmasthan": "krishna janmasthan mathura",
  "krishna janmabhoomi": "krishna janmasthan mathura",
  "mathura temple": "krishna janmasthan mathura",
  "mathura krishna temple": "krishna janmasthan mathura",
  "shri krishna janmasthan": "krishna janmasthan mathura",
  "कृष्ण जन्मभूमि मथुरा": "krishna janmasthan mathura"
};
