import { create } from "zustand";

/**
 * Zustand store for recipes
 * - recipes: array of { id: date, title: string, description: string }
 * - addRecipe(newRecipe)
 * - updateRecipe(updatedRecipe)
 * - deleteRecipe(id)
 * - setRecipes(recipes)
 */
export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish.",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "A spicy and flavorful curry dish.",
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      description: "A quick and healthy stir fry with fresh veggies.",
    },
    {
      id: 4,
      title: "Beef Tacos",
      description: "Tasty tacos with seasoned beef.",
    },
    {
      id: 5,
      title: "Caesar Salad",
      description: "A fresh salad with Caesar dressing.",
    },
    { id: 6, title: "Pancakes", description: "Fluffy pancakes with syrup." },
    {
      id: 7,
      title: "Grilled Cheese",
      description: "Classic grilled cheese sandwich.",
    },
    {
      id: 8,
      title: "Tomato Soup",
      description: "Warm and comforting tomato soup.",
    },
    { id: 9, title: "BBQ Ribs", description: "Tender ribs with BBQ sauce." },
    {
      id: 10,
      title: "Fruit Smoothie",
      description: "A refreshing blend of fruits.",
    },
  ],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [
    {
      id: 4,
      title: "Beef Tacos",
      description: "Tasty tacos with seasoned beef.",
    },
    {
      id: 5,
      title: "Caesar Salad",
      description: "A fresh salad with Caesar dressing.",
    },
    { id: 6, title: "Pancakes", description: "Fluffy pancakes with syrup." },
    {
      id: 7,
      title: "Grilled Cheese",
      description: "Classic grilled cheese sandwich.",
    },
  ],
  recommendations: [],

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action: replace the entire recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Action: update an existing recipe by id
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // Action: delete all recipes
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Action: clear all recipes
  clearRecipes: () => set({ recipes: [] }),

  // Action: set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // auto-filter when term changes
  },

  // Action: filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Action: add to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // avoids duplicates
    })),

  // Action: remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action: generate recommendations (mock logic)
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5 // random selection to simulate
    );

    set({ recommendations: recommended });
  },
}));
