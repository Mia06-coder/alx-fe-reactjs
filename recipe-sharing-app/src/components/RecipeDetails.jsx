// RecipeDetails component
import { Link, useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <h2>Recipe not found</h2>
        <p>
          That recipe doesn't exist. <Link to="/">Go back home</Link>.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        background: "#fff",
        color: "#333",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease-in-out",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <h1 style={{ marginBottom: "0.5rem" }}>{recipe.title}</h1>
      <p style={{ color: "#444", lineHeight: 1.5 }}>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <Link
          to={`/recipes/${recipeId}/edit`}
          style={{
            padding: "0.4rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid #fff",
            background: "#153885",
            color: "#fff",
            cursor: "pointer",
          }}
          aria-label="Edit recipe"
        >
          Edit
        </Link>
        <DeleteRecipeButton id={recipeId} />
        <Link
          to="/"
          style={{
            padding: "0.4rem 0.75rem",
            borderRadius: "6px",
            border: "1px solid #333",
            color: "#333",
            cursor: "pointer",
          }}
          aria-label="Go back to recipe list"
        >
          Back
        </Link>
      </div>
    </div>
  );
};
export default RecipeDetails;
