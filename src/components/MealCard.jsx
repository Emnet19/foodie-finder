import react,{useState} from 'react';
// import { serachMealByName } from '../services/mealApi'; 

// const [meals,setMeals]=useState([]);


 const MealCard = ({meal,onClick})=> {
    return(
        <div className='bg-green-100  rounded-lg w-98 p-2 shadow-md hover: shadow-2xl cursor-pointer' onClick={onClick}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className='rounded-lg mb-4 w-95   object-cover' />
          <h2 className='text-xl font-bold mt-4'>{meal.strMeal}</h2>       
           </div>
    )
    
}
export default MealCard;