import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleChange = event => {
    const category = event.target.value;
    navigate(`/${category}`);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Link to="/" className="title">
        <h1>My Favorite Recipes</h1>
      </Link>
      <nav>
        <select onChange={handleChange}>
          {categories.map(category => (
            <option
              value={category.strCategory.toLowerCase()}
              key={category.idCategory}
            >
              {category.strCategory}
            </option>
          ))}
        </select>
      </nav>
    </div>
  );
}
