import axios from 'axios'
const  BASE_URL="https://www.themealdb.com/api/json/v1/1";;
export const searchMealByName=async (name)=>{
    try{
        const response= await axios.get(`${BASE_URL}/search.php?s=${name}`);
        return response.data.meals;
    }catch(error){
        console.error("Error fteching meal by name:",error);
        return [];
    }
}

export const searchMealByIngredients=async (ingredients)=>{
      try{
        const response=await axios.get (`${BASE_URL}/filter.php?i=${ingredients}`);
        return response.data.meals;
      }catch(error){
        console.error("Error fetching meal by ingredients:", error);
        return [];
      }
}
 
export const randomMeal=async ()=>{
    try{
        const response=await axios.get(`${BASE_URL}/random.php`);
        return response.data.meals[0];
    }catch(error){
        console.error("Error fetching random meal:", error);
        return null;
    }
}