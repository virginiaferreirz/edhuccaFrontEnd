import React, { useState } from 'react';
import logo from '../../img/logo.png';
import NavbarHome from '../Home/NavBarHome';


const Cadastro = () => {
  const [userType, setUserType] = useState('estudante');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // logica
  };

  return (
    <><NavbarHome />
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
          <div className="bg-white p-8 rounded-md shadow-md w-96">
          <img className="bg-white w-52 h-24 mb-4   " src={logo} alt="logo" />
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 bg-white">Tipo de Usuário:</label>
                  <select
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="mt-1 p-2 border rounded-md w-full bg-white"
                  >
                      <option value="estudante">Estudante</option>
                      <option value="empresa">Empresa</option>
                  </select>
              </div>
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 bg-white">Email:</label>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 p-2 border rounded-md w-full bg-white"
                      placeholder="Digite seu email"
                      required />
              </div>
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 bg-white">Senha:</label>
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 p-2 border rounded-md w-full bg-white"
                      placeholder="Digite sua senha"
                      required />
              </div>
              <div className="flex justify-center bg-white">
                  <button
                      type="button"
                      onClick={handleSignUp}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                      Cadastrar
                  </button>
              </div>
          </div>
      </div></>
  );
};

export default Cadastro;
