import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import SearchBar from "./SearchBar";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 
  return (
    <nav className="bg-green-200/0 text-white shadow-md fixd top-0 left-0 w-full z-50 p-5">
      <div  className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" flex text-xl  gap-3 font-bold text-green-500">🍽  FoodieFinder</div>
 <div className="flex gap-3 ite">
        

      </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold">
            <li className="p-4 hover:text-green-500"><a href="#home">Home</a></li>
            <li className="p-4 hover:text-green-500"><a href="#about">About</a></li>
            <li className="p-4 hover:text-green-500"><a href="#meals">Meal</a></li>
            <Link  to="/RandomMeal" className="p-4 hover:text-green-500">Random Generator</Link>

            <li className="p-4"><SearchBar/></li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white w-full px-6 pb-4 space-y-4 font-semibold">
          <li className="hover:text-green-500"><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className="hover:text-green-500"><a href="#Category" onClick={toggleMenu}>About</a></li>
          <li className="hover:text-green-500"><a href="#meals" onClick={toggleMenu}>Meal</a></li>
          <li className="hover:text-green-500"><a href="/RandomMeal " target="_blank" rel="noopener noreferer" onClick={toggleMenu}>Random Generator</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
