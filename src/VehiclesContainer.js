import React from 'react'
import VehicleCard from './components/VehicleCard'

const VehiclesContainer = ({vehicles}) => {
    const renderVehicle = vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicles={vehicle} />
      ))  
  return (
    <div className='cards'>{renderVehicle}</div>

  )
}

export default VehiclesContainer