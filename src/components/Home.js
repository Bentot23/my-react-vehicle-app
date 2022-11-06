import React from 'react'
import {NavLink} from "react-router-dom"
import WhatshotIcon from '@mui/icons-material/Whatshot';


const Home = () => {
  return (
    <div>
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
        <button style={{width:170, height:50, backgroundColor:'#b2ebf2',marginTop:20, display: 'block'}}>
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Get Started
        </button>
      </NavLink>
    </div>
  )
}

export default Home