import { NavBarProfile } from "./NavBarProfile";
import Navbar from "../NavBarCompany";
import { useForm } from "react-hook-form";

interface CompanyProfileForm {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  description: string;
}

export const CompanyProfile = () => {
  const { register, handleSubmit } = useForm<CompanyProfileForm>();

  const onSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <>
        <Navbar />
        <NavBarProfile />
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
              <label
                htmlFor="phone"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Número de Celular
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite o número de contato"
                required
              />
              <label
                htmlFor="cpf"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                CPF
              </label>
              <input
                type="text"
                id="cnpj"
                {...register("cnpj")}
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite o CNPJ"
                required
              />
              <label
                htmlFor="description"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Descrição
              </label>
              <input
                type="text"
                id="description"
                {...register("description")}
                className="mt-1 p-6 w-full border rounded-md bg-white"
                placeholder="Digite uma descrição de atividades da empresa"
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
    </>
  );
};
