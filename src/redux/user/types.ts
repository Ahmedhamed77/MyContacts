import {User} from '../../api/contacts/types';
import {getToken, getUser, userIsLoading, userRegister} from './action';

export type UserAction =
  | ReturnType<typeof getUser>
  | ReturnType<typeof userRegister>
  | ReturnType<typeof getToken>
  | ReturnType<typeof userIsLoading>;

export interface UserReducer extends UserType {
  user: User;
  isLoading: boolean;
  token: string | null;
}

export type UserType = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
