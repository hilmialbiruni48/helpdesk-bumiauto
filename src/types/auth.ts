
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string; // Phone number with +62 code
  role: 'admin' | 'user';
  password?: string; // Only used internally for mock auth
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface UserFormData {
  email: string;
  name: string;
  phone: string; // Phone number with +62 code
  role: 'admin' | 'user';
}
