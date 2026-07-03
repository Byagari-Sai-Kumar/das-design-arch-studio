/**
 * formSchema.js — single source of truth for all field labels, options, and step metadata.
 */

export const STEPS = [
  { number: 1, label: "Personal",  key: "personal"  },
  { number: 2, label: "Plot",      key: "plot"       },
  { number: 3, label: "Project",   key: "project"    },
  { number: 4, label: "Family",    key: "family"     },
  { number: 5, label: "Amenities", key: "amenities"  },
  { number: 6, label: "Brief",     key: "brief"      },
];
export const TOTAL_STEPS = STEPS.length;

/* ── Step 2 — Plot ──────────────────────────────────────────────────────── */

export const PLOT_SIZE_UNITS = [
  { value: "sqft",   label: "Sq Ft"   },
  { value: "sqyd",   label: "Sq Yd"   },
  { value: "sqm",    label: "Sq M"    },
  { value: "cents",  label: "Cents"   },
  { value: "guntas", label: "Guntas"  },
  { value: "acres",  label: "Acres"   },
];

export const ROAD_WIDTH_UNITS = [
  { value: "feet",   label: "Feet"    },
  { value: "meters", label: "Meters"  },
];

export const AREA_UNITS = [
  { value: "sqft", label: "Sq Ft" },
  { value: "sqm",  label: "Sq M"  },
  { value: "sqyd", label: "Sq Yd" },
];

export const SETBACK_UNITS = [
  { value: "meters", label: "Meters" },
  { value: "feet",   label: "Feet"   },
];

export const PLOT_POSITIONS = [
  { value: "corner", label: "Corner Plot", desc: "Open roads on two sides" },
  { value: "center", label: "Centre Plot", desc: "Neighbours on both sides" },
  { value: "end",    label: "End Plot",    desc: "Open on one end" },
];

export const PLOT_FACINGS = [
  { value: "north",      label: "North",      short: "N"  },
  { value: "north-east", label: "North East",  short: "NE" },
  { value: "east",       label: "East",        short: "E"  },
  { value: "south-east", label: "South East",  short: "SE" },
  { value: "south",      label: "South",       short: "S"  },
  { value: "south-west", label: "South West",  short: "SW" },
  { value: "west",       label: "West",        short: "W"  },
  { value: "north-west", label: "North West",  short: "NW" },
];

export const VASTU_OPTIONS = [
  { value: "complete",  label: "Complete Vastu",       desc: "Strict Vastu compliance throughout" },
  { value: "basic",     label: "Basic Vastu",          desc: "Key directions & placements only"   },
  { value: "architect", label: "Architect Suggestion", desc: "Let our architects guide you"       },
  { value: "no-vastu",  label: "Doesn't Matter",       desc: "No Vastu constraints"               },
];

/* ── Step 3 — Project ───────────────────────────────────────────────────── */

/**
 * Budget slider stops — 16 points from ₹10L to ₹50Cr+
 * Slider index maps directly to this array (0–15).
 */
export const BUDGET_STOPS = [
  { label: "₹10 Lakh",    short: "10L"   },
  { label: "₹25 Lakh",    short: "25L"   },
  { label: "₹50 Lakh",    short: "50L"   },
  { label: "₹75 Lakh",    short: "75L"   },
  { label: "₹1 Crore",    short: "1Cr"   },
  { label: "₹2 Crore",    short: "2Cr"   },
  { label: "₹3 Crore",    short: "3Cr"   },
  { label: "₹5 Crore",    short: "5Cr"   },
  { label: "₹7 Crore",    short: "7Cr"   },
  { label: "₹10 Crore",   short: "10Cr"  },
  { label: "₹15 Crore",   short: "15Cr"  },
  { label: "₹20 Crore",   short: "20Cr"  },
  { label: "₹25 Crore",   short: "25Cr"  },
  { label: "₹35 Crore",   short: "35Cr"  },
  { label: "₹50 Crore",   short: "50Cr"  },
  { label: "₹50 Crore+",  short: "50Cr+" },
];

export const DESIGN_STYLES = [
  { value: "classical",     label: "Classical",      desc: "Timeless columns & symmetry"       },
  { value: "neo-classical", label: "Neo Classical",  desc: "Classical revival, modern details"  },
  { value: "contemporary",  label: "Contemporary",   desc: "Fluid, open & of the moment"       },
  { value: "modern",        label: "Modern",         desc: "Clean lines, minimal ornamentation" },
  { value: "colonial",      label: "Colonial",       desc: "Heritage charm, tropical blend"     },
  { value: "japandi",       label: "Japandi",        desc: "Japanese–Scandinavian harmony"      },
  { value: "other",         label: "Other",          desc: "Something uniquely yours"           },
  { value: "not-sure",      label: "Not Sure",       desc: "We'll help you discover your style" },
];

export const FLOOR_OPTIONS = [
  { value: "1",     label: "G"    },
  { value: "2",     label: "G+1"  },
  { value: "3",     label: "G+2"  },
  { value: "4",     label: "G+3"  },
  { value: "5",     label: "G+4"  },
  { value: "other", label: "Other" },
];

/* ── Step 5 — Amenities ─────────────────────────────────────────────────── */

export const KITCHEN_LAYOUTS = [
  { value: "single",        label: "Single Kitchen",    desc: "Standard single kitchen"        },
  { value: "kitchen-wash",  label: "Kitchen + Wash",    desc: "Kitchen with utility wash area" },
  { value: "kitchen-store", label: "Kitchen + Store",   desc: "Kitchen with dedicated storage" },
  { value: "soft",          label: "Soft Kitchen",      desc: "Dry / snack kitchen"            },
  { value: "heavy",         label: "Heavy Kitchen",     desc: "Full commercial-grade kitchen"  },
];

export const YES_NO = [
  { value: "yes", label: "Yes" },
  { value: "no",  label: "No"  },
];

export const AMENITIES_LIST = [
  { value: "lounge",         label: "Lounge",            icon: "🛋️" },
  { value: "gym",            label: "Gym",               icon: "💪" },
  { value: "swimming-pool",  label: "Swimming Pool",     icon: "🏊" },
  { value: "lift",           label: "Lift",              icon: "🛗" },
  { value: "gaming-area",    label: "Gaming Area",       icon: "🎮" },
  { value: "home-theatre",   label: "Home Theatre",      icon: "🎬" },
  { value: "steam-room",     label: "Steam Room",        icon: "♨️" },
  { value: "spa",            label: "Spa",               icon: "🧖" },
  { value: "massage-room",   label: "Massage Room",      icon: "💆" },
  { value: "salon",          label: "Salon",             icon: "💇" },
  { value: "terrace-garden", label: "Terrace Garden",    icon: "🌿" },
  { value: "puja-area",      label: "Puja Area",         icon: "🪔" },
  { value: "study-room",     label: "Study Room",        icon: "📚" },
  { value: "courtyard",      label: "Courtyard",         icon: "🏛️" },
  { value: "open-terrace",   label: "Open Terrace",      icon: "☀️" },
  { value: "waterbody",      label: "Waterbody Feature",  icon: "⛲" },
  { value: "lawn",           label: "Lawn",              icon: "🌱" },
  { value: "guard-room",     label: "Guard Room",        icon: "🛡️" },
];
