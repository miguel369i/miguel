'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BriefcaseBusiness, UsersRound, TriangleAlert } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function TabsPortfolio() {
  const router = useRouter()

  const handleTabChange = (value: string) => {
    router.push(`/${value === 'profile' ? '' : value}`)
  }

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed right-4 top-4 z-50 max-md:hidden">
        <Tabs defaultValue="profile" onValueChange={handleTabChange}>
          <TabsList className="flex h-auto flex-col items-end gap-4 rounded-lg bg-transparent p-3 opacity-20 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100">
            <TabsTrigger
              value="profile"
              className="group relative h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent"
            >
              <span className="sr-only">Profile</span>
              <BriefcaseBusiness className="size-7" strokeWidth={1.5} />
              <span className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.5rem)] -translate-y-1/2 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[state=active]:opacity-100">
                Portfolio
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="group relative h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent"
            >
              <span className="sr-only">Clients</span>
              <UsersRound className="size-7" strokeWidth={1.5} />
              <span className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.5rem)] -translate-y-1/2 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[state=active]:opacity-100">
                Cases
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="testing"
              disabled
              className="group relative h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent opacity-50 cursor-not-allowed"
            >
              <span className="sr-only">Testing</span>
              <TriangleAlert className="size-7" strokeWidth={1.5} />
              <span className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.5rem)] -translate-y-1/2 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-data-[state=active]:opacity-100">
                Testing (Coming Soon)
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
        <Tabs defaultValue="profile" onValueChange={handleTabChange}>
          <TabsList className="flex h-16 flex-row items-center justify-around rounded-t-lg bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <TabsTrigger
              value="profile"
              className="h-10 w-10 rounded-full p-0 data-[state=active]:bg-accent"
            >
              <BriefcaseBusiness className="size-5" strokeWidth={1.5} />
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="h-10 w-10 rounded-full p-0 data-[state=active]:bg-accent"
            >
              <UsersRound className="size-5" strokeWidth={1.5} />
            </TabsTrigger>
            <TabsTrigger
              value="testing"
              disabled
              className="h-10 w-10 rounded-full p-0 data-[state=active]:bg-accent opacity-50 cursor-not-allowed"
            >
              <TriangleAlert className="size-5" strokeWidth={1.5} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  )
} 