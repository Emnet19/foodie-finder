import React from 'react';

const categories = [
    { title: 'Sea Food', description: 'Fish & Shellfish dishes', icon: '🐟' },
    { title: 'Vegan', description: 'Vegan Meals', icon: '🥗' },
    { title: 'Dessert', description: 'Sweet Treats', icon: '🍰' },
    { title: 'Beer', description: 'Craft & Local Brews', icon: '🍺' },
    { title: 'Pasta', description: 'Italian Dishes', icon: '🍝' },
    { title: 'Salad', description: 'Fresh and Healthy', icon: '🥗' },
    { title: 'Pizza', description: 'Cheesy Goodness', icon: '🍕' },
    { title: 'Cocktails', description: 'Refreshing Drinks', icon: '🍹' },
];

const Category = () => {
    return (
        <div
            id="Category"
            className="bg-white py-12 px-4 sm:px-6 lg:px-16"
        >
            <h2 className="text-center text-3xl font-bold mb-10 text-black">
                Category
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-green-500 shadow-md text-center hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        <div className="text-5xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                            {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {category.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
