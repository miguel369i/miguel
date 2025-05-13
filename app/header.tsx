'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  return (
    <header className="-mb-8 space-y-4">
      <div className="flex items-center">
        <img
          src="/miguel.jpg"
          alt="Miguel Muñoz profile"
          className="mr-4 h-12 w-12 rounded-lg object-cover"
          width={40}
          height={40}
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Miguel Muñoz
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Fullstack Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
