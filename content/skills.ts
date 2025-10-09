import type { Skill } from '@/components/skill-card'

export const skills: Skill[] = [
  {
    title: 'Frontend Engineering',
    description: 'Modern React apps using Next.js, TypeScript, Tailwind, and component-driven development.',
    bullets: ['Accessibility-first', 'Performance budgets', 'Server Components']
  },
  {
    title: 'Backend & APIs',
    description: 'Designing clean, secure APIs, edge functions, auth and databases.',
    bullets: ['REST & GraphQL', 'SQL/NoSQL', 'Testing & CI']
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deployments on Vercel, AWS, and Docker with observability baked in.',
    bullets: ['IaC mindset', 'Monitoring & logs', 'Cost awareness']
  },
  {
    title: 'FullStack Development',
    description: 'Building end-to-end applications with seamless integration between frontend and backend.',
    bullets: ['React', 'Tailwind CSS', 'TypeScript', 'Cost awareness']
  }

]
