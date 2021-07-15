import {Reducer} from 'redux';
import {ContactsAction, ContactsReducer} from './types';

export const initialState: ContactsReducer = {
  userContacts: [],
};

export const contact: Reducer<ContactsReducer, ContactsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        userContacts: action.contacts,
      };
    case 'ADD_NEW_CONTACTS':
      return {
        ...state,
        userContacts: [...state.userContacts, action.newContact],
      };
    default:
      return state;
  }
};
