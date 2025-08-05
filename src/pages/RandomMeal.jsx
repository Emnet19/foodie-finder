import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching random meal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeal();
  }, []);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };
   const location = useLocation();
  const { RandomMeal } = location.state || { RandomMeal: [] };

  return (
    <div id="RandomMeal" className="p-4 overflow-x-hidden">
      <h1 className="text-center font-bold font-Volkhov text-3xl sm:text-4xl mt-9">
        Random Meals
      </h1>

      {loading && (
        <p className="text-center text-gray-600 mb-4">Loading...</p>
      )}

      {meal && (
        <div className=" p-6 sm:p-10 max-w-7xl mx-auto">
          {/* Meal Name & Image and Ingredients */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Meal Name and Image */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl mb-6 font-semibold bg-green-50 px-6 py-3 rounded-2xl text-green-600 font-inter uppercase text-center lg:text-center">
                {meal.strMeal}
              </h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full rounded object-cover border-2 border-green-200"
              />
            </div>

            {/* Right Side - Ingredients */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-600 bg-green-50 px-6 py-3 rounded-2xl font-inter uppercase mb-4 text-center lg:text-center">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg p-6 bg-green-100 rounded-2xl font-roboto">
                {getIngredients().map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions and YouTube */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Instructions */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-600 bg-green-50 px-6 py-3 rounded-2xl font-inter uppercase mb-4 text-center lg:text-center">
                Instructions
              </h3>
              <p className="text-base sm:text-lg whitespace-pre-line bg-green-100 p-6 rounded-2xl font-roboto">
                {meal.strInstructions}
              </p>
            </div>

            {/* YouTube Video */}
            {meal.strYoutube && (
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-600 bg-green-50 px-6 py-3 rounded-2xl font-inter uppercase mb-4 text-center lg:text-center">
                  YouTube Tutorial
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden">
                  <iframe
                    title="meal-video"
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                    allowFullScreen
                    className="w-full h-64 sm:h-80 md:h-96 border-2 border-green-200 rounded"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
