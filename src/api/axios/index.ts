import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const url = 'https://truly-contacts.herokuapp.com/api/';

const baseURL = url;

export const $host = axios.create({
  baseURL,
});

//axios interceptor
$host.interceptors.request.use(
  async config => {
    const token: any = await AsyncStorage.getItem('token');
    if (!config.headers.Authorization) {
      console.log('request interceptors');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error),
);
