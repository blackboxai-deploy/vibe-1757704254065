import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uber - Request a ride, hop in, and go',
  description: 'Request a ride, hop in, and go. Choose from multiple ride types and enjoy a safe, convenient ride to your destination.',
  keywords: ['uber', 'ride', 'taxi', 'transportation', 'ride sharing', 'car service'],
  authors: [{ name: 'Uber Technologies Inc.' }],
  openGraph: {
    title: 'Uber - Request a ride, hop in, and go',
    description: 'Request a ride, hop in, and go. Choose from multiple ride types and enjoy a safe, convenient ride to your destination.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uber - Request a ride, hop in, and go',
    description: 'Request a ride, hop in, and go. Choose from multiple ride types and enjoy a safe, convenient ride to your destination.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}