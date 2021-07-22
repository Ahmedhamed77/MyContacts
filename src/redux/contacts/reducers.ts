import {Reducer} from 'redux';
import {ContactsAction, ContactsReducer} from './types';

export const initialState: ContactsReducer = {
  userContacts: [],
  personContact: [],
  isLoading: false,
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
    case 'CONTACTS_IS_LOADING':
      return {
        ...state,
        isLoading: action.status,
      };
    case 'ADD_NEW_CONTACTS':
      return {
        ...state,
        userContacts: [...state.userContacts, action.newContact],
      };
    case 'UPDATE_USER_CONTACT':
      return {
        ...state,
        userContacts: action.contactPerson,
      };
    case 'FETCH_CONTACT_WITH_ID':
      return {
        ...state,
        personContact: action.contactPerson,
      };
    case 'DELETE_USER_CONTACT':
      return {
        ...state,
        userContacts: state.userContacts.filter(
          contact => contact.id !== action.id,
        ),
      };
    default:
      return state;
  }
};
