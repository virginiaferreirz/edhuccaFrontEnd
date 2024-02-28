export type StudentProfileForm = {
  name: string;
  email: string;
  phone: string;
  cpf: number;
  gender: string;
  birth: number;
}

export type StudentProfileUpdateForm = {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: number;
  gender?: string;
  birth?: number;
}
