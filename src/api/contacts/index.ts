import axios from 'axios';

import {
  LoginPayload,
  LoginResponsePayload,
  RegisterResponsePayload,
  User,
  RegisterPayload,
} from './types';
import {$host} from '../axios';

export const login = async (payload: LoginPayload) => {
  const response = await $host.post<LoginResponsePayload>(
    'auth/login',
    payload,
  );
  return response.data;
};

export const register = async (payload: RegisterPayload) => {
  const response = await $host.post<RegisterResponsePayload>(
    'auth/register',
    payload,
  );
  return response.data;
};
