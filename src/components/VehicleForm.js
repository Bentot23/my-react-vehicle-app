import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Gradient } from "@mui/icons-material";

const VehicleForm = ({onAddVehicle}) => {

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    interiorUrl: "",
    exteriorUrl: "",
    category: "",
    description: "",
    type: "",
    price: ""
  })

  function handleChange(event) {
    const updatedForm = {...formData}
    updatedForm[event.target.name]=event.target.value
    setFormData(updatedForm)
    // setFormData({
    //   ...formData,
    //   [event.target.name]: event.target.value
    // })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newVehicle = {
      name: formData.name,
      hp: formData.hp,
      brand: formData.brand,
      model: formData.model,
      interiorUrl: formData.interiorUrl,
      exteriorUrl: formData.exteriorUrl,
      category: formData.category,
      description: formData.description,
      type: formData.type,
      price: formData.price
    }

    fetch("http://localhost:3001/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newVehicle)
    })
    .then(res => res.json())
    .then(data => {
      onAddVehicle(data)
      setFormData({
        brand: "",
        model: "",
        interiorUrl: "",
        exteriorUrl: "",
        category: "",
        description: "",
        type: "",
        price: ""
      })
    })
  }
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
        }}
        >
    
    <form 
      onSubmit={handleSubmit}
      style={{
        backgroundPosition: 'center'

      }}
    >
      <h1 
        style={{
          color: '#f5f5f5'
        }}
      >Add Vehicle</h1>
      <input
        style={{
          padding: '15px',
          margin: '10px 0px'
        }}
        placeholder="Brand" 
        onChange={handleChange}  
        value={formData.brand} 
        type="text" 
        name="brand" 
      />   

      <input
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }} 
        placeholder="Model" 
        onChange={handleChange}  
        value={formData.model} 
        type="text" 
        name="model" 
      />   

      <input
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}
        placeholder="$" 
        onChange={handleChange}  
        value={formData.price} 
        type="number" 
        name="price"
      />
      <br/>
      
      <input
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}
        placeholder="Exterior Url" 
        onChange={handleChange}  
        value={formData.exteriorUrl} 
        type="url" 
        name="exteriorUrl"
      />

      <input
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }} 
        placeholder="Interior Url" 
        onChange={handleChange}  
        value={formData.interiorUrl} 
        type="url" 
        name="interiorUrl"
      />
    <br/>
  
      <textarea
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}
        rows="5" cols="33"
        placeholder="Description" 
        onChange={handleChange}  
        value={formData.description} 
        type="text" 
        name="description"
      ></textarea>
    <br/>
      <select
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}  
        name="type"

        value={formData.type} 
        onChange={handleChange}  

      > 
        <option value="#">Type</option>
        <option value="truck">Truck</option>
        <option value="minivan">Mini-van</option>
        <option value="sedan">Sedan</option>
        <option value="hatchback">Hatchback</option>
      </select>
      <select 
        style={{
          padding: '15px',
          margin: '10px 0px',
          borderRadius: '5px',
          border: '1px solid gray'
        }}
        name="category"
        onChange={handleChange}  
        value={formData.category} 
      > 
        <option value="#">Category</option>
        <option value="American brand">American Brand</option>
        <option value="Japanese brand">Japanese Brand</option>
      </select>
      <br/>
      <button 
        style={{
          padding: '10px',
          // margin: '10px 0px',
          border: 'none',
          height: '50px',
          width: '100%',
          backgroundColor: '#1565c0',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '15px',
          marginBottom: '30px'
        }}
        variant="primary" 
        type="submit"
      >
        Submit<KeyboardArrowUpIcon/>
      </button>
    </form>
    {/* <hr/> */}
    </div>
  );
}

export default VehicleForm;
