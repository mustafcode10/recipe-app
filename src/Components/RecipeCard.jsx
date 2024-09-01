import RecipeRating from "./RecipeRating";
import { Link } from "react-router-dom";

export function RecipeCard({ data }) {
  return (
    <div className="card">
      <Link to={data.idMeal}>
        <div>
          <img
            src={data.strMealThumb}
            alt={data.strMeal}
            title={data.strMeal}
          />
        </div>
        <h2>{data.strMeal}</h2>
      </Link>
      <RecipeRating />
    </div>
  );
}
