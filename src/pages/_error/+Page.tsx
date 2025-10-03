import React from 'react'
import { Link } from '@/components/ui/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              <Search className="mr-2 h-5 w-5" />
              Browse Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export const documentProps = {
  title: '404 - Page Not Found | S2 Management',
  description: 'The page you are looking for could not be found.',
}
