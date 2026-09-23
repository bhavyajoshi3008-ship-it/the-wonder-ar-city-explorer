import { FallbackLandmarkData } from "./landmarkDossiers";

export const INDIAN_COLLEGES_DOSSIERS: Record<string, FallbackLandmarkData> = {
  // ==========================================
  // 1. PRESIDENCY COLLEGE / UNIVERSITY, KOLKATA
  // ==========================================
  "presidency college kolkata": {
    name: "Presidency College (Presidency University), Kolkata",
    localName: "প্রেসিডেন্সি কলেজ / প্রেসিডেন্সি বিশ্ববিদ্যালয়",
    city: "Kolkata, West Bengal",
    country: "India",
    architecturalStyle: "Colonial Neoclassical & High Victorian Academic",
    periodEra: "Founded 1817 as Hindoo College / Main Building 1874",
    confidence: 99,
    summary: "Established in 1817, Presidency College is India's oldest modern collegiate institution. Located on College Street in Kolkata, its magnificent red-and-white colonial facade, grand portico with classical Ionic columns, and historic Derozio Hall formed the intellectual crucible of the Bengal Renaissance, producing Nobel laureates, freedom fighters, and pioneering scientists.",
    coordinatesEstimate: { lat: 22.5739, lng: 88.3629 },
    arKeypoints: [
      { id: "pt-1", label: "Classical Ionic Portico", featureType: "column", description: "Colonial pedimented entrance supported by fluted Ionic columns overlooking College Street.", x: 50, y: 30 },
      { id: "pt-2", label: "Historic Clock Tower Turret", featureType: "clock", description: "Central Victorian clock tower rising above the tiered parapet of the Main Heritage Building.", x: 50, y: 15 },
      { id: "pt-3", label: "Derozio Hall & Quadrangle", featureType: "facade", description: "Historic academic quadrangle where the 'Young Bengal' intellectual movement gathered in the 1820s.", x: 25, y: 65 },
      { id: "pt-4", label: "Baker Laboratory Wing", featureType: "facade", description: "World-renowned research laboratory where Sir Jagadish Chandra Bose pioneered microwave radio optics.", x: 75, y: 70 }
    ],
    historicalTimeline: [
      { yearOrEra: "1817", event: "Foundation as Hindoo College", description: "Raja Ram Mohan Roy, David Hare, and Radhakanta Deb founded Hindoo College to impart modern secular education." },
      { yearOrEra: "1855", event: "Renamed Presidency College", description: "The government took over administration, rechristening it Presidency College as Bengal's premier academic center." },
      { yearOrEra: "1874", event: "Grand Main Building Dedication", description: "Architect W. B. Macleod completed the present majestic Neoclassical campus on College Street." },
      { yearOrEra: "Present", event: "Presidency University of India", description: "Elevated to a full university, having educated Nobel laureates Rabindranath Tagore (attended), Amartya Sen, and Abhijit Banerjee, plus Satyajit Ray, Netaji Subhash Chandra Bose, and Dr. Rajendra Prasad." }
    ],
    architecturalSecrets: [
      "Sir J.C. Bose conducted his foundational wireless millimeter-wave experiments in 1895 inside the Baker Laboratory, predating Marconi's public transmission.",
      "The college clock tower bell was cast in England and has chimed across Kolkata's famous boipara (book district) for 150 years.",
      "Directly opposite the main gate sits the legendary Indian Coffee House, where generations of Presidency scholars and revolutionaries debated politics and literature."
    ],
    culturalSignificance: "Presidency College was the primary intellectual engine of the 19th-century Bengal Renaissance and India's independence struggle, establishing modern Indian science, literature, economics, and national consciousness.",
    visitorTips: [
      "Stroll down College Street (the world's largest second-hand book market) to enter through the historic wrought-iron gates.",
      "Visit Derozio Hall and the Central Library housing rare manuscripts from the early 1800s.",
      "Stop by the Indian Coffee House across the street for hot filter coffee and scholarly Kolkata ambiance."
    ],
    narrationScript: "You stand before Presidency College on Kolkata's famed College Street—India's oldest institution of modern collegiate education. Founded in 1817 as Hindoo College by Raja Ram Mohan Roy and David Hare, these classical Ionic colonnades and red-brick courtyards sparked the Bengal Renaissance. In the Baker Labs, Sir Jagadish Chandra Bose unlocked the secrets of plant physiology and microwave radio waves. From Netaji Subhash Chandra Bose to Nobel laureates Amartya Sen and Abhijit Banerjee, and cinema master Satyajit Ray, this campus has shaped the intellectual destiny of modern India.",
    chapters: [
      { id: "ch-1", title: "Cradle of Modern India (1817)", timestampHint: "0:00", script: "Born in 1817, Hindoo College became Presidency, igniting the Bengal Renaissance on College Street.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Baker Labs & Scientific Revelation", timestampHint: "0:30", script: "Here J.C. Bose, P.C. Ray, and Meghnad Saha established India's modern physical and chemical sciences.", focusPointId: "pt-4" },
      { id: "ch-3", title: "Derozio's Enduring Flame", timestampHint: "1:00", script: "Henry Derozio and his students championed rational free inquiry, forging the spirit of Indian freedom.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Presidency University (formerly Presidency College)",
      foundationYear: 1817,
      tradition: "Bengal Renaissance & Indian Scientific Awakening",
      notableAlumni: ["Netaji Subhas Chandra Bose", "Amartya Sen", "Abhijit Banerjee", "Satyajit Ray", "Jagadish Chandra Bose", "Prafulla Chandra Ray", "Satyendra Nath Bose", "Dr. Rajendra Prasad"]
    }
  },

  // ==========================================
  // 2. ST. XAVIER'S COLLEGE, MUMBAI
  // ==========================================
  "st xaviers college mumbai": {
    name: "St. Xavier's College, Mumbai",
    localName: "सेंट झेवियर्स कॉलेज, मुंबई",
    city: "Mumbai, Maharashtra",
    country: "India",
    architecturalStyle: "Indo-Gothic & Victorian Neo-Gothic",
    periodEra: "Founded 1869 by German Jesuits / Campus 1873",
    confidence: 99,
    summary: "Founded in 1869 by German Jesuits in South Mumbai's Fort heritage precinct, St. Xavier's College is one of India's most celebrated architectural and academic institutions. Its soaring Indo-Gothic arches, stone gargoyles, cloistered quadrangle, and stained-glass chapel make it an architectural and cultural jewel of Mumbai.",
    coordinatesEstimate: { lat: 18.9430, lng: 72.8315 },
    arKeypoints: [
      { id: "pt-1", label: "Gothic Pointed Portal & Rose Crest", featureType: "arch", description: "Central entrance with pointed Gothic lancet arch and Jesuit IHS crest carved in Porbandar stone.", x: 50, y: 35 },
      { id: "pt-2", label: "Central Cloistered Quadrangle", featureType: "facade", description: "Famous open stone courtyard bordered by Gothic arcaded corridors, venue for Malhar festival.", x: 50, y: 65 },
      { id: "pt-3", label: "Historic College Chapel", featureType: "spire", description: "19th-century private chapel featuring Bavarian stained-glass windows and teakwood pews.", x: 25, y: 25 },
      { id: "pt-4", label: "Stone Gargoyles & Parapet", featureType: "relief", description: "Hand-chiseled basalt and Kurla stone gargoyles lining the rooftop rain channels.", x: 75, y: 20 }
    ],
    historicalTimeline: [
      { yearOrEra: "1869", event: "Foundation by German Jesuits", description: "Father Joseph Willy and Jesuit fathers opened St. Xavier's College with two students." },
      { yearOrEra: "1873", event: "Completion of Gothic Campus", description: "Architect Father Martin Wagner erected the grand Indo-Gothic basalt and stone collegiate building." },
      { yearOrEra: "1979", event: "Inception of Malhar", description: "Students launched 'Malhar', which grew into Asia's premier collegiate cultural festival." },
      { yearOrEra: "Present", event: "Autonomous Heritage Preeminence", description: "Consistently recognized as a top arts and science institution, producing captains of Indian industry, politics, and the arts." }
    ],
    architecturalSecrets: [
      "The college's Heras Institute of Indian History and Culture houses an invaluable collection of 3,000-year-old Indus Valley artifacts, Christian art, and Mughal miniatures.",
      "The central 'Quad' was acoustically designed so that choral singing inside the chapel resonates cleanly through the stone colonnades.",
      "The college facade was constructed using locally quarried blue-gray Kurla basalt and yellow Porbandar sandstone, creating a striking two-tone chromatic effect."
    ],
    culturalSignificance: "St. Xavier's Mumbai is synonymous with collegiate excellence, liberal arts vigor, and architectural preservation in India, serving as the cultural heart of South Mumbai for over 150 years.",
    visitorTips: [
      "Visit during the Malhar festival in August to experience the electric student culture inside the historic Quad.",
      "Ask permission to view the Heras Institute museum on the second floor.",
      "Walk the arcaded corridors in the late afternoon when sunlight streams through the Gothic lancet windows."
    ],
    narrationScript: "Welcome to St. Xavier's College, nestled in the historic Fort district of Mumbai. Founded in 1869 by German Jesuit missionaries, this Indo-Gothic masterpiece was built from Kurla basalt and golden Porbandar stone. Step into the central Quadrangle, framed by double-tiered Gothic pointed arcades and chiseled stone gargoyles. Within these historic halls, generations of India's leaders, scientists, and artists have walked—from Dr. Homi Bhabha and Mukesh Ambani to Sunil Gavaskar and Zakir Hussain. The air here vibrates with academic inquiry and Mumbai's vibrant youth culture.",
    chapters: [
      { id: "ch-1", title: "Gothic Splendor of Fort", timestampHint: "0:00", script: "Erected in 1873, St. Xavier's Indo-Gothic arches define South Mumbai's collegiate heritage.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Quad & Malhar Spirit", timestampHint: "0:30", script: "The Quadrangle serves as the beating heart of the campus, hosting Asia's biggest college festival.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Heras Institute Treasures", timestampHint: "1:00", script: "Inside lies Father Heras's world-famous archive of Indus Valley script and ancient Indian iconography.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "St. Xavier's College, Mumbai",
      foundationYear: 1869,
      tradition: "Jesuit Liberal Arts & Scientific Education",
      notableAlumni: ["Mukesh Ambani", "Sunil Gavaskar", "Zakir Hussain", "Adi Godrej", "Vidya Balan", "Alyque Padamsee", "Shabana Azmi"]
    }
  },

  // ==========================================
  // 3. UNIVERSITY OF MUMBAI (FORT CAMPUS & RAJABAI TOWER)
  // ==========================================
  "university of mumbai": {
    name: "University of Mumbai (Fort Campus & Rajabai Clock Tower)",
    localName: "मुंबई विद्यापीठ (फोर्ट परिसर व राजाबाई टॉवर)",
    city: "Mumbai, Maharashtra",
    country: "India",
    architecturalStyle: "Venetian Gothic & Victorian Gothic (UNESCO World Heritage Site)",
    periodEra: "Founded 1857 / Clock Tower Completed 1878",
    confidence: 99,
    summary: "Part of the UNESCO World Heritage Victorian Gothic and Art Deco Ensembles of Mumbai, the Fort Campus of the University of Mumbai was designed by legendary English architect Sir George Gilbert Scott. Crowned by the 85-meter Rajabai Clock Tower—modeled after Big Ben—and the magnificent Convocation Hall with its stained-glass rose window, this is one of the world's greatest collegiate Gothic monuments.",
    coordinatesEstimate: { lat: 18.9298, lng: 72.8301 },
    arKeypoints: [
      { id: "pt-1", label: "85-Meter Rajabai Clock Tower", featureType: "clock", description: "Iconic Venetian Gothic clock tower modeled after Big Ben and Giotto's Campanile, funded by Premchand Roychand.", x: 50, y: 15 },
      { id: "pt-2", label: "Convocation Hall Rose Window", featureType: "facade", description: "Exquisite stained-glass wheel window depicting the signs of the zodiac, crafted in London.", x: 30, y: 55 },
      { id: "pt-3", label: "Collegiate Flying Buttresses", featureType: "column", description: "Deeply articulated stone flying buttresses supporting the vaulted timber roof of the University Library.", x: 70, y: 60 },
      { id: "pt-4", label: "Scott's Spiral Turret Staircase", featureType: "spire", description: "Octagonal stone spiral staircase turret carved with figures representing Indian castes and crafts.", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1857", event: "Founding Charter of the University", description: "Established under the Wood's Despatch as one of India's first three modern presidency universities." },
      { yearOrEra: "1862", event: "Scott Commissioned as Architect", description: "Sir George Gilbert Scott designed the library and hall from London without ever visiting India." },
      { yearOrEra: "1878", event: "Rajabai Tower Completion", description: "Cotton merchant Premchand Roychand donated 200,000 rupees to build the clock tower, named for his blind mother Rajabai." },
      { yearOrEra: "2018", event: "Inscribed as UNESCO World Heritage", description: "Inscribed by UNESCO as a premier component of the Victorian Gothic Ensemble of Mumbai." }
    ],
    architecturalSecrets: [
      "Sir George Gilbert Scott never set foot in India; he drew all plans in his London office, combining Venetian Gothic tracery with teak timber and Porbandar stone to withstand monsoon rain.",
      "The tower clock struck 16 different tunes during the colonial era, including 'Home Sweet Home' and 'Rule Britannia'.",
      "Premchand Roychand insisted on the clock chimes so his mother Rajabai, who was blind and followed strict Jain dietary vows, would know when to take her evening meal before sunset."
    ],
    culturalSignificance: "Standing proudly opposite the Oval Maidan, the University of Mumbai represents the pinnacle of 19th-century academic Gothic architecture in Asia, anchoring Mumbai's legal, civic, and educational emergence.",
    visitorTips: [
      "View the full 85-meter vertical elevation across the Oval Maidan palm trees for the most breathtaking photograph.",
      "Notice the 24 stone statues on the tower corners representing Indian communities sculpted by students of the J.J. School of Art.",
      "Visit the adjacent High Court building to appreciate South Mumbai's unified Victorian Gothic skyline."
    ],
    narrationScript: "Towering 85 meters above Mumbai's Oval Maidan rises the Rajabai Clock Tower and the Fort Campus of the University of Mumbai. Inscribed by UNESCO as a World Heritage treasure, this complex was designed by Sir George Gilbert Scott—the same architect who gave London the St. Pancras station. Look up at the clock tower: financed in the 1870s by financier Premchand Roychand so his blind mother Rajabai could hear the bells strike before sunset. Within the adjacent Convocation Hall, a luminous stained-glass rose window casts amber and crimson light across polished teak floors. Founded in 1857, this university has graduated freedom fighters, Chief Justices, and Prime Ministers.",
    chapters: [
      { id: "ch-1", title: "A Gift of Filial Love", timestampHint: "0:00", script: "Premchand Roychand built this 85-meter tower so his blind mother could hear the hour strike.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Scott's Venetian Masterpiece", timestampHint: "0:30", script: "Gilbert Scott merged Venetian Gothic arcades with local Indian stone to withstand the monsoon.", focusPointId: "pt-2" },
      { id: "ch-3", title: "UNESCO World Heritage", timestampHint: "1:00", script: "In 2018, UNESCO recognized Mumbai's Victorian Gothic ensemble as universally significant.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Mumbai (Fort Campus)",
      foundationYear: 1857,
      tradition: "Presidency University & UNESCO Victorian Gothic Ensemble",
      notableAlumni: ["Mahatma Gandhi (studied law)", "B. R. Ambedkar", "Bal Gangadhar Tilak", "Pherozeshah Mehta", "Dadabhai Naoroji", "Kashinath Trimbak Telang"]
    }
  },

  // ==========================================
  // 4. IIT ROORKEE (THOMASON COLLEGE OF CIVIL ENGINEERING)
  // ==========================================
  "iit roorkee": {
    name: "IIT Roorkee (Thomason College of Civil Engineering)",
    localName: "भारतीय प्रौद्योगिकी संस्थान रुड़की",
    city: "Roorkee, Uttarakhand",
    country: "India",
    architecturalStyle: "Colonial Renaissance Revival & British Classical Academic",
    periodEra: "Founded 1847 by Sir James Thomason / Main Building 1853",
    confidence: 99,
    summary: "Founded in 1847, the Indian Institute of Technology Roorkee (originally Thomason College of Civil Engineering) is the oldest engineering and technical university in Asia. Its grand white-domed James Thomason Building, with its monumental classical portico and colonnades, was established to train engineers for the colossal Upper Ganges Canal project and remains an enduring icon of world engineering heritage.",
    coordinatesEstimate: { lat: 29.8649, lng: 77.8965 },
    arKeypoints: [
      { id: "pt-1", label: "James Thomason Central Dome", featureType: "dome", description: "Brilliant white hemispherical dome crowning the central axis of the heritage engineering building.", x: 50, y: 18 },
      { id: "pt-2", label: "Doric Colonnaded Grand Portico", featureType: "column", description: "Monumental classical portico designed by Lt. Col. Robert Maclagan, welcoming dignitaries since 1853.", x: 50, y: 48 },
      { id: "pt-3", label: "Senate Hall & Convocation Quad", featureType: "facade", description: "High-ceilinged assembly chamber where pioneering canal and structural engineers received their commissions.", x: 30, y: 70 },
      { id: "pt-4", label: "Heritage Artillery Gun & Lawn", featureType: "statue", description: "Historic British ordnance cannon guarding the manicured central parade lawn.", x: 75, y: 82 }
    ],
    historicalTimeline: [
      { yearOrEra: "1847", event: "Establishment of Asia's 1st Engineering College", description: "Lieutenant Governor James Thomason founded the college to train engineers for the 350-mile Upper Ganges Canal." },
      { yearOrEra: "1853", event: "Main Heritage Building Opened", description: "The majestic Renaissance Revival classical building was inaugurated by Lt. Col. Robert Maclagan." },
      { yearOrEra: "1949", event: "University of Roorkee Chartered", description: "Became India's first engineering university following independence, chartered by Prime Minister Jawaharlal Nehru." },
      { yearOrEra: "2001", event: "Designated as IIT Roorkee", description: "Incorporated into the prestigious Indian Institute of Technology system as IIT Roorkee." }
    ],
    architecturalSecrets: [
      "The college was directly created because of a water emergency: engineers were desperately needed to construct the Solani Aqueduct—at the time the largest brick masonry aqueduct in the world.",
      "The Main Building was engineered using lime mortar and baked brick coated in chunam (polished shell plaster) to create its marble-like white finish.",
      "The campus houses the National Institute of Hydrology and an Earthquake Engineering department that calibrated India's first seismic zoning maps."
    ],
    culturalSignificance: "IIT Roorkee birthed the discipline of civil and irrigation engineering across South Asia, constructing dams, railways, tunnels, and canal networks that transformed India from drought to agricultural bounty.",
    visitorTips: [
      "Photograph the James Thomason Building from the main circular drive in morning light.",
      "Visit the Roorkee Archive and Model Room displaying 19th-century brass theodolites and Ganges Canal hydraulic scale models.",
      "Walk to the nearby Solani Aqueduct, engineered by the college's early directors."
    ],
    narrationScript: "You stand before the majestic James Thomason Building at IIT Roorkee—the oldest technical institution in all of Asia. Founded in 1847 as the Thomason College of Civil Engineering, this classical white-domed temple of science was born to build the Upper Ganges Canal. Designed by Lieutenant Colonel Robert Maclagan, its massive Doric colonnades, circular rotunda, and expansive lawns have welcomed the greatest minds in civil, mechanical, and electrical engineering. In 1949 it became India's first engineering university, and today stands as a titan of global technological innovation.",
    chapters: [
      { id: "ch-1", title: "Asia's Oldest Engineering Seat", timestampHint: "0:00", script: "Born in 1847 to build the Ganges Canal, Roorkee launched technical education across the continent.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Classical Dome & Doric Portico", timestampHint: "0:30", script: "Completed in 1853, this symmetrical white palace of engineering remains an architectural triumph.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Engineering Modern India", timestampHint: "1:00", script: "Roorkee engineers designed India's massive dams, Himalayan railways, and canal waterways.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Indian Institute of Technology Roorkee (Thomason College)",
      foundationYear: 1847,
      tradition: "Asia's Oldest Engineering & Technical Institution",
      notableAlumni: ["Sir Ganga Ram", "Ajit Gupta", "Amit Singhal", "Naveen Jain", "Dinesh Paliwal", "Vinita Gupta"]
    }
  },

  // ==========================================
  // 5. UNIVERSITY OF MADRAS (SENATE HOUSE)
  // ==========================================
  "university of madras": {
    name: "University of Madras (Senate House & Chepauk Campus)",
    localName: "சென்னைப் பல்கலைக்கழகம் (செனட் ஹவுஸ்)",
    city: "Chennai, Tamil Nadu",
    country: "India",
    architecturalStyle: "Indo-Saracenic & Byzantine Revival",
    periodEra: "Founded 1857 / Senate House Built 1874–1879",
    confidence: 99,
    summary: "Overlooking the azure waters of Marina Beach in Chepauk, Senate House at the University of Madras is celebrated as the supreme masterpiece of Indo-Saracenic architecture in India. Designed by Robert Chisholm and completed in 1879, its vibrant polychromatic stone towers, Moorish arches, Byzantine domes, and hand-painted stained-glass clerestory form one of South Asia's most breathtaking collegiate landmarks.",
    coordinatesEstimate: { lat: 13.0645, lng: 80.2828 },
    arKeypoints: [
      { id: "pt-1", label: "Polychrome Byzantine Corner Domes", featureType: "dome", description: "Four bulbous copper-green and terracotta corner minaret domes inspired by Byzantine and Mughal forms.", x: 20, y: 15 },
      { id: "pt-2", label: "Moorish Horseshoe Great Portal", featureType: "arch", description: "Monumental arched colonnade with alternating bands of sandstone and brick overlooking Marina Beach.", x: 50, y: 40 },
      { id: "pt-3", label: "Stained-Glass Clerestory Windows", featureType: "facade", description: "Luminous geometric stained-glass roundels illuminating the soaring 1,000-seat central Great Hall.", x: 50, y: 65 },
      { id: "pt-4", label: "Chepauk Seaside Plinth & Colonnade", featureType: "column", description: "Rusticated granite foundation designed to resist corrosive coastal Bay of Bengal sea spray.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1857", event: "Incorporation by British Royal Charter", description: "Organized on the model of the University of London as one of India's three original presidency universities." },
      { yearOrEra: "1874", event: "Chisholm Commences Senate House", description: "Robert Fellowes Chisholm broke away from European classical models to create authentic Indo-Saracenic synthesis." },
      { yearOrEra: "1879", event: "Inauguration of the Great Hall", description: "Opened as the venue for university convocations, public debates, and governor-general addresses." },
      { yearOrEra: "Present", event: "Alma Mater of Nobel Laureates", description: "Alma mater of two Indian Nobel laureates in Physics: Sir C. V. Raman and Subrahmanyan Chandrasekhar, plus mathematics genius Srinivasa Ramanujan." }
    ],
    architecturalSecrets: [
      "Architect Robert Chisholm studied the palace of Tirumala Nayak in Madurai and Islamic domes in Bijapur to develop the ventilation system that keeps the interior naturally cool in Chennai's tropical heat.",
      "The immense Great Hall measures 130 feet by 58 feet and is supported without a single internal pillar, allowing uninterrupted sightlines during convocation.",
      "The stained glass inside features subtle lotus and palm leaf motifs blended with Celtic knots, embodying Chisholm's philosophy of cultural architectural harmony."
    ],
    culturalSignificance: "The University of Madras is the mother institution of modern higher education across South India, having given birth to Mysore, Osmania, Andhra, and Annamalai universities, and nurtured India's finest minds.",
    visitorTips: [
      "Stand on Kamarajar Salai along Marina Beach to capture Senate House with its distinct four-domed seaside silhouette.",
      "Observe the intricate hand-painted ceiling inside the Great Hall, restored to its 1879 polychrome glory.",
      "Visit nearby Chepauk Palace and Vivekananda House along Chennai's heritage shoreline."
    ],
    narrationScript: "You stand before Senate House at the University of Madras, rising gracefully above Chennai's Marina Beach. Built between 1874 and 1879 by master architect Robert Chisholm, this is widely acclaimed as the pinnacle of Indo-Saracenic architecture. Chisholm harmonized Byzantine domes, Mughal chhatris, and Dravidian temple stonecraft with European spatial engineering. Behind these colorful brick arches and stained glass roundels, Sir C.V. Raman explored the scattering of light, Subrahmanyan Chandrasekhar studied stellar mass, and Srinivasa Ramanujan presented his mathematical discoveries. This campus is a lighthouse of South Indian intellectual excellence.",
    chapters: [
      { id: "ch-1", title: "Chisholm's Indo-Saracenic Masterwork", timestampHint: "0:00", script: "Senate House married Byzantine domes with Dravidian craftsmanship on Marina Beach.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Pillarless Great Hall", timestampHint: "0:30", script: "Its vast 1,000-seat hall features stained glass clerestories and no central columns.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Nobel Legacy of Madras", timestampHint: "1:00", script: "C.V. Raman, Chandrasekhar, and Ramanujan made this university world-famous in physics and math.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Madras (Senate House)",
      foundationYear: 1857,
      tradition: "Presidency University & Indo-Saracenic Heritage",
      notableAlumni: ["C. V. Raman (Nobel Laureate)", "Subrahmanyan Chandrasekhar (Nobel Laureate)", "Srinivasa Ramanujan", "Sarvepalli Radhakrishnan", "A. P. J. Abdul Kalam", "V. K. Krishna Menon"]
    }
  },

  // ==========================================
  // 6. FERGUSSON COLLEGE, PUNE
  // ==========================================
  "fergusson college pune": {
    name: "Fergusson College, Pune",
    localName: "फर्ग्युसन महाविद्यालय, पुणे",
    city: "Pune, Maharashtra",
    country: "India",
    architecturalStyle: "Victorian Gothic & Native Basalt Stonecraft",
    periodEra: "Founded 1885 by Deccan Education Society / Main Building 1892",
    confidence: 99,
    summary: "Founded in 1885 by national stalwarts Bal Gangadhar Tilak, Gopal Ganesh Agarkar, and Mahadev Ballal Namjoshi under the Deccan Education Society, Fergusson College is the first privately governed indigenous college in India. Its iconic Main Building, sculpted from dark Pune basalt stone with Gothic lancets, a central clock tower, and the open-air Kimaya amphitheatre, was central to India's freedom struggle.",
    coordinatesEstimate: { lat: 18.5236, lng: 73.8402 },
    arKeypoints: [
      { id: "pt-1", label: "Main Building Basalt Gothic Tower", featureType: "spire", description: "Central Gothic tower constructed from local Deccan black basalt with pointed arched bell chamber.", x: 50, y: 20 },
      { id: "pt-2", label: "Arcaded Ground-Floor Verandah", featureType: "arch", description: "Broad stone Gothic colonnade providing shade and airflow during warm Maharashtra afternoons.", x: 50, y: 55 },
      { id: "pt-3", label: "Historic Amphitheatre", featureType: "facade", description: "Classical tiered lecture hall where Gopal Krishna Gokhale and national leaders delivered historic speeches.", x: 25, y: 70 },
      { id: "pt-4", label: "Wrangler Paranjpye Mathematical Memorial", featureType: "statue", description: "Memorial to R.P. Paranjpye, the first Indian Senior Wrangler at Cambridge University.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1885", event: "Foundation by Tilak & Agarkar", description: "Deccan Education Society established the college, named after Bombay Governor Sir James Fergusson." },
      { yearOrEra: "1892", event: "Opening of Main Basalt Campus", description: "Governor Lord Harris dedicated the imposing Gothic main building designed by Rao Bahadur V. B. Kanitkar." },
      { yearOrEra: "1905", event: "Swadeshi & Nationalist Hub", description: "Vinayak Damodar Savarkar organized a bonfire of foreign cloth on campus grounds during the Swadeshi movement." },
      { yearOrEra: "Present", event: "Autonomous Heritage Crown of Pune", description: "Remains one of Maharashtra's highest-ranked arts and sciences colleges, educating two Indian Prime Ministers." }
    ],
    architecturalSecrets: [
      "The Main Building was designed entirely by an Indian civil engineer, Rao Bahadur V. B. Kanitkar, demonstrating indigenous mastery of Gothic masonry without British architects.",
      "The iconic outdoor canteen area known as 'Kimaya' was designed by legendary architect Achyut Kanvinde to foster open intellectual camaraderie.",
      "The college sits on 65 acres nestled against the sacred Fergusson Hill (Tekdi), preserving a rare green urban biodiversity reserve in the heart of Pune."
    ],
    culturalSignificance: "Fergusson College was the political and intellectual nursery of modern Maharashtra. Two Indian Prime Ministers—P.V. Narasimha Rao and V.P. Singh—were educated here, alongside national stalwarts Gopal Krishna Gokhale and Veer Savarkar.",
    visitorTips: [
      "Walk the heritage corridor of the Main Building to view the historic portraits of Tilak, Agarkar, and Gokhale.",
      "Visit the iconic Amphitheatre where national debates took place during the freedom movement.",
      "Hike up the Fergusson Hill (Tekdi) at sunrise for a panoramic view of the Gothic campus amidst morning mist."
    ],
    narrationScript: "You stand on the leafy campus of Fergusson College in Pune—India's first indigenously founded and managed college. In 1885, national leaders Bal Gangadhar Tilak and Gopal Ganesh Agarkar established this institution to provide patriotic, self-reliant education to Indian youth. Carved from dark Deccan basalt by Indian engineer V.B. Kanitkar, the Main Building's Gothic clock tower and lancet verandahs have witnessed the dawn of India's independence movement. From this stone amphitheatre, Gokhale expounded liberal statecraft, Savarkar ignited the Swadeshi bonfire, and two future Prime Ministers—P.V. Narasimha Rao and V.P. Singh—began their political journeys.",
    chapters: [
      { id: "ch-1", title: "Birth of Indigenous Education", timestampHint: "0:00", script: "Tilak and Agarkar founded Fergusson in 1885 to foster national pride and scientific scholarship.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Basalt Gothic Architecture", timestampHint: "0:30", script: "Built by Indian engineer Kanitkar, its dark basalt arches withstand centuries of Pune sun and rain.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Nursery of Statesmen", timestampHint: "1:00", script: "Two Indian Prime Ministers and countless freedom fighters took their first academic steps right here.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Fergusson College (Autonomous), Pune",
      foundationYear: 1885,
      tradition: "Deccan Education Society & Nationalist Revival",
      notableAlumni: ["P. V. Narasimha Rao (Prime Minister)", "V. P. Singh (Prime Minister)", "Vinayak Damodar Savarkar", "Gopal Krishna Gokhale", "P. L. Deshpande", "Irawati Karve"]
    }
  },

  // ==========================================
  // 7. ALIGARH MUSLIM UNIVERSITY (AMU)
  // ==========================================
  "aligarh muslim university": {
    name: "Aligarh Muslim University (AMU / Strachey Hall)",
    localName: "علی گڑھ مسلم یونیورسٹی / अलीगढ़ मुस्लिम विश्वविद्यालय",
    city: "Aligarh, Uttar Pradesh",
    country: "India",
    architecturalStyle: "Mughal-Victorian Gothic & Indo-Saracenic",
    periodEra: "Founded 1875 by Sir Syed Ahmad Khan as MAO College / AMU 1920",
    confidence: 99,
    summary: "Founded in 1875 by the great reformer and statesman Sir Syed Ahmad Khan as the Muhammadan Anglo-Oriental (MAO) College, Aligarh Muslim University is one of India's premier historic central universities. Its majestic Strachey Hall, with its cusped Mughal arches, fluted minarets, and sprawling heritage quadrangle, spearheaded modern scientific education and social reform in South Asia.",
    coordinatesEstimate: { lat: 27.9142, lng: 78.0777 },
    arKeypoints: [
      { id: "pt-1", label: "Strachey Hall Cusped Arches", featureType: "arch", description: "Monumental facade featuring Mughal scalloped arches and British collegiate brickwork completed in 1883.", x: 50, y: 35 },
      { id: "pt-2", label: "Sir Syed Mosque Minarets", featureType: "spire", description: "Slender Mughal-style minarets rising over the Jama Masjid within the university quadrangle.", x: 25, y: 20 },
      { id: "pt-3", label: "Victoria Gate Portal", featureType: "entrance", description: "Ceremonial Indo-Saracenic gate named in honor of Queen Victoria, guarding the central university lawn.", x: 75, y: 60 },
      { id: "pt-4", label: "Sir Syed's Tomb & Garden", featureType: "facade", description: "Final resting place of founder Sir Syed Ahmad Khan on the side of the grand central mosque.", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1875", event: "Foundation of MAO College", description: "Sir Syed Ahmad Khan founded the college to harmonize Islamic heritage with modern Western science and literature." },
      { yearOrEra: "1877", event: "Viceroy Lays Foundation Stone", description: "Lord Lytton laid the foundation stone of Strachey Hall, named after Sir John Strachey." },
      { yearOrEra: "1920", event: "Chartered as Central University", description: "The imperial legislative council passed the AMU Act, elevating the college to a full central university." },
      { yearOrEra: "Present", event: "Global Academic Flagship", description: "Boasts over 30,000 students and 13 faculties, recognized as an Institution of National Importance." }
    ],
    architecturalSecrets: [
      "Strachey Hall's yellow and red brick facade was consciously designed to combine Cambridge collegiate quadrangles with Mughal palace chhatris and cusped iwans.",
      "The central Jama Masjid inside the campus can accommodate 20,000 worshippers, featuring pure white marble domes and Quranic calligraphy.",
      "Sir Syed chose Aligarh specifically because of its salubrious climate and central position between Delhi and Agra, ensuring independence from imperial capitals."
    ],
    culturalSignificance: "AMU initiated the historic Aligarh Movement, which transformed education, language, and civic leadership across South Asia, graduating heads of state, scientists, poets, and Olympic legends.",
    visitorTips: [
      "Visit Strachey Hall during morning hours to witness the sun illuminating its grand cusped arch colonnade.",
      "Pay respects at Sir Syed Ahmad Khan's peaceful tomb beside the university mosque.",
      "Visit the Maulana Azad Library, one of the largest academic libraries in Asia containing over 1.4 million books."
    ],
    narrationScript: "You are looking upon Strachey Hall at Aligarh Muslim University, founded in 1875 by visionary reformer Sir Syed Ahmad Khan. After witnessing the collapse of traditional education, Sir Syed set out to create an Indian Cambridge—harmonizing modern scientific inquiry with India's deep cultural heritage. Built from warm terracotta brick with elegant Mughal cusped arches and stone balustrades, Strachey Hall became the heartbeat of the Aligarh Movement. Here, Zakir Husain, Khan Abdul Ghaffar Khan, and generations of scholars, writers, and scientists launched movements that reshaped 20th-century Asia.",
    chapters: [
      { id: "ch-1", title: "Sir Syed's Educational Vision", timestampHint: "0:00", script: "Founded in 1875 as MAO College, Sir Syed ignited an educational renaissance across India.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Strachey Hall Architecture", timestampHint: "0:30", script: "Completed in 1883, its cusped Mughal arches mirror the collegiate quads of Cambridge.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Maulana Azad Library", timestampHint: "1:00", script: "The campus houses Asia's largest academic library with priceless Mughal and Sanskrit codices.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Aligarh Muslim University (AMU)",
      foundationYear: 1875,
      tradition: "Aligarh Movement & Modern Scientific Humanism",
      notableAlumni: ["Zakir Husain (President of India)", "Khan Abdul Ghaffar Khan", "Liaquat Ali Khan", "Majrooh Sultanpuri", "Mohammad Hamid Ansari", "Dhyan Chand (attended)"]
    }
  },

  // ==========================================
  // 8. BANARAS HINDU UNIVERSITY (BHU)
  // ==========================================
  "banaras hindu university": {
    name: "Banaras Hindu University (BHU / Sayaji Rao Library)",
    localName: "काशी हिन्दू विश्वविद्यालय (बी.एच.यू.)",
    city: "Varanasi, Uttar Pradesh",
    country: "India",
    architecturalStyle: "Indo-Saracenic & Classical Nagara Hindu Architecture",
    periodEra: "Founded 1916 by Mahamana Pandit Madan Mohan Malaviya",
    confidence: 99,
    summary: "Spanning 1,300 acres in the sacred city of Varanasi, Banaras Hindu University (BHU) was founded in 1916 by nationalist leader Mahamana Pandit Madan Mohan Malaviya, Annie Besant, and the Maharaja of Darbhanga. Planned as a majestic semi-circular concentric campus, its grand Sayaji Rao Gaekwad Library, classical red-brick faculties, and the soaring 77-meter marble tower of the New Vishwanath Temple make it the largest residential university in Asia.",
    coordinatesEstimate: { lat: 25.2677, lng: 82.9913 },
    arKeypoints: [
      { id: "pt-1", label: "Sayaji Rao Gaekwad Library Dome", featureType: "dome", description: "Stately circular classical dome of the central library, gifted by the Maharaja of Baroda.", x: 50, y: 30 },
      { id: "pt-2", label: "Shri Vishwanath Temple (VT) Shikhara", featureType: "spire", description: "77-meter marble tower, the tallest temple shikhara in the world, built by the Birla family.", x: 25, y: 15 },
      { id: "pt-3", label: "Indo-Saracenic Chhatris & Balconies", featureType: "relief", description: "Ornate Rajput jharokhas and sandstone chhatris adorning the arts and science faculties.", x: 75, y: 60 },
      { id: "pt-4", label: "Concentric Semi-Circular Avenue", featureType: "entrance", description: "Unique semicircular arterial roadway designed in the shape of Lord Shiva's crescent moon.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1916", event: "Foundation Stone Laid by Lord Hardinge", description: "Mahamana Malaviya brought together princes and freedom fighters to establish an autonomous national university." },
      { yearOrEra: "1926", event: "Central Library Inauguration", description: "Maharaja Sayajirao Gaekwad III of Baroda funded the iconic domed Central Library." },
      { yearOrEra: "1966", event: "New Vishwanath Temple Consecration", description: "The Birla family completed the monumental marble temple at the exact center of the campus." },
      { yearOrEra: "Present", event: "Asia's Premier Residential University", description: "Houses over 30,000 residential students, 140 departments, and the prestigious IIT (BHU) Varanasi." }
    ],
    architecturalSecrets: [
      "The campus plan is designed in the shape of a semi-circle resembling the crescent moon on the brow of Lord Shiva, the patron deity of Varanasi.",
      "Mahamana Malaviya went from door to door across India asking for donations; the Nizam of Hyderabad, the Maharaja of Darbhanga, and common villagers all contributed to build it.",
      "The New Vishwanath Temple inside BHU stands at 77 meters (253 feet), making it taller than the Qutub Minar and the tallest temple tower on Earth."
    ],
    culturalSignificance: "BHU represents the grand synthesis of ancient Indian philosophy, Sanskrit literature, and classical arts with cutting-edge modern technology, medicine, and scientific research.",
    visitorTips: [
      "Rent a bicycle to explore the lush, tree-lined concentric boulevards of the 1,300-acre campus.",
      "Visit the New Vishwanath Temple (popularly called VT) in the campus center for peaceful reflection.",
      "Stop by the Bharat Kala Bhavan museum, which holds one of the finest collections of Indian miniature paintings in the world."
    ],
    narrationScript: "You stand inside Banaras Hindu University, spreading across 1,300 emerald acres in the sacred city of Varanasi. Founded in 1916 by freedom fighter Mahamana Pandit Madan Mohan Malaviya and Dr. Annie Besant, BHU was envisioned as a national university that would revive India's ancient wisdom while mastering modern science. Looking around the concentric avenues laid out like Lord Shiva's crescent moon, you see the classical dome of the Sayaji Rao Gaekwad Library and the soaring 77-meter marble tower of the New Vishwanath Temple—the tallest temple spire on Earth. Here in Kashi, the spirit of Nalanda lives anew.",
    chapters: [
      { id: "ch-1", title: "Malaviya's Sacred Dream", timestampHint: "0:00", script: "In 1916, Pandit Madan Mohan Malaviya built Asia's largest residential university on donations.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Crescent Moon Layout", timestampHint: "0:30", script: "The campus plan mirrors the crescent moon of Shiva, uniting ancient arts with modern engineering.", focusPointId: "pt-4" },
      { id: "ch-3", title: "The World's Tallest Temple Spire", timestampHint: "1:00", script: "The New Vishwanath Temple rises 77 meters at the heart of the university, taller than Qutub Minar.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Banaras Hindu University (BHU)",
      foundationYear: 1916,
      tradition: "Nationalist Cultural Revival & Modern Scientific Research",
      notableAlumni: ["Sarvepalli Radhakrishnan (Vice Chancellor)", "Bhupen Hazarika", "Harivansh Rai Bachchan", "C. N. R. Rao", "Shanti Swaroop Bhatnagar"]
    }
  },

  // ==========================================
  // 9. ST. STEPHEN'S COLLEGE, DELHI
  // ==========================================
  "st stephens college delhi": {
    name: "St. Stephen's College, Delhi University",
    localName: "सेंट स्टीफन्स कॉलेज, दिल्ली विश्वविद्यालय",
    city: "New Delhi, Delhi",
    country: "India",
    architecturalStyle: "Indo-Saracenic & British Red-Brick Collegiate",
    periodEra: "Founded 1881 by Cambridge Mission / North Campus 1941",
    confidence: 99,
    summary: "Founded in 1881 by the Cambridge Mission to Delhi, St. Stephen's College is the oldest and most prestigious college in Delhi University. Designed by distinguished architect Walter Sykes George in red brick with white limestone bands, Mughal jali screens, a serene central chapel, and sweeping green lawns, St. Stephen's is renowned for its intellectual rigor and celebrated debating tradition.",
    coordinatesEstimate: { lat: 28.6922, lng: 77.2132 },
    arKeypoints: [
      { id: "pt-1", label: "Collegiate Chapel & Slender Cross Tower", featureType: "spire", description: "Serene red-brick chapel designed by Walter George with geometric Indian jali ventilation grills.", x: 50, y: 25 },
      { id: "pt-2", label: "Red-Brick Main Arcade & Portico", featureType: "arch", description: "Bespoke red-brick colonnade reflecting Cambridge collegiate courts adapted to Delhi's climate.", x: 50, y: 55 },
      { id: "pt-3", label: "Historic Dining Hall Trusses", featureType: "facade", description: "High-ceilinged communal dining hall where students and professors dine together daily.", x: 25, y: 70 },
      { id: "pt-4", label: "Main Lawns & Gazebo", featureType: "entrance", description: "Manicured central grass quadrangle, venue for open debates and academic discussions.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1881", event: "Foundation in Chandni Chowk", description: "Established by the Cambridge Mission to Delhi under Father Samuel Scott Allnutt in Old Delhi." },
      { yearOrEra: "1922", event: "Constituent College of Delhi University", description: "Co-founded the University of Delhi along with Hindu College and Ramjas College." },
      { yearOrEra: "1941", event: "Move to Walter George's North Campus", description: "Relocated to the present iconic red-brick campus designed by architect Walter Sykes George." },
      { yearOrEra: "Present", event: "Premier Liberal Arts College of India", description: "Consistently ranked as India's top college for arts and sciences, educating world leaders and civil servants." }
    ],
    architecturalSecrets: [
      "Architect Walter Sykes George, who assisted Sir Edwin Lutyens in building New Delhi, designed St. Stephen's without any air conditioning by incorporating high vaulted ceilings and deep verandahs that naturally drop temperatures.",
      "The College Chapel was positioned at the physical and spiritual center of the design, with its altar visible from the main corridor entrance.",
      "During the Indian Independence movement, C.F. Andrews (known as 'Deenabandhu') taught here and worked closely with Mahatma Gandhi and Rabindranath Tagore."
    ],
    culturalSignificance: "St. Stephen's College has produced an extraordinary number of Indian diplomats, cabinet ministers, Chief Justices, authors, and journalists, embodying the finest tradition of liberal arts debate in South Asia.",
    visitorTips: [
      "Enter via University Enclave into the peaceful red-brick courtyard to observe Walter George's brickwork.",
      "Step quietly into the Chapel to admire its understated elegance and minimalist stained glass.",
      "Notice the College Crest above the main entrance bearing the motto 'Ad Dei Gloriam' (To the Glory of God)."
    ],
    narrationScript: "You stand before St. Stephen's College in the North Campus of the University of Delhi. Founded in 1881 by the Cambridge Mission to Delhi, this is the oldest college in the capital. In 1941, renowned architect Walter Sykes George crafted this serene red-brick sanctuary. Notice how English collegiate architecture embraces Indian sensibilities—red brick paired with Mughal geometric jali screens that catch the cool morning breeze. Here, Mahatma Gandhi found a lifelong friend in professor C.F. Andrews. Within this chapel and dining hall, future Prime Ministers, Supreme Court judges, and diplomats honed their arguments.",
    chapters: [
      { id: "ch-1", title: "Delhi's Oldest College (1881)", timestampHint: "0:00", script: "From Old Delhi's Chandni Chowk, St. Stephen's moved to this Walter George campus in 1941.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Red-Brick Cambridge Architecture", timestampHint: "0:30", script: "Walter George used natural thermal convection and Mughal jalis to keep corridors cool.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The Spirit of Deenabandhu", timestampHint: "1:00", script: "C.F. Andrews taught here while helping Gandhi build the foundations of Indian independence.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "St. Stephen's College, Delhi",
      foundationYear: 1881,
      tradition: "Cambridge Mission & Indian Liberal Arts",
      notableAlumni: ["Shashi Tharoor", "Amitav Ghosh", "Montek Singh Ahluwalia", "Khushwant Singh", "Barkha Dutt", "Kapil Sibal"]
    }
  },

  // ==========================================
  // 10. SERAMPORE COLLEGE, WEST BENGAL
  // ==========================================
  "serampore college": {
    name: "Serampore College, West Bengal",
    localName: "শ্রীরামপুর কলেজ",
    city: "Serampore, Hooghly District, West Bengal",
    country: "India",
    architecturalStyle: "Danish Colonial Neoclassical & Ionic Monumentalism",
    periodEra: "Founded 1818 by William Carey / Royal Danish Charter 1827",
    confidence: 99,
    summary: "Founded in 1818 on the banks of the Hooghly River by missionary scholar William Carey, Joshua Marshman, and William Ward, Serampore College is the oldest degree-awarding collegiate institution in India. Granted a Royal Charter by King Frederick VI of Denmark in 1827, its monumental 18-column classical Ionic portico facing the river and Carey Library housing rare Sanskrit codices make it an unparalleled global educational monument.",
    coordinatesEstimate: { lat: 22.7516, lng: 88.3456 },
    arKeypoints: [
      { id: "pt-1", label: "Grand 18-Pillar Ionic Portico", featureType: "column", description: "Monumental Neoclassical portico with 18 fluted Ionic columns facing the Hooghly River.", x: 50, y: 35 },
      { id: "pt-2", label: "Danish Royal Wrought-Iron Gate", featureType: "entrance", description: "Historic ornamental gates bearing the royal monogram of King Frederick VI of Denmark.", x: 50, y: 80 },
      { id: "pt-3", label: "Carey Library & Manuscript Vault", featureType: "facade", description: "Repository of India's first printed vernacular texts, ancient palm-leaf Sanskrit codices, and Carey's dictionary.", x: 25, y: 55 },
      { id: "pt-4", label: "Cast-Iron Imperial Spiral Staircase", featureType: "relief", description: "Rare 1820s cast-iron staircase brought by ship from England, leading to the grand upper lecture hall.", x: 75, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "1818", event: "Foundation by Carey Trio", description: "William Carey, Joshua Marshman, and William Ward founded the college in the Danish colony of Frederiksnagore." },
      { yearOrEra: "1827", event: "Royal Charter from Denmark", description: "King Frederick VI of Denmark issued a royal charter conferring university university degree-granting status, the first in Asia." },
      { yearOrEra: "1845", event: "Transfer to British India", description: "Denmark ceded Serampore to the British East India Company, but the college's Danish university charter was protected." },
      { yearOrEra: "Present", event: "Senate of Serampore College", description: "Functions as a premier college under the University of Calcutta while its Senate coordinates theological education across South Asia." }
    ],
    architecturalSecrets: [
      "The majestic Ionic columns of the front portico were designed by Danish architect Major Wickiede, who modeled the building on classical Copenhagen palaces.",
      "The massive cast-iron spiral staircase was gifted to William Carey by the King of Denmark and shipped thousands of miles around the Cape of Good Hope.",
      "Here in Serampore, Carey set up the legendary Serampore Mission Press, printing the first newspapers, dictionaries, and translations in over 40 Asian languages."
    ],
    culturalSignificance: "Serampore College was the birthplace of Indian typography, printing, and modern vernacular prose, serving as a pioneer of higher education in Asia before universities existed in Calcutta, Bombay, or Madras.",
    visitorTips: [
      "Take a boat ride along the Hooghly River to view the majestic 18-pillar neoclassical facade rising from the riverbank.",
      "Visit the Carey Museum to inspect William Carey's original printing press, his walking stick, and 200-year-old botanical specimens.",
      "Admire the Danish royal monogram 'F VI' forged into the historic campus gates."
    ],
    narrationScript: "You stand before Serampore College on the tranquil banks of the Hooghly River in West Bengal. Founded in 1818 by the pioneering linguist and botanist William Carey, Joshua Marshman, and William Ward, this is the oldest college in India to grant university degrees. In 1827, King Frederick the Sixth of Denmark granted Serampore a royal university charter—making it the first institution in Asia with degree-awarding status. Look at that awe-inspiring portico: eighteen soaring Ionic columns modeled after Danish neoclassical palaces. Here, the first printing press in Bengal was turned, producing dictionaries, newspapers, and literature in over forty languages.",
    chapters: [
      { id: "ch-1", title: "Asia's First Degree-Granting Charter", timestampHint: "0:00", script: "In 1827, Denmark's King gave Serampore the royal charter to grant university degrees.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Danish Classical Grandeur", timestampHint: "0:30", script: "Designed by Major Wickiede, eighteen fluted Ionic columns look out over the Hooghly River.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Carey's Printing Revolution", timestampHint: "1:00", script: "William Carey revolutionized Indian typography and education, publishing in 40 Asian languages.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Serampore College",
      foundationYear: 1818,
      tradition: "Danish Royal Charter & Linguistic Awakening",
      notableAlumni: ["Brahendranath Seal", "K.P. Aleaz", "Krishna Mohan Banerjee"]
    }
  },

  // ==========================================
  // 11. COLLEGE OF ENGINEERING, GUINDY (CEG), CHENNAI
  // ==========================================
  "college of engineering guindy": {
    name: "College of Engineering, Guindy (CEG / Anna University)",
    localName: "கிண்டி பொறியியல் கல்லூரி",
    city: "Chennai, Tamil Nadu",
    country: "India",
    architecturalStyle: "Indo-Saracenic Red-Brick Heritage",
    periodEra: "Established 1794 as Survey School / Guindy Campus 1920",
    confidence: 99,
    summary: "Established in 1794 as a Survey School by Michael Topping, the College of Engineering, Guindy (CEG) is one of the oldest engineering institutions in the entire world and the oldest technical school outside Europe. Its historic red-brick Heritage Building, crowned by an imposing clock tower and colonnaded verandas overlooking sprawling banyan-shaded gardens, forms the heart of Anna University.",
    coordinatesEstimate: { lat: 13.0109, lng: 80.2355 },
    arKeypoints: [
      { id: "pt-1", label: "Historic CEG Heritage Clock Tower", featureType: "clock", description: "Stately Indo-Saracenic clock tower rising above the red-brick central administration block.", x: 50, y: 20 },
      { id: "pt-2", label: "Colonnaded Arched Verandahs", featureType: "arch", description: "Deep double-height terracotta brick archways offering natural climate control for classrooms.", x: 50, y: 55 },
      { id: "pt-3", label: "Survey & Geodetic Memorial Plaque", featureType: "relief", description: "Historic brass monument marking the origin point of the Great Trigonometrical Survey of India.", x: 25, y: 75 },
      { id: "pt-4", label: "Heritage Quadrangle & Banyan Trees", featureType: "facade", description: "Lush green courtyard shaded by ancient banyans where engineers have gathered since 1920.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1794", event: "Founded as Survey School", description: "British astronomer Michael Topping established a school with eight students to survey the Indian coastline." },
      { yearOrEra: "1859", event: "Renamed Civil Engineering College", description: "Affiliated with the University of Madras to provide engineering degrees for the Public Works Department." },
      { yearOrEra: "1920", event: "Relocation to Guindy Campus", description: "Moved to the present 220-acre estate in Guindy and dedicated the iconic red-brick Heritage Building." },
      { yearOrEra: "Present", event: "Flagship Campus of Anna University", description: "World-class center of robotics, computing, and aerospace engineering, educating leaders of global technology." }
    ],
    architecturalSecrets: [
      "CEG was founded in 1794—making it older than the École Polytechnique in Paris, Rensselaer Polytechnic Institute, and MIT in the United States.",
      "The school's early graduates carried out the Great Trigonometrical Survey of India, measuring the height of Mount Everest and mapping the subcontinent.",
      "The red-brick Heritage Building was built using locally manufactured Madras terracotta bricks and lime mortar that have hardened like granite over a century."
    ],
    culturalSignificance: "CEG is the foundational cornerstone of engineering in Asia, having produced pioneers in telecommunications, aerospace, computing, and national infrastructure.",
    visitorTips: [
      "Stand before the red-brick Heritage Building clock tower to admire its symmetrical Indo-Saracenic proportions.",
      "Explore the sprawling 220-acre wooded campus adjoining the Guindy National Park.",
      "Visit the College Museum to inspect 18th-century brass surveying instruments used to measure the Indian subcontinent."
    ],
    narrationScript: "You stand before the historic Heritage Building of the College of Engineering, Guindy, in Chennai. Founded in 1794 as a Survey School with just eight students, CEG is one of the oldest engineering colleges on Earth—predating MIT and world technical academies. In 1920, the college moved here to Guindy, constructing this stately red-brick Indo-Saracenic campus crowned by a four-faced clock tower. CEG's early surveyors mapped the Himalayas and measured the curve of the Earth. Today, as the premier college of Anna University, it continues to power the global technology and aerospace revolution.",
    chapters: [
      { id: "ch-1", title: "1794: The World's Oldest Tech School", timestampHint: "0:00", script: "Founded in 1794, CEG is older than MIT and the École Polytechnique.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Indo-Saracenic Red-Brick Landmark", timestampHint: "0:30", script: "Built in 1920, its clock tower and arched corridors anchor a 220-acre green canopy.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Mapping the Subcontinent", timestampHint: "1:00", script: "Guindy engineers executed the Great Trigonometrical Survey that mapped Mount Everest.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "College of Engineering, Guindy (Anna University)",
      foundationYear: 1794,
      tradition: "Asia's Oldest Technical Institution (1794)",
      notableAlumni: ["Verghese Kurien (Father of White Revolution)", "K. Sivan (Former Chairman ISRO)", "P. S. Veeraraghavan", "Venu Srinivasan", "Akkineni Nagarjuna"]
    }
  },

  // ==========================================
  // 12. ELPHINSTONE COLLEGE, MUMBAI
  // ==========================================
  "elphinstone college mumbai": {
    name: "Elphinstone College, Mumbai",
    localName: "एल्फिन्स्टन कॉलेज, मुंबई",
    city: "Mumbai, Maharashtra",
    country: "India",
    architecturalStyle: "Romanesque Revival & Victorian Gothic",
    periodEra: "Founded 1835 / Present Building 1888",
    confidence: 99,
    summary: "Established in 1835 in honour of Bombay Governor Mountstuart Elphinstone, Elphinstone College is one of Mumbai's most venerable collegiate landmarks. Situated in the UNESCO World Heritage Kala Ghoda art precinct, its magnificent Romanesque and Victorian Gothic stone building—designed by John Adams with sweeping balconies, pointed arcades, and stone-carved gargoyles—stands as an architectural gem of South Mumbai.",
    coordinatesEstimate: { lat: 18.9284, lng: 72.8318 },
    arKeypoints: [
      { id: "pt-1", label: "Romanesque Arched Loggia & Balconies", featureType: "arch", description: "Deep tiered stone balconies chiseled from Kurla basalt providing shade from the tropical sun.", x: 50, y: 35 },
      { id: "pt-2", label: "Kala Ghoda Heritage Facade", featureType: "facade", description: "Breathtaking two-toned sandstone and basalt frontage overlooking K. Dubash Marg in Kala Ghoda.", x: 50, y: 65 },
      { id: "pt-3", label: "Ornate Stone Carved Gargoyles", featureType: "relief", description: "Hand-sculpted animal and mythical stone spouts along the Victorian cornice line.", x: 25, y: 20 },
      { id: "pt-4", label: "Central Grand Staircase Hall", featureType: "entrance", description: "Colonial teakwood and cast-iron double-turn staircase rising through the center of the building.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1835", event: "Foundation of Elphinstone College", description: "Bombay citizens raised funds to honor Governor Mountstuart Elphinstone, creating Bombay's first collegiate institution." },
      { yearOrEra: "1856", event: "Separation from High School", description: "Formally constituted as an independent college affiliated with the newly formed University of Bombay in 1860." },
      { yearOrEra: "1888", event: "John Adams Building Completed", description: "Government architect John Adams completed the present Romanesque Revival palace in Kala Ghoda." },
      { yearOrEra: "Present", event: "UNESCO Heritage Precinct Landmark", description: "Celebrated component of the Victorian Gothic & Art Deco Ensembles of Mumbai inscribed by UNESCO." }
    ],
    architecturalSecrets: [
      "The building originally housed the government archives on the ground floor; its thick basalt walls were engineered to protect paper manuscripts from Mumbai's coastal humidity.",
      "Architect John Adams incorporated both Romanesque semicircular arches on the upper tier and Victorian Gothic pointed elements below, creating a unique hybrid style.",
      "Dadabhai Naoroji, the 'Grand Old Man of India' who first calculated India's drain of wealth, was the college's first Indian Professor of Mathematics."
    ],
    culturalSignificance: "Elphinstone College is the crucible of the Mumbai intelligentsia. Alumni include Dadabhai Naoroji, Bal Gangadhar Tilak, B. R. Ambedkar, and Pherozeshah Mehta—the architects of modern democratic India.",
    visitorTips: [
      "View the facade across K. Dubash Marg in the Kala Ghoda precinct during the annual February Kala Ghoda Arts Festival.",
      "Admire the exquisite stone carvings on the window lintels, sculpted by students of Sir J.J. School of Art.",
      "Pair your visit with the nearby David Sassoon Library and Jehangir Art Gallery."
    ],
    narrationScript: "You are admiring the majestic Romanesque facade of Elphinstone College, in Mumbai's vibrant Kala Ghoda arts district. Founded in 1835, this is one of the oldest colleges in western India. In 1888, government architect John Adams completed this monumental yellow sandstone and Kurla basalt palace, with deep carved balconies and Gothic arcades. Step inside, and you walk where giants walked: here Dadabhai Naoroji formulated the economic critique of colonial rule, Bal Gangadhar Tilak studied mathematics, and Dr. B.R. Ambedkar laid the scholarly foundations for the Constitution of India.",
    chapters: [
      { id: "ch-1", title: "Crucible of Modern Bombay (1835)", timestampHint: "0:00", script: "Founded in 1835, Elphinstone College birthed the social and intellectual reform of Bombay.", focusPointId: "pt-1" },
      { id: "ch-2", title: "John Adams's Romanesque Jewel", timestampHint: "0:30", script: "Completed in 1888 in Kala Ghoda, its Kurla basalt loggias define Victorian Mumbai.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Ambedkar & Naoroji's Hall", timestampHint: "1:00", script: "B.R. Ambedkar and Dadabhai Naoroji studied here, shaping India's constitutional destiny.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Elphinstone College, Mumbai",
      foundationYear: 1835,
      tradition: "Bombay Presidency Renaissance & Constitutional Thought",
      notableAlumni: ["B. R. Ambedkar", "Dadabhai Naoroji", "Bal Gangadhar Tilak", "Pherozeshah Mehta", "Jamshedji Tata (attended)", "Homi J. Bhabha"]
    }
  },

  // ==========================================
  // 13. MADRAS CHRISTIAN COLLEGE (MCC), CHENNAI
  // ==========================================
  "madras christian college": {
    name: "Madras Christian College (MCC), Chennai",
    localName: "மெட்ராஸ் கிறிஸ்டியன் கல்லூரி",
    city: "Chennai, Tamil Nadu",
    country: "India",
    architecturalStyle: "Colonial Indo-Saracenic & Scrub Forest Campus Architecture",
    periodEra: "Founded 1837 in George Town / Tambaram Campus 1937",
    confidence: 99,
    summary: "Established in 1837 by Rev. John Anderson of the Church of Scotland, Madras Christian College (MCC) is one of India's oldest surviving institutions of higher learning. Renowned for its unique 365-acre scrub-forest residential campus in Tambaram, Chennai, with its historic Anderson Hall, Miller Library, and residential halls like Bishop Heber and Selaiyur, MCC is a monument to holistic education and environmental conservation.",
    coordinatesEstimate: { lat: 12.9234, lng: 80.1228 },
    arKeypoints: [
      { id: "pt-1", label: "Anderson Hall & Clock Tower", featureType: "clock", description: "Colonial brick and stone ceremonial hall named in honour of founder Rev. John Anderson.", x: 50, y: 25 },
      { id: "pt-2", label: "Miller Memorial Library", featureType: "facade", description: "Historic library holding thousands of rare 19th-century colonial South Indian archives.", x: 25, y: 55 },
      { id: "pt-3", label: "Bishop Heber Hall Quadrangle", featureType: "arch", description: "Residential hall with shaded cloisters and courtyard reflecting Scottish collegiate ideals.", x: 75, y: 65 },
      { id: "pt-4", label: "Tambaram Scrub Jungle Canopy", featureType: "entrance", description: "Rare 365-acre tropical dry evergreen forest surrounding the collegiate pavilions.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1837", event: "Founded as General Assembly School", description: "Rev. John Anderson opened a school on Armenian Street in George Town, Chennai." },
      { yearOrEra: "1867", event: "Elevated to College Status", description: "William Miller arrived from Scotland and developed MCC into a world-class collegiate center." },
      { yearOrEra: "1937", event: "Centenary Move to Tambaram", description: "Moved to a 365-acre natural scrub forest designed as a self-contained residential academic sanctuary." },
      { yearOrEra: "Present", event: "Global Academic Flagship", description: "Consistently ranked among the top ten arts and science colleges in India." }
    ],
    architecturalSecrets: [
      "The Tambaram campus was intentionally designed to preserve the rare tropical dry evergreen scrub forest, creating one of the few surviving indigenous bio-reserves in Chennai.",
      "The residential hall system was modeled on Oxford and Cambridge colleges, fostering deep lifelong camaraderie and house traditions.",
      "Former President of India Dr. Sarvepalli Radhakrishnan served as a student and distinguished professor of philosophy here before ascending to the presidency."
    ],
    culturalSignificance: "MCC helped shape modern education, scientific research, and civil service across South India, educating legendary figures including President S. Radhakrishnan and Chief Election Commissioner T. N. Seshan.",
    visitorTips: [
      "Wander through the 365-acre scrub-forest pathways to experience India's greenest collegiate campus.",
      "Visit Anderson Hall to see historic oil portraits of 19th-century founders.",
      "Look for deer and migratory birds that live freely in the campus woodland."
    ],
    narrationScript: "You stand within the emerald scrub forest of Madras Christian College in Tambaram, Chennai. Founded in 1837 by Scottish missionary John Anderson, MCC is one of the oldest colleges in Asia. In 1937, for its centenary, the college moved from George Town to this 365-acre natural wilderness. Walking past Anderson Hall and the Miller Library, colonial brick arches merge seamlessly with ancient scrub trees. Here, philosopher-President Dr. Sarvepalli Radhakrishnan taught, while generations of Indian diplomats, scientists, and civil servants imbibed the college motto: 'They Shall Walk and Not Faint.'",
    chapters: [
      { id: "ch-1", title: "From George Town to Tambaram", timestampHint: "0:00", script: "Born in 1837 on Armenian Street, MCC relocated to this 365-acre woodland in 1937.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Anderson Hall & Collegiate Heritage", timestampHint: "0:30", script: "Built with Scottish collegiate discipline, Anderson Hall is the ceremonial soul of MCC.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Forest Sanctuary of Learning", timestampHint: "1:00", script: "Deer and migratory birds roam freely around residential halls in this urban bio-reserve.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Madras Christian College (MCC)",
      foundationYear: 1837,
      tradition: "Scottish Collegiate Humanism & Environmental Stewardship",
      notableAlumni: ["Sarvepalli Radhakrishnan (President of India)", "T. N. Seshan", "K. P. S. Menon", "C. Rajagopalachari (attended)", "Prakash Karat"]
    }
  },

  // ==========================================
  // 14. PRESIDENCY COLLEGE, CHENNAI
  // ==========================================
  "presidency college chennai": {
    name: "Presidency College, Chennai",
    localName: "மாநிலக் கல்லூரி, சென்னை",
    city: "Chennai, Tamil Nadu",
    country: "India",
    architecturalStyle: "Italianate & Indo-Saracenic (Robert Chisholm)",
    periodEra: "Founded 1840 / Present Seaside Building 1870",
    confidence: 99,
    summary: "Established in 1840 as the Madras Preparatory School, Presidency College Chennai is the mother college of the University of Madras. Overlooking the Bay of Bengal along Marina Beach, its iconic crimson-red Italianate facade with grand arches and an imposing 40-meter clock tower—designed by master architect Robert Chisholm—is one of Chennai's most cherished architectural landmarks.",
    coordinatesEstimate: { lat: 13.0569, lng: 80.2822 },
    arKeypoints: [
      { id: "pt-1", label: "Chisholm's 40-Meter Clock Tower", featureType: "clock", description: "Crimson-red Italianate clock tower rising over Kamarajar Salai and the Bay of Bengal.", x: 50, y: 18 },
      { id: "pt-2", label: "Italianate Red-Brick Colonnade", featureType: "arch", description: "Bespoke arched verandas designed to catch the maritime sea breeze from Marina Beach.", x: 50, y: 55 },
      { id: "pt-3", label: "Historic Physics Laboratory", featureType: "facade", description: "Historic laboratory where Nobel Laureate Sir C. V. Raman carried out optical experiments.", x: 25, y: 70 },
      { id: "pt-4", label: "Seaside Gateway & Gardens", featureType: "entrance", description: "Historic entrance overlooking Marina Beach promenade and the statues of Tamil icons.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1840", event: "Established as Madras Preparatory School", description: "Lord Elphinstone founded the school on Mount Road, which became the High School in 1841." },
      { yearOrEra: "1853", event: "Upgraded to Presidency College", description: "Formally constituted as Presidency College, South India's premier institution of higher learning." },
      { yearOrEra: "1870", event: "Chisholm's Marina Building Opens", description: "Architect Robert Fellowes Chisholm completed the present grand red Italianate building facing the sea." },
      { yearOrEra: "Present", event: "National Heritage Status", description: "Educated two Nobel Laureates in Physics: C. V. Raman and Subrahmanyan Chandrasekhar." }
    ],
    architecturalSecrets: [
      "Presidency College was architect Robert Chisholm's first major government commission in Madras; he chose Italianate detailing with red terracotta brick before developing his full Indo-Saracenic style at Senate House.",
      "The college boasts the unique distinction of having educated both of India's Nobel laureates in Physics: uncle and nephew Sir C.V. Raman and Subrahmanyan Chandrasekhar.",
      "The massive clock mechanism in the central tower was manufactured in London by Gillett & Bland in 1870 and still functions reliably."
    ],
    culturalSignificance: "Presidency College Chennai is the intellectual cradle of South India, nurturing generations of scientists, jurists, Chief Ministers, and freedom fighters.",
    visitorTips: [
      "View the dramatic crimson facade from Marina Beach across Kamarajar Salai at sunrise.",
      "Visit the historic Heritage Physics and Botany departments.",
      "Observe the memorial plaque honoring Nobel Laureate Sir C.V. Raman in the main quadrangle."
    ],
    narrationScript: "Standing proudly on Chennai's Marina Beach is Presidency College, the mother institution of higher education in South India. Founded in 1840, its present crimson palace was completed in 1870 by master architect Robert Chisholm. Notice the striking Italianate clock tower rising forty meters into the coastal sky, flanked by arched colonnades built to catch the Bay of Bengal breeze. Within these red-brick classrooms, two of India's Nobel Laureates in Physics—Sir C.V. Raman and Subrahmanyan Chandrasekhar—began their journeys into the quantum and stellar mysteries of the universe.",
    chapters: [
      { id: "ch-1", title: "Mother of South Indian Universities", timestampHint: "0:00", script: "Founded in 1840, Presidency College paved the way for higher education across Tamil Nadu.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Chisholm's Crimson Clock Tower", timestampHint: "0:30", script: "Completed in 1870, this 40-meter clock tower overlooks Marina Beach's golden sands.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Two Nobel Physics Laureates", timestampHint: "1:00", script: "Both C.V. Raman and Subrahmanyan Chandrasekhar studied physics in these heritage halls.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Presidency College, Chennai",
      foundationYear: 1840,
      tradition: "Madras Presidency Scientific & Literary Eminence",
      notableAlumni: ["C. V. Raman (Nobel Laureate)", "Subrahmanyan Chandrasekhar (Nobel Laureate)", "C. Rajagopalachari", "U. V. Swaminatha Iyer (Faculty)", "C. N. Annadurai"]
    }
  },

  // ==========================================
  // 15. HINDU COLLEGE, DELHI
  // ==========================================
  "hindu college delhi": {
    name: "Hindu College, Delhi University",
    localName: "हिंदू कॉलेज, दिल्ली विश्वविद्यालय",
    city: "New Delhi, Delhi",
    country: "India",
    architecturalStyle: "Nationalist Colonial Red-Brick & Modernist Collegiate",
    periodEra: "Founded 1899 by Rai Bahadur Amba Prasad / North Campus 1953",
    confidence: 99,
    summary: "Founded in 1899 by Rai Bahadur Amba Prasad, Krishan Dassji Gurwale, and prominent Delhi citizens in Kinari Bazar, Hindu College was established as an indigenous nationalist alternative to British missionary education. Relocated to Delhi University's North Campus in 1953, its iconic red-brick amphitheatre, central lawns, and historic Parliament of Hindu College make it one of India's top-ranked and politically vibrant institutions.",
    coordinatesEstimate: { lat: 28.6896, lng: 77.2098 },
    arKeypoints: [
      { id: "pt-1", label: "Central Heritage Red-Brick Portico", featureType: "facade", description: "Distinctive red-brick facade and central steps framing the main entrance in North Campus.", x: 50, y: 35 },
      { id: "pt-2", label: "The Hindu College Amphitheatre", featureType: "arch", description: "Open-air theatre venue for legendary student debates, drama, and youth cultural expressions.", x: 25, y: 60 },
      { id: "pt-3", label: "Sports Pavilion & Cricket Ground", featureType: "facade", description: "Renowned cricket oval that trained international cricketers and national athletes.", x: 75, y: 70 },
      { id: "pt-4", label: "Founder's Memorial Lawn", featureType: "entrance", description: "Manicured green quadrangle where students gather between lectures.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1899", event: "Foundation in Kinari Bazar", description: "Established in Chandni Chowk as a non-missionary national college for Delhi's youth." },
      { yearOrEra: "1922", event: "Co-founding Delhi University", description: "Joined St. Stephen's and Ramjas to form the University of Delhi." },
      { yearOrEra: "1942", event: "Crucible of the Quit India Movement", description: "Students and teachers took a leading role in the Quit India protests; many were imprisoned." },
      { yearOrEra: "Present", event: "Consistently Ranked #1 College in India", description: "Recognized by NIRF as the top collegiate institution in India for academic excellence." }
    ],
    architecturalSecrets: [
      "During the 1942 Quit India Movement, the college became a secret sanctuary for underground freedom fighters; Mahatma Gandhi and Subhas Chandra Bose both addressed students on campus.",
      "Hindu College has its own unique 'Parliament' student democracy system dating back to 1935, with a Prime Minister, Leader of Opposition, and Speaker elected annually by students.",
      "The famous Virgin Tree on campus forms the whimsical center of student urban folklore every Valentine's Day."
    ],
    culturalSignificance: "Hindu College was founded on nationalist defiance of foreign cultural domination, producing leading parliamentarians, diplomats, economists, filmmakers, and international cricketers.",
    visitorTips: [
      "Stroll the North Campus boulevard directly opposite St. Stephen's College to compare the two sister institutions.",
      "Visit the Amphitheatre to watch the famous 'Ibtida' dramatics society perform street theatre.",
      "Explore the historic auditorium where national leaders spoke during the independence movement."
    ],
    narrationScript: "You stand before Hindu College in the North Campus of the University of Delhi. Founded in 1899 in the winding alleys of Old Delhi's Kinari Bazar, Hindu College was born from the national desire for self-reliant Indian education. During the Quit India Movement in 1942, this campus was a fortress of national resistance, where students risked their lives for freedom. Today, ranked as the number one college in India, its red-brick porticos, vibrant amphitheatre, and legendary Student Parliament have nurtured leaders from filmmaker Imtiaz Ali and economist Bibek Debroy to cricketer Gautam Gambhir.",
    chapters: [
      { id: "ch-1", title: "Nationalist Roots of 1899", timestampHint: "0:00", script: "Founded in 1899 in Old Delhi, Hindu College offered indigenous education free from colonial control.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Citadel of Quit India (1942)", timestampHint: "0:30", script: "In 1942, students turned the college into a nerve center of national independence protests.", focusPointId: "pt-2" },
      { id: "ch-3", title: "India's #1 Ranked College", timestampHint: "1:00", script: "Renowned for its unique Student Parliament and vibrant dramatics, it remains India's premier college.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Hindu College, Delhi University",
      foundationYear: 1899,
      tradition: "Nationalist Independence Heritage & Student Democracy",
      notableAlumni: ["Gautam Gambhir", "Imtiaz Ali", "Arjun Rampal", "Manoj Kumar", "Bibek Debroy", "Meenakshi Lekhi", "Vinod Rai"]
    }
  },

  // ==========================================
  // 16. SCOTTISH CHURCH COLLEGE, KOLKATA
  // ==========================================
  "scottish church college": {
    name: "Scottish Church College, Kolkata",
    localName: "স্কটিশ চার্চ কলেজ",
    city: "Kolkata, West Bengal",
    country: "India",
    architecturalStyle: "Colonial Neoclassical & Scottish Academic",
    periodEra: "Founded 1830 by Rev. Alexander Duff / Building 1839",
    confidence: 99,
    summary: "Founded in 1830 by Scottish missionary scholar Rev. Alexander Duff and Raja Ram Mohan Roy as the General Assembly's Institution, Scottish Church College is the second-oldest college in West Bengal. Famously the alma mater of Swami Vivekananda (Narendranath Datta) and Netaji Subhas Chandra Bose, its imposing Neoclassical building with classical pediment and fluted columns in North Kolkata is a cornerstone of the Bengal Renaissance.",
    coordinatesEstimate: { lat: 22.5897, lng: 88.3702 },
    arKeypoints: [
      { id: "pt-1", label: "Classical Triangular Pediment", featureType: "facade", description: "Grand Neoclassical portico pediment and fluted Doric columns on Bidhan Sarani.", x: 50, y: 30 },
      { id: "pt-2", label: "Swami Vivekananda Memorial Plaque", featureType: "relief", description: "Memorial dedicated to its most celebrated alumnus, Narendranath Datta (Swami Vivekananda), who studied philosophy here (1881–1884).", x: 25, y: 65 },
      { id: "pt-3", label: "Alexander Duff Assembly Hall", featureType: "arch", description: "Historic high-vaulted auditorium where Rabindranath Tagore and Bengal thinkers gave public lectures.", x: 75, y: 60 },
      { id: "pt-4", label: "Heritage North Kolkata Courtyard", featureType: "entrance", description: "Tranquil collegiate quadrangle framed by double-tiered colonial verandahs.", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1830", event: "Foundation by Alexander Duff", description: "Rev. Alexander Duff arrived in Calcutta and opened the institution with the support of Raja Ram Mohan Roy." },
      { yearOrEra: "1884", event: "Swami Vivekananda Graduates", description: "Narendranath Datta completed his Bachelor of Arts, praised by Principal William Hastie for his philosophical genius." },
      { yearOrEra: "1908", event: "Amalgamation as Scottish Church College", description: "The General Assembly's Institution merged with Duff College under the name Scottish Church College." },
      { yearOrEra: "Present", event: "Heritage Beacon of Kolkata", description: "Recognized as a premier autonomous college under the University of Calcutta." }
    ],
    architecturalSecrets: [
      "It was here that Principal William Hastie first mentioned the mystic Sri Ramakrishna to his student Narendranath Datta (later Swami Vivekananda) while explaining William Wordsworth's trance states.",
      "The college's classical pediment was modeled directly after Edinburgh collegiate buildings, built using bricks manufactured on the banks of the Hooghly River.",
      "The library holds rare Scottish Enlightenment first editions and 19th-century philosophical treatises signed by Alexander Duff."
    ],
    culturalSignificance: "Scottish Church College was the birthplace of modern Indian spiritual and rational awakening, shaping the worldview of Swami Vivekananda, Paramahansa Yogananda, and Subhas Chandra Bose.",
    visitorTips: [
      "Visit the Swami Vivekananda Memorial room to see the classroom where he studied Western philosophy.",
      "Admire the grand Neoclassical pediment from Bidhan Sarani in North Kolkata.",
      "Combine your visit with Swami Vivekananda's ancestral home nearby on Simla Street."
    ],
    narrationScript: "You stand before Scottish Church College on Bidhan Sarani in North Kolkata. Founded in 1830 by Scottish scholar Alexander Duff with the enthusiastic backing of Raja Ram Mohan Roy, this was a revolutionary institution. Look at the classical Neoclassical pediment and pillars: inside these classrooms, a brilliant young student named Narendranath Datta studied Western logic and philosophy before taking the world by storm as Swami Vivekananda. It was here that his Scottish professor William Hastie first spoke of Sri Ramakrishna's mystic ecstasies. Later, Netaji Subhas Chandra Bose and Paramahansa Yogananda walked these very corridors.",
    chapters: [
      { id: "ch-1", title: "Duff & Ram Mohan Roy (1830)", timestampHint: "0:00", script: "In 1830, Scottish scholar Duff and Raja Ram Mohan Roy ignited higher education in Calcutta.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Where Vivekananda Studied", timestampHint: "0:30", script: "Swami Vivekananda studied philosophy here from 1881 to 1884, excelling in logic and ethics.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Bengal Renaissance Crucible", timestampHint: "1:00", script: "Netaji Bose and Yogananda also studied here, shaping spiritual and political history.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Scottish Church College, Kolkata",
      foundationYear: 1830,
      tradition: "Scottish Enlightenment & Bengal Spiritual Awakening",
      notableAlumni: ["Swami Vivekananda (Narendranath Datta)", "Paramahansa Yogananda", "Subhas Chandra Bose (attended)", "A. C. Bhaktivedanta Swami Prabhupada", "Manna Dey"]
    }
  },

  // ==========================================
  // 17. CENTRAL COLLEGE, BENGALURU
  // ==========================================
  "central college bangalore": {
    name: "Central College, Bengaluru (Bengaluru City University)",
    localName: "ಸೆಂಟ್ರಲ್ ಕಾಲೇಜು, ಬೆಂಗಳೂರು",
    city: "Bengaluru, Karnataka",
    country: "India",
    architecturalStyle: "Gothic Revival & Granite Stonecraft",
    periodEra: "Founded 1858 / Gothic Clock Tower 1865",
    confidence: 99,
    summary: "Established in 1858 by the British Mysore Government, Central College is Bengaluru's oldest and most iconic educational institution. Located in the bustling heart of the city near K.R. Circle, its grand Gothic Revival granite buildings, distinctive clock tower, and red-tiled roof sheltered the legendary engineering pioneer Sir M. Visvesvaraya and Nobel Laureate Sir C. V. Raman.",
    coordinatesEstimate: { lat: 12.9734, lng: 77.5855 },
    arKeypoints: [
      { id: "pt-1", label: "Central Granite Clock Tower", featureType: "clock", description: "Imposing Gothic stone clock tower crafted from local Bangalore gray granite.", x: 50, y: 20 },
      { id: "pt-2", label: "Pointed Gothic Stone Colonnade", featureType: "arch", description: "Deep arched verandahs with heavy granite pillars providing natural shade from Karnataka sunshine.", x: 50, y: 55 },
      { id: "pt-3", label: "Sir M. Visvesvaraya Memorial Hall", featureType: "facade", description: "Historic lecture hall where Bharat Ratna Sir M. Visvesvaraya studied mathematics.", x: 25, y: 70 },
      { id: "pt-4", label: "Heritage Botanical Arboretum", featureType: "entrance", description: "Centuries-old trees planted by colonial botanists surrounding the heritage stone buildings.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1858", event: "Foundation as Bangalore High School", description: "Established by the British administration of Mysore to train scholars for modern governance." },
      { yearOrEra: "1875", event: "Elevated to Central College", description: "Affiliated with Madras University, becoming the intellectual flagship of the Mysore Kingdom." },
      { yearOrEra: "1881", event: "Sir M. Visvesvaraya Graduates", description: "Bharat Ratna Sir M. Visvesvaraya completed his Bachelor of Arts before revolutionizing Indian engineering." },
      { yearOrEra: "Present", event: "Bengaluru City University Seat", description: "Continues as the historic administrative campus of Bengaluru City University." }
    ],
    architecturalSecrets: [
      "The entire building was constructed using tough Bangalore gray granite sourced from local quarries in Lalbagh and surrounding hills, resisting weathering for over 160 years.",
      "Nobel Laureate Sir C. V. Raman frequently conducted seminars in the Central College physics department and helped found the Indian Academy of Sciences nearby.",
      "The campus was laid out as an arboretum by German botanist Gustav Krumbiegel, who imported exotic flowering trees to line the campus walks."
    ],
    culturalSignificance: "Central College was the intellectual incubator of Karnataka, training statesmanship, science, Kannada literature, and modern industrial vision.",
    visitorTips: [
      "Admire the Gothic clock tower and granite stonework from K.R. Circle in central Bangalore.",
      "Visit the historic chemistry and physics labs where early Indian science blossomed.",
      "Walk the shaded botanical grounds planted by Gustav Krumbiegel."
    ],
    narrationScript: "You stand before Central College in the heart of Bengaluru, near K.R. Circle. Established in 1858, this is the oldest institution of higher education in the Garden City. Carved from solid Bangalore gray granite in Gothic Revival style, its distinctive clock tower and cool stone arcades have anchored the intellectual life of Karnataka for over a century and a half. Walking these stone verandahs was young Mokshagundam Visvesvaraya, who went on to engineer the dams and industries of modern India. Later, Nobel Laureate Sir C.V. Raman spent hours here debating optical physics.",
    chapters: [
      { id: "ch-1", title: "Oldest College in Bengaluru (1858)", timestampHint: "0:00", script: "Founded in 1858, Central College pioneered modern education in the Princely State of Mysore.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Bangalore Granite Architecture", timestampHint: "0:30", script: "Its clock tower and Gothic colonnades were sculpted from local Bangalore gray granite.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Alma Mater of Sir M. Visvesvaraya", timestampHint: "1:00", script: "Bharat Ratna Visvesvaraya studied here, laying the groundwork for India's industrial dawn.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Central College, Bengaluru",
      foundationYear: 1858,
      tradition: "Mysore State Renaissance & Scientific Pioneering",
      notableAlumni: ["Sir M. Visvesvaraya (Bharat Ratna)", "C. N. R. Rao (attended)", "E. P. Metcalfe", "H. Narasimhaiah"]
    }
  },

  // ==========================================
  // 18. ST. XAVIER'S COLLEGE, KOLKATA
  // ==========================================
  "st xaviers college kolkata": {
    name: "St. Xavier's College, Kolkata",
    localName: "সেন্ট জেভিয়ার্স কলেজ, কলকাতা",
    city: "Kolkata, West Bengal",
    country: "India",
    architecturalStyle: "Colonial Classical & Jesuit Quadrangle Architecture",
    periodEra: "Founded 1860 by Belgian Jesuits / Park Street Campus 1862",
    confidence: 99,
    summary: "Founded in 1860 by Belgian Jesuit fathers on Park Street, St. Xavier's College Kolkata is one of India's most prestigious academic institutions. Featuring a stately Neoclassical facade with Roman arches, an ancient astronomical observatory established in 1865 by Father Eugene Lafont, and the famous Green Benches in the quadrangle, it has educated Nobel laureates, industrial titans, and cultural icons.",
    coordinatesEstimate: { lat: 22.5492, lng: 88.3547 },
    arKeypoints: [
      { id: "pt-1", label: "Father Lafont Astronomical Observatory", featureType: "dome", description: "Historic meteorological and solar observatory dome established in 1865, one of Asia's first.", x: 50, y: 15 },
      { id: "pt-2", label: "Neoclassical Roman Arch Entrance", featureType: "arch", description: "Grand arched ceremonial entrance along Park Street, bearing the Jesuit motto Nihil Ultra.", x: 50, y: 45 },
      { id: "pt-3", label: "The Famous 'Green Benches' Quad", featureType: "facade", description: "Celebrated student courtyard with green benches where generations of thinkers conversed.", x: 30, y: 70 },
      { id: "pt-4", label: "Historic College Chapel", featureType: "spire", description: "19th-century Jesuit chapel with stained-glass windows depicting Saint Francis Xavier.", x: 75, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "1860", event: "Foundation on Park Street", description: "Belgian Jesuits led by Father Henri Depelchin established the college at 30 Park Street." },
      { yearOrEra: "1865", event: "Lafont Observatory Built", description: "Father Eugene Lafont, 'the Father of Modern Science in India', opened India's premier astronomical observatory." },
      { yearOrEra: "1875", event: "Rabindranath Tagore Attends", description: "Nobel Laureate Rabindranath Tagore was enrolled as a student in the school section." },
      { yearOrEra: "Present", event: "Autonomous University of Excellence", description: "Ranked among India's top five collegiate institutions, with a global alumni network." }
    ],
    architecturalSecrets: [
      "Father Eugene Lafont set up India's first spectroscope in this building in 1874, accurately predicting cyclones in the Bay of Bengal and saving thousands of lives.",
      "Sir Jagadish Chandra Bose was inspired to enter physics here through Father Lafont's dazzling public science experiments.",
      "The college sits on the historic site of the Sans Souci Theatre, which was destroyed by fire in 1843 before the Jesuits acquired the land."
    ],
    culturalSignificance: "St. Xavier's College Kolkata pioneered experimental scientific education in India, shaping luminaries from Nobel Laureate Rabindranath Tagore to Indian cricket icon Sourav Ganguly.",
    visitorTips: [
      "Enter from Park Street to admire the grand Neoclassical portico and Roman arches.",
      "Sit for a moment on the legendary 'Green Benches' in the central quadrangle.",
      "Look up at the historic rooftop observatory dome where Father Lafont mapped solar flares in the 1870s."
    ],
    narrationScript: "You stand before St. Xavier's College on Kolkata's bustling Park Street. Founded in 1860 by Belgian Jesuits under Father Henri Depelchin, this Neoclassical landmark was a catalyst for India's scientific and cultural renaissance. Look up to the roof: there sits the historic observatory where Father Eugene Lafont demonstrated the wonders of optics and predicted Bay of Bengal cyclones in the 1870s. Sitting on the famous 'Green Benches' in the quadrangle below, young Rabindranath Tagore absorbed the spirit of universal humanism. Today, St. Xavier's remains a fortress of academic rigor and compassionate service.",
    chapters: [
      { id: "ch-1", title: "Jesuit Heritage on Park Street", timestampHint: "0:00", script: "Founded in 1860, St. Xavier's brought Jesuit collegiate excellence to the heart of Calcutta.", focusPointId: "pt-2" },
      { id: "ch-2", title: "Father Lafont's Observatory", timestampHint: "0:30", script: "Here Father Lafont set up India's first spectroscopic observatory, inspiring J.C. Bose.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Green Benches of Legend", timestampHint: "1:00", script: "Tagore, steel magnate Lakshmi Mittal, and cricket icon Sourav Ganguly walked these grounds.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "St. Xavier's College, Kolkata",
      foundationYear: 1860,
      tradition: "Jesuit Scientific Pioneering & Cultural Excellence",
      notableAlumni: ["Rabindranath Tagore (attended)", "Lakshmi Mittal", "Sourav Ganguly", "Jyoti Basu", "Vikram Seth (attended)", "Shashi Tharoor (attended school)"]
    }
  },

  // ==========================================
  // 19. MAYO COLLEGE, AJMER
  // ==========================================
  "mayo college ajmer": {
    name: "Mayo College, Ajmer",
    localName: "मेयो कॉलेज, अजमेर",
    city: "Ajmer, Rajasthan",
    country: "India",
    architecturalStyle: "Indo-Saracenic White Marble Palace Architecture",
    periodEra: "Founded 1875 by Lord Mayo / Main Building 1885",
    confidence: 99,
    summary: "Founded in 1875 by Richard Bourke, 6th Earl of Mayo, and known as the 'Eton of the East', Mayo College is one of India's most magnificent residential institutions. Designed by Major Charles Mant in dazzling white Makrana marble—the same stone as the Taj Mahal—its monumental Indo-Saracenic central building, soaring clock tower, Rajput chhatris, and sweeping 187-acre playing fields embody royal Indian architectural majesty.",
    coordinatesEstimate: { lat: 26.4468, lng: 74.6534 },
    arKeypoints: [
      { id: "pt-1", label: "Central White Marble Clock Tower", featureType: "clock", description: "Soaring clock tower chiseled from pure white Makrana marble, flanked by Hindu chhatris.", x: 50, y: 18 },
      { id: "pt-2", label: "Indo-Saracenic Cusped Portico", featureType: "arch", description: "Majestic marble portico combining Mughal multifoil arches with Rajput stone brackets.", x: 50, y: 48 },
      { id: "pt-3", label: "Danmal Mathur Museum Wing", featureType: "facade", description: "Houses one of the largest school museum collections in the world, including Rajput armor and natural history.", x: 25, y: 65 },
      { id: "pt-4", label: "Polo Grounds & Equestrian Ring", featureType: "entrance", description: "World-famous equestrian fields where princely dynasties played polo for over a century.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1875", event: "Foundation by Lord Mayo", description: "Established as a boarding school for the sons of Indian princely states and royalty." },
      { yearOrEra: "1885", event: "Inauguration of Marble Building", description: "Major Charles Mant's Indo-Saracenic marble palace was officially opened by the Viceroy." },
      { yearOrEra: "1946", event: "Transition to Public School", description: "Opened doors to all meritorious students from across India and the globe, ending princely exclusivity." },
      { yearOrEra: "Present", event: "Premier Boarding School of Asia", description: "Celebrated worldwide for academic rigor, equestrian polo, and architectural splendor." }
    ],
    architecturalSecrets: [
      "The entire Main Building is clad in pure white marble quarried from Makrana in Rajasthan, the identical source used by Emperor Shah Jahan for the Taj Mahal.",
      "Architect Major Charles Mant spent years studying the forts of Jodhpur, Amber, and Udaipur to integrate defensive Rajput bastions and ornate jharokhas into a functional school.",
      "The college coat of arms was designed by John Lockwood Kipling, the father of Rudyard Kipling and director of the Mayo School of Arts in Lahore."
    ],
    culturalSignificance: "Mayo College represents the quintessential architectural fusion of British public school structure with royal Rajput princely palace design.",
    visitorTips: [
      "Marvel at the central building's blinding white marble facade in the bright Rajasthan afternoon sun.",
      "Visit the Danmal Mathur Museum inside the main building to view historic arms, coins, and princely gifts.",
      "Walk past the historic boarding houses named after Rajput princely states: Jaipur, Jodhpur, Udaipur, and Bikaner."
    ],
    narrationScript: "You stand before the dazzling white marble palace of Mayo College in Ajmer, Rajasthan. Founded in 1875 and celebrated as the 'Eton of the East', this is one of India's most breathtaking architectural sights. Designed by Major Charles Mant, the Main Building is crafted entirely from pure white Makrana marble—the very same stone that built the Taj Mahal. Look up at the soaring clock tower crowned by Rajput chhatris and ornate cusped arches. For generations, the princes of Rajasthan and leaders of modern India rode horses across these 187 acres, studying statecraft and chivalry beneath the Aravalli hills.",
    chapters: [
      { id: "ch-1", title: "The Eton of the East (1875)", timestampHint: "0:00", script: "Founded in 1875, Mayo College combined Rajput chivalry with rigorous modern education.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Makrana White Marble Palace", timestampHint: "0:30", script: "Major Mant sculpted this palace from the same white Makrana marble as the Taj Mahal.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Equestrian & Chivalric Tradition", timestampHint: "1:00", script: "Its polo fields and museum preserve a unique century-old legacy of desert royalty.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Mayo College, Ajmer",
      foundationYear: 1875,
      tradition: "Rajput Royal Heritage & Holistic Boarding Education",
      notableAlumni: ["Jaswant Singh", "K. Natwar Singh", "Tenzing Norgay's sons", "Inderjit Singh Bindra", "Vivek Oberoi"]
    }
  },

  // ==========================================
  // 20. ST. JOSEPH'S COLLEGE, BENGALURU
  // ==========================================
  "st josephs college bangalore": {
    name: "St. Joseph's University (formerly St. Joseph's College), Bengaluru",
    localName: "ಸೇಂಟ್ ಜೋಸೆಫ್ ವಿಶ್ವವಿದ್ಯಾಲಯ, ಬೆಂಗಳೂರು",
    city: "Bengaluru, Karnataka",
    country: "India",
    architecturalStyle: "Colonial European Classical & Jesuit Academic",
    periodEra: "Founded 1882 by French MEP Fathers / University 2022",
    confidence: 99,
    summary: "Founded in 1882 by French foreign missionaries of the Paris Foreign Missions Society (MEP) and later managed by the Jesuits, St. Joseph's in Bengaluru is one of Karnataka's oldest and most prestigious institutions. Located on Langford Road, its classical stone arches, shaded cloisters, and sprawling playing fields have nurtured national leaders, scientists, and sports legends for well over a century.",
    coordinatesEstimate: { lat: 12.9632, lng: 77.5991 },
    arKeypoints: [
      { id: "pt-1", label: "Central Heritage Arched Portico", featureType: "arch", description: "Monumental stone archway bearing the college motto 'Fide et Labore' (By Faith and Toil).", x: 50, y: 35 },
      { id: "pt-2", label: "Historic College Chapel Tower", featureType: "spire", description: "Graceful bell tower rising above the French colonial chapel on the heritage quadrangle.", x: 25, y: 20 },
      { id: "pt-3", label: "Auditorium & Green Quadrangle", featureType: "facade", description: "Historic gathering grounds for inter-collegiate cultural and debate festivals.", x: 75, y: 65 },
      { id: "pt-4", label: "Centenary Library & Archives", featureType: "entrance", description: "Holds rare collections of early Kannada literature and European scientific journals.", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1882", event: "Foundation by French Missionaries", description: "Established by Fathers of the Paris Foreign Missions Society on St. John's Hill." },
      { yearOrEra: "1937", event: "Transferred to the Society of Jesus", description: "The Jesuit order took administration, expanding scientific and humanities research." },
      { yearOrEra: "1972", event: "Separation of College Campus", description: "Moved into its expansive dedicated campus on Langford Road." },
      { yearOrEra: "2022", event: "Elevated to St. Joseph's University", description: "Passed by the Karnataka State Legislature as an independent state university." }
    ],
    architecturalSecrets: [
      "The college was designed with deep arched porticos and thick stone masonry inspired by French monastic cloisters to insulate against heat.",
      "The motto 'Fide et Labore' (By Faith and Toil) is carved in Roman lettering above every historic doorway.",
      "The campus grounds are famous for sporting excellence, having trained Olympic hockey players and national cricket stars."
    ],
    culturalSignificance: "St. Joseph's has been central to Bengaluru's evolution into a cosmopolitan hub of education, science, and public service, educating Supreme Court judges, governors, and international athletes.",
    visitorTips: [
      "Walk the peaceful cloisters of the Langford Road campus during the quiet morning hours.",
      "Visit the College Chapel to admire its French stained-glass craftsmanship.",
      "Check out the historic sports grounds that produced India's finest hockey olympians."
    ],
    narrationScript: "You stand before St. Joseph's University on Langford Road in Bengaluru. Founded in 1882 by French missionary fathers and elevated through generations of Jesuit dedication, this is one of Karnataka's oldest seats of higher learning. Notice the classical European stone arches bearing the revered Latin motto 'Fide et Labore'—Faith and Toil. From these shaded cloisters and historic sports fields emerged Supreme Court Chief Justices, Olympic hockey champions, and leaders of Karnataka's intellectual and technological awakening.",
    chapters: [
      { id: "ch-1", title: "Founded in 1882", timestampHint: "0:00", script: "Established by French missionaries in 1882, St. Joseph's anchors Bengaluru's academic heritage.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Fide et Labore Tradition", timestampHint: "0:30", script: "Under Jesuit stewardship, 'Faith and Toil' became a byword for excellence across South India.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Karnataka's Sporting & Civic Titan", timestampHint: "1:00", script: "Its playing fields and lecture halls produced governors, judges, and Olympic icons.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "St. Joseph's University, Bengaluru",
      foundationYear: 1882,
      tradition: "Jesuit Educational Rigor & Cosmopolitan Service",
      notableAlumni: ["Sri Sri Ravi Shankar", "Rahul Dravid (attended school/PUC)", "Veerendra Heggade", "Girish Karnad (frequent visitor)", "Ashish Ballal"]
    }
  }
};

export const INDIAN_COLLEGES_ALIASES: Record<string, string> = {
  // Presidency Kolkata
  "presidency college": "presidency college kolkata",
  "presidency university kolkata": "presidency college kolkata",
  "presidency college kolkata": "presidency college kolkata",
  "hindoo college": "presidency college kolkata",
  "hindu college kolkata": "presidency college kolkata",
  "presidency calcutta": "presidency college kolkata",
  "derozio hall": "presidency college kolkata",
  "college street presidency": "presidency college kolkata",
  "প্রেসিডেন্সি কলেজ": "presidency college kolkata",

  // St. Xavier's Mumbai
  "st xaviers mumbai": "st xaviers college mumbai",
  "st xavier mumbai": "st xaviers college mumbai",
  "st xavier's college mumbai": "st xaviers college mumbai",
  "st xaviers college mumbai": "st xaviers college mumbai",
  "xaviers mumbai": "st xaviers college mumbai",
  "xavier mumbai": "st xaviers college mumbai",
  "xaviers college mumbai": "st xaviers college mumbai",
  "st xavier's mumbai": "st xaviers college mumbai",
  "st xaviers fort": "st xaviers college mumbai",

  // University of Mumbai / Rajabai Tower
  "mumbai university": "university of mumbai",
  "bombay university": "university of mumbai",
  "university of mumbai": "university of mumbai",
  "university of bombay": "university of mumbai",
  "rajabai tower": "university of mumbai",
  "rajabai clock tower": "university of mumbai",
  "mumbai university fort campus": "university of mumbai",
  "convocation hall mumbai university": "university of mumbai",
  "mumbai university library": "university of mumbai",

  // IIT Roorkee
  "iit roorkee": "iit roorkee",
  "roorkee university": "iit roorkee",
  "thomason college": "iit roorkee",
  "thomason college of civil engineering": "iit roorkee",
  "university of roorkee": "iit roorkee",
  "james thomason building": "iit roorkee",
  "iit r": "iit roorkee",
  "thomason building roorkee": "iit roorkee",

  // University of Madras / Senate House
  "madras university": "university of madras",
  "university of madras": "university of madras",
  "senate house madras": "university of madras",
  "senate house chennai": "university of madras",
  "senate house university of madras": "university of madras",
  "madras university senate house": "university of madras",
  "chepauk campus": "university of madras",

  // Fergusson College
  "fergusson college": "fergusson college pune",
  "fergusson college pune": "fergusson college pune",
  "fergusson pune": "fergusson college pune",
  "fc pune": "fergusson college pune",
  "deccan education society": "fergusson college pune",
  "फर्ग्युसन कॉलेज": "fergusson college pune",

  // AMU
  "aligarh muslim university": "aligarh muslim university",
  "amu": "aligarh muslim university",
  "amu aligarh": "aligarh muslim university",
  "mao college": "aligarh muslim university",
  "strachey hall": "aligarh muslim university",
  "muhammadan anglo oriental college": "aligarh muslim university",
  "sir syed university": "aligarh muslim university",

  // BHU
  "banaras hindu university": "banaras hindu university",
  "bhu": "banaras hindu university",
  "bhu varanasi": "banaras hindu university",
  "kashi hindu vishwavidyalaya": "banaras hindu university",
  "kashi vishwavidyalaya": "banaras hindu university",
  "sayaji rao library": "banaras hindu university",
  "new vishwanath temple bhu": "banaras hindu university",
  "vt bhu": "banaras hindu university",

  // St. Stephen's Delhi
  "st stephens college": "st stephens college delhi",
  "st stephen's college": "st stephens college delhi",
  "st stephens delhi": "st stephens college delhi",
  "st stephen's college delhi": "st stephens college delhi",
  "stephens college": "st stephens college delhi",
  "stephen's college delhi": "st stephens college delhi",

  // Serampore College
  "serampore college": "serampore college",
  "shreerampore college": "serampore college",
  "carey college": "serampore college",
  "william carey college": "serampore college",
  "serampore": "serampore college",

  // CEG Guindy
  "college of engineering guindy": "college of engineering guindy",
  "ceg guindy": "college of engineering guindy",
  "ceg chennai": "college of engineering guindy",
  "guindy engineering college": "college of engineering guindy",
  "anna university ceg": "college of engineering guindy",

  // Elphinstone College
  "elphinstone college": "elphinstone college mumbai",
  "elphinstone college mumbai": "elphinstone college mumbai",
  "elphinstone mumbai": "elphinstone college mumbai",
  "kala ghoda college": "elphinstone college mumbai",

  // MCC
  "madras christian college": "madras christian college",
  "mcc chennai": "madras christian college",
  "mcc tambaram": "madras christian college",
  "mcc college chennai": "madras christian college",

  // Presidency Chennai
  "presidency college chennai": "presidency college chennai",
  "presidency chennai": "presidency college chennai",
  "presidency college madras": "presidency college chennai",

  // Hindu College Delhi
  "hindu college delhi": "hindu college delhi",
  "hindu college": "hindu college delhi",
  "hindu college du": "hindu college delhi",

  // Scottish Church College
  "scottish church college": "scottish church college",
  "scottish church college kolkata": "scottish church college",
  "scottish church kolkata": "scottish church college",
  "general assemblys institution": "scottish church college",

  // Central College Bangalore
  "central college bangalore": "central college bangalore",
  "central college bengaluru": "central college bangalore",
  "central college": "central college bangalore",
  "bengaluru city university central college": "central college bangalore",

  // St. Xavier's Kolkata
  "st xaviers college kolkata": "st xaviers college kolkata",
  "st xavier's college kolkata": "st xaviers college kolkata",
  "st xaviers kolkata": "st xaviers college kolkata",
  "st xavier kolkata": "st xaviers college kolkata",
  "xaviers kolkata": "st xaviers college kolkata",
  "xaviers college park street": "st xaviers college kolkata",

  // Mayo College Ajmer
  "mayo college": "mayo college ajmer",
  "mayo college ajmer": "mayo college ajmer",
  "mayo ajmer": "mayo college ajmer",

  // St. Joseph's Bangalore
  "st josephs college bangalore": "st josephs college bangalore",
  "st joseph's college bangalore": "st josephs college bangalore",
  "st josephs university bangalore": "st josephs college bangalore",
  "st josephs bangalore": "st josephs college bangalore"
};
