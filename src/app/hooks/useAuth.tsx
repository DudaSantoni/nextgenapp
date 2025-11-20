'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';
import { LoginRequestDTO, RegisterRequestDTO } from '../types/auth';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginRequestDTO) => {
    setLoading(true);
    setError(null);

    try {
      const data = await authService.login(credentials);
      localStorage.setItem('nextgen_token', data.token);
      router.push('/home');
    } catch (err: any) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setError('Email ou senha incorretos.');
      } else {
        setError('Erro ao conectar com o servidor.');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterRequestDTO) => {
    setLoading(true);
    setError(null);

    try {
      await authService.register(userData);
      
      alert('Conta criada com sucesso! Faça login para continuar.');
      router.push('/'); 
    } catch (err: any) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        setError('Dados inválidos ou email já cadastrado.');
      } else {
        setError('Erro ao criar conta. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('nextgen_token');
    router.push('/');
  };

  return {
    login,
    register,
    logout,
    loading,
    error
  };
}