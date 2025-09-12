'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: '💰',
    title: 'Earn money',
    description: 'Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.'
  },
  {
    icon: '⏰',
    title: 'Work flexibly',
    description: 'You decide when, where, and how you want to earn. Drive during peak times to maximize your earnings or work part-time.'
  },
  {
    icon: '🛡️',
    title: 'Stay protected',
    description: 'Every ride is covered by insurance from the moment you accept a trip until you drop off your rider.'
  },
  {
    icon: '📱',
    title: 'Easy to use',
    description: 'The Driver app is built to help you earn. Get turn-by-turn directions, tools to help you earn more, and 24/7 support.'
  }
]

const requirements = [
  'Meet the minimum age to drive in your city',
  'Have at least one year of licensed driving experience',
  'Have a valid driver\'s license',
  'Use an eligible 4-door vehicle',
  'Pass a background screening'
]

const earningsData = [
  { city: 'New York', hourly: '$25-35', peak: '$40-50' },
  { city: 'Los Angeles', hourly: '$20-30', peak: '$35-45' },
  { city: 'Chicago', hourly: '$18-28', peak: '$30-40' },
  { city: 'Miami', hourly: '$15-25', peak: '$25-35' }
]

export default function DriverSignup() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Drive when you want, make what you need
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Make money on your schedule with deliveries or rides—or both. 
              You can use your own car or choose a rental through Uber.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Get started
              </Button>
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Column - Driver Image */}
          <div className="relative">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bdff6619-379b-477b-a36a-d5652a5ccccf.png"
              alt="Professional Uber driver standing next to modern car"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            {/* Overlay Card */}
            <Card className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">$25-35</div>
                  <div className="text-sm text-gray-600">Average hourly earnings</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Requirements to drive with Uber
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Requirements List */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Driver requirements</h4>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-800">
                  <strong>Note:</strong> Requirements may vary by city. 
                  Additional requirements may apply depending on your location.
                </div>
              </div>
            </div>

            {/* Earnings by City */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Earnings by city</h4>
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-3">
                  {earningsData.map((city, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div className="font-medium text-gray-900">{city.city}</div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{city.hourly}/hr</div>
                        <div className="text-xs text-gray-500">Peak: {city.peak}/hr</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  *Earnings may vary by time, location, and other factors.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Ready to start earning?
            </h4>
            <p className="text-gray-600 mb-6">
              Sign up to drive with Uber and start earning money on your schedule.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              Apply to drive
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}