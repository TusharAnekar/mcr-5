import { useContext, useState } from "react";
import { DataContext } from "../../data-context";

export function Modal () {

    const {data, setData, setUpdateModal,formDetails, setFormDetails} = useContext(DataContext)

    


      function handleInput(e) {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(data.map((recipe) => recipe.id === formDetails.id ? {...recipe, recipe: formDetails} : recipe));
        setUpdateModal(false);
      }
    
      function handleTextarea(e) {
        const newValues = e.target.value.split("\n");
        setFormDetails({ ...data, cooking_instructions: newValues });
      }

    return(
        <div className="modal_container">
            <div className="modal_content">
                <h3>Update Receipe</h3>
                <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="">
                Image URL
                <input
                  type="text"
                  name="imageUrl"
                  value={formDetails.imageUrl}
                  required
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="">
                Recipe Name
                <input
                  type="text"
                  name="recipe_name"
                  value={formDetails.recipe_name}
                  required
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="">
                Ingredients
                <input
                  type="text"
                  name="ingredients"
                  value={formDetails.ingredients}
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
                  value={formDetails.cuisine_type}
                  required
                  onChange={handleInput}
                />
              </label>
              <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}