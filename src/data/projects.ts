import blurUrls from "./blurDataUrls.json";

const B = blurUrls as Record<string, string>;

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
  blur?: string;
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

function imgGodrej(filename: string): string {
  return `/Projects/Godrej/${encodeURIComponent(filename)}`;
}

function imgRajiv(filename: string): string {
  return `/Projects/Rajiv/${encodeURIComponent(filename)}`;
}

function imgVilla1(filename: string): string {
  return `/Projects/Villa%201/${encodeURIComponent(filename)}`;
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
    blur:  B["public/Projects/Emb Pristine / 1 Foyer.jpg"],

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
    blur:  B["public/Projects/Kishore Residence/1.jpg"],

    description: [
      "This residence is envisioned as a calm, materially rich home where every space flows into the next with quiet intention. Guided by a Japandi sensibility with subtle Indian nuances, the design relies on lime-washed surfaces, warm natural wood, and a soft palette of neutrals and pastels to create an atmosphere of ease and refinement. The materiality is tactile yet restrained, allowing the architecture and custom-crafted elements to take centre stage.",
      "The planning follows an open, unobstructed layout that emphasises visual continuity. Rooms are connected through clean sightlines, muted tones, and consistent detailing rather than partitions, giving the home an expansive and harmonious character. Custom-made furniture forms a major part of the design language — each piece meticulously crafted with crisp profiles, balanced proportions, and a quiet elegance that complements the architecture instead of overpowering it.",
      "Subtle spatial gestures enhance the home's experience, such as the curved ceiling that marks the transition from the hallway into the main living zones, softening movement and grounding the circulation. Throughout the residence, the interplay of light, texture, and warm wood accents creates a serene rhythm, resulting in an interior that feels cohesive, calm, and deeply connected to its material palette.",
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
    blur:  B["public/Projects/Uber Residence/1.jpg"],

    description: [
      "This project began with a clear brief: to make an existing apartment safer and more comfortable for a retired couple, without allowing it to feel institutional. The response is a home shaped by quiet precision, where ease of use is embedded into every decision — from material choices underfoot to the calibration of everyday heights and reach.",
      "A restrained palette of warm whites, soft creams, and muted taupe forms the base, layered with sage green furniture and teak woodwork to bring depth and familiarity. Brass hardware and natural materials lend a sense of warmth and permanence, reinforcing an unhurried, lived-in quality.",
      "This approach extends into the more private spaces, where the master bedroom is conceived as a calm, intuitive environment — prioritising ease of movement, clear access, and a sense of restful enclosure without excess.",
      "Rather than relying on overt gestures, the design focuses on subtle interventions that support daily life, balancing accessibility with comfort and practicality with a sense of home.",
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

    cover: imgTapTales("1.jpg"),
    hero:  imgTapTales("1.jpg"),
    blur:  B["public/Projects/Tap Tales/1.jpg"],

    description: [
      "Tap Tales articulates a refined interplay between industrial honesty and crafted warmth, where material precision shapes the spatial identity. The interior composition layers exposed concrete textures, oxidised metal finishes, and corrugated steel railings to create a tactile, structurally expressive environment. Warm timber surfaces and muted upholstery temper the palette's rawness, while a calibrated lighting strategy — from suspended geometric pendants to concealed linear profiles — defines depth, hierarchy, and texture. Each element, from surface treatment to furniture detailing, reinforces a cohesive architectural language grounded in proportion, balance, and understated sophistication.",
      "Across multiple levels, the design maintains continuity through perforated metal screens, corrugated inserts, and an earthy tonal base, punctuated by moments of deliberate contrast. A graphic mural wall on the upper floor introduces vibrancy and movement, creating a visual anchor within the spatial sequence. The integration of greenery and diffused illumination softens the industrial framework, enriching the spatial experience while preserving its structural clarity. Tap Tales reflects a contemporary architectural ethos — one that celebrates material integrity, atmospheric control, and the precision of crafted detail.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Commercial" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgTapTales("2.jpg"),             orientation: "landscape" },
      { src: imgTapTales("3.jpg"),             orientation: "landscape" },
      { src: imgTapTales("Copy of 10.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 11.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 14.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 15.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 16.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 18.jpg"),    orientation: "landscape" },
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

    cover: imgVibranium("1.jpg"),
    hero:  imgVibranium("1.jpg"),
    blur:  B["public/Projects/Vibranium/1.jpg"],

    description: [
      "Vibranium Ventures' office embodies a refined architectural narrative where spatial fluidity, material depth, and controlled lighting converge to create a sophisticated work environment. The layout is organised around a seamless circulation spine defined by curved walls and transparent partitions, allowing light to flow naturally across zones. A tactile palette of wood, glass, and textured wall treatments establishes warmth and balance, while elements like the green glass-block partition and fluted panelling introduce rhythm and contrast. The interplay of opacity and translucency ensures spatial hierarchy without rigid separation, reinforcing an open yet structured plan that encourages collaboration and focus alike.",
      "Material articulation is central to the design language. The use of deep-toned fluted walls, brushed brass detailing, and sculptural furniture lends a sense of permanence and precision, while organic rugs, layered lighting, and natural finishes soften the geometry. Every junction — from the curved glazing to the recessed coves — is resolved with clarity, highlighting the craftsmanship and coherence in detailing. The overall experience is one of modern restraint: an office that translates Vibranium Ventures' contemporary identity into a spatial expression of elegance, efficiency, and quiet confidence.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Commercial" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Pallath" },
    ],

    images: [
      { src: imgVibranium("2.jpg"), orientation: "landscape" },
      { src: imgVibranium("3.jpg"), orientation: "portrait"  },
      { src: imgVibranium("4.jpg"), orientation: "landscape" },
      { src: imgVibranium("5.jpg"), orientation: "landscape" },
      { src: imgVibranium("6.jpg"), orientation: "landscape" },
      { src: imgVibranium("7.jpg"), orientation: "landscape" },
      { src: imgVibranium("8.jpg"), orientation: "landscape" },
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

    cover: imgChanpatna("1.jpg"),
    hero:  imgChanpatna("1.jpg"),
    blur:  B["public/Projects/Chanpatna/1.jpg"],

    images: [
      { src: imgChanpatna("2.jpg"), orientation: "landscape" },
      { src: imgChanpatna("3.jpg"), orientation: "landscape" },
      { src: imgChanpatna("4.jpg"), orientation: "landscape" },
      { src: imgChanpatna("5.jpg"), orientation: "landscape" },
      { src: imgChanpatna("6.jpg"), orientation: "portrait"  },
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

    cover: imgKarjat("1.jpg"),
    hero:  imgKarjat("1.jpg"),
    blur:  B["public/Projects/Karjat/1.jpg"],

    images: [
      { src: imgKarjat("2.jpg"), orientation: "portrait"  },
      { src: imgKarjat("3.jpg"), orientation: "landscape" },
      { src: imgKarjat("4.jpg"), orientation: "landscape" },
      { src: imgKarjat("5.jpg"), orientation: "portrait"  },
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

    cover: imgRajankunte("1.jpg"),
    hero:  imgRajankunte("1.jpg"),
    blur:  B["public/Projects/Rajankunte/1.jpg"],

    images: [
      { src: imgRajankunte("2.jpg"), orientation: "portrait"  },
      { src: imgRajankunte("3.jpg"), orientation: "landscape" },
      { src: imgRajankunte("4.jpg"), orientation: "landscape" },
      { src: imgRajankunte("5.jpg"), orientation: "landscape" },
      { src: imgRajankunte("6.jpg"), orientation: "landscape" },
      { src: imgRajankunte("7.jpg"), orientation: "landscape" },
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
    blur:  B["public/Projects/RmK/1.jpg"],

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
  {
    slug: "godrej",
    index: "10",
    title: "Godrej United",
    category: "Interiors",
    location: "Whitefield, Bengaluru",
    year: "—",
    size: "1,500 sq ft",
    aspect: "portrait",
    bg: "bg-teal-50",
    color: "#f0fdfa",

    cover: imgGodrej("1.jpg"),
    hero:  imgGodrej("1.jpg"),
    blur:  B["public/Projects/Godrej/1.jpg"],

    description: [
      "Set on the 16th floor of a high-rise, this 3BHK apartment is a striking blend of modern minimalism, mid-century charm, and personal expression. Designed as a canvas of storytelling through space, the home beautifully balances sleek forms with bold colour, warmth, and lived-in comfort. The open living and dining area forms the vibrant heart — anchored by an eye-catching mustard yellow sofa, olive green wall panels, and rust-orange dining chairs. Furniture and lighting nod to mid-century modern design throughout, with teak wood finishes bringing cohesion and quiet elegance.",
      "A standout intervention is the reimagined kitchen partition: the original static divide was replaced with a collapsible teak panel, adding both flexibility and a sense of connection. The children's bedroom embraces a light, whimsical feel with a custom bunk bed framed by soft-toned carpentry and playful wallpaper. The master bedroom offers a serene, restorative palette — a fluted teak wall panel behind the bed brings visual texture, while rust-toned accents and a floating dressing-study unit blend beauty with functionality.",
      "The clients' openness to colour and character resulted in a home that perfectly reflects their warm, vibrant personalities. With one half of the couple a trained architect, the process was built on trust and clear intent — making this a truly collaborative and delightful experience.",
    ],

    credits: [
      { label: "Lead Designer",    value: "Shashank Shetty" },
      { label: "Category",         value: "Residential" },
      { label: "Junior Designer",  value: "Lakshmi S Nair" },
      { label: "Status",           value: "Completed" },
      { label: "Photographer",     value: "Roshan Paliath" },
    ],

    images: [
      { src: imgGodrej("2.jpg"),  orientation: "portrait" },
      { src: imgGodrej("3.jpg"),  orientation: "portrait" },
      { src: imgGodrej("4.jpg"),  orientation: "portrait" },
      { src: imgGodrej("5.jpg"),  orientation: "portrait" },
      { src: imgGodrej("6.jpg"),  orientation: "portrait" },
      { src: imgGodrej("7.jpg"),  orientation: "portrait" },
      { src: imgGodrej("8.jpg"),  orientation: "portrait" },
      { src: imgGodrej("9.jpg"),  orientation: "portrait" },
      { src: imgGodrej("10.jpg"), orientation: "portrait" },
      { src: imgGodrej("11.jpg"), orientation: "portrait" },
    ],
  },
  {
    slug: "rajiv-residence",
    index: "11",
    title: "Rajiv Residence",
    category: "Interiors",
    location: "Zion Hill, Bengaluru",
    year: "—",
    size: "—",
    aspect: "portrait",
    bg: "bg-rose-50",
    color: "#fff1f2",

    cover: imgRajiv("1.jpg"),
    hero:  imgRajiv("1.jpg"),
    blur:  B["public/Projects/Rajiv/1.jpg"],

    description: [
      "Set against the calm expanse of Zion Hill's landscape, this residence unfolds as a contemporary sanctuary where sculptural form, custom craftsmanship, and nature-driven palettes work in effortless harmony. The living and dining areas establish the home's design language — a symphony of curved furniture, ribbed textures, muted neutrals, and controlled bursts of blue and green that echo the terrain outside. A caramel-toned bespoke sofa anchors the living room, complemented by marble-topped tables, organic decor, and a hand-tufted rug that mimics topographical patterns. The kitchen introduces a bolder visual moment: sage green cabinetry paired with herringbone tiles and patterned flooring, framed by fluted-glass and metal partitions that add architectural rhythm while keeping the space light and open.",
      "As the home transitions into its more private zones, the palette deepens into quieter, textural expressions of comfort. The bedrooms are styled in soft neutrals and warm wood, where tufted headboards, ribbed wall panels, and woven textiles create a sense of intimacy. A dedicated bar lounge sits between the social and private wings — layered with modern bar furniture, a sculptural console, curated collectibles, and subtle golf-inspired decor nodding to the community's identity. Across the home, custom furniture pieces anchor each room with intention, while diffused daylight, generous greenery, and thoughtful details bring a sense of lived-in elegance.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Residential" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
    ],

    images: [
      { src: imgRajiv("2.jpg"), orientation: "portrait"  },
      { src: imgRajiv("3.jpg"), orientation: "landscape" },
      { src: imgRajiv("4.jpg"), orientation: "portrait"  },
      { src: imgRajiv("5.jpg"), orientation: "portrait"  },
      { src: imgRajiv("6.jpg"), orientation: "portrait"  },
      { src: imgRajiv("7.jpg"), orientation: "portrait"  },
      { src: imgRajiv("8.jpg"), orientation: "portrait"  },
      { src: imgRajiv("9.jpg"), orientation: "portrait"  },
    ],
  },
  {
    slug: "villa-1",
    index: "12",
    title: "Villa 1",
    category: "Architecture",
    location: "Bangalore",
    year: "—",
    size: "—",
    aspect: "portrait",
    bg: "bg-orange-50",
    color: "#fff7ed",

    cover: imgVilla1("1.jpg"),
    hero:  imgVilla1("1.jpg"),
    blur:  B["public/Projects/Villa 1/1.jpg"],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Category",         value: "Architecture" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Status",           value: "Completed" },
    ],

    images: [
      { src: imgVilla1("2.jpg"),  orientation: "portrait" },
      { src: imgVilla1("3.jpg"),  orientation: "portrait" },
      { src: imgVilla1("4.jpg"),  orientation: "portrait" },
      { src: imgVilla1("5.jpg"),  orientation: "portrait" },
      { src: imgVilla1("6.jpg"),  orientation: "portrait" },
      { src: imgVilla1("7.jpg"),  orientation: "portrait" },
      { src: imgVilla1("8.jpg"),  orientation: "portrait" },
      { src: imgVilla1("9.jpg"),  orientation: "portrait" },
      { src: imgVilla1("10.jpg"), orientation: "portrait" },
      { src: imgVilla1("11.jpg"), orientation: "portrait" },
      { src: imgVilla1("12.jpg"), orientation: "portrait" },
      { src: imgVilla1("13.jpg"), orientation: "portrait" },
      { src: imgVilla1("14.jpg"), orientation: "portrait" },
      { src: imgVilla1("15.jpg"), orientation: "portrait" },
      { src: imgVilla1("16.jpg"), orientation: "portrait" },
      { src: imgVilla1("17.jpg"), orientation: "portrait" },
    ],
  },
];
