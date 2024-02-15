import axios from "axios";
import { Login } from "../types/login";
import { StudentSignup } from "../types/studentSignup";
import { CompanySignup } from "../types/companySignup";

const api = axios.create({
    baseURL: import.meta.env.API_BASE_URL,
    timeout: 10000,
});

export const useApi = () => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }

    return {
        login: async (login: Login) => {
            try {
                const response = await api.post('/auth/login', { login } );
                return response
            } catch (e: any) {
                return 'something went wrong'
            } 
        }, 

        student_signup: async (props: StudentSignup) => {
            try {
                const response = await api.post('/auth/student/signup', props);
                return response
            } catch (err: any) {
                return err
            }
        },

        company_signup: async (props: CompanySignup) => {
            try {
                const response = await api.post('/auth/company/signup', props);
                return response
            } catch (err: any) {
                return err
            } 
        },
    }
}

