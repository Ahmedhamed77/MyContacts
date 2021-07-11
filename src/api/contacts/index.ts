import axios from 'axios';

import {
  LoginPayload,
  LoginResponsePayload,
  RegisterResponsePayload,
  getContactsPayload,
  User,
  RegisterPayload,
} from './types';
import {$host} from '../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getContacts = async () => {
  const token: any = await AsyncStorage.getItem('token');
  const response = await $host.get<getContactsPayload>('contacts/', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response.data;
};
