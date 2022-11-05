import React from "react";

function Search({onCategoryChange, onSearchChange, search, category}) {
  
  return (
    <div className="search">
      <label>
        <strong>Type:</strong>
        <select 
          onChange={onCategoryChange} value={category}
        >
          <option value="All">All</option>
          <option value="truck">Truck</option>
          <option value="suv">Suv</option>
          <option value="minivan">Mini-van</option>
          <option value="sedan">Sedan</option>
          <option value="hatchback">Hatchback</option>

        </select>
      </label>
      <input 
      placeholder="search vehicle..."
        type="text" 
        className="searchTerm" 
        value={search}  
        onChange={onSearchChange}
      />
      
    </div>
  );
}

export default Search;