import { createContext } from 'react';
import { User } from '../../types/user';
import { StudentSignup } from '../../types/studentSignup';
import { CompanySignup } from '../../types/companySignup';

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<any>;
  student_signup: (props: StudentSignup) => Promise<any>;
  company_signup: (props: CompanySignup) => Promise<any>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
