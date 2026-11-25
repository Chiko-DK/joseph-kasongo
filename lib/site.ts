export const siteUrl = "https://joseph-kasongo.vercel.app"

export const profile = {
  name: "Joseph Kasongo",
  alternateNames: [
    "Joseph Damberd Kasongo",
    "Chiko",
    "Chiko DK",
    "Chiko Kasongo",
    "Chiko Damberd",
    "Joseph Chiko Kasongo",
  ],
  title: "Full Stack Software Developer",
  location: "Cape Town, South Africa",
  email: "cdamberd@gmail.com",
  phone: "+27634523316",
  description:
    "Full stack software developer and UCT Computer Science and Business Computing graduate completing a BCom Honours in Information Systems. Co-founder of FreightProof and technical lead of MaliGo, building web apps, APIs, data tools, and fintech products.",
  availability:
    "Available for graduate program, junior developer, and internship roles, on-site, hybrid, or remote.",
  image: `${siteUrl}/pics/profile.JPG`,
  cv: `${siteUrl}/docs/CV.pdf`,
  github: "https://github.com/Chiko-DK",
  linkedin: "https://www.linkedin.com/in/joseph-kasongo-91a006232/",
  instagram: "https://www.instagram.com/chiko_dk/",
  languages: ["French", "English"],
  education: [
    "Bachelor of Commerce Honours in Information Systems, University of Cape Town, completed November 2026",
    "Bachelor of Science in Computer Science and Business Computing, University of Cape Town, conferred September 2025",
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "C#",
    "React",
    "Next.js",
    "React Native",
    "Vue.js",
    "Node.js",
    "Flask",
    "FastAPI",
    ".NET",
    "PostgreSQL",
    "SQL",
    "Redis",
    "Supabase",
    "Firebase",
    "PyTorch",
    "Machine Learning",
    "Data Visualisation",
    "System Design",
    "Agile Development",
    "FinTech",
  ],
}

export const projects = [
  {
    title: "FreightProof Road-Freight Evidence Platform",
    description:
      "Co-founded honours capstone (2nd place, UCT 2026). Checks each trip phase against driver, tracker, geofence, scan, and seal data, and anchors SHA-256 record fingerprints to Hedera. I built parcel search, per-user rate limits, database timeouts, and a fault-injection load test.",
    stack: ["Python", "PostgreSQL", "Redis", "TypeScript"],
    image: "/pics/freightproof.jpg",
    demo: "https://freightproof.co.za",
    demoLabel: "Website",
  },
  {
    title: "MaliGo Gamified Savings App",
    description:
      "Fintech startup in UCT's GenesisBloc Launchpad where I am co-founder and technical lead. Our three-person team built the core of a gamified savings app that helps young people build financial habits, now in pre-launch with a public waitlist.",
    stack: ["React Native", "Expo", "Supabase"],
    image: "/pics/maligo.jpg",
    demo: "https://maligo.co.za",
    demoLabel: "Website",
  },
  {
    title: "UniSwap Student Resale Storefront",
    description:
      "Deployed resale marketplace for UCT students with customer, guest, and admin flows, UCT-only role-based access, product and order management, simulated checkout, and AI-assisted summaries and search.",
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image: "/pics/uniswap.png",
    github: "https://github.com/Chiko-DK/UniSwap-Ecommerce_Store",
    demo: "https://uni-swap-ecommerce-store.vercel.app/",
  },
  {
    title: "ResVis Research Collaboration Network",
    description:
      "Capstone built in a team of three. Turns a university's publication export into an interactive collaboration network, with a Python parser that cleans metadata into SQLite and Cytoscape.js graphs weighted by shared publications.",
    stack: ["Python", "Node.js", "Express", "SQLite", "Vue.js", "Cytoscape.js"],
    image: "/pics/project-resviz.svg",
  },
  {
    title: "Scrum Poker Estimation Tool",
    description:
      "Real-time sprint estimation app built in a two-intern team during my Byte Orbit software development internship, supervised by a senior developer and presented to company stakeholders.",
    stack: ["Vue.js", "Vuetify", "Flask", "Socket.IO"],
    image: "/pics/scrum.png",
    github: "https://github.com/Chiko-DK/Scrum-Poker",
  },
  {
    title: "Lown Open Payment",
    description:
      "Hackathon fintech prototype for micro-lending, transparent digital agreements, wallet connection flows, and open payment standards.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Open Payments"],
    image: "/pics/project-lown.svg",
    github: "https://github.com/Chiko-DK/Lown_Open-payment",
  },
]
