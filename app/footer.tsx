'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cloneElement } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1.5"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      <div className="flex flex-row gap-2">
        {THEMES_OPTIONS.map((theme) => {
          return (
            <button
              key={theme.id}
              className="inline-flex size-8 items-center justify-center rounded-md text-zinc-500 transition-colors duration-100 hover:bg-zinc-200/50 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:data-[checked=true]:text-zinc-50 md:size-9"
              type="button"
              aria-label={`Switch to ${theme.label} theme`}
              data-id={theme.id}
            >
              {cloneElement(theme.icon, {
                className: "size-4 md:size-5"
              })}
            </button>
          )
        })}
      </div>
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/miguel369i/" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} miguel369i.</span>
            <span>Let's work together!</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
