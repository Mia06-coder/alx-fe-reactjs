import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-8 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} GitHub User Search App.{" "}
      <span className="text-xs">
        Designed by{" "}
        <Link
          to="https://linkedin.com/in/mia-mudzingwa"
          className="text-blue-600"
          target="blank"
        >
          Mia Mudzingwa
        </Link>
        .
      </span>
    </footer>
  );
}
