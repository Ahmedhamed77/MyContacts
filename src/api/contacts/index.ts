import axios from 'axios';

import { LoginPayload, LoginResponsePayload } from './types';
import {$host} from '../axios'


export const login = async (payload : LoginPayload) => {
    const response = await $host.post<LoginResponsePayload>('auth/login',payload);
    return response.data;
}