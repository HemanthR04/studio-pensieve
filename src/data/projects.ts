export type ProjectImage = {
  src: string;
  orientation: "portrait" | "landscape";
};

export type ProjectCredit = {
  label: string;
  value: string; // supports newlines with \n
};

export type ProjectRoom = {
  number: number;
  name: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  location: string;
  year: string;
  size: string;
  aspect: "portrait" | "landscape";
  bg: string;
  color: string;
  cover?: string;
  hero?: string;
  floorPlan?: string;
  description?: string[];     // paragraphs
  credits?: ProjectCredit[];
  rooms?: ProjectRoom[];
  images?: ProjectImage[];
};

function img(filename: string): string {
  return `/Projects/Emb%20Pristine%20/${encodeURIComponent(filename)}`;
}

function imgKishore(filename: string): string {
  return `/Projects/Kishore%20Residence/${encodeURIComponent(filename)}`;
}

function imgUber(filename: string): string {
  return `/Projects/Uber%20Residence/${encodeURIComponent(filename)}`;
}

function imgTapTales(filename: string): string {
  return `/Projects/Tap%20Tales/${encodeURIComponent(filename)}`;
}

function imgVibranium(filename: string): string {
  return `/Projects/Vibranium/${encodeURIComponent(filename)}`;
}

function imgChanpatna(filename: string): string {
  return `/Projects/Chanpatna/${encodeURIComponent(filename)}`;
}

function imgKarjat(filename: string): string {
  return `/Projects/Karjat/${encodeURIComponent(filename)}`;
}

function imgRajankunte(filename: string): string {
  return `/Projects/Rajankunte/${encodeURIComponent(filename)}`;
}

function imgRmK(filename: string): string {
  return `/Projects/RmK/${encodeURIComponent(filename)}`;
}

