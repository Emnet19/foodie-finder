import React, { useState } from 'react';
import Category from '../components/Category';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
const Home = () => {

  
    return (
        <div id="home" className=" overflow-x-hidden relative bg-cover bg-center bg-norepeat h-screen  bg-[url(public\assets\vegii.jpg)]  " loading='lazy'>
            <Nav />
            <div className="relative z-10 container mx-auto flex flex-col justify-center items-start h-screen text-white px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 ">
          Foodie Finder
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">
          Discover Meals From Every Corner Of The World
        </h2>
        <p className="max-w-lg text-sm sm:text-base md:text-lg mb-8 ">
          From comforting local favorites to exotic international dishes, Foodie Finder helps you explore a world of flavors in one place. Whether you're craving something new or searching for a classic meal, our platform makes it easy to discover recipes that match your taste and curiosity.
        </p>
        <a href="#Category">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg  ">
          Explore More
        </button>
        </a>
      </div>

            <Category />



         {/* meal */}
            <div id="meals" className=" mx-auto text-center bg-white  py-8 px-4 sm:px-6 md:px-12 lg:px-24">
           <h2 className="text-3xl font-bold mb-10 text-black">Meals</h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <img
      src="foodie.jpg"
      alt="Meal 1"
      className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src="pasta.jpg"
      alt="Meal 2"
      className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src="foo.jpg"
      alt="Meal 3"
      className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src="Stake.png"
      alt="Meal 4"
      className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
    />
  </div>
</div>




        {/* About */}
            <div id="about" className="bg-white py-8 px-4 md:px-12 lg:px-24">
             <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
    
     {/* Text Section */}
             <div className="w-full md:w-1/2 mt-15">
              <h2 className="text-3xl font-bold mb-4">Savor Every Bite</h2>
               <p className="text-gray-600 leading-relaxed">
               Discover the joy of culinary delights that tantalize your taste buds. Our meals are crafted with fresh, quality ingredients to ensure each dish is a celebration of flavor. Join us in a gastronomic journey where every bite tells a story of passion and creativity.
        <br /><br />
        Indulge in a variety of flavors that reflect the rich tapestry of cultures and traditions. From savory to sweet, each recipe is meticulously designed to bring comfort and joy to your dining experience. Whether you’re sharing a meal with loved ones or enjoying a quiet moment alone, our dishes are here to elevate every occasion.
        <br /><br />
        Experience the art of cooking as our chefs blend innovative techniques with time-honored recipes, offering a menu that evolves with the seasons. Savor the freshness of farm-to-table ingredients, where every vegetable is picked at its peak and every spice is hand-selected for optimal flavor.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="drink.webp"
        alt="Delicious Meal"
        className="  w-full max-w-md h-auto object-cover"
      />
    </div>

  </div>
</div>





{/* footer */}

<footer className="bg-green-200 py-12 px-6 sm:px-10 md:px-20">
  <div className="flex flex-col lg:flex-row justify-between gap-10">

    {/* Left Section: Brand and Description */}
    <div className="flex-1 text-center lg:text-left">
      <h1 className="font-inter font-bold text-3xl mb-4">Foodie Finder</h1>
      <p className="text-gray-600 font-inter max-w-xl mx-auto lg:mx-0">
        Discover the joy of culinary delights that tantalize your taste buds. Our meals are crafted with fresh, quality ingredients to ensure each dish is a celebration of flavor. Join us in a gastronomic journey where every bite tells a story of passion and creativity.
      </p>
    </div>

    {/* Middle Section: Navigation Links */}
    <div className="flex-1">
      <h3 className="font-bold mb-4 text-black text-center lg:text-left">Pages</h3>
      <ul className="text-gray-600 space-y-2 text-center lg:text-left">
        <li><a href="#" className="hover:text-gray-800">Home</a></li>
        <li><a href="#" className="hover:text-gray-800">About</a></li>
        <li><a href="#" className="hover:text-gray-800">Menu</a></li>
      </ul>
    </div>

    {/* Right Section: Instagram Gallery */}
    <div className="flex-1">
      <h3 className="font-bold mb-4 text-black font-inter text-center lg:text-left">Follow Us On Instagram</h3>
      <div className="grid grid-cols-2 gap-3">
        <img src="pasta.jpg" alt="Instagram 1" className="w-full h-auto rounded-lg shadow-md" />
        <img src="foodie.jpg" alt="Instagram 2" className="w-full h-auto rounded-lg shadow-md" />
        <img src="foo.jpg" alt="Instagram 3" className="w-full h-auto rounded-lg shadow-md" />
        <img src="Stake.png" alt="Instagram 4" className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="flex justify-center mt-6">
        <img src="icon.png" alt="Social Icon" className=" w-50 ml-29 w-12 h-12 " />
      </div>
    </div>

  </div>
</footer>
        </div>

    );
};

export default Home;





















