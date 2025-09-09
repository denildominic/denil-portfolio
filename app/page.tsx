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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="section">
        <div className="container text-center">
          <p className="text-sm uppercase tracking-widest opacity-70">Hello, I&apos;m</p>
          <div className="mt-10 flex justify-center">
            <figure className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl bg-black/5 dark:bg-white/5">
              <Image src="/me.jpg" alt="Your portrait" fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" style={{ objectPosition: '50% 35%' }} priority />
            </figure>
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold">A developer who<span className="mx-3 inline-block rounded-xl bg-pink-500/15 px-3 py-2 dark:bg-pink-400/20">❤️</span>engineering</h1>
          <p className="mt-6 text-lg opacity-80 max-w-2xl mx-auto">Build, ship, repeat — I craft performant web apps, scalable data platforms, and delightful user experiences.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline" href="#projects">View Projects</a>
            <a className="rounded-xl border px-5 py-3 no-underline" href="#contact">Contact</a>
          </div>
        </div>
      </section>

      {/* About (MDX) */}
      <Section id="about" title="About Me" subtitle="Who I am & what I do">
        <div className="prose prose-neutral dark:prose-invert max-w-none"><About /></div>
        <div className="mt-6">
          <a href="/resume" className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline">View Resume</a>
          <a href="/resume.pdf" target="_blank" className="ml-3 rounded-xl border px-5 py-3 no-underline">Download PDF</a>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="My Skills" subtitle="Turning knowledge into impact">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{skills.map(s => <SkillCard key={s.title} {...s} />)}</div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A few things I’ve built">
        <div className="grid gap-6 md:grid-cols-2">{projects.map(p => <ProjectCard key={p.title} {...p} />)}</div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Places I’ve worked">
        <div className="space-y-6">{experiences.map(e => <ExperienceItem key={e.company + e.period} {...e} />)}</div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Me" subtitle="Have a question or want to work together?">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card"><ContactForm /></div>
          <div className="card"><h3 className="text-xl font-semibold">Elsewhere</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="https://github.com/" target="_blank" className="nav">GitHub</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" className="nav">LinkedIn</a></li>
              <li><a href="https://x.com/" target="_blank" className="nav">X (Twitter)</a></li>
            </ul></div>
        </div>
      </Section>
    </>
  )
}
