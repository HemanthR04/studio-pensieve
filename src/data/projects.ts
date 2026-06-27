import blurUrls from "./blurDataUrls.json";

const B = blurUrls as Record<string, string>;

export type ProjectImage = {
  src: string;
  orientation: "portrait" | "landscape";
  caption?: string;              // solo portrait: text to the right
  captionAlign?: "top" | "center" | "bottom";
  pairedCaption?: string[];      // paragraphs shown below the group
  layout?: "duo" | "quad" | "trio"; // grouping layout (default: duo)
};

export type ProjectCredit = {
  label: string;
  value: string; // supports newlines with \n
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
  coverPosition?: string;      // CSS object-position for cover/grid thumbnails
  hero?: string;
  heroPosition?: string;       // CSS object-position for the hero banner image
  blur?: string;
  description?: string[];     // paragraphs
  credits?: ProjectCredit[];
  images?: ProjectImage[];
};

function img(filename: string): string {
  return `/Projects/Vana/${encodeURIComponent(filename)}`;
}

function imgKishore(filename: string): string {
  return `/Projects/Lime%20%26%20Light%20Residence/${encodeURIComponent(filename)}`;
}

function imgUber(filename: string): string {
  return `/Projects/Mana/${encodeURIComponent(filename)}`;
}

function imgTapTales(filename: string): string {
  return `/Projects/Tap%20Tales/${encodeURIComponent(filename)}`;
}

function imgVibranium(filename: string): string {
  return `/Projects/Vibranium%20Office/${encodeURIComponent(filename)}`;
}

function imgChanpatna(filename: string): string {
  return `/Projects/Verandah%20House/${encodeURIComponent(filename)}`;
}

function imgKarjat(filename: string): string {
  return `/Projects/Twin%20Roof%20Farmhouse/${encodeURIComponent(filename)}`;
}

function imgRajankunte(filename: string): string {
  return `/Projects/Adapted%20House/${encodeURIComponent(filename)}`;
}

function imgRmK(filename: string): string {
  return `/Projects/RMK%20Antheia/${encodeURIComponent(filename)}`;
}

function imgGodrej(filename: string): string {
  return `/Projects/Olive%20House/${encodeURIComponent(filename)}`;
}

function imgRajiv(filename: string): string {
  return `/Projects/Zion%20House/${encodeURIComponent(filename)}`;
}

function imgVilla1(filename: string): string {
  return `/Projects/Villa%201/${encodeURIComponent(filename)}`;
}

function imgEstate(filename: string): string {
  return `/Projects/Estate%20Retreat/${encodeURIComponent(filename)}`;
}

