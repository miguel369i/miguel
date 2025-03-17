'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from 'motion/react'
import { cn } from '@/lib/utils'

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 }

export interface MagneticProps {
  children: React.ReactNode
  intensity?: number
  range?: number
  actionArea?: 'self' | 'parent' | 'global'
  springOptions?: SpringOptions
  link?: string
  className?: string
}

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = 'self',
  springOptions = SPRING_CONFIG,
  link,
  className,
}: MagneticProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, springOptions)
  const springY = useSpring(y, springOptions)

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY

        const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        if (isHovered && absoluteDistance <= range) {
          const scale = 1 - absoluteDistance / range
          x.set(distanceX * intensity * scale)
          y.set(distanceY * intensity * scale)
        } else {
          x.set(0)
          y.set(0)
        }
      }
    }

    document.addEventListener('mousemove', calculateDistance)

    return () => {
      document.removeEventListener('mousemove', calculateDistance)
    }
  }, [ref, isHovered, intensity, range])

  useEffect(() => {
    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement

      const handleParentEnter = () => setIsHovered(true)
      const handleParentLeave = () => setIsHovered(false)

      parent.addEventListener('mouseenter', handleParentEnter)
      parent.addEventListener('mouseleave', handleParentLeave)

      return () => {
        parent.removeEventListener('mouseenter', handleParentEnter)
        parent.removeEventListener('mouseleave', handleParentLeave)
      }
    } else if (actionArea === 'global') {
      setIsHovered(true)
    }
  }, [actionArea])

  const handleMouseEnter = () => {
    if (actionArea === 'self') {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (actionArea === 'self') {
      setIsHovered(false)
      x.set(0)
      y.set(0)
    }
  }

  const content = (
    <motion.div
      ref={ref}
      className={cn("flex items-center justify-center px-3 py-1 text-sm rounded-full", className)}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseEnter={() => actionArea === 'self' && setIsHovered(true)}
      onMouseLeave={() => actionArea === 'self' && setIsHovered(false)}
    >
      {children}
    </motion.div>
  )

  return link ? (
    <a href={link} className="inline-block">
      {content}
    </a>
  ) : content;
}
