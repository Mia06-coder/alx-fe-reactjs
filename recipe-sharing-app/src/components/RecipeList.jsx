// RecipeList component
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        📜 Recipe List
      </h2>

      {recipes.length === 0 ? (
        <p
          style={{
            color: "#666",
            fontStyle: "italic",
            background: "#f9f9f9",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          No recipes available. add one!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "1rem",
            textAlign: "left",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            margin: "2rem, auto",
            alignItems: "center",
          }}
        >
          {recipes.map((recipe) => (
            <>
              {console.log(`rendering recipe id: ${recipe.id}`)}
              <div
                key={recipe.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1rem",
                  background: "#fff",
                  color: "#333",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>
                  {recipe.title}
                </h3>
                <p style={{ margin: 0, color: "#555" }}>{recipe.description}</p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignSelf: "flex-start",
                    marginTop: "0.75rem",
                  }}
                >
                  <Link
                    to={`/recipes/${recipe.id}`}
                    aria-label={`View ${recipe.title}`}
                  >
                    View
                  </Link>
                  <Link
                    to={`/recipes/${recipe.id}/edit`}
                    aria-label={`Edit ${recipe.title}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
