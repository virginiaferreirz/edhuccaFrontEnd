import React from "react";
import logo from "../../img/trabalho.png"
import Navbar from "./NavBarHome";

const Sobre = () => {

  return (
        <>
        <Navbar/>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="text-center pl-24 pr-8">
          <h1 className="text-4xl font-bold mb-8">Portal Oportunidade - Estágios</h1>
          <p className="text-gray-600">O Portal Oportunidade do EDHUCCA é uma plataforma de vagas de emprego, um ecosistema que une estudantes capacitados a oportunidades enriquecedoras de estágio na cidade de Apucarana-PR e região. Nossa missão é impulsionar o crescimento profissional de jovens talentos, e apoiar o desenvolvimento empresarial pela otimização da busca de profissionais</p>
        <button className="mt-10 bg-gradient-to-r from-blue-300 via-green-400 to-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        <a href="http://www.edhucca.org.br/" target="_blank" className="bg-transparent">EDHUCCA OFICIAL</a>
        </button>
      </div>
      <div>
        <img className="bg-transparent pr-32" src={logo} alt="logo" />
      </div>
    </div>
        </> 
  );
};

export default Sobre;