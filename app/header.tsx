'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  return (
    <header className="mb-8 space-y-4">
      <div className="flex items-center">
        <img
          src="/miguel.jpeg"
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
      
      <button
        className="w-full md:w-auto px-6 py-2 rounded-lg border font-medium transition-colors duration-200 ease-in-out flex items-center gap-2"
        style={{
          borderColor: '#25D366',
          color: '#25D366',
          backgroundColor: 'transparent'
        }}
        onClick={() => window.open('https://wa.me/5538992582682', '_blank')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#dcf8c6';
          e.currentTarget.style.color = '#128C7E';
          e.currentTarget.style.borderWidth = '2px';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#25D366';
          e.currentTarget.style.borderWidth = '1px';
        }}
      >
        Contact me
        <FaWhatsapp className="w-5 h-5 text-current" />
      </button>
    </header>
  )
}
