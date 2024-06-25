import React from 'react';
import ApartmentCard from './ApartmentCard';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';

const apartments = [
  {
    image: p1,
    price: "₹ 90.00 Lac",
    title: "3BHK Apartment for Sale in JP Nagar",
    location: "J. P. Nagar, Bengaluru Karnataka - 560078",
    beds: 3,
    baths: 2,
    furnished: false,
    date: "31 Aug 2023",
  },
  {
    image: p2,
    price: "₹ 45,000",
    title: "2BHK Apartment for Rent in HSR Layout",
    location: "HSR Layout, Bengaluru, Karnataka - 560102",
    beds: 2,
    baths: 2,
    furnished: true,
    date: "17 Aug 2023",
  },
  {
    image: p3,
    price: "₹ 90.00 Lac",
    title: "2BHK Apartment for Sale in Bellandur",
    location: "Bellandur, Bengaluru, Karnataka - 560103",
    beds: 2,
    baths: 2,
    furnished: "Semi furnished",
    date: "21 Jul 2023",
  },
];

const ApartmentList = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Popular Apartment in Bengaluru</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={index} {...apartment} />
        ))}
      </div>
    </div>
  );
};

export default ApartmentList;
