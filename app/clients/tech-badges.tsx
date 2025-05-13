'use client'
import { Magnetic } from '@/components/ui/magnetic'
import { cn } from '@/lib/utils'

type TechBadgesProps = {
  technologies: string[]
}

export function TechBadges({ technologies }: TechBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <Magnetic
          key={tech}
          link="#"
          className={cn(
            "bg-zinc-100 dark:bg-zinc-800",
            "transition-transform hover:scale-105"
          )}
        >
          {tech}
        </Magnetic>
      ))}
    </div>
  )
} 