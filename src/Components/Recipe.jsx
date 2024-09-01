import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Recipe() {
  const { recipeID } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
      .then(response => response.json())
      .then(data => setRecipe(data.meals[0]))
      .catch(error => console.error("Error: ", error));
  }, []);

  return (
    <div className="container recipe">
      <h2>{recipe.strMeal}</h2>
      <div className="recipe-container">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <div className="recipe-instructions">
          <p>{recipe.strInstructions}</p>
          <a href={recipe.strYoutube} target="_blank">
            Watch YouTube video!
          </a>
        </div>
      </div>
    </div>
  );
}
