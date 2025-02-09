
import { cn } from "@/lib/utils"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <Header />
      <main className={cn("w-full pt-32 pb-20", className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
