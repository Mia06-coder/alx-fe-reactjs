// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [errors, setErrors] = useState([]);

  // Validation
  const validateForm = () => {
    const validationErrors = [];

    if (!title.trim()) validationErrors.push("Title is required.");
    if (!summary.trim()) validationErrors.push("Summary is required.");
    if (ingredients.length === 0 || ingredients.some((i) => !i.trim())) {
      validationErrors.push("All ingredients must be filled.");
    }
    if (ingredients.length < 2)
      validationErrors.push("At least 2 ingredients are required.");
    if (steps.length === 0 || steps.some((s) => !s.trim())) {
      validationErrors.push("All preparation steps must be filled.");
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary,
        ingredients,
        instructions: steps,
      };
      console.log("New Recipe Submitted:", newRecipe);
      // Reset form
      setTitle("");
      setSummary("");
      setIngredients([""]);
      setSteps([""]);
      setErrors([]);
    }
  };

  // Handle dynamic fields
  const updateArray = (index, value, array, setArray) => {
    const updated = [...array];
    updated[index] = value;
    setArray(updated);
  };

  const addField = (array, setArray) => setArray([...array, ""]);
  const removeField = (index, array, setArray) => {
    const updated = array.filter((_, i) => i !== index);
    setArray(updated);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gradient-to-br from-amber-50 via-white to-red-100 rounded-3xl shadow-2xl border border-rose-200 ring-1 ring-rose-100">
      <h2 className="text-3xl font-extrabold text-rose-600 mb-8 text-center tracking-wide">
        Add a New Recipe
      </h2>

      {errors.length > 0 && (
        <div
          role="alert"
          className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 shadow-sm animate-pulse"
        >
          <ul className="list-disc list-inside space-y-1 text-left">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label
            htmlFor="title"
            className="block mb-1 font-medium text-left text-gray-700"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Chocolate Cake"
            className="w-full px-2 py-3 border-b-2 border-gray-300 rounded-lg outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 placeholder-gray-400"
          />
        </div>

        {/* Recipe Summary */}
        <div>
          <label
            htmlFor="summary"
            className="block mb-1 font-medium text-left text-gray-700"
          >
            Recipe Summary
          </label>
          <textarea
            id="summary"
            type="text"
            value={summary}
            required
            rows={3}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Short description of recipe..."
            className="w-full px-2 py-3 border-b-2 border-gray-300 rounded-lg outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 placeholder-gray-400"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium text-left text-gray-700">
            Ingredients
          </label>
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex mb-2 items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner"
            >
              <input
                type="text"
                value={ingredient}
                required
                onChange={(e) =>
                  updateArray(
                    index,
                    e.target.value,
                    ingredients,
                    setIngredients
                  )
                }
                placeholder={`Ingredient #${index + 1}`}
                className="flex-1 px-2 py-3 border-b-2 border-gray-300 rounded-md outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition duration-300 placeholder-gray-400"
              />
              {ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeField(index, ingredients, setIngredients)
                  }
                  aria-label={`Remove ingredient ${index + 1}`}
                  className="px-2 py-1 text-white font-bold text-xl"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField(ingredients, setIngredients)}
            className="mt-2 text-white hover:text-rose-700 font-semibold transition-colors duration-300"
          >
            + Add
          </button>
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 text-left font-medium text-gray-700">
            Preparation Steps
          </label>
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex mb-2 items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner"
            >
              <input
                type="text"
                value={step}
                required
                onChange={(e) =>
                  updateArray(index, e.target.value, steps, setSteps)
                }
                placeholder={`Step #${index + 1}`}
                className="flex-1 px-2 py-3 border-b-2 border-gray-300 rounded-md outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition duration-300 placeholder-gray-400"
              />
              {steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeField(index, steps, setSteps)}
                  aria-label={`Remove step ${index + 1}`}
                  className="text-white font-bold text-xl px-2 py-1"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField(steps, setSteps)}
            className="mt-2 text-white hover:text-rose-700 font-semibold transition-colors duration-300"
          >
            + Add
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-transparent border-2 border-rose-500 hover:bg-rose-600 text-rose-500 hover:text-white font-bold py-3 rounded-xl shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-200 focus:ring-opacity-50"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
