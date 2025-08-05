import { useLocation } from 'react-router-dom';
import MealCard from '../components/MealCard';

const MealDetail = () => {
  const location = useLocation();
  const { meals } = location.state || { meals: [] };

  return (
    <div className="p-9  bg-white ">
      <h2 className="text-5xl font-bold text-black-900/90 text-center mb-13 "> Your Search Results</h2>

      {meals.length === 0 ? (
        <p className="text-center text-gray-600">No meals found.</p>
      ) : (
        <div className="flex flex-wrap gap-15 justify-center">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              onClick={() => console.log(`Clicked meal ID: ${meal.idMeal}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MealDetail;
