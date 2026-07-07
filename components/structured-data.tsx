import { profile, projects, siteUrl } from "@/lib/site"

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Joseph Kasongo Portfolio",
        url: siteUrl,
        description: profile.description,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile-page`,
        url: siteUrl,
        name: `${profile.name} - ${profile.title}`,
        description: profile.description,
        primaryImageOfPage: profile.image,
        mainEntity: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        alternateName: profile.alternateNames,
        url: siteUrl,
        image: profile.image,
        jobTitle: profile.title,
        description: profile.description,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        sameAs: [profile.github, profile.linkedin, profile.instagram],
        knowsLanguage: profile.languages,
        knowsAbout: profile.skills,
        homeLocation: {
          "@type": "Place",
          name: profile.location,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Cape Town",
          sameAs: "https://www.uct.ac.za/",
        },
        hasCredential: profile.education.map((education) => ({
          "@type": "EducationalOccupationalCredential",
          name: education,
        })),
        subjectOf: [{ "@id": `${siteUrl}/docs/CV.pdf#resume` }],
        mainEntityOfPage: { "@id": `${siteUrl}/#profile-page` },
      },
      {
        "@type": "DigitalDocument",
        "@id": `${siteUrl}/docs/CV.pdf#resume`,
        name: `${profile.name} CV`,
        url: profile.cv,
        encodingFormat: "application/pdf",
        about: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Featured software projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.description,
            programmingLanguage: project.stack,
            codeRepository: project.github,
            url: project.demo ?? project.github ?? siteUrl,
            image: `${siteUrl}${project.image}`,
            creator: { "@id": `${siteUrl}/#person` },
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
