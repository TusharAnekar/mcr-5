import "./home.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../../data-context";
import { Modal } from "../../components/Modal/Modal";

export function Home() {
  const {
    filteredData,
    setCuisineType,
    setInputSearchText,
    handleDelete,
    setData,
    data,
    handleEdit,
    updateModal, setUpdateModal
  } = useContext(DataContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [formDetails, setFormDetails] = useState({
    id: 0,
    imageUrl: "",
    recipe_name: "",
    ingredients: "",
    cooking_instructions: [],
    cuisine_type: "",
  });

  function handleInput(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormDetails({...formDetails, id: data.length+1})
    setData([...data, formDetails]);
    setShowModal(false);
  }

  function handleTextarea(e) {
    const newValues = e.target.value.split("\n");
    setFormDetails({ ...data, cooking_instructions: newValues });
  }

  return (
    <div className="home_page">
      <div className="filters_container">
        <input
          type="text"
          placeholder="search receipes"
          onChange={(e) => setInputSearchText(e.target.value)}
        />
        <div className="radio_buttons_container">
          <label htmlFor="">
            <input
              type="radio"
              value={"Name"}
              name="cuisine"
              onClick={(e) => setCuisineType(e.target.value)}
            />
            Name
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value={"Ingredients"}
              name="cuisine"
              onClick={(e) => setCuisineType(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Ingredients
            <input
              type="radio"
              value={"Cuisine"}
              name="cuisine"
              onClick={(e) => setCuisineType(e.target.value)}
            />
            Cuisine
          </label>
        </div>
      </div>

      <button onClick={() => setShowModal(true)}>Add Recipe</button>
      {showModal && (
        <div className="modal_container">
          <div className="modal_content">
            <h3>Add Recipe</h3>
            <form className="form" onSubmit={handleSubmit}>
              
              <label htmlFor="">
                Image URL
                <input
                  type="text"
                  name="imageUrl"
                  required
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="">
                Recipe Name
                <input
                  type="text"
                  name="recipe_name"
                  required
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="">
                Ingredients
                <input
                  type="text"
                  name="ingredients"
                  required
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="">
                Cooking Instructions
                <textarea
                  name="cooking_instructions"
                  id=""
                  value={formDetails.cooking_instructions.join("\n")}
                  required
                  onChange={handleTextarea}
                ></textarea>
              </label>
              <label htmlFor="">
                Cuisine Type
                <input
                  type="text"
                  name="cuisine_type"
                  required
                  onChange={handleInput}
                />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}

      {
        updateModal && <Modal/>
      }

      <h2>All receipes:</h2>

      <div className="recipes_container">
        {filteredData.map(({ id, imageUrl, recipe_name, cuisine_type }) => (
          <div key={id} className="recipe_container">
            <div className="content_container">
              <img
                src={imageUrl}
                alt={recipe_name}
                onClick={() => navigate(`/${id}`)}
              />
              <h3>{recipe_name}</h3>
              <p>Cuisine Type: {cuisine_type}</p>
              <p>Ingredients: See Receipe</p>
              <p>Instructions: See Receipe</p>
              <div className="buttons_container">
                <button onClick={() => handleEdit(id)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
