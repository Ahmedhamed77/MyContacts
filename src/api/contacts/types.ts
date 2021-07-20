export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export interface RegisterPayload extends User {}

export interface LoginResponsePayload {
  user: User;
  token: string;
}

export interface RegisterResponsePayload {
  user: User;
}

export interface getContactsPayload {
  country_code: string;
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  contact_picture: string;
  is_favorite: boolean;
}

export interface AddContactPayload {
  id: number;
  country_code: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  contact_picture: string | null;
  is_favorite: boolean;
}
