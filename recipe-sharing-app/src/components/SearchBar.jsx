import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      id="search-bar"
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "0.5rem 1rem",
        marginBottom: "1.5rem",
        borderRadius: "8px",
        border: "1px solid #ddd",
        width: "100%",
        maxWidth: "400px",
      }}
    />
  );
};
export default SearchBar;
