'use client'

const steps = [
  {
    id: 1,
    title: 'Request',
    description: 'Open the app and enter your destination. Request a ride and get matched with a nearby driver.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f972bd69-8627-42ed-a732-334fc74982d0.png',
    icon: '📱'
  },
  {
    id: 2,
    title: 'Ride',
    description: 'Get picked up by your driver. Follow your ride in real time and enjoy your journey.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7044116f-175e-4893-900a-6a25cbe759a2.png',
    icon: '🚗'
  },
  {
    id: 3,
    title: 'Relax',
    description: 'Arrive at your destination safely. Rate your driver and pay automatically through the app.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b6423f0-35b7-49ef-8a19-3055b2e32717.png',
    icon: '⭐'
  }
]

const features = [
  {
    title: 'Safety First',
    description: 'All drivers are background-checked and vehicles are regularly inspected.',
    stat: '99.9%',
    statLabel: 'Safe rides'
  },
  {
    title: 'Always Available',
    description: 'Request a ride anytime, anywhere. Uber is available 24/7 in your city.',
    stat: '24/7',
    statLabel: 'Availability'
  },
  {
    title: 'Transparent Pricing',
    description: 'No surprises. See upfront pricing before you book your ride.',
    stat: '100%',
    statLabel: 'Transparent'
  },
  {
    title: 'Fast Pickup',
    description: 'Average pickup time is just 5 minutes in most cities.',
    stat: '5 min',
    statLabel: 'Pickup time'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Uber works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting around with Uber is simple, safe, and convenient. 
            Here's how it works in just three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group">
              {/* Step Image */}
              <div className="relative mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <div className="text-4xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-12 border-t-2 border-dashed border-gray-300 transform -translate-x-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why choose Uber?
            </h3>
            <p className="text-lg text-gray-600">
              We're committed to providing safe, reliable, and convenient transportation for everyone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-6 group-hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-3xl font-bold text-black mb-1">{feature.stat}</div>
                  <div className="text-sm font-medium text-gray-600 mb-4">{feature.statLabel}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to ride with Uber?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Download the Uber app and get started today.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">📱</div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">🤖</div>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}