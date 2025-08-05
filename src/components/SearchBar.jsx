// // import { useState } from 'react';
// // import { searchMealByName, searchMealByIngredients } from '../services/mealApi';
// // import MealCard from './MealCard';
// // import { useNavigate } from 'react-router-dom';
// // const SearchBar = () => {
// //   const [meals, setMeals] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [searchType, setSearchType] = useState('name');
// //   const [showSearch, setShowSearch] = useState(false);
// //   const navigate = useNavigate();
// //   const handleSearchClick = () => {
// //     console.log('Search button clicked!');

// //     setShowSearch(true);
// //   };

// //   const handleSearch = async () => {
// //     let results = [];
    
// //     if (searchType === 'name') {
// //       results = await searchMealByName(searchTerm);
// //       navigate('/meals', { state: { meals } });
// //     } else if (searchType === 'ingredient') {
// //       results = await searchMealByIngredients(searchTerm);
// //       navigate('/meals', { state: { meals } });
// //     }
// //     setMeals(results || []);
// //   };

// //   return (
// //     <div className="mt-4 p-4 mr-18">
// //       {!showSearch && (
// //         <button
// //           type='button'
// //           onClick={handleSearchClick}
// //           className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer relative z-50 "
      
// //         >
// //           Search
// //         </button>
// //       )}

// //       {showSearch && (
// //         <div className="mt-6 max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
// //           <h2 className="text-xl font-semibold text-center text-black  mb-4">Search Delicious Food</h2>

// //           <div className="flex gap-3 mb-4 text-gray-500">
// //             <input
// //               type="text"
// //               placeholder="Enter a name or ingredient"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="flex-1 border border-gray-300 rounded px-5 py-2 text-gray-500"
// //             />

// //             <select
// //               value={searchType}
// //               onChange={(e) => setSearchType(e.target.value)}
// //               className="border border-gray-300 rounded px-2 py-2"
// //             >
// //               <option value="name">By Name</option>
// //               <option value="ingredient">By Ingredient</option>
// //             </select>
// //           </div>

// //           <button
// //             onClick={handleSearch}
// //             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 relative z-50"
// //           >
// //             Search Now
// //           </button>
// //         </div>
// //       )}

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
// //         {meals.length > 0 &&
// //           meals.map((meal) => (
// //             <MealCard
// //               key={meal.idMeal}
// //               meal={meal}
// //               onClick={() => console.log(`Selected meal: ${meal.idMeal}`)}
// //             />
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchBar;









// import { useState } from 'react';
// import { searchMealByName, searchMealByIngredients } from '../services/mealApi';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchType, setSearchType] = useState('name');
//   const [showSearch, setShowSearch] = useState(false);
//   const navigate = useNavigate();

//   const handleSearchClick = () => {
//     setShowSearch(true);
//   };

//   const handleSearch = async () => {
//     let results = [];

//     if (searchType === 'name') {
//       results = await searchMealByName(searchTerm);
//     } else if (searchType === 'ingredient') {
//       results = await searchMealByIngredients(searchTerm);
//     }

//     navigate('/meals', { state: { meals: results || [] } });
//   };

//   return (
//     <div className="mt-4 p-4">
//       {!showSearch && (
//         <button
//           type='button'
//           onClick={handleSearchClick}
//           className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg relative z-50 cursor-pointer"
//         >
//           Search
//         </button>
//       )}

//       {showSearch && (
//         <div className="mt- max-w-m mx-aut bg-gray-100/90 p-4  rounded shadow-lg">
//           <h2 className="text-xl font-semibold text-center mb-4 text-black">Search Delicious Food</h2>

//           <div className="flex gap-3 mb-4 text-gray-500">
//             <input
//               type="text"
//               placeholder="Enter a name or ingredient"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 border border-gray-300 rounded px-4 py-2 relative z-2"
//             />

//             <select
//               value={searchType}
//               onChange={(e) => setSearchType(e.target.value)}
//               className="border border-gray-300 rounded px-2 py-2 relative z-2"
//             >
//               <option value="name">By Name</option>
//               <option value="ingredient">By Ingredient</option>
//             </select>
//           </div>

//           <button
//             onClick={handleSearch}
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600  relative z-5"
//           >
//             Search Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;














import { useState, useRef, useEffect } from 'react';
import { searchMealByName, searchMealByIngredients } from '../services/mealApi';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const popupRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async () => {
    let results = [];

    if (searchType === 'name') {
      results = await searchMealByName(searchTerm);
    } else {
      results = await searchMealByIngredients(searchTerm);
    }

    navigate('/meals', { state: { meals: results || [] } });
    setShowSearch(false); // close dropdown after search
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg relative z-50 cursor-pointer"
      >
        Search
      </button>

      {showSearch && (
        <div
          ref={popupRef}
          className="absolute right-0 mt-2  mr-3 w-98 bg-white text-black p-4 rounded-lg shadow-xl z-50"
        >
          <h2 className="text-lg font-semibold text-center mb-3">Search Delicious Food</h2>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter a name or ingredient"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />

            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border border-gray-300 rounded px-2 py-2"
            >
              <option value="name">By Name</option>
              <option value="ingredient">By Ingredient</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Search Now
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

