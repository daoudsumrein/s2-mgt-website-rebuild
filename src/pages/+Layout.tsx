import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
