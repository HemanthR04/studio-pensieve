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
    index: "02",
    title: "Rajankunte Farmhouse",
    category: "Adaptive Reuse + Architecture",
    location: "Rajankunte",
    year: "2025",
    size: "3,500–4,000 sq ft",
    aspect: "landscape",
    bg: "bg-yellow-50",
    color: "#fefce8",

    cover: imgRajankunte("3.jpg"),
    coverPosition: "center 75%",
    hero:  imgRajankunte("1.jpg"),
    heroPosition: "center 85%",
    blur:  B["public/Projects/Adapted House/1.jpg"],

    description: [
      "Located in Rajankunte, this project reimagines a modest 1,300 sq.ft. farmhouse as an expanded multi-generational home. Rather than replacing the existing structure, the design retains it as a core — absorbing it into a larger 3,500–4,000 sq.ft. system that reorganizes both space and experience.",
      "The ground floor unfolds as a continuous sequence, where the former bedrooms are repurposed into an entry foyer and formal living, transitioning into informal living and dining areas. These spaces are shaped by a series of double-height volumes, visually connected by a floating corridor above, allowing openness and continuity to define the shared areas.",
      "The architectural language balances strong horizontal masses with vertical insertions. Exposed brick, concrete, and sloping roofs establish a grounded, vernacular base, while deep verandas, decks, and large openings create a porous edge — anchoring the house within its landscape while maintaining a restrained, contemporary expression.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode" },
    ],

    images: [
      { src: imgRajankunte("2.jpg"), orientation: "portrait",  caption: "The stairwell emerges as a sculptural vertical volume, cutting cleanly through the brick mass. Its intersection with a cantilevered slab adds depth and emphasizes the interplay of solid and void." },
      { src: imgRajankunte("3.jpg"), orientation: "landscape", caption: "A restrained palette of exposed brick and concrete defines the exterior expression. The sloping roof and subtle projections soften the mass, balancing weight with articulation." },
      { src: imgRajankunte("4.jpg"), orientation: "landscape", caption: "The rear opens into a deep veranda that extends the living spaces outward. This edge becomes a transitional zone where interior activity gradually dissolves into the landscape." },
      { src: imgRajankunte("5.jpg"), orientation: "landscape", caption: "Upper-level decks connect private rooms to shared outdoor spaces. The sloping roof frames these terraces, creating sheltered volumes with a strong spatial identity." },
      { src: imgRajankunte("6.jpg"), orientation: "landscape", caption: "Layered roof forms build a dynamic silhouette while maintaining the building's horizontal base. Balconies and integrated greenery introduce softness, tempering the raw material palette." },
    ],
  },
  // ── 3. RMK Antheia ──────────────────────────────────────────────────────
  {
    slug: "rmk",
    index: "03",
    title: "RMK Antheia",
    category: "Architecture",
    location: "Bengaluru",
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
    index: "04",
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
    index: "05",
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
      "The two-story bar, accommodating 55 patrons per floor and an outdoor area, offers a unique cocktail experience. It aims to bridge the gap between neighbourhood bars and upscale cocktail lounges. The metal and glass facade maximises street frontage, offering a glimpse into the double-height entrance and bar seating overlooking the activity in Koramangala. The first-floor outdoor space, framed by a corten steel structure, sets the tone for the interior palette.",
      "The design draws inspiration from inviting brew pubs, incorporating materials like wood, stone, metal, and leather. This approach resulted in a space with a timeworn aesthetic, fostering a sense of familiarity. Textured concrete ceilings and raw concrete walls create a moody atmosphere. Corten steel, with its rich, rusted texture, is a prominent feature, further enhanced by perforated sheets. The green flooring offers a playful contrast to the muted palette, with a black and white inlay guiding the eye to the bar counter.",
      "The double-height perforated corten steel screen cuts through the double height of the two floors, allowing the crisp folded-plate steel staircase to wrap around it. The corten steel railing creates a continuous, free-flowing ribbon that ties all the multiple spaces together. The central double-height space is adorned with light fixtures that add drama to the entrance. These lights also act as an installation that you interact with visually as you move from one floor to another.",
      "The bar counter area is horizontally framed by the corten steel bar wall and low ceiling. The perforated corten steel wall, backlit to create a striking feature, draws the eye to the space where the potions are concocted. The curved corten steel ceiling further directs the gaze towards the bar's backdrop, adorned with a pill-shaped mosaic tile in a rich bottle green. The jet black stone countertops add depth to the space. The use of black stone tops is softened by the inclusion of acacia wood for some tables and benches. The wood, stained black to match the stone tops, adds a certain warmth with its unique grain patterns. The furniture is complemented by black metal accents and abstract circular elements, adding drama to the otherwise straightforward design.",
      "The ground floor offers a diverse seating arrangement. An 8-seater table near the entrance can accommodate larger groups, positioned beneath a cluster of banana fibre pendant lamps that illuminate the double-height space. Three-seater tables and booth seating line the perimeter, while a massive communal table takes centre stage. This table can accommodate around 20 people, encouraging interaction between patrons and providing space for larger groups.",
      "The first floor, similar in size to the ground floor, is centered around an interactive art wall that tells the story of the \"tap tales\" journey. A perforated corten steel sheet partition segregates the open-air seating, acting as a backdrop to the double-height area and filtering in diffused light.",
      "Designed for flexibility, the upper floor can be partially cleared to accommodate various activities like karaoke, live music, art workshops, poetry readings, or impromptu dance parties. The laid-back, no-fuss atmosphere is complemented by vibrant pop art, inspired by popular culture, humor, bold colors, and simple forms. This artistic touch ties together the vibe of this cozy cocktail bar that simply gets the job done!",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Lakshmi S Nair" },
    ],

    images: [
      { src: imgTapTales("2.jpg"),             orientation: "landscape", caption: "The ground floor's communal table seats around 20, set beneath a cluster of banana fibre pendant lamps." },
      { src: imgTapTales("3.jpg"),             orientation: "landscape" },
      { src: imgTapTales("Copy of 10.jpg"),    orientation: "landscape", caption: "An interactive pop art wall anchors the first floor, drawing on bold colour and popular culture." },
      { src: imgTapTales("Copy of 11.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 14.jpg"),    orientation: "landscape", caption: "Raw concrete walls and a moody, timeworn palette carry through both floors." },
      { src: imgTapTales("Copy of 15.jpg"),    orientation: "landscape" },
      { src: imgTapTales("Copy of 16.jpg"),    orientation: "landscape", caption: "The folded-plate steel staircase wraps around the double-height corten steel screen." },
      { src: imgTapTales("Copy of 18.jpg"),    orientation: "landscape" },
    ],
  },
  // ── remaining projects ───────────────────────────────────────────────────
  {
    slug: "rajiv-residence",
    index: "06",
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
    index: "07",
    title: "Vibranium Ventures Office",
    category: "Interiors",
    location: "Bengaluru",
    year: "2025",
    size: "2,000 sq ft",
    aspect: "landscape",
    bg: "bg-zinc-300",
    color: "#d4d4d8",

    cover: imgVibranium("1.jpg"),
    hero:  imgVibranium("1.jpg"),
    blur:  B["public/Projects/Vibranium Office/1.jpg"],

    description: [
      "Vibranium Ventures' 2,000 sq.ft. office is organised around a fluid circulation spine of curved walls and transparent partitions, allowing zones to remain visually connected while retaining individual character. The plan sequences workstations, private cabins, meeting spaces, and the client lounge from arrival inward, encouraging movement without sacrificing structure.",
      "A tactile palette of wood, glass, brushed brass, and textured finishes establishes warmth throughout. The green glass-block partition and deep-toned fluted paneling introduce rhythm and contrast, while organic rugs, layered lighting, and curated artwork temper the geometry. Every junction, from curved glazing to recessed ceiling coves, is resolved with precision. The result is an office that does not announce itself loudly but rewards attention at every scale.",
    ],

    credits: [
      { label: "Lead Architects",  value: "Shashank Shetty\nSanjan Hoode" },
      { label: "Junior Architect", value: "Lakshmi S Nair" },
    ],

    images: [
      { src: imgVibranium("8.jpg"), orientation: "landscape", caption: "Reception leads with a travertine desk, fluted wall paneling, and the brand mark set large above. A frosted glass door to one side offers a partial view into the interior, building anticipation without giving it away." },
      { src: imgVibranium("4.jpg"), orientation: "landscape", caption: "The open workstation zone sits between the green glass-block partition and the curved fluted wall, creating a corridor of contrasting textures. Acoustic-panelled desks hold the middle ground, focused and unhurried." },
      { src: imgVibranium("5.jpg"), orientation: "landscape", caption: "Brass-framed glass panels alternate with solid partitions along the private cabin block, letting light pass through without dissolving boundaries. The curved deep-blue fluted wall anchors the corridor, its ribbed surface absorbing light differently at every angle." },
      { src: imgVibranium("6.jpg"), orientation: "landscape", caption: "The director's cabin places the brand at its literal centre: the Vibranium Ventures identity set into a marble feature wall, lit from above by a brass sculptural pendant. The white marble desk extends forward as both a work surface and a client-facing meeting table." },
      { src: imgVibranium("7.jpg"), orientation: "landscape", caption: "A lounge corner within the cabin offers a quieter register: two cream armchairs, a large abstract work, and a dark shelving unit behind. Intended for informal conversation, the space signals that meetings here are not transactional." },
      { src: imgVibranium("2.jpg"), orientation: "landscape", caption: "An informal meeting table occupies the threshold between the open floor and the glass-block partition, defined by an organic rug and a vivid red artwork above. It is the only moment of strong colour in the scheme, marking the zone as distinct within the sequence." },
      { src: imgVibranium("3.jpg"), orientation: "portrait",  caption: "From behind the fluted wall, the lounge reveals its full depth: arched ceiling coves, a sculptural chandelier, and a wall of lit niches displaying awards. The curved partition in the foreground frames the room as a destination rather than a through-space." },
    ],
  },
  {
    slug: "chanpatna",
    index: "08",
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
    index: "09",
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
    index: "10",
    title: "Twin Roof Farmhouse",
    category: "Architecture",
    location: "Karjat, Maharashtra",
    year: "2026",
    size: "1,200 sq ft",
    aspect: "landscape",
    bg: "bg-stone-100",
    color: "#f5f5f4",

    cover: imgKarjat("4.jpg"),
    hero:  imgKarjat("1.jpg"),
    heroPosition: "center 85%",
    blur:  B["public/Projects/Twin Roof Farmhouse/1.jpg"],

    description: [
      "Located in Karjat, Maharashtra, roughly two hours from Mumbai, this 1,200 sq.ft. farmhouse is conceived as a weekend retreat within the dramatic Sahyadri landscape. Occupying the last plot at the edge of a plotted development, the house holds an unobstructed, near-360-degree panorama of the surrounding hills, with the most commanding views opening to the south.",
      "The plan is organised as two linear volumes, each under a Mangalore-tiled roof pitched in opposing directions: one sheltering the master bedroom, the other the second bedroom, kitchen, and dining. The roof profiles respond directly to climate. The extended southern overhang shades the living areas from harsh afternoon sun while shedding the heavy monsoon rains that characterise Karjat. Between the two wings, the central living area sits beneath a flat slab whose roof extends outward as a sunset deck, an elevated terrace open to the full Sahyadri panorama.",
      "On the north, a small courtyard is carved into the linear plan between the dining room and the second bedroom. Shaded through most of the day, it draws in diffused light, enables cross-ventilation with the southern verandah, and offers a planted, sheltered outdoor pocket away from the elements.",
      "The south verandah connects directly to daily life. A pass-through kitchen window feeds a barbecue counter that extends into a deck, terminating at the plunge pool oriented westward toward the setting sun. During the monsoons, seasonal waterfalls emerge across the Sahyadri ridgeline, visible through the wide openings along the south façade.",
    ],

    credits: [
      { label: "Lead Architects", value: "Shashank Shetty\nSanjan Hoode" },
    ],

    images: [
      { src: imgKarjat("3.jpg"), orientation: "landscape", caption: "From across the site, the house stretches quietly along its plot: low, linear, and unhurried. The hills remain the dominant presence; the building simply extends itself toward the view." },
      { src: imgKarjat("4.jpg"), orientation: "landscape", caption: "Two opposing roof pitches and the flat-roofed living volume read clearly in the full composition, each profile serving a distinct spatial and climatic role." },
      { src: imgKarjat("5.jpg"), orientation: "portrait",  caption: "The tiled overhang shelters the south verandah, acting as both a climatic filter and the primary living threshold — a space where interior life gradually dissolves into the open hillscape beyond." },
      { src: imgKarjat("2.jpg"), orientation: "portrait",  caption: "The plunge pool faces west, positioned to hold the last light of the day as the sun drops behind the Sahyadri ridge. In the evenings, the water surface becomes a second sky, a still reflection of colour and hillscape that makes the pool as much about the view as about the water." },
    ],
  },
  {
    slug: "estate-retreat",
    index: "11",
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
    index: "12",
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
    index: "13",
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
