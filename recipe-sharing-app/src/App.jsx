import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
      }}
    >
      <h1>🍳 Recipe Sharing App</h1>
      <Routes>
        {/* Home: add form + list */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />{" "}
            </>
          }
        />{" "}
        {/* Recipe details */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* Edit recipe */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
