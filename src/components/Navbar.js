import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Search from './Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom"


const Navbar = ({search, category, onSearchChange, onCategoryChange}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        style={{ background: '#424242' }}  
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Top Pick Vehicles
            <Search 
                onSearchChange={onSearchChange} 
                search={search} 
                category={category}
                onCategoryChange={onCategoryChange} 
            />
          </Typography>
          <NavLink 
            to="/"
            exact
          >
            <Button><HomeIcon/></Button>
          </NavLink>
          <NavLink 
            to="/addVehicle"
            exact
          >
            <Button><AddBoxIcon/>
              Add Vehicle
            </Button>
          </NavLink>          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar