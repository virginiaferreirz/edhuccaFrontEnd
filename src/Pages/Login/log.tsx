import React, { useState } from 'react';
import logo from '../../img/logo.png';
import NavbarHome from '../Home/NavBarHome';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //logica
  };

  return (
    <><NavbarHome /><div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <img className="bg-white w-52 h-24" src={logo} alt="logo" />
        <form>
          <div className="mb-4 bg-white">
            <label className="block text-sm font-medium text-gray-700 bg-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full bg-white"
              placeholder="Digite seu email"
              required />
          </div>
          <div className="mb-4 bg-white">
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
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition "
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default Login;
