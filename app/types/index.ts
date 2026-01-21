export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface List {
  id: string;
  user_id: string;
  name: string;
  color?: string;
  created_at: string;
}

export interface Task {
  id: string;
  list_id?: string;
  user_id: string;
  title: string;
  description?: string;
  completed: boolean;
  due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export interface ApiError {
  error: string;
  message: string;
}
