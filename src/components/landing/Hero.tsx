'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LocationSearch from '@/components/LocationSearch'

const rideTypes = [
  {
    id: 'uberx',
    name: 'UberX',
    description: 'Affordable everyday rides',
    price: '$8.50',
    time: '3 min',
    capacity: '4 seats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1a25077-231f-4f19-b64e-e05b7949527e.png'
  },
  {
    id: 'comfort',
    name: 'Comfort',
    description: 'Newer cars with extra legroom',
    price: '$12.75',
    time: '5 min',
    capacity: '4 seats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd94c756-b290-456e-8c69-d8549d815748.png'
  },
  {
    id: 'xl',
    name: 'UberXL',
    description: 'Bigger cars for groups up to 6',
    price: '$16.20',
    time: '4 min',
    capacity: '6 seats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c655c662-fd72-466e-be66-7a2dd471b817.png'
  },
  {
    id: 'black',
    name: 'Uber Black',
    description: 'Premium rides in luxury cars',
    price: '$28.90',
    time: '8 min',
    capacity: '4 seats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ada6d780-71cc-4f0b-90de-1819c861a04a.png'
  }
]

export default function Hero() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedRide, setSelectedRide] = useState('uberx')
  const [showRideOptions, setShowRideOptions] = useState(false)

  const handleRequestRide = () => {
    if (pickup && destination) {
      setShowRideOptions(true)
    }
  }

  const handleBookRide = () => {
    // Simulate booking process
    alert(`Booking ${rideTypes.find(r => r.id === selectedRide)?.name} from ${pickup} to ${destination}`)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7edd37f9-1aff-411c-8f2d-4750d19a28b7.png"
          alt="Modern city skyline with busy streets"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Go anywhere with{' '}
              <span className="text-black">Uber</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
              Request a ride, hop in, and go. Choose from multiple ride types and 
              enjoy a safe, convenient ride to your destination.
            </p>
            
            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600">Available anytime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-black">5 min</div>
                <div className="text-sm text-gray-600">Average pickup time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-black">Safe</div>
                <div className="text-sm text-gray-600">Background-checked drivers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Interface */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <Card className="p-6 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <Tabs defaultValue="ride" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="ride" className="data-[state=active]:bg-black data-[state=active]:text-white">
                    Ride
                  </TabsTrigger>
                  <TabsTrigger value="delivery">Delivery</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ride" className="space-y-4">
                  {!showRideOptions ? (
                    <>
                      {/* Pickup Location */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Pickup location
                        </label>
                        <LocationSearch
                          placeholder="Enter pickup location"
                          value={pickup}
                          onChange={setPickup}
                          icon={
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          }
                        />
                      </div>

                      {/* Destination */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Destination
                        </label>
                        <LocationSearch
                          placeholder="Where to?"
                          value={destination}
                          onChange={setDestination}
                          icon={
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          }
                        />
                      </div>

                      {/* Request Ride Button */}
                      <Button
                        onClick={handleRequestRide}
                        disabled={!pickup || !destination}
                        className="w-full h-12 bg-black text-white hover:bg-gray-800 disabled:bg-gray-300 mt-6"
                      >
                        See prices
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Back Button */}
                      <Button
                        variant="ghost"
                        onClick={() => setShowRideOptions(false)}
                        className="mb-4 p-0 h-auto font-normal text-gray-600 hover:text-black"
                      >
                        ← Back to search
                      </Button>

                      {/* Route Info */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="text-sm text-gray-600">From</div>
                        <div className="font-medium text-gray-900 truncate">{pickup}</div>
                        <div className="text-sm text-gray-600 mt-1">To</div>
                        <div className="font-medium text-gray-900 truncate">{destination}</div>
                      </div>

                      {/* Ride Options */}
                      <div className="space-y-3">
                        <h3 className="font-medium text-gray-900">Choose a ride</h3>
                        {rideTypes.map((ride) => (
                          <div
                            key={ride.id}
                            onClick={() => setSelectedRide(ride.id)}
                            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                              selectedRide === ride.id
                                ? 'bg-gray-100 border-2 border-black'
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <img
                              src={ride.image}
                              alt={ride.name}
                              className="w-12 h-9 object-cover rounded"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-gray-900">{ride.name}</div>
                                <div className="font-bold text-gray-900">{ride.price}</div>
                              </div>
                              <div className="text-sm text-gray-600">{ride.description}</div>
                              <div className="text-xs text-gray-500">
                                {ride.time} • {ride.capacity}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Book Ride Button */}
                      <Button
                        onClick={handleBookRide}
                        className="w-full h-12 bg-black text-white hover:bg-gray-800 mt-6"
                      >
                        Book {rideTypes.find(r => r.id === selectedRide)?.name}
                      </Button>
                    </>
                  )}
                </TabsContent>

                <TabsContent value="delivery" className="space-y-4">
                  <div className="text-center py-8">
                    <div className="text-gray-600 mb-4">🚚</div>
                    <h3 className="font-medium text-gray-900 mb-2">Uber Delivery</h3>
                    <p className="text-sm text-gray-600">
                      Send packages across town with Uber's delivery service
                    </p>
                    <Button className="mt-4 bg-black text-white hover:bg-gray-800">
                      Coming soon
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}