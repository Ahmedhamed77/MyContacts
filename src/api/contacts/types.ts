export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

export interface RegisterPayload extends User {}

export interface LoginResponsePayload {
  user: User;
  token: string;
}

export interface RegisterResponsePayload {
  user: User;
}
