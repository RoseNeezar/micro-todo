import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMAGES } from '../data/image'

import { useAuth } from '../store/AuthProvider'

const Home: React.FC<{ item: string }> = () => {
  const auth = useAuth()
  const location = useLocation()
  console.log('del')
  return (
    <div style={{ padding: '0 24px' }}>
      <h2 tw="bg-purple-200 font-bold text-green-500">
        Gallery againsssss thinkdas
      </h2>
      <h3>Thick ass</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}
      >
        {IMAGES.map(image => {
          return (
            <Link
              key={image.id}
              to={`/img/${image.id}`}
              // This is the trick! Set the `backgroundLocation` in location state
              // so that when we open the modal we still see the current page in
              // the background.
              state={{ backgroundLocation: location }}
            >
              <img
                width={200}
                height={200}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  height: 'auto',
                  borderRadius: '8px'
                }}
                src={image.src}
                alt={image.title}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
