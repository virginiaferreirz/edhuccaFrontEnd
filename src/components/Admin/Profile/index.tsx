import { useForm } from "react-hook-form";
import { AdminProfileNavBar } from "./AdminProfileNavBar";
import { AdminNavBar } from "../AdminNavBar";

interface AdminProfile {
  name: string;
  email: string;
}

export const AdminProfile = () => {
  const { register, handleSubmit } = useForm<AdminProfile>();

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <AdminNavBar />
      <AdminProfileNavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-72 items-center justify-center h-screen">
          <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
            <h2 className="text-1xl mb-2 bg-white text-center">
              DADOS PESSOAIS
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
              placeholder="Digite o nome da empresa"
              required
            />
            <label
              htmlFor="email"
              className="bg-white block text-sm font-medium text-gray-600 pt-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 p-2 w-full border rounded-lg bg-white"
              placeholder="Digite o e-mail"
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
