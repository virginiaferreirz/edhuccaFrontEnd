import logo from "../../img/logo.png";
import { NavbarHome } from "../Home/NavBarHome";
import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";
  const navigation = useNavigation();
  const isLogginIn = navigation.formData?.get("email") != null;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <>
      <NavbarHome />
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <img className="bg-white w-52 h-24" src={logo} alt="logo" />
          <Form method="post" replace>
            <input type="hidden" name="redirectTo" value={from} />
            <div className="mb-4 bg-white">
              <label className="block text-sm font-medium text-gray-700 bg-white">
                Email:
              </label>
              <input
                name="email"
                type="email"
                className="mt-1 p-2 border rounded-md w-full bg-white"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="mb-4 bg-white">
              <label className="block text-sm font-medium text-gray-700 bg-white">
                Senha:
              </label>
              <input
                name="password"
                type="password"
                className="mt-1 p-2 border rounded-md w-full bg-white"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div className="flex justify-center bg-white">
              <button
                type="submit"
                disabled={isLogginIn}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition "
              >
                {isLogginIn ? "Entrando..." : "Entrar"}
              </button>
              {actionData && actionData.error ? (
                <p style={{ color: "red" }}>{actionData.error}</p>
              ) : null}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
