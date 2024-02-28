import { NavBarProfile } from "./NavBarProfile";
import Navbar from "../NavbarStudent";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  StudentProfileUpdateForm,
} from "../../../types/studentProfile";
import { useApi } from "../../../hooks/useApi";
import { useRouteLoaderData } from "react-router";

export const StudentProfile = () => {
  const { register, handleSubmit } = useForm<StudentProfileUpdateForm>();
  const api = useApi();
  const { user_id } = useRouteLoaderData("root") as { user_id: number };

  const onSubmit: SubmitHandler<StudentProfileUpdateForm> = (
    data: StudentProfileUpdateForm
  ) => {
    api.update_student(user_id, data);
  };
  return (
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
              placeholder="Digite seu nome"
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
              placeholder="Digite seu e-mail"
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
              placeholder="Digite seu número de celular"
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
              id="cpf"
              {...register("cpf")}
              className="mt-1 p-2 w-full border rounded-md bg-white"
              placeholder="Digite seu CPF"
              maxLength={11}
              minLength={11}
              required
            />
            <label
              htmlFor="gender"
              className="bg-white block text-sm font-medium text-gray-600 pt-3"
            >
              Gênero
            </label>
            <select
              id="gender"
              {...register("gender")}
              className="mt-1 p-2 w-full border rounded-md bg-white"
              required
            >
              <option value="" disabled selected>
                Selecione o gênero
              </option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Prefiro não informar</option>
              <option value="other">Outro</option>
            </select>
            <label
              htmlFor="birth"
              className="bg-white block text-sm font-medium text-gray-600 pt-3"
            >
              Data de nascimento
            </label>
            <input
              type="date"
              id="birth"
              {...register("birth")}
              className="mt-1 p-2 w-full border rounded-md bg-white"
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
