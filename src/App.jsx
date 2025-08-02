import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Body from './components/Body.jsx';
import Category from './components/Category';
import Meal from './components/Meal.jsx';
import Half from './components/Half.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
    
      <NavBar />
           

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home/>
                             <Body />
                            <Meal />
                            <Half />
                        </>
                    }
                />

                <Route
                    path="/category"
                    element={
                        <>
                            <Category />
                        </>
                    }
                />
            </Routes>

            <Footer />
    </>
  )
}

export default App
