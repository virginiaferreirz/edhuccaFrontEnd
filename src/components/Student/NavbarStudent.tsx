import logo from "../../img/logo.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-10 w-full left-0 right-0 transition font-bold bg-white">
        <ul className="text-center text-x1 p-20 bg-white">
          <Link to={"/Sobre"}>
            <li className="my-4 py-4 border-b houver:bg-slate-400 houver:rounded">
              Quem somos?
            </li>
          </Link>
          <Link to={"/AllVacancy"}>
            <li className="my-4 py-4 border-b houver:bg-slate-400 houver:rounded">
              Vagas
            </li>
          </Link>
          <Link to={"/MyVacancy"}>
            <li className="my-4 py-4 border-b houver:bg-slate-400 houver:rounded">
              Minhas Vagas
            </li>
          </Link>
          <Link to={"/PersonalProfile"}>
            <li className="my-4 py-4 border-b  houver:bg-slate-400 houver:rounded">
              Perfil
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-300 via-green-400 to-green-500">
      <div className="h-10vh flex justify-between z-50 text-grey lg:py-3 px-40 py-1.5 flex-1 shadow-md mb-1 bg-white">
        <div className="flex w-36 items-center bg-white">
          <img className="bg-white w-96 h-14" src={logo} alt="logo" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden bg-white">
          <div className="flex-10 py-4 bg-white ">
            <ul className="flex gap-8 mr-16 text-[20] bg-white">
              <Link to={"/Sobre"}>
                <li className="bg-white hover:text-emerald-400 transition border-b-2 border-transparent hover:border-emerald-400 cursor-pointer">
                  Quem somos?
                </li>
              </Link>
              <Link to={"/AllVacancy"}>
                <li className="bg-white hover:text-emerald-400 transition border-b-2 border-transparent hover:border-emerald-400 cursor-pointer">
                  Vagas
                </li>
              </Link>
              <Link to={"/MyVacancy"}>
                <li className="bg-white hover:text-emerald-400 transition border-b-2 border-transparent hover:border-emerald-400 cursor-pointer">
                  Minhas Vagas
                </li>
              </Link>
              <Link to={"/PersonalProfile"}>
                <li className="bg-white hover:text-emerald-400 transition border-b-2 border-transparent hover:border-emerald-400 cursor-pointer">
                  Perfil
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition justify-end text-right py-4"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <TfiMenu />}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
