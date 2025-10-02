import React, { useEffect, useRef } from 'react'

const Map = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      // Dynamic import to avoid SSR issues
      import('leaflet').then((L) => {
        // Import CSS
        import('leaflet/dist/leaflet.css')

        // Fix for default markers
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        })

        // Inoviso coordinates
        const position = [47.3297, -1.6225]

        // Create map
        const map = L.map(mapRef.current, {
          scrollWheelZoom: false,
        }).setView(position, 15)

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        // Add marker
        const marker = L.marker(position).addTo(map)
        marker.bindPopup(`
          <div style="text-align: center; font-family: system-ui, -apple-system, sans-serif;">
            <strong style="font-size: 16px; color: #1f2937;">Inoviso</strong><br />
            <span style="color: #6b7280;">5 rue des Frères Lumière</span><br />
            <span style="color: #6b7280;">44119 Treillières</span><br />
            <a href="tel:0240138322" style="color: #2563eb; text-decoration: none; font-weight: 500;">
              02 40 13 83 22
            </a>
          </div>
        `)

        mapInstanceRef.current = map
      })
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={mapRef} 
      className="h-96 w-full rounded-lg overflow-hidden shadow-md bg-gray-200"
      style={{ minHeight: '384px' }}
    />
  )
}

export default Map
