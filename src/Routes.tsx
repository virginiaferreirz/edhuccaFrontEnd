import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { AuthProvider } from "context/auth/AuthProvider";
import PersonalProfile from "./components/Student/Profile/PersonalProfile";
import ProfileAddress from "./components/Student/Profile/ProfileAddress";
import AllVacancy from "./Pages/AllVacancy";
import MyVacancy from "./components/Student/Vacancy/MyVacancy";
import Sobre from "./Pages/Home/Sobre";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/log";
import Cadastro from "./Pages/Login/Cadrastro";
import ProfileAddressComp from "./components/Company/Profile/ProfileAddressComp";
import PersonalProfileComp from "./components/Company/Profile/PersonalProfileComp";
import VacancyComp from "./components/Company/Vacancy/VacancyComp";
import Anuncio from "./components/Company/Vacancy/Anuncio";
import PersonalProfileAdm from './components/Admin/Profile/PersonalProfileComp'
import CadrastroAdm from './components/Admin/Cadrastros/CadrastroAdm'
import Competencia from "./components/Admin/Cadrastros/Competencia";

function AppRoutes(){
    return(
        <Router>
                <Routes>
                    {/* publica */}
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Cadrastro" element={<Cadastro/>}></Route>
                    <Route path="/AllVacancy" element={<AllVacancy/>}></Route>
                    <Route path="/Sobre" element={<Sobre/>}></Route>
                    
                    {/* estudante */}
                    <Route path="/PersonalProfile" element={<PersonalProfile name={""} email={""} phone={""} cpf={0} gender={""} dateOfBirth={0}/>}></Route>
                    <Route path="/ProfileAddress" element={<ProfileAddress address={""} number={0} district={""} cep={0} city={""} state={""} complementOp={""}/>}></Route>
                    <Route path="/MyVacancy" element={<MyVacancy/>}></Route>
                    
                    {/* empresa */}
                    <Route path="/PersonalProfileComp" element={<PersonalProfileComp name={""} email={""} phone={""} cpf={0} gender={""} dateOfBirth={0}/>}></Route>
                    <Route path="/ProfileAddressComp" element={<ProfileAddressComp address={""} number={0} district={""} cep={0} city={""} state={""} complementOp={""}/>}></Route>
                    <Route path="/VacancyComp" element={<VacancyComp/>}></Route>
                    <Route path="/Anuncio" element={<Anuncio/>}></Route>
                    
                    {/* adm */}
                    <Route path="/PersonalProfileAdm" element={<PersonalProfileAdm/>}></Route>
                    <Route path="/CadrastroAdm" element={<CadrastroAdm/>}></Route>
                    <Route path="/Competencia" element={<Competencia/>}></Route>

                    <Route path="*" element={<h1>Not Found</h1>}/>           
                </Routes>
        </Router>
    )
}

export default AppRoutes;
