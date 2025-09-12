'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/landing/Hero'
import ServiceCards from '@/components/landing/ServiceCards'
import HowItWorks from '@/components/landing/HowItWorks'
import DriverSignup from '@/components/landing/DriverSignup'
import AuthModal from '@/components/landing/AuthModal'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login')



  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Service Cards */}
        <ServiceCards />

        {/* How It Works */}
        <HowItWorks />

        {/* Driver Signup */}
        <DriverSignup />
      </main>

      {/* Footer */}
      <Footer />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        defaultTab={authModalTab}
      />
    </div>
  )
}