export const projects: Project[] = [
  // ── 1. Vana ─────────────────────────────────────────────────────────────
  {
    slug: "emb-pristine",
    index: "01",
    title: "Vana",
    category: "Renovation + Interiors",
    location: "Bengaluru",
    year: "2024",
    size: "2,100 sq ft",
    aspect: "landscape",
    bg: "bg-stone-200",
    color: "#e7e5e4",

    cover: img("8 Living room.jpg"),
    hero:  img(" 1 Foyer.jpg"),
    blur:  B["public/Projects/Vana/ 1 Foyer.jpg"],

    description: [
      "This pre-owned 3BHK apartment, overlooking expansive forest views, was reimagined as a calm, contemporary home rooted in an Indian-modern sensibility. The design prioritises simplicity, function, and a strong connection to its surroundings.",
      "The brief was clear — avoid excess, focus on what is necessary, and create a space that would age well. The resulting palette is restrained and earthy, with brick, wood, cane, whites, and muted greens, layered over a cement-finish floor.",
      "Subtle textures and patterns add depth without drawing attention, allowing the home to remain quiet, grounded, and closely tied to the landscape beyond.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Photographer",     value: "Roshan Paliath" },
    ],

    images: [
      { src: img(" 2 Foyer.jpg"),              orientation: "portrait",  caption: "The entry was reworked to create a functional foyer from an underutilised utility space. Teak-shutter storage, open shelves, and a floating bench bring clarity, utility, and ease to the transition into the home." },
      { src: img(" 3 Dining area.jpg"),        orientation: "portrait"  },
      { src: img(" 4 Dining area.jpg"),        orientation: "portrait"  },
      { src: img("5 Crockery Bar.jpg"),        orientation: "portrait"  },
      { src: img("6 Living room.jpg"),         orientation: "portrait",  caption: "The living room is oriented around conversation and the view, with no television interrupting the space. Teak and cane furniture set a warm, tactile base, while lighting combines functional fixtures with pieces sourced locally. Subtle Indian influences come through in the decor, fabrics, and artwork, many commissioned directly from rural artisans, reflecting a conscious effort to support craft at its source." },
      { src: img("7 Living room.jpg"),         orientation: "landscape", caption: "Instead of enclosing the small balcony to expand the living room, it was extended by combining it with the adjacent library and TV area. An L-shaped glass enclosure defines it from the living and dining spaces while keeping it visually connected." },
      { src: img("8 Living room.jpg"),         orientation: "landscape", caption: "The brick-clad wall from the dining area continues into the balcony, creating a strong horizontal link between spaces. A dining table runs parallel to a floating wooden unit that functions as a cutlery and bar counter, with additional ledges reinforcing the linear composition." },
      { src: img("9 Balcony + Dining.jpg"),    orientation: "landscape" },
      { src: img("9 Balcony + Dining(1).jpg"), orientation: "landscape" },
      { src: img("10 Guest room_study.jpg"),   orientation: "portrait"  },
      { src: img("11 Living + Dining.jpg"),    orientation: "portrait"  },
      { src: img("12 Kitchen.jpg"),            orientation: "portrait",  pairedCaption: ["The membrane-finish kitchen is kept simple, with Shaker-style base shutters and wall units in white frames with ribbed glass. Black granite countertops paired with a Statuario backsplash bring the palette together."] },
      { src: img("13 Kitchen.jpg"),            orientation: "portrait"  },
      { src: img("14 Son_s room.jpg"),         orientation: "portrait"  },
      { src: img("16 Son_s room.jpg"),         orientation: "landscape" },
      { src: img("17 Master bedroom.jpg"),     orientation: "portrait",  pairedCaption: ["The master bedroom pairs a teak-beaded wardrobe with a storage bed and an antique side table, while a repurposed dining table forms a long study desk opposite. Indian patterns in the wallpaper and blinds add character, with cane-woven shutters on the TV console introducing texture."] },
      { src: img("18 Master bedroom.jpg"),     orientation: "portrait"  },
      { src: img("19 Son_s bathroom.jpg"),     orientation: "portrait"  },
      { src: img("20 Study bathroom.jpg"),     orientation: "portrait"  },
      { src: img("21 Master bedroom.jpeg"),    orientation: "landscape" },
    ],
  },
  // ── 2. Adapted House ────────────────────────────────────────────────────
  {
    slug: "rajankunte",
    index: "08",
    title: "Adapted House",
    category: "Adaptive Reuse + Architecture",
    location: "Rajankunte",
    year: "2025",
    size: "3,800 sq ft",
    aspect: "landscape",
    bg: "bg-yellow-50",
    color: "#fefce8",

    cover: imgRajankunte("3.jpg"),
    coverPosition: "center 75%",
    hero:  imgRajankunte("1.jpg"),
    heroPosition: "center 85%",
    blur:  B["public/Projects/Adapted House/1.jpg"],

    description: [
      "Set on a quiet plot in Rajankunte, this 3,800 sq.ft. home reworks an existing structure into a larger, more contemporary residence — retaining its original brick shell and extending it with new volumes in board-formed concrete and timber.",
      "Steep, gabled roofs echo the language of the original house, reinterpreted at a larger scale across two storeys. Deep balconies wrap the brick facade, softened over time by trailing creepers, while a folded concrete portico marks the entry and anchors the composition.",
      "Set back amid mature trees and open lawns, the house balances old and new, holding onto the character of what existed while opening it up to light, air, and the surrounding landscape.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode" },
    ],

    images: [
      { src: imgRajankunte("2.jpg"), orientation: "portrait"  },
      { src: imgRajankunte("3.jpg"), orientation: "landscape" },
      { src: imgRajankunte("4.jpg"), orientation: "landscape" },
      { src: imgRajankunte("5.jpg"), orientation: "landscape" },
      { src: imgRajankunte("6.jpg"), orientation: "landscape" },
      { src: imgRajankunte("7.jpg"), orientation: "landscape" },
    ],
  },
  // ── 3. RMK Antheia ──────────────────────────────────────────────────────
  {
    slug: "rmk",
    index: "09",
    title: "RMK Antheia",
    category: "Architecture",
    location: "Karnataka",
    year: "2023",
    size: "11 Acres",
    aspect: "landscape",
    bg: "bg-neutral-200",
    color: "#e5e5e5",

    cover: imgRmK("4.jpg"),
    hero:  imgRmK("1.jpg"),
    blur:  B["public/Projects/RMK Antheia/1.jpg"],

    description: [
      "RMK Antheia is an 11-acre landscape-led residential masterplan rooted in the site's ecology and history. At its heart, an existing stone retaining water tank is re-adapted into a central open-air theatre and community space. Carefully introduced punctures through the original walls preserve the memory of the site while creating visual and physical connections to the new development.",
      "The masterplan is woven around existing mango trees, with shaded streets, pedestrian pathways, water edges, and social spaces encouraging a slower, nature-oriented living experience.",
      "The entrance gateway establishes the project's identity through exposed concrete forms and a corten steel canopy with geometric cut-outs that filter light and shadow across the arrival space. This geometric language subtly extends into adjoining concrete walls, creating a cohesive architectural expression.",
      "Using a restrained palette of exposed concrete, natural stone, weathered metal, and tropical planting, the project draws from contemporary tropical architecture principles to create a climate-responsive residential environment deeply connected to its landscape and history.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode\nSharanya Shivashankar" },
    ],

    images: [
      { src: imgRmK("2.jpg"), orientation: "landscape" },
      { src: imgRmK("3.jpg"), orientation: "landscape" },
      { src: imgRmK("4.jpg"), orientation: "landscape" },
      { src: imgRmK("5.jpg"), orientation: "landscape" },
      { src: imgRmK("6.jpg"), orientation: "landscape" },
      { src: imgRmK("7.jpg"), orientation: "landscape" },
      { src: imgRmK("8.jpg"), orientation: "landscape" },
    ],
  },
  // ── 4. Lime & Light Residence ───────────────────────────────────────────
  {
    slug: "kishore-residence",
    index: "02",
    title: "Lime & Light Residence",
    category: "Interiors",
    location: "Bengaluru",
    year: "2025",
    size: "1,700 sq ft",
    aspect: "portrait",
    bg: "bg-orange-50",
    color: "#fff7ed",

    cover: imgKishore("2.jpg"),
    hero:  imgKishore("2.jpg"),
    blur:  B["public/Projects/Lime & Light Residence/2.jpg"],

    description: [
      "This residence is conceived as a calm, materially rich home where spaces unfold with quiet continuity. Guided by a Japandi sensibility and subtle Indian nuances, the design balances restraint with warmth, letting material, light, and proportion shape the experience.",
      "Lime-washed surfaces, natural wood, and a soft palette of neutrals and muted pastels create a tactile, understated base. Character emerges through consistency of tone, detail, and craft rather than overt gestures.",
      "The planning remains open and fluid. Spaces connect through shifts in material, light, and geometry instead of walls, resulting in a home that feels cohesive, expansive, and quietly intentional.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu\nLakshmi S Nair" },
      { label: "Photographer",     value: "Roshan Paliath" },
    ],

    images: [
      { src: imgKishore("2.jpg"),       orientation: "portrait", layout: "quad", pairedCaption: ["The living space is defined by a soft, earthy palette, with olive greens and warm beiges set against textured lime-washed walls. Low, linear furniture keeps the room open while retaining a sense of intimacy.", "Custom pieces are carefully proportioned to feel light yet grounded. Black accents add contrast, while indoor planting softens the composition.", "A vertical wood panel anchors the seating area, defining the space without disrupting flow. Designed as a movable element, it introduces a subtle sense of drama."] },
      { src: imgKishore("3.jpg"),       orientation: "portrait" },
      { src: imgKishore("4.jpg"),       orientation: "portrait" },
      { src: imgKishore("5 gif.1.jpg"), orientation: "portrait" },
      { src: imgKishore("6.jpg"),       orientation: "portrait", caption: "The dining area continues the home's earthy material language. A solid wood table is paired with black-framed armchairs upholstered in natural linen, their squared geometry echoing the graphic lattice screen that divides the dining and passage zones. Antique-finish ceramic vessels and taper candles complete the tableau.", captionAlign: "center" },
      { src: imgKishore("7.jpg"),       orientation: "portrait", layout: "trio", pairedCaption: ["The bedrooms continue a restrained language, shifting toward softer textures and more personal expression.", "Material transitions from wood to fabric to wall finish remain subtle and cohesive. Cane inserts, pastel wardrobes, and upholstered elements add variation without disrupting the calm.", "Compact study niches and integrated storage maintain clarity, ensuring utility does not clutter the space."] },
      { src: imgKishore("8.jpg"),       orientation: "portrait" },
      { src: imgKishore("9.jpg"),       orientation: "portrait" },
      { src: imgKishore("10.jpg"),      orientation: "portrait" },
      { src: imgKishore("11.jpg"),      orientation: "portrait" },
    ],
  },
  // ── 5. Tap Tales ────────────────────────────────────────────────────────
  {
    slug: "tap-tales",
    index: "04",
    title: "Tap Tales",
    category: "Interiors",
    location: "Bengaluru",
    year: "2024",
    size: "2,000 sq ft",
    aspect: "landscape",
    bg: "bg-amber-50",
    color: "#fffbeb",

    cover: imgTapTales("2.jpg"),
    hero:  imgTapTales("1.jpg"),
    blur:  B["public/Projects/Tap Tales/1.jpg"],

    description: [
      "Tap Tales articulates a refined interplay between industrial honesty and crafted warmth, where material precision shapes the spatial identity. The interior composition layers exposed concrete textures, oxidised metal finishes, and corrugated steel railings to create a tactile, structurally expressive environment. Warm timber surfaces and muted upholstery temper the palette's rawness, while a calibrated lighting strategy — from suspended geometric pendants to concealed linear profiles — defines depth, hierarchy, and texture. Each element, from surface treatment to furniture detailing, reinforces a cohesive architectural language grounded in proportion, balance, and understated sophistication.",
      "Across multiple levels, the design maintains continuity through perforated metal screens, corrugated inserts, and an earthy tonal base, punctuated by moments of deliberate contrast. A graphic mural wall on the upper floor introduces vibrancy and movement, creating a visual anchor within the spatial sequence. The integration of greenery and diffused illumination softens the industrial framework, enriching the spatial experience while preserving its structural clarity. Tap Tales reflects a contemporary architectural ethos — one that celebrates material integrity, atmospheric control, and the precision of crafted detail.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Lakshmi S Nair" },
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
  // ── remaining projects ───────────────────────────────────────────────────
  {
    slug: "rajiv-residence",
    index: "11",
    title: "Zion House",
    category: "Interiors",
    location: "Kolar",
    year: "2024",
    size: "3,500 sq ft",
    aspect: "portrait",
    bg: "bg-rose-50",
    color: "#fff1f2",

    cover: imgRajiv("1.jpg"),
    hero:  imgRajiv("1.jpg"),
    blur:  B["public/Projects/Zion House/1.jpg"],

    description: [
      "Set in the quiet landscape of Zion Hills, this weekend home is designed as a place to slow down.",
      "The planning keeps spaces open and connected, allowing the living, dining, and kitchen to flow into each other. A consistent palette of warm wood, textured walls, stone, and muted greens and blues draws from the surroundings and keeps the home grounded.",
      "Custom furniture and built-ins bring clarity without overcomplicating the space. As the house moves into private areas, the mood becomes softer and more relaxed.",
      "The focus is simple: create a home that feels calm, easy, and removed from the pace of the city.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Photographer",     value: "Roshan Paliath" },
    ],

    images: [
      { src: imgRajiv("2.jpg"), orientation: "portrait",  caption: "The dining table is conceived as a sculptural piece, with a solid base supporting a stone top. Its weight and materiality ground the space, balancing the softness of light, fabric, and surrounding elements." },
      { src: imgRajiv("3.jpg"), orientation: "landscape", caption: "A relaxed living space shaped by soft curves and quiet materiality. The furniture takes cues from the rolling topography of the golf course beyond, translating it into gentle forms, muted tones, and an easy, unhurried atmosphere." },
      { src: imgRajiv("4.jpg"), orientation: "portrait",  pairedCaption: ["The kitchen is defined by muted green cabinetry and textured tiles, framed by fluted glass partitions that keep the space open yet contained."] },
      { src: imgRajiv("5.jpg"), orientation: "portrait"  },
      { src: imgRajiv("6.jpg"), orientation: "portrait"  },
      { src: imgRajiv("7.jpg"), orientation: "portrait"  },
      { src: imgRajiv("8.jpg"), orientation: "portrait",  pairedCaption: ["Layered in warm neutrals and natural textures, the bedroom is designed for ease. Upholstered surfaces, soft drapery, and integrated storage keep the space calm and uncluttered."] },
      { src: imgRajiv("9.jpg"), orientation: "portrait"  },
    ],
  },
  {
    slug: "vibranium-ventures",
    index: "05",
    title: "Vibranium Office",
    category: "Interiors",
    location: "Bengaluru",
    year: "2025",
    size: "1,850 sq ft",
    aspect: "landscape",
    bg: "bg-zinc-300",
    color: "#d4d4d8",

    cover: imgVibranium("1.jpg"),
    hero:  imgVibranium("1.jpg"),
    blur:  B["public/Projects/Vibranium Office/1.jpg"],

    description: [
      "Vibranium Ventures' office embodies a refined architectural narrative where spatial fluidity, material depth, and controlled lighting converge to create a sophisticated work environment. The layout is organised around a seamless circulation spine defined by curved walls and transparent partitions, allowing light to flow naturally across zones. A tactile palette of wood, glass, and textured wall treatments establishes warmth and balance, while elements like the green glass-block partition and fluted panelling introduce rhythm and contrast. The interplay of opacity and translucency ensures spatial hierarchy without rigid separation, reinforcing an open yet structured plan that encourages collaboration and focus alike.",
      "Material articulation is central to the design language. The use of deep-toned fluted walls, brushed brass detailing, and sculptural furniture lends a sense of permanence and precision, while organic rugs, layered lighting, and natural finishes soften the geometry. Every junction — from the curved glazing to the recessed coves — is resolved with clarity, highlighting the craftsmanship and coherence in detailing. The overall experience is one of modern restraint: an office that translates Vibranium Ventures' contemporary identity into a spatial expression of elegance, efficiency, and quiet confidence.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Lakshmi S Nair" },
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
    title: "Verandah House",
    category: "Architecture",
    location: "Channapattana",
    year: "2024",
    size: "2,900 sq ft",
    aspect: "landscape",
    bg: "bg-green-50",
    color: "#f0fdf4",

    cover: imgChanpatna("1.jpg"),
    hero:  imgChanpatna("1.jpg"),
    blur:  B["public/Projects/Verandah House/1.jpg"],

    description: [
      "Located in Channapatna, this 2,400 sq.ft. farmhouse is conceived as a quiet retreat within a working rural landscape. The house takes on a linear form, aligning with the site to maintain continuous visual engagement with the surrounding fields.",
      "A fluid ground floor brings together living, dining, and kitchen spaces within a double-height volume that extends into a long, shaded porch, mediating between interior and landscape. Above, bedrooms open into balconies carved within sloping, Mangalore-tiled roofs, framing expansive views.",
      "Rooted in vernacular references yet restrained in expression, the architecture combines lime-washed surfaces, stone, and brick with subtle contemporary detailing. The project ultimately prioritizes immersion, creating a built form that remains open, porous, and deeply connected to its setting.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode" },
    ],

    images: [
      { src: imgChanpatna("1.jpg"), orientation: "landscape", caption: "The shaded porch runs along the length of the house, acting as a climatic and spatial buffer. It creates a threshold where interior life gradually transitions into the openness of the fields." },
      { src: imgChanpatna("2.jpg"), orientation: "landscape", caption: "A low, linear form stretches along the site, allowing the surrounding farmland to remain uninterrupted and visually dominant. The staggered sloping roofs establish a strong horizontal identity while subtly breaking the massing." },
      { src: imgChanpatna("3.jpg"), orientation: "landscape", caption: "The double-height living space anchors the ground floor, bringing volume and light into the core of the house. Large openings ensure the interior remains visually porous, extending toward the landscape." },
      { src: imgChanpatna("4.jpg"), orientation: "landscape", caption: "Lime-plastered fins line the corridor, forming a sequence of arched openings. These layered thresholds filter light and create depth, mediating between movement and enclosure." },
      { src: imgChanpatna("5.jpg"), orientation: "landscape", caption: "Balconies are carved into the sloping roof, creating shaded outdoor extensions for the upper rooms. They frame long views across the farmland while softening the overall mass of the structure." },
      { src: imgChanpatna("6.jpg"), orientation: "portrait",  caption: "A restrained material palette of stone, lime, and brick reinforces a grounded, tactile quality. Subtle contemporary elements introduce precision, complementing the otherwise vernacular character." },
    ],
  },
  {
    slug: "villa-1",
    index: "12",
    title: "Villa 1",
    category: "Interiors",
    location: "Bengaluru",
    year: "2023",
    size: "2,900 sq ft",
    aspect: "portrait",
    bg: "bg-orange-50",
    color: "#fff7ed",

    cover: imgVilla1("2.jpg"),
    hero:  imgVilla1("2.jpg"),
    blur:  B["public/Projects/Villa 1/2.jpg"],

    description: [
      "Set within Bangalore's urban context, this home is conceived as a calm, contemporary space. A minimal approach guides the design, with clean lines, open planning, and a restrained use of colour.",
      "Each space is carefully composed, where furniture and built-ins serve both functional and sculptural roles. The palette remains subtle, allowing material and proportion to take precedence.",
      "Natural light is central to the experience, opening up the interiors. The result is a home that feels open, balanced, and thoughtfully put together.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Photographer",     value: "Nayan Soni" },
    ],

    images: [
      { src: imgVilla1("3.jpg"),  orientation: "portrait", layout: "trio", pairedCaption: ["The living and dining areas are designed to feel warm, comfortable, and easy to use. Furniture balances softness with function, creating spaces that are both practical and inviting."] },
      { src: imgVilla1("4.jpg"),  orientation: "portrait" },
      { src: imgVilla1("5.jpg"),  orientation: "portrait" },
      { src: imgVilla1("6.jpg"),  orientation: "portrait", caption: "Tucked beneath the staircase, the bar area makes efficient use of space while maintaining the home's overall language. Compact yet well-defined, it blends function with a sense of quiet detail, turning an otherwise residual corner into a purposeful feature." },
      { src: imgVilla1("7.jpg"),  orientation: "portrait", layout: "trio", pairedCaption: ["In the dining area, a sculptural table anchors the room, complemented by a chandelier that adds focus and soft light. Together, these elements create a setting that is simple, refined, and well-composed."] },
      { src: imgVilla1("8.jpg"),  orientation: "portrait" },
      { src: imgVilla1("9.jpg"),  orientation: "portrait" },
      { src: imgVilla1("10.jpg"), orientation: "portrait", pairedCaption: ["Adorned with a tasteful palette of powder blue and pristine white, the cabinetry exudes a sense of serene sophistication. The floor becomes a canvas of intricate patterns, thanks to meticulously chosen tiles that add a touch of artistic flair to the culinary space."] },
      { src: imgVilla1("11.jpg"), orientation: "portrait" },
      { src: imgVilla1("12.jpg"), orientation: "portrait" },
      { src: imgVilla1("13.jpg"), orientation: "portrait", caption: "The master bedroom is anchored by a four-poster bed in a muted blue, setting the tone for the space. Creams and warm wood form the base palette, with blue accents carried through in a restrained way." },
      { src: imgVilla1("14.jpg"), orientation: "portrait" },
      { src: imgVilla1("15.jpg"), orientation: "portrait", pairedCaption: ["The bedroom is defined by a neutral palette of white and warm wood, creating a calm and inviting base. Soft creams and subtle greens add lightness without overpowering the space. The headboard wall introduces a playful note through a patterned wallpaper, bringing character while maintaining the room's overall restraint."] },
      { src: imgVilla1("16.jpg"), orientation: "portrait" },
      { src: imgVilla1("17.jpg"), orientation: "portrait" },
    ],
  },
  {
    slug: "karjat",
    index: "07",
    title: "Twin Roof Farmhouse",
    category: "Architecture",
    location: "Karjat",
    year: "2026",
    size: "1,600 sq ft",
    aspect: "landscape",
    bg: "bg-stone-100",
    color: "#f5f5f4",

    cover: imgKarjat("1.jpg"),
    hero:  imgKarjat("1.jpg"),
    heroPosition: "center 85%",
    blur:  B["public/Projects/Twin Roof Farmhouse/1.jpg"],

    description: [
      "Set against the hills of Karjat, this 1,600 sq.ft. farmhouse takes its name from the pair of pitched, Mangalore-tiled roofs that shelter the home and its long verandah beneath a single sloping gesture.",
      "A plunge pool anchors the garden, framed by the surrounding hills and the existing trees the design works carefully around. Slender steel-and-glass columns line the verandah, keeping the threshold between inside and out light and unobtrusive.",
      "Above one wing, a compact rooftop deck opens onto views of the hills beyond. Finished in lime-washed render, timber, and terracotta tile, the house is conceived as an easy, unhurried weekend retreat, grounded firmly in its rural setting.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode" },
    ],

    images: [
      { src: imgKarjat("2.jpg"), orientation: "portrait"  },
      { src: imgKarjat("3.jpg"), orientation: "landscape" },
      { src: imgKarjat("4.jpg"), orientation: "landscape" },
      { src: imgKarjat("5.jpg"), orientation: "portrait"  },
    ],
  },
  {
    slug: "estate-retreat",
    index: "13",
    title: "Estate Retreat",
    category: "Architecture",
    location: "Thirthahalli",
    year: "2025",
    size: "5,300 sq ft",
    aspect: "landscape",
    bg: "bg-green-50",
    color: "#f0fdf4",

    cover: imgEstate("1.jpg"),
    hero:  imgEstate("1.jpg"),
    blur:  B["public/Projects/Estate Retreat/1.jpg"],

    description: [
      "Set within a working plantation estate in Tirthahalli, this house was designed for a family moving into a new phase of living. The original vernacular home had served for decades; what was needed now was a more open, contemporary environment that remained connected to the land.",
      "A new site was chosen at the highest point of the estate, where the terrain opens to expansive views across the plantation and a distant lake. This vantage became the primary design driver.",
      "The house is a linear form oriented entirely toward the view. A continuous deck runs its full length, anchored by an infinity pool that extends visually toward the lake. At one point, the deck is pulled inward to form a courtyard, puncturing the mass and drawing light and air deep into the plan. This single move connects the living and dining zones to the landscape in an unbroken sequence.",
      "The staircase, enclosed in glass, frames the deck and pool as one ascends, making vertical movement spatial rather than utilitarian. Above, the courtyard becomes a double-height void maintaining continuity between floors. The first floor organises around a family lounge, from which one reaches the master suite with its private deck, or a covered terrace overlooking the courtyard below.",
      "The pooja room sits as the house's counterpoint: a double-height, inward volume where slit openings filter light into stillness. The guest bedroom, at the rear with its own external entry, operates independently as an outhouse when needed.",
      "The project shifts from the inward character of the original home to an architecture that frames and amplifies the plantation landscape while remaining grounded within it.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu\nLakshmi S Nair" },
    ],

    images: [
      { src: imgEstate("1.jpg"),  orientation: "landscape", caption: "The approach reveals the split-level section: a basement garage tucked into the slope, the main living level rising above. The single-pitch roof cuts a clean diagonal against the tree canopy, establishing the house's dominant gesture from the street." },
      { src: imgEstate("2.jpg"),  orientation: "landscape", caption: "From above, the spatial logic becomes legible: deck, pool, courtyard tree, and stone-clad double-height volume arranged in a tight, considered composition against the plantation below." },
      { src: imgEstate("3.jpg"),  orientation: "landscape", caption: "The living room is arranged around cane-backed chairs and a spare selection of objects, opening directly onto the garden through full-height timber doors. Light enters from two sides, keeping the room calm and unhurried despite its direct connection to the outdoors." },
      { src: imgEstate("4.jpg"),  orientation: "portrait",  caption: "A console table and botanical artwork compose the focal point seen on entering from the living room. The vestibule marks the transition into the dining area ahead, with the guest room tucked quietly to the left." },
      { src: imgEstate("5.jpg"),  orientation: "landscape", caption: "Kitchen and dining sit in direct dialogue, separated by an island counter faced in patterned encaustic tile. Plantation-facing windows keep the kitchen part of the landscape rather than a room apart." },
      { src: imgEstate("6.jpg"),  orientation: "landscape", caption: "A solid timber dining table anchors the ground floor, opening directly onto the courtyard step-out beyond. From there, the view extends outward across the plantation, layering interior, threshold, and landscape in a single unbroken sequence." },
      { src: imgEstate("7.jpg"),  orientation: "portrait",  caption: "The pooja room is set back in its own niche straight ahead, a bronze Ganesha marking the threshold." },
      { src: imgEstate("8.jpg"),  orientation: "portrait",  caption: "The double-height family room holds the plantation canopy in a large picture window. A sculptural pendant floats within the void above; louvred doors to the left open the space directly onto the deck." },
      { src: imgEstate("9.jpg"),  orientation: "portrait",  caption: "The master bedroom turns inward from the house's general openness. A four-poster bed, cane-fronted wardrobe, and lime-textured walls compose a settled, unhurried room." },
      { src: imgEstate("10.jpg"), orientation: "landscape", caption: "The full elevation places the house within its setting. White rendered walls step with the slope, the glass staircase and upper balcony read as transparent layers, and the plantation closes in on both sides." },
    ],
  },
  {
    slug: "godrej",
    index: "10",
    title: "Olive House",
    category: "Interiors",
    location: "Bengaluru",
    year: "2025",
    size: "1,600 sq ft",
    aspect: "portrait",
    bg: "bg-teal-50",
    color: "#f0fdfa",

    cover: imgGodrej("4.jpg"),
    hero:  imgGodrej("4.jpg"),
    blur:  B["public/Projects/Olive House/4.jpg"],

    description: [
      "This project began with clients who brought a clear point of view: a young family with an appetite for colour, warmth, and spaces that reflect who they are. With one half of the couple a trained architect, the brief was precise and the conversation direct, allowing the design to move quickly and commit confidently.",
      "The response is a home built around contrast and cohesion. A palette of deep olive green, mustard yellow, rust orange, and warm teak runs through every room, shifting in character from space to space while remaining unmistakably part of the same whole. Mid-century furniture forms and clean-lined joinery provide the structural logic, while colour and personal objects provide the life.",
      "Teak woodwork appears throughout as both a material and a motif, in slatted cabinet fronts, fluted wall panels, and a reimagined kitchen partition, giving the apartment continuity without uniformity. The result is a home that feels genuinely inhabited, shaped by the people who live in it rather than assembled around them.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Designer",  value: "Lakshmi S Nair" },
      { label: "Photographer",     value: "Roshan Paliath" },
    ],

    images: [
      { src: imgGodrej("2.jpg"),  orientation: "portrait", pairedCaption: ["A teak table with a dark stone top anchors the space against a white wall, with rust-orange chairs adding warmth.", "A teak sideboard runs along the adjacent wall below an oversized print, with slim sconces providing light. The dining–kitchen partition is reworked as a collapsible teak-framed panel, allowing the spaces to open up and connect when needed."] },
      { src: imgGodrej("3.jpg"),  orientation: "portrait" },
      { src: imgGodrej("4.jpg"),  orientation: "portrait", layout: "trio", pairedCaption: ["Anchored by a deep olive panelled wall with a fluted teak rail, the space is held by a mustard sofa. A leather armchair and black-stone coffee table complete the seating, with a twin-globe pendant above. Opposite, a floating TV unit and suspended puja cabinet in teak and olive keep the wall composed, while poufs tuck below to keep the layout open."] },
      { src: imgGodrej("5.jpg"),  orientation: "portrait" },
      { src: imgGodrej("6.jpg"),  orientation: "portrait" },
      { src: imgGodrej("7.jpg"),  orientation: "portrait", layout: "trio", pairedCaption: ["A custom olive green bunk anchors the room, with a teak ladder and patterned wallpaper adding a light, playful layer. A framed chalkboard panel allows the space to evolve over time.", "A full-width teak desk with white overhead storage forms the study, with a subtle yellow edge tying back to the home's palette. The wardrobe in off-white and teal with brass knobs stays simple and composed."] },
      { src: imgGodrej("8.jpg"),  orientation: "portrait" },
      { src: imgGodrej("9.jpg"),  orientation: "portrait" },
      { src: imgGodrej("10.jpg"), orientation: "portrait", pairedCaption: ["A continuous teak fluted panel organises the bed wall, integrating the headboard, with a compact brass sconce for light.", "Opposite, a floating study runs along the wall. A split palette with a teak ledge allows for light display. Materials and colours stay consistent with the home, in a quieter tone."] },
      { src: imgGodrej("11.jpg"), orientation: "portrait" },
    ],
  },
  {
    slug: "uber-residence",
    index: "03",
    title: "Mana",
    category: "Interiors",
    location: "Bengaluru",
    year: "2023",
    size: "850 sq ft",
    aspect: "portrait",
    bg: "bg-slate-200",
    color: "#e2e8f0",

    cover: imgUber("9.jpg"),
    hero:  imgUber("9.jpg"),
    blur:  B["public/Projects/Mana/9.jpg"],

    description: [
      "This project began with a clear brief: to make an existing apartment safer and more comfortable for a retired couple, without allowing it to feel institutional. The response is a home shaped by quiet precision, where ease of use is embedded into every decision — from material choices underfoot to the calibration of everyday heights and reach.",
      "A restrained palette of warm whites, soft creams, and muted taupe forms the base, layered with sage green furniture and teak woodwork to bring depth and familiarity. Brass hardware and natural materials lend a sense of warmth and permanence, reinforcing an unhurried, lived-in quality.",
      "This approach extends into the more private spaces, where the master bedroom is conceived as a calm, intuitive environment — prioritising ease of movement, clear access, and a sense of restful enclosure without excess.",
      "Rather than relying on overt gestures, the design focuses on subtle interventions that support daily life, balancing accessibility with comfort and practicality with a sense of home.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Sahana Prabhu" },
      { label: "Photographer",     value: "Nayan Soni" },
    ],

    images: [
      { src: imgUber("4.jpg"),  orientation: "portrait", pairedCaption: ["The apartment is finished in a warm white, neutral palette that keeps spaces open and well-lit. A muted taupe half-wall adds depth without compromising volume.", "Fluted woodwork runs throughout, unifying wardrobes, TV backdrops, wall cladding, and built-in cabinetry. The vertical texture adds depth while maintaining a clean, tailored expression, with rounded edges reinforcing the focus on safety."] },
      { src: imgUber("5.jpg"),  orientation: "portrait" },
      { src: imgUber("2.jpg"),  orientation: "portrait", pairedCaption: ["Woodwork boasts textured grooves and rounded edges for safety. Sage green furniture complements the neutrals, creating a subtle connection to the lush greenery outdoor. Strategically placed teak grab bars blend seamlessly, aiding navigation."] },
      { src: imgUber("3.jpg"),  orientation: "portrait" },
      { src: imgUber("6.jpg"),  orientation: "portrait", caption: "The dining zone is anchored by a monolithic foyer element that transitions into a crockery unit at the rear. A recessed seat with vertical teak slats, a curved canopy, and integrated drawers below is primarily part of the foyer, while also forming an engaging backdrop to the dining space. A sculptural brass chandelier above the dining table introduces a refined warmth to the lighting scheme.", captionAlign: "bottom" },
      { src: imgUber("7.jpg"),  orientation: "portrait", caption: "The kitchen was redesigned with ergonomics at its core. Lower counter heights reduce reach and strain during extended use. A built-in counter with a high stool offers a comfortable perch for food prep—small in gesture, significant in impact. Warm almond-finish cabinetry lines the perimeter, paired with matte black stone counters. Open steel shelving replaces overhead cupboards, keeping essentials within easy reach. A cool grey micro-cement splashback completes the palette." },
      { src: imgUber("10.jpg"), orientation: "portrait" },
      { src: imgUber("11.jpg"), orientation: "portrait" },
      { src: imgUber("9.jpg"),  orientation: "portrait" },
    ],
  },
];
