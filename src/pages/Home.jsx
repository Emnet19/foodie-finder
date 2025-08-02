import react from 'react';
import { useState } from 'react';       
import {searchMealByName,searchMealByIngredients} from '../services/mealApi.js';
// import  from './services/mealApi.js';
import MealCard from '../components/MealCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const Home =()=>{
    const [meals,setMeals]= useState([]);
    const [showSearch,setShowSearch]=useState(false);//for visibility
    const[searchType,setSearchType]=useState('name'); //for search type
    const [searchTerm,setSearchTerm]=useState('');


    const handleSearchClick =()=>{
        setShowSearch(true)
    }

    const handleSearch= async ()=>{
        let results=[];
        if(searchType === 'name'){
            results = await searchMealByName(searchTerm);
        } else if(searchType === 'ingredient'){
            results = await searchMealByIngredients(searchTerm);
        }
        setMeals(results  || []);
    }

 return(
    <div className='p-6 fle flex-col min-h-screen'>
        <div className='flex  items-center justify-center gap-8 mt-6'>
        <h1>Wellcome to Foodie finder</h1>


        <button
         onClick={handleSearchClick}
         className=' rounded-full bg-green-100 px-9 py-2  hover:bg-green-300'>
            Search</button>
</div>
 {showSearch && (
        <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Search Delicious Food</h2>

          {/* Input and Dropdown Side by Side */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter a name or ingredient"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
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
           <SearchBar onSearch={handleSearch} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 mt-8">
            {meals.map((meal)=>(
              <MealCard
                 key={meal.idMeal}
                 meal={meal}
                 onClick={() => console.log(`Selected meal: ${meal.idMeal}`)} 
                 />  
            )
        )}
        </div>
        {/* <input type="text"
        placeholder='search delicious foods...' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
           className="border p-2 rounded w-full max-w-md"
        />
        <SearchBar onSearch={handleSearch}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
            {meals.map((meal)=>(
              <MealCard
                 key={meal.idMeal}
                 meal={meal}
                 onClick={() => console.log(`Selected meal: ${meal.idMeal}`)} 
                 />  
            )
        )}
        </div> */}
    </div>
 )}
 export default Home;