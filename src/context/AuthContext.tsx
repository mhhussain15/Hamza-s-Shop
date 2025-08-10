import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
} | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false
  });

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
      };
      
      setState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false
      });
    }, 1000);
  };

  const register = async (name: string, email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        email,
        name,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
      };
      
      setState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false
      });
    }, 1000);
  };

  const logout = () => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return (
    <AuthContext.Provider value={{ state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};