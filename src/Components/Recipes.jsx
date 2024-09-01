import { useState, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          throw new Error("Category not found!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        navigate("/404");
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <div className="container grid">
      {isLoading
        ? "Loading..."
        : recipes.map(recipe => (
            <RecipeCard data={recipe} key={recipe.idMeal} />
          ))}
    </div>
  );
}
