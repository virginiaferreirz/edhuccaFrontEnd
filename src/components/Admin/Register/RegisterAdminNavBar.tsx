import { Link } from "react-router-dom";

export const RegisterAdminNavBar = () => {
  return (
    <div className="flex items-center pt-28 pb-4 justify-center rounded-xl shadow-xl">
      <div className="bg-transparent text-center border rounded-xl shadow-xl flex items-center space-x-8">
        <Link to={"/cadastrar-curso"}>
          <button className="bg-gray-300 text-white p-2 px-12 rounded-md hover:bg-gradient-to-r from-blue-300 via-green-400 to-green-500 transition text-center">
            Cursos
          </button>
        </Link>
        <Link to={"/cadastrar-competencia"}>
          <button className="bg-gray-300 text-white p-2 px-6 rounded-md hover:bg-gradient-to-r from-blue-300 via-green-400 to-green-500 transition">
            Competencia
          </button>
        </Link>
      </div>
    </div>
  );
};
