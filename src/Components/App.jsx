import Header from "./Header";
import Home from "./Home";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home title="Choose your favorite recipes" />}
        />
        <Route path=":category" element={<Recipes />} />
        <Route path=":category/:recipeID" element={<Recipe />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
