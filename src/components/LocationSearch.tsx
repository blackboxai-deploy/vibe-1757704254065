'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface LocationSearchProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
  onLocationSelect?: (location: { address: string; lat: number; lng: number }) => void
  icon?: React.ReactNode
}

const mockLocations = [
  { address: "Times Square, New York, NY", lat: 40.7580, lng: -73.9855 },
  { address: "Central Park, New York, NY", lat: 40.7829, lng: -73.9654 },
  { address: "Brooklyn Bridge, New York, NY", lat: 40.7061, lng: -73.9969 },
  { address: "Empire State Building, New York, NY", lat: 40.7484, lng: -73.9857 },
  { address: "Wall Street, New York, NY", lat: 40.7074, lng: -74.0113 },
  { address: "Madison Square Garden, New York, NY", lat: 40.7505, lng: -73.9934 },
  { address: "John F. Kennedy Airport, NY", lat: 40.6413, lng: -73.7781 },
  { address: "LaGuardia Airport, NY", lat: 40.7769, lng: -73.8740 },
]

export default function LocationSearch({ 
  placeholder, 
  value, 
  onChange, 
  onLocationSelect,
  icon 
}: LocationSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState(mockLocations)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value.trim() === '') {
      setFilteredLocations(mockLocations)
    } else {
      const filtered = mockLocations.filter(location =>
        location.address.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredLocations(filtered)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocationSelect = (location: typeof mockLocations[0]) => {
    onChange(location.address)
    setIsOpen(false)
    onLocationSelect?.(location)
  }

  return (
    <div className="relative flex-1">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className={`w-full h-12 ${icon ? 'pl-10' : 'pl-4'} pr-4 border-gray-300 focus:border-black focus:ring-black rounded-lg`}
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onChange('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
          >
            ×
          </Button>
        )}
      </div>

      {isOpen && filteredLocations.length > 0 && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
        >
          {filteredLocations.map((location, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleLocationSelect(location)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {location.address.split(',')[0]}
                  </div>
                  <div className="text-xs text-gray-500">
                    {location.address}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}