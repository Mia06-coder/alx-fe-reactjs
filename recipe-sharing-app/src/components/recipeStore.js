import { create } from "zustand";

/**
 * Zustand store for recipes
 * - recipes: array of { id: date, title: string, description: string }
 * - addRecipe(newRecipe)
 * - updateRecipe(updatedRecipe)
 * - deleteRecipe(id)
 * - setRecipes(recipes)
 */
export const useRecipeStore = create((set) => ({
  recipes: [],

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
}));
