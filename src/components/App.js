import React, {useState} from 'react';
import VehiclesPage from './VehiclesPage';
import VehicleForm from './VehicleForm';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
// import VehicleCard from './VehicleCard';





const App = () => {
  const [vehicles, setVehicles] =useState([])
  
  const handleAddVehicle = (newVehicle) => {
    setVehicles([newVehicle, ...vehicles])
  }
  return (
    <div className="App">
      <Navbar />

      {/* <HomePage /> */}
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/vehicles'>
          <VehiclesPage 
            vehicles={vehicles}
            setVehicles={setVehicles}  
          />
          </Route>
        </Switch>
        {/* <Switch>
          <Route exact path='/vehicles/:id'>
          <VehicleCard/>
          </Route>
        </Switch> */}
        <Switch>
          <Route path='/addvehicle'>
          <VehicleForm 
            onAddVehicle={handleAddVehicle}
          />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
