import {AddContactPayload} from '../../api/contacts/types';

export const addContactToFav = (contact: AddContactPayload) =>
  <const>{
    type: 'ADD_CONTACT_TO_FAV',
    contact,
  };

export const removeContactToFav = (contact: AddContactPayload) =>
  <const>{
    type: 'REMOVE_CONTACT_FROM_FAV',
    contact,
  };
