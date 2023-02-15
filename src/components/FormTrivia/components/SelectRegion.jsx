import { useEffect, useState } from 'react'
import regionsData from '@/data/regions.json'

const SelectRegion = ({ className, hookForm }) => {
  const [regions, setRegions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { register } = hookForm

  useEffect(() => {
    setIsLoading(true)
    const regiones = Object.keys(regionsData).map(region => ({
      name: region,
      code: regionsData[region],
    }))
    setRegions(regiones)
    setIsLoading(false)
  }, [])

  return (
    <select className={className} {...register('region')}>
      <option value={''}>Seleccione pais</option>
      {isLoading ||
        regions.map(region => (
          <option key={region.name} value={region.code}>
            {region.name}
          </option>
        ))}
    </select>
  )
}

export default SelectRegion
