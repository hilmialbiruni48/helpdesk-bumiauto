
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration - in production, this would be handled by Supabase
const mockUsers = [
  { id: '1', email: 'admin@company.com', password: 'admin123', name: 'Admin User', phone: '+6281234567890', role: 'admin' as const },
  { id: '2', email: 'user@company.com', password: 'kerjaibadah', name: 'Regular User', phone: '+6281234567891', role: 'user' as const },
  { id: '3', email: 'alice@company.com', password: 'kerjaibadah', name: 'Alice Johnson', phone: '+6281234567892', role: 'user' as const },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('helpdesk_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in production, this would be handled by Supabase
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userWithoutPassword = { 
        id: foundUser.id, 
        email: foundUser.email, 
        name: foundUser.name, 
        phone: foundUser.phone,
        role: foundUser.role 
      };
      setUser(userWithoutPassword);
      localStorage.setItem('helpdesk_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('helpdesk_user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
