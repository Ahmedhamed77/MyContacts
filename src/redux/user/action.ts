import {User} from '../../api/contacts/types';
import {AppThunk} from '../store/types';
import {login, register} from '../../api/contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const userIsLoading = (state: boolean) =>
  <const>{
    type: 'USER_IS_LOADING',
    state,
  };

export const getToken = (token: string) =>
  <const>{
    type: 'GET_TOKEN',
    token,
  };

export const getUser = (user: User) =>
  <const>{
    type: 'GET_USER',
    user,
  };

export const userRegister = (user: User) =>
  <const>{type: 'REGISTER_USER', user};

export const userRegistrations =
  (user: User): AppThunk =>
  async dispatch => {
    try {
      const response = await register(user);
      console.log(response, 'response register');
    } catch (error) {
      console.log(error, 'errror');
    }
  };

export const getUserLogin =
  (username: string, password: string): AppThunk =>
  async dispatch => {
    console.log('iam here in getUSer');
    console.log(username, password);
    dispatch(userIsLoading(true));
    try {
      console.log('insidexs');
      const response = await login({username, password});
      console.log(response.token, 'what is here');
      const token = response.token;
      dispatch(getToken(token));
      await AsyncStorage.setItem('token', token);
      dispatch(getUser(response.user));
      console.log(response, 'repsonse');
    } catch (error) {
      Alert.alert('Error , try to enter correct username or password');
      console.log(error, 'login Error');
    }
    dispatch(userIsLoading(false));
  };
