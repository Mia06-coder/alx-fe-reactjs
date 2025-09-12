// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm("Are you sure you want to delete this recipe?");
    if (!ok) return;
    deleteRecipe(id);
    // send user back to list after deletion
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "0.4rem 0.75rem",
        borderRadius: "6px",
        border: "1px solid #d9534f",
        background: "#fff",
        color: "#d9534f",
        cursor: "pointer",
      }}
      aria-label="Delete recipe"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
