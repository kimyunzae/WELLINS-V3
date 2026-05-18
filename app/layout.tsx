import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import React from "react"
import './globals.css'

const siteUrl = new URL('https://wellins.com')
const siteTitle = 'Wellins Inc. | Industrial Engineering Excellence'
const siteDescription =
  'Leading industrial engineering company specializing in piping, HVAC systems, equipment installation, and fire protection. Serving major manufacturers across the United States.'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  keywords: ['industrial engineering', 'piping', 'HVAC', 'equipment installation', 'fire protection', 'industrial contractor'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    type: 'website',
    siteName: 'Wellins Inc.',
    locale: 'en_US',
    images: [
      {
        url: '/social-card-wellins.png',
        width: 1200,
        height: 630,
        alt: 'Wellins Inc.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/social-card-wellins.png',
        alt: 'Wellins Inc.',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon-wellins-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-wellins-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-icon-wellins.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1f1f1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
