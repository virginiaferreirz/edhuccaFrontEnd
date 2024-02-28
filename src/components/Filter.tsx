import { useState } from 'react';

const Filter = (onFilter: any) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e: { target: { value: any; }; }) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onFilter(newFilter);
  };

  return (
    <div className="max-w-md mx-auto px-8 rounded-xl shadow-xl mb-4 flex flex-col items-center h-[400px] w-[330px] pt-8">
        <h2 className='text-xl'>Filtrar Vagas</h2>
        <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700">Titulo:</label>
        <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Digite um termo de pesquisa"
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">Cidade:</label>
        <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Digite cidade"
        />
        <label className="block text-sm font-medium text-gray-700 mt-2">Horario:</label>
        <select
        className="mt-1 p-2 border rounded-md w-full"
      >
        <option value="">Todos</option>
        <option value="presencial">Manhã</option>
        <option value="homeoffice">Tarde</option>
        <option value="hibrido">Noite</option>
      </select>
        <button className="bg-gradient-to-r to-green-500 via-green-400 from-blue-300 text-white px-24 p-2 rounded-md transition m-6">
          Filtrar
        </button>
    </div>
    </div>
  );
};

export default Filter;
