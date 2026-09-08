import api from './api';
import { LoginCredentials, AuthResponse, User } from '@/types';

const authService = {
  register: async (data: any): Promise<AuthResponse> => {
    return api.post('/auth/register', data);
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return api.post('/auth/login', credentials);
  },

  logout: async (): Promise<void> => {
    return api.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    return api.get('/auth/me');
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    return api.put('/auth/profile', data);
  },

  changePassword: async (oldPassword: string, newPassword: string): Promise<void> => {
    return api.post('/auth/change-password', { oldPassword, newPassword });
  },
};

export default authService;