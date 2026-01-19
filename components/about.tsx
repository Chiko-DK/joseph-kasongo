import { Code2, GraduationCap, FolderKanban } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">

          {/* Content */}
          <div className="space-y-6 md:col-span-2">
            <span className="text-sm tracking-widest uppercase text-foreground/60">
              About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Building Meaningful Digital Experiences
            </h2>

            <div className="w-14 h-1 bg-accent rounded-full" />

            <p className="text-foreground/70 leading-relaxed">
              I am a creative front end focused developer passionate about building modern and responsive web
              experiences. I enjoy turning ideas into interfaces that feel simple, intentional, and usable.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              I believe in continuous learning, attention to detail, and combining logic with creativity
              to build products that actually solve problems.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <Code2 size={18} />
                  <h4 className="font-semibold text-foreground">Languages</h4>
                </div>
                <p className="text-sm text-foreground/60">
                  HTML, CSS, JavaScript, React
                </p>
              </div>

              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap size={18} />
                  <h4 className="font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-sm text-foreground/60">
                  BSc Computer Science & Business Computing
                </p>
              </div>

              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <FolderKanban size={18} />
                  <h4 className="font-semibold text-foreground">Projects</h4>
                </div>
                <p className="text-sm text-foreground/60">
                  Built more than 5 projects
                </p>
              </div>

            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center md:col-span-1">
            <div className="rounded-2xl overflow-hidden w-full max-w-sm bg-muted">
              <img
                src="/pics/profile.JPG"   // change later
                alt="Profile illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
