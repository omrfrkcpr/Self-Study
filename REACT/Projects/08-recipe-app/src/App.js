import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";

const App = () => {
  return (
    //! context provider cover all
    <RecipeProvider>
      <AppRouter />
    </RecipeProvider>
  );
};

export default App;
