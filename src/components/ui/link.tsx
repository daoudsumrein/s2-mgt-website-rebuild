import React from 'react'

// Simple link component for Vike
export function Link({ 
  href, 
  children, 
  className,
  ...props 
}: { 
  href: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
