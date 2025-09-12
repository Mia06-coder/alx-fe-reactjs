import { create } from "zustand";

// Zustand store for managing recipes
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action: replace the entire recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Action: clear all recipes
  clearRecipes: () => set({ recipes: [] }),
}));
