import axios from 'axios';

import {
  LoginPayload,
  LoginResponsePayload,
  RegisterResponsePayload,
  getContactsPayload,
  User,
  RegisterPayload,
  AddContactPayload,
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
  const response = await $host.get<getContactsPayload[]>('contacts/');
  return response.data;
};

export const addNewContact = async (payload: AddContactPayload) => {
  const response = await $host.post<AddContactPayload>('contacts/', payload);
  console.log(response.data, 'add new contact');
  return response.data;
};

export const updatePersonContact = async (payload: AddContactPayload) => {
  const response = await $host.put<AddContactPayload>(
    `contacts/${payload.id}`,
    payload,
  );
  return response.data;
};
