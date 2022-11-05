import React, {useState, useEffect} from 'react'
import VehiclesContainer from '../VehiclesContainer';
import Navbar from './Navbar';
import VehicleForm from './VehicleForm';
import { Route, Switch } from "react-router-dom";


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

  const handleAddVehicle = (newVehicle) => {
    setVehicles([newVehicle, ...vehicles])
  }
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
        <Navbar 
            search={search}
            category={selectedCategory}
            onSearchChange={handleSearch}
            onCategoryChange={handleCategoryChange}
        />
        <Switch>
            <Route path='/addvehicle'>
            <VehicleForm 
                onAddVehicle={handleAddVehicle}
            />
            </Route>
            <Route exact path='/'>
            <VehiclesContainer 
                vehicles={filteredVehiclesFromSearch}
            />
            </Route>
        </Switch>
    </div>
  )
}

export default Home