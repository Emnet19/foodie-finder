import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MealCard from '../components/MealCard';
import Nav from '../components/Nav';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { meals, searchTerm, searchType } = location.state || { meals: [], searchTerm: '', searchType: 'name' };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav />

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={handleBackToHome}
                        className="mb-4 flex items-center text-green-600 hover:text-green-700 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Search Results
                    </h1>
                    <p className="text-gray-600">
                        Found {meals.length} results for "{searchTerm}" ({searchType === 'name' ? 'by name' : 'by ingredient'})
                    </p>
                </div>

                {/* Results Grid */}
                {meals.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {meals.map((meal) => (
                            <MealCard
                                key={meal.idMeal}
                                meal={meal}
                                onClick={() => console.log(`Selected meal: ${meal.idMeal}`)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                        <p className="text-gray-500 mb-4">
                            Try searching with different keywords or ingredients
                        </p>
                        <button
                            onClick={handleBackToHome}
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                            Search Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults; 