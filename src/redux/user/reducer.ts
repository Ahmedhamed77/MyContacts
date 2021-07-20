import {Reducer} from 'redux';
import {UserAction, UserReducer} from './types';

export const initialState: UserReducer = {
  user: {},
  isLoading: false,
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  token: null,
};

export const user: Reducer<UserReducer, UserAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'USER_IS_LOADING': {
      return {
        ...state,
        isLoading: action.state,
      };
    }
    case 'GET_USER': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'REGISTER_USER': {
      return {
        ...state,
        action: action.user,
      };
    }

    default:
      return state;
  }
};
