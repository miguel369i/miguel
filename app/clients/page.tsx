import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { clientsData } from './data';
import { TechBadges } from './tech-badges';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="container mx-auto px-2 py-8 max-w-7xl">
      {clientsData.map((client, index) => (
        <section key={client.name} className="mb-16 last:mb-0">

          {/* Profile Card */}
          <Card className="mb-8 border shadow-sm">
            <CardHeader className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
                <Image
                  src={client.profileImage || '/images/placeholder-profile.png'}
                  alt={`${client.name} - ${client.role} profile photo`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                  <CardTitle className="text-xl sm:text-2xl">{client.name}</CardTitle>
                  {client.status && (
                    <span className="text-red-500/80 text-sm font-medium uppercase tracking-wide">
                      {client.status}
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm sm:text-base mt-1">{client.role}</CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">
                  {client.description}
                </p>
              </div>
            </CardHeader>
          </Card>

          {/* Main Content */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Unified Project Preview */}
            <div className="w-full relative">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
                <Image
                  src={client.project.desktopImage}
                  alt={`${client.name} project interface screenshot - ${client.project.overview.substring(0, 50)}...`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Project preview</p>
            </div>

            {/* Project Overview */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
              <p className="text-muted-foreground mb-4">
                {client.project.overview}
              </p>
              {client.website && (
                <a 
                  href={client.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4"
                >
                  Visit website
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="border-b pb-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h3>
            <TechBadges technologies={client.technologies} />
          </div>
        </section>
      ))}
    </main>
  )
}

