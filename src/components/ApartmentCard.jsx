import React from 'react';

const ApartmentCard = ({ image, price, title, location, beds, baths, furnished, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200">
          <span>No Images</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-600">{price}</h3>
        <h4 className="text-lg font-semibold mt-2">{title}</h4>
        <p className="text-gray-600">{location}</p>
        <div className="flex items-center mt-2">
          <span className="mr-4"><strong>Beds:</strong> {beds}</span>
          <span className="mr-4"><strong>Baths:</strong> {baths}</span>
          {furnished && <span className="mr-4"><strong>Furnished</strong></span>}
        </div>
        <p className="text-gray-500 mt-2">Posted on: {date}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
      </div>
    </div>
  );
};

export default ApartmentCard;
