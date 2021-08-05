import {Reducer} from 'redux';
import {ContactsAction, ContactsReducer} from './types';

export const initialState: ContactsReducer = {
  userContacts: [],
  isLoading: false,
};

export const contacts: Reducer<ContactsReducer, ContactsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        userContacts: action.contacts,
      };
    case 'CONTACTS_IS_LOADING':
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
};
