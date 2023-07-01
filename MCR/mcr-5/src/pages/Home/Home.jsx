import "./home.css";

import { receipesDB } from "../../db/receipesDB";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate()
  return (
    <div className="home_page">
      <div className="filters_container">
        <input type="text" placeholder="search receipes" />
        <div className="radio_buttons_container">
          <label htmlFor="">
            <input type="radio" value={"Name"} />
            Name
          </label>
          <label htmlFor="">
            <input type="radio" value={"Ingredients"} />
            Ingredients
          </label>
          <label htmlFor="">
            <input type="radio" value={"Cuisine"} />
            Cuisine
          </label>
        </div>
      </div>

      <h2>All receipes:</h2>

      <div className="recipes_container">
        {receipesDB.map(({ id, imageUrl, recipe_name, cuisine_type }) => (
          <div key={id} className="recipe_container">
            <div className="content_container">
              <img src={imageUrl} alt={recipe_name} onClick={() => navigate(`/${id}`)}/>
              <h3>{recipe_name}</h3>
              <p>Cuisine Type: {cuisine_type}</p>
              <p>Ingredients: See Receipe</p>
              <p>Instructions: See Receipe</p>
              <div className="buttons_container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
