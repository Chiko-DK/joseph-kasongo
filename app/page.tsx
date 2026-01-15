import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Experience from "@/components/experience"
// import Interests from "@/components/interests"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="section-divider" />
        <About />
        {/* <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Interests />
        <div className="section-divider" />
        <Contact /> */}
      </div>
      {/* <Footer /> */}
    </main>
  )
}
