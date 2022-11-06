import React from 'react'
import {NavLink} from "react-router-dom"
import WhatshotIcon from '@mui/icons-material/Whatshot';


const Home = () => {
  return (
    <div
      style = {{
        // backgroundImage: `url("https://cdn.wallpapersafari.com/40/48/HvXbeg.jpg")`, 
        height: '100vh',
        // backgroundColor: '#9e9e9e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 60px',
        borderRadius: '10px',
        cursor: 'pointer',
        marginTop: '15px',
        marginBottom: '30px',
      }}
      
    >
      <NavLink
        underline="hover"
        sx={{ 
        display: 'flex', 
        alignItems: 'center',
        }}
        color="inherit"
        to="/vehicles"
        exact
      >
        <button 
          style={{
            padding: '10px',
            border: 'none',
            height: '50px',
            width:170,
            backgroundColor:'#b2ebf2',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '15px',
            marginBottom: '30px'
          }}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Get Started
        </button>
      </NavLink>
    </div>
  )
}

export default Home