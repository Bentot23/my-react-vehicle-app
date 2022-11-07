import React from 'react'
import VehicleCard from './components/VehicleCard'
import Search from './components/Search'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const VehiclesContainer = ({vehicles, search, category, onSearchChange, onCategoryChange, onDelete}) => {
    const renderVehicle = vehicles.map(vehicle => {
      console.log(vehicle.id)
      return (
        <VehicleCard 
          key={vehicle.id}
          vehicles={vehicle} 
          onDelete={onDelete}
        />
      )
    }) 
  return (
    <div>

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1,
                  color: '#eeeeee',
                }}
          >
                Top Pick Vehicles
            <Search 
                onSearchChange={onSearchChange} 
                search={search} 
                category={category}
                onCategoryChange={onCategoryChange} 
            />
        </Typography>
          {renderVehicle}
    </div>

  )
}

export default VehiclesContainer