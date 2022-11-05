import React, {useState, useEffect} from 'react'
import VehiclesContainer from '../VehiclesContainer';
import Navbar from './Navbar';
import VehicleForm from './VehicleForm';

const Home = () => {
  const [vehicles, setVehicles] =useState([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/vehicles")
    .then(res => res.json())
    .then(data => {
      setVehicles(data)
    })
  }, []);

  const filteredVehiclesFromSearch = vehicles
    .filter((vehicle) => {
      if (selectedCategory === "All") {
        return vehicles
      } else {
        return vehicle.type === selectedCategory;
      }
    })
    .filter(vehicle => vehicle.model.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
        <Navbar 
        
        />
        <VehicleForm 
        
        />
        <VehiclesContainer 
            vehicles={filteredVehiclesFromSearch}
        />
    </div>
  )
}

export default Home