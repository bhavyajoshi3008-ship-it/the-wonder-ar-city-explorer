import { FallbackLandmarkData } from "./landmarkDossiers";

export const HISTORIC_COLLEGES_AND_UNESCO_DOSSIERS: Record<string, FallbackLandmarkData> = {
  // ==========================================
  // HISTORIC COLLEGES & UNIVERSITIES
  // ==========================================
  "oxford university": {
    name: "University of Oxford (Radcliffe Camera & Christ Church)",
    localName: "University of Oxford",
    city: "Oxford",
    country: "United Kingdom",
    architecturalStyle: "English Palladian & Collegiate Gothic",
    periodEra: "Founded c. 1096 / Camera 1749",
    confidence: 99,
    summary: "The oldest university in the English-speaking world. Designed by James Gibbs, the circular drum and dome of the Radcliffe Camera stands as Oxford's intellectual heart alongside the collegiate quadrangles of Christ Church and the Bodleian Library.",
    coordinatesEstimate: { lat: 51.7538, lng: -1.254 },
    arKeypoints: [
      { id: "pt-1", label: "Lead-Clad Upper Dome", featureType: "dome", description: "Magnificent copper and lead-covered dome over an octagonal stone drum, engineered by James Gibbs in 1749.", x: 50, y: 18 },
      { id: "pt-2", label: "Corinthian Columned Rotunda", featureType: "column", description: "Rusticated stone base supporting pairs of coupled Corinthian columns forming the upper library gallery.", x: 50, y: 45 },
      { id: "pt-3", label: "Bodleian Gladstone Link Entrance", featureType: "entrance", description: "Subterranean tunnel connecting the Radcliffe Camera reading rooms directly to the Old Bodleian Library.", x: 50, y: 78 },
      { id: "pt-4", label: "Radcliffe Square Cobblestones", featureType: "facade", description: "Historic radial paving pattern framing St Mary the Virgin Church and All Souls College.", x: 30, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1096", event: "Teaching Commences in Oxford", description: "Earliest recorded lectures in Oxford; grew rapidly after Henry II banned English students from attending the University of Paris in 1167." },
      { yearOrEra: "1546", event: "Christ Church Foundation", description: "King Henry VIII refounded Cardinal Wolsey's Cardinal College as Christ Church, establishing Tom Quad." },
      { yearOrEra: "1749", event: "Radcliffe Camera Completion", description: "Dr. John Radcliffe bequeathed funds for Britain's first circular library, built in English Palladian style." },
      { yearOrEra: "Present", event: "Global Academic Preeminence", description: "Consistently ranked among the top research universities in the world, graduating 30 British Prime Ministers and 72 Nobel laureates." }
    ],
    architecturalSecrets: [
      "The Radcliffe Camera is England's earliest example of a circular library; its massive stone dome weighs over 3,000 tons.",
      "A secret underground library known as the 'Gladstone Link' runs directly beneath Radcliffe Square connecting to the Bodleian.",
      "Christ Church's Great Hall served as the visual architectural inspiration for Hogwarts Hall in the Harry Potter films."
    ],
    culturalSignificance: "Oxford set the global template for the residential collegiate university system, fostering thinkers from Roger Bacon and John Locke to J.R.R. Tolkien, Stephen Hawking, and modern world leaders.",
    visitorTips: [
      "Climb the tower of the University Church of St Mary the Virgin for the classic 360-degree aerial perspective of the Radcliffe Camera.",
      "Pre-book Bodleian Library historic tours to view Duke Humfrey's medieval library and the Divinity School.",
      "Observe quiet reading hours outside the Camera in Radcliffe Square."
    ],
    narrationScript: "Welcome to Oxford, where stone and scholarship have stood in conversation for nearly a thousand years. Rising before you is the Radcliffe Camera, James Gibbs's Palladian masterpiece completed in 1749. Beneath its classical dome and rusticated stone arcade lie subterranean vaults linked to the Bodleian, safeguarding millions of manuscripts. Look across the square toward Christ Church and All Souls: this is the collegiate system where tutorials, debates, and discoveries have shaped world history since 1096.",
    chapters: [
      { id: "ch-1", title: "A Millennial Seat of Learning", timestampHint: "0:00", script: "Teaching took root here in 1096, establishing Oxford as the oldest university in the English-speaking world.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Gibbs's Palladian Marvel", timestampHint: "0:30", script: "The Radcliffe Camera was England's first circular library, crowned by coupled Corinthian columns and an octagonal drum.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Subterranean Knowledge Vaults", timestampHint: "1:00", script: "Beneath the cobblestones of Radcliffe Square lies the Gladstone Link tunnel, ferrying scholars into the Bodleian.", focusPointId: "pt-3" }
    ]
  },

  "cambridge university": {
    name: "University of Cambridge (King's College Chapel)",
    localName: "University of Cambridge",
    city: "Cambridge",
    country: "United Kingdom",
    architecturalStyle: "Perpendicular Gothic & Fan Vaulting",
    periodEra: "Founded 1209 / Chapel 1446–1515",
    confidence: 99,
    summary: "Renowned for its medieval collegiate courts and Backs along the River Cam. King's College Chapel houses the world's largest stone fan vault ceiling, constructed under three English kings.",
    coordinatesEstimate: { lat: 52.2043, lng: 0.1166 },
    arKeypoints: [
      { id: "pt-1", label: "Perpendicular Gothic Spirelets", featureType: "spire", description: "Slender corner octagonal turrets rising 44 meters above the Cam river lawn.", x: 25, y: 15 },
      { id: "pt-2", label: "World's Largest Fan Vault", featureType: "dome", description: "Master mason John Wastell's gravity-defying stone ceiling completed in 1515.", x: 50, y: 35 },
      { id: "pt-3", label: "Tudor Flemish Stained Glass", featureType: "facade", description: "Twenty-six majestic Renaissance glass narrative windows installed during Henry VIII's reign.", x: 50, y: 60 },
      { id: "pt-4", label: "River Cam Backs & Lawn", featureType: "facade", description: "Famous lawn sloping to the River Cam where punts pass beneath Clare and King's bridges.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1209", event: "Scholars Flee to Cambridge", description: "Scholars from Oxford settled in Cambridge following a dispute with townspeople, founding the second university." },
      { yearOrEra: "1446", event: "Henry VI Lays Foundation Stone", description: "King Henry VI laid the foundation stone of King's College Chapel during the Wars of the Roses." },
      { yearOrEra: "1515", event: "Fan Vault Completed under Henry VIII", description: "Master mason John Wastell erected the breathtaking stone fan vault, crowned with the Tudor rose." },
      { yearOrEra: "Present", event: "Scientific & Intellectual Powerhouse", description: "Associated with 121 Nobel laureates, from Isaac Newton and Charles Darwin to Alan Turing and Watson & Crick." }
    ],
    architecturalSecrets: [
      "The fan vault ceiling is completely self-supporting: stone ribs thrust inward against massive external buttresses with no internal pillars.",
      "Rubens's masterpiece 'The Adoration of the Magi' hangs directly behind the high altar, gifted to the college in 1961.",
      "The world-famous Christmas Eve 'Festival of Nine Lessons and Carols' has been broadcast globally from this chapel since 1928."
    ],
    culturalSignificance: "Cambridge represents the pinnacle of collegiate scientific revolution and intellectual discovery, birthing Newtonian physics, evolutionary biology, and computer science.",
    visitorTips: [
      "Take a punt on the River Cam to experience the chapel's dramatic scale rising above the Backs.",
      "Attend Evensong service by the King's College Choir for extraordinary acoustic resonance.",
      "Visit the nearby Mathematical Bridge at Queens' College and Trinity College Great Court."
    ],
    narrationScript: "You stand before the crown jewel of English Perpendicular Gothic architecture: King's College Chapel at the University of Cambridge. Conceived by Henry VI in 1446 and brought to fruition by Henry VIII, this sacred hall boasts the largest fan-vaulted ceiling anywhere on Earth. Outside, the River Cam gently glides beneath weeping willows; inside, twenty-six Renaissance stained glass windows illuminate stone carvings of the Tudor rose. Here in Cambridge, Newton penned the Principia, Darwin explored the origin of species, and Turing unlocked computation.",
    chapters: [
      { id: "ch-1", title: "Foundation on the River Cam", timestampHint: "0:00", script: "Born in 1209, Cambridge grew into one of the world's greatest hubs of scientific revelation.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Sovereign Fan Vault", timestampHint: "0:30", script: "John Wastell's stone fan vault spans 88 meters without a single central supporting column.", focusPointId: "pt-2" },
      { id: "ch-3", title: "Renaissance Flemish Glass", timestampHint: "1:00", script: "Henry VIII commissioned these 26 towering stained glass windows, surviving the English Civil War.", focusPointId: "pt-3" }
    ]
  },

  "harvard university": {
    name: "Harvard University (Harvard Yard & Memorial Hall)",
    localName: "Harvard University",
    city: "Cambridge, Massachusetts",
    country: "United States",
    architecturalStyle: "Georgian Colonial & Ruskinian High Victorian Gothic",
    periodEra: "Founded 1636 / Memorial Hall 1878",
    confidence: 99,
    summary: "The oldest institution of higher learning in the United States, established in 1636. Harvard Yard is shaded by historic American elms, surrounded by 18th-century red-brick dormitories and the soaring Victorian Gothic Memorial Hall.",
    coordinatesEstimate: { lat: 42.377, lng: -71.1167 },
    arKeypoints: [
      { id: "pt-1", label: "Memorial Hall Gothic Tower", featureType: "spire", description: "Ruskinian Victorian Gothic memorial tower honoring Harvard graduates who fought for the Union in the Civil War.", x: 50, y: 20 },
      { id: "pt-2", label: "Annenberg Hall Stained Glass", featureType: "facade", description: "Spectacular dining hall featuring Tiffany and La Farge stained glass windows and hammerbeam wooden trusses.", x: 50, y: 48 },
      { id: "pt-3", label: "Massachusetts Hall (1720)", featureType: "facade", description: "Harvard's oldest surviving building, having housed Revolutionary War soldiers and modern university presidents.", x: 30, y: 70 },
      { id: "pt-4", label: "John Harvard Statue Foot", featureType: "statue", description: "Daniel Chester French's bronze statue, known as the 'Statue of Three Lies', whose shoe is rubbed for academic luck.", x: 70, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1636", event: "Colony Founded by Great and General Court", description: "The Massachusetts Bay Colony voted to establish the college, named after benefactor John Harvard in 1638." },
      { yearOrEra: "1775", event: "American Revolution Barracks", description: "Harvard Yard dormitories housed Continental Army soldiers during the Siege of Boston." },
      { yearOrEra: "1878", event: "Memorial Hall Dedication", description: "Ware and Van Brunt designed Memorial Hall as a sacred tribute to Harvard's Union soldiers." },
      { yearOrEra: "Present", event: "Global Academic Beacon", description: "Educated 8 U.S. Presidents, 161 Nobel laureates, and holds the world's largest academic library collection." }
    ],
    architecturalSecrets: [
      "The John Harvard statue is called the 'Statue of Three Lies': John Harvard was a benefactor not founder, Harvard was founded in 1636 not 1638, and the face depicts a 19th-century student model since no likeness of John Harvard existed.",
      "Annenberg Hall inside Memorial Hall is one of the grandest Gothic dining halls in the world, featuring 21 Tiffany & Co. and John La Farge stained glass lancets.",
      "Widener Library beneath Harvard Yard contains over 57 miles of underground book stacks."
    ],
    culturalSignificance: "As America's oldest university, Harvard was central to the intellectual genesis of the American Revolution, the American Renaissance, and global modern research.",
    visitorTips: [
      "Enter through Johnston Gate into Harvard Yard to take in Massachusetts Hall and University Hall.",
      "Walk over to Cambridge Street to admire the breathtaking polychromatic slate roof and tower of Memorial Hall.",
      "Rub John Harvard's polished bronze toe on the plaza of University Hall for good luck."
    ],
    narrationScript: "Step into Harvard Yard, the hallowed cradle of American higher education. Founded by the Massachusetts Bay Colony in 1636, this peaceful green has sheltered Revolutionary troops and eight American presidents. Just beyond the trees rises Memorial Hall, an astounding masterpiece of Ruskinian High Victorian Gothic architecture completed in 1878 to honor students who fell defending the Union. With its polychromatic slate roof, Tiffany stained glass, and historic red brickwork, Harvard blends collegiate tradition with world-shaping intellectual vigor.",
    chapters: [
      { id: "ch-1", title: "Colonial Birth of Harvard", timestampHint: "0:00", script: "In 1636, Harvard was chartered as the first college in the American colonies.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Victorian Gothic Memorial Hall", timestampHint: "0:30", script: "Memorial Hall's soaring tower and hammerbeam trusses stand as a monument to Union soldiers.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Statue of Three Lies", timestampHint: "1:00", script: "Daniel Chester French sculpted the iconic bronze of John Harvard, whose polished shoe is rubbed by thousands.", focusPointId: "pt-4" }
    ]
  },

  "university of coimbra": {
    name: "University of Coimbra – Alta and Sofia",
    localName: "Universidade de Coimbra",
    city: "Coimbra",
    country: "Portugal",
    architecturalStyle: "Manueline, Baroque & Neoclassical",
    periodEra: "Founded 1290 AD by King Dinis",
    confidence: 99,
    summary: "An official UNESCO World Heritage Site crowning the hill of Coimbra. Featuring the 18th-century Baroque Joanina Library with gilded chinoiserie woodwork, the Royal Palace of Alcáçova, and the Saint Michael Chapel.",
    coordinatesEstimate: { lat: 40.2075, lng: -8.4261 },
    arKeypoints: [
      { id: "pt-1", label: "University Clock & Bell Tower", featureType: "spire", description: "The 18th-century Baroque tower whose famous bell 'A Cabra' historically summoned students to lectures.", x: 45, y: 15 },
      { id: "pt-2", label: "Biblioteca Joanina Façade", featureType: "facade", description: "Masterpiece of Portuguese Baroque with monumental limestone portal and coat of arms of King John V.", x: 25, y: 55 },
      { id: "pt-3", label: "Pátio das Escolas Courtyard", featureType: "facade", description: "Grand open terrace overlooking the Mondego river flanked by the Royal Palace and academic halls.", x: 50, y: 75 },
      { id: "pt-4", label: "Capela de São Miguel Portal", featureType: "entrance", description: "Manueline portal leading into the chapel with a majestic 1733 Baroque pipe organ.", x: 75, y: 60 }
    ],
    historicalTimeline: [
      { yearOrEra: "1290", event: "Papal Bull of Nicholas IV", description: "King Dinis established the 'Estudo Geral', recognized by papal bull, alternating between Lisbon and Coimbra." },
      { yearOrEra: "1537", event: "Permanent Installation at Royal Palace", description: "King John III permanently ceded the Alcáçova royal palace to the University in Coimbra." },
      { yearOrEra: "1728", event: "Biblioteca Joanina Completed", description: "King John V financed the opulent gilded library housing 200,000 antiquarian books and rare manuscripts." },
      { yearOrEra: "2013", event: "UNESCO World Heritage Inscription", description: "Inscribed on the UNESCO World Heritage list for its exceptional cultural and architectural continuity." }
    ],
    architecturalSecrets: [
      "A colony of common pipistrelle bats lives inside the Biblioteca Joanina; at night they consume wood-boring insects to protect ancient leather bindings, and tables are draped with leather cloths to catch droppings.",
      "The walls of the Joanina Library are made of solid 2-meter-thick stone, maintaining an invariant 60% humidity and constant temperature year-round without mechanical air conditioning.",
      "Underneath the Pátio das Escolas lies an intact 16th-century Academic Prison where transgressing students and professors were incarcerated by university guards."
    ],
    culturalSignificance: "For over seven centuries, Coimbra was the paramount intellectual incubator of the Portuguese-speaking world, graduating Luís de Camões, Eça de Queirós, and figures across Portugal, Brazil, and Africa.",
    visitorTips: [
      "Pre-book admission to the Biblioteca Joanina as entries are strictly timed to preserve internal humidity.",
      "Walk the terrace of Pátio das Escolas for panoramic vistas of the Mondego River valley.",
      "Look for students wearing traditional black academic capes (traje académico), which inspired Hogwarts uniforms."
    ],
    narrationScript: "High on a sunlit hill overlooking Portugal's Mondego River stands the University of Coimbra, an official UNESCO World Heritage Site founded in 1290. Step onto the Pátio das Escolas, where the Baroque tower's bell has called scholars to class for centuries. Ahead lies the magnificent Biblioteca Joanina, an 18th-century treasure chest of gilded exotic woods, trompe-l'œil ceilings, and two hundred thousand leather-bound volumes safeguarded by a resident colony of bats. Coimbra's living traditions of scholarship and black-caped attire have echoed through Portuguese history for over seven hundred years.",
    chapters: [
      { id: "ch-1", title: "A Royal Palace Converted to Learning", timestampHint: "0:00", script: "In 1537, King John III gifted his royal palace to become the permanent home of Coimbra.", focusPointId: "pt-3" },
      { id: "ch-2", title: "The Baroque Splendor of Joanina", timestampHint: "0:30", script: "The Biblioteca Joanina gleams with Brazilian jacaranda wood, gold leaf, and rare antiquarian volumes.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The Academic Tower & Tradition", timestampHint: "1:00", script: "The iconic university clock tower still tolls daily, presiding over centuries of student ritual.", focusPointId: "pt-1" }
    ]
  },

  "university of salamanca": {
    name: "University of Salamanca (Plateresque Façade & Escuelas Mayores)",
    localName: "Universidad de Salamanca",
    city: "Salamanca",
    country: "Spain",
    architecturalStyle: "Spanish Plateresque & Early Renaissance",
    periodEra: "Founded 1218 AD by Alfonso IX / Façade 1529",
    confidence: 99,
    summary: "The oldest university in the Hispanic world and an official UNESCO World Heritage monument. Renowned for its intricate Sandstone Plateresque façade carved like silversmith filigree, featuring the Catholic Monarchs medallion and the legendary frog.",
    coordinatesEstimate: { lat: 40.9616, lng: -5.6669 },
    arKeypoints: [
      { id: "pt-1", label: "Plateresque Sandstone Façade", featureType: "facade", description: "Carved from Villamayor golden sandstone in 1529 with delicate floral filigree and classical medallions.", x: 50, y: 30 },
      { id: "pt-2", label: "Catholic Monarchs Medallion", featureType: "relief", description: "Relief of Ferdinand and Isabella bearing the Greek inscription: 'The Kings to the University and this to the Kings'.", x: 50, y: 50 },
      { id: "pt-3", label: "The Lucky Skull & Frog (La Rana)", featureType: "relief", description: "Famous miniature frog carved on one of three skulls on the right pillar, spotted by students for exam luck.", x: 62, y: 65 },
      { id: "pt-4", label: "Patio de Escuelas Mayores Portal", featureType: "entrance", description: "Renaissance courtyard portal leading into Fray Luis de León's preserved 16th-century wooden lecture hall.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1218", event: "Royal Charter by King Alfonso IX", description: "Alfonso IX of León established the 'Scholas Salamanticae', confirmed by papal bull of Alexander IV in 1255." },
      { yearOrEra: "1492", event: "First Spanish Grammar Published", description: "Antonio de Nebrija presented the 'Gramática de la lengua castellana' here, the first grammar of a modern European language." },
      { yearOrEra: "1529", event: "Plateresque Façade Carved", description: "Master stonemasons completed the intricate golden filigree façade fronting the Patio de Escuelas." },
      { yearOrEra: "1988", event: "UNESCO World Heritage Inscription", description: "Inscribed as the core cultural monument of the Old City of Salamanca UNESCO site." }
    ],
    architecturalSecrets: [
      "The façade is carved in local Villamayor stone, a soft feldspathic sandstone that hardens upon exposure to air and glows with an unmistakable golden hue in sunlight.",
      "The famous frog atop the skull (La Rana de Salamanca) was originally carved as an allegorical warning against carnal lust and sin, but later transformed into a talisman of good luck for university examinations.",
      "The classroom of Fray Luis de León remains exactly as it was in December 1576, with rough-hewn wooden benches where the poet returned after five years in Inquisition prison and began: 'Dicebamus hesterna die' ('As we were saying yesterday...')."
    ],
    culturalSignificance: "Salamanca was the intellectual heart of the Spanish Golden Age and the birthplace of the School of Salamanca, which pioneered modern international law, human rights doctrines, and just war philosophy through Francisco de Vitoria.",
    visitorTips: [
      "Stand in the Patio de Escuelas and see if you can locate the tiny carved frog on the right-hand pillar without asking for clues.",
      "Step inside the Escuelas Mayores to inspect the preserved 16th-century classroom of Fray Luis de León.",
      "Visit the Old Library with its globe collection and medieval hand-painted manuscripts."
    ],
    narrationScript: "Before you stands the legendary façade of the University of Salamanca, the oldest university in the Hispanic world, founded in 1218. Carved from golden Villamayor sandstone in 1529, this marvel of the Spanish Plateresque style unfolds like silversmith lace. Across its three tiers, look for the relief medallion of the Catholic Monarchs Ferdinand and Isabella. And on the right pillar, resting atop a carved skull, sits the world-famous little frog—a symbol of luck that generations of students have sought before their exams. Here, Nebrija codified the Spanish language, Columbus defended his voyage to the Indies, and Francisco de Vitoria drafted the foundation of modern international law.",
    chapters: [
      { id: "ch-1", title: "Cradle of Hispanic Higher Learning", timestampHint: "0:00", script: "Founded in 1218 by Alfonso IX of León, Salamanca nurtured the Spanish Golden Age.", focusPointId: "pt-4" },
      { id: "ch-2", title: "The Plateresque Tapestry in Stone", timestampHint: "0:30", script: "The 1529 façade combines Gothic delicacy with Renaissance humanist medallions and classical mythology.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Frog and the Legacy of Human Rights", timestampHint: "1:00", script: "From the famous lucky frog to Francisco de Vitoria's lectures on human dignity, Salamanca shaped global thought.", focusPointId: "pt-3" }
    ]
  },

  "university of bologna": {
    name: "University of Bologna (Archiginnasio & Anatomical Theatre)",
    localName: "Alma Mater Studiorum - Università di Bologna",
    city: "Bologna",
    country: "Italy",
    architecturalStyle: "Bolognese Renaissance & UNESCO Porticoes",
    periodEra: "Founded 1088 AD / Archiginnasio 1563",
    confidence: 99,
    summary: "Recognized as the oldest university in continuous operation in the Western world. Housed in the monumental 16th-century Archiginnasio Palace, featuring Europe's largest heraldic coat-of-arms collection and the all-wood Anatomical Theatre.",
    coordinatesEstimate: { lat: 44.4924, lng: 11.3435 },
    arKeypoints: [
      { id: "pt-1", label: "Renaissance Portico & Courtyard", featureType: "arch", description: "Monumental double-tiered loggia courtyard covered in thousands of painted student and professor crests.", x: 50, y: 70 },
      { id: "pt-2", label: "Anatomical Theatre Ceiling & Apollo", featureType: "dome", description: "Carved spruce wood ceiling depicting Apollo presiding over celestial constellations, crafted in 1637.", x: 50, y: 25 },
      { id: "pt-3", label: "Spellati Statues (Skinless Men)", featureType: "statue", description: "Famous wood statues carved by Ercole Lelli flanking the professor's cattedra showing muscles and tendons.", x: 30, y: 55 },
      { id: "pt-4", label: "Heraldic Coats of Arms Walls", featureType: "relief", description: "Over 6,000 painted stone crests of international student nations and rectors across the loggias.", x: 70, y: 50 }
    ],
    historicalTimeline: [
      { yearOrEra: "1088", event: "Foundation of Alma Mater Studiorum", description: "Irnerius and masters of law founded the guild of students ('universitas scholarium') in Bologna." },
      { yearOrEra: "1563", event: "Archiginnasio Palace Inauguration", description: "Cardinal Borromeo unified the faculties of Law, Medicine, and Philosophy under one grand Renaissance roof." },
      { yearOrEra: "1637", event: "Anatomical Theatre Constructed", description: "Antonio Levante built the wood-paneled amphitheater for public anatomical dissections and demonstrations." },
      { yearOrEra: "Present", event: "Signatory of Bologna Process", description: "Gave its name to the modern pan-European higher education standardization accord (Bologna Declaration)." }
    ],
    architecturalSecrets: [
      "With over 6,000 heraldic crests painted on its walls, the Archiginnasio contains the largest heraldic collection in the world.",
      "The Anatomical Theatre was completely rebuilt after bomb damage in World War II using the original fallen carved spruce timbers recovered from the rubble.",
      "A hidden spyhole and Inquisition confessional booth sat adjacent to the dissection table so the Catholic Church could monitor doctors for heresy during autopsies."
    ],
    culturalSignificance: "Bologna birthed the concept of the university as an autonomous community of scholars and students, graduating Dante Alighieri, Petrarch, Erasmus, Copernicus, and Umberto Eco.",
    visitorTips: [
      "Walk through the central courtyard and look up to marvel at the thousands of student coats of arms.",
      "Enter the Teatro Anatomico to see the central marble dissection table and Ercole Lelli's anatomical statues.",
      "Notice Bologna's famous UNESCO-listed porticoes lining the exterior approach to Piazza Maggiore."
    ],
    narrationScript: "Welcome to Bologna's Palazzo dell'Archiginnasio, seat of the Alma Mater Studiorum—the oldest university in the Western world, founded in 1088. Commissioned in 1563, this Renaissance palace was designed to bring together the scattered faculties of Law, Arts, and Medicine. Along the grand courtyards, gaze upon six thousand painted coats of arms left by scholars from across Europe. Inside lies the world-renowned Teatro Anatomico, crafted entirely from aromatic spruce wood, where physicians dissected human cadavers under the watchful gaze of Apollo and carved statues of the 'Spellati', the skinless men.",
    chapters: [
      { id: "ch-1", title: "Mother of Universities", timestampHint: "0:00", script: "Founded in 1088, Bologna coined the term 'universitas' and established student-governed scholarship.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Heraldic Tapestry of Europe", timestampHint: "0:30", script: "Six thousand student heraldic shields testify to eight centuries of international scholar migration.", focusPointId: "pt-4" },
      { id: "ch-3", title: "The Anatomical Theatre", timestampHint: "1:00", script: "Step into the 1637 pine amphitheater where medical pioneers uncovered the anatomy of the human body.", focusPointId: "pt-2" }
    ]
  },

  // ==========================================
  // TOP UNESCO WORLD HERITAGE WONDERS
  // ==========================================
  "machu picchu": {
    name: "Historic Sanctuary of Machu Picchu",
    localName: "Machu Pikchu",
    city: "Cusco Region",
    country: "Peru",
    architecturalStyle: "Incan Ashlar Dry-Stone Masonry (Polygonal)",
    periodEra: "c. 1450 AD (Emperor Pachacuti)",
    confidence: 99,
    summary: "Perched 2,430 meters above sea level in the Peruvian Andes, Machu Picchu is an architectural marvel of polished dry-stone walls fitted without mortar, featuring the Intihuatana sundial stone and astronomical alignment temples.",
    coordinatesEstimate: { lat: -13.1631, lng: -72.545 },
    arKeypoints: [
      { id: "pt-1", label: "Huayna Picchu Peak Backdrop", featureType: "facade", description: "The iconic green pyramid peak rising behind the citadel, containing the high Temple of the Moon.", x: 50, y: 15 },
      { id: "pt-2", label: "Intihuatana Astronomical Hitching Post", featureType: "statue", description: "Sacred carved granite sundial used by Incan astronomers to tether the sun at the winter solstice.", x: 40, y: 38 },
      { id: "pt-3", label: "Agricultural Terraces (Andenes)", featureType: "facade", description: "Multi-tiered hillside terraces providing microclimates, drainage, and structural hillside stability.", x: 50, y: 75 },
      { id: "pt-4", label: "Temple of the Sun Curved Wall", featureType: "arch", description: "Semi-circular ashlar stone wall with trapezoidal windows aligned with the June solstice sunrise.", x: 65, y: 55 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 1450", event: "Constructed by Emperor Pachacuti", description: "Built as an imperial royal estate and spiritual retreat at the height of the Inca Empire." },
      { yearOrEra: "1572", event: "Citadel Abandoned", description: "Abandoned following the Spanish conquest of the Vilcabamba redoubt, remaining hidden from the conquistadors." },
      { yearOrEra: "1911", event: "Hiram Bingham Brings to Global Notice", description: "Yale historian Hiram Bingham guided by Quechua farmer Melchor Arteaga brought the ruins to international attention." },
      { yearOrEra: "1983", event: "UNESCO World Heritage Inscription", description: "Designated as a dual cultural and natural UNESCO World Heritage site, later voted a New 7 Wonder." }
    ],
    architecturalSecrets: [
      "Over 60% of Machu Picchu's construction is subterranean: thousands of tons of crushed granite rock and gravel form deep drainage beds preventing landslides.",
      "The massive granite blocks were cut without iron tools, using hammerstones and bronze chisels, fitted so closely that a razor blade cannot slide between them.",
      "Trapezoidal windows and doors lean slightly inward at an 8-degree angle, providing earthquake resistance that lets stones dance during tremors and settle back into place."
    ],
    culturalSignificance: "Machu Picchu is the supreme achievement of Incan civilization, fusing astronomical religion, hydraulic engineering, and dramatic mountain topography into harmonious perfection.",
    visitorTips: [
      "Book the early morning Circuit 2 entry for panoramic viewpoints from the Guardian's House before afternoon clouds.",
      "Drink coca tea or hydrate well to acclimate to Cusco's high elevation before ascending to Aguas Calientes.",
      "Touch the Intihuatana observation platform quietly without stepping across the safety boundaries."
    ],
    narrationScript: "You are gazing upon the crown of the Andes: the Incan Sanctuary of Machu Picchu. Built around 1450 by Emperor Pachacuti, this stone city sits suspended between mountain peaks and cloud forests. Notice the extraordinary masonry: gigantic granite boulders fitted together without a drop of mortar, engineered to withstand earthquakes. Look toward the Temple of the Sun with its curved window catching the winter solstice, and the sacred Intihuatana stone where Incan priests ceremonially hitched the sun to ensure the harvest. Preserved in seclusion for centuries, it remains one of humanity's most breathtaking architectural wonders.",
    chapters: [
      { id: "ch-1", title: "Citadel in the Clouds", timestampHint: "0:00", script: "Pachacuti built this sanctuary high above the Urubamba River around 1450.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Seismic Incan Stonework", timestampHint: "0:30", script: "Trapezoidal doorways and interlocking mortarless ashlar stones withstand severe Andean earthquakes.", focusPointId: "pt-4" },
      { id: "ch-3", title: "The Cosmic Intihuatana", timestampHint: "1:00", script: "The Intihuatana sundial stone aligned with solstices and celestial cycles of the cosmos.", focusPointId: "pt-2" }
    ]
  },

  "petra": {
    name: "Petra - Al-Khazneh (The Treasury)",
    localName: "البتراء",
    city: "Ma'an Governorate",
    country: "Jordan",
    architecturalStyle: "Nabataean Rock-Cut Architecture with Hellenistic Influence",
    periodEra: "1st Century BC to 1st Century AD",
    confidence: 99,
    summary: "Carved directly into red and pink sandstone rock faces between the Dead Sea and Red Sea. The capital of the Nabataean kingdom features ingenious water-harvesting cisterns and the magnificent 40m-tall Treasury facade.",
    coordinatesEstimate: { lat: 30.3285, lng: 35.4444 },
    arKeypoints: [
      { id: "pt-1", label: "Upper Tholos & Funerary Urn", featureType: "dome", description: "Circular pavilion topped with a stone urn that Bedouin legends believed concealed pharaoh's gold.", x: 50, y: 18 },
      { id: "pt-2", label: "Hellenistic Corinthian Capitals", featureType: "column", description: "Six monumental sandstone columns featuring ornate acanthus leaf capitals carved into bedrock.", x: 50, y: 55 },
      { id: "pt-3", label: "The Siq Canyon Entrance View", featureType: "entrance", description: "The narrow 1.2km canyon gorge framing the dramatic initial glimpse of Al-Khazneh's glowing facade.", x: 50, y: 88 },
      { id: "pt-4", label: "Reliefs of Castor and Pollux", featureType: "relief", description: "Weathered equestrian relief sculptures representing mythological twins guiding souls to the underworld.", x: 30, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 312 BC", event: "Nabataean Capital Established", description: "Nomadic Arab Nabataeans established Petra as the hub of frankincense and spice trade routes." },
      { yearOrEra: "c. 1st Century AD", event: "Al-Khazneh Carved", description: "Carved under King Aretas IV Philopatris, likely serving as a royal mausoleum and memorial tomb." },
      { yearOrEra: "106 AD", event: "Annexation by Emperor Trajan", description: "Roman Emperor Trajan incorporated Petra into the Roman province of Arabia Petraea." },
      { yearOrEra: "1985", event: "UNESCO World Heritage Listing", description: "Inscribed on the UNESCO World Heritage list, hailed as one of the most precious cultural properties of man's heritage." }
    ],
    architecturalSecrets: [
      "Al-Khazneh was carved from the top down into the vertical cliff face: stonemasons cut foot platforms in the rock and carved downwards, requiring no scaffolding.",
      "Bullet holes in the upper urn were shot by Bedouins in the 19th century hoping to crack open the stone to release rumored hidden treasure; the urn is solid sandstone.",
      "The Nabataeans engineered hundreds of kilometers of clay pipes and dams that diverted flash floods and provided fresh drinking water across the arid desert."
    ],
    culturalSignificance: "Petra represents a breathtaking synthesis of nomadic Arabian resilience, Hellenistic Greek classical orders, and ancient Middle Eastern caravan commerce.",
    visitorTips: [
      "Arrive early at 6:00 AM to walk through the cool Siq canyon before tour groups arrive.",
      "Wear comfortable hiking boots to climb up to the High Place of Sacrifice and the Monastery (Ad-Deir).",
      "Attend the Petra by Night candlelit walk through the Siq for an enchanting desert atmosphere."
    ],
    narrationScript: "Emerge from the shadowy depths of the Siq canyon into the radiant desert sunshine, and behold Petra's Treasury: Al-Khazneh. Carved entirely out of living rose-red sandstone over two thousand years ago by the Nabataean kingdom, this monumental forty-meter façade was chiseled from top to bottom into the sheer cliffside. Hellenistic Corinthian columns, winged Victories, and classical pediments adorn what was likely the tomb of King Aretas IV. Across the desert, ingenious water channels sustained twenty thousand citizens at this crossroads of silk and spice.",
    chapters: [
      { id: "ch-1", title: "Emerging from the Siq", timestampHint: "0:00", script: "After a 1.2-kilometer walk through a narrow gorge, the rose-red rock face suddenly reveals itself.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Carved from the Top Down", timestampHint: "0:30", script: "Nabataean masons carved downward into the cliff without scaffolding, sculpting the urn and Corinthian pediments.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Masters of the Desert Caravans", timestampHint: "1:00", script: "Petra controlled the global trade of frankincense and myrrh between Arabia, Rome, and the Orient.", focusPointId: "pt-2" }
    ]
  },

  "acropolis of athens": {
    name: "Acropolis of Athens & The Parthenon",
    localName: "Ακρόπολη Αθηνών",
    city: "Athens",
    country: "Greece",
    architecturalStyle: "Classical Greek Doric & Ionic Pentelic Marble",
    periodEra: "447–432 BC (Golden Age of Pericles)",
    confidence: 99,
    summary: "The universal symbol of classical civilization and Western democracy. Crowned by the Parthenon, dedicated to Athena Parthenos by architects Ictinus and Callicrates with sculptural wonders by Phidias.",
    coordinatesEstimate: { lat: 37.9715, lng: 23.7267 },
    arKeypoints: [
      { id: "pt-1", label: "Doric Peristyle Columns & Entasis", featureType: "column", description: "Fluted Pentelic marble columns with subtle optical curvature (entasis) that make them appear perfectly straight.", x: 50, y: 55 },
      { id: "pt-2", label: "Eastern Pediment & Tympanum", featureType: "relief", description: "Triangular pediment originally depicting the birth of goddess Athena from the head of Zeus.", x: 50, y: 28 },
      { id: "pt-3", label: "Propylaea Monumental Gateway", featureType: "entrance", description: "Grand marble gateway designed by Mnesikles welcoming processions onto the sacred rock.", x: 20, y: 70 },
      { id: "pt-4", label: "Erechtheion Caryatid Porch", featureType: "statue", description: "Six sculpted maiden figures serving as architectural columns supporting the marble entablature.", x: 80, y: 45 }
    ],
    historicalTimeline: [
      { yearOrEra: "447 BC", event: "Pericles Commences Reconstruction", description: "Pericles convinced the Athenian assembly to reconstruct the sacred temples destroyed by the Persians." },
      { yearOrEra: "438 BC", event: "Chryselephantine Athena Dedicated", description: "Phidias dedicated the 12-meter-tall gold-and-ivory statue of Athena Parthenos inside the cella." },
      { yearOrEra: "1687", event: "Venetian Bombardment Explosion", description: "A Venetian mortar shell struck the Parthenon while used as an Ottoman gunpowder magazine, blowing out the center." },
      { yearOrEra: "1987", event: "UNESCO World Heritage Inscription", description: "Recognized as the universal cradle of classical spirit and monument of human creative genius." }
    ],
    architecturalSecrets: [
      "There is not a single straight line in the Parthenon: the base stylobate curves gently upward at the center, and columns lean inward by 6 centimeters so they would meet 1.5 miles up in the sky.",
      "The columns swell subtly in the middle (a technique called entasis) to counter the optical illusion of concavity caused by human perspective.",
      "The Pentelic marble contains traces of iron that oxidize in the Mediterranean sun, giving the temple its golden honey glow."
    ],
    culturalSignificance: "The Acropolis is the cradle of Western philosophy, democracy, theatre, and classical art, standing as the standard of balance, proportion, and civic humanism.",
    visitorTips: [
      "Visit the Acropolis Museum at the foot of the hill first to see the original Caryatids and Parthenon frieze slabs.",
      "Climb to the summit early in the morning to avoid midday Mediterranean heat and peak crowds.",
      "Look across to the Pnyx hill where the Athenian democratic assembly debated and voted."
    ],
    narrationScript: "Standing on the rocky citadel of the Acropolis in Athens, you are in the cradle of Western democracy, philosophy, and classical architecture. Rising before you is the Parthenon, completed in 432 BC under Pericles. Notice how every Pentelic marble column tilts ever so slightly inward, and how the floor subtly arches—ingenious optical refinements by Ictinus and Callicrates to create an illusion of absolute harmony. Nearby, the Caryatids of the Erechtheion stand with timeless grace. From this sacred limestone rock, human beings first conceived government by the people.",
    chapters: [
      { id: "ch-1", title: "Cradle of Democracy and Reason", timestampHint: "0:00", script: "In 447 BC, Pericles directed Athens's golden age from this rocky sanctuary.", focusPointId: "pt-3" },
      { id: "ch-2", title: "The Optical Magic of the Parthenon", timestampHint: "0:30", script: "No straight lines exist here: curved floors and tapered columns correct human optical illusions.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Maidens of the Erechtheion", timestampHint: "1:00", script: "Six sculpted marble Caryatids balance the weight of the roof with poise and quiet strength.", focusPointId: "pt-4" }
    ]
  }
};

export const HISTORIC_COLLEGES_AND_UNESCO_ALIASES: Record<string, string> = {
  "oxford": "oxford university",
  "university of oxford": "oxford university",
  "radcliffe camera": "oxford university",
  "christ church oxford": "oxford university",
  "oxford college": "oxford university",
  "cambridge": "cambridge university",
  "university of cambridge": "cambridge university",
  "kings college chapel": "cambridge university",
  "king's college chapel": "cambridge university",
  "cambridge college": "cambridge university",
  "harvard": "harvard university",
  "harvard yard": "harvard university",
  "memorial hall harvard": "harvard university",
  "harvard college": "harvard university",
  "coimbra": "university of coimbra",
  "universidade de coimbra": "university of coimbra",
  "coimbra university": "university of coimbra",
  "salamanca": "university of salamanca",
  "universidad de salamanca": "university of salamanca",
  "salamanca university": "university of salamanca",
  "bologna": "university of bologna",
  "universita di bologna": "university of bologna",
  "bologna university": "university of bologna",
  "archiginnasio": "university of bologna",
  "machu picchu": "machu picchu",
  "machu pikchu": "machu picchu",
  "petra": "petra",
  "al khazneh": "petra",
  "the treasury petra": "petra",
  "acropolis": "acropolis of athens",
  "parthenon": "acropolis of athens",
  "acropolis of athens": "acropolis of athens",
};
