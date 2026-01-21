import type { Skill } from '@/components/skill-card'

export const skills: Skill[] = [
  {
    title: 'Frontend Engineering',
    description: 'Modern React apps using Next.js, TypeScript, Tailwind, and component-driven development.',
    bullets: ['Build responsive, production-style pages', 'Forms, validation, loading/error states', 'Performance-first rendering habits']
  },
  {
    title: 'Backend & APIs',
    description: 'Designing clean, secure APIs, edge functions, auth and databases.',
    bullets: ['REST APIs with clear contracts', 'SQL/NoSQL data handling', 'Testing & CI']
  },
  {
    title: 'DevOps & Cloud',
    description: 'Shipping projects reliably with practical deployments, containers, and debugging through logs.',
    bullets: ['Deployment automation', 'Docker & containers', 'Logs-first troubleshooting']
  },
  {
    title: 'FullStack Development',
    description: 'Building end-to-end applications with seamless integration between frontend and backend.',
    bullets: ['React + API integration', 'TypeScript across the stack', 'Cost-aware. maintainable builds']
  }

]
