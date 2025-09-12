'use client'

import { Button } from '@/components/ui/button'

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '#about' },
      { name: 'Our offerings', href: '#services' },
      { name: 'Newsroom', href: '#news' },
      { name: 'Investors', href: '#investors' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' }
    ]
  },
  {
    title: 'Products',
    links: [
      { name: 'Ride', href: '#ride' },
      { name: 'Drive', href: '#drive' },
      { name: 'Deliver', href: '#deliver' },
      { name: 'Uber for Business', href: '#business' },
      { name: 'Uber Freight', href: '#freight' },
      { name: 'Gift cards', href: '#gift-cards' }
    ]
  },
  {
    title: 'Global citizenship',
    links: [
      { name: 'Safety', href: '#safety' },
      { name: 'Diversity and Inclusion', href: '#diversity' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Community', href: '#community' }
    ]
  },
  {
    title: 'Travel',
    links: [
      { name: 'Reserve', href: '#reserve' },
      { name: 'Airports', href: '#airports' },
      { name: 'Cities', href: '#cities' }
    ]
  }
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Instagram', href: '#', icon: '📷' }
]

const cities = [
  'New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Washington DC',
  'Boston', 'Atlanta', 'Phoenix', 'Dallas', 'Houston', 'Miami', 'Seattle'
]

const appStores = [
  {
    name: 'App Store',
    subtitle: 'Download on the',
    icon: '🍎',
    href: '#'
  },
  {
    name: 'Google Play',
    subtitle: 'Get it on',
    icon: '📱',
    href: '#'
  }
]

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Downloads */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get the Uber app</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Scan the QR code to download the free app or download directly from the app stores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {appStores.map((store, index) => (
                  <a
                    key={index}
                    href={store.href}
                    className="flex items-center space-x-3 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-2xl">{store.icon}</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">{store.subtitle}</div>
                      <div className="text-sm font-semibold">{store.name}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* QR Code */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/391c4875-cfbf-42e5-be6d-b20af48dca2f.png"
                    alt="QR Code for Uber app download"
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-sm text-gray-400">
                  Scan to download the Uber app
                </div>
              </div>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-xl font-bold mb-6">Available in these cities</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors py-1"
                  >
                    {city}
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                className="mt-4 text-gray-300 hover:text-white p-0 h-auto font-normal text-sm"
              >
                View all cities →
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:opacity-75 transition-opacity"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 px-4 py-2 text-sm"
              >
                🌐 English
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold">Uber</div>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Uber Technologies Inc.
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}