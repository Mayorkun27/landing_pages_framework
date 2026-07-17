export interface RouteHandle {
    pageName: string;
}

export interface UserProps {
  id: number;
  username?: string;
  first_name: string;
  full_name?: string;
  last_name: string;
  email: string;
  is_admin?: number;
  role: string;
  enabled?: number;
  created_at?: string;
  updated_at?: string;
  is_verified?: number;
}

export interface BankProps {
  name: string;
  code: string;
}