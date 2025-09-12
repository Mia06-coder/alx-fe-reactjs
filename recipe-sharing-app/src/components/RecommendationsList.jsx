// src/components/RecommendationsList.jsx
import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  // Generate on mount
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>🔮 Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Add some favorites first!</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default RecommendationsList;
