import React from 'react';
import Slad from '../assets/image/Slad.jpg';

const Body = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Slad})` }}>
            <div className="absolute inset-0 bg-white opacity-10"></div> {/* Overlay for better text visibility */}
            <div className="relative container mx-auto flex flex-col justify-center items-center h-full text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Foodie Finder</h1>
<h className="text-lg md:text-xl max-w-2xl text-black">
    Discover Meals From Every Corner OF The World
    </h>
            </div>
        </div>
    );
};

export default Body;
