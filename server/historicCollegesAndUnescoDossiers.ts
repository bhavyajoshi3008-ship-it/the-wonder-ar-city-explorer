import { FallbackLandmarkData } from "./landmarkDossiers";
import { INDIAN_COLLEGES_DOSSIERS, INDIAN_COLLEGES_ALIASES } from "./indianCollegesDossiers";

export const HISTORIC_COLLEGES_AND_UNESCO_DOSSIERS: Record<string, FallbackLandmarkData> = {
  ...INDIAN_COLLEGES_DOSSIERS,
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
  },

  "university of al-qarawiyyin": {
    name: "University of Al-Qarawiyyin",
    localName: "جامعة القرويين",
    city: "Fez",
    country: "Morocco",
    architecturalStyle: "Moroccan Moorish Islamic Architecture with Horseshoe Arches & Zellij Tilework",
    periodEra: "Founded 859 AD by Fatima al-Fihri",
    confidence: 99,
    summary: "Recognized by UNESCO and Guinness World Records as the oldest continually operating higher education institution in the world. Founded in 859 AD by Fatima al-Fihri, it features a majestic green-tiled courtyard, ornate stucco arabesques, and a historic manuscript library.",
    coordinatesEstimate: { lat: 34.0649, lng: -4.9734 },
    arKeypoints: [
      { id: "pt-1", label: "Central Marble Fountain Courtyard", featureType: "facade", description: "Marble ablutions fountain surrounded by carved cedarwood eaves and vibrant cobalt-blue zellij mosaics.", x: 50, y: 55 },
      { id: "pt-2", label: "Green Glazed Tile Gable", featureType: "roof", description: "Iconic emerald-green ceramic tiles crowning the multi-nave prayer hall and library pavilions.", x: 50, y: 20 },
      { id: "pt-3", label: "Fatimid-era Minaret", featureType: "spire", description: "Square minaret erected in 956 AD with horseshoe arch lancets overlooking the Fez medina.", x: 25, y: 15 },
      { id: "pt-4", label: "Ancient Manuscript Library", featureType: "entrance", description: "Houses 4,000+ priceless medieval codices, including 9th-century Qur'anic parchments in Kufic script.", x: 75, y: 70 }
    ],
    historicalTimeline: [
      { yearOrEra: "859 AD", event: "Fatima al-Fihri's Sacred Endowment", description: "A wealthy merchant's daughter, Fatima al-Fihri, dedicated her entire inheritance to build the mosque and madrasa." },
      { yearOrEra: "956 AD", event: "Umayyad Minaret Expansion", description: "Caliph Abd al-Rahman III funded the construction of the iconic square stone minaret." },
      { yearOrEra: "1143 AD", event: "Almoravid Golden Era", description: "Extensive expansion of the arches, bronze chandeliers, and geometric wooden ceilings under Sultan Ali ibn Yusuf." },
      { yearOrEra: "Present", event: "World's Oldest Operating University", description: "Continues university education and preservation of its world-famous manuscript collection." }
    ],
    architecturalSecrets: [
      "Founded by a Muslim woman, Fatima al-Fihri, making it one of the earliest institutions created through female academic patronage.",
      "The library houses Ibn Khaldun's original handwritten 14th-century copy of 'Kitab al-Ibar' (the Muqaddimah).",
      "Features a 12th-century wooden water clock (clepsydra) displaying advanced medieval hydraulics."
    ],
    culturalSignificance: "Al-Qarawiyyin bridged knowledge between the Islamic World and Europe, serving as the intellectual meeting ground for Pope Sylvester II (who introduced Arabic numerals to Europe), Maimonides, and Ibn Rushd.",
    visitorTips: [
      "Non-Muslims may view the courtyard and library through the open ornate cedar portals in the Medina of Fez.",
      "Book an official tour of the restored Al-Qarawiyyin Library to see the vaulted reading halls and ancient manuscripts.",
      "Wear comfortable walking shoes to navigate the narrow cobblestone alleyways of Fes el-Bali."
    ],
    narrationScript: "You are looking upon the University of Al-Qarawiyyin in Fez, Morocco—recognized by UNESCO as the oldest continuously operating university in human history. Founded in 859 AD by Fatima al-Fihri, this sanctuary of learning was teaching mathematics, astronomy, grammar, and medicine centuries before universities appeared in Europe. Notice the tranquil courtyard with its marble fountain, framed by horseshoe arches adorned with intricate zellij mosaics and carved cedarwood. Its historic library holds over four thousand medieval manuscripts, including rare ninth-century Qur'ans.",
    chapters: [
      { id: "ch-1", title: "A Millennial Legacy Since 859 AD", timestampHint: "0:00", script: "Fatima al-Fihri poured her entire inheritance into establishing this enduring citadel of world learning.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Emerald Gables & Moorish Arches", timestampHint: "0:30", script: "Slender columns and horseshoe arches showcase the zenith of medieval Moroccan craftsmanship.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The World's Oldest Library", timestampHint: "1:00", script: "Inside lie Ibn Khaldun's handwritten manuscripts and medieval astrolabes that charted the cosmos.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Al-Qarawiyyin",
      foundationYear: 859,
      tradition: "Islamic Golden Age & Andalusian-Maghrebi Scholasticism",
      notableAlumni: ["Fatima al-Fihri", "Ibn Khaldun", "Maimonides", "Al-Idrisi", "Pope Sylvester II (Gerbert of Aurillac)"]
    }
  },

  "nalanda mahavihara": {
    name: "Archaeological Site of Nalanda Mahavihara",
    localName: "नालंदा महाविहार",
    city: "Nalanda, Bihar",
    country: "India",
    architecturalStyle: "Ancient Gupta & Pala Buddhist Monastic Brick Architecture (Stupas & Chaityas)",
    periodEra: "5th to 12th Century AD (Gupta Empire)",
    confidence: 99,
    summary: "One of the greatest residential monastic universities of the ancient world, active from the 5th century CE. Nalanda accommodated over 10,000 scholars and 2,000 teachers, housing a vast multi-storey library called Dharmaganja.",
    coordinatesEstimate: { lat: 25.1357, lng: 85.4452 },
    arKeypoints: [
      { id: "pt-1", label: "Temple Site 3 Main Stupa", featureType: "spire", description: "Iconic terraced monumental stupa rising 31 meters with carved votive stupas and Gupta Buddha niches.", x: 50, y: 35 },
      { id: "pt-2", label: "Monastery Quadrangle Cells", featureType: "facade", description: "Red-brick residential dormitory cells arranged around a central open-air podium and water well.", x: 30, y: 70 },
      { id: "pt-3", label: "Dharmaganja Library Foundations", featureType: "entrance", description: "Ancient foundation of the multi-storey library that once held hundreds of thousands of palm-leaf manuscripts.", x: 75, y: 65 },
      { id: "pt-4", label: "Gupta Terracotta & Plaster Reliefs", featureType: "relief", description: "Stucco panels depicting Bodhisattvas, flying apsaras, and geometric lotus medallions.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "427 AD", event: "Gupta Foundation", description: "Emperor Kumaragupta I founded the Mahavihara as an imperial center of Buddhist learning." },
      { yearOrEra: "630 AD", event: "Xuanzang's Pilgrimage & Studies", description: "The famous Chinese Buddhist pilgrim Xuanzang studied logic, Sanskrit, and philosophy at Nalanda for five years." },
      { yearOrEra: "750 AD", event: "Pala Empire Royal Patronage", description: "Expanded under the Pala kings, flourishing as Asia's undisputed capital of Mahayana logic and medicine." },
      { yearOrEra: "1193 AD", event: "Destruction & Preservation", description: "Sacked in the late 12th century; rediscovery by Alexander Cunningham revealed its immense brick architecture." }
    ],
    architecturalSecrets: [
      "Temple Site 3 represents seven successive layers of construction: each new century encased the previous stupa like nesting dolls without demolishing the sacred interior.",
      "The library complex 'Dharmaganja' was said to comprise three nine-storey towers named Ratnasagara, Ratnodadhi, and Ratnaranjaka.",
      "The residential monasteries featured advanced brick drainage conduits, private meditation niches, and shared water wells."
    ],
    culturalSignificance: "Nalanda was the intellectual lighthouse of Asia. Scholars from China, Korea, Japan, Tibet, Indonesia, and Persia journeyed thousands of miles to study astronomy, mathematics, logic, and philosophy here.",
    visitorTips: [
      "Visit the adjacent Nalanda Archaeological Museum to see exquisite bronze and stone sculptures recovered from the ruins.",
      "Walk the path between Monastery 1 and Temple Site 3 for breathtaking panoramic views of the red-brick stupas.",
      "Pair your visit with the Xuanzang Memorial Hall nearby."
    ],
    narrationScript: "You are standing among the red-brick ruins of Nalanda Mahavihara in Bihar, India. Founded in the fifth century CE under the Gupta Empire, Nalanda was the ancient world's foremost residential university, housing ten thousand students and two thousand masters. Scholars like the Chinese pilgrim Xuanzang traveled across frozen peaks and deserts to study mathematics, medicine, and philosophy here. Rising before you is Temple Site 3, an imposing stupa built in seven concentric stages, surrounded by monastery quadrangles with student dormitories and meditation cells.",
    chapters: [
      { id: "ch-1", title: "Asia's Ancient Seat of Knowledge", timestampHint: "0:00", script: "Founded in 427 AD, Nalanda accommodated over 10,000 scholars from across Asia.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Concentric Stupa Architecture", timestampHint: "0:30", script: "Temple Site 3 encompasses seven layers of brick masonry spanning over six centuries.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Monastic Cells & The Library", timestampHint: "1:00", script: "Student dormitories and lecture podiums surround the legendary Dharmaganja library foundations.", focusPointId: "pt-2" }
    ],
    unescoYear: 2016,
    unescoId: 1502,
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Nalanda Mahavihara",
      foundationYear: 427,
      tradition: "Ancient Indian Classical Buddhist & Vedantic Scholasticism",
      notableAlumni: ["Nagarjuna", "Aryabhata", "Xuanzang", "Dharmakirti", "Shantarakshita"]
    }
  },

  "ancient university of taxila": {
    name: "Ancient University & Archaeological Ruins of Taxila",
    localName: "ٹیکسلا قدیم درسگاہ",
    city: "Taxila, Punjab",
    country: "Pakistan",
    architecturalStyle: "Gandharan Greco-Buddhist Stone Masonry & Stupas",
    periodEra: "c. 6th Century BCE to 5th Century CE",
    confidence: 99,
    summary: "One of the earliest educational centers in documented history, dating back to 600 BCE at the crossroads of the Silk Road. Chanakya authored the Arthashastra here, and students from across Asia studied military arts, law, and medicine.",
    coordinatesEstimate: { lat: 33.7463, lng: 72.8394 },
    arKeypoints: [
      { id: "pt-1", label: "Dharmarajika Stupa Core", featureType: "dome", description: "Massive hemispherical stone stupa built by Emperor Ashoka in the 3rd century BCE.", x: 50, y: 35 },
      { id: "pt-2", label: "Sirkap Greco-Bactrian Grid City", featureType: "facade", description: "Orthogonal street layout engineered under Indo-Greek rule following the conquests of Alexander the Great.", x: 30, y: 65 },
      { id: "pt-3", label: "Double-Headed Eagle Stupa Shrine", featureType: "relief", description: "Famous shrine in Sirkap showing Greek Corinthian pilasters and an imperial double-headed eagle motif.", x: 70, y: 55 },
      { id: "pt-4", label: "Jaulian Monastery Courtyard", featureType: "facade", description: "Hilltop monastery with intact stucco sculptures of seated Buddhas and meditation cells.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 600 BCE", event: "Vedic & Achaemenid Learning Hub", description: "Emerged as a primary intellectual center of Gandhara, attracting seekers of law, medicine, and philosophy." },
      { yearOrEra: "326 BCE", event: "Alexander the Great's Encounter", description: "Alexander visited Taxila and debated with local philosophers, marveling at their wisdom and discipline." },
      { yearOrEra: "c. 300 BCE", event: "Chanakya Teaches Chandragupta", description: "Master statesman Chanakya taught here and wrote the foundational treatise 'Arthashastra'." },
      { yearOrEra: "1980 AD", event: "UNESCO Inscription", description: "Inscribed as a World Heritage Site for its unique synthesis of Greco-Buddhist art and archaeology." }
    ],
    architecturalSecrets: [
      "Taxila was not a single campus but a decentralized city of scholars where teachers led independent 'gurukuls' clustered around urban centers like Bhir Mound and Sirkap.",
      "The Double-Headed Eagle Stupa exhibits architectural syncretism: Greek pediments, Indian toranas, and Persian double-headed eagles on a single stone facade.",
      "The physician Jivaka, personal doctor to Gautama Buddha and King Bimbisara, studied medicine in Taxila for seven years."
    ],
    culturalSignificance: "Taxila was the intellectual bridge where ancient Indian philosophy met Greco-Roman culture, producing the world-famous Gandhara art style and foundational Asian political philosophy.",
    visitorTips: [
      "Visit the Taxila Museum first to admire the world's most extensive collection of Gandharan Buddhist schist sculptures.",
      "Climb to the Jaulian and Mohra Muradu monasteries on the hill slopes for serene views and remarkably intact stucco carvings.",
      "Walk the grid-patterned royal avenue of Sirkap."
    ],
    narrationScript: "Welcome to Taxila, one of the oldest centers of higher learning in human history, flourishing in what is now Pakistan from 600 BCE. Positioned at the strategic crossroads of the Silk Road, Taxila drew students from Greece, Persia, Central Asia, and India. Here, Chanakya composed the Arthashastra, guiding the foundation of the Maurya Empire. Before you lie the stupas and monasteries of Dharmarajika and Sirkap, where Greek columns and Buddhist iconography fused into the glorious Gandharan architectural style.",
    chapters: [
      { id: "ch-1", title: "Cradle of Silk Road Scholarship", timestampHint: "0:00", script: "Dating to 600 BCE, Taxila educated princes, physicians, and philosophers at the crossroads of East and West.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Greco-Buddhist Architecture", timestampHint: "0:30", script: "Sirkap and Jaulian exhibit Corinthian pilasters crowned with Buddhist medallions and stupas.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Legacy of Chanakya & Jivaka", timestampHint: "1:00", script: "Here, Chanakya penned the Arthashastra and Jivaka mastered ancient surgery.", focusPointId: "pt-4" }
    ],
    unescoYear: 1980,
    unescoId: 139,
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Ancient University of Taxila",
      foundationYear: "600 BCE",
      tradition: "Gandharan Greco-Buddhist & Ancient Vedic Academy",
      notableAlumni: ["Chanakya (Kautilya)", "Chandragupta Maurya", "Jivaka", "Charaka", "Panini"]
    }
  },

  "al-azhar university": {
    name: "Al-Azhar University & Historic Mosque",
    localName: "جامعة الأزهر ومسجد الأزهر",
    city: "Cairo",
    country: "Egypt",
    architecturalStyle: "Fatimid, Mamluk, & Ottoman Islamic Architecture",
    periodEra: "Founded 970–972 AD (Fatimid Dynasty)",
    confidence: 99,
    summary: "Founded in 970 AD in Fatimid Cairo, Al-Azhar is the chief center of Islamic and Arabic scholarship in the Sunni world. Its courtyard features graceful pointed stilted arches, intricate stucco medallions, and minarets added by Mamluk sultans.",
    coordinatesEstimate: { lat: 30.0458, lng: 31.2625 },
    arKeypoints: [
      { id: "pt-1", label: "Mamluk Minaret of Qaitbay", featureType: "spire", description: "Exquisite carved stone minaret erected in 1469 AD with octagonal tiers and geometric lace reliefs.", x: 25, y: 15 },
      { id: "pt-2", label: "Central White Marble Sahn", featureType: "facade", description: "Paved marble open-air courtyard framed by Fatimid keel-shaped arches with keel medallions.", x: 50, y: 55 },
      { id: "pt-3", label: "Double-Finial Minaret of Al-Ghuri", featureType: "spire", description: "Unique twin-topped stone minaret constructed by Sultan Qansuh al-Ghuri in 1509.", x: 75, y: 18 },
      { id: "pt-4", label: "Bab al-Muzayinin (Gate of the Barbers)", featureType: "entrance", description: "Historic main entrance portal where scholars historically had their heads shaved before entering.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "970 AD", event: "Fatimid Foundation", description: "General Jawhar al-Siqilli laid the foundation stone on the orders of Caliph Al-Mu'izz, naming it in honor of Fatima al-Zahra." },
      { yearOrEra: "975 AD", event: "Scholastic Assembly Begins", description: "Chief Justice Abu Hasan Ali began regular university lectures in the mosque hall." },
      { yearOrEra: "15th Century", event: "Mamluk Architectural Golden Age", description: "Sultans Qaitbay and Al-Ghuri embellished the mosque with towering minarets and madrasas." },
      { yearOrEra: "Present", event: "Global Beacon of Islamic Thought", description: "Over 50 faculties educating hundreds of thousands of international students across sciences and theology." }
    ],
    architecturalSecrets: [
      "The stucco keel arches in the central courtyard date back to the 10th century and display delicate Kufic inscriptions carved directly into the wet plaster.",
      "Sultan Al-Ghuri's minaret is one of the only minarets in Cairo to terminate in a dramatic double-headed finial.",
      "The prayer hall has nine successive aisles that have sheltered informal study circles (halaqat) for over a thousand years."
    ],
    culturalSignificance: "Al-Azhar is universally recognized as the prime authority for classical Arabic language and Islamic jurisprudence, nurturing scholars who preserved Greek philosophy and led modern reform.",
    visitorTips: [
      "Dress respectfully with covered shoulders and legs; head coverings are provided for women at the entrance.",
      "Remove your shoes at Bab al-Muzayinin and carry them in a bag or leave them with the shoe attendant.",
      "Step into the courtyard early in the morning when the white marble reflects Cairo's golden sun in quiet reverie."
    ],
    narrationScript: "You stand before Al-Azhar in the heart of Islamic Cairo, founded in 970 AD during the Fatimid Dynasty. Bearing the name of the Prophet's daughter, Fatima al-Zahra, Al-Azhar quickly grew from a grand congregational mosque into the most prestigious university in the Islamic world. Look up at the majestic skyline of Mamluk minarets, including the twin-topped tower of Sultan Al-Ghuri. Step into the central courtyard, where white marble reflects sunlight beneath graceful Fatimid keel arches that have echoed with debates in science, law, and philosophy for over a millennium.",
    chapters: [
      { id: "ch-1", title: "A Millennial Fortress of Faith & Logic", timestampHint: "0:00", script: "Commissioned in 970 AD, Al-Azhar has educated leaders across Africa and Asia for over 1,050 years.", focusPointId: "pt-2" },
      { id: "ch-2", title: "Mamluk Stone Towers", timestampHint: "0:30", script: "The intricately carved minarets of Qaitbay and Al-Ghuri pierce Cairo's skyline with stone filigree.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Keel Arches of the Sahn", timestampHint: "1:00", script: "Fatimid plaster medallions and Kufic calligraphy grace the peaceful open courtyard.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Al-Azhar University",
      foundationYear: 970,
      tradition: "Fatimid & Sunni Classical Islamic Scholasticism",
      notableAlumni: ["Ibn al-Haytham (Alhazen)", "Ibn Khaldun", "Muhammad Abduh", "Taha Hussein", "Ahmed Zewail"]
    }
  },

  "university of padua": {
    name: "University of Padua (Palazzo Bo & Anatomical Theatre)",
    localName: "Università degli Studi di Padova (Palazzo Bo)",
    city: "Padua",
    country: "Italy",
    architecturalStyle: "Renaissance Civic & Venetian Academic Palatial Architecture",
    periodEra: "Founded 1222 / Palazzo Bo 16th Century",
    confidence: 99,
    summary: "Founded in 1222 by scholars seeking intellectual freedom. It hosts the world's oldest permanent anatomical theatre (1595) and the podium where Galileo Galilei taught physics and astronomy for 18 glorious years.",
    coordinatesEstimate: { lat: 45.407, lng: 11.8772 },
    arKeypoints: [
      { id: "pt-1", label: "Galileo Galilei's Wooden Rostrum", featureType: "facade", description: "The preserved rough spruce podium constructed by Galileo's students in the Sala dei Quaranta.", x: 50, y: 40 },
      { id: "pt-2", label: "World's First Anatomical Theatre (1595)", featureType: "interior", description: "Six-tier elliptical carved walnut amphitheatre designed by Girolamo Fabrici d'Acquapendente.", x: 50, y: 25 },
      { id: "pt-3", label: "Palazzo Bo Ancient Courtyard", featureType: "facade", description: "Two-tiered Renaissance loggia by Andrea Moroni adorned with 3,000 stone heraldic coats of arms.", x: 50, y: 70 },
      { id: "pt-4", label: "Elena Lucrezia Cornaro Piscopia Statue", featureType: "statue", description: "Statue of the Venetian noblewoman who became the first woman in the world to receive a doctorate in 1678.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1222", event: "Secession from Bologna", description: "Professors and students migrated from Bologna to establish a university governed by free thought under the motto 'Universa Universis Patavina Libertas'." },
      { yearOrEra: "1592–1610", event: "Galileo's 18 Glorious Years", description: "Galileo called his time in Padua the happiest of his life, constructing his first telescope here to discover Jupiter's moons." },
      { yearOrEra: "1595", event: "World's First Anatomical Theatre", description: "Inaugurated a permanent wooden amphitheater revolutionizing modern surgery and medicine." },
      { yearOrEra: "1678", event: "World's First Woman Doctorate", description: "Elena Lucrezia Cornaro Piscopia was awarded a doctorate in philosophy." }
    ],
    architecturalSecrets: [
      "The Anatomical Theatre was built entirely of carved walnut without windows: candlelight illuminated the dissection table to maintain concentration.",
      "The walls of Palazzo Bo's ancient courtyard are covered with nearly 3,000 stone and painted coats of arms of student rectors from across Europe.",
      "Galileo's lumbar vertebra is preserved in the university's historic scientific museum."
    ],
    culturalSignificance: "Padua championed European scientific liberty, fostering Copernicus (who studied medicine here), Vesalius (father of modern anatomy), William Harvey (discoverer of blood circulation), and Galileo.",
    visitorTips: [
      "Join the guided historic tour of Palazzo Bo to stand inside the Anatomical Theatre and Galileo's lecture hall.",
      "Look for the statue of Elena Cornaro Piscopia at the base of the grand staircase.",
      "Visit the nearby Botanical Garden of Padua (Orto Botanico), the world's oldest academic botanical garden founded in 1545."
    ],
    narrationScript: "You stand inside Palazzo Bo at the University of Padua, founded in 1222 under the proud motto 'Patavina Libertas'—freedom of thought for all. Here in 1595, Girolamo Fabrici built the world's very first permanent anatomical theatre, an elliptical wooden amphitheatre where William Harvey watched dissections that led to the discovery of blood circulation. Upstairs stands the modest wooden rostrum where Galileo Galilei delivered legendary lectures on physics and astronomy, calling his eighteen years in Padua the happiest of his life.",
    chapters: [
      { id: "ch-1", title: "Universal Liberty Since 1222", timestampHint: "0:00", script: "Padua broke free from dogma to establish Europe's capital of medical and astronomical liberty.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Galileo's Wooden Rostrum", timestampHint: "0:30", script: "From this podium, Galileo revolutionized modern physics before peering through his telescope at Jupiter.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The 1595 Anatomical Theatre", timestampHint: "1:00", script: "Six carved tiers of walnut hosted human anatomical studies that birthed modern medical science.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Padua",
      foundationYear: 1222,
      tradition: "Venetian Renaissance Empirical Humanism & Medicine",
      notableAlumni: ["Galileo Galilei", "Nicolaus Copernicus", "Andreas Vesalius", "William Harvey", "Elena Cornaro Piscopia"]
    }
  },

  "sorbonne university": {
    name: "Sorbonne University & Chapel",
    localName: "Université de la Sorbonne & Chapelle Sainte-Ursule",
    city: "Paris",
    country: "France",
    architecturalStyle: "French Classical Baroque Architecture with Corinthian Portico & Dome",
    periodEra: "Founded 1257 by Robert de Sorbon / Chapel 1642",
    confidence: 99,
    summary: "The historic intellectual epicenter of Paris in the Latin Quarter, founded in 1257 by Robert de Sorbon. Cardinal Richelieu rebuilt the complex in French Classical style, crowned by the dome and Corinthian portico of the Sorbonne Chapel.",
    coordinatesEstimate: { lat: 48.8485, lng: 2.3431 },
    arKeypoints: [
      { id: "pt-1", label: "Classical Baroque Dome", featureType: "dome", description: "Jacques Lemercier's ribbed dome rising 40 meters, the first of its kind in classical Paris.", x: 50, y: 20 },
      { id: "pt-2", label: "Corinthian Columned Portico", featureType: "column", description: "Majestic classical pediment and four fluted Corinthian columns facing the Place de la Sorbonne.", x: 50, y: 50 },
      { id: "pt-3", label: "Cour d'Honneur Courtyard", featureType: "facade", description: "Grand inner courtyard flanked by statues of Victor Hugo and Louis Pasteur.", x: 50, y: 75 },
      { id: "pt-4", label: "Tomb of Cardinal Richelieu", featureType: "statue", description: "François Girardon's dramatic white marble baroque funerary monument inside the chapel nave.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1257", event: "Robert de Sorbon's Foundation", description: "King Saint Louis IX's chaplain established a college for impoverished theology students on Montagne Sainte-Geneviève." },
      { yearOrEra: "1635", event: "Richelieu's Classical Reconstruction", description: "Cardinal Richelieu, elected headmaster of the Sorbonne, commissioned Jacques Lemercier to rebuild the university." },
      { yearOrEra: "1885", event: "Grand Neo-Renaissance Expansion", description: "Architect Henri-Paul Nénot designed the vast modern amphitheaters and Grand Amphithéâtre." },
      { yearOrEra: "Present", event: "Global Humanistic Center", description: "World-renowned institution associated with 33 Nobel laureates, including Marie Curie and Henri Poincaré." }
    ],
    architecturalSecrets: [
      "The Sorbonne Chapel is one of the very first domed buildings constructed in Paris, preceding the Dôme des Invalides by decades.",
      "The Latin Quarter got its name because scholars and students from across Europe spoke Latin as their everyday shared language in the streets surrounding the Sorbonne.",
      "Marie Curie defended her doctoral thesis on radioactive substances in the Sorbonne amphitheater in 1903."
    ],
    culturalSignificance: "The Sorbonne has stood for eight centuries as the global symbol of French intellectual debate, existentialism, human rights, and scientific brilliance.",
    visitorTips: [
      "Sit at a café terrace on the cobblestones of Place de la Sorbonne to admire the chapel facade under Parisian plane trees.",
      "Attend public events in the Grand Amphithéâtre to see Puvis de Chavannes's monumental mural 'The Sacred Wood'.",
      "Walk the rue des Écoles toward the Collège de France and the Pantheon."
    ],
    narrationScript: "You are standing on Place de la Sorbonne in Paris's historic Latin Quarter. Founded in 1257 by Robert de Sorbon, this university became the intellectual beating heart of Europe. Rising before you is the Sorbonne Chapel, designed by royal architect Jacques Lemercier in 1642 under the patronage of Cardinal Richelieu. Its classical Corinthian portico and soaring dome were the first of their kind in Paris. Within these lecture halls, Thomas Aquinas debated theology, Marie Curie unraveled radioactivity, and generations of thinkers forged modern philosophy.",
    chapters: [
      { id: "ch-1", title: "Cradle of the Latin Quarter", timestampHint: "0:00", script: "Since 1257, this hill in Paris has resonated with global philosophical discourse.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Lemercier's Baroque Dome", timestampHint: "0:30", script: "The 1642 chapel dome was one of the earliest classical domes erected in the French capital.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Legacy of Richelieu & Curie", timestampHint: "1:00", script: "Here rests Cardinal Richelieu, and here Marie and Pierre Curie conducted their Nobel-winning research.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Sorbonne University",
      foundationYear: 1257,
      tradition: "French Classical Scholasticism & Enlightenment",
      notableAlumni: ["Marie Curie", "Pierre Curie", "Simone de Beauvoir", "Jean-Paul Sartre", "Thomas Aquinas"]
    }
  },

  "charles university": {
    name: "Charles University – Carolinum",
    localName: "Univerzita Karlova (Karolinum)",
    city: "Prague",
    country: "Czech Republic",
    architecturalStyle: "Bohemian High Gothic & Baroque Academic Architecture with Oriel Window",
    periodEra: "Founded 1348 by Holy Roman Emperor Charles IV",
    confidence: 99,
    summary: "The oldest university in Central and Eastern Europe, founded in 1348 by Emperor Charles IV. Its historic seat, the Carolinum, features an extraordinary 14th-century Gothic bay oriel window, ancient vaulted halls, and Baroque lecture chambers.",
    coordinatesEstimate: { lat: 50.0863, lng: 14.4239 },
    arKeypoints: [
      { id: "pt-1", label: "14th-Century Gothic Oriel Window", featureType: "facade", description: "Intricate sandstone bay window with delicate tracery and gargoyles projecting over Železná street.", x: 75, y: 40 },
      { id: "pt-2", label: "Grand Aula of Charles University", featureType: "interior", description: "Ceremonial hall adorned with a 17th-century Brussels tapestry and Baroque paintings where degrees are conferred.", x: 50, y: 55 },
      { id: "pt-3", label: "Carolinum Arcaded Courtyard", featureType: "facade", description: "Restored Gothic ground-floor arches fused with Baroque arcades designed by František Maxmilián Kaňka.", x: 50, y: 75 },
      { id: "pt-4", label: "Emperor Charles IV Bronze Monument", featureType: "statue", description: "Statue of the scholarly Holy Roman Emperor who established Prague as the cultural capital of Central Europe.", x: 25, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1348", event: "Foundation by Charles IV", description: "Emperor Charles IV issued the Golden Bull establishing the first university in the Holy Roman Empire east of the Rhine." },
      { yearOrEra: "1383", event: "Acquisition of Rotlev House (Carolinum)", description: "King Wenceslaus IV purchased the patrician mansion of mintmaster Jan Rotlev to serve as the university headquarters." },
      { yearOrEra: "1409", event: "Decree of Kutná Hora & Jan Hus", description: "Religious reformer Jan Hus was appointed rector, leading Bohemian academic reform." },
      { yearOrEra: "Present", event: "National Cultural Monument", description: "The Carolinum continues to serve as the seat of the university rectorate and graduation ceremonies." }
    ],
    architecturalSecrets: [
      "The Gothic oriel window on the corner of the Carolinum contains a concealed small private chapel where rectors prayed before academic debates.",
      "During the Hussite wars, the Carolinum was one of the few university complexes in Central Europe that preserved its original charters and ceremonial mace.",
      "The massive Gothic cellars beneath the building host contemporary art and academic exhibitions."
    ],
    culturalSignificance: "Charles University established Prague as the center of Central European humanism, educating Franz Kafka, Nikola Tesla (who audited classes), Jan Hus, and Albert Einstein during his professorship in Prague.",
    visitorTips: [
      "Look up at the corner of Železná and Ovocný trh streets for the iconic angle of the Gothic oriel window.",
      "Check the schedule of the Carolinum cloister for public exhibitions showcasing medieval Bohemian history.",
      "Combine with a visit to the nearby Estates Theatre where Mozart conducted the premiere of Don Giovanni."
    ],
    narrationScript: "You stand outside the Carolinum in Prague, the historic headquarters of Charles University. Founded in 1348 by Holy Roman Emperor Charles IV, this is the oldest university in Central Europe. Gaze upon the magnificent 14th-century Gothic oriel window projecting from the stone facade, with its delicate tracery and stone gargoyles. Within these medieval vaulted halls, Jan Hus championed church reform, Albert Einstein taught theoretical physics in 1911, and generations of scholars including Franz Kafka walked through these cloisters.",
    chapters: [
      { id: "ch-1", title: "Imperial Foundation in 1348", timestampHint: "0:00", script: "Charles IV established Central Europe's first university in Prague to rival Paris and Bologna.", focusPointId: "pt-4" },
      { id: "ch-2", title: "The Masterpiece Gothic Oriel", timestampHint: "0:30", script: "This 14th-century sandstone oriel window is one of the finest surviving Gothic features in Prague.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Grand Aula of the Carolinum", timestampHint: "1:00", script: "Here in the ceremonial aula, doctoral candidates have received their diplomas for seven centuries.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Charles University (Carolinum)",
      foundationYear: 1348,
      tradition: "Central European Medieval & Renaissance Scholasticism",
      notableAlumni: ["Jan Hus", "Franz Kafka", "Albert Einstein (Professor)", "Max Brod", "Jaroslav Heyrovský"]
    }
  },

  "jagiellonian university": {
    name: "Jagiellonian University – Collegium Maius",
    localName: "Uniwersytet Jagielloński (Collegium Maius)",
    city: "Kraków",
    country: "Poland",
    architecturalStyle: "Polish Late Gothic Brick & Arcaded Courtyard Architecture",
    periodEra: "Founded 1364 by King Casimir the Great / Courtyard 15th Century",
    confidence: 99,
    summary: "The oldest university in Poland and second-oldest in Central Europe, founded in 1364. Its 15th-century Collegium Maius features an arcaded late-Gothic brick courtyard with diamond vaulting, where Nicolaus Copernicus studied astronomy.",
    coordinatesEstimate: { lat: 50.0617, lng: 19.9339 },
    arKeypoints: [
      { id: "pt-1", label: "Late-Gothic Arcaded Courtyard", featureType: "facade", description: "Breathtaking multi-tiered red-brick and stone arcaded quadrangle with delicate diamond net vaults.", x: 50, y: 50 },
      { id: "pt-2", label: "Professors' Staircase (Stuba Communis)", featureType: "entrance", description: "Enclosed Gothic outdoor stone staircase leading to the communal dining hall and professors' chambers.", x: 75, y: 65 },
      { id: "pt-3", label: "Copernicus Astrolabes & Torquetum", featureType: "interior", description: "Authentic 15th-century astronomical instruments used by Copernicus during his university studies in Kraków.", x: 30, y: 40 },
      { id: "pt-4", label: "Collegium Maius Astronomical Clock", featureType: "clock", description: "Musical clock in the courtyard where wooden figures of kings and rectors parade every two hours.", x: 50, y: 20 }
    ],
    historicalTimeline: [
      { yearOrEra: "1364", event: "Casimir the Great's Royal Charter", description: "King Casimir III founded the Studium Generale in Kraków, modeled after Bologna and Padua." },
      { yearOrEra: "1400", event: "Queen Jadwiga's Bequest & Refoundation", description: "Queen Jadwiga bequeathed her jewels and royal treasures, refounding the university alongside King Władysław II Jagiełło." },
      { yearOrEra: "1491–1495", event: "Copernicus Studies in Kraków", description: "Nicolaus Copernicus enrolled at Jagiellonian, discovering the mathematical tools that led him to stop the sun and move the earth." },
      { yearOrEra: "Present", event: "Crown Jewel of Polish Scholarship", description: "Continues as Poland's premier university, alma mater of Pope John Paul II and Nobel laureate Wisława Szymborska." }
    ],
    architecturalSecrets: [
      "The Collegium Maius houses the Jagiellonian Globe (c. 1510), one of the oldest surviving globes in the world to depict the American continent, bearing the famous phrase 'America noviter reperta'.",
      "The professors lived in communal quarters on the upper floors, dining together in the 'Stuba Communis' while heated by medieval tile stoves.",
      "The golden sceptres of Queen Jadwiga and Cardinal Oleśnicki, used in university ceremonies since the 15th century, are kept in the treasury."
    ],
    culturalSignificance: "Jagiellonian nurtured Poland's greatest Renaissance minds, producing the heliocentric revolution through Copernicus and shaping modern literature, philosophy, and statecraft.",
    visitorTips: [
      "Stand in the courtyard at 1:00 PM to watch the mechanical clock's procession of historic Polish figures to medieval music.",
      "Book a museum tour to view Copernicus's genuine brass astrolabes and the ancient Jagiellonian globe.",
      "Walk through the professors' garden (Ogród Profesorski) adjoining the college walls."
    ],
    narrationScript: "You stand within the arcaded courtyard of Collegium Maius in Kraków, the crown jewel of Jagiellonian University. Founded in 1364 by King Casimir the Great and refounded by Queen Jadwiga, this is Poland's oldest institution of higher learning. Look at the late-Gothic red-brick arcades with their stone balustrades and soaring steep-pitched roofs. Here, between 1491 and 1495, a young student named Nicolaus Copernicus studied mathematics and astronomy, using brass astrolabes to formulate the revolution that placed the Sun at the center of our universe.",
    chapters: [
      { id: "ch-1", title: "Royal Foundation in 1364", timestampHint: "0:00", script: "Casimir the Great and Saint Queen Jadwiga built this fortress of humanistic inquiry in Kraków.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Where Copernicus Reordered the Stars", timestampHint: "0:30", script: "Nicolaus Copernicus walked these brick arcades, mastering the celestial sciences that reshaped world history.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Treasures of Collegium Maius", timestampHint: "1:00", script: "Home to the 1510 Jagiellonian Globe and medieval academic sceptres.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Jagiellonian University (Collegium Maius)",
      foundationYear: 1364,
      tradition: "Polish Renaissance & Humanistic Scholasticism",
      notableAlumni: ["Nicolaus Copernicus", "Pope John Paul II (Karol Wojtyła)", "Wisława Szymborska", "Stanisław Lem", "Jan Kochanowski"]
    }
  },

  "university of vienna": {
    name: "University of Vienna (Main Ceremonial Building & Arcaded Courtyard)",
    localName: "Universität Wien (Hauptgebäude)",
    city: "Vienna",
    country: "Austria",
    architecturalStyle: "Italian Renaissance Revival (Ringstraße Historicism)",
    periodEra: "Founded 1365 by Duke Rudolph IV / Ringstraße 1884",
    confidence: 99,
    summary: "The oldest university in the German-speaking world, founded in 1365. Heinrich von Ferstel's monumental Ringstraße building features a palatial neo-Renaissance arcaded courtyard honoring 154 great scientists and thinkers.",
    coordinatesEstimate: { lat: 48.2131, lng: 16.3598 },
    arKeypoints: [
      { id: "pt-1", label: "Arkadenhof Memorial Courtyard", featureType: "facade", description: "Monumental open-air courtyard ringed by Renaissance arches with 154 busts of legendary scholars.", x: 50, y: 55 },
      { id: "pt-2", label: "Klimt University Ceiling Facsimiles", featureType: "interior", description: "Reconstructed ceiling paintings designed by Gustav Klimt representing Philosophy, Medicine, and Jurisprudence.", x: 50, y: 30 },
      { id: "pt-3", label: "Ringstraße Main Portico Facade", featureType: "column", description: "Corinthian portico crowned by allegorical statues overlooking Vienna's historic Ringstraße boulevard.", x: 50, y: 75 },
      { id: "pt-4", label: "Sigmund Freud Monument", featureType: "statue", description: "Bronze bust honoring Sigmund Freud, who studied and taught psychoanalysis here for decades.", x: 25, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1365", event: "Foundation by Duke Rudolph IV", description: "Rudolph IV, the Founder, established the Alma Mater Rudolphina following the model of the University of Paris." },
      { yearOrEra: "1750", event: "Empress Maria Theresa's Reforms", description: "Transformed the university into a modern state medical and scientific research institution under Gerard van Swieten." },
      { yearOrEra: "1884", event: "Ringstraße Palace Inauguration", description: "Emperor Franz Joseph opened Heinrich von Ferstel's monumental Italian Renaissance palace." },
      { yearOrEra: "Present", event: "Nobel Laureate Powerhouse", description: "Graduated or housed 16 Nobel Prize winners, including Erwin Schrödinger and Karl Landsteiner." }
    ],
    architecturalSecrets: [
      "The Arkadenhof contains 154 monuments and busts, making it one of the largest academic open-air pantheons in Europe.",
      "The university library holds over 7.6 million volumes, making it the largest academic library in Austria.",
      "The monumental ceremonial staircase features marble frescoes celebrating the light of human knowledge triumphing over darkness."
    ],
    culturalSignificance: "Vienna was the cradle of modern medicine, psychoanalysis, Austrian economics, and quantum physics, educating Freud, Schrödinger, Hayek, Popper, and Mahler.",
    visitorTips: [
      "Walk freely through the tranquil Arkadenhof courtyard to explore the busts of Erwin Schrödinger, Christian Doppler, and Sigmund Freud.",
      "Visit the ceremonial Grand Reading Room in the main library with its classic green banker lamps and high glass skylights.",
      "Take tram 1 or D along the Ringstraße to admire Ferstel's grand facade."
    ],
    narrationScript: "You stand before the University of Vienna, situated on the iconic Ringstraße boulevard. Founded in 1365 by Duke Rudolph the Fourth, this is the oldest university in the German-speaking world. Designed by Heinrich von Ferstel in the Italian Renaissance style, its palatial building centers around the Arkadenhof—a tranquil arcaded courtyard adorned with busts of one hundred and fifty-four world-changing thinkers. Here, Sigmund Freud pioneered psychoanalysis, Christian Doppler unlocked the Doppler effect, and Erwin Schrödinger advanced quantum mechanics.",
    chapters: [
      { id: "ch-1", title: "Rudolph's 1365 Imperial Charter", timestampHint: "0:00", script: "Founded in 1365, Vienna is the oldest continuous university in the German-speaking world.", focusPointId: "pt-3" },
      { id: "ch-2", title: "The Arkadenhof Pantheon", timestampHint: "0:30", script: "One hundred and fifty-four stone and bronze memorials commemorate the giants of Viennese thought.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Cradle of Psychoanalysis & Quantum Physics", timestampHint: "1:00", script: "From Freud's psychoanalysis to Schrödinger's wave mechanics, Vienna revolutionized human understanding.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Vienna",
      foundationYear: 1365,
      tradition: "Austrian Enlightenment & Vienna School of Medicine",
      notableAlumni: ["Sigmund Freud", "Erwin Schrödinger", "Christian Doppler", "Friedrich Hayek", "Karl Popper"]
    }
  },

  "heidelberg university": {
    name: "Heidelberg University (Old University & Historic Karzer)",
    localName: "Ruprecht-Karls-Universität Heidelberg (Alte Universität)",
    city: "Heidelberg",
    country: "Germany",
    architecturalStyle: "German Baroque & Renaissance Academic Architecture",
    periodEra: "Founded 1386 by Elector Palatine Rupert I / Alte Universität 1712",
    confidence: 99,
    summary: "Germany's oldest university, founded in 1386. Set on the Neckar river beneath the castle ruins, its Old University (Alte Universität) houses the grand neo-Renaissance Great Hall and the famous historic Student Prison (Karzer).",
    coordinatesEstimate: { lat: 49.4116, lng: 8.7065 },
    arKeypoints: [
      { id: "pt-1", label: "Alte Universität Baroque Facade", featureType: "facade", description: "18th-century sand-colored Baroque facade fronting the historic Universitätsplatz.", x: 50, y: 35 },
      { id: "pt-2", label: "Historic Student Prison (Karzer)", featureType: "interior", description: "Graffiti-covered walls where 19th-century students imprisoned for dueling left colorful painted coats of arms.", x: 75, y: 60 },
      { id: "pt-3", label: "Neo-Renaissance Great Hall (Alte Aula)", featureType: "interior", description: "Sumptuous wooden-paneled ceremonial hall designed by Josef Durm for the 500th university anniversary.", x: 50, y: 70 },
      { id: "pt-4", label: "Lion Fountain (Löwenbrunnen)", featureType: "facade", description: "Historic stone fountain topped with the golden Palatine lion on Universitätsplatz.", x: 25, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1386", event: "Foundation by Rupert I", description: "Elector Palatine Rupert I obtained a papal bull from Pope Urban VI to found Germany's first university." },
      { yearOrEra: "1803", event: "Baden Restoration by Karl Friedrich", description: "Grand Duke Karl Friedrich of Baden reorganized the university into a premier state research institution." },
      { yearOrEra: "19th Century", event: "Golden Age of Romanticism & Chemistry", description: "Robert Bunsen invented the Bunsen burner, Kirchhoff pioneered spectroscopy, and Max Weber developed modern sociology." },
      { yearOrEra: "Present", event: "Excellence University", description: "Consistently ranked as Germany's top university, associated with 56 Nobel Prize laureates." }
    ],
    architecturalSecrets: [
      "The Student Prison (Karzer) held students for minor offenses between 1778 and 1914; being jailed here became an elite rite of passage where inmates covered ceilings with fraternity crests.",
      "The University Library (Universitätsbibliothek) holds the famous Codex Manesse (c. 1304), the most illuminated medieval German manuscript of Minnesang poetry.",
      "The Philosophers' Walk (Philosophenweg) across the Neckar river was the daily scenic walking route of Heidelberg scholars contemplating nature."
    ],
    culturalSignificance: "Heidelberg is the cradle of German Romanticism and modern empirical sciences, educating Hegel, Weber, Habermas, Bunsen, and Schumann.",
    visitorTips: [
      "Purchase a combined ticket to visit the Alte Aula (Great Hall) and the humorous, graffiti-covered rooms of the Student Prison.",
      "Cross the Old Bridge (Alte Brücke) and hike up the Philosophers' Walk for the iconic panorama of the university and castle.",
      "Browse the illuminated manuscript exhibitions inside the University Library."
    ],
    narrationScript: "You are standing on Universitätsplatz in Heidelberg, before Germany's oldest university, founded in 1386 by Rupert the First. Nestled beneath the red-sandstone ruins of Heidelberg Castle and the gentle waters of the Neckar, this university ignited the German Romantic movement. Inside the Alte Universität lies the breathtaking wooden-paneled Alte Aula, and nearby, the famous Student Prison where fraternity brothers painted humorous silhouettes and crests on the walls. Here, Robert Bunsen invented the Bunsen burner, Max Weber forged modern sociology, and philosophers walked along the Neckar hills in deep contemplation.",
    chapters: [
      { id: "ch-1", title: "Rupert's 1386 Charter", timestampHint: "0:00", script: "Rupert I established Germany's very first university, launching centuries of German scholarship.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Legendary Student Prison", timestampHint: "0:30", script: "The historic Karzer preserves over a century of bohemian student graffiti and fraternity pride.", focusPointId: "pt-2" },
      { id: "ch-3", title: "The Alte Aula & Bunsen's Legacy", timestampHint: "1:00", script: "Josef Durm's ceremonial hall celebrates the birthplace of spectral analysis and the Bunsen burner.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Heidelberg University",
      foundationYear: 1386,
      tradition: "German Humanism, Romanticism, & Empirical Science",
      notableAlumni: ["Max Weber", "Robert Bunsen", "G.W.F. Hegel", "Jürgen Habermas", "Hannah Arendt"]
    }
  },

  "trinity college dublin": {
    name: "Trinity College Dublin – The Old Library & Long Room",
    localName: "Coláiste na Tríonóide, Baile Átha Cliath",
    city: "Dublin",
    country: "Ireland",
    architecturalStyle: "Irish Georgian & Neoclassical Collegiate Architecture",
    periodEra: "Founded 1592 by Queen Elizabeth I / Long Room 1732",
    confidence: 99,
    summary: "Ireland's oldest university, founded in 1592. The magnificent 65-meter Long Room of the Old Library features a barreled ceiling lined with 200,000 antiquarian books, marble busts of philosophers, and the 9th-century illuminated Book of Kells.",
    coordinatesEstimate: { lat: 53.3438, lng: -6.2546 },
    arKeypoints: [
      { id: "pt-1", label: "The 65-meter Long Room Barrel Vault", featureType: "interior", description: "Breathtaking double-height oak-paneled barreled ceiling lined with 200,000 leather-bound antiquarian volumes.", x: 50, y: 30 },
      { id: "pt-2", label: "The Book of Kells Exhibition Pavilion", featureType: "entrance", description: "Safeguards the masterwork 9th-century insular illuminated gospel manuscript crafted by Celtic monks.", x: 50, y: 70 },
      { id: "pt-3", label: "Trinity College Campanile Tower", featureType: "spire", description: "Victorian granite bell tower rising 30 meters in the center of Parliament Square.", x: 25, y: 40 },
      { id: "pt-4", label: "Brian Boru Medieval Harp", featureType: "relief", description: "Ancient 14th-century oak and willow harp that served as the national emblem of Ireland.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1592", event: "Royal Charter of Elizabeth I", description: "Queen Elizabeth I founded the College of the Holy and Undivided Trinity on the grounds of an All Hallows monastery." },
      { yearOrEra: "1661", event: "Bishop Ussher Bequeaths Book of Kells", description: "The masterwork 9th-century Celtic illuminated manuscript was presented to the college for safekeeping." },
      { yearOrEra: "1732", event: "Thomas Burgh Completes Old Library", description: "Architect Thomas Burgh completed the monumental Old Library; its roof was raised to a barrel vault in 1860." },
      { yearOrEra: "Present", event: "Ireland's Premier University", description: "Graduated giants of literature including Oscar Wilde, Samuel Beckett, Bram Stoker, and Jonathan Swift." }
    ],
    architecturalSecrets: [
      "The Long Room contains fourteen marble busts by sculptor Louis-François Roubiliac honoring great thinkers, with Jonathan Swift considered the most lifelike.",
      "Tradition states that any Trinity student who walks beneath the Campanile bell tower while the bell is tolling will fail their exams.",
      "The medieval 'Brian Boru Harp' displayed in the Long Room is the exact physical model used for Ireland's coat of arms and the Guinness logo."
    ],
    culturalSignificance: "Trinity College Dublin is the mother institution of Irish literature and constitutional thought, educating Oscar Wilde, Samuel Beckett, Edmund Burke, Bram Stoker, and Douglas Hyde.",
    visitorTips: [
      "Pre-book timed-entry tickets well in advance to view the Book of Kells and the Long Room.",
      "Walk through Front Gate onto Parliament Square to admire the symmetry of the Examination Hall and Chapel.",
      "Stroll across College Green to inspect the historic Old Parliament House opposite the college gates."
    ],
    narrationScript: "You stand within Parliament Square at Trinity College Dublin, founded in 1592 by Queen Elizabeth the First. Step inside the Old Library and gaze down the sixty-five-meter expanse of the Long Room, one of the most magnificent reading rooms in the world. Beneath its soaring oak barrel-vaulted ceiling rest two hundred thousand ancient volumes, flanked by marble busts of great thinkers. In the Treasury below lies Ireland's greatest cultural treasure: the Book of Kells, an illuminated Celtic gospel manuscript painted twelve hundred years ago with dazzling gold leaf and intricate knotwork.",
    chapters: [
      { id: "ch-1", title: "Elizabethan Foundation in 1592", timestampHint: "0:00", script: "Founded in 1592, Trinity College is Ireland's oldest and most storied seat of learning.", focusPointId: "pt-3" },
      { id: "ch-2", title: "The Majestic Long Room", timestampHint: "0:30", script: "Thomas Burgh's sixty-five-meter library holds two hundred thousand antiquarian volumes beneath oak vaults.", focusPointId: "pt-1" },
      { id: "ch-3", title: "The Book of Kells & Brian Boru Harp", timestampHint: "1:00", script: "Home to the 9th-century Book of Kells and Ireland's national medieval harp.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Trinity College Dublin",
      foundationYear: 1592,
      tradition: "Irish Enlightenment, Celtic Heritage, & Literature",
      notableAlumni: ["Oscar Wilde", "Samuel Beckett", "Jonathan Swift", "Bram Stoker", "Edmund Burke"]
    }
  },

  "college of william & mary": {
    name: "The College of William & Mary – Sir Christopher Wren Building",
    localName: "The College of William and Mary (Wren Building)",
    city: "Williamsburg, Virginia",
    country: "United States",
    architecturalStyle: "English Restoration & Early Colonial Baroque Architecture",
    periodEra: "Founded 1693 by King William III & Queen Mary II / Building 1695",
    confidence: 99,
    summary: "The second-oldest college in the United States, chartered in 1693. Its Sir Christopher Wren Building is the oldest university building still in continuous educational use in America, having educated Thomas Jefferson and James Monroe.",
    coordinatesEstimate: { lat: 37.2707, lng: -76.7118 },
    arKeypoints: [
      { id: "pt-1", label: "Wren Building Cupola & Weathervane", featureType: "spire", description: "Historic wooden octagonal cupola and brass weathervane crowning the colonial brick roofline.", x: 50, y: 15 },
      { id: "pt-2", label: "Flemish Bond Red-Brick Facade", featureType: "facade", description: "Handcrafted 17th-century glazed header bricks arranged in traditional Flemish bond masonry.", x: 50, y: 55 },
      { id: "pt-3", label: "Wren Chapel & Historic 18th-century Organ", featureType: "interior", description: "Colonial English chapel housing an authentic 1760 English chamber pipe organ.", x: 25, y: 70 },
      { id: "pt-4", label: "Sunken Garden Collegiate Vista", featureType: "facade", description: "Long tree-lined grass mall modeled after Chelsea Hospital grounds in London.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1693", event: "Royal Charter of William & Mary", description: "King William III and Queen Mary II issued a royal charter under the Great Seal of England." },
      { yearOrEra: "1695", event: "Sir Christopher Wren Design", description: "Construction began on the main building, attributed to royal surveyor Sir Christopher Wren." },
      { yearOrEra: "1776", event: "Phi Beta Kappa Foundation", description: "Students established Phi Beta Kappa, America's first academic Greek-letter honor society, in the Wren Building." },
      { yearOrEra: "Present", event: "Alma Mater of the Nation", description: "Educated three U.S. Presidents: Thomas Jefferson, James Monroe, and John Tyler." }
    ],
    architecturalSecrets: [
      "The Wren Building has survived three major fires (1705, 1859, and 1862 during the Civil War); each time, its massive three-foot-thick 17th-century brick outer walls survived intact.",
      "Underneath the chapel floor lies the crypt holding prominent colonial figures, including royal Governor Lord Botetourt.",
      "Graduating seniors walk through the Wren Building on their final day to ring the historic bell in the cupola."
    ],
    culturalSignificance: "William & Mary is the birthplace of American higher education institutions: it founded America's first law school (1779), first honor code, and first collegiate Greek-letter society.",
    visitorTips: [
      "Enter the Wren Building during student docent hours to tour the Great Hall and historic classroom with colonial wooden desks.",
      "Walk out back to view the long green vista of the Sunken Garden framed by red-brick Georgian halls.",
      "Take the footbridge into Colonial Williamsburg directly adjacent to campus."
    ],
    narrationScript: "You stand before the Sir Christopher Wren Building at the College of William & Mary in Virginia. Chartered in 1693 by King William the Third and Queen Mary the Second, this is the second-oldest university in America. The Wren Building, begun in 1695 and attributed to London's master architect Sir Christopher Wren, is the oldest college building in continuous use in the United States. Within these brick walls, Thomas Jefferson studied law, and students founded Phi Beta Kappa. Notice the handcrafted Flemish bond brickwork and the colonial cupola that has chimed across four centuries of American history.",
    chapters: [
      { id: "ch-1", title: "Charter of 1693", timestampHint: "0:00", script: "William and Mary chartered this college to educate the leaders of the young Virginia colony.", focusPointId: "pt-2" },
      { id: "ch-2", title: "The Wren Building & Colonial Cupola", timestampHint: "0:30", script: "America's oldest academic building has survived three fires, preserving its three-foot-thick masonry.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Jefferson's Academic Crucible", timestampHint: "1:00", script: "Here, Thomas Jefferson mastered the Enlightenment principles that shaped the Declaration of Independence.", focusPointId: "pt-3" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "The College of William & Mary",
      foundationYear: 1693,
      tradition: "American Colonial & Early Republic Enlightenment",
      notableAlumni: ["Thomas Jefferson", "James Monroe", "John Tyler", "John Marshall", "George Washington (Chancellor)"]
    }
  },

  "yale university": {
    name: "Yale University (Sterling Memorial Library & Harkness Tower)",
    localName: "Yale University",
    city: "New Haven, Connecticut",
    country: "United States",
    architecturalStyle: "Collegiate Gothic & Cathedral Library Architecture",
    periodEra: "Founded 1701 / Harkness Tower 1921",
    confidence: 99,
    summary: "Founded in 1701 as the Collegiate School, Yale is celebrated for its dramatic Collegiate Gothic courtyards. Sterling Memorial Library was built as a cathedral for books, while Harkness Tower chimes its 54-bell carillon over Old Campus.",
    coordinatesEstimate: { lat: 41.3163, lng: -72.9223 },
    arKeypoints: [
      { id: "pt-1", label: "Harkness Tower Freestone Crown", featureType: "spire", description: "James Gamble Rogers's 66-meter Gothic tower, inspired by Boston Stump in Lincolnshire, housing a 54-bell carillon.", x: 25, y: 15 },
      { id: "pt-2", label: "Sterling Library Cathedral Nave", featureType: "entrance", description: "Monumental stone library entrance designed as a medieval Gothic cathedral with 3,300 stained glass panes.", x: 50, y: 55 },
      { id: "pt-3", label: "Beinecke Rare Book Cube", featureType: "facade", description: "Gordon Bunshaft's translucent Vermont marble monolith glowing amber to protect Gutenberg Bibles.", x: 75, y: 65 },
      { id: "pt-4", label: "Old Campus Memorial Gate", featureType: "arch", description: "Historic gateway framing Connecticut Hall (1752), Yale's oldest surviving Georgian brick hall.", x: 50, y: 88 }
    ],
    historicalTimeline: [
      { yearOrEra: "1701", event: "Collegiate School Chartered", description: "Ten Congregational ministers met in Branford, Connecticut, donating their books to found the college." },
      { yearOrEra: "1718", event: "Gift of Elihu Yale", description: "Welsh merchant Elihu Yale donated nine bales of goods, 417 books, and a portrait of King George I, naming the university." },
      { yearOrEra: "1921", event: "Harkness Memorial Quadrangle", description: "James Gamble Rogers perfected the Collegiate Gothic style with Harkness Tower." },
      { yearOrEra: "Present", event: "Global Research Institution", description: "Educated 5 U.S. Presidents, 65 Nobel laureates, and thousands of world leaders." }
    ],
    architecturalSecrets: [
      "Architect James Gamble Rogers intentionally splashed acid on the stones, rusted iron gates, and chipped stonework so the 1920s buildings would appear centuries older.",
      "The Beinecke Library has no windows; instead, its walls are made of one-and-a-quarter-inch thick translucent Vermont marble that transmits soft amber light without damaging UV rays.",
      "Connecticut Hall on Old Campus housed revolutionary patriot Nathan Hale, whose bronze statue stands in front."
    ],
    culturalSignificance: "Yale has shaped global law, diplomacy, drama, and research, serving as the crucible for the American judicial bench, world literature, and national leadership.",
    visitorTips: [
      "Step into the nave of Sterling Memorial Library to view the magnificent cathedral-style circulation desk and stone carvings.",
      "Walk around the corner to the Beinecke Rare Book Library to view one of the world's surviving original Gutenberg Bibles.",
      "Listen for the student-played Yale Carillon chiming melodies from Harkness Tower in late afternoon."
    ],
    narrationScript: "You stand in the heart of Yale University in New Haven, Connecticut. Established in 1701, Yale is renowned for having built one of the world's greatest Collegiate Gothic ensembles. Look up at Harkness Tower, soaring sixty-six meters above the memorial quadrangles with its singing carillon of fifty-four bronze bells. Across the lawn stands Sterling Memorial Library, intentionally engineered like a medieval stone cathedral—where the altar is the circulation desk, and the sacraments are millions of books. Down the street, the Beinecke Library glows with translucent marble walls shielding Gutenberg's original movable-type Bibles.",
    chapters: [
      { id: "ch-1", title: "Chartered in 1701", timestampHint: "0:00", script: "Founded by ministers donating books, Yale grew into a preeminent global seat of research.", focusPointId: "pt-4" },
      { id: "ch-2", title: "Harkness Tower & The Carillon", timestampHint: "0:30", script: "James Gamble Rogers's freestone tower rings out across the historic Old Campus.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Sterling Cathedral & Beinecke Marble", timestampHint: "1:00", script: "A cathedral built for books, complemented by Beinecke's glowing translucent marble walls.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Yale University",
      foundationYear: 1701,
      tradition: "American Collegiate Gothic & Ivy League Research",
      notableAlumni: ["Nathan Hale", "William Howard Taft", "George H.W. Bush", "Bill Clinton", "Meryl Streep"]
    }
  },

  "princeton university": {
    name: "Princeton University – Nassau Hall",
    localName: "Princeton University (Nassau Hall)",
    city: "Princeton, New Jersey",
    country: "United States",
    architecturalStyle: "Early American Georgian Sandstone & Collegiate Gothic Architecture",
    periodEra: "Founded 1746 / Nassau Hall 1756",
    confidence: 99,
    summary: "Founded in 1746 as the College of New Jersey, Princeton centers around Nassau Hall—the stone building that briefly served as the United States Capitol in 1783. Surrounding it are ivy-draped Collegiate Gothic quads and the iconic University Chapel.",
    coordinatesEstimate: { lat: 40.3487, lng: -74.6593 },
    arKeypoints: [
      { id: "pt-1", label: "Nassau Hall Cupola & Weather Vane", featureType: "spire", description: "Historic white wooden belfry cupola crowning local brownstone walls built in 1756.", x: 50, y: 15 },
      { id: "pt-2", label: "FitzRandolph Gate", featureType: "entrance", description: "Wrought-iron eagle-topped gates on Nassau Street, through which students walk only upon graduation.", x: 50, y: 88 },
      { id: "pt-3", label: "Memorial Faculty Room (Former US Capitol)", featureType: "interior", description: "The historic chamber where the Continental Congress received word of the Treaty of Paris ending the Revolutionary War.", x: 50, y: 55 },
      { id: "pt-4", label: "Princeton University Chapel Stained Glass", featureType: "facade", description: "Cram and Ferguson's soaring Gothic chapel, the third largest collegiate chapel in the world.", x: 80, y: 35 }
    ],
    historicalTimeline: [
      { yearOrEra: "1746", event: "College of New Jersey Chartered", description: "Founded in Elizabeth and Newark before moving to Princeton in 1756 upon completion of Nassau Hall." },
      { yearOrEra: "1777", event: "Battle of Princeton", description: "General George Washington fired cannons directly at Nassau Hall, forcing British troops garrisoned inside to surrender." },
      { yearOrEra: "1783", event: "Temporary Capital of the United States", description: "The Continental Congress met in Nassau Hall for four months, making Princeton the national capital." },
      { yearOrEra: "Present", event: "Leading Global Research University", description: "Educated two U.S. Presidents (Madison and Wilson) and associated with 70 Nobel laureates." }
    ],
    architecturalSecrets: [
      "During the Battle of Princeton in 1777, an American cannonball flew through the prayer hall window and cleanly decapitated the portrait of King George II.",
      "Tradition dictates that students must never walk out through the center of FitzRandolph Gate until they graduate, or else they will fail to complete their degree.",
      "Nassau Hall was named in honor of King William III of England, Prince of Orange-Nassau, who granted rights to religious dissenters."
    ],
    culturalSignificance: "Princeton played a decisive role in the American Revolution, constitution writing (James Madison), and 20th-century theoretical physics (Albert Einstein's Institute for Advanced Study partnership).",
    visitorTips: [
      "Walk through FitzRandolph Gate onto the front lawn of Nassau Hall to inspect the twin bronze tigers guarding the steps.",
      "Step inside the Princeton University Chapel to admire its four great stained glass narrative windows.",
      "Explore the Collegiate Gothic arches of Blair Hall and Holder Hall."
    ],
    narrationScript: "You are standing before Nassau Hall at Princeton University in New Jersey. Built in 1756, Nassau Hall was once the largest stone building in the American colonies. During the Revolutionary War, British and Continental soldiers fought fiercely across this very lawn; inside, a cannonball struck King George's portrait during Washington's victory in the Battle of Princeton. In 1783, Nassau Hall served as the official Capitol of the United States, hosting the Continental Congress as they celebrated the Treaty of Paris. Today, shaded by stately oaks, it anchors one of the world's most renowned research universities.",
    chapters: [
      { id: "ch-1", title: "Colonial Rock of 1756", timestampHint: "0:00", script: "Built in 1756, Nassau Hall was the largest academic structure in colonial North America.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Battle of Princeton & US Capitol", timestampHint: "0:30", script: "Cannonball scars and Congressional debates in 1783 cemented its place in national memory.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Collegiate Gothic Splendor", timestampHint: "1:00", script: "Holder Hall and the University Chapel expand Princeton's timeless architectural landscape.", focusPointId: "pt-4" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Princeton University",
      foundationYear: 1746,
      tradition: "American Enlightenment & Woodrow Wilson International Affairs",
      notableAlumni: ["James Madison", "Woodrow Wilson", "F. Scott Fitzgerald", "Alan Turing (PhD)", "Michelle Obama"]
    }
  },

  "columbia university": {
    name: "Columbia University – Low Memorial Library",
    localName: "Columbia University in the City of New York (Low Library)",
    city: "New York City",
    country: "United States",
    architecturalStyle: "Beaux-Arts & Neoclassical Roman Pantheon Architecture",
    periodEra: "Founded 1754 as King's College / Low Library 1895",
    confidence: 99,
    summary: "Founded in 1754 as King's College by royal charter of King George II. Its Morningside Heights campus, planned by McKim, Mead & White, centers on the monumental Roman Classical dome of Low Memorial Library and the iconic statue of Alma Mater.",
    coordinatesEstimate: { lat: 40.8075, lng: -73.9626 },
    arKeypoints: [
      { id: "pt-1", label: "Low Library Classical Granite Dome", featureType: "dome", description: "McKim, Mead & White's Roman Pantheon-inspired dome with ten fluted Ionic columns and grand steps.", x: 50, y: 25 },
      { id: "pt-2", label: "Daniel Chester French's Alma Mater", featureType: "statue", description: "Bronze seated sculpture holding an open book and scepter with an owl hidden in her drapery.", x: 50, y: 70 },
      { id: "pt-3", label: "The Low Library Steps", featureType: "facade", description: "Iconic granite gathering steps overlooking South Field and Butler Library.", x: 50, y: 88 },
      { id: "pt-4", label: "Butler Library Inscribed Frieze", featureType: "facade", description: "Inscribed with the names of history's greatest philosophers: Homer, Herodotus, Plato, Aristotle, and Dante.", x: 80, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1754", event: "Royal Charter of King's College", description: "King George II granted a royal charter establishing King's College in lower Manhattan near Trinity Church." },
      { yearOrEra: "1784", event: "Rechristened Columbia College", description: "Following the Revolution, the New York Legislature reopened the institution under the patriotic name Columbia." },
      { yearOrEra: "1897", event: "Morningside Heights Campus Opens", description: "Seth Low led the move to the grand Beaux-Arts urban acropolis designed by McKim, Mead & White." },
      { yearOrEra: "Present", event: "Nobel & Pulitzer Powerhouse", description: "Administers the annual Pulitzer Prizes; associated with 103 Nobel laureates and 4 U.S. Presidents." }
    ],
    architecturalSecrets: [
      "Daniel Chester French hid a small owl inside the folds of Alma Mater's cloak; college lore says the first freshman to find it will graduate as valedictorian.",
      "The massive rotunda beneath Low Library's dome was built without internal steel columns, relying on traditional self-supporting masonry arches.",
      "Columbia's Pupin Hall was the site of the Manhattan Project's initial uranium atom-splitting experiments in 1939."
    ],
    culturalSignificance: "Columbia was the intellectual cradle of the American founding fathers (Alexander Hamilton, John Jay) and modern Harlem Renaissance literature, Beat poetry, and broadcast journalism.",
    visitorTips: [
      "Sit on the Low Steps to experience the dynamic rhythm of Columbia students gathered against the skyline of Morningside Heights.",
      "Search for the hidden owl in Alma Mater's gown on the Low Library terrace.",
      "Walk across to Butler Library to view the monumental carved frieze celebrating the Western canon."
    ],
    narrationScript: "You are on the central plaza of Columbia University in New York City. Founded in 1754 as King's College by royal charter of King George the Second, Columbia is the oldest university in New York State. In 1897, legendary architects McKim, Mead & White laid out this Morningside Heights campus as a classical urban acropolis. Before you stands Low Memorial Library, modeled after the Roman Pantheon with ten fluted Ionic columns. On its steps sits Daniel Chester French's bronze statue of Alma Mater, an owl hidden in her drapery symbolizing wisdom. Within these halls, Alexander Hamilton studied statecraft and Enrico Fermi split the atom.",
    chapters: [
      { id: "ch-1", title: "King's College of 1754", timestampHint: "0:00", script: "From a single schoolhouse near Trinity Church, Columbia grew into an empire of scholarship.", focusPointId: "pt-1" },
      { id: "ch-2", title: "McKim's Neoclassical Acropolis", timestampHint: "0:30", script: "Low Library's Pantheon dome and granite steps define the Morningside Heights urban campus.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Alma Mater & The Hidden Owl", timestampHint: "1:00", script: "Daniel Chester French's bronze statue guards the collegiate steps with timeless dignity.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Columbia University",
      foundationYear: 1754,
      tradition: "New York Beaux-Arts Enlightenment & Core Curriculum",
      notableAlumni: ["Alexander Hamilton", "John Jay", "Barack Obama", "Franklin D. Roosevelt", "Warren Buffett"]
    }
  },

  "university of virginia": {
    name: "University of Virginia – The Academical Village & Rotunda",
    localName: "University of Virginia (The Rotunda)",
    city: "Charlottesville, Virginia",
    country: "United States",
    architecturalStyle: "Jeffersonian Palladian Neoclassical Architecture",
    periodEra: "Founded 1819 by Thomas Jefferson / Rotunda 1826",
    confidence: 99,
    summary: "The only American university designed by a founding father to be inscribed as a UNESCO World Heritage Site. Conceived by Thomas Jefferson as an 'Academical Village', its half-scale replica of the Roman Pantheon—the Rotunda—anchors the terraced Lawn flanked by pavilion classrooms.",
    coordinatesEstimate: { lat: 38.0356, lng: -78.5034 },
    arKeypoints: [
      { id: "pt-1", label: "The Rotunda Corinthian Portico", featureType: "dome", description: "Jefferson's half-scale homage to the Roman Pantheon with a domed drum and fluted marble Corinthian columns.", x: 50, y: 25 },
      { id: "pt-2", label: "The Terraced Lawn", featureType: "facade", description: "The central grass mall sloping down from the Rotunda, where students and faculty live in shared democratic community.", x: 50, y: 70 },
      { id: "pt-3", label: "Ten Academical Pavilions", featureType: "column", description: "Ten unique neoclassical pavilions illustrating distinct classical orders (Doric, Ionic, Corinthian) to teach architecture.", x: 25, y: 60 },
      { id: "pt-4", label: "Edgar Allan Poe's Student Room", featureType: "entrance", description: "Preserved 1826 dorm room on West Range where Edgar Allan Poe studied ancient languages.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1819", event: "Charter by Virginia Assembly", description: "Thomas Jefferson founded UVA, designed its campus, created its curriculum, and selected its first faculty." },
      { yearOrEra: "1826", event: "Completion of the Rotunda", description: "The Rotunda was finished shortly after Jefferson's death on July 4, 1826, serving as the library rather than a chapel." },
      { yearOrEra: "1895", event: "Rotunda Fire & Stanford White Rebuild", description: "A devastating fire gutted the Rotunda; Stanford White rebuilt it, restored to Jefferson's original plans in 1976." },
      { yearOrEra: "1987", event: "UNESCO World Heritage Inscription", description: "Inscribed jointly with Monticello as a masterpiece of neoclassical architecture and democratic ideals." }
    ],
    architecturalSecrets: [
      "Jefferson placed the library (the Rotunda) at the focal point of the university instead of a church or chapel, symbolizing that reason and books—not religious dogma—form the center of higher learning.",
      "The ten Pavilions along the Lawn are all architecturally different: Jefferson used them as life-sized architectural models to instruct students on classical Roman and Palladian orders.",
      "The famous Serpentine brick walls in the gardens behind the pavilions are only one brick thick; the sinusoidal curves give the walls structural stability using fewer bricks."
    ],
    culturalSignificance: "UVA embodies the American Enlightenment's democratic vision of higher education, combining living quarters and classrooms into a unified intellectual village.",
    visitorTips: [
      "Walk through the Dome Room inside the Rotunda to view the skylight oculus and Alexander Galt's marble statue of Jefferson.",
      "Stroll the length of the Lawn to inspect the unique facades of the ten Pavilions and their hidden walled gardens.",
      "Peek into Room 13 on the West Range to see Edgar Allan Poe's preserved student quarters."
    ],
    narrationScript: "You stand on the terraced Lawn of the University of Virginia, in Charlottesville. Founded in 1819 and designed by Thomas Jefferson, this is the only university campus in the United States inscribed as a UNESCO World Heritage Site. Breaking with centuries of tradition, Jefferson designed an 'Academical Village' where professors and students lived together in shared pavilions. At its head stands the Rotunda, a half-scale replica of the Roman Pantheon. By placing a library at the center of the university rather than a chapel, Jefferson declared that human reason, free inquiry, and books must be the guiding star of a free society.",
    chapters: [
      { id: "ch-1", title: "Jefferson's Academical Village", timestampHint: "0:00", script: "In 1819, Thomas Jefferson conceived an architectural embodiment of democratic education.", focusPointId: "pt-2" },
      { id: "ch-2", title: "The Rotunda & Roman Pantheon", timestampHint: "0:30", script: "A half-scale Pantheon dedicated to knowledge, crowning the terraced grass Lawn.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Serpentine Walls & Pavilions", timestampHint: "1:00", script: "Ten neoclassical pavilions and undulating serpentine brick walls showcase Jefferson's design genius.", focusPointId: "pt-3" }
    ],
    unescoYear: 1987,
    unescoId: 442,
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Virginia",
      foundationYear: 1819,
      tradition: "American Democratic Enlightenment & Palladian Neoclassicism",
      notableAlumni: ["Edgar Allan Poe", "Woodrow Wilson (Law)", "Robert F. Kennedy", "Walter Reed", "Georgia O'Keeffe (studied)"]
    }
  },

  "unam central campus": {
    name: "National Autonomous University of Mexico (UNAM) – Central Campus",
    localName: "Universidad Nacional Autónoma de México (Ciudad Universitaria)",
    city: "Mexico City",
    country: "Mexico",
    architecturalStyle: "20th-Century Mexican Modernism & Pre-Hispanic Syncretism",
    periodEra: "Founded 1551 as Royal University / Campus Built 1949–1952",
    confidence: 99,
    summary: "One of the largest and most architecturally monumental universities in the Americas, inscribed as a UNESCO World Heritage Site. Its Central Campus features Juan O'Gorman's iconic four-sided stone mosaic mural wrapping the Central Library and David Alfaro Siqueiros's sculpted murals on the Rectorate.",
    coordinatesEstimate: { lat: 19.3328, lng: -99.1872 },
    arKeypoints: [
      { id: "pt-1", label: "Juan O'Gorman Central Library Mosaics", featureType: "facade", description: "Four monumental exterior walls covered in millions of naturally colored Mexican stones depicting the nation's historical identity.", x: 50, y: 35 },
      { id: "pt-2", label: "Rectorate Tower Siqueiros Mural", featureType: "relief", description: "David Alfaro Siqueiros's dynamic 'sculpturural' mural 'The People to the University, the University to the People'.", x: 25, y: 40 },
      { id: "pt-3", label: "Olympic Stadium Volcanic Stone Relief", featureType: "facade", description: "Massive crater-like stadium built on volcanic rock, fronted by Diego Rivera's colored stone relief.", x: 75, y: 65 },
      { id: "pt-4", label: "Central Esplanade (Las Islas)", featureType: "facade", description: "Vast green lawn and volcanic basalt terraces unifying the campus in pre-Hispanic spatial harmony.", x: 50, y: 85 }
    ],
    historicalTimeline: [
      { yearOrEra: "1551", event: "Royal and Pontifical University Founded", description: "Founded by royal decree of King Charles I of Spain, making it one of the earliest universities in the Americas." },
      { yearOrEra: "1910", event: "Justo Sierra Refounds National University", description: "Reconstituted on the eve of the Mexican Revolution as the modern national university." },
      { yearOrEra: "1952", event: "Ciudad Universitaria Masterpiece Opens", description: "Architects Mario Pani and Enrique del Moral orchestrated 60 architects and artists to build the modernist campus." },
      { yearOrEra: "2007", event: "UNESCO World Heritage Inscription", description: "Inscribed for integrating 20th-century modernism with pre-Hispanic Aztec and Mayan spatial traditions." }
    ],
    architecturalSecrets: [
      "Juan O'Gorman traveled across Mexico for months to find naturally colored mineral stones: the four thousand square meters of mosaics contain no synthetic paints whatsoever.",
      "The campus was built upon the Pedregal de San Ángel, an ancient volcanic lava field created by the eruption of the Xitle volcano around 400 CE.",
      "Diego Rivera designed the monumental high-relief mural on the Olympic Stadium using colored stones set into the volcanic rock embankment."
    ],
    culturalSignificance: "UNAM is Mexico's cultural and political crucible, having educated every Mexican Nobel laureate (Octavio Paz, Alfonso García Robles, Mario Molina) and served as the epicenter of Latin American democratic and artistic movements.",
    visitorTips: [
      "Stand on the central lawn ('Las Islas') to take in the 360-degree vista of the Library, Rectorate, and surrounding mountains.",
      "Inspect each of the four facades of the Central Library: they depict Pre-Hispanic, Colonial, Contemporary, and Modern University cosmologies.",
      "Visit the nearby University Museum of Contemporary Art (MUAC) and the Sculpture Space (Espacio Escultórico)."
    ],
    narrationScript: "You are looking upon the Central University City of the National Autonomous University of Mexico, in Mexico City. While UNAM's origins date back to 1551, this monumental campus was built between 1949 and 1952 as a triumphant synthesis of twentieth-century modernism and pre-Hispanic Mexican heritage. Rising before you is the iconic Central Library, wrapped on all four sides by Juan O'Gorman's breathtaking four-thousand-square-meter mosaic made entirely of naturally colored stones gathered across Mexico. It depicts the Aztec cosmos, the Spanish conquest, and Mexico's modern scientific future.",
    chapters: [
      { id: "ch-1", title: "Heritage of 1551 on Volcanic Lava", timestampHint: "0:00", script: "Built atop ancient lava beds, UNAM embodies five centuries of Mexican intellectual resilience.", focusPointId: "pt-4" },
      { id: "ch-2", title: "O'Gorman's Stone Mosaic Masterpiece", timestampHint: "0:30", script: "Four exterior walls tell the story of Mexico through millions of naturally pigmented stones.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Siqueiros & Rivera Murals", timestampHint: "1:00", script: "Dynamic three-dimensional murals integrate social revolution directly into modern architecture.", focusPointId: "pt-2" }
    ],
    unescoYear: 2007,
    unescoId: 1250,
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "National Autonomous University of Mexico (UNAM)",
      foundationYear: 1551,
      tradition: "Mexican Muralism, Modernism, & Latin American Thought",
      notableAlumni: ["Octavio Paz", "Mario Molina", "Carlos Fuentes", "Alfonso García Robles", "Alfonso Cuarón"]
    }
  },

  "university of santo tomas": {
    name: "University of Santo Tomas – Main Building",
    localName: "Unibersidad ng Santo Tomas (Main Building)",
    city: "Manila",
    country: "Philippines",
    architecturalStyle: "Earthquake-Resilient Beaux-Arts & Renaissance Revival Architecture",
    periodEra: "Founded 1611 by Miguel de Benavides / Main Building 1927",
    confidence: 99,
    summary: "The oldest existing university charter in Asia, established in Manila in 1611. Designed by Fr. Roque Ruaño, its monumental 1927 Main Building was the first earthquake-resistant building in the Philippines, featuring an imposing clock tower and statues of classical philosophers.",
    coordinatesEstimate: { lat: 14.6095, lng: 120.9898 },
    arKeypoints: [
      { id: "pt-1", label: "Central Clock Tower & Cross", featureType: "spire", description: "Monumental stone tower rising 45 meters above the campus with a classic four-faced clock and cross.", x: 50, y: 18 },
      { id: "pt-2", label: "Tria Haec Statues (Faith, Hope, Love)", featureType: "statue", description: "Francesco Monti's sculptural allegories crowning the rooftop parapet alongside Saint Thomas Aquinas.", x: 50, y: 35 },
      { id: "pt-3", label: "Arch of the Centuries", featureType: "arch", description: "Relocated stone portal from the original 17th-century Intramuros campus through which all UST freshmen pass.", x: 25, y: 75 },
      { id: "pt-4", label: "Earthquake-Resilient Modular Joints", featureType: "facade", description: "Ingenious 40 independent reinforced concrete seismic modules that absorb Pacific Rim earthquakes.", x: 50, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1611", event: "Foundation by Miguel de Benavides", description: "Archbishop Miguel de Benavides bequeathed his library and estate to found the Colegio de Nuestra Señora del Santísimo Rosario." },
      { yearOrEra: "1645", event: "Papal Elevation by Pope Innocent X", description: "Elevated to a university, making it twenty-five years older than Harvard and the oldest extant university in Asia." },
      { yearOrEra: "1927", event: "Roque Ruaño's Earthquake Marvel", description: "Father Roque Ruaño engineered the revolutionary earthquake-resilient Main Building on the España campus." },
      { yearOrEra: "Present", event: "The Pontifical and Royal University", description: "Educated national hero José Rizal, four Philippine Presidents, and four Chief Justices." }
    ],
    architecturalSecrets: [
      "The Main Building was the first earthquake-resistant structure in the Philippines: Father Ruaño divided it into 40 independent concrete units that can sway independently during a tremor.",
      "The Arch of the Centuries at the university entrance was painstakingly transported stone-by-stone from its original 1680 site inside Intramuros after World War II.",
      "During World War II, the UST campus was commandeered by Japanese forces as an internment camp holding over 4,000 Allied civilians."
    ],
    culturalSignificance: "UST is the intellectual mother of the modern Philippines, having educated national hero Dr. José Rizal, who studied medicine and literature here before igniting the Philippine independence movement.",
    visitorTips: [
      "Enter through the Arch of the Centuries along España Boulevard to take in the monumental facade of the Main Building.",
      "Visit the UST Museum of Arts and Sciences, the oldest museum in the Philippines, housed on the ground floor.",
      "Admire the evening illumination of the clock tower reflecting across the central fountain."
    ],
    narrationScript: "You stand before the Main Building of the University of Santo Tomas in Manila, Philippines. Founded in 1611 by Archbishop Miguel de Benavides, UST is twenty-five years older than Harvard, holding the oldest existing university charter anywhere in Asia. In 1927, architect-priest Father Roque Ruaño engineered this magnificent Beaux-Arts landmark, dividing its reinforced concrete frame into forty independent modules to create the first earthquake-resilient building in the Philippines. Rising above its classical portico is a forty-five-meter clock tower crowned by statues of Faith, Hope, and Charity. Here, national hero José Rizal studied medicine and ignited the struggle for Philippine nationhood.",
    chapters: [
      { id: "ch-1", title: "Asia's Oldest Extant Charter (1611)", timestampHint: "0:00", script: "Established in 1611, UST has championed Asian higher education across four centuries.", focusPointId: "pt-3" },
      { id: "ch-2", title: "Father Ruaño's Seismic Wonder", timestampHint: "0:30", script: "Engineered in 1927 with 40 independent structural blocks to withstand catastrophic Pacific earthquakes.", focusPointId: "pt-4" },
      { id: "ch-3", title: "The Clock Tower & José Rizal", timestampHint: "1:00", script: "The 45-meter clock tower looks out over the alma mater of Philippine patriot Dr. José Rizal.", focusPointId: "pt-1" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "University of Santo Tomas",
      foundationYear: 1611,
      tradition: "Philippine Dominican Classical Scholasticism",
      notableAlumni: ["José Rizal", "Manuel L. Quezon", "Sergio Osmeña", "Marcelo H. del Pilar", "Diosdado Macapagal"]
    }
  },

  "sankore university": {
    name: "Sankore University & Mosque",
    localName: "جامع سنكوري وقرية المعرفة تمبكتو",
    city: "Timbuktu",
    country: "Mali",
    architecturalStyle: "Sudano-Sahelian Earth & Timber Architecture (Toron Beams & Adobe)",
    periodEra: "Founded c. 989 AD / Golden Era 14th–16th Century",
    confidence: 99,
    summary: "The celebrated medieval university of West Africa, founded around 989 AD in legendary Timbuktu. Built from mudbrick and projecting toron timber beams, Sankore housed over 25,000 scholars during the Mali Empire, preserving hundreds of thousands of African scientific and theological manuscripts.",
    coordinatesEstimate: { lat: 16.7758, lng: -3.0075 },
    arKeypoints: [
      { id: "pt-1", label: "Sankore Adobe Pyramidal Minaret", featureType: "spire", description: "Stepped conical earthen minaret bristling with projecting toron acacia wood scaffold beams.", x: 50, y: 25 },
      { id: "pt-2", label: "Central Madrasa Courtyard", featureType: "facade", description: "Sun-baked earthen open courtyard whose exact dimensions match the sacred proportions of the Kaaba in Mecca.", x: 50, y: 65 },
      { id: "pt-3", label: "Mudbrick Buttresses & Toron Beams", featureType: "relief", description: "Organic clay buttressing reinforced with projecting desert acacia timbers used for annual replastering.", x: 30, y: 75 },
      { id: "pt-4", label: "Historic Manuscript Vault", featureType: "entrance", description: "Portal safeguarding legendary Timbuktu manuscripts on astronomy, optics, law, and mathematics.", x: 75, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "c. 989 AD", event: "Foundation by Tuareg Woman Patron", description: "A wealthy Mandinka/Tuareg noblewoman financed the initial mosque and collegiate madrasa." },
      { yearOrEra: "1324", event: "Mansa Musa's Imperial Patronage", description: "Emperor Mansa Musa returned from his legendary pilgrimage and elevated Sankore with scholars, gold, and books." },
      { yearOrEra: "16th Century", event: "Songhai Golden Age & Ahmad Baba", description: "Under Askia the Great, Sankore reached 25,000 scholars, led by the legendary jurist and polymath Ahmad Baba." },
      { yearOrEra: "1988", event: "UNESCO World Heritage Inscription", description: "Inscribed as part of Timbuktu for its monumental earthen architecture and invaluable manuscript collections." }
    ],
    architecturalSecrets: [
      "The courtyard of Sankore Mosque was deliberately designed to duplicate the exact dimensional measurements of the Kaaba in Mecca.",
      "The projecting wooden beams (toron) serve a vital structural purpose: they function as permanent built-in scaffolding allowing the community to replaster the earthen walls after the rainy season.",
      "Sankore's scholars wrote hundreds of thousands of manuscripts in Arabic and African languages covering astronomy, metallurgy, optics, and human rights centuries before the European Renaissance."
    ],
    culturalSignificance: "Sankore disproved colonial myths of an illiterate Africa, standing alongside Cairo and Fez as the intellectual capital of the Sahara, producing world-renowned scholars like Ahmad Baba.",
    visitorTips: [
      "Timbuktu travel requires checking security advisories; consult local guides to view the exterior mudbrick architecture safely.",
      "Visit the Ahmed Baba Institute to inspect digitized and restored medieval Saharan manuscripts.",
      "Observe the annual mud-plastering festival (crépissage) when the whole community renovates the sacred earth walls."
    ],
    narrationScript: "You stand before Sankore University and Mosque in the legendary desert city of Timbuktu, Mali. Founded around 989 AD and elevated by the fabled Emperor Mansa Musa, Sankore was the intellectual lighthouse of West Africa. Built entirely of sun-baked earth, clay, and desert acacia timbers known as toron beams, this earthen citadel accommodated twenty-five thousand scholars during the Songhai Empire. Look at the stepped pyramidal minaret, whose courtyard mirrors the exact dimensions of the Kaaba. Here in the Sahara, African astronomers mapped eclipses, physicians performed eye surgery, and jurists authored libraries of manuscripts celebrated worldwide.",
    chapters: [
      { id: "ch-1", title: "Mansa Musa's Desert University", timestampHint: "0:00", script: "In the 14th century, Timbuktu blossomed into West Africa's capital of books and astronomy.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Sudano-Sahelian Earth & Toron Beams", timestampHint: "0:30", script: "Sculpted adobe walls and acacia timbers unite sacred architecture with African climatic wisdom.", focusPointId: "pt-3" },
      { id: "ch-3", title: "The Manuscripts of Ahmad Baba", timestampHint: "1:00", script: "Hundreds of thousands of medieval manuscripts proved Africa's profound scientific heritage.", focusPointId: "pt-4" }
    ],
    unescoYear: 1988,
    unescoId: 119,
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Sankore University",
      foundationYear: 989,
      tradition: "West African Islamic Scholasticism & Saharan Astronomy",
      notableAlumni: ["Ahmad Baba al-Timbukti", "Mansa Musa (Patron)", "Mohammed Bagayogo", "Askia the Great (Patron)"]
    }
  },

  "national university of san marcos": {
    name: "National University of San Marcos – Casona de San Marcos",
    localName: "Universidad Nacional Mayor de San Marcos (La Casona)",
    city: "Lima",
    country: "Peru",
    architecturalStyle: "Spanish Colonial & Neoclassical Limeño Courtyard Architecture",
    periodEra: "Founded 1551 by Royal Decree of King Charles I (Emperor Charles V)",
    confidence: 99,
    summary: "The Dean University of the Americas ('Decana de América'), chartered in 1551 as the first officially recognized university in the Americas. Its historic downtown seat, the Casona de San Marcos, features five tranquil colonial arcaded patios and the historic General Assembly Hall.",
    coordinatesEstimate: { lat: -12.0526, lng: -77.0354 },
    arKeypoints: [
      { id: "pt-1", label: "Patio of the Cedars (Patio de los Cedros)", featureType: "facade", description: "Tranquil central colonial cloister framed by carved wooden balustrades and ancient cedar trees.", x: 50, y: 50 },
      { id: "pt-2", label: "General Assembly Hall (Salón General)", featureType: "interior", description: "Historic auditorium with carved viceregal wooden stalls where the Peruvian Declaration of Independence was debated.", x: 50, y: 30 },
      { id: "pt-3", label: "Colonial Moorish Window Grilles", featureType: "relief", description: "Traditional Limeño wrought-iron and carved wooden jalousie windows fronting Parque Universitario.", x: 25, y: 70 },
      { id: "pt-4", label: "Carved Altar of the Jesuit Chapel", featureType: "interior", description: "Gilded baroque retablo inside the restored chapel of the former Novitiate of San Antonio Abad.", x: 75, y: 75 }
    ],
    historicalTimeline: [
      { yearOrEra: "1551", event: "Charter of King Charles I of Spain", description: "Founded by royal decree in the Convent of Santo Domingo, establishing the first royal university in the New World." },
      { yearOrEra: "1571", event: "Papal Bull of Saint Pius V", description: "Elevated to a Pontifical University under the patronage of Saint Mark the Evangelist." },
      { yearOrEra: "1821", event: "Crucible of Peruvian Independence", description: "San Marcos professors and alumni led the drafting of Peru's Declaration of Independence." },
      { yearOrEra: "Present", event: "Decana de América (Dean of the Americas)", description: "Educated Nobel laureate Mario Vargas Llosa and centuries of Latin American writers and statesmen." }
    ],
    architecturalSecrets: [
      "Known throughout Latin America as 'La Decana de América' because it is the oldest continuously functioning university in the Western Hemisphere.",
      "The Casona has survived severe earthquakes, notably in 1746, thanks to the flexible quincha (cane and mud) architecture perfected by colonial Limeño builders.",
      "Beneath the Patio of the Cistern lies an ancient underground water reservoir built in the 17th century by the Jesuits."
    ],
    culturalSignificance: "San Marcos is the intellectual bedrock of South America, having nurtured the literary and scientific movements of the Andes and educated Mario Vargas Llosa, César Vallejo, and Daniel Alcides Carrión.",
    visitorTips: [
      "Visit La Casona on Parque Universitario in downtown Lima to tour the five colonial courtyards and the historic Salón General.",
      "Admire the German clock tower gifted to Lima by the German community in the center of Parque Universitario outside.",
      "Explore the university's Museum of Archaeology and Anthropology located within the cloisters."
    ],
    narrationScript: "You stand inside La Casona de San Marcos in the historic center of Lima, Peru. Established in 1551 by royal charter of King Charles the First of Spain, the National University of San Marcos holds the revered title of 'Decana de América'—the Dean University of the Americas, as the oldest continuously functioning university in the Western Hemisphere. Wander through its five colonial courtyards framed by carved wooden balconies and ancient cedars. Within the Salón General, scholars debated the Enlightenment and laid the intellectual foundations for Peruvian independence.",
    chapters: [
      { id: "ch-1", title: "Dean of the Americas (1551)", timestampHint: "0:00", script: "Chartered in 1551, San Marcos is the oldest continuously operating university in the Americas.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Cloisters of La Casona", timestampHint: "0:30", script: "Five tranquil colonial courtyards showcase Limeño wood carving and quincha seismic architecture.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Cradle of South American Independence", timestampHint: "1:00", script: "From the Salón General to modern literature, San Marcos shaped South American consciousness.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "National University of San Marcos",
      foundationYear: 1551,
      tradition: "South American Viceregal & Republican Humanism",
      notableAlumni: ["Mario Vargas Llosa", "César Vallejo", "Daniel Alcides Carrión", "Jorge Basadre", "José María Arguedas"]
    }
  },

  // ==========================================
  // STANFORD UNIVERSITY
  // ==========================================
  "stanford university": {
    name: "Stanford University (Main Quad & Memorial Church)",
    localName: "Leland Stanford Junior University",
    city: "Stanford, California",
    country: "United States",
    architecturalStyle: "Richardsonan Romanesque & Mission Revival",
    periodEra: "Founded 1885 / Opened 1891 (Designed by Frederick Law Olmsted & Shepley, Rutan and Coolidge)",
    confidence: 99,
    summary: "Set amidst the rolling foothills of Silicon Valley, Stanford University's historic Main Quad features arcaded covered walkways, red-tile roofs, buff sandstone arches, and the world-famous mosaic facade of Stanford Memorial Church, anchoring global innovation in technology and human inquiry.",
    coordinatesEstimate: { lat: 37.4275, lng: -122.1697 },
    arKeypoints: [
      { id: "pt-1", label: "Stanford Memorial Church Mosaic Facade", featureType: "facade", description: "Breathtaking Venetian glass mosaic facade depicting Christ welcoming all believers, restored after the 1906 and 1989 earthquakes.", x: 50, y: 35 },
      { id: "pt-2", label: "Hoover Tower Landmark", featureType: "spire", description: "87-meter tower housing the Hoover Institution Library and Archives, offering sweeping views of the Bay Area.", x: 75, y: 20 },
      { id: "pt-3", label: "Richardson Romanesque Main Quad Arcade", featureType: "arch", description: "Covered arcades built of native San Jose buff sandstone connecting historic departmental courtyards.", x: 50, y: 70 },
      { id: "pt-4", label: "Memorial Court & Rodin Burghers of Calais", featureType: "statue", description: "Original bronze casts of Auguste Rodin's masterpiece sculptures greeting scholars at the Main Quad entrance.", x: 30, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1885–1891", event: "Founded by Leland & Jane Stanford", description: "Built in loving memory of their only child, Leland Stanford Jr., establishing a co-educational, non-sectarian university." },
      { yearOrEra: "1906", event: "The Great San Francisco Earthquake", description: "Major damage to Memorial Church's steeple; heroically restored by Jane Stanford using Venetian mosaic masters." },
      { yearOrEra: "Mid-20th Century", event: "Birth of Silicon Valley", description: "Dean Frederick Terman encouraged graduates (Hewlett, Packard, Varian) to found tech ventures, birthing Silicon Valley." }
    ],
    architecturalSecrets: [
      "The campus was master-planned by legendary landscape architect Frederick Law Olmsted, creator of New York's Central Park.",
      "The Venetian mosaics on Memorial Church contain over 20,000 distinct colors produced by the Salviati studios in Murano, Italy.",
      "Stanford has educated the founders of Google (Larry Page & Sergey Brin), Hewlett-Packard, Sun Microsystems, Yahoo, Cisco, Netflix, and OpenAI."
    ],
    culturalSignificance: "The foremost academic powerhouse of the Pacific Rim and the intellectual birthplace of modern internet, computing, and biotechnology revolutions.",
    visitorTips: [
      "Take the elevator up Hoover Tower for views across the Stanford campus and the Santa Cruz Mountains.",
      "Step inside Memorial Church to admire the Fisk-Nanney pipe organ and stained glass clerestory windows."
    ],
    narrationScript: "Welcome to Stanford University, heart of Silicon Valley and one of the world's preeminent universities. Conceived by Leland and Jane Stanford in 1885 in memory of their son, its distinctive Mission Revival arcades and buff sandstone courtyards were designed with Frederick Law Olmsted. Rising before you is Stanford Memorial Church, adorned with glowing Venetian glass mosaics celebrating universal faith and learning. From these sun-drenched cloisters, Stanford students and faculty sparked the personal computer, the internet, and modern artificial intelligence.",
    chapters: [
      { id: "ch-1", title: "Olmsted's California Vision", timestampHint: "0:00", script: "Built in 1885, Stanford's red-tile roofs and sandstone arcades pioneered California collegiate architecture.", focusPointId: "pt-3" },
      { id: "ch-2", title: "The Jewel of Memorial Church", timestampHint: "0:30", script: "Venetian glass mosaics illuminate the non-denominational church at the center of the Main Quad.", focusPointId: "pt-1" },
      { id: "ch-3", title: "Forge of Silicon Valley", timestampHint: "1:00", script: "From Hoover Tower to research labs, Stanford's campus fueled the global technology revolution.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Stanford University",
      foundationYear: 1885,
      tradition: "American Scientific & Entrepreneurial Vanguard",
      notableAlumni: ["Larry Page", "Sergey Brin", "Herbert Hoover", "Sally Ride", "John F. Kennedy (attended)", "Sundar Pichai"]
    }
  },

  // ==========================================
  // MIT (MASSACHUSETTS INSTITUTE OF TECHNOLOGY)
  // ==========================================
  "mit": {
    name: "MIT (Building 10 & The Great Dome)",
    localName: "Massachusetts Institute of Technology",
    city: "Cambridge, Massachusetts",
    country: "United States",
    architecturalStyle: "Neoclassical & High Modernist Architecture",
    periodEra: "Founded 1861 / Cambridge Campus Dedicated 1916 (Architect William Welles Bosworth)",
    confidence: 99,
    summary: "Fronting the Charles River across from Boston, MIT's Building 10 and its iconic limestone Great Dome symbolize global preeminence in science, technology, mathematics, and architectural ingenuity, flanked by Killian Court and Frank Gehry's deconstructivist Stata Center.",
    coordinatesEstimate: { lat: 42.3598, lng: -71.0921 },
    arKeypoints: [
      { id: "pt-1", label: "The Great Dome & Ionic Colonnade", featureType: "dome", description: "Monumental Indiana limestone dome and pedimented portico supported by colossal fluted Ionic columns overlooking Killian Court.", x: 50, y: 28 },
      { id: "pt-2", label: "Killian Court Riverfront Lawn", featureType: "facade", description: "Expansive green academic court where annual commencement exercises take place facing the Charles River.", x: 50, y: 75 },
      { id: "pt-3", label: "Ray and Maria Stata Center", featureType: "facade", description: "Frank Gehry's radical deconstructivist computing and cognitive science building featuring tilting towers and angular brick forms.", x: 80, y: 40 },
      { id: "pt-4", label: "Infinite Corridor", featureType: "entrance", description: "251-meter-long interior pedestrian spine linking the original Maclaurin buildings, aligned with the setting sun during 'MIThenge'.", x: 30, y: 65 }
    ],
    historicalTimeline: [
      { yearOrEra: "1861", event: "Incorporation by William Barton Rogers", description: "Founded in response to the industrialization of the United States under the motto 'Mens et Manus' (Mind and Hand)." },
      { yearOrEra: "1916", event: "Move to Cambridge Campus", description: "Moved from Boston to its monumental Neoclassical campus designed by William Welles Bosworth." },
      { yearOrEra: "Present", event: "World's Top Technical University", description: "Affiliated with 101 Nobel laureates, 26 Turing Award winners, and 8 Fields Medalists." }
    ],
    architecturalSecrets: [
      "Twice a year (around November 11 and January 31), the setting sun shines directly down the exact 251-meter length of the Infinite Corridor in a phenomenon celebrated as 'MIThenge'.",
      "MIT students are famous for 'hacks'—elaborate, harmless technical pranks that have placed police cars, Apollo lunar modules, and R2-D2 on top of the Great Dome.",
      "The Great Dome is engineered as a concrete thin-shell structure inspired by the Pantheon in Rome."
    ],
    culturalSignificance: "The world's leading university for STEM, having pioneered radar, nuclear energy, modern computing, artificial intelligence, and genomics.",
    visitorTips: [
      "Walk the Infinite Corridor from 77 Massachusetts Avenue straight into the central Barker Engineering Library beneath the Great Dome.",
      "Explore the MIT Museum in Kendall Square and admire the outdoor sculpture collection by Alexander Calder and Henry Moore."
    ],
    narrationScript: "You stand in Killian Court before the Great Dome of the Massachusetts Institute of Technology, on the banks of the Charles River. Founded in 1861 with the motto 'Mens et Manus'—Mind and Hand—MIT is the world's temple of science, engineering, and discovery. Look up at the Neoclassical Indiana limestone dome and towering Ionic columns designed by William Welles Bosworth. Down the 250-meter Infinite Corridor, generations of researchers pioneered modern computing, radar, and artificial intelligence, transforming the trajectory of human civilization.",
    chapters: [
      { id: "ch-1", title: "Mind and Hand in Stone", timestampHint: "0:00", script: "Dedicated in 1916, Bosworth's Neoclassical Great Dome anchors MIT's scientific mission.", focusPointId: "pt-1" },
      { id: "ch-2", title: "The Infinite Corridor", timestampHint: "0:30", script: "A 250-meter central hall connects the campus, aligning with the setting sun in the annual MIThenge.", focusPointId: "pt-4" },
      { id: "ch-3", title: "Vanguard of Discovery", timestampHint: "1:00", script: "Over one hundred Nobel laureates and generations of innovators have called this campus home.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Massachusetts Institute of Technology",
      foundationYear: 1861,
      tradition: "Global Scientific, Computational & Engineering Innovation",
      notableAlumni: ["Buzz Aldrin", "Kofi Annan", "Richard Feynman", "Tim Berners-Lee (faculty)", "Noam Chomsky (faculty)"]
    }
  },



  // ==========================================
  // OSMANIA UNIVERSITY ARTS COLLEGE, HYDERABAD
  // ==========================================
  "osmania university arts college": {
    name: "Osmania University (College of Arts)",
    localName: "عثمانیہ یونیورسٹی / ఉస్మానియా విశ్వవిద్యాలయం",
    city: "Hyderabad, Telangana",
    country: "India",
    architecturalStyle: "Indo-Saracenic & Neo-Deccani Architecture",
    periodEra: "University Founded 1918 (Mir Osman Ali Khan) / Arts College 1939",
    confidence: 99,
    summary: "Commissioned by the 7th Nizam of Hyderabad, Mir Osman Ali Khan, and designed by Belgian architect Ernest Jasper, the monumental College of Arts building at Osmania University is a breathtaking fusion of Islamic Saracenic domes, Hindu Kakatiya pillar carvings, and Deccani granite grandeur.",
    coordinatesEstimate: { lat: 17.4184, lng: 78.5284 },
    arKeypoints: [
      { id: "pt-1", label: "Monumental Indo-Saracenic Central Portal", featureType: "arch", description: "Colossal multi-story arched entrance built of hand-dressed pinkish-grey Deccani granite, blending Mughal arches and Kakatiya lotus motifs.", x: 50, y: 35 },
      { id: "pt-2", label: "Central Heritage Dome & Chhatris", featureType: "dome", description: "Fluted granite dome and ornamental octagonal chhatris crowning the majestic central auditorium.", x: 50, y: 15 },
      { id: "pt-3", label: "Kakatiya Lotus-Carved Granite Pillars", featureType: "column", description: "Carved stone columns inside the foyer drawing direct artistic inspiration from the 12th-century Thousand Pillar Temple of Warangal.", x: 35, y: 65 },
      { id: "pt-4", label: "Formal Reflecting Boulevard & Gardens", featureType: "facade", description: "Grand landscaped approach boulevard framing the 240-foot-wide symmetrical heritage stone facade.", x: 50, y: 80 }
    ],
    historicalTimeline: [
      { yearOrEra: "1918", event: "Founded by Royal Firman of Nizam VII", description: "Mir Osman Ali Khan established Osmania University as the first Indian university to adopt an Indian regional language (Urdu) as a medium of higher learning." },
      { yearOrEra: "1934–1939", event: "Arts College Construction", description: "Constructed at a cost of 3.6 million rupees; inaugurated on December 4, 1939." },
      { yearOrEra: "Present", event: "Centenary of Heritage", description: "Celebrated its centenary as one of India's largest and most historic collegiate universities." }
    ],
    architecturalSecrets: [
      "Belgian architect Ernest Jasper intentionally incorporated Ajanta and Ellora cave motifs alongside Kakatiya temple brackets to symbolize the syncretic Hindu-Muslim heritage of the Deccan.",
      "The entire superstructure was constructed from solid blocks of native pink and grey granite quarried directly from the hills of Hyderabad without facing veneer.",
      "The university library holds over half a million volumes, including rare palm-leaf manuscripts and ancient Sanskrit and Arabic treatises."
    ],
    culturalSignificance: "A premier symbol of Deccani syncretic culture (Ganga-Jamuni Tehzeeb) and the institutional engine of modern education across Telangana and the Deccan plateau.",
    visitorTips: [
      "Stand at the base of the grand driveway for the classic photograph of the Arts College facade reflecting in the morning light.",
      "Walk through the central foyer to admire the Kakatiya-inspired stone pillars and soaring ceiling dome."
    ],
    narrationScript: "You stand before the magnificent Arts College of Osmania University in Hyderabad. Established in 1918 by the seventh Nizam, Mir Osman Ali Khan, and designed by Belgian architect Ernest Jasper, this building is a masterwork of Indo-Saracenic design. Look at its pink Deccani granite facade: monumental Islamic arches blend seamlessly with intricate lotus pillars inspired by the medieval Kakatiya temples of Warangal. For generations, this building has stood as an immortal symbol of the syncretic heritage and intellectual soul of the Deccan.",
    chapters: [
      { id: "ch-1", title: "The Nizam's Grand Vision", timestampHint: "0:00", script: "Founded in 1918, Osmania University pioneered modern collegiate higher education in the Deccan.", focusPointId: "pt-1" },
      { id: "ch-2", title: "Syncretic Deccani Architecture", timestampHint: "0:30", script: "Belgian architect Ernest Jasper fused Islamic arches with Kakatiya temple carvings in solid granite.", focusPointId: "pt-3" },
      { id: "ch-3", title: "Crown of Osmania", timestampHint: "1:00", script: "The central dome and chhatris have anchored Telangana's academic aspirations for nearly a century.", focusPointId: "pt-2" }
    ],
    collegeInfo: {
      isHistoricCollege: true,
      institutionName: "Osmania University (College of Arts)",
      foundationYear: 1918,
      tradition: "Deccani Indo-Saracenic Heritage & Modern Higher Learning",
      notableAlumni: ["P. V. Narasimha Rao (former Prime Minister of India)", "Dr. Manmohan Singh (faculty)", "Shantanu Narayen (Adobe CEO)", "Shivraj Patil"]
    }
  }
};

export const HISTORIC_COLLEGES_AND_UNESCO_ALIASES: Record<string, string> = {
  ...INDIAN_COLLEGES_ALIASES,
  // Oxford
  "oxford": "oxford university",
  "university of oxford": "oxford university",
  "radcliffe camera": "oxford university",
  "christ church oxford": "oxford university",
  "oxford college": "oxford university",
  "bodleian library": "oxford university",

  // Cambridge
  "cambridge": "cambridge university",
  "university of cambridge": "cambridge university",
  "kings college chapel": "cambridge university",
  "king's college chapel": "cambridge university",
  "cambridge college": "cambridge university",
  "trinity college cambridge": "cambridge university",

  // Harvard
  "harvard": "harvard university",
  "harvard yard": "harvard university",
  "memorial hall harvard": "harvard university",
  "harvard college": "harvard university",
  "harvard university": "harvard university",

  // Coimbra
  "coimbra": "university of coimbra",
  "universidade de coimbra": "university of coimbra",
  "coimbra university": "university of coimbra",
  "joanina library": "university of coimbra",

  // Salamanca
  "salamanca": "university of salamanca",
  "universidad de salamanca": "university of salamanca",
  "salamanca university": "university of salamanca",

  // Bologna
  "bologna": "university of bologna",
  "universita di bologna": "university of bologna",
  "bologna university": "university of bologna",
  "archiginnasio": "university of bologna",

  // Al-Qarawiyyin
  "al-qarawiyyin": "university of al-qarawiyyin",
  "al qarawiyyin": "university of al-qarawiyyin",
  "university of al-qarawiyyin": "university of al-qarawiyyin",
  "qarawiyyin university": "university of al-qarawiyyin",
  "fez university": "university of al-qarawiyyin",
  "جامعة القرويين": "university of al-qarawiyyin",

  // Nalanda
  "nalanda": "nalanda mahavihara",
  "nalanda mahavihara": "nalanda mahavihara",
  "nalanda university": "nalanda mahavihara",
  "ancient nalanda": "nalanda mahavihara",
  "ruins of nalanda": "nalanda mahavihara",
  "नालंदा": "nalanda mahavihara",
  "नालंदा महाविहार": "nalanda mahavihara",

  // Taxila
  "taxila": "ancient university of taxila",
  "ancient university of taxila": "ancient university of taxila",
  "taxila university": "ancient university of taxila",
  "takshashila": "ancient university of taxila",
  "takshashila university": "ancient university of taxila",
  "ruins of taxila": "ancient university of taxila",
  "sirkap": "ancient university of taxila",
  "jaulian": "ancient university of taxila",

  // Al-Azhar
  "al-azhar": "al-azhar university",
  "al azhar": "al-azhar university",
  "al-azhar university": "al-azhar university",
  "al azhar mosque": "al-azhar university",
  "جامعة الأزهر": "al-azhar university",

  // Padua
  "padua": "university of padua",
  "padova": "university of padua",
  "university of padua": "university of padua",
  "universita di padova": "university of padua",
  "palazzo bo": "university of padua",
  "padua anatomical theatre": "university of padua",

  // Sorbonne
  "sorbonne": "sorbonne university",
  "la sorbonne": "sorbonne university",
  "sorbonne university": "sorbonne university",
  "university of paris": "sorbonne university",
  "chapelle de la sorbonne": "sorbonne university",

  // Charles University Prague
  "charles university": "charles university",
  "carolinum": "charles university",
  "karolinum": "charles university",
  "univerzita karlova": "charles university",
  "charles university prague": "charles university",

  // Jagiellonian University
  "jagiellonian": "jagiellonian university",
  "jagiellonian university": "jagiellonian university",
  "collegium maius": "jagiellonian university",
  "uniwersytet jagiellonski": "jagiellonian university",
  "krakow university": "jagiellonian university",

  // University of Vienna
  "university of vienna": "university of vienna",
  "universitat wien": "university of vienna",
  "vienna university": "university of vienna",
  "arkadenhof": "university of vienna",

  // Heidelberg University
  "heidelberg": "heidelberg university",
  "heidelberg university": "heidelberg university",
  "alte universitat heidelberg": "heidelberg university",
  "universitat heidelberg": "heidelberg university",

  // Trinity College Dublin
  "trinity college dublin": "trinity college dublin",
  "trinity college": "trinity college dublin",
  "long room dublin": "trinity college dublin",
  "the long room dublin": "trinity college dublin",
  "the long room trinity": "trinity college dublin",
  "book of kells library": "trinity college dublin",
  "tcd": "trinity college dublin",

  // William & Mary
  "william and mary": "college of william & mary",
  "william & mary": "college of william & mary",
  "the college of william & mary": "college of william & mary",
  "wren building": "college of william & mary",
  "sir christopher wren building": "college of william & mary",

  // Yale
  "yale": "yale university",
  "yale university": "yale university",
  "sterling memorial library": "yale university",
  "harkness tower": "yale university",
  "beinecke library": "yale university",

  // Princeton
  "princeton": "princeton university",
  "princeton university": "princeton university",
  "nassau hall": "princeton university",

  // Columbia
  "columbia": "columbia university",
  "columbia university": "columbia university",
  "low library": "columbia university",
  "low memorial library": "columbia university",
  "alma mater columbia": "columbia university",

  // University of Virginia
  "university of virginia": "university of virginia",
  "uva": "university of virginia",
  "the rotunda uva": "university of virginia",
  "academical village": "university of virginia",

  // UNAM
  "unam": "unam central campus",
  "ciudad universitaria": "unam central campus",
  "national autonomous university of mexico": "unam central campus",
  "unam central library": "unam central campus",

  // Santo Tomas
  "university of santo tomas": "university of santo tomas",
  "ust": "university of santo tomas",
  "ust manila": "university of santo tomas",
  "arch of the centuries": "university of santo tomas",

  // Sankore
  "sankore": "sankore university",
  "sankore university": "sankore university",
  "sankore mosque": "sankore university",
  "timbuktu university": "sankore university",

  // San Marcos
  "san marcos": "national university of san marcos",
  "universidad de san marcos": "national university of san marcos",
  // Stanford University
  "stanford": "stanford university",
  "stanford university": "stanford university",
  "stanford main quad": "stanford university",
  "stanford memorial church": "stanford university",
  "hoover tower": "stanford university",

  // MIT
  "mit": "mit",
  "massachusetts institute of technology": "mit",
  "mit building 10": "mit",
  "mit great dome": "mit",
  "the great dome mit": "mit",
  "killian court mit": "mit",


  // Osmania University
  "osmania university": "osmania university arts college",
  "osmania arts college": "osmania university arts college",
  "arts college hyderabad": "osmania university arts college",
  "arts college osmania": "osmania university arts college",
  "osmania university hyderabad": "osmania university arts college",

  // UNESCO World Wonders
  "machu picchu": "machu picchu",
  "machu pikchu": "machu picchu",
  "petra": "petra",
  "al khazneh": "petra",
  "the treasury petra": "petra",
  "acropolis": "acropolis of athens",
  "parthenon": "acropolis of athens",
  "acropolis of athens": "acropolis of athens",
};
