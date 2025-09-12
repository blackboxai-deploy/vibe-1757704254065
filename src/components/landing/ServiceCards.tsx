'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'ride',
    title: 'Ride',
    description: 'Go anywhere with Uber. Request a ride, hop in, and go.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5f6a366-607f-4132-b584-1472d90dbc73.png',
    features: ['Choose your ride', 'Affordable prices', '24/7 availability'],
    ctaText: 'Get a ride'
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'Make money driving on your schedule. Sign up to drive with Uber.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e7a01ac-5c7f-4759-b19e-54152363c754.png',
    features: ['Flexible schedule', 'Weekly payments', 'Driver support'],
    ctaText: 'Start driving'
  },
  {
    id: 'business',
    title: 'Uber for Business',
    description: 'Transform the way your company moves with Uber for Business.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c026560b-a3c9-4c1e-8bfa-9ab86f26fbcb.png',
    features: ['Expense management', 'Central billing', 'Travel insights'],
    ctaText: 'Get started'
  },
  {
    id: 'freight',
    title: 'Uber Freight',
    description: 'A technology platform that connects carriers and shippers.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5e178f9-2af9-4bec-b23c-e25be3da18b3.png',
    features: ['Real-time tracking', 'Instant booking', 'Reliable network'],
    ctaText: 'Learn more'
  }
]

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Uber you know, reimagined for business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uber for Business is a platform for managing global rides and meals programs. 
            We can help make transportation a competitive advantage.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full mt-4 border-black text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  {service.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl py-16 px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of people who rely on Uber to get around. 
            Sign up today and get your first ride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-8 py-3">
              Sign up to ride
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-black text-black hover:bg-black hover:text-white px-8 py-3"
            >
              Sign up to drive
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}