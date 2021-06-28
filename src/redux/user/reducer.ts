import {Reducer} from 'redux';
import {UserAction, UserReducer} from './types';

export const initialState: UserReducer = {
  isLoading: false,
  username: '',
  first_name: '',
  last_name: '',
  email: '',
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
