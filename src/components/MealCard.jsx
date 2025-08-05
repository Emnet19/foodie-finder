const MealCard = ({ meal, onClick }) => {
  return (
    <div
      className=' bg-gray-50 borer text-green-400 rounded-md w-75 sm:w-72 md:w-80 lg:w-90 p-3 shadow-md  hover:scale-105 hover:shadow-4xl cursor-pointer'
      onClick={onClick}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className='rounded-md mb-5 w-full pl-4 pt-2 h-48 object-cover'
      />
      <h2 className='text-xl sm:text-xl font-semibold font-inter  text-center'>{meal.strMeal}</h2>
    </div>
  );
};

export default MealCard;








