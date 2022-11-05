import React from 'react'
import VehicleCard from './components/VehicleCard'
// import { Link } from "react-router-dom";

const VehiclesContainer = ({vehicles}) => {
    const renderVehicle = vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicles={vehicle} />
      ))  
    // const renderVehicle = Object.keys(vehicles).map((vehicleID) => (
    //     <li key={vehicleID}>
    //       <Link to={`/vehicles/${vehicleID}`}>{vehicles[vehicleID].model}</Link>
    //     </li>
    //   ));
  return (
    <div className='cards'>{renderVehicle}</div>

  )
}

export default VehiclesContainer