import { HomePage } from "./Pages/Home/HomePage";
import { authProvider } from "./auth/authProvider";
import { Footer } from "./components/Footer";
import {
  LoaderFunctionArgs,
  Outlet,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Contact } from "./components/Contact";
import { StudentVacancy } from "./components/Student/Vacancy";
import { Login } from "./Pages/Login";
import { About } from "./Pages/Home/About";
import { Signup } from "./Pages/Signup";
import { CompanyProfile } from "./components/Company/Profile/CompanyProfile";
import { StudentAddress } from "./components/Student/Profile/StudentAddress";
import { CompanyAddress } from "./components/Company/Profile/CompanyAddress";
import { StudentProfile } from "./components/Student/Profile/StudentProfile";
import { CompanyVacancy } from "./components/Company/Vacancy/CompanyVacancy";
import { Anuncio } from "./components/Company/Vacancy/Anuncio";
import { AdminProfile } from "./components/Admin/Profile";
import { RegisterCurso } from "./components/Admin/Register/curso";
import { RegisterCompetencia } from "./components/Admin/Register/competencia";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
};

async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/perfil-da-empresa");
  }
  return null;
}

async function loginAction({ request }: LoaderFunctionArgs) {
  let formData = await request.formData();
  let email = formData.get("email") as string | null;
  let password = formData.get("password") as string | null;

  if (!email || !password) {
    return { error: "Voce deve digitar seu email e senha" };
  }

  try {
    await authProvider.login(email, password);
  } catch (error) {
    return {
      error: "O login falhou",
    };
  }

  switch (authProvider.role) {
    case "STUDENT":
      return redirect("/perfil-do-estudante");
    case "COMPANY":
      return redirect("/perfil-da-empresa");
    case "ADMIN":
      return redirect("/perfil-do-admin");
    default:
      return redirect("/");
  }
}

function adminLoader({ request }: LoaderFunctionArgs) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  if (authProvider.role != "ADMIN") {
    return redirect(request.url);
  }
  return null;
}

function studentLoader({ request }: LoaderFunctionArgs) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  if (authProvider.role != "STUDENT") {
    return redirect(request.url);
  }
  return {
    user_id: authProvider.user?.id,
  };
}

function companyLoader({ request }: LoaderFunctionArgs) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  if (authProvider.role != "COMPANY") {
    return redirect(request.url);
  }
  return {
    user_id: authProvider.user?.id,
  };
}

export const Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      return { user: authProvider.user };
    },
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "sobre",
        Component: About,
      },

      {
        path: "minhas-vagas-estudante",
        loader: studentLoader,
        Component: StudentVacancy,
      },
      {
        path: "perfil-do-estudante",
        loader: studentLoader,
        Component: StudentProfile,
      },
      {
        path: "endereco-do-estudante",
        loader: studentLoader,
        Component: StudentAddress,
      },

      {
        path: "minhas-vagas-empresa",
        loader: companyLoader,
        Component: CompanyVacancy,
      },
      {
        path: "perfil-da-empresa",
        loader: companyLoader,
        Component: CompanyProfile,
      },
      {
        path: "endereco-da-empresa",
        loader: companyLoader,
        Component: CompanyAddress,
      },
      {
        path: "anuncio-de-vagas",
        loader: companyLoader,
        Component: Anuncio,
      },

      {
        path: "perfil-do-admin",
        loader: adminLoader,
        Component: AdminProfile,
      },
      {
        path: "cadastrar-curso",
        loader: adminLoader,
        Component: RegisterCurso,
      },
      {
        path: "cadastrar-competencia",
        loader: adminLoader,
        Component: RegisterCompetencia,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      authProvider.signout();
      return redirect("/");
    },
  },
]);
