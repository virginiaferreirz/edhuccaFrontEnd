import Navbar from "../NavBarCompany";
import { useApi } from "../../../hooks/useApi";
import { useRouteLoaderData } from "react-router";
import { User } from "../../../types/user";
import { useState } from "react";

export const Anuncio = () => {
  const { user } = useRouteLoaderData("root") as { user: User };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [competencias, setCompetencias] = useState("");
  const [cursos, setCursos] = useState("");

  const api = useApi();

  const handleSubmit = async () => {
    const response = await api.post_job({
      company_id: user.id,
      name,
      description,
      competencias,
      cursos,
    });
    if (response.status === 200) {
      alert("Vaga criada com sucesso");
    } else {
      alert("Algo de errado aconteceu");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="px-72 pt-28 items-center justify-center h-screen">
          <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
            <h2 className="text-1xl mb-2 bg-white text-center">
              ANUNCIO DE VAGA
            </h2>
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600"
            >
              Titulo da vaga
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite o titulo da vaga"
              required
            />
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600 mt-2"
            >
              Competencia
            </label>
            <input
              type="text"
              id="competencias"
              value={competencias}
              onChange={(e) => setCompetencias(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite competencias"
              required
            />
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600 mt-2"
            >
              Cursos
            </label>
            <input
              type="text"
              id="cursos"
              value={cursos}
              onChange={(e) => setCursos(e.target.value)}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite Cursos"
              required
            />
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600 mt-2"
            >
              Descrição
            </label>
            <input
              type="text"
              id="name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-4 w-full border rounded-lg bg-white"
              placeholder="Digite a descrição da vaga"
              required
            />
            <div className="text-center pt-10 bg-white">
              <button
                type="submit"
                className="bg-green-400 text-white p-2 px-8 rounded-md hover:bg-green-600 transition"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
