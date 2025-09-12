// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <h2>Recipe not found</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const updatedRecipe = {
      id: recipeId,
      title: title.trim(),
      description: description.trim(),
    };

    updateRecipe(recipeId, updatedRecipe);

    console.log(`Updated recipe id: ${recipeId}`);

    navigate(`/recipes/${recipeId}`);
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
      }}
    >
      <h2 style={{ margin: 0, color: "#333" }}>✏️ Edit Recipe</h2>
      <label
        style={{
          display: "block",
          color: "#333",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <span style={{ display: "block", marginBottom: "0.25rem" }}>Title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
            width: "95%",
          }}
        />
      </label>
      <label
        style={{
          display: "block",
          color: "#333",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <span style={{ display: "block", marginBottom: "0.25rem" }}>
          Description
        </span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="6"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
            width: "95%",
            resize: "vertical",
          }}
        />
      </label>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          type="submit"
          style={{
            padding: "0.4rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid green",
            background: "green",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            padding: "0.4rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid #333",
            background: "#fff",
            color: "#333",
            cursor: "pointer",
          }}
          aria-label="Cancel editing and go back"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
