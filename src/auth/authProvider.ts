import { useApi } from "../hooks/useApi";
import { User } from "../types/user";

interface AuthProvider {
  isAuthenticated: boolean;
  user: null | User;
  role: string;
  login(email: string, password: string): Promise<void>;
  signout(): void;
}

const api = useApi();

export const authProvider: AuthProvider = {
  isAuthenticated: false,
  user: null,
  role: "",
  async login(email: string, password: string) {
    const response = await api.login(email, password);
    if (response.id) {
      authProvider.isAuthenticated = true;
      authProvider.user = {
        id: response.id,
        email: response.email,
        role: response.role,
      };
      authProvider.role = response.role;
      localStorage.setItem("token", response.token);
    }
  },
  signout() {
    localStorage.removeItem("token");
    authProvider.isAuthenticated = false;
    authProvider.user = null;
  },
};
