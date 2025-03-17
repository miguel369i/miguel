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
    <div className="fixed right-4 top-4 z-50">
      <Tabs defaultValue="profile" onValueChange={handleTabChange}>
        <TabsList className="flex h-auto flex-col items-end gap-4 rounded-lg bg-transparent p-3">
          <TabsTrigger
            value="profile"
            className="h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent"
          >
            <span className="sr-only">Profile</span>
            <BriefcaseBusiness className="size-7" strokeWidth={1.5} />
          </TabsTrigger>
          <TabsTrigger
            value="clients"
            className="h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent"
          >
            <span className="sr-only">Clients</span>
            <UsersRound className="size-7" strokeWidth={1.5} />
          </TabsTrigger>
          <TabsTrigger
            value="testing"
            className="h-12 w-12 rounded-full border-2 border-transparent p-0 transition-all hover:border-foreground/30 data-[state=active]:border-foreground data-[state=active]:bg-transparent"
          >
            <span className="sr-only">Testing</span>
            <TriangleAlert className="size-7" strokeWidth={1.5} />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
} 