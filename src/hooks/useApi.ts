import axios from "axios";
import { StudentSignup } from "../types/studentSignup";
import { CompanySignup } from "../types/companySignup";

const api = axios.create({
  timeout: 10000,
});

export const useApi = () => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  return {
    login: async (email: string, password: string) => {
      try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
      } catch (err: any) {
        return err.response;
      }
    },

    student_signup: async (props: StudentSignup) => {
      try {
        const response = await api.post("/auth/student/signup", props);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    company_signup: async (props: CompanySignup) => {
      try {
        const response = await api.post("/auth/company/signup", props);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    validate: async (token: string) => {
      console.log(token);
      return null;
    },

    get_student: async (id: number) => {
      try {
        const response = await api.get(`api/students/${id}`, config);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_students: async (page: number, size?: number) => {
      try {
        const response = await api.get(
          `api/students?page=${page}&size=${size ?? 20}`,
          config
        );
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_company: async (id: number) => {
      try {
        const response = await api.get(`api/company/${id}`, config);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_company_by_name: async (name: string) => {
      try {
        const response = await api.get(
          `api/company/search=ByName?name=${name}`,
          config
        );
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_student_by_name: async (name: string) => {
      try {
        const response = await api.get(
          `api/student/search=ByName?name=${name}`,
          config
        );
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_companies: async (page: number, size?: number) => {
      try {
        const response = await api.get(
          `api/companies?page=${page}&${size ?? 20}`,
          config
        );
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    get_jobs: async (page: number, size?: number) => {
      try {
        const response = await api.get(
          `api/jobs?page=${page}&size=${size ?? 20}`,
          config
        );
        return response;
      } catch (err: any) {
        return err.response;
      }
    },
  };
};
