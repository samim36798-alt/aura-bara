import heroImg from '../assets/images/hero_cinematic_architecture_1790227498034.jpg';
import projectVillaImg from '../assets/images/project_modern_residence_1790227512080.jpg';
import projectLunaImg from '../assets/images/project_luna_luxury_1790227524564.jpg';
import breakInteriorImg from '../assets/images/break_interior_details_1790227535624.jpg';
import galleryStairsImg from '../assets/images/gallery_spiral_stairs_1790227545154.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  summary: string;
  client: string;
  scope: string[];
  gridSpan?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Interior' | 'Lifestyle' | 'People' | 'Events' | 'Details';
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  image: string;
  description: string;
  location: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ASSETS = {
  hero: heroImg,
  residence: projectVillaImg,
  luna: projectLunaImg,
  breakInterior: breakInteriorImg,
  stairs: galleryStairsImg,
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Creative Direction",
    tagline: "Visionary brand positioning",
    description: "Strategic creative concepts designed to build distinctive, memorable brand identities that resonate across global touchpoints.",
    deliverables: ["Brand Identity Systems", "Art Direction", "Visual Guidelines", "Editorial Systems"],
  },
  {
    number: "02",
    title: "Design & Spatial Architecture",
    tagline: "Form follows intention",
    description: "Creating physical and digital environments that harmonize proportion, light, tactile materials, and spatial presence.",
    deliverables: ["Architectural Concepting", "Interior Experience", "3D Spatial Visualization", "Material Curation"],
  },
  {
    number: "03",
    title: "Digital Experience",
    tagline: "Engineered for distinction",
    description: "High-performance digital products, bespoke web environments, and interactive platforms crafted with uncompromising polish.",
    deliverables: ["Interactive Web Design", "Design Systems", "Full-Stack Development", "Micro-Interactions"],
  },
  {
    number: "04",
    title: "Brand Strategy",
    tagline: "Perception shaped with precision",
    description: "Clear positioning frameworks and market architecture that create enduring resonance and cultural cachet.",
    deliverables: ["Market Positioning", "Narrative Architecture", "Audience Insights", "Naming & Verbal Identity"],
  },
  {
    number: "05",
    title: "Cinematography & Photography",
    tagline: "Stories rendered in light",
    description: "High-contrast visual storytelling that commands attention and elevates brand imagery into artistic cultural artifacts.",
    deliverables: ["Cinematic Brand Films", "Editorial Campaigns", "Architectural Documentation", "Product Still Life"],
  },
  {
    number: "06",
    title: "Bespoke Production",
    tagline: "Excellence from inception to launch",
    description: "From initial conceptual blueprints to master execution, managing fabrication, film shoots, and deployment with surgical care.",
    deliverables: ["Production Management", "Custom Fabrication", "Quality Assurance", "Global Launch Coordination"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "modern-house",
    title: "The Modern House",
    category: "Architecture",
    year: "2026",
    location: "Zurich, Switzerland",
    image: projectVillaImg,
    summary: "A monolithic residence embedded within alpine slopes, featuring floating cast-concrete planes, expansive glass apertures, and cedar louvers.",
    client: "St. Moritz Heritage Trust",
    scope: ["Concept Architecture", "Material Specification", "Bespoke Lighting", "Documentation"],
    gridSpan: "col-span-12 lg:col-span-7",
  },
  {
    id: "luna",
    title: "Luna",
    category: "Luxury Brand",
    year: "2026",
    location: "Paris, France",
    image: projectLunaImg,
    summary: "Visual identity and sculptural flacon design for an exclusive Parisian haute parfumerie, centered on raw obsidian and champagne gold.",
    client: "Maison Luna Fragrances",
    scope: ["Flacon Industrial Design", "Brand Identity", "Editorial Campaign", "Packaging System"],
    gridSpan: "col-span-12 lg:col-span-5",
  },
  {
    id: "noir",
    title: "Noir",
    category: "Creative Campaign",
    year: "2025",
    location: "Milan, Italy",
    image: galleryStairsImg,
    summary: "A multi-channel spatial installation and film campaign exploring shadows, brutalist geometries, and modern tactile luxury.",
    client: "Atelier Vespera",
    scope: ["Art Direction", "Film Production", "Spatial Exhibition", "Sound Design"],
    gridSpan: "col-span-12 lg:col-span-5",
  },
  {
    id: "maison",
    title: "Maison",
    category: "Interior Design",
    year: "2025",
    location: "Copenhagen, Denmark",
    image: breakInteriorImg,
    summary: "Restoration and interior curation of an expansive double-height salon utilizing honed limestone, fluted walnut screens, and custom boucle furnishings.",
    client: "Nordic Arts Foundation",
    scope: ["Interior Architecture", "Custom Furniture", "Lighting Curation", "Acoustic Engineering"],
    gridSpan: "col-span-12 lg:col-span-7",
  },
  {
    id: "aether",
    title: "Aether",
    category: "Digital Experience",
    year: "2025",
    location: "Tokyo, Japan",
    image: heroImg,
    summary: "An ultra-fluid digital catalog and interactive spatial showroom engineered for an avant-garde private vehicle atelier.",
    client: "Aether Mobility Studio",
    scope: ["Web Experience", "WebGL Interaction", "Performance Optimization", "Soundscapes"],
    gridSpan: "col-span-12 lg:col-span-7",
  },
  {
    id: "solace",
    title: "Solace",
    category: "Photography & Print",
    year: "2024",
    location: "Reykjavík, Iceland",
    image: galleryStairsImg,
    summary: "An archival monograph and fine-art photographic retrospective documenting brutalist monolithic forms in extreme northern landscapes.",
    client: "Boreal Editions",
    scope: ["Curatorial Direction", "Print Production", "Hardcover Monograph", "Gallery Exhibition"],
    gridSpan: "col-span-12 lg:col-span-5",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Travertine Monolith",
    category: "Architecture",
    aspect: "landscape",
    image: heroImg,
    description: "Symmetrical geometry and reflecting pools captured at the golden hour.",
    location: "Lake Lucerne",
  },
  {
    id: "gal-2",
    title: "Curvilinear Ascent",
    category: "Details",
    aspect: "portrait",
    image: galleryStairsImg,
    description: "Travertine helical staircase sculpted with pure geometric discipline.",
    location: "Rome, Italy",
  },
  {
    id: "gal-3",
    title: "Obsidian & Gold Flacon",
    category: "Lifestyle",
    aspect: "square",
    image: projectLunaImg,
    description: "Minimalist luxury still life on raw ceramic plinth.",
    location: "Studio 4, Paris",
  },
  {
    id: "gal-4",
    title: "The Grand Atrium",
    category: "Interior",
    aspect: "wide",
    image: breakInteriorImg,
    description: "Limestone textures and natural light play in a double-height salon.",
    location: "Copenhagen",
  },
  {
    id: "gal-5",
    title: "The Cantilevered Villa",
    category: "Architecture",
    aspect: "landscape",
    image: projectVillaImg,
    description: "Modernist glass pavilion opening toward tranquil waters.",
    location: "Zurich",
  },
  {
    id: "gal-6",
    title: "Private Vernissage",
    category: "Events",
    aspect: "portrait",
    image: galleryStairsImg,
    description: "Curated collectors gathering within the sculpted gallery pavilion.",
    location: "Milan",
  },
  {
    id: "gal-7",
    title: "The Design Master",
    category: "People",
    aspect: "square",
    image: breakInteriorImg,
    description: "Founding partner reviewing tactile limestone and cedar samples.",
    location: "Geneva Atelier",
  },
  {
    id: "gal-8",
    title: "Louvered Twilight",
    category: "Details",
    aspect: "landscape",
    image: heroImg,
    description: "Rhythm of vertical bronze mullions against the evening horizon.",
    location: "Tokyo Studio",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Uncovering core vision, market nuance, and unexpressed ambitions through rigorous qualitative inquiry.",
    duration: "Weeks 1–2",
    highlights: ["Stakeholder Deep-Dives", "Competitive Topology", "Aesthetic Resonance Audit"],
  },
  {
    step: "02",
    title: "Define",
    description: "Building the creative thesis, positioning architecture, and governing visual parameters.",
    duration: "Weeks 3–4",
    highlights: ["Strategic North Star", "Creative Direction Brief", "Typographic & Spatial Rules"],
  },
  {
    step: "03",
    title: "Create",
    description: "Transforming abstract strategy into tangible design systems, physical materials, and interactive prototypes.",
    duration: "Weeks 5–8",
    highlights: ["High-Fidelity Prototypes", "Material Samples", "Digital Interaction Specs"],
  },
  {
    step: "04",
    title: "Refine",
    description: "Micro-iteration and polishing of transitions, tactile surfaces, typography balance, and performance.",
    duration: "Weeks 9–10",
    highlights: ["Performance Stress Tests", "Accessibility Verification", "Sensory Refinement"],
  },
  {
    step: "05",
    title: "Deliver",
    description: "Orchestrating seamless launch execution, deployment documentation, and global brand asset handover.",
    duration: "Weeks 11–12",
    highlights: ["Production Deployment", "Design System Archive", "Ongoing Creative Advisory"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Every detail felt intentional. The final result exceeded what we imagined and repositioned our brand in the European market within six months.",
    author: "Alex Morgan",
    role: "Creative Director",
    company: "Vespera International",
    initials: "AM",
  },
  {
    quote: "A rare studio that treats digital systems with the same tactile reverence as physical architecture. Truly world-class collaboration.",
    author: "Elena Rossi",
    role: "Chief Brand Officer",
    company: "Maison Luna Paris",
    initials: "ER",
  },
  {
    quote: "Their uncompromising aesthetic discipline and technical execution enabled us to close our Series B with unparalleled brand authority.",
    author: "Marcus Vance",
    role: "Managing Partner",
    company: "Aether Dynamics Tokyo",
    initials: "MV",
  },
  {
    quote: "Working with AURA was a masterclass in clarity. They stripped away the noise and gave our architecture an iconic digital home.",
    author: "Sophia Lindqvist",
    role: "Principal Architect",
    company: "Nordic Atelier Copenhagen",
    initials: "SL",
  },
];

export const STATS = [
  { value: "250+", label: "Projects Completed", subtitle: "Across 14 countries" },
  { value: "98%", label: "Client Satisfaction", subtitle: "Measured across 5 years" },
  { value: "10+", label: "Years of Experience", subtitle: "Founded in 2016" },
  { value: "15", label: "International Awards", subtitle: "Red Dot, Cannes, D&AD" },
];

export const FAQS: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end creative direction, architectural & spatial concepting, brand identity systems, high-performance digital products, cinematography, and bespoke production management.",
  },
  {
    question: "How does the process work?",
    answer: "Our workflow is structured into five distinct phases: Discover, Define, Create, Refine, and Deliver. Each phase is anchored by concrete deliverables, review milestones, and transparent communication.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Comprehensive brand and digital transformations typically take 8 to 14 weeks. Focused architectural identity or design system projects can be completed in 4 to 8 weeks depending on scope.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, more than 70% of our commissions originate outside our home studio. We collaborate seamlessly across time zones with partners in Zurich, Tokyo, Paris, New York, London, and beyond.",
  },
  {
    question: "Can we request a custom project?",
    answer: "Absolutely. We routinely craft bespoke engagements combining physical exhibition curation, custom industrial packaging, private monographs, and high-performance digital experiences.",
  },
  {
    question: "How can we get started?",
    answer: "Complete our project inquiry form below or schedule a preliminary discovery call. We review all submissions within 24 business hours to evaluate mutual alignment and availability.",
  },
];
