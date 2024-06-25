import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Bengaluru');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        
          <span className="text-2xl font-bold text-blue-600">Firstfloor</span>
        </div>
        <div className="hidden lg:flex items-center">
          <select
            value={location}
            onChange={handleLocationChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded ml-4"
          >
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Siwan">Siwan</option>
          </select>
          <a href="#buy" className="text-blue-600 hover:text-blue-800 ml-4">Buy</a>
          <a href="#rent" className="text-blue-600 hover:text-blue-800 ml-4">Rent</a>
          <a href="#sell" className="text-blue-600 hover:text-blue-800 ml-4">Sell</a>
          <a href="#pg" className="text-blue-600 hover:text-blue-800 ml-4">PG</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded ml-4">Post Property</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded ml-4">Login</button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
          <select
            value={location}
            onChange={handleLocationChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded w-full mb-2"
          >
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Siwan">Siwan</option>
          </select>
          <a href="#buy" className="block text-blue-600 hover:text-blue-800 py-2">Buy</a>
          <a href="#rent" className="block text-blue-600 hover:text-blue-800 py-2">Rent</a>
          <a href="#sell" className="block text-blue-600 hover:text-blue-800 py-2">Sell</a>
          <a href="#pg" className="block text-blue-600 hover:text-blue-800 py-2">PG</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full my-2">Post Property</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-full">Login</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
