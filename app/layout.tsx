import { Analytics } from '@vercel/analytics/next'
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/metadata"
import type { Metadata, Viewport } from 'next'
import React from "react"
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  keywords: ['industrial engineering', 'industrial piping', 'insulation', 'jacketing', 'fire protection', 'pressure vessels', 'industrial contractor'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    type: 'website',
    siteName,
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
        url: '/favicon-wellins-new-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-wellins-new-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-wellins-new.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    shortcut: '/favicon-wellins-new.ico',
    apple: [
      {
        url: '/apple-icon-wellins-new.png',
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
