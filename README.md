<img width="1897" height="964" alt="image" src="https://github.com/user-attachments/assets/d856d602-ffbc-41e9-9743-f95ba595243e" />

#  🍽️ Foodie Finder - Discover Meals Around the World

**Foodie Finder** is a modern React-based web application that lets users explore delicious meals from around the world. Whether you’re searching by meal name, ingredients, or exploring random dishes, this app makes discovering new recipes easy and fun.

## 📌 Features

- 🌍 Explore meals from different regions
- 🔍 Search meals by name or ingredients
- 🎲 Random meal generator
- 📱 Responsive design for mobile & desktop
- 🖼️ Meal detail cards with image, instructions, category, and origin
- 🧭 Navigation bar with interactive links
- ⚡ Fast and dynamic UI using React state and hooks



## 💻 Technologies Used

- **React JS** (with hooks)
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **TheMealDB API** for meal data
- **HTML5 & JavaScript (ES6+)**



## 📂 Project Folder Structure
Foodie-Finder/

│
├── public/

│ └── index.html

│
├── src/

│ ├── components/

│ │ ├── Navbar.jsx # Navigation bar with links

│ │ ├── SearchBar.jsx # Input for searching meals

│ │ ├── MealCard.jsx # Reusable card for displaying meal details

│ │ └── Footer.jsx # Footer section

│ │
│ ├── pages/

│ │ ├── Home.jsx # Homepage with about section and search

│ │ ├── RandomMeal.jsx # Random meal generator page

│ │ └── MealDetails.jsx # Detailed view for a selected meal

│ │
│ ├── services/

│ │ └── mealApi.js # Functions to fetch data from TheMealDB API

│ │
│ ├── App.jsx # Main app layout and routes

│ ├── main.jsx # Entry point (ReactDOM.render)

│ └── index.css # Tailwind and global styles
│
├── package.json

├── tailwind.config.js

├── postcss.config.js

├── README.md 

└── .gitignore

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/foodie-finder.git
cd foodie-finder
```

🌐 API Used
This project uses the TheMealDB API to fetch meal data.

Endpoints used:

https://www.themealdb.com/api/json/v1/1/search.php?s=chicken - Search by meal name

https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken - Search by ingredient

https://www.themealdb.com/api/json/v1/1/random.php - Get random meal


## Team Members ------------------ Github Name
* Emnet Befkadu ----------------- @Emnet19
* Sofiya Yasin ------------------ @Sofi3406
* Fenet Firomsa ----------------- @fenetfiromsa
