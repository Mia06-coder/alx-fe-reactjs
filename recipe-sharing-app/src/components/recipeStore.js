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
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

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
}));
