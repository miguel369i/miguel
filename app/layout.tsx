import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { TabsPortfolio } from '@/components/tabs-portfolio'
import { TECH_STACK } from './data'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAFA',
}

export const metadata: Metadata = {
  title: 'Miguel Muñoz | Fullstack Developer Specializing in React & Next.js',
  description: 'Professional fullstack developer with expertise in React, Next.js, TypeScript, and SEO optimization. Building performant web applications with modern technologies like Node.js, PostgreSQL, and Docker.',
  keywords: [
    ...TECH_STACK.map(tech => tech.name),
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Freelance Developer',
    'Responsive Design',
    'Web Performance'
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: WEBSITE_URL,
    title: 'Miguel Muñoz | Fullstack Developer',
    description: 'Websites, web design, and development for businesses and individuals',
    images: [{
      url: `${WEBSITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Miguel Muñoz Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Muñoz | Fullstack Developer',
    description: 'React & Next.js specialist building high-performance web applications',
    images: [`${WEBSITE_URL}/og-image.png`],
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Miguel Muñoz',
  jobTitle: 'Fullstack Developer',
  url: WEBSITE_URL,
  sameAs: [
    'https://github.com/miguel369i',
    'https://www.linkedin.com/in/miguel369i/'
  ],
  knowsAbout: TECH_STACK.map(tech => tech.name)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              <TabsPortfolio />
              <main className="pt-14 min-h-screen">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
