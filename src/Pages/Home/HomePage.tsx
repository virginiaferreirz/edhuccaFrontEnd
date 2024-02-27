import React from "react";
import logo from "../../img/trabalho.png"
import NavbarHome from "./NavBarHome";
import { Link } from "react-router-dom" 
const HomePage = () => {

  return (
        <>
        <NavbarHome/>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="text-center pl-24 pr-8">
          <h1 className="text-4xl font-bold mb-8">Portal Oportunidade - Estágios</h1>
          <p className="text-gray-600">O Portal Oportunidade do EDHUCCA é uma plataforma de vagas de emprego, um ecosistema que une estudantes capacitados a oportunidades enriquecedoras de estágio na cidade de Apucarana-PR e região. Nossa missão é impulsionar o crescimento profissional de jovens talentos, e apoiar o desenvolvimento empresarial pela otimização da busca de profissionais</p>
            <button className="mt-10 bg-gradient-to-r from-blue-300 via-green-400 to-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-6">
              <Link to={"/Login"} className="bg-transparent px-6">Login</Link>
            </button>
            <button className="mt-10 bg-gradient-to-r from-blue-300 via-green-400 to-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <Link to={"/Cadrastro"} className="bg-transparent px-2">Cadraste-se</Link>
            </button>
            <a href="http://www.edhucca.org.br/" target="_block" className="block pt-8 text-sm text-gray-600">Visite o site oficial do EDHUCCA</a>
        </div>
      <div>
        <img className="bg-transparent pr-32" src={logo} alt="logo" />
      </div>
    </div>
    </> 
  );
};

export default HomePage;