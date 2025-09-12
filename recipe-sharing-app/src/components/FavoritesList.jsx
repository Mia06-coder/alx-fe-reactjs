import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = useMemo(() => {
    return favorites
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [recipes, favorites]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>❤️ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Add some recipes you love!</p>
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
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
