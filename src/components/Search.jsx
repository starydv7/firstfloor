import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from 'react-icons/fa';

const Search = () => {
  const [location, setLocation] = useState('Bengaluru');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="bg-gray-200 min-h-1/2 flex justify-center items-start pt-10 px-4">
      <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-6 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-2 w-full md:w-1/3">
          <FaMapMarkerAlt className="text-green-500" />
          <select
            value={location}
            onChange={handleLocationChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full"
          >
            <option value="Bengaluru">Bengaluru</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-1/3">
          <FaHome className="text-green-500" />
          <select
            value={propertyType}
            onChange={handlePropertyTypeChange}
            className="bg-gray-100 text-gray-700 text-sm px-4 rounded w-full"
          >
            <option value="" disabled>Property types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-1/3">
          <FaRupeeSign className="text-green-500" />
          <select
            value={budget}
            onChange={handleBudgetChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full"
          >
            <option value="" disabled>Budget</option>
            <option value="Under 50 Lakhs">Under 50 Lakhs</option>
            <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
            <option value="1 Crore - 2 Crores">1 Crore - 2 Crores</option>
            <option value="Above 2 Crores">Above 2 Crores</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto flex items-center justify-center">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
