import type { Project } from '@/components/project-card'

export const projects: Project[] = [
  {
    title: 'ChiCommute App',
    description: 'A modern portfolio built with Next.js, TypeScript, Tailwind, and MDX — optimized for Vercel.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'Firebase', 'Firestore Database'],
    href: 'https://www.chicommute.com',
    image: '/projects/chicommute.png',
    imageAlt: 'Senior Capstone Project - ChiCommute App'
  },
  {
    title: 'Work-Desk Reservation',
    description: 'A microservices based work desk reservation system built with Spring Boot, Kafka, Keycloak, and PostgreSQL for secure desk booking and event driven communication. ',
    tags: ['Java', 'Microservices', 'Kafka', 'Docker'],
    href: 'https://github.com/denildominic/Work-Desk-Reservation.git',
    image: '/projects/deskreserve.png',
    imageAlt: 'Work Desk Reservation System'
  },
  {
    title: 'JobLedger',
    description: 'Prototype data platform using serverless functions and analytics with a simple UI.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    href: 'https://jobledger.vercel.app/',
    image: '/projects/bytebudget.png',
    imageAlt: 'Job Searching App'
  },
  {
    title: 'ByteBudget',
    description: 'Prototype data platform using serverless functions and analytics with a simple UI.',
    tags: ['Serverless', 'ETL', 'Analytics'],
    href: 'https://bytebudget.vercel.app/',
    image: '/projects/bytebudget.png',
    imageAlt: 'Budget tracking App'
  },
  {
    title: 'Professional Portfolio Website',
    description: 'A modern portfolio site built with Next.js, TypeScript, Tailwind CSS, and MDX, showcasing projects through an optimized React application.',
    tags: ['React', 'Typescript', 'Next.js', 'TailwindCSS', 'MDX', 'Vercel'],
    href: '#',
    image: '/projects/cover.jpg',
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
