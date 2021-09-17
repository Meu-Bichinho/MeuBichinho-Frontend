import { createContext, ReactNode, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import api from '../services/api';

//informações que vamos salvar do usuário
type User = {
  ngo_id?: string | null;
  ngo_name: string | null;
  email: string | null;
  responsable?: string | null;
  telephone?: string | null;
  about?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  token?: string | null;
};

//informações utilizadas para login
type SignInCredentials = {
  email: string;
  password: string;
};

//tipagem que o context vai ter
type AuthContextData = {
  signIn(credentiasl: SignInCredentials): Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  localStorage.clear();
  window.location.href = '/';
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('@meuBichinhoToken');

    if (token) {
      api
        .get(`/ngo/${localStorage.getItem('@meuBichinhoId')}`)
        .then((response) => {

          setUser({
            ngo_id: response.data.ngo_id,
            ngo_name: response.data.name,
            email: response.data.email,
            responsable: response.data.responsible,
            telephone: response.data.telephone,
            about: response.data.about,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/ngo/login', { email, password });

      localStorage.setItem('@meuBichinhoToken', response.data.token);
      localStorage.setItem('@meuBichinhoName', response.data.ngo_name);
      localStorage.setItem('@meuBichinhoId', response.data.ngo_id);
      toast.loading('Entrando');
      setTimeout(() => {
        toast.success('Login efetuado');
      }, 1000);

      setUser({
        email,
        ngo_id: response.data.ngo_id,
        ngo_name: response.data.ngo_name,
      });

      setTimeout(() => {
        window.location.replace('/manager');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
      <Toaster position="bottom-center" reverseOrder={false} />
    </AuthContext.Provider>
  );
}
