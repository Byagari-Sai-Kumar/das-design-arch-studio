const residential2bhk = import.meta.glob(
  "../assets/ourWorks/interior/residential_2bhk/*.jpeg",
  { eager: true, import: "default" }
);
const projectImg = (name) => residential2bhk[`../assets/ourWorks/interior/residential_2bhk/${name}.jpeg`];

// Placeholder photos copied from residential_2bhk — replace the files in vikram_residence/ when the real photos arrive.
const vikramResidence = import.meta.glob(
  "../assets/ourWorks/interior/vikram_residence/*.jpeg",
  { eager: true, import: "default" }
);
const vikramImg = (name) => vikramResidence[`../assets/ourWorks/interior/vikram_residence/${name}.jpeg`];

// Add new projects to this list; the Interiors page sorts them by completedOn (newest first).
// Projects with the same completedOn keep the order they are listed in here.
export const interiorProjects = [
  {
    slug: "vikram-residence",
    title: "Vikram Residence",
    location: "Meerpet, Hyderabad",
    completedOn: "2026-10",
    type: "Residential Interiors",
    configuration: "3 BHK Flat",
    scope: ["Kitchen", "3 Bedrooms", "Wardrobes & Dressers", "Ceiling & Lighting"],
    coverImage: vikramImg("kitchen-straight-peach-front"),
    summary:
      "A full-home interior for the Vikram family's 3 BHK flat in Meerpet, Hyderabad — planned around everyday family life and built entirely on site, with a light, warm kitchen, three personalised bedrooms and storage built into every wall.",
    story:
      "The family wanted a home that felt bright and easy to live in, with plenty of storage but nothing bulky. Every unit was made on site by our team, measured and fitted to the actual walls, so each wardrobe, kitchen run and loft fits the room exactly. We kept the base palette soft and neutral, added a signature accent colour to each room, and used concealed lighting in ceilings, shelves and mirrors so every space feels finished at any time of day.",
    sections: [
      {
        title: "Kitchen",
        description:
          "A bright, hard-working kitchen built on site — lit display shelves, tall storage and smooth handle-less drawers that make daily cooking simple.",
        images: [
          { src: vikramImg("kitchen-straight-peach-front"), caption: "Soft peach shutters, white gloss lofts and warm under-cabinet lighting along the full cooking wall." },
          { src: vikramImg("kitchen-straight-peach-angle"), caption: "Fluted-glass display cabinet and lit open niches break up the run of closed storage." },
          { src: vikramImg("kitchen-u-shaped-beige-front"), caption: "Framed glass wall units glow from within, framing the chimney and hob." },
          { src: vikramImg("kitchen-u-shaped-beige-wide"), caption: "A breakfast counter wraps around the cooking zone for quick family meals." },
          { src: vikramImg("kitchen-u-shaped-beige-side"), caption: "Wave-profile handles add a playful detail to the beige gloss fronts." },
          { src: vikramImg("kitchen-u-shaped-beige-close"), caption: "Wide drawer stacks beside the hob keep pans and utensils within reach." },
          { src: vikramImg("kitchen-l-shaped-mint-black-granite"), caption: "Pastel mint base cabinets paired with lit glass display boxes above." },
          { src: vikramImg("kitchen-mint-base-units-grey-counter"), caption: "Black gola profiles give the mint drawers a clean, handle-free look." },
          { src: vikramImg("kitchen-l-shaped-terracotta-grey"), caption: "Terracotta lower units and smoked-glass uppers, with a panelled door to match." },
          { src: vikramImg("kitchen-wall-units-glass-and-wood"), caption: "A mix of tinted glass and wood-grain shutters keeps the wall units light." },
        ],
      },
      {
        title: "Bedrooms",
        description:
          "Three bedrooms, each with its own accent colour — restful sage for one, soft blush for another — finished with storage beds and cove-lit ceilings.",
        images: [
          { src: vikramImg("bedroom-sage-wardrobe-over-door"), caption: "Sage two-tone wardrobe framing the doorway, under a layered cove ceiling." },
          { src: vikramImg("bedroom-sage-wardrobe-glass-shutter"), caption: "Tinted-glass shutters and linear ceiling lights add depth to the sage wardrobe wall." },
          { src: vikramImg("bedroom-pink-sliding-wardrobe-front"), caption: "Sliding wardrobe in blush and ivory with diagonal inlays, beside a cushioned headboard." },
          { src: vikramImg("bedroom-pink-sliding-wardrobe-side"), caption: "Storage bed trimmed in blush to match the room." },
        ],
      },
      {
        title: "Storage & Dressing",
        description:
          "Floor-to-ceiling wardrobes with lofts, dressers and backlit mirrors, all built on site to fit each wall — so every bedroom has a proper dressing corner.",
        images: [
          { src: vikramImg("wardrobe-gloss-beige-walnut-mirror-front"), caption: "High-gloss beige wardrobe with a walnut mirror bay lit from the edges." },
          { src: vikramImg("wardrobe-gloss-beige-walnut-mirror-angle"), caption: "The loft continues over the mirror bay for extra overhead storage." },
          { src: vikramImg("wardrobe-cream-taupe-with-dresser"), caption: "Two-tone wardrobe with a glowing open shelf column and a framed dresser mirror." },
          { src: vikramImg("wardrobe-cream-taupe-open-interior"), caption: "Behind the shutters — hanging rails, locker drawers and lit shelves." },
          { src: vikramImg("wardrobe-grey-with-lit-dresser"), caption: "A floating dresser with warm LED outlines, set into a grey wardrobe wall." },
          { src: vikramImg("wardrobe-white-blue-oak"), caption: "White and navy shutters over oak drawers, with tall bar handles." },
          { src: vikramImg("wardrobe-cream-oak-over-door"), caption: "Cream and oak wardrobe with lofts carried across the door." },
          { src: vikramImg("wardrobe-pink-and-cream"), caption: "Blush wardrobe with cream lofts, fitted neatly beside the entry door." },
        ],
      },
    ],
  },
  {
    slug: "residential-interior-2bhk",
    title: "Residential Interior",
    location: "Hyderabad",
    completedOn: "2026-10",
    type: "Residential Interiors",
    configuration: "2 BHK Flat",
    scope: ["Custom Kitchen", "2 Bedrooms", "Wardrobes", "False Ceilings"],
    coverImage: projectImg("kitchen-u-shaped-beige-wide"),
    summary:
      "A complete interior execution for a 2 BHK flat — a custom kitchen, two bedrooms and full-height wardrobes, all built on site and finished with layered cove and profile lighting throughout.",
    story:
      "The brief was clean, practical storage with a warm, contemporary feel. Each space was given its own colour palette — from soft beige and peach to sage, mint and blush — while shared details such as handle-less profiles, lit display niches and floor-to-ceiling units tie the home together.",
    sections: [
      {
        title: "Custom Kitchen",
        description:
          "Built on site and planned around how the family cooks — generous drawer storage, lit glass display units and easy-to-clean surfaces.",
        images: [
          { src: projectImg("kitchen-u-shaped-beige-wide"), caption: "Beige gloss cabinetry with granite worktops and a breakfast counter." },
          { src: projectImg("kitchen-u-shaped-beige-front"), caption: "Glass-front wall units with warm internal lighting and an open lit niche above the hob." },
          { src: projectImg("kitchen-u-shaped-beige-side"), caption: "Sculpted profile handles and a fluted marble-look backsplash under LED strip lighting." },
          { src: projectImg("kitchen-u-shaped-beige-close"), caption: "Deep drawer stacks keep cookware within easy reach of the hob." },
          { src: projectImg("kitchen-straight-peach-front"), caption: "Peach gloss shutters with fluted-glass display units and lit open shelves." },
          { src: projectImg("kitchen-straight-peach-angle"), caption: "Copper-toned profile handles and a white quartz counter against a marble-look backsplash." },
          { src: projectImg("kitchen-l-shaped-terracotta-grey"), caption: "Terracotta and grey cabinets with tinted-glass wall units and a matching panelled door." },
          { src: projectImg("kitchen-l-shaped-mint-black-granite"), caption: "Mint base units, white gloss uppers and lit glass display boxes over a black granite counter." },
          { src: projectImg("kitchen-mint-base-units-grey-counter"), caption: "Handle-less mint drawers with black gola profiles under a grey quartz counter." },
          { src: projectImg("kitchen-wall-units-glass-and-wood"), caption: "Wall units combining framed tinted glass and wood-finish shutters, with open ledges below." },
        ],
      },
      {
        title: "Bedrooms",
        description:
          "Two calm, personalised bedrooms with storage beds, upholstered headboards and wardrobes designed as a feature wall.",
        images: [
          { src: projectImg("bedroom-pink-sliding-wardrobe-front"), caption: "Blush and ivory sliding wardrobe with diagonal inlays, paired with a panelled upholstered headboard." },
          { src: projectImg("bedroom-pink-sliding-wardrobe-side"), caption: "Storage bed with a blush edge band, matching the wardrobe palette." },
          { src: projectImg("bedroom-sage-wardrobe-over-door"), caption: "Two-tone sage wardrobe wrapping over the door, under a layered cove-lit ceiling." },
          { src: projectImg("bedroom-sage-wardrobe-glass-shutter"), caption: "Sage and ivory wardrobe wall with a tinted-glass shutter section and linear ceiling lights." },
        ],
      },
      {
        title: "Wardrobes & Dressers",
        description:
          "Full-height wardrobes with lofts, integrated dressers and lit open shelving — built to use every inch of wall.",
        images: [
          { src: projectImg("wardrobe-cream-taupe-with-dresser"), caption: "Cream and taupe wardrobe with a lit open shelf column and a backlit dresser mirror." },
          { src: projectImg("wardrobe-cream-taupe-open-interior"), caption: "Inside view — hanging space, locker drawers and LED-lit shelving." },
          { src: projectImg("wardrobe-gloss-beige-walnut-mirror-front"), caption: "Gloss beige wardrobe with a walnut-finish, full-length lit mirror unit." },
          { src: projectImg("wardrobe-gloss-beige-walnut-mirror-angle"), caption: "Side view showing the loft extending over the mirror bay." },
          { src: projectImg("wardrobe-grey-with-lit-dresser"), caption: "Grey wardrobe with a floating dresser framed by warm LED strips." },
          { src: projectImg("wardrobe-cream-oak-over-door"), caption: "Cream and oak wardrobe with lofts running over the doorway." },
          { src: projectImg("wardrobe-white-blue-oak"), caption: "White and deep-blue wardrobe with oak drawers and long bar handles." },
          { src: projectImg("wardrobe-pink-and-cream"), caption: "Blush wardrobe with cream lofts, designed around the room's door." },
        ],
      },
    ],
  },
];

export const sortedInteriorProjects = [...interiorProjects].sort((a, b) =>
  b.completedOn.localeCompare(a.completedOn)
);

export const formatCompleted = (yyyyMm) =>
  new Date(`${yyyyMm}-01T00:00:00`).toLocaleDateString("en-IN", { month: "long", year: "numeric" });
