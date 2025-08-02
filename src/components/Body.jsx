import React from 'react';
import { Link } from 'react-router-dom'; 
import Slad from '../assets/image/Slad.jpg';

const Body = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Slad})` }}>
            <div className="absolute inset-0 bg-white opacity-10"></div>
            <div className="relative container mx-auto flex flex-col justify-center items-center h-full text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Foodie Finder</h1>
                <p className="text-lg md:text-xl max-w-2xl text-black">
                    Discover Meals From Every Corner OF The World
                </p>
                <Link to="/category">
                   <button className="m-20 bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-bold">
 
                       Discover More
                        </button>

                </Link>
            </div>
        </div>
    );
};

export default Body;
