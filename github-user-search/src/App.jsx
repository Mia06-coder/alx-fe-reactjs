import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Page Content */}
        <main className="container mx-auto flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
