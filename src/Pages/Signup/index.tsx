import { useState } from "react";
import logo from "../../img/logo.png";
import { useApi } from "../../hooks/useApi";

export const Signup = () => {
  const [userType, setUserType] = useState("estudante");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [cpf, setCpf] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");

  const [cnpj, setCnpj] = useState("");
  const [description, setDescription] = useState("");

  const api = useApi();
  const handleSignUp = async () => {
    let response;

    if (userType === "estudante") {
      response = await api.student_signup({
        email,
        password,
        name,
        phone,
        cpf,
        gender,
        birth: new Date(birth),
      });
    }
    if (userType === "empresa") {
      response = await api.company_signup({
        email,
        password,
        name,
        phone,
        cnpj,
        description,
      });
    }

    if (response && response.status === 200) {
      // Check if response is defined
      window.location.href = "/login";
    } else {
      alert("Algo de errado aconteceu");
    }
  };

  return (
    <>
      {/*<NavbarHome />*/}
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <img className="bg-white w-52 h-24 mb-4" src={logo} alt="logo" />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 bg-white">
              Tipo de Usuário:
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full bg-white"
            >
              <option value="estudante">Estudante</option>
              <option value="empresa">Empresa</option>
            </select>
          </div>

          {userType === "estudante" ? (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 bg-white">
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full bg-white"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 bg-white">
                  Senha:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full bg-white"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <label
                htmlFor="name"
                className=" bg-white block text-sm font-medium text-gray-600"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite seu nome"
                required
              />
              <label
                htmlFor="phone"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Número de Celular
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite seu número de celular"
                required
              />
              <label
                htmlFor="cpf"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite seu CPF"
                maxLength={11}
                minLength={11}
                required
              />
              <label
                htmlFor="gender"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Gênero
              </label>
              <select
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled selected>
                  Selecione o gênero
                </option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Prefiro não informar</option>
                <option value="other">Outro</option>
              </select>
              <label
                htmlFor="birth"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Data de nascimento
              </label>
              <input
                type="date"
                id="birth"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-white"
                required
              />
            </form>
          ) : userType === "empresa" ? (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 bg-white">
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full bg-white"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 bg-white">
                  Senha:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full bg-white"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <label
                htmlFor="name"
                className=" bg-white block text-sm font-medium text-gray-600"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite seu nome"
                required
              />
              <label
                htmlFor="phone"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Número de Celular ou telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border rounded-lg bg-white"
                placeholder="Digite seu número de celular"
                required
              />
              <label
                htmlFor="cnpj"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-white"
                placeholder="Digite o CNPJ de sua empresa"
                required
              />
              <label
                htmlFor="description"
                className="bg-white block text-sm font-medium text-gray-600 pt-3"
              >
                Descrição
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-6 w-full border rounded-md bg-white"
                placeholder="Digite uma descrição de atividades da empresa"
                required
              />
            </form>
          ) : null}

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
      </div>
    </>
  );
};
