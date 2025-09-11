import About from '@/content/about.mdx'
import { projects } from '@/content/projects'
import { skills } from '@/content/skills'
import { experiences } from '@/content/experience'
import { ProjectCard } from '@/components/project-card'
import { SkillCard } from '@/components/skill-card'
import { ExperienceItem } from '@/components/experience-item'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import Image from 'next/image'
import { HeroPortrait } from '@/components/hero-portrait'


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="section">
        <div className="container text-center">
          <p className="text-sm uppercase tracking-widest opacity-70">Hello, I&apos;m</p>

          {/* Profile image */}
    <div className="mt-10 flex justify-center">
  <figure className="relative w-full max-w-4xl aspect-video overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl">
    <Image
      src="/me.jpg"
      alt="Denil Dominic"
      fill
      sizes="(max-width: 768px) 100vw, 1024px"
      className="object-cover object-center"
      priority
    />
  </figure>
</div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold">
  An 
  <span className="mx-3 inline-block rounded-xl bg-pink-500/15 px-3 py-2 dark:bg-pink-400/20">Aspiring Software Engineer.</span>
  
</h1>
          <p className="mt-6 text-lg opacity-80 max-w-2xl mx-auto">
            Build, ship, repeat — I craft performant web apps, scalable data platforms, and delightful user experiences.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
               href="#projects">View Projects</a>
            <a className="rounded-xl border px-5 py-3 no-underline" href="#contact">Contact</a>
          </div>
        </div>
      </section>

      {/* About (MDX) */}
      <Section id="about" title="About Me" subtitle="Who I am & what I do">
  <div className="prose prose-neutral dark:prose-invert max-w-none">
    <About />
  </div>

  <div className="mt-6">
    <a
      href="/resume"
      className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
    >
      View Resume
    </a>
    <a
      href="/resume.pdf"
      target="_blank"
      className="ml-3 rounded-xl border px-5 py-3 no-underline"
    >
      Download PDF
    </a>
  </div>
</Section>


      {/* Skills */}
      <Section id="skills" title="My Skills" subtitle="Turning knowledge into impact"
      containerClassName="px-3 sm:px-4 lg:px-6" 
      >
        <p className="mt-2 text-lg opacity-80 mx-left">
            Here are some of my skills where I have turned knowledge into expertise, making things happen.
          </p>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((s) => (
            <SkillCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A few things I’ve built">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Places I’ve worked">
        <div className="space-y-6">
          {experiences.map((e) => (
            <ExperienceItem key={e.company + e.period} {...e} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Me" subtitle="Have a question or want to work together?">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <ContactForm />
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">E-mail</h3>
            <ul className="mt-3 space-y-2 mb-6 md:mb-8">
  <li>
    <a
      href="mailto:contact@denil-dominic.com?subject=Hello%20Denil&body=Hi%20Denil,%0D%0A"
      className="nav break-words"
      aria-label="Email Denil Dominic"
    >
      contact@denil-dominic.com
    </a>
  </li>
</ul>
            <h3 className="text-xl font-semibold">Socials</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="https://github.com/denildominic" target="_blank" className="nav">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/denildominic" target="_blank" className="nav">LinkedIn</a></li>
              
              
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
