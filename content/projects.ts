import type { Project } from '@/components/project-card'

export const projects: Project[] = [
  {
    title: 'ChiCommute App',
    description: 'A modern portfolio built with Next.js, TypeScript, Tailwind, and MDX — optimized for Vercel.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'Firebase'],
    href: 'https://www.chicommute.com',
    image: '/projects/chicommute.png',
    imageAlt: 'Senior Capstone Project - ChiCommute App'
  },
  {
    title: 'ByteBudget',
    description: 'Prototype data platform using serverless functions and analytics with a simple UI.',
    tags: ['Serverless', 'ETL', 'Analytics'],
    href: '#',
    image: '/projects/bytebudget.png',
    imageAlt: 'Budget tracking App'
  },
  {
    title: 'Agentic Assistant Demo',
    description: 'An experiment with LLM tools and workflows for research and content generation.',
    tags: ['LLM', 'Agents', 'OpenAI'],
    href: '#',
    image: '/projects/portfolio.jpg',
    imageAlt: 'Portfolio website on a laptop'
  },
  
  {
    title: 'Tetris Game',
    description: 'A Tetris game created with Java and Maven, featuring a graphical user interface and responsive controls.',
    tags: ['Java', 'CSS', 'Maven'],
    href: 'https://github.com/denildominic/Tetris.git',
    image: '/projects/tetris.png',
    imageAlt: 'Tetris Game'
  }
  

]
