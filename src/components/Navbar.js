import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Search from './Search';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import {NavLink} from "react-router-dom"
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        style={{ 
            background: '#b2dfdb',
            // backgroundImage: `url("https://i.pinimg.com/originals/0c/28/1c/0c281ccd0476d1010a21ee8b142c79ca.jpg")`,
            
        }}  
      >
        <Toolbar>
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <NavLink
              underline="hover"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: "#1565c0"

              }}
              to="/"
              exact
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </NavLink>
            <NavLink
              underline="hover"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: "#1565c0"
              }}
              to="/vehicles"
              exact
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Vehicles
            </NavLink>
            <NavLink
              underline="hover"
              
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: "#1565c0"
              }}
              color="#1565c0"
              to="/addvehicle"
              exact
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Add Vehicle
            </NavLink>
        </Breadcrumbs>
        </div>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar