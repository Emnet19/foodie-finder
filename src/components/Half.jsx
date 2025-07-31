import React from 'react';

const Half = () => {
    return (
        <div className="container mx-auto my-12 flex bg-white">
            <div className="w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">Savor Every Bite</h2>
                <h3 className="text-gray-700 font-bold">
                   Discover the joy of culinary delights that tantalize your taste buds. Our meals are crafted with fresh, quality ingredients to ensure each dish is a celebration of flavor. Join us in a gastronomic journey where every bite tells a story of passion and creativity. 
    <br /><br />
    Indulge in a variety of flavors that reflect the rich tapestry of cultures and traditions. From savory to sweet, each recipe is meticulously designed to bring comfort and joy to your dining experience. Whether you’re sharing a meal with loved ones or enjoying a quiet moment alone, our dishes are here to elevate every occasion.
    <br /><br />
    Experience the art of cooking as our chefs blend innovative techniques with time-honored recipes, offering a menu that evolves with the seasons. Savor the freshness of farm-to-table ingredients, where every vegetable is picked at its peak and every spice is hand-selected for optimal flavor. 
     </h3>
            </div>
            <div className="w-1/2 p-4">
                <img 
                    src="/src/assets/image/Download Free Vector_ High-Quality Splash of Juice with Fruits - vectorartworld_com.jpg" 
                    alt="Delicious Meal" 
                    className="w-full h-auto rounded-lg shadow-md" 
                />
            </div>
        </div>
    );
};

export default Half;
