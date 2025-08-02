import React from 'react';

const Meal = () => {
    return (
        <div className="container mx-auto my-12 text-center bg-white">
            <h2 className="text-3xl font-bold mb-8 text-black">Meals</h2>
            <div className="flex justify-center space-x-4">
                <img 
                    src="/src/assets/image/healthy food.jpg" 
                    alt="Meal 1" 
                    className="w-1/3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" 
                />
                <img 
                    src="/src/assets/image/Slad.jpg" 
                    alt="Meal 2" 
                    className="w-1/3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" 
                />
                <img 
                    src="/src/assets/image/big-salad.jpg" 
                    alt="Meal 3" 
                    className="w-1/3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" 
                />
                
            </div>
            <br /><br />
        
<p className='text-black font-bold '>Celebrate the small moments—whether it’s a cozy dinner at home,<br /><br /> a festive gathering, or a romantic evening under the stars. <br /><br />Our food is not just about nourishment; it’s about creating memories that linger long after the last bite.</p>
          


<br /><br />



        </div>
        
        
    );
};

export default Meal;