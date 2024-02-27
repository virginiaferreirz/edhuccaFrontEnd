import React from "react"
import { Link } from "react-router-dom"


const NavBarProfile = () => {
  return (
    <div className="flex items-center pt-28 pb-4 justify-center rounded-xl shadow-xl">
        <div className="bg-transparent text-center border rounded-xl shadow-xl flex items-center space-x-8">
            <Link to={"/PersonalProfile"}>
            <button className="bg-gray-300 text-white p-2 px-12 rounded-md hover:bg-gradient-to-r from-blue-300 via-green-400 to-green-500 transition text-center">Dados pessoais</button>
            </Link>
            <Link to={"/ProfileAddress"}>
            <button className="bg-gray-300 text-white p-2 px-14 rounded-md hover:bg-gradient-to-r to-green-500 via-green-400 from-blue-300 transition">Endereço</button>
            </Link>
            <Link to={""}>
            <button className="bg-gray-300 text-white p-2 px-20 rounded-md hover:bg-gradient-to-r to-red-500 via-red-400 from-red-300 transition">Sair</button>
            </Link>
        </div>
    </div>
  )
}

export default NavBarProfile
