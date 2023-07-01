import { createContext, useState } from "react";
import { receipesDB } from "./db/receipesDB";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(receipesDB);
  const [cuisineType, setCuisineType] = useState("Name");
  const [inputSearchText, setInputSearchText] = useState("");

  let filteredData = data;

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
