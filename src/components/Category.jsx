import React from 'react';


const categories = [
    {
        title: 'Sea Food',
        description: 'Fish & Shellfish dishes',
        icon: '🐟',
    },
    {
        title: 'Vegan',
        description: 'Vegan Meals',
        icon: '🥗',
    },
    {
        title: 'Dessert',
        description: 'Sweet Treats',
        icon: '🍰',
    },
    {
        title: 'Beer',
        description: 'Craft & Local Brews',
        icon: '🍺',
    },
    {
        title: 'Pasta',
        description: 'Italian Dishes',
        icon: '🍝',
    },
    {
        title: 'Salad',
        description: 'Fresh and Healthy',
        icon: '🥗',
    },
    {
        title: 'Pizza',
        description: 'Cheesy Goodness',
        icon: '🍕',
    },
    {
        title: 'Cocktails',
        description: 'Refreshing Drinks',
        icon: '🍹',
    },
];

const Category = () => {
    return (
        <div className="container mx-auto my-12 bg-white">
            <h2 className="text-center text-3xl font-bold mb-8 text-black">Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="text-4xl mb-2">{category.icon}</div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;