import React, {useState, useEffect} from 'react'
import VehiclesContainer from '../VehiclesContainer';


const VehiclesPage = ({vehicles, setVehicles}) => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/vehicles")
    .then(res => res.json())
    .then(data => {
      setVehicles(data)
    })
  }, [setVehicles]);

  
  const handleCategoryChange = (event) => {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  }
  
  const handleSearch = e => {
    setSearch(e.target.value)
  }
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
      <VehiclesContainer 
        vehicles={filteredVehiclesFromSearch}
        search={search}
        category={selectedCategory}
        onSearchChange={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  )
}

export default VehiclesPage