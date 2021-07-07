import {Reducer} from 'redux';
import {ContactsAction, ContactsReducer} from './types';

export const initialState: ContactsReducer = {
  first_name: '',
  last_name: '',
  contact_picture: '',
  is_favorite: false,
  country_code: '',
  phone_number: '',
  id: 1,
};

export const Contact: Reducer<ContactsReducer, ContactsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return action.contacts;

    default:
      return state;
  }
};
