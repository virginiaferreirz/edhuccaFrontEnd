import React from 'react';
import NavBarProfile from './NavBarProfile';
import Navbar from '../NavbarStudent';
import { Form, useForm } from 'react-hook-form';

interface ProfileAddress {
    address: string;
    number: string;
    bairro: string;
    cep: string;
    city: string;
    uf: string;
    complementOp: string;
}

function ProfileAddress() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  }
  return (
    <><>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Navbar/>
        <NavBarProfile/>
        <div className="px-72 items-center justify-center h-screen">
        <div className="bg-white p-12 pb-4 border rounded-md shadow-md">
          <h2 className="text-1xl mb-2 bg-white text-center">DADOS DE ENDEREÇO</h2>
          <label htmlFor="address" className=" bg-white block text-sm font-medium text-gray-600 pt-2">
            Endereço
          </label>
            <input
                type="text"
                id="address"
                {...register("address" )}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite seu endereço"
                required />
          <label htmlFor="number" className="bg-white block text-sm font-medium text-gray-600 pt-2">
            Número de Endereço
          </label>
            <input
                type="number"
                id="number"
                {...register("number" )}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite o numero do seu endereço"
                required />
            <label htmlFor="bairro" className="block text-sm font-medium text-gray-600 pt-2 bg-white">
            Bairro
          </label>
            <input
                type="text"
                id="bairro"
                {...register("bairro" )} 
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite o bairro"
                required
            />
            <label htmlFor="cep" className="block text-sm font-medium text-gray-600 pt-2 bg-white">
            CEP
          </label>
            <input
                type="text"
                id="cep"
                {...register("cep" )} 
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite o CEP"
                pattern="\d{5}-\d{3}"
                title="Formato esperado: 12345-678"
                required
            />
          <label htmlFor="cidade" className="block text-sm font-medium text-gray-600 bg-white pt-2">
            Cidade
          </label>
            <input
                type="text"
                id="cidade"
                {...register("cidade" )} 
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite a cidade"
                required
            />
                    <label htmlFor="uf" className="bg-white block text-sm font-medium text-gray-600 pt-3">
            Estado
          </label>
          <select
            id="uf"
            {...register("uf" )}
            className="mt-1 p-2 w-full border rounded-md bg-white text-gray-500"
            required
          >
            <option value="" disabled selected>
              Selecione Estado
            </option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federalonas</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
          </select>
          <div className='text-center pt-10 bg-white'>
            <button
                type="submit"
                className="bg-green-400 text-white p-2 px-8 rounded-md hover:bg-green-600 transition">Enviar</button>
          </div>
        </div>
      </div>
    </form>
      </>
      </>
      
);
};

export default ProfileAddress;