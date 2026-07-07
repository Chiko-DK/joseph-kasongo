export const siteUrl = "https://joseph-kasongo.vercel.app"

export const profile = {
  name: "Joseph Kasongo",
  alternateNames: ["Chiko DK", "Chiko Kasongo", "Joseph Chiko Kasongo"],
  title: "Full Stack Software Developer",
  location: "Cape Town, South Africa",
  email: "cdamberd@gmail.com",
  phone: "+27634523316",
  description:
    "Full stack software developer and UCT Computer Science and Business Computing graduate building web apps, APIs, dashboards, data visualisation tools, fintech prototypes, and AI-assisted product features.",
  availability:
    "Available for entry-level and junior full stack software developer roles.",
  image: `${siteUrl}/pics/profile.JPG`,
  cv: `${siteUrl}/docs/CV.pdf`,
  github: "https://github.com/Chiko-DK",
  linkedin: "https://www.linkedin.com/in/joseph-chiko-kasongo/",
  instagram: "https://www.instagram.com/chiko_dk/",
  languages: ["English", "French"],
  education: [
    "Bachelor of Science in Computer Science and Business Computing, University of Cape Town, graduated 2025",
    "Bachelor of Commerce Honours in Information Systems, University of Cape Town, currently enrolled",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "React Native",
    "Python",
    "FastAPI",
    "Node.js",
    "Firebase",
    "Supabase",
    "SQL",
    "SQLite",
    "Tailwind CSS",
    "D3.js",
    "Data Visualisation",
    "Machine Learning",
    "System Design",
    "Agile Development",
    "FinTech",
    "Shopify",
    "Wix"
  ],
}

export const projects = [
  {
    title: "UniSwap Student Resale Storefront",
    description:
      "University resale web app for browsing, searching, and purchasing student items, with guest, customer, and admin flows backed by Firebase.",
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image: "/pics/uniswap.png",
    github: "https://github.com/Chiko-DK/UniSwap-Ecommerce_Store",
    demo: "https://uni-swap-ecommerce-store.vercel.app/",
  },
  {
    title: "MaliGo Savings MVP",
    description:
      "Web proof-of-concept MVP for a behaviour-first savings product, created to validate the idea before the active React Native build.",
    stack: ["React", "FinTech", "UX Research", "Product Strategy"],
    image: "/pics/maligo.png",
    github: "https://github.com/0geder/MaliGo",
    demo: "https://maligo-dev.vercel.app/",
  },
  {
    title: "Research Visualisation - ResViz",
    description:
      "Capstone web application for visualising university research collaborations, topics, departments, and collaboration strength through interactive networks.",
    stack: ["FastAPI", "Vue.js", "D3.js", "SQLite"],
    image: "/pics/project-resviz.svg",
  },
  {
    title: "Lown Open Payment",
    description:
      "Hackathon fintech prototype for micro-lending, transparent digital agreements, wallet connection flows, and open payment standards.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Open Payments"],
    image: "/pics/project-lown.svg",
    github: "https://github.com/Chiko-DK/Lown_Open-payment",
  },
  {
    title: "Scrum Poker Estimation Tool",
    description:
      "Agile estimation web app built during Byte Orbit vacation work to help teams vote on story points during sprint planning.",
    stack: ["Vue.js", "Vuetify", "CSS", "Agile"],
    image: "/pics/project-scrum.svg",
  },
  {
    title: "Hotel Booking System",
    description:
      "Desktop booking system for a small hotel, covering reservations, guest records, room availability, and business workflow management.",
    stack: ["C#", ".NET", "Windows Forms"],
    image: "/pics/project-booking.svg",
    github: "https://github.com/Chiko-DK/BookingSystem",
  },
]
