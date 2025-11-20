import api from '../lib/api';
import { LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, UsuarioResponseDTO } from '../types/auth';

export const authService = {
  login: async (credentials: LoginRequestDTO): Promise<LoginResponseDTO> => {
    const { data } = await api.post<LoginResponseDTO>('/usuarios/auth', credentials);
    return data;
  },

  register: async (userData: RegisterRequestDTO): Promise<UsuarioResponseDTO> => {
    const { data } = await api.post<UsuarioResponseDTO>('/usuarios/register', userData);
    return data;
  },
};