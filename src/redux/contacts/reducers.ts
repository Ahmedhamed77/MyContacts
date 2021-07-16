import {personContact} from './actions';
import {Reducer} from 'redux';
import {ContactsAction, ContactsReducer} from './types';

export const initialState: ContactsReducer = {
  userContacts: [],
  person: {
    id: 0,
    first_name: '',
    last_name: '',
    country_code: '',
    phone_number: '',
    contact_picture: '',
    is_favorite: false,
  },
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
    case 'PERSON_CONTACT':
      return {
        ...state,
        person: action.contactPerson,
      };
    default:
      return state;
  }
};
