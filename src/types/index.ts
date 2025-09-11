export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface RestoredImage {
  id: string;
  originalUrl: string;
  restoredUrl: string;
  filename: string;
  uploadDate: string;
  userId: string;
  processingTime: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}