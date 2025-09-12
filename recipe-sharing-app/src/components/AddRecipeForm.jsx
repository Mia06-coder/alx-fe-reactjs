// AddRecipeForm component
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description) return;

    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "#fafafa",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        marginBottom: "2rem",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#333" }}>
        ➕ Add Recipe
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "1rem",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.75rem",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.2s ease-in-out",
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
