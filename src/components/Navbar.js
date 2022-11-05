import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Search from './Search';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import {NavLink} from "react-router-dom"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const Navbar = ({search, category, onSearchChange, onCategoryChange}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        style={{ 
            background: '#424242',
            backgroundImage: `url("https://i.pinimg.com/originals/0c/28/1c/0c281ccd0476d1010a21ee8b142c79ca.jpg")`,
            
        }}  
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
          {/* <NavLink 
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
          </NavLink>           */}


        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
            <NavLink
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            to="/"
            >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
            </NavLink>
            <NavLink
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            to="/addvehicle"
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