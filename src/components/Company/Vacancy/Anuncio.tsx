import React from 'react';
import Navbar from '../NavBarCompany';
import { useForm } from 'react-hook-form';


interface Anuncio {
	nome: string
	descrição: string
	competencias: string
	cursos: string
}

function Anuncio()  {
  const {register, handleSubmit} = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  }
  return (
    <><>
    <Navbar/>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="px-72 pt-28 items-center justify-center h-screen">
        <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
          <h2 className="text-1xl mb-2 bg-white text-center">ANUNCIO DE VAGA</h2>
          <label htmlFor="name" className=" bg-white block text-sm font-medium text-gray-600">Titulo da vaga</label>
          <input
            type="text"
            id="name"
            {...register("name" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite o titulo da vaga"
            required />
          <label htmlFor="competencia" className=" bg-white block text-sm font-medium text-gray-600 mt-2">Competencia</label>
          <input
            type="text"
            id="name"
            {...register("competencia" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite competencias"
            required />
          <label htmlFor="cursos" className=" bg-white block text-sm font-medium text-gray-600 mt-2">Cursos</label>
          <input
            type="text"
            id="name"
            {...register("cursos" )}
            className="mt-1 p-2 w-full border rounded-lg bg-white"
            placeholder="Digite Cursos"
            required />
          <label htmlFor="descrição" className=" bg-white block text-sm font-medium text-gray-600 mt-2">Descrição</label>
          <input
            type="text"
            id="name"
            {...register("descrição" )}
            className="mt-1 p-4 w-full border rounded-lg bg-white"
            placeholder="Digite a descrição da vaga"
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

export default Anuncio;