import React from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/user";
import { StudentSignup } from "../../types/studentSignup";
import { CompanySignup } from "../../types/companySignup";

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null!);
  const api = useApi();
  /*  useEffect(() => {
    const validadeToken = async () => {
      const storageData = localStorage.getItem('token');
      if (storageData) {
        const response = await api.validate(storageData);
        if (response.details === 'Invalid Token') {
          setUser(null!);
          setToken('');
          window.location.href = '/';
        } else {
          setUser(response.user)
        }
      }
    };

    validadeToken();
  }, []); */

  const login = async (email: string, password: string) => {
    const response = await api.login(email, password);
    try {
      const user: User = {
        id: response.id,
        name: response.name,
        email: response.email,
        role: response.role,
      };

      setUser(user);
      setToken(response.token);
      return "SUCCESS";
    } catch (err: any) {
      return err;
    }
  };

  const student_signup = async (props: StudentSignup) => {
    const response = await api.student_signup(props);
    return response;
  };

  const company_signup = async (props: CompanySignup) => {
    const response = await api.company_signup(props);
    return response;
  };

  const logout = () => {
    setUser(null!);
    clearToken();
    // await api.logout();
  };

  const setToken = async (token: string) => {
    localStorage.setItem("token", token);
  };

  const clearToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, student_signup, company_signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
