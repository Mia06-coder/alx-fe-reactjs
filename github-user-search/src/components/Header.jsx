import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white text-gray-700 shadow">
      <nav className="container mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-gray-800">GitHub User Search</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="font-medium hover:text-blue-600 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-blue-600 hover:underline"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
