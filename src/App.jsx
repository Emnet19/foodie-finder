import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import MealCard from './components/MealCard.jsx';
import MealDetail from './pages/MealDetail.jsx';
import Category from './components/Category.jsx';
import RandomMeal from './pages/RandomMeal.jsx';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/RandomMeal" element={<RandomMeal />} />
        <Route path="/meals" element={<MealDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
