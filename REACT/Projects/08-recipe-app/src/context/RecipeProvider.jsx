import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const RecipeContext = createContext;

const APP_ID = "716bd830";
const API_KEY = "7445e3656ca5026352eee8a94611c23e";

const RecipeProvider = ({ children }) => {
  //! for login and privateRouter components
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState("");

  //! for home, header and recipeCard pages
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&mealType=${mealType}`;

  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        setQuery,
        setMealType,
        recipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
