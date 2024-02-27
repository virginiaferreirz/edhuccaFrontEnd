import React from 'react';
import NavBarProfile from './NavBarProfile';
import Navbar from '../NavbarStudent';
import { useForm } from 'react-hook-form';


interface PersonalProfile {
  name: string;
  email: string;
  phone: string;
  cpf: number;
  gender: string;
  dateOfBirth: number;
}

function PersonalProfile()  {
  const {register, handleSubmit} = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  }
  return (
    <><>
    <Navbar/>
    <NavBarProfile/>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="px-72 items-center justify-center h-screen">
        <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
          <h2 className="text-1xl mb-2 bg-white text-center">DADOS PESSOAIS</h2>
          <label htmlFor="name" className=" bg-white block text-sm font-medium text-gray-600">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite seu nome"
            required />
          <label htmlFor="email" className="bg-white block text-sm font-medium text-gray-600 pt-2">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite seu e-mail"
            required />
          <label htmlFor="phone" className="bg-white block text-sm font-medium text-gray-600 pt-3">Número de Celular</label>
          <input
            type="tel"
            id="phone"
            {...register("phone" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite seu número de celular"
            required />
          <label htmlFor="cpf" className="bg-white block text-sm font-medium text-gray-600 pt-3">CPF</label>
          <input
            type="text"
            id="cpf"
            {...register("cpf" )}
            className="mt-1 p-2 w-full border rounded-md bg-white"
            placeholder="Digite seu CPF"
            maxLength={11}
            minLength={11}
            required />
          <label htmlFor="gender" className="bg-white block text-sm font-medium text-gray-600 pt-3">Gênero</label>
          <select
            id="gender"
            {...register("gender" )}
            className="mt-1 p-2 w-full border rounded-md bg-white"
            required
          >
            <option value="" disabled selected>Selecione o gênero</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Prefiro não informar</option>
            <option value="other">Outro</option>
          </select>
          <label htmlFor="birthdate" className="bg-white block text-sm font-medium text-gray-600 pt-3">Data de nascimento</label>
          <input
            type="date"
            id="birthdate"
            {...register("birthdate" )}
            className="mt-1 p-2 w-full border rounded-md bg-white"
            required />
        <div className='text-center pt-10 bg-white'>
          <button
            type="submit"
            className="bg-green-400 text-white p-2 px-8 rounded-md hover:bg-green-600 transition"
          >Enviar</button>
        </div>
      </div>
    </div>
  </form>
      </>
      </>
      
);
};

export default PersonalProfile;