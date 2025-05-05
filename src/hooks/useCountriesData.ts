import { useEffect, useState } from 'react'
import axios from 'axios'

interface Country {
  code: string
  name: string
  lang: string
  regions: string[]
}

export default function useCountriesData() {
  const [countries, setCountries] = useState<{ code: string; name: string; lang: string }[]>([])
  const [countryRegions, setCountryRegions] = useState<Record<string, string[]>>({})

  useEffect(() => {
    axios
      .get<Country[]>('http://localhost:8000/api/meli-countries')
      .then((res) => {
        const allCountries = res.data.map((c) => ({
          code: c.code,
          name: c.name,
          lang: c.lang,
        }))

        const allRegions: Record<string, string[]> = {}
        res.data.forEach((c) => {
          allRegions[c.code] = c.regions
        })

        setCountries(allCountries)
        setCountryRegions(allRegions)
      })
      .catch((error) => console.error('Error al obtener países:', error))
  }, [])

  return { countries, countryRegions }
}
