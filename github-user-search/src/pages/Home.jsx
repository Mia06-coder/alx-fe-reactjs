import { FaGithub } from "react-icons/fa6";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="py-6 flex flex-col justify-center items-center">
      <FaGithub size={40} className="hover:text-blue-200" />
      <h2 className="text-4xl font-bold text-white">GitHub User Search</h2>
      <p>Use the search bar below to find GitHub users.</p>
      <Search />
    </div>
  );
}
