import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-white shadow-md text-gray-700">
      <div className="flex flex-col items-center">
    <img src="/src/assets/image/logo.png" alt="Logo" className="h-10" />
    <p className="mt-2 font-bold text-green-500">Food Finder</p> 
</div>

      <ul className="hidden md:flex space-x-8 ">
        <li className=" p-4"><a href="#home">Home</a></li>
        <li className="p-4"><a href="#about">About</a></li>
        <li className="p-4"><a href="#meals">Meal</a></li>
        <li className="p-4"><a href="#random">Random Generator</a></li>
      </ul>

      <div className="hidden md:flex">
    <button className="mr-20 bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600">
        Search
    </button>
</div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white'
            : 'fixed left-[-100%]'
        }
      >
        <ul className="pt-24 uppercase p-4 space-y-2 pl-4">
          <li className="p-4"><a href="#home">Home</a></li>
          <li className="p-4"><a href="#about">About</a></li>
          <li className="p-4"><a href="#meals">Meal</a></li>
          <li className="p-4"><a href="#random">Random Generator</a></li>
          <li className="p-4">
            <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600">
              Search
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
