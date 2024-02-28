import { useForm } from "react-hook-form";
import { AdminProfileNavBar } from "../../Profile/AdminProfileNavBar";
import { RegisterAdminNavBar } from "../RegisterAdminNavBar";

interface RegisterCurso {
  name: string;
  description: string;
  area: string;
}

export const RegisterCurso = () => {
  const { register, handleSubmit } = useForm<RegisterCurso>();

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <AdminProfileNavBar />
      <RegisterAdminNavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-72 items-center justify-center h-screen">
          <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
            <h2 className="text-1xl mb-2 bg-white text-center">
              CADRASTRO DE CURSO
            </h2>
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite nome do curso"
              required
            />
            <label
              htmlFor="name"
              className=" bg-white block text-sm font-medium text-gray-600 mt-2"
            >
              Area
            </label>
            <input
              type="text"
              id="area"
              {...register("area")}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite area do curso"
              required
            />
            <label
              htmlFor=""
              className="bg-white block text-sm font-medium text-gray-600 mt-2"
            >
              Descrição
            </label>
            <input
              type="text"
              id="description"
              {...register("description")}
              className="mt-1 p-4 w-full border rounded-lg bg-white"
              placeholder="Digite a descrição do curso"
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
