import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Select Location');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
         FIrstFloor
        </div>
        <div className="flex-grow flex justify-center">
          <select
            value={location}
            onChange={handleLocationChange}
            className="bg-white text-blue-500 px-4 py-2 rounded"
          >
            <option disabled>Select Location</option>
            <option value="New York">Begaluru</option>
            <option value="Los Angeles">Mumbai</option>
            <option value="Chicago">kolkata</option>
            <option value="Houston">Delhi</option>
            <option value="Phoenix">Siwan</option>
          </select>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow lg:text-right">
            <a href="#buy" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Buy
            </a>
            <a href="#rent" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Rent
            </a>
            <a href="#sell" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Sell
            </a>
            <a href="#pg" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              PG
            </a>
            <a href="#post-property" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
              Post Property
            </a>
            <a href="#login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
