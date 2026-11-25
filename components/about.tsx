import { BriefcaseBusiness, Code2, FolderKanban, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="space-y-6 md:col-span-2">
            <span className="text-sm tracking-widest uppercase text-foreground/60">
              About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Building Meaningful Digital Experiences
            </h2>

            <div className="w-14 h-1 bg-accent rounded-full" />

            <p className="text-foreground/70 leading-relaxed">
              I am Joseph Kasongo, most people call me Chiko, a full stack software developer based in Cape Town, South Africa. I hold a BSc in Computer Science and Business Computing from the University of Cape Town, and I completed a BCom Honours in Information Systems in November 2026, with honours research on cybersecurity awareness assessment.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              I enjoy building products from problem discovery to working software. I co-founded FreightProof, a road-freight evidence platform that placed 2nd in UCT&apos;s 2026 IS Honours capstone. And I am the technical lead of MaliGo, a fintech startup in UCT&apos;s GenesisBloc Launchpad. My work also spans a deployed student marketplace, data visualisation, PyTorch models, and reporting tools for real organisations.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              Tutoring at UCT since 2024, a software development internship at Byte Orbit, and technical support work at Payment24 have built my communication, mentoring, problem-solving, and stakeholder presentation skills alongside my engineering work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <Code2 size={18} />
                  <h3 className="font-semibold text-foreground">Focus</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Full stack web apps, mobile dev, backend APIs, dashboards, and data-driven tools.
                </p>
              </div>

              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap size={18} />
                  <h3 className="font-semibold text-foreground">Education</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  UCT BSc Computer Science & Business Computing, conferred 2025 (Dean&apos;s Merit List 2023 and 2024). BCom Honours in Information Systems, completing Nov 2026.
                </p>
              </div>

              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <BriefcaseBusiness size={18} />
                  <h3 className="font-semibold text-foreground">Experience</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Co-founder and Technical Lead at MaliGo, UCT tutor for Systems Analysis, Design and Development since 2024, and Software Development Intern at Byte Orbit.
                </p>
              </div>

              <div className="border rounded-xl p-4 space-y-2 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-accent">
                  <FolderKanban size={18} />
                  <h3 className="font-semibold text-foreground">Projects</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Built FreightProof, MaliGo, UniSwap, ResVis, Scrum Poker, and other web, API, fintech, and data-focused products.
                </p>
              </div>

            </div>
          </div>
          
          <div className="flex justify-center md:col-span-1">
            <div className="rounded-2xl overflow-hidden w-full max-w-sm bg-muted border border-border shadow-sm">
              <Image
                src="/pics/profile.JPG"
                alt="Joseph Kasongo profile portrait"
                width={520}
                height={640}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
