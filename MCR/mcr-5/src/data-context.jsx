import { createContext, useState } from "react";
import { receipesDB } from "./db/receipesDB";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(receipesDB);
  const [cuisineType, setCuisineType] = useState("Name");
  const [inputSearchText, setInputSearchText] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [formDetails, setFormDetails] = useState({
    id: 0,
    imageUrl: "",
    recipe_name: "",
    ingredients: "",
    cooking_instructions: [],
    cuisine_type: "",
  });

  let filteredData = data;

  function handleEdit(idToBeUpdated) {
    setUpdateModal(true);
    const {
      id,
      imageUrl,
      recipe_name,
      ingredients,
      cooking_instructions,
      cuisine_type,
    } = data.find(({ id }) => id === idToBeUpdated);

    setFormDetails({
      ...formDetails,
      id: id,
      imageUrl: imageUrl,
      recipe_name: recipe_name,
      ingredients: ingredients,
      /*cooking_instructions: [...cooking_instructions, cooking_instructions],*/
      cuisine_type: cuisine_type,
    });
  }

  function handleDelete(idToBeDeleted) {
    setData(data.filter(({ id }) => id !== idToBeDeleted));
  }

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        cuisineType,
        setCuisineType,
        inputSearchText,
        setInputSearchText,
        filteredData,
        handleDelete,
        handleEdit,
        updateModal,
        setUpdateModal,
        formDetails,
        setFormDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