export const projects: Project[] = [
  {
    slug: "emb-pristine",
    index: "01",
    title: "EMB Pristine",
    category: "Interiors",
    location: "Indiranagar, Bangalore",
    year: "2024",
    size: "3,200 sq ft",
    aspect: "landscape",
    bg: "bg-stone-200",
    color: "#e7e5e4",

    cover: img(" 1 Foyer.jpg"),
    hero:  img(" 1 Foyer.jpg"),

    description: [
      "A serene three-bedroom apartment in one of Indiranagar's quieter lanes, designed around a single governing idea: that the surrounding canopy of rain trees should be present in every room. The brief asked for calm — a retreat from the city that felt generous without feeling grand.",
      "Materials were selected for their ability to age honestly. Pale limestone floors, oiled walnut joinery, and hand-plastered walls in a warm white create a palette that recedes and lets light do the work. Furniture was a mix of custom-made pieces and carefully sourced antiques, each chosen for its quality of stillness.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Residential" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
      { label: "Date Completed",   value: "2024" },
    ],

    rooms: [
      { number: 1, name: "Living Space" },
      { number: 2, name: "Bedroom" },
      { number: 3, name: "Kitchen Space" },
      { number: 4, name: "Guest Room" },
      { number: 5, name: "Family Room" },
      { number: 6, name: "Balcony" },
    ],

    images: [
      { src: img(" 2 Foyer.jpg"),              orientation: "portrait"  },
      { src: img(" 3 Dining area.jpg"),        orientation: "portrait"  },
      { src: img(" 4 Dining area.jpg"),        orientation: "portrait"  },
      { src: img("5 Crockery Bar.jpg"),        orientation: "portrait"  },
      { src: img("6 Living room.jpg"),         orientation: "portrait"  },
      { src: img("7 Living room.jpg"),         orientation: "landscape" },
      { src: img("8 Living room.jpg"),         orientation: "landscape" },
      { src: img("9 Balcony + Dining.jpg"),    orientation: "landscape" },
      { src: img("9 Balcony + Dining(1).jpg"), orientation: "landscape" },
      { src: img("10 Guest room_study.jpg"),   orientation: "portrait"  },
      { src: img("11 Living + Dining.jpg"),    orientation: "portrait"  },
      { src: img("12 Kitchen.jpg"),            orientation: "portrait"  },
      { src: img("13 Kitchen.jpg"),            orientation: "portrait"  },
      { src: img("14 Son_s room.jpg"),         orientation: "portrait"  },
      { src: img("16 Son_s room.jpg"),         orientation: "landscape" },
      { src: img("17 Master bedroom.jpg"),     orientation: "portrait"  },
      { src: img("18 Master bedroom.jpg"),     orientation: "portrait"  },
      { src: img("19 Son_s bathroom.jpg"),     orientation: "portrait"  },
      { src: img("20 Study bathroom.jpg"),     orientation: "portrait"  },
      { src: img("21 Master bedroom.jpeg"),    orientation: "landscape" },
    ],
  },
  {
    slug: "kishore-residence",
    index: "02",
    title: "Kishore Residence",
    category: "Interiors",
    location: "—",
    year: "—",
    size: "—",
    aspect: "portrait",
    bg: "bg-orange-50",
    color: "#fff7ed",

    cover: imgKishore("1.jpg"),
    hero:  imgKishore("1.jpg"),

    description: [
      "This residence is envisioned as a calm, materially rich home where every space flows into the next with quiet intention. Guided by a Japandi sensibility with subtle Indian nuances, the design relies on lime-washed surfaces, warm natural wood, and a soft palette of neutrals and pastels to create an atmosphere of ease and refinement. The materiality is tactile yet restrained, allowing the architecture and custom-crafted elements to take centre stage.",
      "The planning follows an open, unobstructed layout that emphasises visual continuity. Rooms are connected through clean sightlines, muted tones, and consistent detailing rather than partitions, giving the home an expansive and harmonious character. Custom-made furniture forms a major part of the design language — each piece meticulously crafted with crisp profiles, balanced proportions, and a quiet elegance that complements the architecture. Subtle spatial gestures enhance the home's experience, such as the curved ceiling that marks the transition from the hallway into the main living zones, where the interplay of light, texture, and warm wood accents creates a serene, cohesive rhythm.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Residential" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgKishore("2.jpg"),         orientation: "portrait" },
      { src: imgKishore("3.jpg"),         orientation: "portrait" },
      { src: imgKishore("4.jpg"),         orientation: "portrait" },
      { src: imgKishore("5 gif.1.jpg"),   orientation: "portrait" },
      { src: imgKishore("6.jpg"),         orientation: "portrait" },
      { src: imgKishore("7.jpg"),         orientation: "portrait" },
      { src: imgKishore("8.jpg"),         orientation: "portrait" },
      { src: imgKishore("9.jpg"),         orientation: "portrait" },
      { src: imgKishore("10.jpg"),        orientation: "portrait" },
      { src: imgKishore("11.jpg"),        orientation: "portrait" },
    ],
  },
  {
    slug: "uber-residence",
    index: "03",
    title: "Uber Residence",
    category: "Interiors",
    location: "Bangalore",
    year: "—",
    size: "850 sq ft",
    aspect: "portrait",
    bg: "bg-slate-200",
    color: "#e2e8f0",

    cover: imgUber("1.jpg"),
    hero:  imgUber("1.jpg"),

    description: [
      "This 850 sq ft apartment proves that thoughtful design can create a safe, comfortable haven for seniors. Prioritising their needs, the interiors promote ease of use while feeling warm and inviting. Senior-friendly flooring replaces slippery tiles to minimise falls, while a white and neutral palette makes rooms feel more spacious — with clever half-wall paint adding a touch of visual interest. Woodwork features textured grooves and rounded edges for safety, green furniture complements the neutrals, and strategically placed teak grab bars blend seamlessly to aid navigation.",
      "The master bedroom prioritises ease of movement with a compact sliding glass wardrobe and a calming neutral palette. The bathroom was completely transformed — swing doors replaced with space-saving sliding doors, shower benches installed, and integrated grab bars added throughout. The second bedroom functions as a study, media room, and guest room, with a wall-mounted fold-away bed that makes way for a tan leather sofa when not in use. The kitchen features lowered work surfaces to prevent back strain and a built-in chair for comfort while cooking.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Residential" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgUber("2.jpg"),  orientation: "portrait" },
      { src: imgUber("3.jpg"),  orientation: "portrait" },
      { src: imgUber("4.jpg"),  orientation: "portrait" },
      { src: imgUber("5.jpg"),  orientation: "portrait" },
      { src: imgUber("6.jpg"),  orientation: "portrait" },
      { src: imgUber("7.jpg"),  orientation: "portrait" },
      { src: imgUber("9.jpg"),  orientation: "portrait" },
      { src: imgUber("10.jpg"), orientation: "portrait" },
      { src: imgUber("11.jpg"), orientation: "portrait" },
    ],
  },
  {
    slug: "tap-tales",
    index: "04",
    title: "Tap Tales",
    category: "Interiors",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-amber-50",
    color: "#fffbeb",

    cover: imgTapTales("1.png"),
    hero:  imgTapTales("1.png"),

    description: [
      "Tap Tales articulates a refined interplay between industrial honesty and crafted warmth, where material precision shapes the spatial identity. The interior composition layers exposed concrete textures, oxidised metal finishes, and corrugated steel railings to create a tactile, structurally expressive environment. Warm timber surfaces and muted upholstery temper the palette's rawness, while a calibrated lighting strategy — from suspended geometric pendants to concealed linear profiles — defines depth, hierarchy, and texture.",
      "Across multiple levels, the design maintains continuity through perforated metal screens, corrugated inserts, and an earthy tonal base, punctuated by moments of deliberate contrast. A graphic mural wall on the upper floor introduces vibrancy and movement, creating a visual anchor within the spatial sequence. The integration of greenery and diffused illumination softens the industrial framework, enriching the spatial experience while preserving its structural clarity.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Commercial" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgTapTales("2.png"),             orientation: "landscape" },
      { src: imgTapTales("3.png"),             orientation: "landscape" },
      { src: imgTapTales("Copy of 10.png"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 11.png"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 14.png"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 15.png"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 16.png"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 18.png"),    orientation: "landscape" },
    ],
  },
  {
    slug: "vibranium-ventures",
    index: "05",
    title: "Vibranium Ventures",
    category: "Interiors",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-zinc-300",
    color: "#d4d4d8",

    cover: imgVibranium("1.png"),
    hero:  imgVibranium("1.png"),

    description: [
      "Vibranium Ventures' office embodies a refined architectural narrative where spatial fluidity, material depth, and controlled lighting converge to create a sophisticated work environment. The layout is organised around a seamless circulation spine defined by curved walls and transparent partitions, allowing light to flow naturally across zones. A tactile palette of wood, glass, and textured wall treatments establishes warmth and balance, while elements like the green glass-block partition and fluted panelling introduce rhythm and contrast.",
      "Material articulation is central to the design language. The use of deep-toned fluted walls, brushed brass detailing, and sculptural furniture lends a sense of permanence and precision, while organic rugs, layered lighting, and natural finishes soften the geometry. Every junction — from the curved glazing to the recessed coves — is resolved with clarity, highlighting the craftsmanship and coherence in detailing. An office that translates Vibranium Ventures' contemporary identity into a spatial expression of elegance, efficiency, and quiet confidence.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Commercial" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgVibranium("2.png"), orientation: "landscape" },
      { src: imgVibranium("3.png"), orientation: "portrait"  },
      { src: imgVibranium("4.png"), orientation: "landscape" },
      { src: imgVibranium("5.png"), orientation: "landscape" },
      { src: imgVibranium("6.png"), orientation: "landscape" },
      { src: imgVibranium("7.png"), orientation: "landscape" },
      { src: imgVibranium("8.png"), orientation: "landscape" },
    ],
  },
  {
    slug: "chanpatna",
    index: "06",
    title: "Chanpatna",
    category: "Architecture",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-green-50",
    color: "#f0fdf4",

    cover: imgChanpatna("1.png"),
    hero:  imgChanpatna("1.png"),

    images: [
      { src: imgChanpatna("2.png"), orientation: "landscape" },
      { src: imgChanpatna("3.png"), orientation: "landscape" },
      { src: imgChanpatna("4.png"), orientation: "landscape" },
      { src: imgChanpatna("5.png"), orientation: "landscape" },
      { src: imgChanpatna("6.png"), orientation: "portrait"  },
    ],
  },
  {
    slug: "karjat",
    index: "07",
    title: "Karjat",
    category: "Architecture",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-stone-100",
    color: "#f5f5f4",

    cover: imgKarjat("1.png"),
    hero:  imgKarjat("1.png"),

    images: [
      { src: imgKarjat("2.png"), orientation: "portrait"  },
      { src: imgKarjat("3.png"), orientation: "landscape" },
      { src: imgKarjat("4.png"), orientation: "landscape" },
      { src: imgKarjat("5.png"), orientation: "portrait"  },
    ],
  },
  {
    slug: "rajankunte",
    index: "08",
    title: "Rajankunte",
    category: "Architecture",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-yellow-50",
    color: "#fefce8",

    cover: imgRajankunte("1.png"),
    hero:  imgRajankunte("1.png"),

    images: [
      { src: imgRajankunte("2.png"), orientation: "portrait"  },
      { src: imgRajankunte("3.png"), orientation: "landscape" },
      { src: imgRajankunte("4.png"), orientation: "landscape" },
      { src: imgRajankunte("5.png"), orientation: "landscape" },
      { src: imgRajankunte("6.png"), orientation: "landscape" },
      { src: imgRajankunte("7.png"), orientation: "landscape" },
    ],
  },
  {
    slug: "rmk",
    index: "09",
    title: "RmK",
    category: "Architecture",
    location: "—",
    year: "—",
    size: "—",
    aspect: "landscape",
    bg: "bg-neutral-200",
    color: "#e5e5e5",

    cover: imgRmK("1.jpg"),
    hero:  imgRmK("1.jpg"),

    images: [
      { src: imgRmK("2.jpg"), orientation: "landscape" },
      { src: imgRmK("4.jpg"), orientation: "landscape" },
      { src: imgRmK("5.jpg"), orientation: "landscape" },
      { src: imgRmK("6.jpg"), orientation: "landscape" },
      { src: imgRmK("7.jpg"), orientation: "landscape" },
      { src: imgRmK("8.jpg"), orientation: "landscape" },
      { src: imgRmK("9.jpg"), orientation: "landscape" },
    ],
  },
];
