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

export const getToken = (token: string | null) =>
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
    dispatch(userIsLoading(true));
    try {
      const response = await login({username, password});
      const token = response.token;
      dispatch(getToken(token));
      await AsyncStorage.setItem('token', token);
      dispatch(getUser(response.user));
    } catch (error) {
      Alert.alert(
        'Invalid UserName or Password',
        'Try to enter correct userName or password ',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {}},
        ],
      );
      console.log(error, 'login Error');
    }
    dispatch(userIsLoading(false));
  };
