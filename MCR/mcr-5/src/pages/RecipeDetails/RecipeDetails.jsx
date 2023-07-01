import { useParams } from "react-router-dom";

import "./recipeDetails.css"
import { useContext } from "react";
import { DataContext } from "../../data-context";

export function ReceipeDetails() {
  const {data} = useContext(DataContext)
  const { recipeId } = useParams();
  const {
    imageUrl,
    recipe_name,
    ingredients,
    cooking_instructions,
    cuisine_type,
  } = data.find(({ id }) => id === Number(recipeId));

  return (
    <div className="recipe_details_container">
      <h2>{recipe_name}</h2>
      <div className="details_container">
        <img src={imageUrl} alt={recipe_name} />
        <div>
          <h3>Cuisine: {cuisine_type}</h3>
          <p>
            <strong>Ingredients: </strong>
            {ingredients}
          </p>

          <p><strong>Instructions:</strong></p>
          <ol>
            {cooking_instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
