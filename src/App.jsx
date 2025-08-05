import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home"; 
import RandomMeal from "./pages/RandomMeal";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/random" element={<RandomMeal />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;