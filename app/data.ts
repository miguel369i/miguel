type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'E-commerce Platform',
    description:
      'Online store built with Next.js and Tailwind CSS, featuring WhatsApp integration for order processing and direct business communication.',
    link: 'https://sitemoraembalagens.vercel.app/',
    video: `https://ik.imagekit.io/5fi0iwob9/ecommerce.mp4?updatedAt=1740419323535`,
    id: 'project1',
  },
  {
    name: 'Custom Bag Design Platform',
    description: 'Web app for designing customized paper bags. Generates production-ready art files and automates order management/WhatsApp communication. Built with Next.js, Tailwind CSS, PostgreSQL, and Fabric.js.',
    link: 'https://mora-embalagens.vercel.app/',
    video: 'https://ik.imagekit.io/5fi0iwob9/bags.mp4?updatedAt=1740419322535',
    id: 'project2',
  },
  {
    name: 'Crie tu site landing page',
    description: 'Software development site offering one-time payment solutions for custom websites, e-commerce, and systems, with responsive design, SEO, and payment integrations.',
    link: 'https://crietu.site',
    video: 'https://ik.imagekit.io/5fi0iwob9/landing.mp4?updatedAt=1740485232937',
    id: 'project3',
  },
  {
    name: 'Tremunda - Astrology & Tarot Platform',
    description: 'A mystical online platform offering tarot readings and astrology services. Consultations via WhatsApp, natal chart calculators, and an eBook store. Built with Next.js and Tailwind CSS.',
    link: 'https://tremunda.vercel.app/',
    video: 'https://ik.imagekit.io/5fi0iwob9/tarot.mp4?updatedAt=17406595951492',
    id: 'project4'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Klaston Management',
    title: 'Full-stack Developer / Technical Support',
    start: '2025/02',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Mora Embalagens',
    title: 'Full-stack Developer / Designer',
    start: '2024/04',
    end: '2024/09',
    id: 'work2',
  },
  {
    company: 'Self-employed',
    title: 'Full-stack Developer',
    start: '2022/06',
    end: 'Present',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/poqwpms',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/miguelm369',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/crietusite',
  },
]

export const TECH_STACK = [
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'React', link: 'https://react.dev/' },
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'Nginx', link: 'https://www.nginx.com/' },
  { name: 'PHP', link: 'https://www.php.net/' },
  { name: 'SQL', link: 'https://www.w3schools.com/sql/' },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
]

export const EMAIL = 'one.cannot446@simplelogin.fr'
