import { Link } from 'react-router-dom'
import Header from '@/components/general/Header'
import { useEffect } from 'react'

const countries = [
  {
    name: 'Argentina',
    path: '/ar/confirmacion?referrer=/previous-step&token=123',
    imageAlt: 'Bandera de Argentina',
    imageSrc: '../../public/assets/images/ar.png',
  },
  {
    name: 'Brasil',
    path: '/br/confirmacao?referrer=/previous-step&token=123',
    imageAlt: 'Bandeira do Brasil',
    imageSrc: '../../public/assets/images/br.png',
  },
  {
    name: 'Colombia',
    path: '/co/confirmacion?referrer=/previous-step&token=123',
    imageAlt: 'Bandera de Colombia',
    imageSrc: '../../public/assets/images/co.png',
  },
]

export default function Landing() {
  useEffect(() => {
    document.title = 'Selección de país | Mercado Libre'
  }, [])
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white py-12 px-4">
        <h1 className="font-proxima text-2xl font-bold text-ml-black text-center mb-10">
          Selecciona el portal de Mercado Libre
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-5xl mx-auto">
          {countries.map(({ name, path, imageAlt, imageSrc }) => (
            <Link
              key={path}
              to={path}
              className="block bg-ml-white rounded-sm hover:bg-ml-yellowLight transition-shadow overflow-hidden "
            >
              <div className="h-32 w-full bg-white flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-28 transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="font-proxima text-xl font-bold text-ml-black">{name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
