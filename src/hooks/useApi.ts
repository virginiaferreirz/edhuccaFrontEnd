import axios from "axios";
import { StudentSignup } from "../types/studentSignup";
import { CompanySignup } from "../types/companySignup";
import { StudentProfileUpdateForm } from "../types/studentProfile";
import { JobForm } from "../types/job";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
        const response = await api.post("/auth/student/register", props);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },

    company_signup: async (props: CompanySignup) => {
      try {
        const response = await api.post("/auth/company/register", props);
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

    update_student: async (
      id: number,
      { name, email, cpf, birth, phone, gender }: StudentProfileUpdateForm
    ) => {
      try {
        const response = await api.patch(
          `api/students/${id}`,
          { name, email, cpf, birth, phone, gender },
          config
        );
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

    post_job: async (job: JobForm) => {
      try {
        const response = await api.post("/jobs/create", { job }, config);
        return response;
      } catch (err: any) {
        return err.response;
      }
    },
    get_courses: async (page?: number, size?: number) => {
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
    get_skills: async (page?: number, size?: number) => {
      let response;
      try {
        if (page || size) {
          response = await api.get(
            `api/jobs?page=${page ?? 0}&size=${size ?? 20}`,
            config
          );
        } else {
          response = await api.get("api/jobs");
        }

        return response;
      } catch (err: any) {
        return err.response;
      }
    },
  };
};
