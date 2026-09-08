import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  updateUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('authToken'),
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('authToken'),
  
  login: (user: User, token: string) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({
      user,
      token,
      isAuthenticated: true,
    });
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },
  
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  
  updateUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
}));